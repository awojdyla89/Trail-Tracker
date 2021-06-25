const User = require("../models/user");
const Trail = require("../models/trail");

module.exports = {
  create,
  delete: deleteRating,
};

function deleteRating(req, res) {
  Trail.findOne({ "ratings._id": req.params.id }, function (err, trail) {
    const ratingSubdoc = trail.ratings.id(req.params.id);

    if (!ratingSubdoc.userId.equals(req.user._id))
      return res.redirect(`/trails/${trail._id}`);

    ratingSubdoc.remove();

    trail.save(function (err) {
      res.redirect(`/trails/${trail._id}`);
    });
  });
}

function create(req, res) {
  if (req.body.date == "") {
    let defaultDate = new Date();
    req.body.date = defaultDate;
  }

  Trail.findById(req.params.id, function (err, trailDocuments) {
    req.body.userId = req.user._id;
    req.body.raterName = req.user.name;

    trailDocuments.ratings.push(req.body);
    trailDocuments.save(function (err) {
      res.redirect(`/trails/${trailDocuments._id}`);
    });
  });
}
