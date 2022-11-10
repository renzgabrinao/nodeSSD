const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/profiles", (req, res) => res.send());
apiRouter.get("/profiles/:id", (req, res) => res.send());

module.exports = apiRouter;