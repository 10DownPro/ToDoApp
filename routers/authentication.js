
const express = require('express');
const router = express.Router();
const taskList = [];

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

    const { email, password} = req.body;

    
    return res.render(`register`);
});

router.get('/login', (req, res) => {
    
    return res.render(`login`, {
        title: 'Login',
        pageID: 'loginPage'
    });
});

router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;

        const records = await User.findAll({where: {password: password}});

        if(records !== null) {
            if(password !== records[0].dataValues.password){

                console.log('Passwords do not match!');
                return res.render('/login')
            }
            else {
                return res.redirect('task-list')
            };

        }
        
    } catch (error) {

        console.log('Password do not match!');
        return res.render('/login')

    }
});

router.get('/task-list', (req, res) => {
    
    return res.render(`task-list`, {title: 'task-list'})

});

router.post('/task-list', (req, res) => {

    console.log(username);
    // const records = await User.findAll({where: {email: email}});
    
    return res.render(`task-list`);

    taskList.push(req.body)

});


router.get('/logout', (req, res) => {
    
console.log('User Logged out');

    res.redirect('login')
});

module.exports = router