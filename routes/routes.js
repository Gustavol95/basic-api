var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController.js');

router.get('/', mainController.myFunction);
router.post('/', mainController.myPostFunc);

//export this router to use in our index.js
module.exports = router;