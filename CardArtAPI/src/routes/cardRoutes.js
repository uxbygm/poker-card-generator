const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();
router.get('/', cardController.generateDeck);
router.get('/generateCard', cardController.generateCard);
router.get('/generateDeck', cardController.generateDeck);

module.exports = router;
