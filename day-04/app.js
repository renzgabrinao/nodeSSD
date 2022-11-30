const { mongoose } = require("mongoose");

// Replace the uri string with your connection string.
const uri =
    "mongodb+srv://tk1318:kfbk1318@cluster0.jqekood.mongodb.net/node-04?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// store a reference to the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const fileUpload = require('express-fileupload');

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const indexRouter = require("./routers/indexRouter");
const profilesRouter = require("./routers/profilesRouter");
const apiRouter = require("./routers/apiRouter");

const port = process.env.PORT || 3004;
const app = express();


app.use(fileUpload());


// allow cross origin requests from any port on local machine
app.use(cors({ origin: [/127.0.0.1*/, /localhost*/] }));

app.use(logger("dev"));

// use express.static middleware to make the public folder accessible
app.use(express.static("public"));

// Enable layouts
app.use(expressLayouts);
// Set the default layout
app.set("layout", "./layouts/full-width");

// Make views folder globally accessible
app.set("views", path.join(__dirname, "views"));
// Tell express that we'll be using the EJS templating engine
app.set("view engine", "ejs");

  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// index routes
app.use(indexRouter);

// profiles routes
app.use("/profiles", profilesRouter);

// api routes
app.use("/api", apiRouter);

// handle unrecognized routes
app.get("*", function (req, res) {
    res.status(404).send('<h2 class="error">File Not Found</h2>');
});

// start listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
