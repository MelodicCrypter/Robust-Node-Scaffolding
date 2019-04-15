/*
* You can use any environment variable packages, like dotenv, but I chose custom-env instead.
* If you are also going to use custom-env, all you have to do is set your environment variables
* inside your specific .env and require this config.js file like this:
*
* require('../../config/config')
*
* at the very top of your files. Change the path where you put your confg.js.
* For an instance you can create .env.test for testing and .env.development for development stage
* put all your specific variables there.
*/

// custom-env module
const config = require('custom-env').env(true);

module.exports = { config };
