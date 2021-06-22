
// file path in controller starts with the view directory
const User = require('../models/user');
const Trail = require('../models/trail');

module.exports = {
  index,
  new: newTrail,
  create,
  show, 
  delete: deleteTrail,
  edit,
  update
  
};

function update(req, res){

     // Note the cool "dot" syntax to query on the property of a subdoc
     Trail.findById(req.params.id, function(err, trail) {
      // if (!trail.userId.equals(req.user._id)) return res.redirect("/trails");
      console.log(req.body.name, "REQQQQQQQQQQQQQQ")
      trail.trailName = req.body.trailName
       
      trail.save(function(err) {
        res.redirect(`/trails/${trail._id}`);
      });
    });
}

function edit(req, res){

  Trail.findById(req.params.id, function(err, trail){
    //console.log("userID: !!!!!>>>>", trail.userId, "user._id: ", req.user._id)
    // if(!trail.userId.equals(req.user._id)) return res.redirect('/trails');
    res.render('trails/edit', {trail});
  })
}

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
