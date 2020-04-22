const express = require('express');
const router  = express.Router();
const passport = require('passport');
const db = require('../../db');

router.get('/login', passport.authenticate('OAuth2', {scope: 'read:user'}, (req, res) => {
    const redirectURI = req.query.redirect || '/';
    res.redirect(redirectURI);
}));

// const checkIsAdmin = async (id) => {
//   const { rows } = await db.query(`
//   SELECT COUNT(user_id)
//   FROM jobs.department_head as ramads
//   WHERE ramads.user_id = $1
//   `, [id]);

//   return (parseInt(rows[0]) > 0);
// }

const getUserDetails = async (id, displayName) => {
  const { rows } = await db.query(`
  WITH inserted AS (
      INSERT INTO jobs.users (upn, display_name)
      VALUES ($1, $2)
      ON CONFLICT (upn) DO UPDATE SET display_name=$2,last_entrance=NOW()
  )
  SELECT users.upn, display_name as name, array_agg(favorite_ads_of_users.advertisement_id) as favorite_ads,
  (CASE WHEN ramads.user_id IS null THEN false ELSE true END) as is_ramad
  FROM jobs.users users
    LEFT JOIN jobs.favorite_ads_of_users favorite_ads_of_users ON favorite_ads_of_users.upn=$1  
    LEFT JOIN jobs.department_head as ramads ON ramads.user_id=$1
    WHERE users.upn=$1
    GROUP BY users.upn, display_name, ramads.user_id
  `, [id, displayName]);

  return rows[0];
}

router.get('/auth/callback',
  passport.authenticate('OAuth2', { failureRedirect: '/bad' }),
  async function(req, res) {
    // Successful 
    const user = await getUserDetails(req.user, req.user); // On whiten we'll take the display take from ping

    const { favorite_ads } = user;
    const favoriteAds = favorite_ads[0] === null? [] : favorite_ads;

    /* todo detrmine isRamad acording to WITH_RAMAD_ACCESS from '.env'
    giving priority to the .env variable, need to convert string to boolean to*/
    console.log('in auth/callback')
    res.cookie('user', JSON.stringify({
        upn: user.upn,
        name: user.name,
        isRamad: user.is_ramad,
        favoriteAds
    }));

    // redirect home
    res.redirect('/');
  });

module.exports = router;