
const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now(), 'naomi.js');
    next();
});


router.get('/naomi', (req, res) => {
    console.log('this is Naomi page');
    res.send("this is Naomi page");
});


module.exports = router