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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Key.js":
/*!*******************!*\
  !*** ./js/Key.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Key; });\nclass Key {\n  constructor(valueRuLow, valueRuUp, valueEnLow, valueEnUp, keyCode, parent) {\n    this.valueRuLow = valueRuLow;\n    this.valueRuUp = valueRuUp;\n    this.valueEnLow = valueEnLow;\n    this.valueEnUp = valueEnUp;\n    this.parent = parent;\n    this.child = null;\n    this.button = null;\n    this.keyCode = keyCode;\n    this.createButton();\n  }\n\n  createButton() {\n    this.child = document.createElement('span');\n    this.child.innerText = this.valueRuLow;\n    this.button = document.createElement('div');\n    this.parent.append(this.button);\n    this.button.append(this.child);\n    this.button.classList.add('key');\n    this.button.id = this.keyCode;\n  }\n\n  render(language, capsState, shiftState) {\n    if (language === 'ru' && capsState === shiftState) {\n      this.child.innerText = this.valueRuLow;\n    }\n    if (language === 'ru' && capsState !== shiftState) {\n      this.child.innerText = this.valueRuUp;\n    }\n    if (language === 'en' && capsState === shiftState) {\n      this.child.innerText = this.valueEnLow;\n    }\n    if (language === 'en' && capsState !== shiftState) {\n      this.child.innerText = this.valueEnUp;\n    }\n\n    if (capsState === true && this.keyCode === 20) {\n      this.button.classList.add('active');\n    }\n    if (capsState === false && this.keyCode === 20) {\n      this.button.classList.remove('active');\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Key.js?");

/***/ }),

