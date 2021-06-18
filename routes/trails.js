const router = require('express').Router();
const trailsCtrl = require('../controllers/trails');

// this is /trails/ server.js has /trails defined already
router.get('/', trailsCtrl.index);
router.get('/new', trailsCtrl.new);



module.exports = router;