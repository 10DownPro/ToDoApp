const path = require('path');
const express = require("express");
require('dotenv').config();

const app = express();

const port = 3009;
// const port = process.env.PORT || 3007;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static('public'));

app.set('views' , path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + 'public/css'));


app.use(require('./routers/authentication'));
// app.use(require('./routes/review'));


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});