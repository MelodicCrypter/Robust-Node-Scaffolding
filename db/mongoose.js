/*
* Don't forget to setup MongoDB in your machine
* Also, don't forget to run it first to connect your app
* You can use Robo 3T for mongo GUI
*/

// Library Modules
const mongoose = require('mongoose');

// Setting for Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// Module exports
module.exports = { mongoose };
