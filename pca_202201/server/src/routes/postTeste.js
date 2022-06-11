const express = require('express');
const schemaTeste = require("../controllers/schemaTeste");
const router = express.Router()

router.post('/', schemaTeste)

module.exports = router;