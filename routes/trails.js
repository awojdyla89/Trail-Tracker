const router = require('express').Router();
const trailsCtrl = require('../controllers/trails');

// index.ejs in trails view - /trails/ 
router.get('/', trailsCtrl.index);

//this is /trails/new
//view form to create new trail - /trails/new
router.get('/new', trailsCtrl.new);



module.exports = router;