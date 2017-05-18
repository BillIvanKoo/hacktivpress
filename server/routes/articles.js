const express = require('express');
var router = express.Router()
var controller = require('../controllers/articleController')
var jwtHelper = require('../helpers/jwt')

router.get('/', controller.getAllArticles);
router.post('/', jwtHelper, controller.createArticle);
router.delete('/:id', jwtHelper, controller.deleteArticle);
router.put('/:id', jwtHelper, controller.updateArticle);
router.get('/:id', controller.getOneArticle);
router.post('/category', controller.getArticlesByCategory);

module.exports = router;