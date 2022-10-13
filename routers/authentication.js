
const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now(), 'authentication.js');
    next();
});


router.get('/register', (req, res) => {
    console.log('this is register page');
    res.send("this is register page");
});


router.get('/login', (req, res) => {
    console.log('this is login page');
    res.send("this is login page");
});

module.exports = router