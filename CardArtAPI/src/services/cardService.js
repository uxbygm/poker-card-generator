const path = require('path');
const fs = require('fs');

const getSvgContent = (filePath, theme) => {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
    } else {
        return fs.readFileSync(path.join(__dirname, `../assets/${theme}/card_back_theme1.svg`), 'utf8');
    }
};

exports.createCardArt = (theme, cardType) => {

    const cardArt = {
        layers: [
            //  { id: 'mask', content: getSvgContent(path.join(__dirname, `../assets/${theme}/background.svg`), theme) },
             { id: 'artwork', content: getSvgContent(path.join(__dirname, `../assets/${theme}/${cardType}.svg`), theme) },
            // { effects: 'TBD', content: 'TBD' },
        ],
        metadata: {
            created: new Date(),
        },
    };

    return cardArt;
};
