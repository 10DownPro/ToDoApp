

const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'shelby.js');
    next();
});


router.get('/shelby', (req, res) => {
    console.log('this is Shelby page');
    res.send("Testing 1 2 3. . .");
});


module.exports = router