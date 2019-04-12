/*
* This section uses Joigoose validation. You can use any validators you want.
* These schemas are meant to work with Mongoose.
*/

// Schema for User
const joiUserSchema = Joi.object({
    name: Joi.object({
        first: Joi.string().required(),
        last: Joi.string().required(),
    }),
    email: Joi.string().email().required(),
    bestFriend: Joi.string().meta({ type: 'ObjectId', ref: 'User' }),
    metaInfo: Joi.any(),
    addresses: Joi.array().items({
        line1: Joi.string().required(),
        line2: Joi.string(),
    }).meta({ _id: false, timestamps: true }),
});

module.exports = { joiUserSchema };
