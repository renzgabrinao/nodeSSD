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