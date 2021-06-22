const router = require('express').Router();
const usersCtrl = require('../controllers/users');


router.get('/users', usersCtrl.index);
// router.post('/facts', isLoggedIn, usersCtrl.addFact);

// authorizing the user to use a route
// probably only want to use this on post, put or delete routes
function isLoggedIn(req, res, next) {
    // req.isAuthenticated() given to us by passport it return true or false 
    if ( req.isAuthenticated() ) return next(); // if next() go to the next function in middleware
    res.redirect('/auth/google');
  }



module.exports = router;