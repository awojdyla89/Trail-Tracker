const User = require('../models/user');

module.exports = {
  index,
  addFact
};

function addFact(req, res){
  req.user.facts.push(req.body);
  //req.user is a mongoose documents
  // we assigned the monggose document in passport.js in passport.deserializeUser()
  req.user.save(function(err){
    res.redirect('/users');
  })
}

function index(req, res, next) {
  console.log(req.query)
  console.log(req.user)
  // Make the query object to use with user.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('users/index', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}