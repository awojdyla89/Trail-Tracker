const router = require('express').Router();
const trailsCtrl = require('../controllers/trails');
const ratingsCtrl = require('../controllers/ratings');


// this is /trails/id for comments in the ratings.ejs
router.post('/:id', isLoggedIn, ratingsCtrl.create);





// authorizing the user to use a route
// probably only want to use this on post, put or delete routes
function isLoggedIn(req, res, next) {
    // req.isAuthenticated() given to us by passport it return true or false 
    if ( req.isAuthenticated() ) return next(); // if next() go to the next function in middleware
    res.redirect('/auth/google');
  }

module.exports = router;