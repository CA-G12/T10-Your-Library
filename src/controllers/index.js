const path = require('path');

const homePage = (req,res) => {
    if(req.user)
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'homePage.html'));
    else{
        res.sendFile(path.join(__dirname, '..', '..','public','index.html'));
    }
}

module.exports= homePage;
