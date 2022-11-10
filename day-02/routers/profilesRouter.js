const express = require("express");
const profileRouter = express.Router();
const fs = require('fs');

profileRouter.get("/", (req, res) => {
    fs.readFile(__dirname + "profiles.json")
      .then((contents) => {
        console.log(contents);
        // need to parse the raw buffer as json if we want to work with it
        const profilesJson = JSON.parse(contents);
        console.log(profilesJson);
        //   prepare and send an OK response
        res.render("profiles", {
          title: "Express Yourself - Profiles",
          profiles: profilesJson,
        });
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end("Error");
      });
  });
profileRouter.get("/profiles/:profile", (req, res) => res.send(`this is profile ${req.params.profile}`));


module.exports = profileRouter;