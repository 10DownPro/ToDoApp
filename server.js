const path = require('path');
const express = require("express");
const layout = require('express-ejs-layouts');
require('dotenv').config();

const app = express();

const port = 3008;
// const port = process.env.PORT || 3007;

app.use(layout);

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static('public'));

app.set('views' , path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + 'public/css'));

app.set('layout', './layouts/full-width');

// app.set('layout', './register');
// app.use(require('./routers/register'));
// app.use(require('./routers/login'));
app.use(require('./routers/authentication'));

// app.get('/', (req, res) => {
//     console.log("This is home page");
//     res.render('index' , {title: 'Home Page'});
// });

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});