const passport = require("passport"); // Import passport
const LocalStrategy = require("passport-local").Strategy; // Import LocalStrategy
const bcrypt = require("bcrypt"); // Import bcrypt (excrypt and comparePassword)
const JWTstrategy = require("passport-jwt").Strategy; // Import JWT Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt; // Import ExtractJWT
const { user } = require("../../models"); // Import user model

// If user call this passport
passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email", // usernameField is come from req.body.email
      passwordField: "password", // passwordField is come from req.body.password
      passReqToCallback: true, // enable to read req.body/req.params/req.query
    },
    async (req, email, password, done) => {
      try {
        // After user call this passport
        // It will run this method and create the user depends on req.body
        let userSignUp = await user.create(req.body);

        // If create user success, it will make
        // err = null
        // user = userSignUp
        // info = { message: "User can be creted" }
        return done(null, `userSignUp`, {
          message: "User can be created",
        });
      } catch (e) {
        // If create user failed, it will make
        // err = null
        // user = false
        // info = { message: "User can't be creted" }
        return done(null, false, {
          message: "User can't be created",
        });
      }
    }
  )
);
