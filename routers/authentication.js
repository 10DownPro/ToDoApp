
const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'authentication.js');
    next();
});


router.get('/register', (req, res) => {
    console.log('this is register page');
    res.send("Testing 1 2 3. . .")
});


router.get('/login', (req, res) => {
    console.log('this is login page');
    res.send("Testing 1 2 3. . .");
});

module.exports = router