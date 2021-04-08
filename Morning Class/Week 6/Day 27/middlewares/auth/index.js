const passport = require("passport"); // Import passport
const LocalStrategy = require("passport-local").Strategy; // Import LocalStrategy
const bcrypt = require("bcrypt"); // Import bcrypt (excrypt and comparePassword)
const JWTstrategy = require("passport-jwt").Strategy; // Import JWT Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt; // Import ExtractJWT
const { user } = require("../../models"); // Import user model

exports.signup = (req, res, next) => {
  // It will go to ../middlewares/auth/index.js -> passport.use("signup")
  passport.authenticate("signup", { session: false }, (err, user, info) => {
    // After go to ../middlewares/auth/index.js -> passport.use("signup")
    // It will bring the variable from done() function
    // Like err = null, user = false, info = { message: "User can't be creted" }
    // Or err = null, user = userSignUp, info = { message: "User can be creted" }

    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If user is false
    if (!user) {
      return res.status(401).json({
        message: info.message,
      });
    }

    // Make req.user that will be save the user value
    // And it will bring to controller
    req.user = user;

    // Next to authController.getToken
    next();
  })(req, res, next);
};

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
        return done(null, userSignUp, {
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

exports.signin = (req, res, next) => {
  // It will go to ../middlewares/auth/index.js -> passport.use("signin")
  passport.authenticate("signin", { session: false }, (err, user, info) => {
    // After go to ../middlewares/auth/index.js -> passport.use("signin")
    // It will bring the variable from done() function
    // Like err = null, user = false, info = { message: "User can't be creted" }
    // Or err = null, user = userSignUp, info = { message: "User can be creted" }

    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If user is false
    if (!user) {
      return res.status(401).json({
        message: info.message,
      });
    }

    // Make req.user that will be save the user value
    // And it will bring to controller
    req.user = user;

    // Next to authController.getToken
    next();
  })(req, res, next);
};

// If user call this passport
passport.use(
  "signin",
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
        let userSignIn = await user.findOne({ email });

        // If user doesn't exist
        if (!userSignIn) {
          return done(null, false, {
            message: "Email not found",
          });
        }

        // If user exist
        let validate = await bcrypt.compare(password, userSignIn.password);

        // If password is wrong
        if (!validate) {
          return done(null, false, {
            message: "Wrong password",
          });
        }

        // If create user success, it will make
        // err = null
        // user = userSignUp
        // info = { message: "User can be creted" }
        return done(null, userSignIn, {
          message: "User can sign in",
        });
      } catch (e) {
        console.log(e);
        // If create user failed, it will make
        // err = null
        // user = false
        // info = { message: "User can't be creted" }
        return done(null, false, {
          message: "User can't sign in",
        });
      }
    }
  )
);

exports.admin = (req, res, next) => {
  // It will go to ../middlewares/auth/index.js -> passport.use("signup")
  passport.authorize("admin", (err, user, info) => {
    // After go to ../middlewares/auth/index.js -> passport.use("signup")
    // It will bring the variable from done() function
    // Like err = null, user = false, info = { message: "User can't be creted" }
    // Or err = null, user = userSignUp, info = { message: "User can be creted" }

    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If user is false
    if (!user) {
      return res.status(403).json({
        message: info.message,
      });
    }

    // Make req.user that will be save the user value
    // And it will bring to controller
    req.user = user;

    // Next to authController.getToken
    next();
  })(req, res, next);
};

passport.use(
  "admin",
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET, // JWT Key
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // Get token from bearer
    },
    async (token, done) => {
      try {
        // Find user
        const userLogin = await user.findOne({ _id: token.user.id });

        // If user is admin
        if (userLogin.role.includes("admin")) {
          return done(null, token.user);
        }

        return done(null, false, {
          message: "You're not authorized",
        });
      } catch (e) {
        return done(null, false, {
          message: "You're not authorized",
        });
      }
    }
  )
);
