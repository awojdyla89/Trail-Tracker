
// file path in controller starts with the view directory
const User = require('../models/user');
const Trail = require('../models/trail');

module.exports = {
  index,
  new: newTrail,
  create,
  show
  
};

// shows the details of each trail on the ratings.ejs
function show(req, res){
  Trail.findById(req.params.id, function(err, trailDocuments){
    res.render('trails/ratings', {
      trail: trailDocuments,
      user: req.user
    })
  })
}

function create(req, res){

  const trail = new Trail(req.body);
  trail.user = req.user._id;
  trail.userId = req.user._id;
  trail.save(function(err){
    if (err) return res.redirect('/trails/new');
    res.redirect('/trails');
  })
  console.log(trail);
}

function index(req, res){

  Trail.find({}, function(err, trailDocuments){
    
    res.render('trails/index', {
      trails: trailDocuments
    })
  })
    console.log("HITTING controller-trails-index()")
  
}

function newTrail(req, res){
  res.render('trails/new');
}
