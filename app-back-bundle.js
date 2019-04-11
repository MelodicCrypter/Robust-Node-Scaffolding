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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _routes_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/about */ \"./routes/about-route.js\");\n/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/home */ \"./routes/home-route.js\");\n/* harmony import */ var _util_logger_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/logger-util */ \"./util/logger-util.js\");\n// Local App Modules\n\n\n // Library Modules\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar hpp = __webpack_require__(/*! hpp */ \"hpp\");\n\nvar es6Renderer = __webpack_require__(/*! express-es6-template-engine */ \"express-es6-template-engine\"); // Set up\n\n\nvar app = express();\nvar port = process.env.PORT || 3000;\nvar publicPath = path.join(__dirname, './public/dist/');\nvar logsPath = path.join(__dirname, './logs/'); // View: Template engine\n\napp.engine('html', es6Renderer);\napp.set('views', 'views');\napp.set('view engine', 'html'); // Middlewares ======================> Security\n\napp.use(cors({\n  origin: false\n})); // Cross-Origin Resource Sharing is disabled\n\napp.use(helmet()); // Helmet, for security of HTTP requests\n// some Security middlewares require to be parsed first\n\napp.use(express.json({\n  limit: '300kb'\n})); // Parser for JSON, with limit to avoid payload\n\napp.use(express.urlencoded()); // Parser for x-www-form-urlencoded\n// Middlewares ======================> Security continuation...\n\napp.use(hpp()); // protection against Parameter Pollution attacks\n// Middlewares ======================> Other\n\napp.use(express[\"static\"](publicPath)); // Static Assets\n\napp.use(Object(_util_logger_util__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(logsPath, \"/app-logs.json\"))); // Logs, using Winston & Express-Winston\n// Main routes using express.Router()\n\napp.use('/', _routes_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use('/about', _routes_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // Ready\n\napp.listen(port, function () {\n  console.log(\"App is listening on port \".concat(port)); // Browser-Refresh\n  // Comment this out before building for Production\n  // This is only for development, to auto refresh the browser\n\n  if (process.send) {\n    process.send('online');\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"\"))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./controllers/pages/about-controller.js":
/*!***********************************************!*\
  !*** ./controllers/pages/about-controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Controller for your about page\nvar aboutController = function aboutController(req, res) {\n  res.render('about', {\n    locals: {\n      pageTitle: 'Node Scaffolding | Hugh Caluscusin',\n      coverTitle: 'This is the About Page - Test only',\n      repoAuthor: 'Hugh Caluscusin',\n      repoAuthorSite: 'https://www.melodiccrypter.com/',\n      repoAuthorGitLink: 'https://github.com/MelodicCrypter',\n      repoLink: 'https://github.com/MelodicCrypter/Robust-Node-Scaffolding',\n      handle: '@MelodicCrypter'\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (aboutController);\n\n//# sourceURL=webpack:///./controllers/pages/about-controller.js?");

/***/ }),

/***/ "./controllers/pages/home-controller.js":
/*!**********************************************!*\
  !*** ./controllers/pages/home-controller.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Controller for your homepage or index\nvar homeController = function homeController(req, res) {\n  res.render('index', {\n    // for es6Renderer\n    locals: {\n      pageTitle: 'Node Scaffolding | Hugh Caluscusin',\n      coverTitle: 'Robust-Node-Scaffolding',\n      repoAuthor: 'Hugh Caluscusin',\n      repoAuthorSite: 'https://www.melodiccrypter.com/',\n      repoAuthorGitLink: 'https://github.com/MelodicCrypter',\n      repoLink: 'https://github.com/MelodicCrypter/Robust-Node-Scaffolding',\n      handle: '@MelodicCrypter'\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homeController);\n\n//# sourceURL=webpack:///./controllers/pages/home-controller.js?");

/***/ }),

/***/ "./routes/about.js":
/*!*************************!*\
  !*** ./routes/about-route.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_pages_about_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/pages/about-controller */ \"./controllers/pages/about-controller.js\");\n// Controller for this route\n // Express Route\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router(); // The '/' is the root for your About page\n// So if user visits /about, this router will call the pages controller for about\n\nrouter.get('/', _controllers_pages_about_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/about-route.js?");

/***/ }),

/***/ "./routes/home.js":
/*!************************!*\
  !*** ./routes/home-route.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_pages_home_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/pages/home-controller */ \"./controllers/pages/home-controller.js\");\n// Controller for this route\n // Express Route\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router(); // The '/' is the root for your homepage\n// So if user visits index, this router will call the pages controller for home\n\nrouter.get('/', _controllers_pages_home_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/home-route.js?");

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

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

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

/***/ "hpp":
/*!**********************!*\
  !*** external "hpp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hpp\");\n\n//# sourceURL=webpack:///external_%22hpp%22?");

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