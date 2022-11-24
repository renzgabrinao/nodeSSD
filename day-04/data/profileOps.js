const Profile = require("../models/Profile.js");

class ProfileOps {
  // empty constructor
  ProfileOps() {}
  // DB methods
  async getAllProfiles() {
    let profiles = await Profile.find({});
    return profiles;
  }
  async getProfileById(id) {
    console.log(`getting profile by id ${id}`);
    let profile = await Profile.findById(id);
    return profile;
  }
  async createProfile(profileObj) {
    try {
      const error = await profileObj.validateSync();
      if (error) {
        const response = {
          obj: profileObj,
          errorMsg: error.message,
        };
        return response; // Exit if the model is invalid
      }
      // Model is valid, so save it
      const result = await profileObj.save();
      const response = {
        obj: result,
        errorMsg: "",
      };
      return response;
    } catch (error) {
      const response = {
        obj: profileObj,
        errorMsg: error.message,
      };
      return response;
    }
  }
}



module.exports = ProfileOps;