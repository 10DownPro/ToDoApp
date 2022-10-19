
const express = require('express');
const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'authentication.js');
    next();
});

router.get('/', (req, res) => {
    console.log("This is home page");
    res.render('index' , {title: 'Home Page'});
});

router.get('/register', (req, res) => {
    
    return res.render(`register`, {title: 'Register'})

});

router.post('/register', (req, res) => {
    const { firstName, lastName, email, password} = req.body;

    console.log(firstName);
    
    return res.render(`register`);
});

router.get('/login', (req, res) => {
    
    return res.render(`login`, {title: 'Login' , pageID: 'loginPage'});

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
    const { firstName, lastName, email, password} = req.body;

    console.log(firstName);
    
    return res.render(`task-list`);
});


router.get('/logout', (req, res) => {
    
console.log('User Logged out');

    res.redirect('login')
});

module.exports = router