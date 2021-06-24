const router = require('express').Router();
const trailsCtrl = require('../controllers/trails');

// index.ejs in trails view - /trails/ 
router.get('/', isLoggedIn, trailsCtrl.index);

//this is /trails/new
//view form to create new trail - /trails/new
router.get('/new', isLoggedIn, trailsCtrl.new);

// this is /trails/:id in the ratings.ejs
router.get('/:id', isLoggedIn, trailsCtrl.show)


//this is /trails/ in the new.ejs
router.post('/', isLoggedIn, trailsCtrl.create);


// this is /trails/id in the index.ejs
router.delete('/:id', isLoggedIn, trailsCtrl.delete);

// this is /trails/id/edit in the index.ejs
router.get('/:id/edit', isLoggedIn, trailsCtrl.edit);


router.put('/:id', isLoggedIn, trailsCtrl.update);




// authorizing the user to use a route
// probably only want to use this on post, put or delete routes
// create, update, delete 
function isLoggedIn(req, res, next) {
    // req.isAuthenticated() given to us by passport it return true or false 
    if ( req.isAuthenticated() ) return next(); // if next() go to the next function in middleware
    res.redirect('/auth/google');
  }


module.exports = router;