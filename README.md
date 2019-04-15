[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## 👋 Hi
This scaffolding is robust in terms of security measures (read below). All important matters were set up already. From linting to bundling. 
Also, this is based on MVC (Model-View-Controller) architecture. This scaffolding was meant for backend stuff. For an instance, if you want 
to create a Node application on the fly. But, you can also use this scaffolding if you want to create simple to advanced websites (frontend
stuffs included). The purpose of this repo is to give you all the important tools already set up so you can start building your app ideas 
right away. Scroll to **GET STARTED** below if you want to skip all the blah-blah-blah's. 

<br>

## Basic Core
The center gears for this repo are: **Node**, **Express**, and **MongoDB**-**Mongoose**. This scaffolding does not use React. But, there will be 
another scaffolding repo for that. Sole purpose of this scaffolding is for you to create pure Node applications on the fly. But, as stated 
above, you can also use this in creating simple to advanced websites.

<br>

## Security - Middlewares
Securing your application is really vital. So implemented in this scaffolding were tested and trusted security modules like: **Helmet**, 
**CORS**, **HPP**,  

<br>

## Logger
Logger used for this scaffolding are **winston** and **express-winston**.

<br>

## Process Manager
I have included **PM2** as its **Process Manager**. If you're going to deploy, **PM2** is a great choice. If you haven't heard about **PM2**, 
you can check their documentation or you can omit this one.

<br>

## Linted
This scaffolding uses **Eslint**, **eslint-plugin-security** (for detecting vulnerable coding style), and **eslint-config-airbnb-improved**.

<br>

## Config
This scaffolding uses **custom-env** as the environment parser. Basically, you can create a *.env.testing*, *.env.development*, etc., for your 
specific environment variables. 

NOTE: Don't publicly upload or share your .env files.

<br>

## Template Engine
I have already included a more reliable and easy-to-use templating engine for express **express-es6-template-engine** (es6Renderer). This 
is based on the template string feature of ES6. It's very clean and on-point.

Instead of typing long template engine code, all you have to type inside your HTML is the template string of ES6.

```
<h1 class="heading">${headingTitle}</h1>
```

<br>

## Bundler and Transpiler
I already configured **WebPack 4** for your frontend and backend bundles. I also included **Babel**. Configuring the backend and frontend 
for WebPack is a bit daunting and tedious. I already separated your backend bundle (Node stuff) and frontend bundle (DOM stuff), so I 
already saved your precious time for that.

<br>

## "Hot-Reload"
To auto-reload your browser when you are in development, this scaffolding uses **Browser-Refresh**. I did not use the webpack-dev-server 
because I like the simplicity of browser-refresh and its ease of use.



## Schemas and Validation
For the database schema, **Mongoose** was used. For the validation, **Joigoose** (a JOI-dependent npm) was used. Joigoose has also schemas. 

<br>

## Test
For the test section, I've already included **Mocha**, **Expect** and **Supertest**. But, you can use any test suite you want.

<br>

## Front-End Stuff
I have also added latest versions of **Bootstrap** and **FontAwesome** so that if you decide to create websites or include pages you can do 
so in no time.

<br>
<br>

# Getting Started
Just clone this repo inside your project directory and then install all its dependencies. This repo uses Yarn, however, if you will use NPM 
just delete the yarn.lock then *'npm install'*.

<br>

```
yarn install
```

<br>

or

<br>

```
npm install
``` 

<br>

## Entry Points
Your main entry point for your backend stuff (Node) is the **app.js** file. Placed inside the root of your project directory. Your main entry 
for your frontend stuff is the **app-frontend.js** file. Placed inside public/js/ directory. The entry points are for development only, because 
when you deploy, you need to build and minimized all files.

## More info about app-frontend.js file
Inside this file are all frontend stuffs. Firstly, this scaffolding uses SASS for the styles (you can use CSS if you want) so that I can 
easily import all other styles into it. The main scss file is placed inside public/styles/ directory, namely **app-main.scss**. Inside this
scss file, I have imported *fontawesome styles* and *bootstrap styles*. Then I imported the app-main.scss into the app-frontend.js file. 

<br>

Basically, all utility modules, all other modules, styles, and assets like images are imported inside this file, so that when you build 
(using WebPack) you only have one main entry point for your frontend stuffs.

<br>

## After-Build Entry Points
So, after you build your files, your entry point for your backend stuff will be **app-back-bundle.js**. Still, placed in the root of your 
project. And, for your frontend stuff, it will be **app-front-bundle.js**, which will be placed inside public/dist/ directory. Also, this 
/dist directory will be the source for all your public assets when deployed, like images, svg, etc.

<br>

## Package Scripts
When you are in development stage, you can use this one (you can create your own if you want):

<br>

```
"dev-webp": "concurrently 'webpack --config ./webpack.config.js --mode development --watch true' 'yarn dev-node'"
```

<br>

**dev-webp** will run webpack on development mode and then after run immediately **dev-node**

<br>

```
"dev-node": "browser-refresh ./app-back-bundle.js"
```

<br>

dev-node uses browser-refresh for the auto-reloading of your browser. So, whenever you hit save, Webpack will re-bundle and then trigger 
browser-refresh to reload the browser. By the way, **concurrently** is a node package that enables you to run scripts after the other.

<br>

If you want to try PM2 in your development stage, run this script:

<br>

```
"dev-webp-pm2": "concurrently 'webpack --config ./webpack.config.js --mode development' 'pm2-runtime start ecosystem.config.js --env development'"
```

<br>

Again, it runs Webpack, and then triggers PM2 which is in development mode as well. If all is set and you are ready to deploy run the build
script.

<br>

```
 "build": "webpack --config ./webpack.config.js --mode production"
```

<br>

Then, on your deployment server you can run the start script that uses PM2 as your Process Manager. 

<br>

```
"start": "pm2-runtime start ecosystem.config.js --env production"
```

<br>

If you don't want to use PM2, you can use any other process manager you want, or if you just want to run without any manager you can simply
create this:

<br>

```
"start": "node app-back-bundle.js"
```

<br>
<br>

## NOTE:
You need to run **dev-webp** script at least once so that Webpack can create the main entry points

<br>

That's it! You have a robust scaffolding with all important packages already set up for you. But, you can edit all configs, remove or add 
your own dependency if you want. Please don't forget to star this repo if you find this useful.

<br>
<br>