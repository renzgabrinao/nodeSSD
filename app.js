/*
 * File: c:\Users\jsolomon11\JBS\Courses\SSD\Intake28\Node\Assignments\Solutions\Node-A01-GitToNodeYou\SSD28-A01-GitToNodeYou\index.js
 * Created Date: Friday, October 28th 2022, 11:56:34 am
 * Author: Josh Solomon
 * Copyright (c) 2022 Josh Solomon
 */

// Set strict mode


"use strict";

const { loadProfile, loadStatic } = require("./utils/fileHelper");

const http = require("http");

// variables that the server will need
const hostname = "127.0.0.1";
const port = 3001;
// pass in our request handling callback to createServer
const server1 = http.createServer((req, res) => {
  console.log(req);
  // prepare and send an OK response
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("First group NODE Assignment");

});
// register the server to listen for requests
// server1.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Initialize our server
const server = http.createServer((req, res) => {
  // branch based on the URL of the request
  switch (req.url) {
    // Home page
    // * Add a case that responds to / which sends "Hello Node Server" with a 200

    // Profiles Listing Page
    // * Add a case that responds to /profiles which sends "Profiles List" with a 200

    //   Individual Profile
    case "/profiles/josh":
      console.log("Josh is here.  Loading profile...");
      loadProfile(req, res);
      break;
    case "/profiles/brayden":
      console.log("Brayden is here. Loading profile...");
      loadProfile(req, res);
      break;

    /* Add in a cases pointing at your personal profiles below */

    //   Unhandled URL
    default:
      // Handle static requests
      const validStaticTypes = ["images", "styles", "scripts"];
      const pathSegments = req.url.split("/");
      if (validStaticTypes.includes(pathSegments[3])) {
        loadStatic(req, res);
      } else {
        // * set statusCode to 404
        // * use res.setHeader to specify "Content-Type", "text/html"
        // * send "File not found"
      }
  }
});

// * Set the HTTP server to listen on port, hostname as declared above
// * Within the callback console.log  `Server running at http://${hostname}:${port}/`

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
}
);