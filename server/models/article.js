const mongoose = require('mongoose');
var Schema = mongoose.Schema

var articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Article', articleSchema);