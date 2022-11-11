const express = require("express");
const profilesRouter = express.Router();
const path = require('path');
const fs = require('fs').promises;

// profilesRouter.get("/", (req, res) => res.render("profiles", { title: "Profiles" }));

const dataPath = path.join(__dirname, "../data/");

profilesRouter.get("/", (req, res) => {
    fs.readFile(dataPath + "profiles.json")
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

profilesRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(dataPath + "profiles.json")
        .then((contents) => {
            console.log(contents);
            // need to parse the raw buffer as json if we want to work with it
            const profilesJson = JSON.parse(contents);
            console.log(profilesJson);
            //   prepare and send an OK response
            const a = profilesJson.filter((e) => e.id === id)[0];
            const b = profilesJson.filter((e) => e.id !== id);

            res.render("profile", {
                title: "Express Yourself - Profiles",
                a, b
            });
        })
        .catch((err) => {
            console.log(err);
            res.writeHead(500);
            res.end("Error");
        });
});


module.exports = profilesRouter;