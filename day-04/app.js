const express = require('express');
const path = require('path');
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require('body-parser');
const logger = require('morgan');

const cors = require("cors");

const indexRouter = require("./routers/indexRouter");
const profilesRouter = require("./routers/profilesRouter");
const apiRouter = require("./routers/apiRouter");
// Use environment variable if defined, or a fixed value if not. 
const port = process.env.PORT || 3003;
const app = express();

app.use(cors({ origin: [/127.0.0.1*/, /localhost*/] }));

app.set("views", path.join(__dirname, "views"));

app.use(logger('dev'));

app.set('view engine', 'ejs');
// Enable layouts
app.use(expressLayouts);
// Set the default layout
app.set("layout", "./layouts/full-width");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//Routers
app.use('/', indexRouter);

app.use('/profiles', profilesRouter);

app.use("/api", apiRouter);



app.use(express.static('public'));

app.get("*", function (req, res) {
  res.status(404).send('<h2 class="error">File Not Found</h2>');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));