const express = require('express');
const app = express();
const path = require("path");

const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 3003;
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.static(__dirname + 'public')); 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);
app.set("layout", "layouts/full-width");

const indexRouter = require("./routers/indexRouter");
app.use('/', indexRouter);

const profileRouter = require('./routers/profilesRouter');
app.use("/profiles", profileRouter);

const apiRouter = require("./routers/apiRouter");
app.use("/api", apiRouter);

app.all("/*", (req, res) => {
  res.status(404).send("File Not Found");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });