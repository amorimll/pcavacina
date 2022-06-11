const express = require('express');
const getAllTeste = require('../controllers/getAllTeste');
const router = express.Router()

router.get('/', getAllTeste)

module.exports = router;