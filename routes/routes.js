var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController.js');

router.get('/business', mainController.listBusiness);
router.post('/business', mainController.createBusiness);
router.put('/business/:idBusiness', mainController.archiveBusiness);
router.get('/business/:idBusiness/packages', mainController.packagesByBusiness);
router.post('/business/:idBusiness/packages', mainController.createPackage);
router.get('/business/:idBusiness/packages/:idPackage', mainController.listFoliosByPackage);
router.put('/business/:idBusiness/packages/:idPackage', mainController.archivePackage);


//export this router to use in our index.js
module.exports = router;