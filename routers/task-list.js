const express = require('express');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'register.js');
    next();
});


router.get('/task-list', (req, res) => {
    
    return res.send(`<h1>This is task-list page</h1>`)
});

router.post('/task-list', (req, res) => {
    const { email, password} = req.body;

    console.log(email);
    
    return res.send(`<h1>Thank you for adding your tasks!!</h1>`);
});

module.exports = router