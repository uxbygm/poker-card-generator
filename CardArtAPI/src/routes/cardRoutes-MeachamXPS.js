const express = require('express');
const { generateCard } = require('../controllers/cardController');

const router = express.Router();

router.get('/', generateCard);

module.exports = router;
