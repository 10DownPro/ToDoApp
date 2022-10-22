const path = require('path');
const express = require("express");
const cookieParser = require('cookie-parser')
const session = require('express-session')
require('dotenv').config();

const app = express();


const port = 3009;
// const port = process.env.PORT || 3007;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static('public'));

app.set('views' , path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET, // used to sign the cookie
    resave: false, // update session even w/ no changes
    saveUninitialized: true, //always create a session
    cookie: {
        secure: false, // true: oly accept https req's
        maxAge: 1000 * 60 * 60 * 24, // time in seconds
    }
  })
);


app.use(require('./routers/authentication'));
// app.use(require('./routes/review'));


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});