const ProfileController = require("../controllers/ProfileController");

const express = require("express");
const profilesRouter = express.Router();
const path = require('path');
const fs = require('fs').promises;

const dataPath = path.join(__dirname, "../data/");

// Show listing of all profiles
profilesRouter.get("/", ProfileController.Index);

// Show Create Profile Form
profilesRouter.get("/edit", ProfileController.Create);
// Handle Create Profile Form Submission
profilesRouter.post("/edit", ProfileController.CreateProfile);

// Show Create Profile Form
profilesRouter.get("/edit/:id", ProfileController.Edit);
// Handle Create Profile Form Submission
profilesRouter.post("/edit/:id", ProfileController.EditProfile);

// Show Individual Profile Details
profilesRouter.get("/:id", ProfileController.Detail);

// Delete an Individual Profile
profilesRouter.get("/:id/delete", ProfileController.DeleteProfileById);

module.exports = profilesRouter;