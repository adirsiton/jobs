const express = require('express');
const router  = express.Router();
const passport = require('passport');
const db = require('../../db');
const WITH_RAMAD_ACCESS = process.env.WITH_RAMAD_ACCESS;

router.get('/login', passport.authenticate('OAuth2', {scope: 'read:user'}, (req, res) => {
    const redirectURI = req.query.redirect || '/';
    res.redirect(redirectURI);
}));

const getUserDetails = async (id, displayName) => {
  const { rows } = await db.query(`
  WITH inserted AS (
      INSERT INTO jobs.users (upn, display_name)
      VALUES ($1, $2)
      ON CONFLICT (upn) DO UPDATE SET display_name=$2,last_entrance=NOW()
  )
  SELECT users.upn, display_name as name,
      (CASE WHEN ramads.user_id IS null THEN false ELSE true END) as is_ramad
  FROM jobs.users users
  LEFT JOIN jobs.department_head as ramads ON ramads.user_id=$1
  WHERE users.upn=$1
  GROUP BY users.upn, display_name, ramads.user_id
  `, [id, displayName]);

  return rows[0];
}

router.get('/auth/callback',
  passport.authenticate('OAuth2', { failureRedirect: '/bad' }),
  async function(req, res) {
    // Successful authentication
    const user = await getUserDetails(req.user, req.user); // On whiten we'll take the display take from ping

    const isRamad = checkIsRamad(WITH_RAMAD_ACCESS, user.is_ramad);
    
    res.cookie('user', JSON.stringify({
        upn: user.upn,
        name: user.name,
        isRamad
    }));

    // redirect home
    res.redirect('/');
  });

module.exports = router;

const checkIsRamad = (envIsRamad, userIsRamad) => {
    // Giving a priority to the env variable if given,
    // otherwise returning the answer from the DB.
    if (envIsRamad === 'true') {
        return true;
    } else if (envIsRamad === 'false') {
        return false;  
    } else {
      return userIsRamad;
    }
} 