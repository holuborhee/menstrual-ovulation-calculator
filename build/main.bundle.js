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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menstrualcycle = __webpack_require__(1);

var _menstrualcycle2 = _interopRequireDefault(_menstrualcycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myForm = document.getElementById('ovulationCalc');
var mentruation = document.getElementById('next_start');
var ovulation = document.getElementById('ovulation_period');

myForm.onsubmit = function (evt) {
	event.preventDefault();

	var form = evt.target;

	var cycleLength = form.cLength.value;
	var lastPeriod = form.lastPeriodDay.value;

	var m = new _menstrualcycle2.default(lastPeriod, cycleLength);

	console.log(m.nextMenstruationStart);
	console.log(m.nextOvulationDays);

	var d = m.nextMenstruationStart;
	mentruation.innerHTML = d.toLocaleDateString("engish", { weekday: 'short' }) + ' ' + d.getDate() + ' ' + d.toLocaleDateString("english", { month: 'long' });

	var _m$nextOvulationDays = m.nextOvulationDays,
	    start = _m$nextOvulationDays.start,
	    end = _m$nextOvulationDays.end;


	start = start.toLocaleDateString("english", { month: 'short' }) + ' ' + start.getDate();
	end = end.toLocaleDateString("english", { month: 'short' }) + ' ' + end.getDate();

	ovulation.innerHTML = start + ' and ' + end;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenstrualCycle = function () {
	function MenstrualCycle(firstDay, cycleLength) {
		_classCallCheck(this, MenstrualCycle);

		this.firstDay = firstDay;
		this.cycleLength = cycleLength;
	}

	_createClass(MenstrualCycle, [{
		key: "nextMenstruationStart",
		get: function get() {
			var d = new Date(this.firstDay);
			d.setDate(d.getDate() + +this.cycleLength);

			return d;
		}
	}, {
		key: "nextOvulationDays",
		get: function get() {

			var _this = this.nextMenstruationStart;
			var start = new Date(_this.getFullYear(), _this.getMonth(), _this.getDate() - 16, _this.getHours(), _this.getMinutes(), _this.getSeconds(), _this.getMilliseconds());
			var end = new Date();

			end.setDate(start.getDate() + 4);

			return { start: start, end: end };
		}
	}]);

	return MenstrualCycle;
}();

exports.default = MenstrualCycle;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map