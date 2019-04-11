
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## 👋
This scaffolding is robust in terms of security measures (read below). All important matters were set up already. From linting to bundling. 
Also, this is based on MVC (Model-View-Controller) architecture. This scaffolding was meant for backend stuff. For an instance, if you want 
to create a Node application on the fly. But, you can also use this scaffolding if you want to create simple to advanced websites. The purpose
of this repo is to give you all the important tools already set up so you can start building your app ideas right away.

<br>

## Basic Core
The center gears for this repo are: **Node**, **Express**, and **MongoDB**. This scaffolding does not use React. But, there will be 
another scaffolding repo for that. Sole purpose of this scaffolding is for you to create pure Node applications on the fly. But, as stated 
above, you can also use this in creating simple to advanced websites.

<br>

## Security - Middlewares
Securing your application is really vital. So implemented in this scaffolding were tested and trusted security modules like: **Helmet**, 
**CORS**, **HPP**,  

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

## Logger
Logger used for this scaffolding are **winston** and **express-winston**.

<br>

## Process Manager
I have included **PM2** as its **Process Manager**. If you're going to deploy, **PM2** is a great choice. If you haven't heard about **PM2**, 
you can check their documentation or you can omit this one.


<br>

## Front-End Stuff
I have also added latest versions of **Bootstrap** and **FontAwesome** so that if you decide to create websites or include pages you can do 
so in no time.

<br>

## Linted
This scaffolding uses **Eslint**, **eslint-plugin-security** (for detecting vulnerable coding style), and **eslint-config-airbnb-improved**.

<br>

## Test
...

<br>

Of course you can modify this to suit your application's needs.
