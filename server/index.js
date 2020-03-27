const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require("express-session");
const pino = require('express-pino-logger')();
const proxy = require("express-http-proxy");
const passport = require('passport');
// const OAuth2Strategy = require('passport-oauth2'); will be needed after whiten
const loginRouter = require('./routes/auth/auth');
const GitHubStrategy = require('passport-github').Strategy;

require('dotenv').config();
const port = process.env.PORT || 3001;
const webappUrl= process.env.WEBAPP_URL || "http://localhost:3000";
const sessionSecret = process.env.SESSION_SECRET || "secret_session_shhh";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(
  session({
    secret: sessionSecret,
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use('OAuth2', new GitHubStrategy({
  // authorizationURL: 'https://github.com/login/oauth/authorize', will be needed after whiten
  // tokenURL: 'https://github.com/login/oauth/access_token', will be needed after whiten
  clientID: process.env.OAUTH_CLIENT_ID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  callbackURL: process.env.OAUTH_CALLBACK_URL,
}, (accessToken, refreshToken, profile, cb) => {
  console.log("got authenticated", profile.username);
  return cb(null, profile.username);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(name, cb) {
  cb(null, name);
});

app.use("/", loginRouter);

// Accept only authenticated requests, if not redirect to login
app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    console.log('Unauthenticated request, redirecting to login');
    res.redirect('/login?redirect='+req.originalUrl)
  }
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// proxy to the webapp
app.get("*", proxy(webappUrl));

app.listen(port, () =>
  console.log('Express server is running on port ' + port)
);