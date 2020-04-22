const express = require('express');
const router  = express.Router();
const passport = require('passport');
const db = require('../../db');

router.get('/login', passport.authenticate('OAuth2', {scope: 'read:user'}, (req, res) => {
    const redirectURI = req.query.redirect || '/';
    res.redirect(redirectURI);
}));

const checkIsAdmin = async (id) => {
  const { rows } = await db.query(`
  SELECT COUNT(user_id)
  FROM jobs.department_head as ramads
  WHERE ramads.user_id = $1
  `, [id]);

  return (parseInt(rows[0]) > 0);
}

const getUserDetails = async (id, displayName) => {
  const { rows } = await db.query(`
    INSERT INTO jobs.users (upn, display_name)
    VALUES ($1, $2)
    ON CONFLICT (upn) DO UPDATE SET last_entrance = NOW()
    RETURNING *
  `, [id, displayName]);

  return rows[0];
}

router.get('/auth/callback',
  passport.authenticate('OAuth2', { failureRedirect: '/bad' }),
  async function(req, res) {
    // Successful authentication
    const user = await getUserDetails(req.user, req.user); // On whiten we'll take the display take from ping

    // Check Ramad access
    const isRamad = await checkIsAdmin(req.user);
    req.session.admin = isRamad;

    res.cookie('user', JSON.stringify({
      upn: user.upn,
      displayName: user.display_name,
      isRamad
    }));

    // redirect home
    res.redirect('/');
  });

module.exports = router;