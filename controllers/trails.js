
// file path in controller starts with the view directory
const User = require('../models/user');
const Trail = require('../models/trail');

module.exports = {
  index,
  new: newTrail
  
};

function index(req, res){
    console.log("HITTING controller-trails-index()")
    //res.send('responding with resource!!')
    res.render('trails/index')
}

function newTrail(req, res){
  res.render('trails/new');
}
