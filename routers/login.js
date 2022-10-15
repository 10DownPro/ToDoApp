const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'register.js');
    next();
});


router.get('/login', (req, res) => {
    
    return res.send(`<h1>This is login page</h1>`)
});

router.post('/login', (req, res) => {
    const { email, password} = req.body;

    console.log(email);
    
    return res.send(`<h1>Thank you for logining!!</h1>`);
});

module.exports = router