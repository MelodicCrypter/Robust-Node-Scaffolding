/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _util_logger_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/logger-util */ \"./util/logger-util.js\");\n/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/home */ \"./routes/home.js\");\n/* harmony import */ var _routes_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/about */ \"./routes/about.js\");\n// Library Modules\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar es6Renderer = __webpack_require__(/*! express-es6-template-engine */ \"express-es6-template-engine\"); // Local App Modules\n\n\n\n\n // Set up\n\nvar app = express();\nvar port = process.env.PORT || 3000;\nvar publicPath = path.join(__dirname, './public/dist/');\nvar logsPath = path.join(__dirname, './logs/'); // View: Template engine\n\napp.engine('html', es6Renderer);\napp.set('views', 'views');\napp.set('view engine', 'html'); // Middlewares\n\napp.use(helmet({\n  dnsPrefetchControl: {\n    allow: true\n  }\n})); // => Helmet, for security of HTTP requests\n\napp.use(express.json()); // => Parser\n\napp.use(express[\"static\"](publicPath)); // => Static Assets\n\napp.use(Object(_util_logger_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(logsPath + '/app-logs.json')); // => Output of logs, using Express-Winston\n// Main routes using express.Router()\n\napp.use('/', _routes_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use('/about', _routes_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // Ready\n\napp.listen(port, function () {\n  console.log(\"App is listening on port \".concat(port)); // Browser-Refresh\n  // Comment this out before building for Production\n  // This is only for development, to auto refresh the browser\n\n  if (process.send) {\n    process.send('online');\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"\"))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./routes/about.js":
/*!*************************!*\
  !*** ./routes/about.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router(); // This / is the root of About page\n\nrouter.get('/', function (req, res) {\n  res.render('about', {\n    locals: {\n      pageTitle: 'Node Scaffolding | Hugh Caluscusin',\n      coverTitle: 'This is an About Page - Test only',\n      coverSub: '',\n      repoAuthor: 'Hugh Caluscusin',\n      repoAuthorSite: 'https://www.melodiccrypter.com/',\n      repoAuthorGitLink: 'https://github.com/MelodicCrypter',\n      handle: '@MelodicCrypter'\n    }\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/about.js?");

/***/ }),

/***/ "./routes/home.js":
/*!************************!*\
  !*** ./routes/home.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router(); // The / is the root\n\nrouter.get('/', function (req, res) {\n  res.render('index', {\n    locals: {\n      pageTitle: 'Node Scaffolding | Hugh Caluscusin',\n      coverTitle: 'MVC-Express-MongoDB-es6Renderer',\n      coverSub: 'A QUICK NODE SCAFFOLDING, MVC ARCHITECTURE',\n      repoAuthor: 'Hugh Caluscusin',\n      repoAuthorSite: 'https://www.melodiccrypter.com/',\n      repoAuthorGitLink: 'https://github.com/MelodicCrypter',\n      repoLink: 'https://github.com/MelodicCrypter/MVC-Express-MongoDB-es6Renderer',\n      handle: '@MelodicCrypter'\n    }\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/home.js?");

/***/ }),

/***/ "./util/logger-util.js":
/*!*****************************!*\
  !*** ./util/logger-util.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar expressWinston = __webpack_require__(/*! express-winston */ \"express-winston\");\n\nvar winston = __webpack_require__(/*! winston */ \"winston\");\n\nvar logger = function logger(name) {\n  return expressWinston.logger({\n    transports: [new winston.transports.File({\n      name: name,\n      filename: name,\n      level: 'info',\n      maxsize: 5242880,\n      maxFiles: 10,\n      json: true,\n      colorize: true\n    }), new winston.transports.File({\n      name: name,\n      filename: name,\n      level: 'debug',\n      maxsize: 5242880,\n      maxFiles: 10,\n      json: true,\n      colorize: true\n    })]\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (logger);\n\n//# sourceURL=webpack:///./util/logger-util.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/MelodicCrypter/Documents/MC Dev/node/scratz-pad/app.js */\"./app.js\");\n\n\n//# sourceURL=webpack:///multi_./app.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-es6-template-engine":
/*!**********************************************!*\
  !*** external "express-es6-template-engine" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-es6-template-engine\");\n\n//# sourceURL=webpack:///external_%22express-es6-template-engine%22?");

/***/ }),

/***/ "express-winston":
/*!**********************************!*\
  !*** external "express-winston" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-winston\");\n\n//# sourceURL=webpack:///external_%22express-winston%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });