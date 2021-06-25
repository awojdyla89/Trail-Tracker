const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
//Require your User Model here!
const User = require("../models/user");

// configuring Passport!
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      // a user has logged in via OAuth!
      console.log(profile, "<--- Profile!");
      // refer to the lesson plan from earlier today in order to set this up
      User.findOne({ googleId: profile.id }, function (err, userDoc) {
        if (err) return cb(err);

        if (userDoc) {
          return cb(null, userDoc);
        } else {
          const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });

          newUser.save(function (err) {
            if (err) return cb(err);

            return cb(null, newUser);
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, userDoc) {
    done(err, userDoc);
  });
});
