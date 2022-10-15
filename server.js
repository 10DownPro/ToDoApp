const path = require('path');
const express = require("express");
const layout = require('express-ejs-layouts');

const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;



app.set('views' , path.join(__dirname, 'views'));

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));



// const middlewares = [
//     layout(),
//     express.static(path.join(__dirname, 'public/css')),
//     bodyParser.urlencoded({extended: true})
// ]



app.use(layout);
app.set('layout', './layouts/full-width');
app.set('layout', './register');
app.set('view engine', 'ejs');

app.use(express.json());

// app.use(require('./routers/authentication'));
// app.use(require('./routers/review'));


app.get('/', (req, res) => {
    // res.send('<h1>This is where you register!</h1>');
    res.render('index' , {title: 'Home Page'});
});

app.get('/register', (req, res) => {
    // res.send('<h1>This is where you register!</h1>');
    res.render('register');
});

app.get('/login', (req, res) => {
    // res.send('<h1>This is where you login!</h1>');
    res.render('login');
});

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});