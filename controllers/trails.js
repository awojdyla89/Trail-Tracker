
// file path in controller starts with the view directory
const User = require('../models/user');
const Trail = require('../models/trail');

module.exports = {
  index,
  new: newTrail,
  create,
  show, 
  delete: deleteTrail
  
};

function deleteTrail(req, res){
  Trail.findByIdAndDelete(req.params.id, function(){
    res.redirect('/trails');
  })
}

// shows the details of each trail on the ratings.ejs
function show(req, res){
  Trail.findById(req.params.id, function(err, trailDocuments){
    res.render('trails/ratings', {
      trail: trailDocuments,
      user: req.user
    })
  })
}

//  form is used in the new.ejs page 
function create(req, res){
console.log("HITS THE CREATE in new.ejs")
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
  console.log("HITS THE INDEX in index.ejs")

  Trail.find({}, function(err, trailDocuments){
    
    res.render('trails/index', {
      trails: trailDocuments
    })
  })
  
}

function newTrail(req, res){
  res.render('trails/new');
}
