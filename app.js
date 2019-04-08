// Library Modules
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const es6Renderer = require('express-es6-template-engine');

// App Modules
import logger from './util/logger-util';
import homeRouters from './routes/home';
import aboutRouters from './routes/about';

// Set up
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public/');
const logsPath = path.join(__dirname, './logs/');

// View: Template engine
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// Middlewares
app.use(helmet({ dnsPrefetchControl: { allow: true } })); // => Helmet, for security of HTTP requests
app.use(express.json()); // => Parser
app.use(express.static(publicPath)); // => Static Assets
app.use(logger(logsPath + '/app-logs.json')); // => Output of logs, using Express-Winston

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