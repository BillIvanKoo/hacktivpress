var Article = require('../models/article')
var User = require('../models/user')

getAllArticles = (req,res) => {
  Article.find({})
  .populate('author')
  .exec((err,articles)=>{
    if (err) res.send(err)
    res.send(articles)
  })
}
getOneArticle = (req,res) => {
  Article.findOne({_id: req.params.id})
  .populate('author')
  .exec((err, article)=>{
    if (err) res.send(err)
    res.send(article)
  })
}
createArticle = (req,res) => {
  var user = req.user
  var article = new Article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: user._id
  })
  article.save((err, article)=>{
    if(err) res.send(err)
    res.send(article)
    User.findOne({_id: user._id}, (err, user)=>{
      user.articles.push(article._id)
      user.save((err,user)=>{
        if(err) res.send(err)
      })
    })
  })
}
updateArticle = (req,res) => {
  Article.findOne({_id: req.params.id}, (err, article)=>{
    if(err) res.send(err)
    article.title= req.body.title || article.title
    article.content= req.body.content || article.content
    article.category= req.body.category || article.category
    article.save((err, article)=>{
      if (err) res.send(err)
      res.send(article)
    })
  })
}
deleteArticle = (req,res) => {
  Article.remove({_id:req.params.id}, (err, article)=>{
    if(err) res.send(err)
    res.send(article)
  })
}
getArticlesByCategory = (req,res) => {
  Article.find({category: req.headers.category})
  .populate('author')
  .exec((err,articles)=>{
    if (err) res.send(err)
    res.send(articles)
  })
}

module.exports = {getAllArticles, getOneArticle, createArticle, updateArticle, deleteArticle, getArticlesByCategory};