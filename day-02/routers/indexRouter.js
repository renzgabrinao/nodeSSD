const express = require("express");
const indexRouter = express.Router();

const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("layout", "./views/layouts/full-width");

indexRouter.get("/", (req, res) => res.render("index", {title: "Home"}));
indexRouter.get("/about", (req, res) => res.send());
indexRouter.get("/contacts", (req, res) => res.send());

module.exports = indexRouter;