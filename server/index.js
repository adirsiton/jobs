const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require("express-session");
const pino = require('express-pino-logger')();
const path = require('path');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const proxy = require("express-http-proxy"); // For development
// const OAuth2Strategy = require('passport-oauth2'); will be needed after whiten
const loginRouter = require('./routes/auth/auth');
const appRouter = require('./routes/router');



require('dotenv').config();
const port = process.env.SERVER_PORT || 3001;
const sessionSecret = process.env.SESSION_SECRET || "secret_session_shhh";
const webappUrl= process.env.WEBAPP_URL || "http://localhost:3000"; // For development
const staticFilesLocation = process.env.STATIC_FILES_LOCATION || "../build";
const staticCalculatedLocation = path.join(__dirname, staticFilesLocation);

const app = express();
app.use(cors());
app.use(bodyParser.json());
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

// The only routes that are unauthenticated open
app.use(loginRouter);

// Accept only authenticated requests, if not redirect to login
app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    console.log('Unauthenticated request, redirecting to login');
    res.redirect('/login?redirect='+req.originalUrl)
  }
});

app.use(appRouter);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

if (process.env.NODE_ENV === 'development') { //DELETE
  app.get("*", proxy(webappUrl));
} else {
  app.use(express.static(staticCalculatedLocation));
}

app.listen(port, () => { 
  console.log('Express server is running on port ' + port);
  console.log(process.env.NODE_ENV !== 'development' 
    ? `Serving static files from ${staticCalculatedLocation}`
    : `Serving static files via proxy from ${webappUrl}`);
});