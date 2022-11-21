
const express = require('express');
const router = express.Router();
const { uuid } = require('uuidv4');

const {User, Task} = require('../helpers/dbConnections');

const bcrypt = require('bcrypt');


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

router.post('/register', async (req, res) => {

    try {
        const { email, password } = req.body;
        // The order of the variables DOES matter
        // console.log(password);

        const records = await User.findAll({where: {email: email}});
        // console.log(records.length);
        if(records.length === 0) {

            //encrypt the password
            bcrypt.hash(password, 10, async (error, hash) => {
                // add to database
                if(error) {
                    console.log(`error with the hash: ${error}`);
                    return res.redirect('register');
                    // return res.send('register');
                }
                else {
                    const newUser = await User.create({
                        id: uuid(),
                        email: email, 
                        password: hash
                    });
                    // console.log(newUser);
                }
            })

            // on success go to login page
            return res.redirect(`login`);
        }
        else {
            //email was found in our db, return an error
            console.log('Email already exists');

            // return res.status(422).send({error: 'Email already exits'})
            return res.status(422).send(`<h2>Email already exits: ${error}</h2>`)
        }


    } catch (error) {
        // return res.status(422).send({error: 'Email already exits'})
        return res.status(422).send(`<h2>Ooops! An error happend: ${error}</h2>`)
    }
    
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
        // console.log(email, password);

        const records = await User.findAll({where: {email: email}});
        console.log(records[0].password);

        if(records !== null) {
            try {
                const isMatch = await bcrypt.compare(password, records[0].password)
                console.log(isMatch);

                if(isMatch) {
                    // assign the username to create the session
                    console.log('im here now')
                    req.session.user = email
                    // console.log(req.session.user);
                    return res.redirect('task-list');
                }
                else if(!isMatch) {
                    // Passwords don't match, back to login
                    console.log(`Passwords don't match`);
                    return res.redirect('login');
                }
                
            } catch (error) {
                //no user found, go to register, can't access db, etc
                console.log(`No records found for user: ${username}`);
                    return res.redirect('register');
            }
        }
        
    } catch (error) {

        console.log('Password do not match!');
        return res.render('/login')

    }
});


router.get('/logout', (req, res) => {
    
console.log('User Logged out');

    res.redirect('login')
});

module.exports = router