var express = require('express');
var authRouter = express.Router();
var authController = require('../controllers/authController.js');

authRouter.post('/login', authController.login);
authRouter.post('/user', authController.createUser);
authRouter.put('/user', authController.archiveUser);
//export this router to use in our index.js
module.exports = authRouter;