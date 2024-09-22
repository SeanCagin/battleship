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
}

:root {
  --primary-color: #06b6d4;
  --secondary-color: #f97316;
}

#page-holder {
  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);
  width: 100%;
}

body {
  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;AAC5B;;AAEA;EACE,yEAAyE;EACzE,WAAW;AACb;;AAEA;EACE,yEAAyE;AAC3E;;AAEA;EACE,yEAAyE;EACzE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;;GAEG;;AAEH;EACE,yEAAyE;EACzE,YAAY;AACd;;AAEA;EACE,2EAA2E;EAC3E,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,6BAA6B;EAC7B,wCAAwC;AAC1C;;AAEA;EACE,yEAAyE;EACzE,YAAY;AACd;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,yEAAyE;EACzE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB;AACF;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,yEAAyE;AAC3E;;AAEA;EACE,iBAAiB;EACjB,iDAAiD;EACjD,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,yEAAyE;EACzE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yEAAyE;EACzE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,2EAA2E;EAC3E,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,SAAS;EACT,SAAS;EACT,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,yEAAyE;EACzE,eAAe;EACf,SAAS;EACT,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,YAAY;AACd","sourcesContent":["* {\n  font-family: monospace;\n}\n\n:root {\n  --primary-color: #06b6d4;\n  --secondary-color: #f97316;\n}\n\n#page-holder {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  width: 100%;\n}\n\nbody {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n}\n\ndiv.cell {\n  background-color: color-mix(in srgb, var(--primary-color) 20%, white 80%);\n  border: 2px solid black;\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n}\n\n#grid {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\ndiv.row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\ndiv#game-holder {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n\ndiv#page-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 50px;\n}\n\n/* div.cell:hover {\n  background-color: gray;\n} */\n\ndiv.cell.full-cell, div.cell.alive {\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  opacity: 0.9;\n}\n\ndiv.cell.enemy-cell:hover {\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n  cursor: pointer;\n}\n\ndiv.cell.sunk-ship {\n  background-color: var(--secondary-color);\n}\n\ndiv.cell.hit {\n  position: relative;\n}\n\ndiv.cell.hit::after { \n  content: '';\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 10px;\n  height: 10px;\n  border-radius: 500px;\n  color: var(--secondary-color);\n  background-color: var(--secondary-color);\n}\n\ndiv.hovered {\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  opacity: 0.5;\n}\n\ndiv.illegal-hovered {\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n}\n\ndiv.setup-title-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n\ndialog#setup {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  border: none;\n  margin-top: 65px;\n}\n\n#setup .title {\n  font-size: 25px;\n  font-weight: bolder;\n}\n\n#button-list {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 8px\n}\n\ndiv.title-button-row {\n  display: flex;\n  justify-content: space-around;\n  column-gap: 100px;\n}\n\ndiv.mode {\n  font-weight: bolder;\n  font-size: 50px;\n  cursor: pointer;\n  user-select: none;\n  padding: 8px;\n  border-radius: 5px;\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n}\n\ndiv.mode.selected {\n  transition: 0.75s;\n  background-color: rgba(var(--primary-color), 0.3);\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n}\n\ndiv.title-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 100px;\n}\n\ndiv#game-title {\n  font-size: 25px;\n  font-weight: bold;\n}\n\ndialog#title-screen {\n  border: none;\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  z-index: 10;\n  margin-top: 50px;\n}\n\ndialog::backdrop {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  z-index: 10;\n}\n\n#start, #button-list button, .reset, .switch {\n  border: none;\n  font-size: 25px;\n  font-weight: bolder;\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 40%);\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n  user-select: none;\n}\n\n#focusonme {\n  outline: none;\n  width: 0;\n  height: 0;\n  border: 0;\n  font-size: 0;\n  background: transparent;\n}\n\n.footer {\n  padding: 0.2rem;\n  width: 100%;\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.footer img {\n  width: 1.5rem;\n  margin-bottom: -0.2rem;\n  margin-right: 0.5rem;\n}\n.footer a {\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: black;\n}\n\n#turn-indicator {\n  font-size: 25px;\n  font-weight: bolder;\n  margin-top: 80px;\n}\n\n#setup-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.reset {\n  position: fixed;\n  top: 5px;\n  right: 50px;\n}\n\n.switch {\n  position: fixed;\n  top: 5px;\n  right: 150px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFB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Z0JBQWdCO0FBQ2xDLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGtEQUFTO0FBQ3pCLGdCQUFnQixrREFBUztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxrQkFBa0Isa0RBQVM7QUFDM0Isa0JBQWtCLGtEQUFTOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMwNmI2ZDQ7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZjk3MzE2O1xufVxuXG4jcGFnZS1ob2xkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XG59XG5cbmRpdi5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDIwJSwgd2hpdGUgODAlKTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBnYXA6IDJweDtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGdhcDogMnB4O1xufVxuXG5kaXYucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGdhcDogMnB4O1xufVxuXG5kaXYjZ2FtZS1ob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdiNwYWdlLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDUwcHg7XG59XG5cbi8qIGRpdi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn0gKi9cblxuZGl2LmNlbGwuZnVsbC1jZWxsLCBkaXYuY2VsbC5hbGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuZGl2LmNlbGwuZW5lbXktY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYuY2VsbC5zdW5rLXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG5kaXYuY2VsbC5oaXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmRpdi5jZWxsLmhpdDo6YWZ0ZXIgeyBcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG5kaXYuaG92ZXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuZGl2LmlsbGVnYWwtaG92ZXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcbn1cblxuZGl2LnNldHVwLXRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmRpYWxvZyNzZXR1cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNjVweDtcbn1cblxuI3NldHVwIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuI2J1dHRvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGdhcDogOHB4XG59XG5cbmRpdi50aXRsZS1idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xufVxuXG5kaXYubW9kZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XG59XG5cbmRpdi5tb2RlLnNlbGVjdGVkIHtcbiAgdHJhbnNpdGlvbjogMC43NXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvciksIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcbn1cblxuZGl2LnRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByb3ctZ2FwOiAxMDBweDtcbn1cblxuZGl2I2dhbWUtdGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaWFsb2cjdGl0bGUtc2NyZWVuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xuICB6LWluZGV4OiAxMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jc3RhcnQsICNidXR0b24tbGlzdCBidXR0b24sIC5yZXNldCwgLnN3aXRjaCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDQwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jZm9jdXNvbm1lIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMC4ycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk7XG59XG4uZm9vdGVyIGltZyB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmZvb3RlciBhIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jdHVybi1pbmRpY2F0b3Ige1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbiNzZXR1cC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJlc2V0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDUwcHg7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTUwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5RUFBeUU7RUFDekUsV0FBVztBQUNiOztBQUVBO0VBQ0UseUVBQXlFO0FBQzNFOztBQUVBO0VBQ0UseUVBQXlFO0VBQ3pFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHlFQUF5RTtFQUN6RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyRUFBMkU7RUFDM0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUVBQXlFO0VBQ3pFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5RUFBeUU7RUFDekUsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpREFBaUQ7RUFDakQsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUVBQXlFO0VBQ3pFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5RUFBeUU7RUFDekUsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMkVBQTJFO0VBQzNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5RUFBeUU7RUFDekUsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDZiNmQ0O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmOTczMTY7XFxufVxcblxcbiNwYWdlLWhvbGRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcXG59XFxuXFxuZGl2LmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDIwJSwgd2hpdGUgODAlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuZGl2LnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbmRpdiNnYW1lLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2I3BhZ2UtaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDUwcHg7XFxufVxcblxcbi8qIGRpdi5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufSAqL1xcblxcbmRpdi5jZWxsLmZ1bGwtY2VsbCwgZGl2LmNlbGwuYWxpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuZGl2LmNlbGwuZW5lbXktY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5jZWxsLnN1bmstc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG5kaXYuY2VsbC5oaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuY2VsbC5oaXQ6OmFmdGVyIHsgXFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuZGl2LmhvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuZGl2LmlsbGVnYWwtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XFxufVxcblxcbmRpdi5zZXR1cC10aXRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbmRpYWxvZyNzZXR1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXRvcDogNjVweDtcXG59XFxuXFxuI3NldHVwIC50aXRsZSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jYnV0dG9uLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZ2FwOiA4cHhcXG59XFxuXFxuZGl2LnRpdGxlLWJ1dHRvbi1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgY29sdW1uLWdhcDogMTAwcHg7XFxufVxcblxcbmRpdi5tb2RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XFxufVxcblxcbmRpdi5tb2RlLnNlbGVjdGVkIHtcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yKSwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcXG59XFxuXFxuZGl2LnRpdGxlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMTAwcHg7XFxufVxcblxcbmRpdiNnYW1lLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaWFsb2cjdGl0bGUtc2NyZWVuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XFxuICB6LWluZGV4OiAxMDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jc3RhcnQsICNidXR0b24tbGlzdCBidXR0b24sIC5yZXNldCwgLnN3aXRjaCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgNjUlLCB3aGl0ZSA0MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNmb2N1c29ubWUge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5mb290ZXIgaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtMC4ycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5mb290ZXIgYSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI3R1cm4taW5kaWNhdG9yIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4jc2V0dXAtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnJlc2V0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogMTUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBTaGlwIHtcbiAgI2xlbmd0aDtcbiAgI2hpdENvdW50ID0gMDtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy4jbGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLiNoaXRDb3VudCA+PSB0aGlzLiNsZW5ndGgpIHRocm93IFwic2hpcCBoYXMgcmVhY2hlZCBtYXggaGl0c1wiO1xuICAgIHRoaXMuI2hpdENvdW50Kys7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuI2hpdENvdW50ID49IHRoaXMuI2xlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gIH1cblxuICBnZXRIaXRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaGl0Q291bnQ7XG4gIH1cbn1cblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgI3NpemUgPSAxMDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYmFja2luZ0FycmF5ID0gbmV3IEFycmF5KHRoaXMuI3NpemUpO1xuICAgIHRoaXMuaGl0QXJyYXkgPSBuZXcgQXJyYXkodGhpcy4jc2l6ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNzaXplOyBpKyspIHtcbiAgICAgIHRoaXMuYmFja2luZ0FycmF5W2ldID0gbmV3IEFycmF5KHRoaXMuI3NpemUpO1xuICAgICAgdGhpcy5oaXRBcnJheVtpXSA9IG5ldyBBcnJheSh0aGlzLiNzaXplKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jc2l6ZTsgaisrKSB7XG4gICAgICAgIHRoaXMuYmFja2luZ0FycmF5W2ldW2pdID0gMDtcbiAgICAgICAgdGhpcy5oaXRBcnJheVtpXVtqXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzTGVnYWxTcXVhcmUoW2MxLCBjMl0pIHtcbiAgICBpZiAoYzEgPCAwIHx8IGMxID49IHRoaXMuI3NpemUgfHwgYzIgPCAwIHx8IGMyID49IHRoaXMuI3NpemUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpc1BsYWNlYWJsZShzdGFydCwgc3RvcCkge1xuICAgIGlmICghdGhpcy5pc0xlZ2FsU3F1YXJlKHN0YXJ0KSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdGhpcy5pc0xlZ2FsU3F1YXJlKHN0b3ApKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMuc2hpcEV4aXN0c0luUmFuZ2Uoc3RhcnQsIHN0b3ApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGlmIChzdGFydFswXSA9PSBzdG9wWzBdKSB7XG4gICAgICBsZW5ndGggPSBNYXRoLmFicyhzdG9wWzFdIC0gc3RhcnRbMV0pICsgMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0WzFdID09IHN0b3BbMV0pIHtcbiAgICAgIGxlbmd0aCA9IE1hdGguYWJzKE1hdGguYWJzKHN0b3BbMF0gLSBzdGFydFswXSkpICsgMTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuICBwbGFjZVNoaXAoc3RhcnQsIHN0b3ApIHtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5pc1BsYWNlYWJsZShzdGFydCwgc3RvcCk7XG4gICAgaWYgKGxlbmd0aCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAvLyBsZW5ndGggaXMgMCBpZiBub25lIG9mIHRoZSBhYm92ZSAyIGFyZSBlbnRlcmVkIHNvIHRoaXMgYWNvY3VudHMgZm9yXG4gICAgLy8gbm9uLWxpbmUgcGxhY2VtZW50IGF0dGVtcHRzXG4gICAgdGhpcy4jcGxhY2VTaGlwSChzdGFydCwgc3RvcCwgbGVuZ3RoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmYWxzZTtcbiAgI3BsYWNlU2hpcEgoc3RhcnQsIHN0b3AsIGxlbmd0aCkge1xuICAgIGxldCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IGkgPSBNYXRoLm1pbihzdGFydFswXSwgc3RvcFswXSk7XG4gICAgICBpIDw9IE1hdGgubWF4KHN0YXJ0WzBdLCBzdG9wWzBdKTtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGogPSBNYXRoLm1pbihzdGFydFsxXSwgc3RvcFsxXSk7XG4gICAgICAgIGogPD0gTWF0aC5tYXgoc3RhcnRbMV0sIHN0b3BbMV0pO1xuICAgICAgICBqKytcbiAgICAgICkge1xuICAgICAgICB0aGlzLmJhY2tpbmdBcnJheVtpXVtqXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuaXNIaXQoY29vcmRpbmF0ZSkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5zaGlwRXhpc3RzKGNvb3JkaW5hdGUpKSB7XG4gICAgICB0aGlzLmJhY2tpbmdBcnJheVtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXS5oaXQoKTtcbiAgICB9XG4gICAgdGhpcy5oaXRBcnJheVtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpc0hpdChjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuaGl0QXJyYXlbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhY2tpbmdBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJhY2tpbmdBcnJheVswXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5iYWNraW5nQXJyYXlbaV1bal0gaW5zdGFuY2VvZiBTaGlwICYmXG4gICAgICAgICAgIXRoaXMuYmFja2luZ0FycmF5W2ldW2pdLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNoaXBFeGlzdHMoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmJhY2tpbmdBcnJheVtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzaGlwRXhpc3RzSW5SYW5nZShjMSwgYzIpIHtcbiAgICBmb3IgKGxldCBpID0gTWF0aC5taW4oYzFbMF0sIGMyWzBdKTsgaSA8PSBNYXRoLm1heChjMVswXSwgYzJbMF0pOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBNYXRoLm1pbihjMVsxXSwgYzJbMV0pOyBqIDw9IE1hdGgubWF4KGMxWzFdLCBjMlsxXSk7IGorKykge1xuICAgICAgICBpZiAodGhpcy5zaGlwRXhpc3RzKFtpLCBqXSkpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbmx5U2hpcEV4aXN0c0luUmFuZ2UoYzEsIGMyKSB7XG4gICAgZm9yIChsZXQgaSA9IE1hdGgubWluKGMxWzBdLCBjMlswXSk7IGkgPD0gTWF0aC5tYXgoYzFbMF0sIGMyWzBdKTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gTWF0aC5taW4oYzFbMV0sIGMyWzFdKTsgaiA8PSBNYXRoLm1heChjMVsxXSwgYzJbMV0pOyBqKyspIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBFeGlzdHMoW2ksIGpdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldEJhY2tpbmdBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNraW5nQXJyYXk7XG4gIH1cblxuICBnZXRIaXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRBcnJheTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG59XG5cbmNsYXNzIFBsYXllciB7fVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQgfSBmcm9tIFwiLi9jbGFzc2VzLmpzXCI7XG5cbmNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQxXCIpO1xuY29uc3QgYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZDJcIik7XG5jb25zdCBzZXR1cERpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR1cFwiKTtcbmNvbnN0IHNldHVwR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZFwiKTsgLy9iaXQgbWlzbGVhZGluZyBuYW1pbmdcbmNvbnN0IGJ1dHRvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1saXN0XCIpO1xuY29uc3QgcHJlZ2FtZVN0YXRlcyA9IFs1LCA1LCA0LCA0LCAzLCAzLCAyLCAyXTsgLy8gbGVuZ3RocyBvZiB0aGUgc2hpcHMgdGhhdCB3aWxsIGJlIHBsYWNlZFxuY29uc3QgdHVybkluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHVybi1pbmRpY2F0b3JcIik7XG5jb25zdCB0aXRsZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtc2NyZWVuXCIpO1xuY29uc3Qgc2luZ2xlcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaW5nbGVwbGF5ZXJcIik7XG5jb25zdCBtdWx0aXBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXVsdGlwbGF5ZXJcIik7XG5jb25zdCBwcmVnYW1lVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nIC50aXRsZVwiKTtcbmNvbnN0IHJlc2V0RDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LWQxXCIpO1xuY29uc3Qgc3dpdGNoRDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaC1kMVwiKTtcbmNvbnN0IHJlc2V0RDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LWQyXCIpO1xuY29uc3Qgc3dpdGNoRDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaC1kMlwiKTtcbmNvbnN0IHJlc2V0UiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXQtclwiKTtcbmNvbnN0IHN3aXRjaFIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaC1yXCIpO1xuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6cm9vdFwiKTtcbmNvbnN0IENPTVBVVEVSX1BBVVNFID0gMjAwMDtcbmNvbnN0IFBBU1NfUEFVU0UgPSA1MDAwO1xuY29uc3QgVEVYVF9QQVVTRSA9IDcwMDtcbmxldCB0dXJuID0gLTE7IC8vIHVuaXZlcnNhbCB0dXJuIHRyYWNrZXIgdG8gZGlzYWJsZS9lbmFibGUgYXR0YWNrIGV2ZW50c1xubGV0IG1vZGUgPSAtMTsgLy8gMDogc2luZ2xlcGxheWVyIG1vZGUsIDE6IG11bHRpcGxheWVyIG1vZGVcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PT0gXCJFc2NhcGVcIiAmJiAoc2V0dXBEaWFsb2d1ZS5vcGVuIHx8IHRpdGxlU2NyZWVuLm9wZW4pKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59KTtcblxuc2luZ2xlcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBtdWx0aXBsYXllci5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIHNpbmdsZXBsYXllci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIG1vZGUgPSAwO1xufSk7XG5cbm11bHRpcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBzaW5nbGVwbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICBtdWx0aXBsYXllci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIG1vZGUgPSAxO1xufSk7XG5cbmZ1bmN0aW9uIGhvbWVSZW5kZXJCb2FyZChib2FyZCwgZ2FtZUJvYXJkKSB7XG4gIGxldCBhcnIgPSBnYW1lQm9hcmQuZ2V0QmFja2luZ0FycmF5KCk7XG4gIGxldCBoaXRBcnIgPSBnYW1lQm9hcmQuZ2V0SGl0QXJyYXkoKTtcbiAgYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGV0IHJvdztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QudG9nZ2xlKFwicm93XCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsXCIpO1xuICAgICAgbGV0IGlzU2hpcCA9IGFycltpXVtqXSBpbnN0YW5jZW9mIFNoaXA7XG4gICAgICBsZXQgaXNTdW5rID0gZmFsc2U7XG4gICAgICBpZiAoaXNTaGlwKSB7XG4gICAgICAgIGlmIChhcnJbaV1bal0uaXNTdW5rKCkpIGlzU3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdW5rKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcInN1bmstc2hpcFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoaGl0QXJyW2ldW2pdICYmIGlzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJoaXRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImFsaXZlXCIpO1xuICAgICAgfSBlbHNlIGlmIChoaXRBcnJbaV1bal0gJiYgIWlzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJoaXRcIik7XG4gICAgICB9IGVsc2UgaWYgKCFpc1N1bmsgJiYgaXNTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImZ1bGwtY2VsbFwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmVteVJlbmRlckJvYXJkKGJvYXJkLCBnYW1lQm9hcmQpIHtcbiAgbGV0IGFyciA9IGdhbWVCb2FyZC5nZXRCYWNraW5nQXJyYXkoKTtcbiAgbGV0IGhpdEFyciA9IGdhbWVCb2FyZC5nZXRIaXRBcnJheSgpO1xuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICBsZXQgcm93O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC50b2dnbGUoXCJyb3dcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxcIik7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICAgIGxldCBpc1NoaXAgPSBhcnJbaV1bal0gaW5zdGFuY2VvZiBTaGlwO1xuICAgICAgbGV0IGlzU3VuayA9IGZhbHNlO1xuICAgICAgaWYgKGlzU2hpcCkge1xuICAgICAgICBpZiAoYXJyW2ldW2pdLmlzU3VuaygpKSBpc1N1bmsgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3Vuaykge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJzdW5rLXNoaXBcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChoaXRBcnJbaV1bal0gJiYgaXNTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImFsaXZlXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJoaXRcIik7XG4gICAgICB9IGVsc2UgaWYgKGhpdEFycltpXVtqXSAmJiAhaXNTaGlwKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImhpdFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImVuZW15LWNlbGxcIik7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAvLyBlaXRoZXIgcGxheWVyIDEncyB0dXJuIGluIGJvdGggc2luZ2xlIHBsYXllciBhbmQgbXVsdGlwbGF5ZXJcbiAgICAgICAgICAvLyBvciBwbGF5ZXIgMidzIChwbGF5ZXIxIGlzIHRoZSBlbmVteSBnYikgdHVybiBpbiBtdWx0aXBsYXllciBvbmx5LlxuICAgICAgICAgIGlmICh0dXJuID09IDAgfHwgKG1vZGUgPT0gMSAmJiBnYW1lQm9hcmQgPT0gcGxheWVyMSAmJiB0dXJuID09IDEpKSB7XG4gICAgICAgICAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhbaSwgal0pO1xuICAgICAgICAgICAgZW5lbXlSZW5kZXJCb2FyZChib2FyZCwgZ2FtZUJvYXJkKTtcbiAgICAgICAgICAgIGdhbWVDaGVja2VyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2V0dXAoZ2FtZUJvYXJkKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGdhbWVCb2FyZCA9PSBwbGF5ZXIxKSB7XG4gICAgICB3cml0ZU91dChcIlBsZWFzZSBjaG9vc2UgUGxheWVyIDEncyBzaGlwc1wiLCBwcmVnYW1lVGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cml0ZU91dChcIlBsZWFzZSBjaG9vc2UgUGxheWVyIDIncyBzaGlwc1wiLCBwcmVnYW1lVGl0bGUpO1xuICAgIH1cbiAgICBsZXQgcHJlZ2FtZVBvaW50ZXIgPSAwO1xuICAgIHNldHVwRGlhbG9ndWUuc2hvd01vZGFsKCk7XG4gICAgbGV0IGdyaWRBcnIgPSBuZXcgQXJyYXkoMTApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZ3JpZEFycltpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgfVxuICAgIGJ1dHRvbkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCByb3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHJhbmRCdXR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByb3RhdGUuaW5uZXJUZXh0ID0gXCJyb3RhdGVcIjtcbiAgICByYW5kQnV0dC5pbm5lclRleHQgPSBcInJhbmRvbWl6ZVwiO1xuICAgIHJlc3RhcnQuaW5uZXJUZXh0ID0gXCJyZXN0YXJ0XCI7XG4gICAgZG9uZS5pbm5lclRleHQgPSBcImRvbmUhXCI7XG4gICAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzZXR1cERpYWxvZ3VlLmNsYXNzTGlzdC50b2dnbGUoXCJ2XCIpO1xuICAgICAgcHJlZ2FtZVJlbmRlckJvYXJkKCk7XG4gICAgfSk7XG4gICAgcmFuZEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHJhbmRvbWl6ZShnYW1lQm9hcmQpO1xuICAgICAgcHJlZ2FtZVBvaW50ZXIgPSBwcmVnYW1lU3RhdGVzLmxlbmd0aDtcbiAgICAgIHByZWdhbWVSZW5kZXJCb2FyZCgpO1xuICAgIH0pO1xuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHByZWdhbWVQb2ludGVyID0gMDtcbiAgICAgIGdhbWVCb2FyZC5yZXNldCgpO1xuICAgICAgcHJlZ2FtZVJlbmRlckJvYXJkKCk7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChwcmVnYW1lUG9pbnRlciA+PSBwcmVnYW1lU3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgIHNldHVwRGlhbG9ndWUuY2xvc2UoKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIFRFWFRfUEFVU0UgKyA1MDApO1xuICAgIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQocm90YXRlKTtcbiAgICBidXR0b25MaXN0LmFwcGVuZENoaWxkKHJhbmRCdXR0KTtcbiAgICBidXR0b25MaXN0LmFwcGVuZENoaWxkKHJlc3RhcnQpO1xuICAgIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgcHJlZ2FtZVJlbmRlckJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiBwcmVnYW1lUmVuZGVyQm9hcmQoKSB7XG4gICAgICBsZXQgZGlyZWN0aW9uID0gc2V0dXBEaWFsb2d1ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2XCIpID8gXCJ2XCIgOiBcImhcIjtcbiAgICAgIGxldCBhcnIgPSBnYW1lQm9hcmQuZ2V0QmFja2luZ0FycmF5KCk7XG4gICAgICBzZXR1cEdyaWQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGxldCByb3c7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LnRvZ2dsZShcInJvd1wiKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgIGdyaWRBcnJbaV1bal0gPSBjZWxsO1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxcIik7XG5cbiAgICAgICAgICBpZiAoYXJyW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiZnVsbC1jZWxsXCIpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGxlbmd0aCA9IHByZWdhbWVTdGF0ZXNbcHJlZ2FtZVBvaW50ZXJdO1xuICAgICAgICAgIGxldCBzdGFydCA9IFtpLCBqXTtcbiAgICAgICAgICBsZXQgZW5kID0gWy0xLCAtMV07XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInZcIikge1xuICAgICAgICAgICAgZW5kID0gW2kgKyBsZW5ndGggLSAxLCBqXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcImhcIikge1xuICAgICAgICAgICAgZW5kID0gW2ksIGogKyBsZW5ndGggLSAxXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2FtZUJvYXJkLnBsYWNlU2hpcChbaSwgal0sIGVuZCkpIHtcbiAgICAgICAgICAgICAgcHJlZ2FtZVBvaW50ZXIrKztcbiAgICAgICAgICAgICAgcHJlZ2FtZVJlbmRlckJvYXJkKGRpcmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PlxuICAgICAgICAgICAgaGFuZGxlSG92ZXIoXG4gICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgZ3JpZEFycixcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkLmlzUGxhY2VhYmxlKHN0YXJ0LCBlbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHJlc2V0SG92ZXIoKSk7XG4gICAgICAgICAgZ3JpZEFycltpXVtqXSA9IGNlbGw7XG4gICAgICAgIH1cbiAgICAgICAgc2V0dXBHcmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSG92ZXIoc3RhcnQsIGxlbmd0aCwgZGlyZWN0aW9uLCBhcnIsIGxlZ2FsaXR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJoXCIpIHtcbiAgICAgICAgICBpZiAoc3RhcnRbMV0gKyBpIDwgMTApIGN1cnJlbnRTcXVhcmUgPSBhcnJbc3RhcnRbMF1dW3N0YXJ0WzFdICsgaV07XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwidlwiKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0WzBdICsgaSA8IDEwKSBjdXJyZW50U3F1YXJlID0gYXJyW3N0YXJ0WzBdICsgaV1bc3RhcnRbMV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTcXVhcmUgJiYgbGVnYWxpdHkpIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTcXVhcmUgJiYgIWxlZ2FsaXR5KSB7XG4gICAgICAgICAgY3VycmVudFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaWxsZWdhbC1ob3ZlcmVkXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRIb3ZlcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3ZlcmVkXCIpLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaWxsZWdhbC1ob3ZlcmVkXCIpLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiaWxsZWdhbC1ob3ZlcmVkXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmFuZG9taXplKGdhbWVCb2FyZCkge1xuICBnYW1lQm9hcmQucmVzZXQoKTtcbiAgbGV0IHByZWdhbWVQb2ludGVyID0gMDtcbiAgd2hpbGUgKHByZWdhbWVQb2ludGVyIDwgcHJlZ2FtZVN0YXRlcy5sZW5ndGgpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgbGV0IHN0YXJ0ID0gW1xuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgIF07XG4gICAgbGV0IGVuZCA9IFstMSwgLTFdO1xuICAgIGlmIChkaXJlY3Rpb24gPT0gMCkge1xuICAgICAgZW5kID0gW3N0YXJ0WzBdLCBzdGFydFsxXSArIHByZWdhbWVTdGF0ZXNbcHJlZ2FtZVBvaW50ZXJdIC0gMV07XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgICAgZW5kID0gW3N0YXJ0WzBdICsgcHJlZ2FtZVN0YXRlc1twcmVnYW1lUG9pbnRlcl0gLSAxLCBzdGFydFsxXV07XG4gICAgfVxuICAgIGlmIChnYW1lQm9hcmQucGxhY2VTaGlwKHN0YXJ0LCBlbmQpKSBwcmVnYW1lUG9pbnRlcisrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdpbm5lcihnYjEsIGdiMikge1xuICBpZiAoZ2IxLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgcmV0dXJuIGdiMjtcbiAgfSBlbHNlIGlmIChnYjIuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICByZXR1cm4gZ2IxO1xuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLy8gbW9kZXJhdG9yL3JlZiAoaW50ZXJtZWRpYXRlIHN0YXRlKVxuZnVuY3Rpb24gZ2FtZUNoZWNrZXIoKSB7XG4gIGxldCBwcmV2dHVybiA9IHR1cm47XG4gIHR1cm4gPSAtMTsgLy8gaW50ZXJtZWRpYXRlIG1vZGVcbiAgbGV0IHdpbm5lciA9IGdldFdpbm5lcihwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgaWYgKHdpbm5lciA9PSBwbGF5ZXIxKSB7XG4gICAgZGlzcGxheVdpbm5lcihwbGF5ZXIxKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAod2lubmVyID09IHBsYXllcjIpIHtcbiAgICBkaXNwbGF5V2lubmVyKHBsYXllcjIpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobW9kZSA9PSAxKSB7XG4gICAgd3JpdGVPdXQoXG4gICAgICBgWW91IGhhdmUgNSBzZWNvbmRzIHRvIHBhc3MgdGhlIGRldmljZSB0byB0aGUgb3RoZXIgcGxheWVyYCxcbiAgICAgIHR1cm5JbmRpY2F0b3JcbiAgICApO1xuICB9XG4gIGlmIChwcmV2dHVybiA9PSAwKSB7XG4gICAgLy8gaWYgdGhlIGluY29taW5nIHR1cm4gd2FzIDAsIGV4ZWN1dGUgdHVybiAxXG4gICAgaWYgKG1vZGUgPT0gMCkge1xuICAgICAgc2V0VHVybkdVSShwbGF5ZXIyKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0dXJuID0gMTtcbiAgICAgICAgYXR0YWNrV2l0aENvbXB1dGVyKHBsYXllcjEpO1xuICAgICAgICBob21lUmVuZGVyQm9hcmQoYm9hcmQxLCBwbGF5ZXIxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSwgQ09NUFVURVJfUEFVU0UpOyAvLyBnaXZlIHRoZSBpbXByZXNzaW9uIHRoYXQgdGhlIGNvbXB1dGVyIGlzIHRoaW5raW5nIGxvbFxuICAgIH0gZWxzZSBpZiAobW9kZSA9PSAxKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VHVybkdVSShwbGF5ZXIyKTtcbiAgICAgICAgZW5lbXlSZW5kZXJCb2FyZChib2FyZDEsIHBsYXllcjEpO1xuICAgICAgICBob21lUmVuZGVyQm9hcmQoYm9hcmQyLCBwbGF5ZXIyKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdHVybiA9IDE7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9LCBQQVNTX1BBVVNFKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJldnR1cm4gPT0gMSkge1xuICAgIC8vIGlmIHRoZSBpbmNvbWluZyB0dXJuIHdhcyAxLCBleGVjdXRlIHR1cm4gMFxuICAgIGlmIChtb2RlID09IDApIHtcbiAgICAgIHNldFR1cm5HVUkocGxheWVyMSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHVybiA9IDA7XG4gICAgICAgIGVuZW15UmVuZGVyQm9hcmQoYm9hcmQyLCBwbGF5ZXIyKTtcbiAgICAgIH0sIFRFWFRfUEFVU0UpO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PSAxKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VHVybkdVSShwbGF5ZXIxKTtcbiAgICAgICAgZW5lbXlSZW5kZXJCb2FyZChib2FyZDIsIHBsYXllcjIpO1xuICAgICAgICBob21lUmVuZGVyQm9hcmQoYm9hcmQxLCBwbGF5ZXIxKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdHVybiA9IDA7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9LCBQQVNTX1BBVVNFKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNrV2l0aENvbXB1dGVyKGdiKSB7XG4gIGxldCBhcnIgPSBnYi5nZXRCYWNraW5nQXJyYXkoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyclswXS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGdiLmlzSGl0KFtpLCBqXSkgJiYgZ2Iuc2hpcEV4aXN0cyhbaSwgal0pICYmICFhcnJbaV1bal0uaXNTdW5rKCkpIHtcbiAgICAgICAgbGV0IGF0dGFja1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNxdWFyZSA9IFstMSwgLTFdO1xuICAgICAgICAvLyBub3J0aFxuICAgICAgICBzcXVhcmUgPSBbaSAtIDEsIGpdO1xuICAgICAgICBpZiAoZ2IuaXNMZWdhbFNxdWFyZShzcXVhcmUpKSBhdHRhY2tTdWNjZXNzID0gZ2IucmVjZWl2ZUF0dGFjayhzcXVhcmUpO1xuICAgICAgICBpZiAoIWF0dGFja1N1Y2Nlc3MpIHtcbiAgICAgICAgICAvLyBlYXN0XG4gICAgICAgICAgc3F1YXJlID0gW2ksIGogKyAxXTtcbiAgICAgICAgICBpZiAoZ2IuaXNMZWdhbFNxdWFyZShzcXVhcmUpKVxuICAgICAgICAgICAgYXR0YWNrU3VjY2VzcyA9IGdiLnJlY2VpdmVBdHRhY2soc3F1YXJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lQ2hlY2tlcigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWF0dGFja1N1Y2Nlc3MpIHtcbiAgICAgICAgICAvLyBzb3V0aFxuICAgICAgICAgIHNxdWFyZSA9IFtpICsgMSwgal07XG4gICAgICAgICAgaWYgKGdiLmlzTGVnYWxTcXVhcmUoc3F1YXJlKSlcbiAgICAgICAgICAgIGF0dGFja1N1Y2Nlc3MgPSBnYi5yZWNlaXZlQXR0YWNrKHNxdWFyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2FtZUNoZWNrZXIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdHRhY2tTdWNjZXNzKSB7XG4gICAgICAgICAgLy8gd2VzdFxuICAgICAgICAgIHNxdWFyZSA9IFtpLCBqIC0gMV07XG4gICAgICAgICAgaWYgKGdiLmlzTGVnYWxTcXVhcmUoc3F1YXJlKSlcbiAgICAgICAgICAgIGF0dGFja1N1Y2Nlc3MgPSBnYi5yZWNlaXZlQXR0YWNrKHNxdWFyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2FtZUNoZWNrZXIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dGFja1N1Y2Nlc3MpIHtcbiAgICAgICAgICBnYW1lQ2hlY2tlcigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBubyBhdHRhY2tlZCBzaGlwIGhhcyBiZWVuIGZvdW5kLlxuICBsZXQgYXR0YWNrU3VjY2VzcyA9IGZhbHNlO1xuICBsZXQgc3F1YXJlID0gWy0xLCAtMV07XG4gIHdoaWxlICghYXR0YWNrU3VjY2Vzcykge1xuICAgIHNxdWFyZSA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgYXR0YWNrU3VjY2VzcyA9IGdiLnJlY2VpdmVBdHRhY2soc3F1YXJlKTtcbiAgfVxuICBnYW1lQ2hlY2tlcigpO1xuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHNldFR1cm5HVUkocGxheWVyKSB7XG4gIGlmIChwbGF5ZXIgPT0gcGxheWVyMSkge1xuICAgIHdyaXRlT3V0KFwicGxheWVyIDEncyB0dXJuXCIsIHR1cm5JbmRpY2F0b3IpO1xuICB9IGVsc2UgaWYgKG1vZGUgPT0gMCkge1xuICAgIHdyaXRlT3V0KFwiY29tcHV0ZXIncyB0dXJuXCIsIHR1cm5JbmRpY2F0b3IpO1xuICB9IGVsc2Uge1xuICAgIHdyaXRlT3V0KFwicGxheWVyIDIncyB0dXJuXCIsIHR1cm5JbmRpY2F0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIocGxheWVyKSB7XG4gIGlmIChwbGF5ZXIgPT0gcGxheWVyMSkge1xuICAgIHdyaXRlT3V0KFwicGxheWVyIDEgaGFzIHdvbiFcIiwgdHVybkluZGljYXRvcik7XG4gIH0gZWxzZSBpZiAobW9kZSA9PSAwKSB7XG4gICAgd3JpdGVPdXQoXCJ0aGUgY29tcHV0ZXIgaGFzIHdvbiFcIiwgdHVybkluZGljYXRvcik7XG4gIH0gZWxzZSBpZiAobW9kZSA9PSAxKSB7XG4gICAgd3JpdGVPdXQoXCJwbGF5ZXIgMiBoYXMgd29uIVwiLCB0dXJuSW5kaWNhdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cml0ZU91dCh0ZXh0LCBlbGVtZW50KSB7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBsZXQgaSA9IDA7XG4gIGxldCBzcGVlZCA9IDM1OyAvKiBUaGUgc3BlZWQvZHVyYXRpb24gb2YgdGhlIGVmZmVjdCBpbiBtaWxsaXNlY29uZHMgKi9cbiAgdHlwZVdyaXRlcigpO1xuXG4gIGZ1bmN0aW9uIHR5cGVXcml0ZXIoKSB7XG4gICAgaWYgKGkgPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgIGkrKztcbiAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgc3BlZWQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xvckhhbmRsZXIoKSB7XG4gIGxldCB0MSA9IGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tcHJpbWFyeS1jb2xvclwiKTtcbiAgbGV0IHQyID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zZWNvbmRhcnktY29sb3JcIik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXByaW1hcnktY29sb3JcIiwgdDIpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zZWNvbmRhcnktY29sb3JcIiwgdDEpO1xufVxuXG5mdW5jdGlvbiByZXNldEhhbmRsZXIoKSB7XG4gIHBsYXllcjEgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIHBsYXllcjIgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIHRpdGxlU2NyZWVuLnNob3dNb2RhbCgpO1xufVxuXG4vLyAtLS0tLS0tLS0tLSBOb25mdW5jdGlvbnMgc3RhcnQgaGVyZSAtLS0tLS0tLS0tLS0tLS0tLVxudGl0bGVTY3JlZW4uc2hvd01vZGFsKCk7XG5zdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAobW9kZSAhPSAtMSkge1xuICAgIHRpdGxlU2NyZWVuLmNsb3NlKCk7XG4gICAgdHVybiA9IDA7XG4gICAgaWYgKG1vZGUgPT0gMCkge1xuICAgICAgZGlzcGxheVNldHVwKHBsYXllcjEpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRUdXJuR1VJKHBsYXllcjEpO1xuICAgICAgICByYW5kb21pemUocGxheWVyMik7IC8vIHNodWZmbGUgY29tcHV0ZXIgc2hpcHNcbiAgICAgICAgaG9tZVJlbmRlckJvYXJkKGJvYXJkMSwgcGxheWVyMSk7XG4gICAgICAgIGVuZW15UmVuZGVyQm9hcmQoYm9hcmQyLCBwbGF5ZXIyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PSAxKSB7XG4gICAgICBkaXNwbGF5U2V0dXAocGxheWVyMSlcbiAgICAgICAgLnRoZW4oKCkgPT4gZGlzcGxheVNldHVwKHBsYXllcjIpKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdHVybiA9IDA7XG4gICAgICAgICAgc2V0VHVybkdVSShwbGF5ZXIxKTtcbiAgICAgICAgICBob21lUmVuZGVyQm9hcmQoYm9hcmQxLCBwbGF5ZXIxKTtcbiAgICAgICAgICBlbmVteVJlbmRlckJvYXJkKGJvYXJkMiwgcGxheWVyMik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cbmxldCBwbGF5ZXIxID0gbmV3IEdhbWVib2FyZCgpO1xubGV0IHBsYXllcjIgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbnJlc2V0RDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0SGFuZGxlcik7XG5yZXNldEQyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEhhbmRsZXIpO1xucmVzZXRSLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEhhbmRsZXIpO1xuXG5zd2l0Y2hEMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29sb3JIYW5kbGVyKTtcbnN3aXRjaEQyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb2xvckhhbmRsZXIpO1xuc3dpdGNoUi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29sb3JIYW5kbGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==