const path = require('path');
const express = require("express");
const layout = require('express-layout');

const app = express();

const bodyParser = require('body-parser');

const port = 3001;

app.set('views' , path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const middlewares = [
    layout(),
    express.static(path.join(__dirname, 'public')),
    bodyParser.urlencoded({extended: false})
]

app.use(middlewares);


app.use(require('./routers/authentication'));
app.use(require('./routers/review'));
app.use(require('./routers/naomi'));
app.use(require('./routers/shelby'));
app.use(require('./routers/tvedt'));



app.get('/', (req, res) => {
    res.send('<h1>This is where you register!</h1>');
});


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});