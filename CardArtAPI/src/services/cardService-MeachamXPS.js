const path = require('path');
const fs = require('fs');

const getSvgContent = (filePath) => {
    return fs.readFileSync(filePath, 'utf8');
};

exports.createCardArt = (theme, cardType) => {

    const cardArt = {
        theme,
        cardType,
        layers: [
            // { id: 'background', content: getSvgContent(path.join(__dirname, `../assets/${theme}/background.svg`)) },
            { id: 'foreground', content: getSvgContent(path.join(__dirname, `../assets/${theme}/${cardType}.svg`)) },
        ],
        metadata: {
            created: new Date(),
        },
    };

    return cardArt;
};
