/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _net = __webpack_require__(1);\n\nconsole.log(1);\nquery_str = {\n\t\tfrom: 'en',\n\t\tto: 'zh - CHS',\n\t\ttext: 'equator'\n};\n(0, _net.ajax)(query_str);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJxdWVyeV9zdHIiLCJmcm9tIiwidG8iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBQSxRQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNBQyxZQUFZO0FBQ1ZDLFFBQU0sSUFESTtBQUVWQyxNQUFJLFVBRk07QUFHVkMsUUFBTTtBQUhJLENBQVo7QUFLQSxlQUFLSCxTQUFMIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhamF4IH0gZnJvbSAnLi9saWIvbmV0J1xuY29uc29sZS5sb2coMSlcbnF1ZXJ5X3N0ciA9IHtcblx0XHRmcm9tOiAnZW4nLFxuXHRcdHRvOiAnemggLSBDSFMnLFxuXHRcdHRleHQ6ICdlcXVhdG9yJ1xufVxuYWpheChxdWVyeV9zdHIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.ajax = ajax;\n\nvar _setting = __webpack_require__(2);\n\nfunction ajax(query_str) {\n\tvar form = document.createElement('form');\n\tform.action = _setting.setting.url;\n\n\tObject.keys(query_str).forEach(function (e) {\n\t\tadd_key_value(e, query_str[e], form);\n\t});\n\tform.method = _setting.setting.method;\n\tform.submit();\n}\n\nfunction add_key_value(key, value, form) {\n\tform.innerHTML = form.innerHTML + '<input name=' + key + ' value=' + value + '>';\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbmV0LmpzPzZhYTMiXSwibmFtZXMiOlsiYWpheCIsInF1ZXJ5X3N0ciIsImZvcm0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhY3Rpb24iLCJ1cmwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImUiLCJhZGRfa2V5X3ZhbHVlIiwibWV0aG9kIiwic3VibWl0Iiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxJLEdBQUFBLEk7O0FBRGhCOztBQUNPLFNBQVNBLElBQVQsQ0FBY0MsU0FBZCxFQUF5QjtBQUMvQixLQUFJQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQUYsTUFBS0csTUFBTCxHQUFjLGlCQUFRQyxHQUF0Qjs7QUFFQUMsUUFBT0MsSUFBUCxDQUFZUCxTQUFaLEVBQXVCUSxPQUF2QixDQUFnQyxVQUFTQyxDQUFULEVBQVk7QUFDM0NDLGdCQUFjRCxDQUFkLEVBQWlCVCxVQUFVUyxDQUFWLENBQWpCLEVBQStCUixJQUEvQjtBQUNBLEVBRkQ7QUFHQUEsTUFBS1UsTUFBTCxHQUFjLGlCQUFRQSxNQUF0QjtBQUNBVixNQUFLVyxNQUFMO0FBQ0E7O0FBRUQsU0FBU0YsYUFBVCxDQUF1QkcsR0FBdkIsRUFBNEJDLEtBQTVCLEVBQW1DYixJQUFuQyxFQUF5QztBQUN4Q0EsTUFBS2MsU0FBTCxHQUFpQmQsS0FBS2MsU0FBTCxHQUFpQixjQUFqQixHQUFrQ0YsR0FBbEMsR0FBd0MsU0FBeEMsR0FBb0RDLEtBQXBELEdBQTRELEdBQTdFO0FBQ0EiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldHRpbmcgfSBmcm9tICcuLi9zZXR0aW5nJ1xuZXhwb3J0IGZ1bmN0aW9uIGFqYXgocXVlcnlfc3RyKSB7XG5cdHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG5cdGZvcm0uYWN0aW9uID0gc2V0dGluZy51cmxcblxuXHRPYmplY3Qua2V5cyhxdWVyeV9zdHIpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcblx0XHRhZGRfa2V5X3ZhbHVlKGUsIHF1ZXJ5X3N0cltlXSwgZm9ybSlcblx0fSkpXG5cdGZvcm0ubWV0aG9kID0gc2V0dGluZy5tZXRob2Rcblx0Zm9ybS5zdWJtaXQoKVxufVxuXG5mdW5jdGlvbiBhZGRfa2V5X3ZhbHVlKGtleSwgdmFsdWUsIGZvcm0pIHtcblx0Zm9ybS5pbm5lckhUTUwgPSBmb3JtLmlubmVySFRNTCArICc8aW5wdXQgbmFtZT0nICsga2V5ICsgJyB2YWx1ZT0nICsgdmFsdWUgKyAnPic7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL25ldC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = {\n\turl: 'http://www.bing.com/translator/api/Dictionary/Lookup',\n\tmethod: 'get'\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXR0aW5nLmpzPzgyNDUiXSwibmFtZXMiOlsidXJsIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBZTtBQUNkQSxNQUFJLHNEQURVO0FBRWRDLFNBQU87QUFGTyxDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cdHVybDonaHR0cDovL3d3dy5iaW5nLmNvbS90cmFuc2xhdG9yL2FwaS9EaWN0aW9uYXJ5L0xvb2t1cCcsXG5cdG1ldGhvZDonZ2V0J1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NldHRpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);