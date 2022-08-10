module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function connect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI);\n  connection.isConnected = db.connections[0].readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9mYjY2Il0sIm5hbWVzIjpbImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFVBQVUsR0FBQyxFQUFqQjs7QUFFQSxlQUFlQyxPQUFmLEdBQXdCO0FBQ3BCLE1BQUdELFVBQVUsQ0FBQ0UsV0FBZCxFQUEwQjtBQUN0QjtBQUNIOztBQUVELFFBQU1DLEVBQUUsR0FBRyxNQUFNQywrQ0FBUSxDQUFDSCxPQUFULENBQWlCSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBN0IsQ0FBakI7QUFFQVAsWUFBVSxDQUFDRSxXQUFYLEdBQXdCQyxFQUFFLENBQUNLLFdBQUgsQ0FBZSxDQUFmLEVBQWtCQyxVQUExQztBQUNIOztBQUVjUixzRUFBZiIsImZpbGUiOiIuL2xpYi9tb25nb2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBjb25uZWN0aW9uPXt9O1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCl7XG4gICAgaWYoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpXG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID1kYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/mongodb.js\n");

/***/ }),

/***/ "./model/schema.js":
/*!*************************!*\
  !*** ./model/schema.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst userSchema = new _mongoose.default.Schema({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = _mongoose.default.models.User || _mongoose.default.model(\"User\", userSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbC9zY2hlbWEuanM/YWZiNCJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInBhc3N3b3JkIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUVBLE1BQU1BLFVBQVUsR0FBRyxJQUFJQyxrQkFBU0MsTUFBYixDQUFvQjtBQUNuQ0MsT0FBSyxFQUFDO0FBQ0ZDLFFBQUksRUFBQ0MsTUFESDtBQUVGQyxZQUFRLEVBQUMsSUFGUDtBQUdGQyxVQUFNLEVBQUM7QUFITCxHQUQ2QjtBQU1uQ0MsVUFBUSxFQUFDO0FBQ0xKLFFBQUksRUFBQ0MsTUFEQTtBQUVMQyxZQUFRLEVBQUM7QUFGSjtBQU4wQixDQUFwQixDQUFuQjtBQWFBRyxNQUFNLENBQUNDLE9BQVAsR0FBZ0JULGtCQUFTVSxNQUFULENBQWdCQyxJQUFoQixJQUF3Qlgsa0JBQVNZLEtBQVQsQ0FBZSxNQUFmLEVBQXNCYixVQUF0QixDQUF4QyIsImZpbGUiOiIuL21vZGVsL3NjaGVtYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGVtYWlsOntcbiAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXG4gICAgICAgIHVuaXF1ZTp0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDp0cnVlXG4gICAgfVxuXG59KVxuXG5tb2R1bGUuZXhwb3J0cz0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsdXNlclNjaGVtYSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./model/schema.js\n");

/***/ }),

/***/ "./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"./lib/mongodb.js\");\n/* harmony import */ var _model_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/schema */ \"./model/schema.js\");\n/* harmony import */ var _model_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_schema__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nasync function handler(req, res) {\n  try {\n    const user = await _model_schema__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);\n    res.redirect('/');\n\n    if (!user) {\n      return res.json({\n        \"code\": \"User not created\"\n      });\n    }\n  } catch (error) {\n    res.status(400).json({\n      status: \"Not able to create a new user\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanM/MTU5YiJdLCJuYW1lcyI6WyJjb25uZWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXIiLCJVc2VyIiwiY3JlYXRlIiwiYm9keSIsInJlZGlyZWN0IiwianNvbiIsImVycm9yIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSw0REFBTztBQUVRLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTJCQyxHQUEzQixFQUErQjtBQUMxQyxNQUFJO0FBQ0EsVUFBTUMsSUFBSSxHQUFFLE1BQU1DLG9EQUFJLENBQUNDLE1BQUwsQ0FBWUosR0FBRyxDQUFDSyxJQUFoQixDQUFsQjtBQUNBSixPQUFHLENBQUNLLFFBQUosQ0FBYSxHQUFiOztBQUNBLFFBQUcsQ0FBQ0osSUFBSixFQUFTO0FBQ0wsYUFBT0QsR0FBRyxDQUFDTSxJQUFKLENBQVM7QUFBQyxnQkFBTztBQUFSLE9BQVQsQ0FBUDtBQUNIO0FBR0osR0FSRCxDQVFFLE9BQU9DLEtBQVAsRUFBYztBQUNaUCxPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDRSxZQUFNLEVBQUM7QUFBUixLQUFyQjtBQUVIO0FBQ0oiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIjtcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVsL3NjaGVtYSc7XG5cbmNvbm5lY3QoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPWF3YWl0IFVzZXIuY3JlYXRlKHJlcS5ib2R5KTtcbiAgICAgICAgcmVzLnJlZGlyZWN0KCcvJylcbiAgICAgICAgaWYoIXVzZXIpe1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcImNvZGVcIjpcIlVzZXIgbm90IGNyZWF0ZWRcIn0pXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3RhdHVzOlwiTm90IGFibGUgdG8gY3JlYXRlIGEgbmV3IHVzZXJcIn0pXG4gICAgICAgIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/register.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });