// Library Module
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

// Local Module
const { mongoose } = require('../db/mongoose');

// Creating a User Schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

// OVERRIDE a method of mongoose called toJSON => this will set **********************************
// only the properties that should be returned, like id and email
UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject(); // this will transform the user which is a mongoose object to an ordinary object

    return _.pick(userObject, ['_id', 'email']); // will only return the id and email data
};