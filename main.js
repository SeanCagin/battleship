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
  margin-top: 20px;
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
  margin-top: 40px;
}

#setup-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;AAC5B;;AAEA;EACE,yEAAyE;EACzE,WAAW;AACb;;AAEA;EACE,yEAAyE;AAC3E;;AAEA;EACE,yEAAyE;EACzE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;;GAEG;;AAEH;EACE,yEAAyE;EACzE,YAAY;AACd;;AAEA;EACE,2EAA2E;EAC3E,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,6BAA6B;EAC7B,wCAAwC;AAC1C;;AAEA;EACE,yEAAyE;EACzE,YAAY;AACd;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,yEAAyE;EACzE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB;AACF;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,yEAAyE;AAC3E;;AAEA;EACE,iBAAiB;EACjB,iDAAiD;EACjD,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,yEAAyE;EACzE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yEAAyE;EACzE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,2EAA2E;EAC3E,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,SAAS;EACT,SAAS;EACT,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,yEAAyE;EACzE,eAAe;EACf,SAAS;EACT,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,YAAY;AACd","sourcesContent":["* {\n  font-family: monospace;\n}\n\n:root {\n  --primary-color: #06b6d4;\n  --secondary-color: #f97316;\n}\n\n#page-holder {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  width: 100%;\n}\n\nbody {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n}\n\ndiv.cell {\n  background-color: color-mix(in srgb, var(--primary-color) 20%, white 80%);\n  border: 2px solid black;\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n}\n\n#grid {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\ndiv.row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\ndiv#game-holder {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n\ndiv#page-holder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 50px;\n}\n\n/* div.cell:hover {\n  background-color: gray;\n} */\n\ndiv.cell.full-cell, div.cell.alive {\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  opacity: 0.9;\n}\n\ndiv.cell.enemy-cell:hover {\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n  cursor: pointer;\n}\n\ndiv.cell.sunk-ship {\n  background-color: var(--secondary-color);\n}\n\ndiv.cell.hit {\n  position: relative;\n}\n\ndiv.cell.hit::after { \n  content: '';\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 10px;\n  height: 10px;\n  border-radius: 500px;\n  color: var(--secondary-color);\n  background-color: var(--secondary-color);\n}\n\ndiv.hovered {\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  opacity: 0.5;\n}\n\ndiv.illegal-hovered {\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n}\n\ndiv.setup-title-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n\ndialog#setup {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  border: none;\n  margin-top: 20px;\n}\n\n#setup .title {\n  font-size: 25px;\n  font-weight: bolder;\n}\n\n#button-list {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 8px\n}\n\ndiv.title-button-row {\n  display: flex;\n  justify-content: space-around;\n  column-gap: 100px;\n}\n\ndiv.mode {\n  font-weight: bolder;\n  font-size: 50px;\n  cursor: pointer;\n  user-select: none;\n  padding: 8px;\n  border-radius: 5px;\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n}\n\ndiv.mode.selected {\n  transition: 0.75s;\n  background-color: rgba(var(--primary-color), 0.3);\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 35%);\n}\n\ndiv.title-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 100px;\n}\n\ndiv#game-title {\n  font-size: 25px;\n  font-weight: bold;\n}\n\ndialog#title-screen {\n  border: none;\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  z-index: 10;\n  margin-top: 50px;\n}\n\ndialog::backdrop {\n  background-color: color-mix(in srgb, var(--primary-color) 40%, white 60%);\n  z-index: 10;\n}\n\n#start, #button-list button, .reset, .switch {\n  border: none;\n  font-size: 25px;\n  font-weight: bolder;\n  background-color: color-mix(in srgb, var(--secondary-color) 65%, white 40%);\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n  user-select: none;\n}\n\n#focusonme {\n  outline: none;\n  width: 0;\n  height: 0;\n  border: 0;\n  font-size: 0;\n  background: transparent;\n}\n\n.footer {\n  padding: 0.2rem;\n  width: 100%;\n  background-color: color-mix(in srgb, var(--primary-color) 65%, white 35%);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.footer img {\n  width: 1.5rem;\n  margin-bottom: -0.2rem;\n  margin-right: 0.5rem;\n}\n.footer a {\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: black;\n}\n\n#turn-indicator {\n  font-size: 25px;\n  font-weight: bolder;\n  margin-top: 40px;\n}\n\n#setup-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n}\n\n.reset {\n  position: fixed;\n  top: 5px;\n  right: 50px;\n}\n\n.switch {\n  position: fixed;\n  top: 5px;\n  right: 150px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FB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QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEMsb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0RBQVM7QUFDekIsZ0JBQWdCLGtEQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOztBQUVELGtCQUFrQixrREFBUztBQUMzQixrQkFBa0Isa0RBQVM7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG46cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzA2YjZkNDtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmOTczMTY7XG59XG5cbiNwYWdlLWhvbGRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcbn1cblxuZGl2LmNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgMjAlLCB3aGl0ZSA4MCUpO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGdhcDogMnB4O1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZ2FwOiAycHg7XG59XG5cbmRpdi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZ2FwOiAycHg7XG59XG5cbmRpdiNnYW1lLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2I3BhZ2UtaG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogNTBweDtcbn1cblxuLyogZGl2LmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufSAqL1xuXG5kaXYuY2VsbC5mdWxsLWNlbGwsIGRpdi5jZWxsLmFsaXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5kaXYuY2VsbC5lbmVteS1jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5jZWxsLnN1bmstc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmRpdi5jZWxsLmhpdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuZGl2LmNlbGwuaGl0OjphZnRlciB7IFxuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmRpdi5ob3ZlcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5kaXYuaWxsZWdhbC1ob3ZlcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xufVxuXG5kaXYuc2V0dXAtdGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuZGlhbG9nI3NldHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jc2V0dXAgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jYnV0dG9uLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZ2FwOiA4cHhcbn1cblxuZGl2LnRpdGxlLWJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgY29sdW1uLWdhcDogMTAwcHg7XG59XG5cbmRpdi5tb2RlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcbn1cblxuZGl2Lm1vZGUuc2VsZWN0ZWQge1xuICB0cmFuc2l0aW9uOiAwLjc1cztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yKSwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xufVxuXG5kaXYudGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDEwMHB4O1xufVxuXG5kaXYjZ2FtZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpYWxvZyN0aXRsZS1zY3JlZW4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcbiAgei1pbmRleDogMTA7XG59XG5cbiNzdGFydCwgI2J1dHRvbi1saXN0IGJ1dHRvbiwgLnJlc2V0LCAuc3dpdGNoIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDY1JSwgd2hpdGUgNDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNmb2N1c29ubWUge1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5mb290ZXIgaW1nIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTAuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uZm9vdGVyIGEge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiN0dXJuLWluZGljYXRvciB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuI3NldHVwLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucmVzZXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXB4O1xuICByaWdodDogNTBweDtcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxNTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlFQUF5RTtFQUN6RSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSx5RUFBeUU7RUFDekUsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBOztHQUVHOztBQUVIO0VBQ0UseUVBQXlFO0VBQ3pFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJFQUEyRTtFQUMzRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx5RUFBeUU7RUFDekUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlFQUF5RTtFQUN6RSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUVBQXlFO0FBQzNFOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlEQUFpRDtFQUNqRCwyRUFBMkU7QUFDN0U7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5RUFBeUU7RUFDekUsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlFQUF5RTtFQUN6RSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwyRUFBMkU7RUFDM0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlFQUF5RTtFQUN6RSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDZiNmQ0O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmOTczMTY7XFxufVxcblxcbiNwYWdlLWhvbGRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcXG59XFxuXFxuZGl2LmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDIwJSwgd2hpdGUgODAlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuZGl2LnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbmRpdiNnYW1lLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2I3BhZ2UtaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDUwcHg7XFxufVxcblxcbi8qIGRpdi5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufSAqL1xcblxcbmRpdi5jZWxsLmZ1bGwtY2VsbCwgZGl2LmNlbGwuYWxpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuZGl2LmNlbGwuZW5lbXktY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5jZWxsLnN1bmstc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG5kaXYuY2VsbC5oaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuY2VsbC5oaXQ6OmFmdGVyIHsgXFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuZGl2LmhvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuZGl2LmlsbGVnYWwtaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSA2NSUsIHdoaXRlIDM1JSk7XFxufVxcblxcbmRpdi5zZXR1cC10aXRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbmRpYWxvZyNzZXR1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNDAlLCB3aGl0ZSA2MCUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI3NldHVwIC50aXRsZSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jYnV0dG9uLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZ2FwOiA4cHhcXG59XFxuXFxuZGl2LnRpdGxlLWJ1dHRvbi1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgY29sdW1uLWdhcDogMTAwcHg7XFxufVxcblxcbmRpdi5tb2RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XFxufVxcblxcbmRpdi5tb2RlLnNlbGVjdGVkIHtcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yKSwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDY1JSwgd2hpdGUgMzUlKTtcXG59XFxuXFxuZGl2LnRpdGxlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMTAwcHg7XFxufVxcblxcbmRpdiNnYW1lLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaWFsb2cjdGl0bGUtc2NyZWVuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSA0MCUsIHdoaXRlIDYwJSk7XFxuICB6LWluZGV4OiAxMDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktY29sb3IpIDQwJSwgd2hpdGUgNjAlKTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jc3RhcnQsICNidXR0b24tbGlzdCBidXR0b24sIC5yZXNldCwgLnN3aXRjaCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgNjUlLCB3aGl0ZSA0MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNmb2N1c29ubWUge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS1jb2xvcikgNjUlLCB3aGl0ZSAzNSUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5mb290ZXIgaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtMC4ycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5mb290ZXIgYSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI3R1cm4taW5kaWNhdG9yIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4jc2V0dXAtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5yZXNldCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDE1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgU2hpcCB7XG4gICNsZW5ndGg7XG4gICNoaXRDb3VudCA9IDA7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuI2xlbmd0aCA9IGxlbmd0aDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy4jaGl0Q291bnQgPj0gdGhpcy4jbGVuZ3RoKSB0aHJvdyBcInNoaXAgaGFzIHJlYWNoZWQgbWF4IGhpdHNcIjtcbiAgICB0aGlzLiNoaXRDb3VudCsrO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLiNoaXRDb3VudCA+PSB0aGlzLiNsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICB9XG5cbiAgZ2V0SGl0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdENvdW50O1xuICB9XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICNzaXplID0gMTA7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJhY2tpbmdBcnJheSA9IG5ldyBBcnJheSh0aGlzLiNzaXplKTtcbiAgICB0aGlzLmhpdEFycmF5ID0gbmV3IEFycmF5KHRoaXMuI3NpemUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jc2l6ZTsgaSsrKSB7XG4gICAgICB0aGlzLmJhY2tpbmdBcnJheVtpXSA9IG5ldyBBcnJheSh0aGlzLiNzaXplKTtcbiAgICAgIHRoaXMuaGl0QXJyYXlbaV0gPSBuZXcgQXJyYXkodGhpcy4jc2l6ZSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI3NpemU7IGorKykge1xuICAgICAgICB0aGlzLmJhY2tpbmdBcnJheVtpXVtqXSA9IDA7XG4gICAgICAgIHRoaXMuaGl0QXJyYXlbaV1bal0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0xlZ2FsU3F1YXJlKFtjMSwgYzJdKSB7XG4gICAgaWYgKGMxIDwgMCB8fCBjMSA+PSB0aGlzLiNzaXplIHx8IGMyIDwgMCB8fCBjMiA+PSB0aGlzLiNzaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNQbGFjZWFibGUoc3RhcnQsIHN0b3ApIHtcbiAgICBpZiAoIXRoaXMuaXNMZWdhbFNxdWFyZShzdGFydCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNMZWdhbFNxdWFyZShzdG9wKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLnNoaXBFeGlzdHNJblJhbmdlKHN0YXJ0LCBzdG9wKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBpZiAoc3RhcnRbMF0gPT0gc3RvcFswXSkge1xuICAgICAgbGVuZ3RoID0gTWF0aC5hYnMoc3RvcFsxXSAtIHN0YXJ0WzFdKSArIDE7XG4gICAgfSBlbHNlIGlmIChzdGFydFsxXSA9PSBzdG9wWzFdKSB7XG4gICAgICBsZW5ndGggPSBNYXRoLmFicyhNYXRoLmFicyhzdG9wWzBdIC0gc3RhcnRbMF0pKSArIDE7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cbiAgcGxhY2VTaGlwKHN0YXJ0LCBzdG9wKSB7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMuaXNQbGFjZWFibGUoc3RhcnQsIHN0b3ApO1xuICAgIGlmIChsZW5ndGggPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gbGVuZ3RoIGlzIDAgaWYgbm9uZSBvZiB0aGUgYWJvdmUgMiBhcmUgZW50ZXJlZCBzbyB0aGlzIGFjb2N1bnRzIGZvclxuICAgIC8vIG5vbi1saW5lIHBsYWNlbWVudCBhdHRlbXB0c1xuICAgIHRoaXMuI3BsYWNlU2hpcEgoc3RhcnQsIHN0b3AsIGxlbmd0aCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZmFsc2U7XG4gICNwbGFjZVNoaXBIKHN0YXJ0LCBzdG9wLCBsZW5ndGgpIHtcbiAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgZm9yIChcbiAgICAgIGxldCBpID0gTWF0aC5taW4oc3RhcnRbMF0sIHN0b3BbMF0pO1xuICAgICAgaSA8PSBNYXRoLm1heChzdGFydFswXSwgc3RvcFswXSk7XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBqID0gTWF0aC5taW4oc3RhcnRbMV0sIHN0b3BbMV0pO1xuICAgICAgICBqIDw9IE1hdGgubWF4KHN0YXJ0WzFdLCBzdG9wWzFdKTtcbiAgICAgICAgaisrXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5iYWNraW5nQXJyYXlbaV1bal0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmlzSGl0KGNvb3JkaW5hdGUpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMuc2hpcEV4aXN0cyhjb29yZGluYXRlKSkge1xuICAgICAgdGhpcy5iYWNraW5nQXJyYXlbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0uaGl0KCk7XG4gICAgfVxuICAgIHRoaXMuaGl0QXJyYXlbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNIaXQoY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmhpdEFycmF5W2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iYWNraW5nQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5iYWNraW5nQXJyYXlbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuYmFja2luZ0FycmF5W2ldW2pdIGluc3RhbmNlb2YgU2hpcCAmJlxuICAgICAgICAgICF0aGlzLmJhY2tpbmdBcnJheVtpXVtqXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzaGlwRXhpc3RzKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5iYWNraW5nQXJyYXlbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2hpcEV4aXN0c0luUmFuZ2UoYzEsIGMyKSB7XG4gICAgZm9yIChsZXQgaSA9IE1hdGgubWluKGMxWzBdLCBjMlswXSk7IGkgPD0gTWF0aC5tYXgoYzFbMF0sIGMyWzBdKTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gTWF0aC5taW4oYzFbMV0sIGMyWzFdKTsgaiA8PSBNYXRoLm1heChjMVsxXSwgYzJbMV0pOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcEV4aXN0cyhbaSwgal0pKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25seVNoaXBFeGlzdHNJblJhbmdlKGMxLCBjMikge1xuICAgIGZvciAobGV0IGkgPSBNYXRoLm1pbihjMVswXSwgYzJbMF0pOyBpIDw9IE1hdGgubWF4KGMxWzBdLCBjMlswXSk7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IE1hdGgubWluKGMxWzFdLCBjMlsxXSk7IGogPD0gTWF0aC5tYXgoYzFbMV0sIGMyWzFdKTsgaisrKSB7XG4gICAgICAgIGlmICghdGhpcy5zaGlwRXhpc3RzKFtpLCBqXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRCYWNraW5nQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja2luZ0FycmF5O1xuICB9XG5cbiAgZ2V0SGl0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0QXJyYXk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge31cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkIH0gZnJvbSBcIi4vY2xhc3Nlcy5qc1wiO1xuXG5jb25zdCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkMVwiKTtcbmNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQyXCIpO1xuY29uc3Qgc2V0dXBEaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0dXBcIik7XG5jb25zdCBzZXR1cEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyaWRcIik7IC8vYml0IG1pc2xlYWRpbmcgbmFtaW5nXG5jb25zdCBidXR0b25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tbGlzdFwiKTtcbmNvbnN0IHByZWdhbWVTdGF0ZXMgPSBbNSwgNSwgNCwgNCwgMywgMywgMiwgMl07IC8vIGxlbmd0aHMgb2YgdGhlIHNoaXBzIHRoYXQgd2lsbCBiZSBwbGFjZWRcbmNvbnN0IHR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R1cm4taW5kaWNhdG9yXCIpO1xuY29uc3QgdGl0bGVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLXNjcmVlblwiKTtcbmNvbnN0IHNpbmdsZXBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2luZ2xlcGxheWVyXCIpO1xuY29uc3QgbXVsdGlwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI211bHRpcGxheWVyXCIpO1xuY29uc3QgcHJlZ2FtZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZyAudGl0bGVcIik7XG5jb25zdCByZXNldEQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldC1kMVwiKTtcbmNvbnN0IHN3aXRjaEQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2gtZDFcIik7XG5jb25zdCByZXNldEQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldC1kMlwiKTtcbmNvbnN0IHN3aXRjaEQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2gtZDJcIik7XG5jb25zdCByZXNldFIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LXJcIik7XG5jb25zdCBzd2l0Y2hSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2gtclwiKTtcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIik7XG5jb25zdCBDT01QVVRFUl9QQVVTRSA9IDIwMDA7XG5jb25zdCBQQVNTX1BBVVNFID0gNTAwMDtcbmNvbnN0IFRFWFRfUEFVU0UgPSA3MDA7XG5sZXQgdHVybiA9IC0xOyAvLyB1bml2ZXJzYWwgdHVybiB0cmFja2VyIHRvIGRpc2FibGUvZW5hYmxlIGF0dGFjayBldmVudHNcbmxldCBtb2RlID0gLTE7IC8vIDA6IHNpbmdsZXBsYXllciBtb2RlLCAxOiBtdWx0aXBsYXllciBtb2RlXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIGlmIChlLmNvZGUgPT09IFwiRXNjYXBlXCIgJiYgKHNldHVwRGlhbG9ndWUub3BlbiB8fCB0aXRsZVNjcmVlbi5vcGVuKSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxufSk7XG5cbnNpbmdsZXBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgbXVsdGlwbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICBzaW5nbGVwbGF5ZXIuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBtb2RlID0gMDtcbn0pO1xuXG5tdWx0aXBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgc2luZ2xlcGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgbXVsdGlwbGF5ZXIuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBtb2RlID0gMTtcbn0pO1xuXG5mdW5jdGlvbiBob21lUmVuZGVyQm9hcmQoYm9hcmQsIGdhbWVCb2FyZCkge1xuICBsZXQgYXJyID0gZ2FtZUJvYXJkLmdldEJhY2tpbmdBcnJheSgpO1xuICBsZXQgaGl0QXJyID0gZ2FtZUJvYXJkLmdldEhpdEFycmF5KCk7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGxldCByb3c7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LnRvZ2dsZShcInJvd1wiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyclswXS5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbFwiKTtcbiAgICAgIGxldCBpc1NoaXAgPSBhcnJbaV1bal0gaW5zdGFuY2VvZiBTaGlwO1xuICAgICAgbGV0IGlzU3VuayA9IGZhbHNlO1xuICAgICAgaWYgKGlzU2hpcCkge1xuICAgICAgICBpZiAoYXJyW2ldW2pdLmlzU3VuaygpKSBpc1N1bmsgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3Vuaykge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJzdW5rLXNoaXBcIik7XG4gICAgICB9IGVsc2UgaWYgKGhpdEFycltpXVtqXSAmJiBpc1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGl0XCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJhbGl2ZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoaGl0QXJyW2ldW2pdICYmICFpc1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGl0XCIpO1xuICAgICAgfSBlbHNlIGlmICghaXNTdW5rICYmIGlzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJmdWxsLWNlbGxcIik7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5lbXlSZW5kZXJCb2FyZChib2FyZCwgZ2FtZUJvYXJkKSB7XG4gIGxldCBhcnIgPSBnYW1lQm9hcmQuZ2V0QmFja2luZ0FycmF5KCk7XG4gIGxldCBoaXRBcnIgPSBnYW1lQm9hcmQuZ2V0SGl0QXJyYXkoKTtcbiAgYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGV0IHJvdztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QudG9nZ2xlKFwicm93XCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsXCIpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuXG4gICAgICBsZXQgaXNTaGlwID0gYXJyW2ldW2pdIGluc3RhbmNlb2YgU2hpcDtcbiAgICAgIGxldCBpc1N1bmsgPSBmYWxzZTtcbiAgICAgIGlmIChpc1NoaXApIHtcbiAgICAgICAgaWYgKGFycltpXVtqXS5pc1N1bmsoKSkgaXNTdW5rID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N1bmspIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwic3Vuay1zaGlwXCIpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoaGl0QXJyW2ldW2pdICYmIGlzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJhbGl2ZVwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGl0XCIpO1xuICAgICAgfSBlbHNlIGlmIChoaXRBcnJbaV1bal0gJiYgIWlzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJoaXRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJlbmVteS1jZWxsXCIpO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgLy8gZWl0aGVyIHBsYXllciAxJ3MgdHVybiBpbiBib3RoIHNpbmdsZSBwbGF5ZXIgYW5kIG11bHRpcGxheWVyXG4gICAgICAgICAgLy8gb3IgcGxheWVyIDIncyAocGxheWVyMSBpcyB0aGUgZW5lbXkgZ2IpIHR1cm4gaW4gbXVsdGlwbGF5ZXIgb25seS5cbiAgICAgICAgICBpZiAodHVybiA9PSAwIHx8IChtb2RlID09IDEgJiYgZ2FtZUJvYXJkID09IHBsYXllcjEgJiYgdHVybiA9PSAxKSkge1xuICAgICAgICAgICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soW2ksIGpdKTtcbiAgICAgICAgICAgIGVuZW15UmVuZGVyQm9hcmQoYm9hcmQsIGdhbWVCb2FyZCk7XG4gICAgICAgICAgICBnYW1lQ2hlY2tlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVNldHVwKGdhbWVCb2FyZCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChnYW1lQm9hcmQgPT0gcGxheWVyMSkge1xuICAgICAgd3JpdGVPdXQoXCJQbGVhc2UgY2hvb3NlIFBsYXllciAxJ3Mgc2hpcHNcIiwgcHJlZ2FtZVRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JpdGVPdXQoXCJQbGVhc2UgY2hvb3NlIFBsYXllciAyJ3Mgc2hpcHNcIiwgcHJlZ2FtZVRpdGxlKTtcbiAgICB9XG4gICAgbGV0IHByZWdhbWVQb2ludGVyID0gMDtcbiAgICBzZXR1cERpYWxvZ3VlLnNob3dNb2RhbCgpO1xuICAgIGxldCBncmlkQXJyID0gbmV3IEFycmF5KDEwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGdyaWRBcnJbaV0gPSBuZXcgQXJyYXkoMTApO1xuICAgIH1cbiAgICBidXR0b25MaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCByYW5kQnV0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcm90YXRlLmlubmVyVGV4dCA9IFwicm90YXRlXCI7XG4gICAgcmFuZEJ1dHQuaW5uZXJUZXh0ID0gXCJyYW5kb21pemVcIjtcbiAgICByZXN0YXJ0LmlubmVyVGV4dCA9IFwicmVzdGFydFwiO1xuICAgIGRvbmUuaW5uZXJUZXh0ID0gXCJkb25lIVwiO1xuICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2V0dXBEaWFsb2d1ZS5jbGFzc0xpc3QudG9nZ2xlKFwidlwiKTtcbiAgICAgIHByZWdhbWVSZW5kZXJCb2FyZCgpO1xuICAgIH0pO1xuICAgIHJhbmRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByYW5kb21pemUoZ2FtZUJvYXJkKTtcbiAgICAgIHByZWdhbWVQb2ludGVyID0gcHJlZ2FtZVN0YXRlcy5sZW5ndGg7XG4gICAgICBwcmVnYW1lUmVuZGVyQm9hcmQoKTtcbiAgICB9KTtcbiAgICByZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcmVnYW1lUG9pbnRlciA9IDA7XG4gICAgICBnYW1lQm9hcmQucmVzZXQoKTtcbiAgICAgIHByZWdhbWVSZW5kZXJCb2FyZCgpO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAocHJlZ2FtZVBvaW50ZXIgPj0gcHJlZ2FtZVN0YXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICBzZXR1cERpYWxvZ3VlLmNsb3NlKCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBURVhUX1BBVVNFICsgNTAwKTtcbiAgICBidXR0b25MaXN0LmFwcGVuZENoaWxkKHJvdGF0ZSk7XG4gICAgYnV0dG9uTGlzdC5hcHBlbmRDaGlsZChyYW5kQnV0dCk7XG4gICAgYnV0dG9uTGlzdC5hcHBlbmRDaGlsZChyZXN0YXJ0KTtcbiAgICBidXR0b25MaXN0LmFwcGVuZENoaWxkKGRvbmUpO1xuICAgIHByZWdhbWVSZW5kZXJCb2FyZCgpO1xuXG4gICAgZnVuY3Rpb24gcHJlZ2FtZVJlbmRlckJvYXJkKCkge1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IHNldHVwRGlhbG9ndWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwidlwiKSA/IFwidlwiIDogXCJoXCI7XG4gICAgICBsZXQgYXJyID0gZ2FtZUJvYXJkLmdldEJhY2tpbmdBcnJheSgpO1xuICAgICAgc2V0dXBHcmlkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBsZXQgcm93O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC50b2dnbGUoXCJyb3dcIik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICBncmlkQXJyW2ldW2pdID0gY2VsbDtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsXCIpO1xuXG4gICAgICAgICAgaWYgKGFycltpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcImZ1bGwtY2VsbFwiKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBsZW5ndGggPSBwcmVnYW1lU3RhdGVzW3ByZWdhbWVQb2ludGVyXTtcbiAgICAgICAgICBsZXQgc3RhcnQgPSBbaSwgal07XG4gICAgICAgICAgbGV0IGVuZCA9IFstMSwgLTFdO1xuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJ2XCIpIHtcbiAgICAgICAgICAgIGVuZCA9IFtpICsgbGVuZ3RoIC0gMSwgal07XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJoXCIpIHtcbiAgICAgICAgICAgIGVuZCA9IFtpLCBqICsgbGVuZ3RoIC0gMV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdhbWVCb2FyZC5wbGFjZVNoaXAoW2ksIGpdLCBlbmQpKSB7XG4gICAgICAgICAgICAgIHByZWdhbWVQb2ludGVyKys7XG4gICAgICAgICAgICAgIHByZWdhbWVSZW5kZXJCb2FyZChkaXJlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT5cbiAgICAgICAgICAgIGhhbmRsZUhvdmVyKFxuICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgIGdyaWRBcnIsXG4gICAgICAgICAgICAgIGdhbWVCb2FyZC5pc1BsYWNlYWJsZShzdGFydCwgZW5kKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiByZXNldEhvdmVyKCkpO1xuICAgICAgICAgIGdyaWRBcnJbaV1bal0gPSBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwR3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUhvdmVyKHN0YXJ0LCBsZW5ndGgsIGRpcmVjdGlvbiwgYXJyLCBsZWdhbGl0eSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudFNxdWFyZTtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaFwiKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0WzFdICsgaSA8IDEwKSBjdXJyZW50U3F1YXJlID0gYXJyW3N0YXJ0WzBdXVtzdGFydFsxXSArIGldO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcInZcIikge1xuICAgICAgICAgIGlmIChzdGFydFswXSArIGkgPCAxMCkgY3VycmVudFNxdWFyZSA9IGFycltzdGFydFswXSArIGldW3N0YXJ0WzFdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50U3F1YXJlICYmIGxlZ2FsaXR5KSB7XG4gICAgICAgICAgY3VycmVudFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3F1YXJlICYmICFsZWdhbGl0eSkge1xuICAgICAgICAgIGN1cnJlbnRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImlsbGVnYWwtaG92ZXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0SG92ZXIoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG92ZXJlZFwiKS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlsbGVnYWwtaG92ZXJlZFwiKS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImlsbGVnYWwtaG92ZXJlZFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbWl6ZShnYW1lQm9hcmQpIHtcbiAgZ2FtZUJvYXJkLnJlc2V0KCk7XG4gIGxldCBwcmVnYW1lUG9pbnRlciA9IDA7XG4gIHdoaWxlIChwcmVnYW1lUG9pbnRlciA8IHByZWdhbWVTdGF0ZXMubGVuZ3RoKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGxldCBzdGFydCA9IFtcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICBdO1xuICAgIGxldCBlbmQgPSBbLTEsIC0xXTtcbiAgICBpZiAoZGlyZWN0aW9uID09IDApIHtcbiAgICAgIGVuZCA9IFtzdGFydFswXSwgc3RhcnRbMV0gKyBwcmVnYW1lU3RhdGVzW3ByZWdhbWVQb2ludGVyXSAtIDFdO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpIHtcbiAgICAgIGVuZCA9IFtzdGFydFswXSArIHByZWdhbWVTdGF0ZXNbcHJlZ2FtZVBvaW50ZXJdIC0gMSwgc3RhcnRbMV1dO1xuICAgIH1cbiAgICBpZiAoZ2FtZUJvYXJkLnBsYWNlU2hpcChzdGFydCwgZW5kKSkgcHJlZ2FtZVBvaW50ZXIrKztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRXaW5uZXIoZ2IxLCBnYjIpIHtcbiAgaWYgKGdiMS5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHJldHVybiBnYjI7XG4gIH0gZWxzZSBpZiAoZ2IyLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgcmV0dXJuIGdiMTtcbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8vIG1vZGVyYXRvci9yZWYgKGludGVybWVkaWF0ZSBzdGF0ZSlcbmZ1bmN0aW9uIGdhbWVDaGVja2VyKCkge1xuICBsZXQgcHJldnR1cm4gPSB0dXJuO1xuICB0dXJuID0gLTE7IC8vIGludGVybWVkaWF0ZSBtb2RlXG4gIGxldCB3aW5uZXIgPSBnZXRXaW5uZXIocGxheWVyMSwgcGxheWVyMik7XG4gIGlmICh3aW5uZXIgPT0gcGxheWVyMSkge1xuICAgIGRpc3BsYXlXaW5uZXIocGxheWVyMSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKHdpbm5lciA9PSBwbGF5ZXIyKSB7XG4gICAgZGlzcGxheVdpbm5lcihwbGF5ZXIyKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1vZGUgPT0gMSkge1xuICAgIHdyaXRlT3V0KFxuICAgICAgYFlvdSBoYXZlIDUgc2Vjb25kcyB0byBwYXNzIHRoZSBkZXZpY2UgdG8gdGhlIG90aGVyIHBsYXllcmAsXG4gICAgICB0dXJuSW5kaWNhdG9yXG4gICAgKTtcbiAgfVxuICBpZiAocHJldnR1cm4gPT0gMCkge1xuICAgIC8vIGlmIHRoZSBpbmNvbWluZyB0dXJuIHdhcyAwLCBleGVjdXRlIHR1cm4gMVxuICAgIGlmIChtb2RlID09IDApIHtcbiAgICAgIHNldFR1cm5HVUkocGxheWVyMik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHVybiA9IDE7XG4gICAgICAgIGF0dGFja1dpdGhDb21wdXRlcihwbGF5ZXIxKTtcbiAgICAgICAgaG9tZVJlbmRlckJvYXJkKGJvYXJkMSwgcGxheWVyMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0sIENPTVBVVEVSX1BBVVNFKTsgLy8gZ2l2ZSB0aGUgaW1wcmVzc2lvbiB0aGF0IHRoZSBjb21wdXRlciBpcyB0aGlua2luZyBsb2xcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT0gMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFR1cm5HVUkocGxheWVyMik7XG4gICAgICAgIGVuZW15UmVuZGVyQm9hcmQoYm9hcmQxLCBwbGF5ZXIxKTtcbiAgICAgICAgaG9tZVJlbmRlckJvYXJkKGJvYXJkMiwgcGxheWVyMik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHR1cm4gPSAxO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSwgUEFTU19QQVVTRSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHByZXZ0dXJuID09IDEpIHtcbiAgICAvLyBpZiB0aGUgaW5jb21pbmcgdHVybiB3YXMgMSwgZXhlY3V0ZSB0dXJuIDBcbiAgICBpZiAobW9kZSA9PSAwKSB7XG4gICAgICBzZXRUdXJuR1VJKHBsYXllcjEpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR1cm4gPSAwO1xuICAgICAgICBlbmVteVJlbmRlckJvYXJkKGJvYXJkMiwgcGxheWVyMik7XG4gICAgICB9LCBURVhUX1BBVVNFKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT0gMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFR1cm5HVUkocGxheWVyMSk7XG4gICAgICAgIGVuZW15UmVuZGVyQm9hcmQoYm9hcmQyLCBwbGF5ZXIyKTtcbiAgICAgICAgaG9tZVJlbmRlckJvYXJkKGJvYXJkMSwgcGxheWVyMSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHR1cm4gPSAwO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSwgUEFTU19QQVVTRSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFja1dpdGhDb21wdXRlcihnYikge1xuICBsZXQgYXJyID0gZ2IuZ2V0QmFja2luZ0FycmF5KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChnYi5pc0hpdChbaSwgal0pICYmIGdiLnNoaXBFeGlzdHMoW2ksIGpdKSAmJiAhYXJyW2ldW2pdLmlzU3VuaygpKSB7XG4gICAgICAgIGxldCBhdHRhY2tTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIGxldCBzcXVhcmUgPSBbLTEsIC0xXTtcbiAgICAgICAgLy8gbm9ydGhcbiAgICAgICAgc3F1YXJlID0gW2kgLSAxLCBqXTtcbiAgICAgICAgaWYgKGdiLmlzTGVnYWxTcXVhcmUoc3F1YXJlKSkgYXR0YWNrU3VjY2VzcyA9IGdiLnJlY2VpdmVBdHRhY2soc3F1YXJlKTtcbiAgICAgICAgaWYgKCFhdHRhY2tTdWNjZXNzKSB7XG4gICAgICAgICAgLy8gZWFzdFxuICAgICAgICAgIHNxdWFyZSA9IFtpLCBqICsgMV07XG4gICAgICAgICAgaWYgKGdiLmlzTGVnYWxTcXVhcmUoc3F1YXJlKSlcbiAgICAgICAgICAgIGF0dGFja1N1Y2Nlc3MgPSBnYi5yZWNlaXZlQXR0YWNrKHNxdWFyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2FtZUNoZWNrZXIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdHRhY2tTdWNjZXNzKSB7XG4gICAgICAgICAgLy8gc291dGhcbiAgICAgICAgICBzcXVhcmUgPSBbaSArIDEsIGpdO1xuICAgICAgICAgIGlmIChnYi5pc0xlZ2FsU3F1YXJlKHNxdWFyZSkpXG4gICAgICAgICAgICBhdHRhY2tTdWNjZXNzID0gZ2IucmVjZWl2ZUF0dGFjayhzcXVhcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVDaGVja2VyKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXR0YWNrU3VjY2Vzcykge1xuICAgICAgICAgIC8vIHdlc3RcbiAgICAgICAgICBzcXVhcmUgPSBbaSwgaiAtIDFdO1xuICAgICAgICAgIGlmIChnYi5pc0xlZ2FsU3F1YXJlKHNxdWFyZSkpXG4gICAgICAgICAgICBhdHRhY2tTdWNjZXNzID0gZ2IucmVjZWl2ZUF0dGFjayhzcXVhcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVDaGVja2VyKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRhY2tTdWNjZXNzKSB7XG4gICAgICAgICAgZ2FtZUNoZWNrZXIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gbm8gYXR0YWNrZWQgc2hpcCBoYXMgYmVlbiBmb3VuZC5cbiAgbGV0IGF0dGFja1N1Y2Nlc3MgPSBmYWxzZTtcbiAgbGV0IHNxdWFyZSA9IFstMSwgLTFdO1xuICB3aGlsZSAoIWF0dGFja1N1Y2Nlc3MpIHtcbiAgICBzcXVhcmUgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgIGF0dGFja1N1Y2Nlc3MgPSBnYi5yZWNlaXZlQXR0YWNrKHNxdWFyZSk7XG4gIH1cbiAgZ2FtZUNoZWNrZXIoKTtcbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzZXRUdXJuR1VJKHBsYXllcikge1xuICBpZiAocGxheWVyID09IHBsYXllcjEpIHtcbiAgICB3cml0ZU91dChcInBsYXllciAxJ3MgdHVyblwiLCB0dXJuSW5kaWNhdG9yKTtcbiAgfSBlbHNlIGlmIChtb2RlID09IDApIHtcbiAgICB3cml0ZU91dChcImNvbXB1dGVyJ3MgdHVyblwiLCB0dXJuSW5kaWNhdG9yKTtcbiAgfSBlbHNlIHtcbiAgICB3cml0ZU91dChcInBsYXllciAyJ3MgdHVyblwiLCB0dXJuSW5kaWNhdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyKHBsYXllcikge1xuICBpZiAocGxheWVyID09IHBsYXllcjEpIHtcbiAgICB3cml0ZU91dChcInBsYXllciAxIGhhcyB3b24hXCIsIHR1cm5JbmRpY2F0b3IpO1xuICB9IGVsc2UgaWYgKG1vZGUgPT0gMCkge1xuICAgIHdyaXRlT3V0KFwidGhlIGNvbXB1dGVyIGhhcyB3b24hXCIsIHR1cm5JbmRpY2F0b3IpO1xuICB9IGVsc2UgaWYgKG1vZGUgPT0gMSkge1xuICAgIHdyaXRlT3V0KFwicGxheWVyIDIgaGFzIHdvbiFcIiwgdHVybkluZGljYXRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JpdGVPdXQodGV4dCwgZWxlbWVudCkge1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgbGV0IGkgPSAwO1xuICBsZXQgc3BlZWQgPSAzNTsgLyogVGhlIHNwZWVkL2R1cmF0aW9uIG9mIHRoZSBlZmZlY3QgaW4gbWlsbGlzZWNvbmRzICovXG4gIHR5cGVXcml0ZXIoKTtcblxuICBmdW5jdGlvbiB0eXBlV3JpdGVyKCkge1xuICAgIGlmIChpIDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG4gICAgICBpKys7XG4gICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIHNwZWVkKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29sb3JIYW5kbGVyKCkge1xuICBsZXQgdDEgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoXCItLXByaW1hcnktY29sb3JcIik7XG4gIGxldCB0MiA9IGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2Vjb25kYXJ5LWNvbG9yXCIpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1wcmltYXJ5LWNvbG9yXCIsIHQyKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Vjb25kYXJ5LWNvbG9yXCIsIHQxKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRIYW5kbGVyKCkge1xuICBwbGF5ZXIxID0gbmV3IEdhbWVib2FyZCgpO1xuICBwbGF5ZXIyID0gbmV3IEdhbWVib2FyZCgpO1xuICB0aXRsZVNjcmVlbi5zaG93TW9kYWwoKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0gTm9uZnVuY3Rpb25zIHN0YXJ0IGhlcmUgLS0tLS0tLS0tLS0tLS0tLS1cbnRpdGxlU2NyZWVuLnNob3dNb2RhbCgpO1xuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKG1vZGUgIT0gLTEpIHtcbiAgICB0aXRsZVNjcmVlbi5jbG9zZSgpO1xuICAgIHR1cm4gPSAwO1xuICAgIGlmIChtb2RlID09IDApIHtcbiAgICAgIGRpc3BsYXlTZXR1cChwbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VHVybkdVSShwbGF5ZXIxKTtcbiAgICAgICAgcmFuZG9taXplKHBsYXllcjIpOyAvLyBzaHVmZmxlIGNvbXB1dGVyIHNoaXBzXG4gICAgICAgIGhvbWVSZW5kZXJCb2FyZChib2FyZDEsIHBsYXllcjEpO1xuICAgICAgICBlbmVteVJlbmRlckJvYXJkKGJvYXJkMiwgcGxheWVyMik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT0gMSkge1xuICAgICAgZGlzcGxheVNldHVwKHBsYXllcjEpXG4gICAgICAgIC50aGVuKCgpID0+IGRpc3BsYXlTZXR1cChwbGF5ZXIyKSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHR1cm4gPSAwO1xuICAgICAgICAgIHNldFR1cm5HVUkocGxheWVyMSk7XG4gICAgICAgICAgaG9tZVJlbmRlckJvYXJkKGJvYXJkMSwgcGxheWVyMSk7XG4gICAgICAgICAgZW5lbXlSZW5kZXJCb2FyZChib2FyZDIsIHBsYXllcjIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5sZXQgcGxheWVyMSA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBwbGF5ZXIyID0gbmV3IEdhbWVib2FyZCgpO1xuXG5yZXNldEQxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEhhbmRsZXIpO1xucmVzZXREMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRIYW5kbGVyKTtcbnJlc2V0Ui5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRIYW5kbGVyKTtcblxuc3dpdGNoRDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbG9ySGFuZGxlcik7XG5zd2l0Y2hEMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29sb3JIYW5kbGVyKTtcbnN3aXRjaFIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbG9ySGFuZGxlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=