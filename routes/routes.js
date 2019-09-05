var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController.js');

router.get('/hola', mainController.myFunction);

//export this router to use in our index.js
module.exports = router;