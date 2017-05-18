var User = require('../models/user')
const bcrypt = require('bcrypt');

validate = (username, password, next) => {
  User.findOne({username: username}), (err,user)=>{
    if(err || user === null){
      return next(null, false, {message: 'Incorrect username.'})
    } else {
      bcrypt.compare(password, user.password, (err,res)=>{
        if(err || res === false){
          return next(null, false, {message: 'Incorrect password'})
        } else if (res === true){
          return next(null, user)
        }
      })
    }
  }
}

module.exports = validate;