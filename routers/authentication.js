

const express = require('express');
const router = express.Router();
const { User, Tasks } = require('../helpers/dbConnections');

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'authentication.js');
    next();
});


 router.get('/register', (req, res) => {

    return res.render('register', {
        title: 'Register',
        pageID: 'registerPage'
    });

   console.log('this is register page');

    return res.send("Testing 1 2 3. . .")
});

router.post('/register', (req, res) => {
    
     const { username, password } = req.body;
     console.log(username, password);
    return res.send("Testing 1 2 3. . .")
});

// router.get('/login', (req, res) => {
//     console.log('this is login page');
//     res.send("Testing 1 2 3. . .");
// });

module.exports = router