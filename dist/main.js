/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: monospace;
  overflow: hidden;
}

:root {
  --primary-color: #06b6d4;
  --secondary-color: #f97316;
}

body, #page-holder {
  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);
  width: 100%;
}

div.cell {
  background-color: color-mix(in srgb, var(--primary-color) 20%, white 80%);
  border: 2px solid black;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: none;
}

#grid {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 2px;
}

.board {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 2px;
}

div.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 2px;
}

div#game-holder {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

div#page-holder {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 100px;
}

/* div.cell:hover {
  background-color: gray;
} */

div.cell.full-cell, div.cell.alive {
  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);
  opacity: 0.9;
}

div.cell.enemy-cell:hover {
  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);
  cursor: pointer;
}

div.cell.sunk-ship {
  background-color: var(--secondary-color);
}

div.cell.hit {
  position: relative;
}

div.cell.hit::after { 
  content: '';
  position: absolute;
  top: 20px;
  right: 20px;
  width: 10px;
  height: 10px;
  border-radius: 500px;
  color: var(--secondary-color);
  background-color: var(--secondary-color);
}

div.hovered {
  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);
  opacity: 0.5;
}

div.illegal-hovered {
  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);
}

div.setup-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}

dialog#setup {
  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);
  border: none;
  margin-top: 65px;
}

#setup .title {
  font-size: 25px;
  font-weight: bolder;
}

#button-list {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px
}

div.title-button-row {
  display: flex;
  justify-content: space-around;
  column-gap: 100px;
}

div.mode {
  font-weight: bolder;
  font-size: 50px;
  cursor: pointer;
  user-select: none;
  padding: 8px;
  border-radius: 5px;
  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);
}

div.mode.selected {
  transition: 0.75s;
  background-color: rgba(var(--primary-color), 0.3);
  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);
}

div.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 100px;
}

div#game-title {
  font-size: 25px;
  font-weight: bold;
}

dialog#title-screen {
  border: none;
  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);
  z-index: 10;
  margin-top: 50px;
}

dialog::backdrop {
  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);
  z-index: 10;
}

#start, #button-list button, .reset, .switch {
  border: none;
  font-size: 25px;
  font-weight: bolder;
  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 40%);
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  user-select: none;
}

#focusonme {
  outline: none;
  width: 0;
  height: 0;
  border: 0;
  font-size: 0;
  background: transparent;
}

.footer {
  padding: 0.2rem;
  width: 100%;
  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.footer img {
  width: 1.5rem;
  margin-bottom: -0.2rem;
  margin-right: 0.5rem;
}
.footer a {
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
}

#turn-indicator {
  font-size: 25px;
  font-weight: bolder;
  margin-top: 80px;
}

#setup-wrapper {
  display: flex;
  flex-direction: column;
}

.reset {
  position: fixed;
  top: 5px;
  right: 50px;
}

