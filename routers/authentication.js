
const express = require('express');
const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'authentication.js');
    next();
});


router.get('/logot', (req, res) => {
    
console.log('User Logged out');

    res.redirect('login')
});

module.exports = router