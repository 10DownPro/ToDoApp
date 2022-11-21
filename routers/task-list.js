const express = require('express');
const {User, Task} = require('../helpers/dbConnections');
const task = require('../models/task');

const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time:', Date.now(), 'task-list.js');
    next();
});


router.get('/task-list', async (req, res) => {
    
    const user = await User.findAll({where: {email: req.session.user}});    
    const id = user[0].id
    const allTask = await Task.findAll({where: {userId: id}});

    console.log("HI");
    console.log(allTask)

    return res.render(`task-list`, {
        title: 'task-list',
        allTask: allTask
    })
    // return res.send(`task-list`)
});


router.post('/task-list', async (req, res) => {

    try {
        const { taskInput } = req.body;
        // The order of the variables DOES matter
        console.log(req.session.user);
        console.log(taskInput);

        // make this an update ccommand to the DB
        const user = await User.findAll({where: {email: req.session.user}});
        // console.log(records.length);
        const id = user[0].id
        console.log(id);
        try {

            const todo = await Task.create({ task: req.body.taskInput, isComplete: false, userId: id});
            console.log(todo);
            

            // on success go to login page
            return res.redirect(`task-list`);
        }
        catch(error) {
            //email was found in our db, return an error
            console.log('something is wrong');

            // return res.status(422).send({error: 'Email already exits'})
            return res.status(422).send(`<h2>error: ${error}</h2>`)
        }


    } catch (error) {
        // return res.status(422).send({error: 'Email already exits'})
        return res.status(422).send(`<h2>Ooops! An error happend: ${error}</h2>`)
    }

});

module.exports = router