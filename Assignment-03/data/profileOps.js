const Profile = require("../models/Profile.js");

class ProfileOps {
  // empty constructor
  ProfileOps() {}
  // DB methods
  async getAllProfiles() {
    let profiles = await (await Profile.find().sort({ name:1}));
    return profiles;
  }
}
module.exports = ProfileOps;