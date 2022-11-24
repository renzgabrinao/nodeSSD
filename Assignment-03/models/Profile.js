
const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
    // MongoDB will automatically create an _id property, so no need to specify it UNLESS we want to create our own
   
    // We do, however, want every profile document to have a name which should be of type String and be required in order for a document to be considered valid
    name: {"type": "String", required: true},
   
    // interests are optional, so lets just specify that they must be of type Array
    interests: Array
},
  // as a second argument, specify the collection to work with
  { collection: "profiles" }
);

// Pass the Schema into Mongoose to use as our model
const Profile = mongoose.model('Profile', profileSchema);
// Export it so that we can use this model in our App
module.exports = Profile;