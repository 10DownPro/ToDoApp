
const express = require('express');
const router = express.Router();

const {User} = require('../helpers/dbConnections');

// const Sequelize = require('sequelize');

// const { User } = require('../models');

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'authentication.js');
    next();
});

router.get('/', (req, res) => {
    console.log("This is home page");
    res.render('index' , {
        title: 'Home Page',
        // pageID 'homePage'
    });
});

router.get('/register', (req, res) => {
    
    return res.render(`register`, {
        title: 'Register',
        // pageID: 'registerPage'
    });
});

router.post('/register', (req, res) => {

    
    const { firstName, lastName, email, username, password} = req.body;

    console.log(firstName);
    
    return res.render(`register`);
});

router.get('/login', (req, res) => {
    
    return res.render(`login`, {
        title: 'Login',
        pageID: 'loginPage'
    });
});

router.post('/login', (req, res) => {
    const { username, password} = req.body;

    console.log(username);
    // const records = await User.findAll({where: {username: username}});
    
    return res.render(`login`);
});


router.get('/logout', (req, res) => {
    
console.log('User Logged out');

    res.redirect('login')
});

module.exports = router