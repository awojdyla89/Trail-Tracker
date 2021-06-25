const router = require("express").Router();
const trailsCtrl = require("../controllers/trails");

// /trails/ in index.ejs
router.get("/", isLoggedIn, trailsCtrl.index);

// /trails/new in new.ejs
router.get("/new", isLoggedIn, trailsCtrl.new);

// /trails/:id in ratings.ejs
router.get("/:id", isLoggedIn, trailsCtrl.show);

// /trails/ in new.ejs
router.post("/", isLoggedIn, trailsCtrl.create);

// /trails/id in index.ejs
router.delete("/:id", isLoggedIn, trailsCtrl.delete);

// /trails/id/edit in index.ejs
router.get("/:id/edit", isLoggedIn, trailsCtrl.edit);

// /trails/id in edit.ejs
router.put("/:id", isLoggedIn, trailsCtrl.update);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
