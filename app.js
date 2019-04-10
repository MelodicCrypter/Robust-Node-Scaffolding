// Library Modules
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const es6Renderer = require('express-es6-template-engine');

// Local App Modules
import logger from './util/logger-util';
import homeRouters from './routes/home';
import aboutRouters from './routes/about';

// Set up
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public/dist/');
const logsPath = path.join(__dirname, './logs/');

// View: Template engine
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// Middlewares ===> Security
app.use(helmet({ dnsPrefetchControl: { allow: true } })); // => Helmet, for security of HTTP requests
app.use(cors({ origin: false })); // => Cross-Origin Resource Sharing is disabled
// => some Security middlewares require to be parsed first
app.use(express.json()); // => Parser for JSON
app.use(express.urlencoded()); // => Parser for x-www-form-urlencoded
// Middlewares ===> Security continuation
app.use(hpp()); // => protection against Parameter Pollution attacks
// Middlewares ===> Other
app.use(express.static(publicPath)); // => Static Assets
app.use(logger(logsPath + '/app-logs.json')); // => Logs, using Winston & Express-Winston

// Main routes using express.Router()
app.use('/', homeRouters);
app.use('/about', aboutRouters);

// Ready
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);

    // Browser-Refresh
    // Comment this out before building for Production
    // This is only for development, to auto refresh the browser
    if (process.send) {
        process.send('online');
    }
});