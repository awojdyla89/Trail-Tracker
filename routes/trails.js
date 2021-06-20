const router = require('express').Router();
const trailsCtrl = require('../controllers/trails');

// index.ejs in trails view - /trails/ 
router.get('/', trailsCtrl.index);

//this is /trails/new
//view form to create new trail - /trails/new
router.get('/new', trailsCtrl.new);

//this is /trails/ in the new.ejs
router.post('/', trailsCtrl.create);

// this is /trails/:id in the ratings.ejs
router.get('/:id', trailsCtrl.show)

// router.post('trails/:id', ratingsCtrl.create);



module.exports = router;