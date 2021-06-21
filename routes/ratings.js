const router = require('express').Router();
const trailsCtrl = require('../controllers/trails');
const ratingsCtrl = require('../controllers/ratings');



router.post('/:id', ratingsCtrl.create);


module.exports = router;