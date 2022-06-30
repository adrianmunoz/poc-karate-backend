const {response} = require('express');




const karatePocCaso1 = (req, res) => {

    console.log('Request from caso1');
    return res.json({
        ok:true,
        msg:'Caso1'
    });
}

module.exports = { karatePocCaso1 };