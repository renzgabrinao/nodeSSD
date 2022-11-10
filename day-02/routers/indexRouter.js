const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.send());
indexRouter.get("/about", (req, res) => res.send());
indexRouter.get("/contacts", (req, res) => res.send());

module.exports = indexRouter;