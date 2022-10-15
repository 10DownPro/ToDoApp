const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'register.js');
    next();
});


router.get('/register', (req, res) => {
    
    return res.render('register')
});

router.post('/register', (req, res) => {
    const { firstName, lastName, email, password} = req.body;

    console.log(firstName);
    
    return res.render(`register`);
});


module.exports = router