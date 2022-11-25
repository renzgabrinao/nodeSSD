const Profile = require("../models/Profile.js");
const ProfileOps = require("../data/ProfileOps.js");
const fs = require('fs');
const mv = require('mv');
const path = require('path');


// instantiate the class so we can use its methods
const _profileOps = new ProfileOps();

exports.Index = async function (request, response) {
    console.log("loading profiles from controller");
    if (request.body.searchName) {
        console.log("Search Name");
        let profiles = await _profileOps.searchProfiles(request.body.searchName);

        if (profiles) {
            response.render("profiles", {
                title: "Express Yourself - Profiles",
                profiles: profiles,
            });
        } else {
            response.render("profiles", {
                title: "Express Yourself - Profiles",
                profiles: [],
            });
        }
    } else {
        let profiles = await _profileOps.getAllProfiles();
        if (profiles) {
            response.render("profiles", {
                title: "Express Yourself - Profiles",
                profiles: profiles,
            });
        } else {
            response.render("profiles", {
                title: "Express Yourself - Profiles",
                profiles: [],
            });
        }
    }

};

exports.Detail = async function (request, response) {
    const profileId = request.params.id;
    console.log(`loading single profile by id ${profileId}`);
    let profile = await _profileOps.getProfileById(profileId);
    let profiles = await _profileOps.getAllProfiles();
    if (profile) {
        response.render("profile", {
            title: "Express Yourself - " + profile.name,
            profiles: profiles,
            profileId: request.params.id,
            layout: "./layouts/sidebar",
        });
    } else {
        response.render("profiles", {
            title: "Express Yourself - Profiles",
            profiles: [],
        });
    }
};

// Handle profile form GET request
exports.Create = async function (request, response) {
    response.render("profile-form", {
        title: "Create Profile",
        errorMessage: "",
        profile_id: null,
        profile: {},
    });
};

// Handle profile form GET request
exports.CreateProfile = async function (request, response) {
    // instantiate a new Profile Object populated with form data
    const profileImage = request.files.image;
    const profilePath = "/images/" + profileImage.name;
    let tempProfileObj = new Profile({
        name: request.body.name,
        interests: request.body.interests.split(","),
        imagePath: profilePath,

    });

    


    profileImage.mv(path.join(__dirname+ '/../public', 'Images/')+profileImage.name, function(err) {
        if(err){
            response.status(400).send(err);
        }
    })

    //
    let responseObj = await _profileOps.createProfile(tempProfileObj);

    // if no errors, save was successful
    if (responseObj.errorMsg == "") {
        let profiles = await _profileOps.getAllProfiles();
        console.log(responseObj.obj);
        response.render("profile", {
            title: "Express Yourself - " + responseObj.obj.name,
            profiles: profiles,
            profileId: responseObj.obj._id.valueOf(),
            layout: "./layouts/sidebar",
        });
    }
    // There are errors. Show form the again with an error message.
    else {
        console.log("An error occured. Item not created.");
        response.render("profile-create", {
            title: "Create Profile",
            profile: responseObj.obj,
            errorMessage: responseObj.errorMsg,
        });
    }
};

// Handle delete profile GET request
exports.DeleteProfileById = async function (request, response) {
    const profileId = request.params.id;
    console.log(`deleting single profile by id ${profileId}`);
    let deletedProfile = await _profileOps.deleteProfileById(profileId);
    let profiles = await _profileOps.getAllProfiles();

    if (deletedProfile) {
        response.render("profiles", {
            title: "Express Yourself - Profiles",
            profiles: profiles,
        });
    } else {
        response.render("profiles", {
            title: "Express Yourself - Profiles",
            profiles: profiles,
            errorMessage: "Error.  Unable to Delete",
        });
    }
};

// Handle edit profile form GET request
exports.Edit = async function (request, response) {
    const profileId = request.params.id;
    let profileObj = await _profileOps.getProfileById(profileId);
    response.render("profile-form", {
        title: "Edit Profile Get",
        errorMessage: "",
        profile_id: profileId,
        profile: profileObj,
    });
};

// Handle profile edit form submission
exports.EditProfile = async function (request, response) {
    const profileId = request.body.profile_id;
    const profileName = request.body.name;

    const profileImage = request.files.image;
    
    
    // const dirPath = (__dirname + "../public/images/")
    // profileImage.mv(profileImage, dirPath);
    const profilePath = "/images/" + profileImage.name;


    profileImage.mv(path.join(__dirname+ '/../public', 'Images/')+profileImage.name, function(err) {
        if(err){
            response.status(400).send(err);
        }
    })
    
    // if(profileImage){
    //     if (fs.existsSync(dirPath + profileImage.name)){
    //         console.log("File Exists");
    //     }
    //     else
    //     {
    //         profileImage.mv(profileImage, dirPath);
    //     }
    // }
    const profileInterest = request.body.interests;
    // send these to profileOps to update and save the document
    let responseObj = await _profileOps.updateProfileById(profileId, profileName, profileInterest, profilePath);

    // if no errors, save was successful
    if (responseObj.errorMsg == "") {
        let profiles = await _profileOps.getAllProfiles();
        console.log("Edited Success");
        response.render("profile", {
            title: "Express Yourself - " + responseObj.obj.name,
            profiles: profiles,
            profileId: responseObj.obj._id.valueOf(),
            layout: "./layouts/sidebar",
        });
    }
    // There are errors. Show form the again with an error message.
    else {
        console.log("An error occured. Item not created.");
        response.render("profile-form", {
            title: "Edit Profile",
            profile: responseObj.obj,
            profileId: profileId,
            errorMessage: responseObj.errorMsg,
        });
    }
};
