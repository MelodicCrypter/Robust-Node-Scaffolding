
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## 👋
This scaffolding is meant for backend stuff only. For an instance, if you want to create a Node application on the fly. This is based on MVC 
(Model-View-Controller) architecture. But, you can also use this scaffolding if you want to create simple to advanced websites. The purpose 
of this repo is to give you all the important tools already set up for you so you can start building your app ideas right away.

<br>

## Basic Core
The center tools for this repo are: **Node**, **Express**, and **MongoDB**. This scaffolding does not use React. Of course, there will be 
another scaffolding repo for that. Sole purpose of this scaffolding is for you to create pure Node applications on the fly. But, as stated 
above, you can also use this in creating simple to advanced websites.

<br>

## Template Engine
I have already included a more reliable and easy-to-use templating engine for express **express-es6-template-engine** (es6Renderer). This 
is based on the template string feature of ES6. It's very clean and on-point.

Instead of typing long template engine code, all you have to type inside your HTML is the template string of ES6.

```
<h1 class="heading">${headingTitle}</h1>
```

<br>

## Front-End Stuff
I have also added latest versions of **Bootstrap** and **FontAwesome** so that if you decide to create websites or include pages you can do 
so in no time.

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

## Security - Middlewares
This scaffolding uses **Helmet** for secured HTTP request; **CORS** for enabling or disabling Cross-Origin Resource Sharing. 

<br>

## Test
...

<br>

Of course you can modify this to suit your application's needs.
