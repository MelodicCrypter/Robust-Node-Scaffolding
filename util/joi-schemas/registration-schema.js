/*
* This section uses Joi validation. You can use any validators you want.
* The data below are just samples taken from joi npm page.
* These schemas are mostly will be used inside app.js => routes => controllers
* to validate incoming data from req.body
*/

// Joi
const Joi = require('joi');

const registrationSchema = Joi.object().keys({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 }),
});

export default registrationSchema;
