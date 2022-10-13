

const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'review.js');
    next();
});


router.get('/review', (req, res) => {
    console.log('this is review page');
    res.send("this is review page");
});


module.exports = router