.switch {
  position: fixed;
  top: 5px;
  right: 150px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;AAC5B;;AAEA;EACE,yEAAyE;EACzE,WAAW;AACb;;AAEA;EACE,yEAAyE;EACzE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;;GAEG;;AAEH;EACE,yEAAyE;EACzE,YAAY;AACd;;AAEA;EACE,2EAA2E;EAC3E,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,6BAA6B;EAC7B,wCAAwC;AAC1C;;AAEA;EACE,yEAAyE;EACzE,YAAY;AACd;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,yEAAyE;EACzE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB;AACF;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,yEAAyE;AAC3E;;AAEA;EACE,iBAAiB;EACjB,iDAAiD;EACjD,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,yEAAyE;EACzE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yEAAyE;EACzE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,2EAA2E;EAC3E,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,SAAS;EACT,SAAS;EACT,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,yEAAyE;EACzE,eAAe;EACf,SAAS;EACT,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,YAAY;AACd","sourcesContent":["* {\n  font-family: monospace;\n  overflow: hidden;\n}\n\n:root {\n  --primary-color: #06b6d4;\n  --secondary-color: #f97316;\n}\n\nbody, #page-holder {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  width: 100%;\n}\n\ndiv.cell {\n  background-color: color-mix(in srgb, var(--primary-color) 20%, white 80%);\n  border: 2px solid black;\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n}\n\n#grid {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\ndiv.row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\ndiv#game-holder {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n\ndiv#page-holder {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 100px;\n}\n\n/* div.cell:hover {\n  background-color: gray;\n} */\n\ndiv.cell.full-cell, div.cell.alive {\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  opacity: 0.9;\n}\n\ndiv.cell.enemy-cell:hover {\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n  cursor: pointer;\n}\n\ndiv.cell.sunk-ship {\n  background-color: var(--secondary-color);\n}\n\ndiv.cell.hit {\n  position: relative;\n}\n\ndiv.cell.hit::after { \n  content: '';\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 10px;\n  height: 10px;\n  border-radius: 500px;\n  color: var(--secondary-color);\n  background-color: var(--secondary-color);\n}\n\ndiv.hovered {\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  opacity: 0.5;\n}\n\ndiv.illegal-hovered {\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n}\n\ndiv.setup-title-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n\ndialog#setup {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  border: none;\n  margin-top: 65px;\n}\n\n#setup .title {\n  font-size: 25px;\n  font-weight: bolder;\n}\n\n#button-list {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 8px\n}\n\ndiv.title-button-row {\n  display: flex;\n  justify-content: space-around;\n  column-gap: 100px;\n}\n\ndiv.mode {\n  font-weight: bolder;\n  font-size: 50px;\n  cursor: pointer;\n  user-select: none;\n  padding: 8px;\n  border-radius: 5px;\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n}\n\ndiv.mode.selected {\n  transition: 0.75s;\n  background-color: rgba(var(--primary-color), 0.3);\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n}\n\ndiv.title-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 100px;\n}\n\ndiv#game-title {\n  font-size: 25px;\n  font-weight: bold;\n}\n\ndialog#title-screen {\n  border: none;\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  z-index: 10;\n  margin-top: 50px;\n}\n\ndialog::backdrop {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  z-index: 10;\n}\n\n#start, #button-list button, .reset, .switch {\n  border: none;\n  font-size: 25px;\n  font-weight: bolder;\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 40%);\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n  user-select: none;\n}\n\n#focusonme {\n  outline: none;\n  width: 0;\n  height: 0;\n  border: 0;\n  font-size: 0;\n  background: transparent;\n}\n\n.footer {\n  padding: 0.2rem;\n  width: 100%;\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.footer img {\n  width: 1.5rem;\n  margin-bottom: -0.2rem;\n  margin-right: 0.5rem;\n}\n.footer a {\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: black;\n}\n\n#turn-indicator {\n  font-size: 25px;\n  font-weight: bolder;\n  margin-top: 80px;\n}\n\n#setup-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.reset {\n  position: fixed;\n  top: 5px;\n  right: 50px;\n}\n\n.switch {\n  position: fixed;\n  top: 5px;\n  right: 150px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  #length;
  #hitCount = 0;
  constructor(length) {
    this.#length = length;
  }

  hit() {
    if (this.#hitCount >= this.#length) throw "ship has reached max hits";
    this.#hitCount++;
  }

  isSunk() {
    if (this.#hitCount >= this.#length) return true;
    return false;
  }

  getLength() {
    return this.#length;
  }

  getHitCount() {
    return this.#hitCount;
  }
}

class Gameboard {
  #size = 10;
  constructor() {
    this.init();
  }

  init() {
    this.backingArray = new Array(this.#size);
    this.hitArray = new Array(this.#size);
    for (let i = 0; i < this.#size; i++) {
      this.backingArray[i] = new Array(this.#size);
      this.hitArray[i] = new Array(this.#size);
      for (let j = 0; j < this.#size; j++) {
        this.backingArray[i][j] = 0;
        this.hitArray[i][j] = false;
      }
    }
  }

  isLegalSquare([c1, c2]) {
    if (c1 < 0 || c1 >= this.#size || c2 < 0 || c2 >= this.#size) {
      return false;
    }
    return true;
  }

  isPlaceable(start, stop) {
    if (!this.isLegalSquare(start)) return false;
    if (!this.isLegalSquare(stop)) return false;
    if (this.shipExistsInRange(start, stop)) {
      return false;
    }
    let length = 0;
    if (start[0] == stop[0]) {
      length = Math.abs(stop[1] - start[1]) + 1;
    } else if (start[1] == stop[1]) {
      length = Math.abs(Math.abs(stop[0] - start[0])) + 1;
    }
    if (length == 0) return false;
    return length;
  }
  placeShip(start, stop) {
    let length = this.isPlaceable(start, stop);
    if (length === false) return false;
    // length is 0 if none of the above 2 are entered so this acocunts for
    // non-line placement attempts
    this.#placeShipH(start, stop, length);
    return true;
  }
  false;
  #placeShipH(start, stop, length) {
    let ship = new Ship(length);
    for (
      let i = Math.min(start[0], stop[0]);
      i <= Math.max(start[0], stop[0]);
      i++
    ) {
      for (
        let j = Math.min(start[1], stop[1]);
        j <= Math.max(start[1], stop[1]);
        j++
      ) {
        this.backingArray[i][j] = ship;
      }
    }
  }

  receiveAttack(coordinate) {
    if (this.isHit(coordinate)) return false;
    if (this.shipExists(coordinate)) {
      this.backingArray[coordinate[0]][coordinate[1]].hit();
    }
    this.hitArray[coordinate[0]][coordinate[1]] = true;
    return true;
  }

  isHit(coordinate) {
    if (this.hitArray[coordinate[0]][coordinate[1]]) {
      return true;
    }
    return false;
  }

  allShipsSunk() {
    for (let i = 0; i < this.backingArray.length; i++) {
      for (let j = 0; j < this.backingArray[0].length; j++) {
        if (
          this.backingArray[i][j] instanceof Ship &&
          !this.backingArray[i][j].isSunk()
        ) {
          return false;
        }
      }
    }
    return true;
  }

  shipExists(coordinate) {
    if (this.backingArray[coordinate[0]][coordinate[1]] instanceof Ship) {
      return true;
    }
    return false;
  }

  shipExistsInRange(c1, c2) {
    for (let i = Math.min(c1[0], c2[0]); i <= Math.max(c1[0], c2[0]); i++) {
      for (let j = Math.min(c1[1], c2[1]); j <= Math.max(c1[1], c2[1]); j++) {
        if (this.shipExists([i, j])) return true;
      }
    }
    return false;
  }

  onlyShipExistsInRange(c1, c2) {
    for (let i = Math.min(c1[0], c2[0]); i <= Math.max(c1[0], c2[0]); i++) {
      for (let j = Math.min(c1[1], c2[1]); j <= Math.max(c1[1], c2[1]); j++) {
        if (!this.shipExists([i, j])) return false;
      }
    }
    return true;
  }

  getBackingArray() {
    return this.backingArray;
  }

  getHitArray() {
    return this.hitArray;
  }

  reset() {
    this.init();
  }
}

class Player {}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");



const board1 = document.querySelector("#board1");
const board2 = document.querySelector("#board2");
const setupDialogue = document.querySelector("#setup");
const setupGrid = document.querySelector("#grid"); //bit misleading naming
const buttonList = document.querySelector("#button-list");
const pregameStates = [5, 5, 4, 4, 3, 3, 2, 2]; // lengths of the ships that will be placed
const turnIndicator = document.querySelector("#turn-indicator");
const titleScreen = document.querySelector("#title-screen");
const singleplayer = document.querySelector("#singleplayer");
const multiplayer = document.querySelector("#multiplayer");
const pregameTitle = document.querySelector("dialog .title");
const resetD1 = document.querySelector("#reset-d1");
const switchD1 = document.querySelector("#switch-d1");
const resetD2 = document.querySelector("#reset-d2");
const switchD2 = document.querySelector("#switch-d2");
const resetR = document.querySelector("#reset-r");
const switchR = document.querySelector("#switch-r");
const root = document.querySelector(":root");
const COMPUTER_PAUSE = 2000;
const PASS_PAUSE = 5000;
const TEXT_PAUSE = 700;
let turn = -1; // universal turn tracker to disable/enable attack events
let mode = -1; // 0: singleplayer mode, 1: multiplayer mode

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && (setupDialogue.open || titleScreen.open)) {
    e.preventDefault();
  }
});

singleplayer.addEventListener("click", (e) => {
  multiplayer.classList.remove("selected");
  singleplayer.classList.add("selected");
  mode = 0;
});

multiplayer.addEventListener("click", (e) => {
  singleplayer.classList.remove("selected");
  multiplayer.classList.add("selected");
  mode = 1;
});

function homeRenderBoard(board, gameBoard) {
  let arr = gameBoard.getBackingArray();
  let hitArr = gameBoard.getHitArray();
  board.innerHTML = "";
  let row;
  for (let i = 0; i < arr.length; i++) {
    row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j < arr[0].length; j++) {
      let cell = document.createElement("div");
      cell.classList.toggle("cell");
      let isShip = arr[i][j] instanceof _classes_js__WEBPACK_IMPORTED_MODULE_1__.Ship;
      let isSunk = false;
      if (isShip) {
        if (arr[i][j].isSunk()) isSunk = true;
      }
      if (isSunk) {
        cell.classList.toggle("sunk-ship");
      } else if (hitArr[i][j] && isShip) {
        cell.classList.toggle("hit");
        cell.classList.toggle("alive");
      } else if (hitArr[i][j] && !isShip) {
        cell.classList.toggle("hit");
      } else if (!isSunk && isShip) {
        cell.classList.toggle("full-cell");
      }
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function enemyRenderBoard(board, gameBoard) {
  let arr = gameBoard.getBackingArray();
  let hitArr = gameBoard.getHitArray();
  board.innerHTML = "";
  let row;
  for (let i = 0; i < arr.length; i++) {
    row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j < arr[0].length; j++) {
      let cell = document.createElement("div");
      cell.classList.toggle("cell");
      row.appendChild(cell);

      let isShip = arr[i][j] instanceof _classes_js__WEBPACK_IMPORTED_MODULE_1__.Ship;
      let isSunk = false;
      if (isShip) {
        if (arr[i][j].isSunk()) isSunk = true;
      }
      if (isSunk) {
        cell.classList.toggle("sunk-ship");
        continue;
      } else if (hitArr[i][j] && isShip) {
        cell.classList.toggle("alive");
        cell.classList.toggle("hit");
      } else if (hitArr[i][j] && !isShip) {
        cell.classList.toggle("hit");
      } else {
        cell.classList.toggle("enemy-cell");
        cell.addEventListener("click", () => {
          // either player 1's turn in both single player and multiplayer
          // or player 2's (player1 is the enemy gb) turn in multiplayer only.
          if (turn == 0 || (mode == 1 && gameBoard == player1 && turn == 1)) {
            gameBoard.receiveAttack([i, j]);
            enemyRenderBoard(board, gameBoard);
            gameChecker();
          }
        });
      }
    }
    board.appendChild(row);
  }
}

function displaySetup(gameBoard) {
  return new Promise((resolve, reject) => {
    if (gameBoard == player1) {
      writeOut("Please choose Player 1's ships", pregameTitle);
    } else {
      writeOut("Please choose Player 2's ships", pregameTitle);
    }
    let pregamePointer = 0;
    setupDialogue.showModal();
    let gridArr = new Array(10);
    for (let i = 0; i < 10; i++) {
      gridArr[i] = new Array(10);
    }
    buttonList.innerHTML = "";
    const rotate = document.createElement("button");
    const randButt = document.createElement("button");
    const restart = document.createElement("button");
    const done = document.createElement("button");
    rotate.innerText = "rotate";
    randButt.innerText = "randomize";
    restart.innerText = "restart";
    done.innerText = "done!";
    rotate.addEventListener("click", () => {
      setupDialogue.classList.toggle("v");
      pregameRenderBoard();
    });
    randButt.addEventListener("click", () => {
      randomize(gameBoard);
      pregamePointer = pregameStates.length;
      pregameRenderBoard();
    });
    restart.addEventListener("click", () => {
      pregamePointer = 0;
      gameBoard.reset();
      pregameRenderBoard();
    });
    setTimeout(() => {
      done.addEventListener("click", () => {
        if (pregamePointer >= pregameStates.length) {
          setupDialogue.close();
          resolve();
        }
      });
    }, TEXT_PAUSE + 500);
    buttonList.appendChild(rotate);
    buttonList.appendChild(randButt);
    buttonList.appendChild(restart);
    buttonList.appendChild(done);
    pregameRenderBoard();

    function pregameRenderBoard() {
      let direction = setupDialogue.classList.contains("v") ? "v" : "h";
      let arr = gameBoard.getBackingArray();
      setupGrid.innerHTML = "";
      let row;
      for (let i = 0; i < arr.length; i++) {
        row = document.createElement("div");
        row.classList.toggle("row");
        for (let j = 0; j < arr[0].length; j++) {
          let cell = document.createElement("div");
          row.appendChild(cell);
          gridArr[i][j] = cell;
          cell.classList.toggle("cell");

          if (arr[i][j] instanceof _classes_js__WEBPACK_IMPORTED_MODULE_1__.Ship) {
            cell.classList.toggle("full-cell");
            continue;
          }

          let length = pregameStates[pregamePointer];
          let start = [i, j];
          let end = [-1, -1];
          if (direction == "v") {
            end = [i + length - 1, j];
          } else if (direction == "h") {
            end = [i, j + length - 1];
          }

          cell.addEventListener("click", () => {
            if (gameBoard.placeShip([i, j], end)) {
              pregamePointer++;
              pregameRenderBoard(direction);
            }
          });

          cell.addEventListener("mouseenter", (e) =>
            handleHover(
              start,
              length,
              direction,
              gridArr,
              gameBoard.isPlaceable(start, end)
            )
          );
          cell.addEventListener("mouseleave", () => resetHover());
          gridArr[i][j] = cell;
        }
        setupGrid.appendChild(row);
      }
    }

    function handleHover(start, length, direction, arr, legality) {
      for (let i = 0; i < length; i++) {
        let currentSquare;

        if (direction == "h") {
          if (start[1] + i < 10) currentSquare = arr[start[0]][start[1] + i];
        } else if (direction == "v") {
          if (start[0] + i < 10) currentSquare = arr[start[0] + i][start[1]];
        }

        if (currentSquare && legality) {
          currentSquare.classList.add("hovered");
        } else if (currentSquare && !legality) {
          currentSquare.classList.add("illegal-hovered");
        }
      }
    }
  });
}

function resetHover() {
  document.querySelectorAll(".hovered").forEach((square) => {
    square.classList.remove("hovered");
  });
  document.querySelectorAll(".illegal-hovered").forEach((square) => {
    square.classList.remove("illegal-hovered");
  });
}

function randomize(gameBoard) {
  gameBoard.reset();
  let pregamePointer = 0;
  while (pregamePointer < pregameStates.length) {
    let direction = Math.floor(Math.random() * 2);
    let start = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    let end = [-1, -1];
    if (direction == 0) {
      end = [start[0], start[1] + pregameStates[pregamePointer] - 1];
    } else if (direction == 1) {
      end = [start[0] + pregameStates[pregamePointer] - 1, start[1]];
    }
    if (gameBoard.placeShip(start, end)) pregamePointer++;
  }
}

function getWinner(gb1, gb2) {
  if (gb1.allShipsSunk()) {
    return gb2;
  } else if (gb2.allShipsSunk()) {
    return gb1;
  }
  return -1;
}

// moderator/ref (intermediate state)
function gameChecker() {
  let prevturn = turn;
  turn = -1; // intermediate mode
  let winner = getWinner(player1, player2);
  if (winner == player1) {
    displayWinner(player1);
    return;
  } else if (winner == player2) {
    displayWinner(player2);
    return;
  }
  if (mode == 1) {
    writeOut(
      `You have 5 seconds to pass the device to the other player`,
      turnIndicator
    );
  }
  if (prevturn == 0) {
    // if the incoming turn was 0, execute turn 1
    if (mode == 0) {
      setTurnGUI(player2);
      setTimeout(() => {
        turn = 1;
        attackWithComputer(player1);
        homeRenderBoard(board1, player1);
        return;
      }, COMPUTER_PAUSE); // give the impression that the computer is thinking lol
    } else if (mode == 1) {
      setTimeout(() => {
        setTurnGUI(player2);
        enemyRenderBoard(board1, player1);
        homeRenderBoard(board2, player2);
        setTimeout(() => {
          turn = 1;
        }, 500);
      }, PASS_PAUSE);
    }
  } else if (prevturn == 1) {
    // if the incoming turn was 1, execute turn 0
    if (mode == 0) {
      setTurnGUI(player1);
      setTimeout(() => {
        turn = 0;
        enemyRenderBoard(board2, player2);
      }, TEXT_PAUSE);
    } else if (mode == 1) {
      setTimeout(() => {
        setTurnGUI(player1);
        enemyRenderBoard(board2, player2);
        homeRenderBoard(board1, player1);
        setTimeout(() => {
          turn = 0;
        }, 500);
      }, PASS_PAUSE);
    }
  }
}

function attackWithComputer(gb) {
  let arr = gb.getBackingArray();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (gb.isHit([i, j]) && gb.shipExists([i, j]) && !arr[i][j].isSunk()) {
        let attackSuccess = false;
        let square = [-1, -1];
        // north
        square = [i - 1, j];
        if (gb.isLegalSquare(square)) attackSuccess = gb.receiveAttack(square);
        if (!attackSuccess) {
          // east
          square = [i, j + 1];
          if (gb.isLegalSquare(square))
            attackSuccess = gb.receiveAttack(square);
        } else {
          gameChecker();
          return;
        }
        if (!attackSuccess) {
          // south
          square = [i + 1, j];
          if (gb.isLegalSquare(square))
            attackSuccess = gb.receiveAttack(square);
        } else {
          gameChecker();
          return;
        }
        if (!attackSuccess) {
          // west
          square = [i, j - 1];
          if (gb.isLegalSquare(square))
            attackSuccess = gb.receiveAttack(square);
        } else {
          gameChecker();
          return;
        }
        if (attackSuccess) {
          gameChecker();
          return;
        }
      }
    }
  }
  // no attacked ship has been found.
  let attackSuccess = false;
  let square = [-1, -1];
  while (!attackSuccess) {
    square = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    attackSuccess = gb.receiveAttack(square);
  }
  gameChecker();
  return;
}

function setTurnGUI(player) {
  if (player == player1) {
    writeOut("player 1's turn", turnIndicator);
  } else if (mode == 0) {
    writeOut("computer's turn", turnIndicator);
  } else {
    writeOut("player 2's turn", turnIndicator);
  }
}

function displayWinner(player) {
  if (player == player1) {
    writeOut("player 1 has won!", turnIndicator);
  } else if (mode == 0) {
    writeOut("the computer has won!", turnIndicator);
  } else if (mode == 1) {
    writeOut("player 2 has won!", turnIndicator);
  }
}

function writeOut(text, element) {
  element.textContent = "";
  let i = 0;
  let speed = 35; /* The speed/duration of the effect in milliseconds */
  typeWriter();

  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

function colorHandler() {
  let t1 = getComputedStyle(root).getPropertyValue("--primary-color");
  let t2 = getComputedStyle(root).getPropertyValue("--secondary-color");
  root.style.setProperty("--primary-color", t2);
  root.style.setProperty("--secondary-color", t1);
}

function resetHandler() {
  player1 = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
  player2 = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
  titleScreen.showModal();
}

// ----------- Nonfunctions start here -----------------
titleScreen.showModal();
start.addEventListener("click", () => {
  if (mode != -1) {
    titleScreen.close();
    turn = 0;
    if (mode == 0) {
      displaySetup(player1).then(() => {
        setTurnGUI(player1);
        randomize(player2); // shuffle computer ships
        homeRenderBoard(board1, player1);
        enemyRenderBoard(board2, player2);
      });
    } else if (mode == 1) {
      displaySetup(player1)
        .then(() => displaySetup(player2))
        .then(() => {
          turn = 0;
          setTurnGUI(player1);
          homeRenderBoard(board1, player1);
          enemyRenderBoard(board2, player2);
        });
    }
  }
});

let player1 = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
let player2 = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();

resetD1.addEventListener("click", resetHandler);
resetD2.addEventListener("click", resetHandler);
resetR.addEventListener("click", resetHandler);

switchD1.addEventListener("click", colorHandler);
switchD2.addEventListener("click", colorHandler);
switchR.addEventListener("click", colorHandler);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFh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QkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrREFBUztBQUN6QixnQkFBZ0Isa0RBQVM7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0JBQWtCLGtEQUFTO0FBQzNCLGtCQUFrQixrREFBUzs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDZiNmQ0O1xuICAtLXNlY29uZGFyeS1jb2xvcjogI2Y5NzMxNjtcbn1cblxuYm9keSwgI3BhZ2UtaG9sZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDIwJSwgd2hpdGUgODAlKTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBnYXA6IDJweDtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGdhcDogMnB4O1xufVxuXG5kaXYucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGdhcDogMnB4O1xufVxuXG5kaXYjZ2FtZS1ob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdiNwYWdlLWhvbGRlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDEwMHB4O1xufVxuXG4vKiBkaXYuY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59ICovXG5cbmRpdi5jZWxsLmZ1bGwtY2VsbCwgZGl2LmNlbGwuYWxpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmRpdi5jZWxsLmVuZW15LWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmNlbGwuc3Vuay1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuZGl2LmNlbGwuaGl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5kaXYuY2VsbC5oaXQ6OmFmdGVyIHsgXG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuZGl2LmhvdmVyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmRpdi5pbGxlZ2FsLWhvdmVyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XG59XG5cbmRpdi5zZXR1cC10aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5kaWFsb2cjc2V0dXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDY1cHg7XG59XG5cbiNzZXR1cCAudGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiNidXR0b24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBnYXA6IDhweFxufVxuXG5kaXYudGl0bGUtYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2x1bW4tZ2FwOiAxMDBweDtcbn1cblxuZGl2Lm1vZGUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xufVxuXG5kaXYubW9kZS5zZWxlY3RlZCB7XG4gIHRyYW5zaXRpb246IDAuNzVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3IpLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XG59XG5cbmRpdi50aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMTAwcHg7XG59XG5cbmRpdiNnYW1lLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGlhbG9nI3RpdGxlLXNjcmVlbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xuICB6LWluZGV4OiAxMDtcbn1cblxuI3N0YXJ0LCAjYnV0dG9uLWxpc3QgYnV0dG9uLCAucmVzZXQsIC5zd2l0Y2gge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgNjUlLCB3aGl0ZSA0MCUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuI2ZvY3Vzb25tZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xufVxuLmZvb3RlciBpbWcge1xuICB3aWR0aDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMC4ycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5mb290ZXIgYSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI3R1cm4taW5kaWNhdG9yIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4jc2V0dXAtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZXNldCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1MHB4O1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDE1MHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlFQUF5RTtFQUN6RSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5RUFBeUU7RUFDekUsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSx5RUFBeUU7RUFDekUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkVBQTJFO0VBQzNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlFQUF5RTtFQUN6RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyRUFBMkU7QUFDN0U7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUVBQXlFO0VBQ3pFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaURBQWlEO0VBQ2pELDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlFQUF5RTtFQUN6RSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUVBQXlFO0VBQ3pFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJFQUEyRTtFQUMzRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUVBQXlFO0VBQ3pFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMwNmI2ZDQ7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2Y5NzMxNjtcXG59XFxuXFxuYm9keSwgI3BhZ2UtaG9sZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDIwJSwgd2hpdGUgODAlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuZGl2LnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbmRpdiNnYW1lLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2I3BhZ2UtaG9sZGVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICByb3ctZ2FwOiAxMDBweDtcXG59XFxuXFxuLyogZGl2LmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59ICovXFxuXFxuZGl2LmNlbGwuZnVsbC1jZWxsLCBkaXYuY2VsbC5hbGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG5kaXYuY2VsbC5lbmVteS1jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmNlbGwuc3Vuay1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbmRpdi5jZWxsLmhpdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5jZWxsLmhpdDo6YWZ0ZXIgeyBcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG5kaXYuaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5kaXYuaWxsZWdhbC1ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcXG59XFxuXFxuZGl2LnNldHVwLXRpdGxlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuZGlhbG9nI3NldHVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA2NXB4O1xcbn1cXG5cXG4jc2V0dXAgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNidXR0b24tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDhweFxcbn1cXG5cXG5kaXYudGl0bGUtYnV0dG9uLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBjb2x1bW4tZ2FwOiAxMDBweDtcXG59XFxuXFxuZGl2Lm1vZGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcXG59XFxuXFxuZGl2Lm1vZGUuc2VsZWN0ZWQge1xcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3IpLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xcbn1cXG5cXG5kaXYudGl0bGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICByb3ctZ2FwOiAxMDBweDtcXG59XFxuXFxuZGl2I2dhbWUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpYWxvZyN0aXRsZS1zY3JlZW4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNzdGFydCwgI2J1dHRvbi1saXN0IGJ1dHRvbiwgLnJlc2V0LCAuc3dpdGNoIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDQwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI2ZvY3Vzb25tZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLmZvb3RlciBpbWcge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLmZvb3RlciBhIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jdHVybi1pbmRpY2F0b3Ige1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxufVxcblxcbiNzZXR1cC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucmVzZXQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNTBweDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiAxNTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFNoaXAge1xuICAjbGVuZ3RoO1xuICAjaGl0Q291bnQgPSAwO1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLiNsZW5ndGggPSBsZW5ndGg7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuI2hpdENvdW50ID49IHRoaXMuI2xlbmd0aCkgdGhyb3cgXCJzaGlwIGhhcyByZWFjaGVkIG1heCBoaXRzXCI7XG4gICAgdGhpcy4jaGl0Q291bnQrKztcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy4jaGl0Q291bnQgPj0gdGhpcy4jbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgfVxuXG4gIGdldEhpdENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRDb3VudDtcbiAgfVxufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAjc2l6ZSA9IDEwO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5iYWNraW5nQXJyYXkgPSBuZXcgQXJyYXkodGhpcy4jc2l6ZSk7XG4gICAgdGhpcy5oaXRBcnJheSA9IG5ldyBBcnJheSh0aGlzLiNzaXplKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3NpemU7IGkrKykge1xuICAgICAgdGhpcy5iYWNraW5nQXJyYXlbaV0gPSBuZXcgQXJyYXkodGhpcy4jc2l6ZSk7XG4gICAgICB0aGlzLmhpdEFycmF5W2ldID0gbmV3IEFycmF5KHRoaXMuI3NpemUpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNzaXplOyBqKyspIHtcbiAgICAgICAgdGhpcy5iYWNraW5nQXJyYXlbaV1bal0gPSAwO1xuICAgICAgICB0aGlzLmhpdEFycmF5W2ldW2pdID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMZWdhbFNxdWFyZShbYzEsIGMyXSkge1xuICAgIGlmIChjMSA8IDAgfHwgYzEgPj0gdGhpcy4jc2l6ZSB8fCBjMiA8IDAgfHwgYzIgPj0gdGhpcy4jc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlzUGxhY2VhYmxlKHN0YXJ0LCBzdG9wKSB7XG4gICAgaWYgKCF0aGlzLmlzTGVnYWxTcXVhcmUoc3RhcnQpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzTGVnYWxTcXVhcmUoc3RvcCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5zaGlwRXhpc3RzSW5SYW5nZShzdGFydCwgc3RvcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgaWYgKHN0YXJ0WzBdID09IHN0b3BbMF0pIHtcbiAgICAgIGxlbmd0aCA9IE1hdGguYWJzKHN0b3BbMV0gLSBzdGFydFsxXSkgKyAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRbMV0gPT0gc3RvcFsxXSkge1xuICAgICAgbGVuZ3RoID0gTWF0aC5hYnMoTWF0aC5hYnMoc3RvcFswXSAtIHN0YXJ0WzBdKSkgKyAxO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG4gIHBsYWNlU2hpcChzdGFydCwgc3RvcCkge1xuICAgIGxldCBsZW5ndGggPSB0aGlzLmlzUGxhY2VhYmxlKHN0YXJ0LCBzdG9wKTtcbiAgICBpZiAobGVuZ3RoID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGxlbmd0aCBpcyAwIGlmIG5vbmUgb2YgdGhlIGFib3ZlIDIgYXJlIGVudGVyZWQgc28gdGhpcyBhY29jdW50cyBmb3JcbiAgICAvLyBub24tbGluZSBwbGFjZW1lbnQgYXR0ZW1wdHNcbiAgICB0aGlzLiNwbGFjZVNoaXBIKHN0YXJ0LCBzdG9wLCBsZW5ndGgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZhbHNlO1xuICAjcGxhY2VTaGlwSChzdGFydCwgc3RvcCwgbGVuZ3RoKSB7XG4gICAgbGV0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IE1hdGgubWluKHN0YXJ0WzBdLCBzdG9wWzBdKTtcbiAgICAgIGkgPD0gTWF0aC5tYXgoc3RhcnRbMF0sIHN0b3BbMF0pO1xuICAgICAgaSsrXG4gICAgKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaiA9IE1hdGgubWluKHN0YXJ0WzFdLCBzdG9wWzFdKTtcbiAgICAgICAgaiA8PSBNYXRoLm1heChzdGFydFsxXSwgc3RvcFsxXSk7XG4gICAgICAgIGorK1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYmFja2luZ0FycmF5W2ldW2pdID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5pc0hpdChjb29yZGluYXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLnNoaXBFeGlzdHMoY29vcmRpbmF0ZSkpIHtcbiAgICAgIHRoaXMuYmFja2luZ0FycmF5W2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLmhpdCgpO1xuICAgIH1cbiAgICB0aGlzLmhpdEFycmF5W2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlzSGl0KGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5oaXRBcnJheVtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFja2luZ0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYmFja2luZ0FycmF5WzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmJhY2tpbmdBcnJheVtpXVtqXSBpbnN0YW5jZW9mIFNoaXAgJiZcbiAgICAgICAgICAhdGhpcy5iYWNraW5nQXJyYXlbaV1bal0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2hpcEV4aXN0cyhjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuYmFja2luZ0FycmF5W2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNoaXBFeGlzdHNJblJhbmdlKGMxLCBjMikge1xuICAgIGZvciAobGV0IGkgPSBNYXRoLm1pbihjMVswXSwgYzJbMF0pOyBpIDw9IE1hdGgubWF4KGMxWzBdLCBjMlswXSk7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IE1hdGgubWluKGMxWzFdLCBjMlsxXSk7IGogPD0gTWF0aC5tYXgoYzFbMV0sIGMyWzFdKTsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBFeGlzdHMoW2ksIGpdKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9ubHlTaGlwRXhpc3RzSW5SYW5nZShjMSwgYzIpIHtcbiAgICBmb3IgKGxldCBpID0gTWF0aC5taW4oYzFbMF0sIGMyWzBdKTsgaSA8PSBNYXRoLm1heChjMVswXSwgYzJbMF0pOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBNYXRoLm1pbihjMVsxXSwgYzJbMV0pOyBqIDw9IE1hdGgubWF4KGMxWzFdLCBjMlsxXSk7IGorKykge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcEV4aXN0cyhbaSwgal0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0QmFja2luZ0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmJhY2tpbmdBcnJheTtcbiAgfVxuXG4gIGdldEhpdEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmhpdEFycmF5O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbn1cblxuY2xhc3MgUGxheWVyIHt9XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCB9IGZyb20gXCIuL2NsYXNzZXMuanNcIjtcblxuY29uc3QgYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZDFcIik7XG5jb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkMlwiKTtcbmNvbnN0IHNldHVwRGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHVwXCIpO1xuY29uc3Qgc2V0dXBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmlkXCIpOyAvL2JpdCBtaXNsZWFkaW5nIG5hbWluZ1xuY29uc3QgYnV0dG9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLWxpc3RcIik7XG5jb25zdCBwcmVnYW1lU3RhdGVzID0gWzUsIDUsIDQsIDQsIDMsIDMsIDIsIDJdOyAvLyBsZW5ndGhzIG9mIHRoZSBzaGlwcyB0aGF0IHdpbGwgYmUgcGxhY2VkXG5jb25zdCB0dXJuSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0dXJuLWluZGljYXRvclwiKTtcbmNvbnN0IHRpdGxlU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1zY3JlZW5cIik7XG5jb25zdCBzaW5nbGVwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpbmdsZXBsYXllclwiKTtcbmNvbnN0IG11bHRpcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtdWx0aXBsYXllclwiKTtcbmNvbnN0IHByZWdhbWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cgLnRpdGxlXCIpO1xuY29uc3QgcmVzZXREMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXQtZDFcIik7XG5jb25zdCBzd2l0Y2hEMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoLWQxXCIpO1xuY29uc3QgcmVzZXREMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXQtZDJcIik7XG5jb25zdCBzd2l0Y2hEMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoLWQyXCIpO1xuY29uc3QgcmVzZXRSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldC1yXCIpO1xuY29uc3Qgc3dpdGNoUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoLXJcIik7XG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuY29uc3QgQ09NUFVURVJfUEFVU0UgPSAyMDAwO1xuY29uc3QgUEFTU19QQVVTRSA9IDUwMDA7XG5jb25zdCBURVhUX1BBVVNFID0gNzAwO1xubGV0IHR1cm4gPSAtMTsgLy8gdW5pdmVyc2FsIHR1cm4gdHJhY2tlciB0byBkaXNhYmxlL2VuYWJsZSBhdHRhY2sgZXZlbnRzXG5sZXQgbW9kZSA9IC0xOyAvLyAwOiBzaW5nbGVwbGF5ZXIgbW9kZSwgMTogbXVsdGlwbGF5ZXIgbW9kZVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICBpZiAoZS5jb2RlID09PSBcIkVzY2FwZVwiICYmIChzZXR1cERpYWxvZ3VlLm9wZW4gfHwgdGl0bGVTY3JlZW4ub3BlbikpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn0pO1xuXG5zaW5nbGVwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIG11bHRpcGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgc2luZ2xlcGxheWVyLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgbW9kZSA9IDA7XG59KTtcblxubXVsdGlwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHNpbmdsZXBsYXllci5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIG11bHRpcGxheWVyLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgbW9kZSA9IDE7XG59KTtcblxuZnVuY3Rpb24gaG9tZVJlbmRlckJvYXJkKGJvYXJkLCBnYW1lQm9hcmQpIHtcbiAgbGV0IGFyciA9IGdhbWVCb2FyZC5nZXRCYWNraW5nQXJyYXkoKTtcbiAgbGV0IGhpdEFyciA9IGdhbWVCb2FyZC5nZXRIaXRBcnJheSgpO1xuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICBsZXQgcm93O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC50b2dnbGUoXCJyb3dcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxcIik7XG4gICAgICBsZXQgaXNTaGlwID0gYXJyW2ldW2pdIGluc3RhbmNlb2YgU2hpcDtcbiAgICAgIGxldCBpc1N1bmsgPSBmYWxzZTtcbiAgICAgIGlmIChpc1NoaXApIHtcbiAgICAgICAgaWYgKGFycltpXVtqXS5pc1N1bmsoKSkgaXNTdW5rID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N1bmspIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwic3Vuay1zaGlwXCIpO1xuICAgICAgfSBlbHNlIGlmIChoaXRBcnJbaV1bal0gJiYgaXNTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImhpdFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWxpdmVcIik7XG4gICAgICB9IGVsc2UgaWYgKGhpdEFycltpXVtqXSAmJiAhaXNTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImhpdFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzU3VuayAmJiBpc1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiZnVsbC1jZWxsXCIpO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuZW15UmVuZGVyQm9hcmQoYm9hcmQsIGdhbWVCb2FyZCkge1xuICBsZXQgYXJyID0gZ2FtZUJvYXJkLmdldEJhY2tpbmdBcnJheSgpO1xuICBsZXQgaGl0QXJyID0gZ2FtZUJvYXJkLmdldEhpdEFycmF5KCk7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGxldCByb3c7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LnRvZ2dsZShcInJvd1wiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyclswXS5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbFwiKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgICAgbGV0IGlzU2hpcCA9IGFycltpXVtqXSBpbnN0YW5jZW9mIFNoaXA7XG4gICAgICBsZXQgaXNTdW5rID0gZmFsc2U7XG4gICAgICBpZiAoaXNTaGlwKSB7XG4gICAgICAgIGlmIChhcnJbaV1bal0uaXNTdW5rKCkpIGlzU3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdW5rKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcInN1bmstc2hpcFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGhpdEFycltpXVtqXSAmJiBpc1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWxpdmVcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImhpdFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoaGl0QXJyW2ldW2pdICYmICFpc1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGl0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiZW5lbXktY2VsbFwiKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIC8vIGVpdGhlciBwbGF5ZXIgMSdzIHR1cm4gaW4gYm90aCBzaW5nbGUgcGxheWVyIGFuZCBtdWx0aXBsYXllclxuICAgICAgICAgIC8vIG9yIHBsYXllciAyJ3MgKHBsYXllcjEgaXMgdGhlIGVuZW15IGdiKSB0dXJuIGluIG11bHRpcGxheWVyIG9ubHkuXG4gICAgICAgICAgaWYgKHR1cm4gPT0gMCB8fCAobW9kZSA9PSAxICYmIGdhbWVCb2FyZCA9PSBwbGF5ZXIxICYmIHR1cm4gPT0gMSkpIHtcbiAgICAgICAgICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFtpLCBqXSk7XG4gICAgICAgICAgICBlbmVteVJlbmRlckJvYXJkKGJvYXJkLCBnYW1lQm9hcmQpO1xuICAgICAgICAgICAgZ2FtZUNoZWNrZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTZXR1cChnYW1lQm9hcmQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoZ2FtZUJvYXJkID09IHBsYXllcjEpIHtcbiAgICAgIHdyaXRlT3V0KFwiUGxlYXNlIGNob29zZSBQbGF5ZXIgMSdzIHNoaXBzXCIsIHByZWdhbWVUaXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyaXRlT3V0KFwiUGxlYXNlIGNob29zZSBQbGF5ZXIgMidzIHNoaXBzXCIsIHByZWdhbWVUaXRsZSk7XG4gICAgfVxuICAgIGxldCBwcmVnYW1lUG9pbnRlciA9IDA7XG4gICAgc2V0dXBEaWFsb2d1ZS5zaG93TW9kYWwoKTtcbiAgICBsZXQgZ3JpZEFyciA9IG5ldyBBcnJheSgxMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBncmlkQXJyW2ldID0gbmV3IEFycmF5KDEwKTtcbiAgICB9XG4gICAgYnV0dG9uTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgcmFuZEJ1dHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJvdGF0ZS5pbm5lclRleHQgPSBcInJvdGF0ZVwiO1xuICAgIHJhbmRCdXR0LmlubmVyVGV4dCA9IFwicmFuZG9taXplXCI7XG4gICAgcmVzdGFydC5pbm5lclRleHQgPSBcInJlc3RhcnRcIjtcbiAgICBkb25lLmlubmVyVGV4dCA9IFwiZG9uZSFcIjtcbiAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNldHVwRGlhbG9ndWUuY2xhc3NMaXN0LnRvZ2dsZShcInZcIik7XG4gICAgICBwcmVnYW1lUmVuZGVyQm9hcmQoKTtcbiAgICB9KTtcbiAgICByYW5kQnV0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcmFuZG9taXplKGdhbWVCb2FyZCk7XG4gICAgICBwcmVnYW1lUG9pbnRlciA9IHByZWdhbWVTdGF0ZXMubGVuZ3RoO1xuICAgICAgcHJlZ2FtZVJlbmRlckJvYXJkKCk7XG4gICAgfSk7XG4gICAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJlZ2FtZVBvaW50ZXIgPSAwO1xuICAgICAgZ2FtZUJvYXJkLnJlc2V0KCk7XG4gICAgICBwcmVnYW1lUmVuZGVyQm9hcmQoKTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHByZWdhbWVQb2ludGVyID49IHByZWdhbWVTdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0dXBEaWFsb2d1ZS5jbG9zZSgpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgVEVYVF9QQVVTRSArIDUwMCk7XG4gICAgYnV0dG9uTGlzdC5hcHBlbmRDaGlsZChyb3RhdGUpO1xuICAgIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQocmFuZEJ1dHQpO1xuICAgIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQocmVzdGFydCk7XG4gICAgYnV0dG9uTGlzdC5hcHBlbmRDaGlsZChkb25lKTtcbiAgICBwcmVnYW1lUmVuZGVyQm9hcmQoKTtcblxuICAgIGZ1bmN0aW9uIHByZWdhbWVSZW5kZXJCb2FyZCgpIHtcbiAgICAgIGxldCBkaXJlY3Rpb24gPSBzZXR1cERpYWxvZ3VlLmNsYXNzTGlzdC5jb250YWlucyhcInZcIikgPyBcInZcIiA6IFwiaFwiO1xuICAgICAgbGV0IGFyciA9IGdhbWVCb2FyZC5nZXRCYWNraW5nQXJyYXkoKTtcbiAgICAgIHNldHVwR3JpZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgbGV0IHJvdztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QudG9nZ2xlKFwicm93XCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyclswXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgZ3JpZEFycltpXVtqXSA9IGNlbGw7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbFwiKTtcblxuICAgICAgICAgIGlmIChhcnJbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJmdWxsLWNlbGxcIik7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgbGVuZ3RoID0gcHJlZ2FtZVN0YXRlc1twcmVnYW1lUG9pbnRlcl07XG4gICAgICAgICAgbGV0IHN0YXJ0ID0gW2ksIGpdO1xuICAgICAgICAgIGxldCBlbmQgPSBbLTEsIC0xXTtcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwidlwiKSB7XG4gICAgICAgICAgICBlbmQgPSBbaSArIGxlbmd0aCAtIDEsIGpdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwiaFwiKSB7XG4gICAgICAgICAgICBlbmQgPSBbaSwgaiArIGxlbmd0aCAtIDFdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChnYW1lQm9hcmQucGxhY2VTaGlwKFtpLCBqXSwgZW5kKSkge1xuICAgICAgICAgICAgICBwcmVnYW1lUG9pbnRlcisrO1xuICAgICAgICAgICAgICBwcmVnYW1lUmVuZGVyQm9hcmQoZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+XG4gICAgICAgICAgICBoYW5kbGVIb3ZlcihcbiAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICBncmlkQXJyLFxuICAgICAgICAgICAgICBnYW1lQm9hcmQuaXNQbGFjZWFibGUoc3RhcnQsIGVuZClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gcmVzZXRIb3ZlcigpKTtcbiAgICAgICAgICBncmlkQXJyW2ldW2pdID0gY2VsbDtcbiAgICAgICAgfVxuICAgICAgICBzZXR1cEdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVIb3ZlcihzdGFydCwgbGVuZ3RoLCBkaXJlY3Rpb24sIGFyciwgbGVnYWxpdHkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmU7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImhcIikge1xuICAgICAgICAgIGlmIChzdGFydFsxXSArIGkgPCAxMCkgY3VycmVudFNxdWFyZSA9IGFycltzdGFydFswXV1bc3RhcnRbMV0gKyBpXTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ2XCIpIHtcbiAgICAgICAgICBpZiAoc3RhcnRbMF0gKyBpIDwgMTApIGN1cnJlbnRTcXVhcmUgPSBhcnJbc3RhcnRbMF0gKyBpXVtzdGFydFsxXV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNxdWFyZSAmJiBsZWdhbGl0eSkge1xuICAgICAgICAgIGN1cnJlbnRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImhvdmVyZWRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFNxdWFyZSAmJiAhbGVnYWxpdHkpIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJpbGxlZ2FsLWhvdmVyZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldEhvdmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdmVyZWRcIikuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbGxlZ2FsLWhvdmVyZWRcIikuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbGxlZ2FsLWhvdmVyZWRcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByYW5kb21pemUoZ2FtZUJvYXJkKSB7XG4gIGdhbWVCb2FyZC5yZXNldCgpO1xuICBsZXQgcHJlZ2FtZVBvaW50ZXIgPSAwO1xuICB3aGlsZSAocHJlZ2FtZVBvaW50ZXIgPCBwcmVnYW1lU3RhdGVzLmxlbmd0aCkge1xuICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBsZXQgc3RhcnQgPSBbXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgXTtcbiAgICBsZXQgZW5kID0gWy0xLCAtMV07XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAwKSB7XG4gICAgICBlbmQgPSBbc3RhcnRbMF0sIHN0YXJ0WzFdICsgcHJlZ2FtZVN0YXRlc1twcmVnYW1lUG9pbnRlcl0gLSAxXTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICBlbmQgPSBbc3RhcnRbMF0gKyBwcmVnYW1lU3RhdGVzW3ByZWdhbWVQb2ludGVyXSAtIDEsIHN0YXJ0WzFdXTtcbiAgICB9XG4gICAgaWYgKGdhbWVCb2FyZC5wbGFjZVNoaXAoc3RhcnQsIGVuZCkpIHByZWdhbWVQb2ludGVyKys7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V2lubmVyKGdiMSwgZ2IyKSB7XG4gIGlmIChnYjEuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICByZXR1cm4gZ2IyO1xuICB9IGVsc2UgaWYgKGdiMi5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHJldHVybiBnYjE7XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vLyBtb2RlcmF0b3IvcmVmIChpbnRlcm1lZGlhdGUgc3RhdGUpXG5mdW5jdGlvbiBnYW1lQ2hlY2tlcigpIHtcbiAgbGV0IHByZXZ0dXJuID0gdHVybjtcbiAgdHVybiA9IC0xOyAvLyBpbnRlcm1lZGlhdGUgbW9kZVxuICBsZXQgd2lubmVyID0gZ2V0V2lubmVyKHBsYXllcjEsIHBsYXllcjIpO1xuICBpZiAod2lubmVyID09IHBsYXllcjEpIHtcbiAgICBkaXNwbGF5V2lubmVyKHBsYXllcjEpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICh3aW5uZXIgPT0gcGxheWVyMikge1xuICAgIGRpc3BsYXlXaW5uZXIocGxheWVyMik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtb2RlID09IDEpIHtcbiAgICB3cml0ZU91dChcbiAgICAgIGBZb3UgaGF2ZSA1IHNlY29uZHMgdG8gcGFzcyB0aGUgZGV2aWNlIHRvIHRoZSBvdGhlciBwbGF5ZXJgLFxuICAgICAgdHVybkluZGljYXRvclxuICAgICk7XG4gIH1cbiAgaWYgKHByZXZ0dXJuID09IDApIHtcbiAgICAvLyBpZiB0aGUgaW5jb21pbmcgdHVybiB3YXMgMCwgZXhlY3V0ZSB0dXJuIDFcbiAgICBpZiAobW9kZSA9PSAwKSB7XG4gICAgICBzZXRUdXJuR1VJKHBsYXllcjIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR1cm4gPSAxO1xuICAgICAgICBhdHRhY2tXaXRoQ29tcHV0ZXIocGxheWVyMSk7XG4gICAgICAgIGhvbWVSZW5kZXJCb2FyZChib2FyZDEsIHBsYXllcjEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9LCBDT01QVVRFUl9QQVVTRSk7IC8vIGdpdmUgdGhlIGltcHJlc3Npb24gdGhhdCB0aGUgY29tcHV0ZXIgaXMgdGhpbmtpbmcgbG9sXG4gICAgfSBlbHNlIGlmIChtb2RlID09IDEpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUdXJuR1VJKHBsYXllcjIpO1xuICAgICAgICBlbmVteVJlbmRlckJvYXJkKGJvYXJkMSwgcGxheWVyMSk7XG4gICAgICAgIGhvbWVSZW5kZXJCb2FyZChib2FyZDIsIHBsYXllcjIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0dXJuID0gMTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0sIFBBU1NfUEFVU0UpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcmV2dHVybiA9PSAxKSB7XG4gICAgLy8gaWYgdGhlIGluY29taW5nIHR1cm4gd2FzIDEsIGV4ZWN1dGUgdHVybiAwXG4gICAgaWYgKG1vZGUgPT0gMCkge1xuICAgICAgc2V0VHVybkdVSShwbGF5ZXIxKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0dXJuID0gMDtcbiAgICAgICAgZW5lbXlSZW5kZXJCb2FyZChib2FyZDIsIHBsYXllcjIpO1xuICAgICAgfSwgVEVYVF9QQVVTRSk7XG4gICAgfSBlbHNlIGlmIChtb2RlID09IDEpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUdXJuR1VJKHBsYXllcjEpO1xuICAgICAgICBlbmVteVJlbmRlckJvYXJkKGJvYXJkMiwgcGxheWVyMik7XG4gICAgICAgIGhvbWVSZW5kZXJCb2FyZChib2FyZDEsIHBsYXllcjEpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0dXJuID0gMDtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0sIFBBU1NfUEFVU0UpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2tXaXRoQ29tcHV0ZXIoZ2IpIHtcbiAgbGV0IGFyciA9IGdiLmdldEJhY2tpbmdBcnJheSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoZ2IuaXNIaXQoW2ksIGpdKSAmJiBnYi5zaGlwRXhpc3RzKFtpLCBqXSkgJiYgIWFycltpXVtqXS5pc1N1bmsoKSkge1xuICAgICAgICBsZXQgYXR0YWNrU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICBsZXQgc3F1YXJlID0gWy0xLCAtMV07XG4gICAgICAgIC8vIG5vcnRoXG4gICAgICAgIHNxdWFyZSA9IFtpIC0gMSwgal07XG4gICAgICAgIGlmIChnYi5pc0xlZ2FsU3F1YXJlKHNxdWFyZSkpIGF0dGFja1N1Y2Nlc3MgPSBnYi5yZWNlaXZlQXR0YWNrKHNxdWFyZSk7XG4gICAgICAgIGlmICghYXR0YWNrU3VjY2Vzcykge1xuICAgICAgICAgIC8vIGVhc3RcbiAgICAgICAgICBzcXVhcmUgPSBbaSwgaiArIDFdO1xuICAgICAgICAgIGlmIChnYi5pc0xlZ2FsU3F1YXJlKHNxdWFyZSkpXG4gICAgICAgICAgICBhdHRhY2tTdWNjZXNzID0gZ2IucmVjZWl2ZUF0dGFjayhzcXVhcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVDaGVja2VyKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXR0YWNrU3VjY2Vzcykge1xuICAgICAgICAgIC8vIHNvdXRoXG4gICAgICAgICAgc3F1YXJlID0gW2kgKyAxLCBqXTtcbiAgICAgICAgICBpZiAoZ2IuaXNMZWdhbFNxdWFyZShzcXVhcmUpKVxuICAgICAgICAgICAgYXR0YWNrU3VjY2VzcyA9IGdiLnJlY2VpdmVBdHRhY2soc3F1YXJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lQ2hlY2tlcigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWF0dGFja1N1Y2Nlc3MpIHtcbiAgICAgICAgICAvLyB3ZXN0XG4gICAgICAgICAgc3F1YXJlID0gW2ksIGogLSAxXTtcbiAgICAgICAgICBpZiAoZ2IuaXNMZWdhbFNxdWFyZShzcXVhcmUpKVxuICAgICAgICAgICAgYXR0YWNrU3VjY2VzcyA9IGdiLnJlY2VpdmVBdHRhY2soc3F1YXJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lQ2hlY2tlcigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0YWNrU3VjY2Vzcykge1xuICAgICAgICAgIGdhbWVDaGVja2VyKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIG5vIGF0dGFja2VkIHNoaXAgaGFzIGJlZW4gZm91bmQuXG4gIGxldCBhdHRhY2tTdWNjZXNzID0gZmFsc2U7XG4gIGxldCBzcXVhcmUgPSBbLTEsIC0xXTtcbiAgd2hpbGUgKCFhdHRhY2tTdWNjZXNzKSB7XG4gICAgc3F1YXJlID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICBhdHRhY2tTdWNjZXNzID0gZ2IucmVjZWl2ZUF0dGFjayhzcXVhcmUpO1xuICB9XG4gIGdhbWVDaGVja2VyKCk7XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2V0VHVybkdVSShwbGF5ZXIpIHtcbiAgaWYgKHBsYXllciA9PSBwbGF5ZXIxKSB7XG4gICAgd3JpdGVPdXQoXCJwbGF5ZXIgMSdzIHR1cm5cIiwgdHVybkluZGljYXRvcik7XG4gIH0gZWxzZSBpZiAobW9kZSA9PSAwKSB7XG4gICAgd3JpdGVPdXQoXCJjb21wdXRlcidzIHR1cm5cIiwgdHVybkluZGljYXRvcik7XG4gIH0gZWxzZSB7XG4gICAgd3JpdGVPdXQoXCJwbGF5ZXIgMidzIHR1cm5cIiwgdHVybkluZGljYXRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcihwbGF5ZXIpIHtcbiAgaWYgKHBsYXllciA9PSBwbGF5ZXIxKSB7XG4gICAgd3JpdGVPdXQoXCJwbGF5ZXIgMSBoYXMgd29uIVwiLCB0dXJuSW5kaWNhdG9yKTtcbiAgfSBlbHNlIGlmIChtb2RlID09IDApIHtcbiAgICB3cml0ZU91dChcInRoZSBjb21wdXRlciBoYXMgd29uIVwiLCB0dXJuSW5kaWNhdG9yKTtcbiAgfSBlbHNlIGlmIChtb2RlID09IDEpIHtcbiAgICB3cml0ZU91dChcInBsYXllciAyIGhhcyB3b24hXCIsIHR1cm5JbmRpY2F0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdyaXRlT3V0KHRleHQsIGVsZW1lbnQpIHtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGxldCBpID0gMDtcbiAgbGV0IHNwZWVkID0gMzU7IC8qIFRoZSBzcGVlZC9kdXJhdGlvbiBvZiB0aGUgZWZmZWN0IGluIG1pbGxpc2Vjb25kcyAqL1xuICB0eXBlV3JpdGVyKCk7XG5cbiAgZnVuY3Rpb24gdHlwZVdyaXRlcigpIHtcbiAgICBpZiAoaSA8IHRleHQubGVuZ3RoKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ICs9IHRleHQuY2hhckF0KGkpO1xuICAgICAgaSsrO1xuICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCBzcGVlZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbG9ySGFuZGxlcigpIHtcbiAgbGV0IHQxID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1wcmltYXJ5LWNvbG9yXCIpO1xuICBsZXQgdDIgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoXCItLXNlY29uZGFyeS1jb2xvclwiKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcHJpbWFyeS1jb2xvclwiLCB0Mik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXNlY29uZGFyeS1jb2xvclwiLCB0MSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0SGFuZGxlcigpIHtcbiAgcGxheWVyMSA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgcGxheWVyMiA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgdGl0bGVTY3JlZW4uc2hvd01vZGFsKCk7XG59XG5cbi8vIC0tLS0tLS0tLS0tIE5vbmZ1bmN0aW9ucyBzdGFydCBoZXJlIC0tLS0tLS0tLS0tLS0tLS0tXG50aXRsZVNjcmVlbi5zaG93TW9kYWwoKTtcbnN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChtb2RlICE9IC0xKSB7XG4gICAgdGl0bGVTY3JlZW4uY2xvc2UoKTtcbiAgICB0dXJuID0gMDtcbiAgICBpZiAobW9kZSA9PSAwKSB7XG4gICAgICBkaXNwbGF5U2V0dXAocGxheWVyMSkudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFR1cm5HVUkocGxheWVyMSk7XG4gICAgICAgIHJhbmRvbWl6ZShwbGF5ZXIyKTsgLy8gc2h1ZmZsZSBjb21wdXRlciBzaGlwc1xuICAgICAgICBob21lUmVuZGVyQm9hcmQoYm9hcmQxLCBwbGF5ZXIxKTtcbiAgICAgICAgZW5lbXlSZW5kZXJCb2FyZChib2FyZDIsIHBsYXllcjIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtb2RlID09IDEpIHtcbiAgICAgIGRpc3BsYXlTZXR1cChwbGF5ZXIxKVxuICAgICAgICAudGhlbigoKSA9PiBkaXNwbGF5U2V0dXAocGxheWVyMikpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0dXJuID0gMDtcbiAgICAgICAgICBzZXRUdXJuR1VJKHBsYXllcjEpO1xuICAgICAgICAgIGhvbWVSZW5kZXJCb2FyZChib2FyZDEsIHBsYXllcjEpO1xuICAgICAgICAgIGVuZW15UmVuZGVyQm9hcmQoYm9hcmQyLCBwbGF5ZXIyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59KTtcblxubGV0IHBsYXllcjEgPSBuZXcgR2FtZWJvYXJkKCk7XG5sZXQgcGxheWVyMiA9IG5ldyBHYW1lYm9hcmQoKTtcblxucmVzZXREMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRIYW5kbGVyKTtcbnJlc2V0RDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0SGFuZGxlcik7XG5yZXNldFIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0SGFuZGxlcik7XG5cbnN3aXRjaEQxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb2xvckhhbmRsZXIpO1xuc3dpdGNoRDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbG9ySGFuZGxlcik7XG5zd2l0Y2hSLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb2xvckhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9