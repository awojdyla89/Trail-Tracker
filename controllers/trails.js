const User = require('../models/trail');

module.exports = {
  index
  
};

function index(req, res){
    console.log("HITTING controller-trails-index()")
    //res.send('responding with resource!!')
    res.render('trails')
}