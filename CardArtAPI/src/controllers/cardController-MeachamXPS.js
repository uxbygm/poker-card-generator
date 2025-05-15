const { createCardArt } = require('../services/cardService');

exports.generateCard = (req, res) => {
    const { theme, cardType } = req.query;

    if (!theme || !cardType) {
        return res.status(400).json({ error: 'Theme and cardType are required.' });
    }

    try {
        const cardArt = createCardArt(theme, cardType);
        res.json(cardArt);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
