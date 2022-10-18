const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'login.js');
    next();
});


router.get('/login', (req, res) => {
    
    return res.render(`login`, {title: 'Login'})

});

router.post('/login', (req, res) => {
    const { email, password} = req.body;

    console.log(firstName);
    
    return res.render(`login`);
});


module.exports = router