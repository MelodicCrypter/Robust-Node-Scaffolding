// Library Modules
const express = require('express');
const path = require('path');
const es6Renderer = require('express-es6-template-engine');

// App Modules

// Set up
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public/');

// View
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// Middlewares
//=> Parser
app.use(express.json());
// => Static Assets
app.use(express.static(publicPath));

// Main routes using express route
app.get('/', (req, res) => {
    res.render('index', {
        locals: {
            pageTitle: 'Node Scaffolding | Hugh Caluscusin',
            coverTitle: 'MVC-Express-MongoDB-es6Renderer',
            coverSub: 'A QUICK NODE SCAFFOLDING, MVC ARCHITECTURE',
        }
    });
});

// Ready
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);

    if (process.send) {
        process.send('online');
    }
});