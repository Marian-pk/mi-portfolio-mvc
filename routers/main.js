const express = require('express');
const path = require ('path');
const router = express.Router();
const mainController = require('../controllers/mainController')


//Página principal
router.get('/', mainController.home)

module.exports = router;