
const mainModel = require('../models/mainModel.js');

const mainController = {
	listBusiness: mainModel.myFunction,
	createBusiness: mainModel.myFunction,
	archiveBusiness: mainModel.myFunction,
	packagesByBusiness: mainModel.myFunction,
	createPackage: mainModel.myFunction,
	listFoliosByPackage: mainModel.myFunction,
	archivePackage: mainModel.myFunction
}

module.exports = mainController;