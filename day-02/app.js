const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require('body-parser');
// Use environment variable if defined, or a fixed value if not. 
const port = process.env.PORT || 3003;

const logger = require('morgan');


app.use(logger('dev'));
app.set('view engine', 'ejs');

// Enable layouts
app.use(expressLayouts);
// Set the default layout
app.set("layout", "./layouts/full-width");

const indexRouter = require("./routers/indexRouter");
app.use('/', indexRouter);

const profilesRouter = require("./routers/profilesRouter");
app.use('/profiles', profilesRouter);

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));