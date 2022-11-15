const fs = require("fs").promises;
const path = require("path");

const express = require("express");
const apiRouter = express.Router();

const dataPath = path.join(__dirname, "../data/")

apiRouter.get("/profiles", (req, res) =>{
    fs.readFile(dataPath + "profiles.json")
        .then((contents) => {
            console.log(contents);

            const profilesJson = JSON.parse(contents);
            console.log(profilesJson);
            res.json(profilesJson);
        })
        .catch((error)=> {
            console.log(error)
            res.writeHead(500);
            res.end("Error")
        });
    });


apiRouter.get("/profiles/:id", (req, res) => {
    fs.readFile(dataPath + "profiles.json")
        .then((contents) => {
            console.log(contents);
            const profilesJson = JSON.parse(contents);
            const profileJson = profilesJson
                .filter((profile) => profile.id === req.params.id)
                .shift();
            console.log(profileJson);
        })
        .catch((error) => {
            console.log(error);
            res.writeHead(500);
            res.end("Error");
        });
});

apiRouter.get("/quotes", (req, res) => {
    fs.readFile(dataPath + "quotes.json")
      .then((contents) => {
        console.log(contents);
        // need to parse the raw buffer as json if we want to work with it
        const quotesJSON = JSON.parse(contents);
        console.log(quotesJSON);
        //   prepare and send an OK response
        res.json(quotesJSON);
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end("Error");
      });
  });
  
  apiRouter.get("/quotes/:id", (req, res) => {
    fs.readFile(dataPath + "quotes.json")
        .then((contents) => {
            console.log(contents);
            const quotesJSON = JSON.parse(contents);
            const quoteJSON = quotesJSON
                .filter((quote) => quote.id === req.params.id)
                .shift();
            console.log(quoteJSON);
        })
        .catch((error) => {
            console.log(error);
            res.writeHead(500);
            res.end("Error");
        });
});

  module.exports = apiRouter;