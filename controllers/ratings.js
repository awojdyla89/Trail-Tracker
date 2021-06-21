// file path in controller starts with the view directory
const User = require('../models/user');
const Trail = require('../models/trail');

module.exports = {
  
  create
  
};

 function create(req, res){
Trail.findById(req.params.id, function(err, trailDocuments){
    req.body.userId = req.user._id;
    req.body.raterName = req.user.name;

    //add the comment
    trailDocuments.ratings.push(req.body);
    trailDocuments.save(function(err){
        res.redirect(`/trails/${trailDocuments._id}`);
    })
})


 }