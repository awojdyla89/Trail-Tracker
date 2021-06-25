const User = require("../models/user");
const Trail = require("../models/trail");

module.exports = {
  index,
  new: newTrail,
  create,
  show,
  delete: deleteTrail,
  edit,
  update,
};

function update(req, res) {
  Trail.findById(req.params.id, function (err, trail) {
    if (!trail.usersTrail.equals(req.user.id)) return res.redirect("/trails");

    trail.trailName = req.body.trailName;

    trail.save(function (err) {
      res.redirect(`/trails/${trail._id}`);
    });
  });
}

function edit(req, res) {
  Trail.findById(req.params.id, function (err, trail) {
    if (!trail.usersTrail.equals(req.user.id)) return res.redirect("/trails");

    res.render("trails/edit", { trail });
  });
}

function deleteTrail(req, res) {
  Trail.findByIdAndDelete(req.params.id, function () {
    res.redirect("/trails");
  });
}

function show(req, res) {
  Trail.findById(req.params.id, function (err, trailDocuments) {
    res.render("trails/ratings", {
      trail: trailDocuments,
      user: req.user,
    });
  });
}

function create(req, res) {
  const trail = new Trail(req.body);
  trail.user = req.user._id;
  trail.userId = req.user._id;
  trail.usersTrail = req.user._id;

  trail.save(function (err) {
    if (err) return res.redirect("/trails/new");
    res.redirect("/trails");
  });
}

function index(req, res) {
  Trail.find({}, function (err, trailDocuments) {
    res.render("trails/index", {
      trails: trailDocuments,
    });
  });
}

function newTrail(req, res) {
  res.render("trails/new");
}
