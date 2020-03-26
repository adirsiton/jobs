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



const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(
  session({
    secret: "i love my job",
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
  clientID: "2c29d26a0e4bd9ee8c35",
  clientSecret: "28add6baf72c63bcca938dc94660ab92c3374af4",
  callbackURL: "http://localhost:3001/auth/callback",
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

app.get("*", proxy("http://localhost:3000"));

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);