var router = require("express").Router();
const passport = require("passport");

// root route
router.get("/", function (req, res) {
  res.redirect("/users");
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/trails", // where do you want the client to go after you login
    failureRedirect: "/", // where do you want the client to go if login fails
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  //res.redirect('/users');
  res.redirect("/users");
});

module.exports = router;
