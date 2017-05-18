var User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

getUsers = (req,res) => {
  User.find({}).then((user)=>{
    res.send(user)
  })
}

getOneUser = (req,res) => {
  let user = req.user
  User.findOne({_id: user._id})
  .populate('articles')
  .exec((err,user)=>{
    if(err) res.send(err)
    res.send(user)
  })
}

createUser = (req,res) => {
  var user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  user.save((err,user)=>{
    if(err) res.send(err)
    res.send(user)
  })
}

createToken = (req,res) => {
  User.findOne({username: req.user.username}, (err, user)=>{
    if(err) res.send(err)
    res.send(jwt.sign({
      _id: user._id,
      username: user.username
    }, 'secret', {expiresIn: '1h'}))
  })
}

module.exports = {getUsers, getOneUser, createUser, createToken};
