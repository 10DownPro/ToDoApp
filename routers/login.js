
const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'tvedt.js');
    next();
});


router.get('/tvedt', (req, res) => {
    console.log('this is T\'Vedt page');
    res.send("Testing 1 2 3. . .");
});


module.exports = router