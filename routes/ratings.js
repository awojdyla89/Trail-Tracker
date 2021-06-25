const router = require("express").Router();
const trailsCtrl = require("../controllers/trails");
const ratingsCtrl = require("../controllers/ratings");

// /ratings/id in ratings.ejs
router.post("/:id", isLoggedIn, ratingsCtrl.create);

///ratings/id in ratings.ejs
router.delete("/:id", isLoggedIn, ratingsCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
