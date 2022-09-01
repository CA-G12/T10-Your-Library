const path = require('path');

const homePage = (req,res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'homePage.html'));
}

module.exports= homePage;
