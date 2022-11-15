const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.render("index", { title: "Home" }));
indexRouter.get("/about", (req, res) => res.render("about", { title: "About" }));

//GET
indexRouter.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Express Yourself - Contact Us",
        status: null,
    });
});

//POST
indexRouter.post("/contact", (req, res) => {
    res.render("contact", {
        title: "Express Yourself - Contact Us",
        status: "received",
        formData: req.body,
    });
});


module.exports = indexRouter;