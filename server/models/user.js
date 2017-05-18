const mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
  username: String,
  password: String,
  articles: [{type: Schema.Types.ObjectId, ref: 'Article'}]
})

module.exports = mongoose.model('User', userSchema);