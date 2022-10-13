
const express = require("express");

const app = express();

const port = 3000;

app.use(require('./routers/authentication'));
app.use(require('./routers/review'));
app.use(require('./routers/naomi'));
app.use(require('./routers/shelby'));
app.use(require('./routets/tvedt'));






app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});