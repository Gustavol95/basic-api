var express = require('express');
var authRouter = express.Router();
var authController = require('../controllers/authController.js');

authRouter.post('/hola', authController.loginFunc);

//export this router to use in our index.js
module.exports = authRouter;