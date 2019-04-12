// Library Modules
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Mongoose
const { mongoose } = require('../db/mongoose');

// Joigoose
const Joigoose = require('joigoose')(mongoose);

// Joigoose User schema
const { joiUserSchema } = require('./joigoose-schemas/user-schema');

// Creating a User Mongoose Schema
const UserSchema = new mongoose.Schema(Joigoose.convert(joiUserSchema));

// OVERRIDE a method of mongoose called toJSON to return _id and email only
UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject(); // this will transform the user which is a mongoose object to an ordinary object

    return _.pick(userObject, ['_id', 'email']); // will only return the id and email data
};

// Creating the User model
const User = mongoose.model('User', UserSchema);

module.exports = { User };