/***/ "./js/Keyboard.js":
/*!************************!*\
  !*** ./js/Keyboard.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ \"./js/Key.js\");\n\n\nclass Keyboard {\n  constructor(parent, textTarget) {\n    this.ruLow = [\n      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\\\', 'DEL'],\n      ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],\n      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],\n      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],\n    ];\n\n    this.enLow = [\n      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'DEL'],\n      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter'],\n      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],\n      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],\n    ];\n\n    this.ruUp = [\n      ['Ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],\n      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\\\', 'DEL'],\n      ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],\n      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],\n      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],\n    ];\n\n    this.enUp = [\n      ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],\n      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\\\', 'DEL'],\n      ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\\'', 'Enter'],\n      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],\n      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],\n    ];\n\n    this.keyCodes = [\n      [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],\n      [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],\n      [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],\n      ['16l', 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, '16r'],\n      ['17l', 91, '18l', 32, '18r', 37, 40, 39, '17r'],\n    ];\n\n    this.parent = parent;\n    this.textTarget = textTarget;\n\n    this.state = {\n      language: 'ru',\n      capsLock: false,\n      shift: false,\n      alt: false,\n    };\n\n\n    this.keys = [];\n    this.container = document.createElement('div');\n    this.container.classList.add('keyboard-container');\n    this.parent.append(this.container);\n\n    this.fillRows();\n    Keyboard.setControlsClasses();\n    this.loadState();\n    this.makeClickable();\n    this.textTarget.addEventListener('keypress', (e) => {\n      e.preventDefault();\n    });\n\n    document.addEventListener('keydown', (e) => {\n      const { keyCode } = e;\n\n      let searchCode = keyCode;\n      if (e.keyCode >= 16 && e.keyCode <= 18) {\n        searchCode += (e.code.includes('Right') ? 'r' : 'l');\n      }\n      const targetDiv = document.getElementById(searchCode);\n\n      if (targetDiv === null) {\n        return;\n      }\n\n      if (e.keyCode === 9) {\n        e.preventDefault();\n      }\n\n      if (targetDiv.id === '8') {\n        this.textTarget.value = this.textTarget.value.slice(0, -1);\n      }\n\n      if (targetDiv.id === '13') {\n        this.textTarget.value += '\\n';\n      }\n\n      if (!targetDiv.classList.contains('control')) {\n        this.textTarget.value += targetDiv.children[0].textContent;\n      }\n\n      targetDiv.classList.add('keydown');\n      this.capsToggle(keyCode);\n      this.setShift(keyCode);\n      this.setAlt(keyCode);\n      this.toggleLanguage(keyCode);\n    });\n\n    document.addEventListener('keyup', (e) => {\n      const { keyCode } = e;\n\n      let searchCode = keyCode;\n      if (e.keyCode >= 16 && e.keyCode <= 18) {\n        searchCode += (e.code.includes('Right') ? 'r' : 'l');\n      }\n      const targetDiv = document.getElementById(searchCode);\n\n      if (targetDiv === null) {\n        return;\n      }\n      targetDiv.classList.remove('keydown');\n      this.clearShift(keyCode);\n      this.clearAlt(keyCode);\n    });\n  }\n\n  fillRows() {\n    for (let i = 0; i < 5; i += 1) {\n      this.row = document.createElement('div');\n      this.row.classList.add('row');\n      this.container.append(this.row);\n      for (let j = 0; j < this.ruLow[i].length; j += 1) {\n        this.keys.push(\n          new _Key__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ruLow[i][j],\n            this.ruUp[i][j],\n            this.enLow[i][j],\n            this.enUp[i][j],\n            this.keyCodes[i][j],\n            this.row),\n        );\n      }\n    }\n  }\n\n  capsToggle(keyCode) {\n    if (keyCode === 20) {\n      this.state.capsLock = !this.state.capsLock;\n      this.render();\n    }\n  }\n\n  setShift(keyCode) {\n    if (keyCode === 16) {\n      this.state.shift = true;\n      this.render();\n    }\n  }\n\n  clearShift(keyCode) {\n    if (keyCode === 16) {\n      this.state.shift = false;\n      this.render();\n    }\n  }\n\n  setAlt(keyCode) {\n    if (keyCode === 18) {\n      this.state.alt = true;\n      this.render();\n    }\n  }\n\n  clearAlt(keyCode) {\n    if (keyCode === 18) {\n      this.state.alt = false;\n      this.render();\n    }\n  }\n\n  toggleLanguage(keyCode) {\n    if (keyCode !== 18 && keyCode !== 16) {\n      return;\n    }\n\n    if (!this.state.shift) {\n      return;\n    }\n    if (!this.state.alt) {\n      return;\n    }\n\n    if (this.state.language === 'ru') {\n      this.state.language = 'en';\n    } else {\n      this.state.language = 'ru';\n    }\n    this.saveState();\n    this.render();\n  }\n\n  static setControlsClasses() {\n    const space = document.getElementById('32');\n    space.classList.add('space');\n\n    const altR = document.getElementById('18r');\n    altR.classList.add('alt', 'control');\n\n    const ctrlR = document.getElementById('17r');\n    ctrlR.classList.add('ctrl', 'control');\n\n    const shiftR = document.getElementById('16r');\n    shiftR.classList.add('shift', 'control');\n\n    const altL = document.getElementById('18l');\n    altL.classList.add('alt', 'control');\n\n    const ctrlL = document.getElementById('17l');\n    ctrlL.classList.add('ctrl', 'control');\n\n    const shiftL = document.getElementById('16l');\n    shiftL.classList.add('shift', 'control');\n\n    const backspace = document.getElementById('8');\n    backspace.classList.add('backspace', 'control');\n\n    const caps = document.getElementById('20');\n    caps.classList.add('caps', 'control');\n\n    const enter = document.getElementById('13');\n    enter.classList.add('enter', 'control');\n\n    const tab = document.getElementById('9');\n    tab.classList.add('tab', 'control');\n\n    const win = document.getElementById('91');\n    win.classList.add('win', 'control');\n\n    const arrowUp = document.getElementById('38');\n    arrowUp.classList.add('arrow-up', 'control');\n\n    const arrowDown = document.getElementById('40');\n    arrowDown.classList.add('arrow-down', 'control');\n\n    const arrowLeft = document.getElementById('37');\n    arrowLeft.classList.add('arrow-left', 'control');\n\n    const arrowRight = document.getElementById('39');\n    arrowRight.classList.add('arrow-right', 'control');\n\n    const del = document.getElementById('46');\n    del.classList.add('del', 'control');\n  }\n\n  saveState() {\n    localStorage.setItem('lang', this.state.language);\n  }\n\n  loadState() {\n    const lang = localStorage.getItem('lang');\n    if (lang !== null) {\n      this.state.language = lang;\n    }\n    this.render();\n  }\n\n  makeClickable() {\n    this.container.addEventListener('click', (event) => {\n      const { target } = event;\n      if (target.tagName !== 'SPAN') return;\n      if (target.parentElement.classList.contains('control')) return;\n      this.textTarget.value += target.textContent;\n    });\n\n    const controls = document.querySelectorAll('.control');\n    controls.forEach((el) => {\n      el.addEventListener('click', (event) => {\n        if (event.target.parentElement.id === '8') {\n          this.textTarget.value = this.textTarget.value.slice(0, -1);\n        }\n        if (event.target.parentElement.id === '13') {\n          this.textTarget.value += '\\n';\n        }\n      });\n    });\n  }\n\n  render() {\n    this.keys.forEach((key) => {\n      key.render(this.state.language, this.state.capsLock, this.state.shift);\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Keyboard.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keyboard */ \"./js/Keyboard.js\");\n\n\nconst wrapper = document.createElement('div');\nwrapper.classList.add('wrapper');\n\nconst textArea = document.createElement('textarea');\ndocument.body.append(wrapper);\nwrapper.prepend(textArea);\n\n\nconst keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](wrapper, textArea);\nkeyboard.render();\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });