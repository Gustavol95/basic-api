
const authModel = require('../models/authModel.js');

const authController = {
	login: authModel.loginFunc,
	createUser: authModel.loginFunc,
	archiveUser: authModel.loginFunc
}


module.exports = authController;