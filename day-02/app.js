const express = require('express');
const app = express();
const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 3003;
const logger = require('morgan');
const path = require("path");

app.use(logger('dev'));
app.use(express.static(__dirname + 'public')); 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routers/indexRouter");
const movieRouter = require("./routers/profilesRouter");
const apiRouter = require("./routers/apiRouter");
const profileRouter = require('./routers/profilesRouter');

app.use(indexRouter);
app.use(movieRouter);
app.use(apiRouter);

app.use(expressLayouts);
app.set("layout", "./layouts/full-width");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


















app.use("/index", indexRouter);
app.use("/profiles", profileRouter);
app.use("/api", apiRouter);












app.all("/*", (req, res) => {
  res.status(404).send("File Not Found");
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });