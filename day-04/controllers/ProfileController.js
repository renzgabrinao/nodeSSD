const ProfileOps = require("../data/ProfileOps");

// instantiate the class so we can use its methods
const _profileOps = new ProfileOps();
exports.Index = async function (request, response) {
  console.log("loading profiles from controller");
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
    response.render("profile-create", {
      title: "Create Profile",
      errorMessage: "",
      profile: {},
    });
  };
  // Handle profile form GET request
  exports.CreateProfile = async function (request, response) {
    // instantiate a new Profile Object populated with form data
    let tempProfileObj = new Profile({
      name: request.body.name,
    });
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