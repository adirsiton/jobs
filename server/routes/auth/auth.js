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
    SELECT COUNT(user)
    FROM jobs.department_head as ramads
    WHERE ramads.user = $1
  `, [id]);

  return (rows[0] > 0);
}

router.get('/auth/callback',
  passport.authenticate('OAuth2', { failureRedirect: '/bad' }),
  function(req, res) {
    // Successful authentication

    // Check Ramad access
    if (checkIsAdmin(req.user)) {
      req.session.admin = true;
      req.admin = true;
    }

    // redirect home
    res.redirect('/');
  });

module.exports = router;