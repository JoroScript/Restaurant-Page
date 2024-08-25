/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    /* padding: 0;\n    margin: 0; */\n    box-sizing: border-box;\n}\n/* Set the background image, size, and position */\nbody {\n    font-family: \"Space Grotesk\", sans-serif;\n    margin: 0; /* Remove default margin */\n    padding: 0;\n    background: none; /* Clear any background color */\n    position: relative; /* To position the pseudo-element */\n    overflow-x: hidden; /* Prevent horizontal scroll */\n    color: white;\n}\nheader{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n/* Pseudo-element to create the blurred background effect */\nbody::before {\n    content: \"\";\n    position: fixed; /* Fixed positioning ensures it covers the viewport */\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url('https://c4.wallpaperflare.com/wallpaper/419/342/435/fire-meat-vegetables-steak-grill-hd-wallpaper-preview.jpg'); /* Replace with your image URL */\n    background-size: cover; /* Ensures the image covers the whole area */\n    background-position: center; /* Center the background image */\n    filter: blur(20px); /* Apply the blur effect */\n    z-index: -1; /* Place behind the main content */\n    pointer-events: none; /* Prevents interaction with the pseudo-element */\n}\n.foodItem{\n    padding: 0.5em;\n    position: relative;\n    font-weight: bold;\n    color: yellow;\n    transition: color 0.1s ease;\n}\n\n.itemName:hover::after{\n    transform: scaleX(0);\n}\n\n\n.foodItem:hover::before{\n    filter: none;\n    border-radius: 75px;\n}\n.foodItem:hover{\n    color: transparent;\n}\n#content{\n    margin: 1.5em auto;\n    text-align: center;\n}\n.headerText{\n   grid-column: 1/4;\n   border-bottom: 1px solid white;\n    border-radius: 3px;\n}\n.headerText:hover{\n    color: orange;\n}\n.headerText:hover:after{\n   background-color: orange;\n \n}\nh1,h2,h3:not(.itemName),h4{\n    display: inline-block;\n    position: relative;   \n    cursor:default;\n    transition: color 0.5s ease; /* Transition effect for color change */\n}\nh2:after,h3:not(.itemName),h4:after{\n    content: ''; /* No text, just a line */\n    position: absolute; /* Position relative to the link */\n    left: 0; /* Start from the left edge */\n    bottom: 0; /* Position at the bottom of the link */\n    width: 100%; /* Full width */\n    height: 2px; /* Thickness of the underline */\n    background-color: #fff; /* Color of the underline */\n    transform: scaleX(0); /* Initially hidden (scale horizontally) */\n    transform-origin: bottom right; /* Start scaling from the right */\n    transition: transform 0.3s ease; /* Smooth transition effect */\n    cursor: pointer;\n}\nh2:hover:after,h3:hover:after,h4:hover:after{\n    transform: scaleX(1); /* Fully visible on hover */\n    transform-origin: bottom left; /* Animate from the left */\n    cursor: pointer;\n}\n.itemName{\n    cursor: default;\n}\np:hover{\n    cursor: default;\n}\nh2:hover,h3:not(.itemName),h4:hover{\n    cursor: default;\n    border: none;\n    color: orange;\n}\n.aboutCard{\n    padding: 1em;\n    margin: 0 auto;\n    width: 50%;\n    height: 450px;\n    position: relative;\n    color: white;\n    border-radius: 10%;\n    transition: transform 0.3s ease;\n    display: flex;\n}\n.aboutCard p{\n    color: white;\n    opacity: 0;\n    transition: opacity 0.6s ease;\n}\n.aboutCard::before{\n    position: absolute; /* Fixed positioning ensures it covers the viewport */\n    top: 0;\n    border-radius: 10%;\n    left: 0;\n    content:'';\n    width: 100%;\n    height: 100%;\n    transition: filter 0.3s ease;\n    background-image: url('https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg');\n    background-size: cover; /* Ensures the image covers the whole area */\n    background-position: center; /* Center the background image */\n    z-index: -1; /* Place behind the main content */\n    pointer-events: none; /* Prevents interaction with the pseudo-element */\n}\n.aboutCard:hover{\n    transform: scale(1.1);\n}\n.aboutCard:hover p{\n    opacity: 1;\n}\n.aboutCard:hover::before{\n    filter: blur(20px);\n}\nh1{\n    font-size: 3em;\n    text-align: center;\n    flex: none;\n}\n.menuContainer{\n    display: grid;\n    gap: 60px;\n    grid-template-columns: repeat(auto-fit,minmax(350px,0.8fr));\n    justify-content: center;\n}\n.title{\n    \n    font-size: 2.4em;\n    border: 1px solid white;\n    padding-block: 0.5em;\n    border-radius: 5px;\n    margin-bottom: 0;\n}\n.headerText{\n    font-size: 2.5em;\n}\nh3{\n    font-size: 2em;\n    margin: 0.5em;\n}\np{\n    font-size: 1.2em;\n}\n.active{\n    color: orange;\n    box-shadow: 0px 5px 15px 7px rgba(189,98,38,1);\n    border: 2px solid orange;\n}\n/* h1,h2,h3,h4,p,li{\n    text-align: center;\n} */\nnav{\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    padding-inline: 3em;\n}\n\nnav button{\n    font-size: 1.5em;\n    flex: 1 1 auto;\n    border-radius: 5px;\n    background-color: transparent;\n    transition: box-shadow 0.3s ease; /* Smooth transition for box-shadow */\n    color: white;\n    border-color: white;\n}\nh4{\n    font-size: 1.5em;\n}\nul li{\n    list-style: none;\n    font-size: 1.2em;\n    position: relative;\n\n}\nul li{\n    margin-bottom: 1em;\n}\nul li:last-child{\n    margin-bottom: 0;\n}\nul li::before{\n    position: absolute;\n    transform: translate(-20px, 5px);\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    background-color: white;\n    border-radius: 50%;\n}\nnav button:hover{\n    color: orange;\n    box-shadow: 0px 5px 15px 7px rgba(189,98,38,1);\n    border: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAbout: () => (/* binding */ addAbout)\n/* harmony export */ });\nconst addAbout = (container) =>{\n    container.innerHTML=\"\";\n    container.className=\"\";\n\n    \n    const h2 = document.createElement('h2');\n    h2.textContent=\"Contacts\";\n    container.appendChild(h2);\n\n    const text=document.createElement('p');\n    text.innerHTML=\"For Reservations & Orders: <strong>0853413950</strong>\";\n    container.appendChild(text);\n    const text2=document.createElement('p');\n    text2.innerHTML=\"Email: <strong>GeorgeSeasoned@gmail.com</strong>\";\n    container.appendChild(text2);   \n    const text3=document.createElement('h2');\n    text3.textContent=\"Hover Over Chef To Learn More\";\n    container.appendChild(text3);\n    const card=document.createElement('div');\n    card.className='aboutCard';\n\n    const chefDesc=document.createElement('p');\n    chefDesc.textContent=\"I started this business with the idea of serving people what they want - a well cooked steak that will leave people with good memories and a full stomach. I have been a professional chef for over 20 years but decided to take things into my own hands and open the best steak restaurant in New York.\"\n    card.appendChild(chefDesc);\n    container.appendChild(card);\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHome: () => (/* binding */ addHome)\n/* harmony export */ });\n\n\nconst addHome = (container) =>{\n    container.innerHTML=\"\";\n    container.className=\"\";\n    container.style.width=\"75%\"\n    let title = document.createElement('h2');\n    title.classList=(\"title black\");\n    \n    title.textContent=\"Experience The Delicate Taste of a Perfectly Seasoned Stake by Your Liking!\";\n    container.appendChild(title);\n    // let para=document.createElement('p');\n    // para.textContent=\"Here in George's Seasoned we care about the meat you eat. We offer many different meats\";\n    // container.appendChild(para);\n    const about= document.createElement('h3');\n    about.textContent=\"About George's Seasoned\";\n    container.appendChild(about);\n    \n    const text=document.createElement('p');\n    text.className=\"black\";\n    text.textContent=\"Welcome to George's Seasoned, where the art of steak preparation meets culinary excellence. We specialize in offering a variety of perfectly cooked, well-seasoned steaks that satisfy even the most discerning palates. Our chefs are dedicated to delivering the finest cuts of meat, seasoned to perfection and cooked to your exact specifications. Whether you're a fan of a juicy ribeye, a tender filet mignon, or a flavorful sirloin, each steak is crafted with care and attention to detail. Join us for an unforgettable dining experience where quality and taste are always on the menu.\"\n    container.appendChild(text);\n\n    const list = document.createElement('ul');\n    const h4=document.createElement('h4');\n    h4.textContent=\"Why George's Seasoned Stands Above the Rest:\";\n    list.appendChild(h4);\n\n    let item=document.createElement('li');\n    let item2=document.createElement('li');\n    let item3=document.createElement('li');\n    let item4=document.createElement('li');\n    let item5=document.createElement('li');\n    let item6=document.createElement('li');\n  \n    item.textContent=\"Superior Seasoning: Each steak is expertly seasoned to enhance the natural flavors of the meat, ensuring every bite is a savory delight.\"\n    list.appendChild(item);\n    item2.textContent=\"Prime Cuts of Meat: We use only the finest, hand-selected cuts of beef, guaranteeing tenderness and flavor in every steak.\";\n    list.appendChild(item2);\n    item3.textContent=\"Precision Cooking: Our chefs are masters in their craft, cooking each steak to perfection based on your preference, whether you like it rare or well-done.\";\n    list.appendChild(item3);\n    item4.textContent=\"Unmatched Quality: From the moment you walk in, we prioritize delivering an exceptional dining experience, from service to plate.\";\n    list.appendChild(item4);\n    item5.textContent=\"Welcoming Atmosphere: Enjoy your meal in a warm, inviting environment that complements the rich flavors of our steaks.\";\n    list.appendChild(item5);\n    item6.textContent=\"Innovative Pairings: We offer a carefully curated selection of sides and wines that perfectly complement our steaks, elevating your dining experience.\";\n    list.appendChild(item6);\n    container.appendChild(list);\n}\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nlet homeBtn=document.getElementById('homeBtn');\nlet aboutBtn=document.getElementById('aboutBtn');\nlet menuBtn=document.getElementById('menuBtn');\nlet buttons=document.querySelectorAll('.navbtn');\nconst container = document.getElementById('content');\ndocument.addEventListener('DOMContentLoaded', ()=>{\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.addHome)(container);\n    homeBtn.classList.add(\"active\");\n});\nlet changeBtnSelectColor = (btn) =>{\n    let btnId=btn.id;\n    buttons.forEach(button=>{\n        if(button.id===btnId){\n            button.classList.add(\"active\");\n        }\n        else button.classList.remove(\"active\");\n    })\n}\n\nhomeBtn.addEventListener('click',()=>{\n    // homeBtn.classList.contains(\"active\") = true ? homeBtn.classList.remove(\"active\") : homeBtn.classList.add(\"active\");\n    changeBtnSelectColor(homeBtn);  \n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.addHome)(container);\n})\n\naboutBtn.addEventListener('click',()=>{\n    changeBtnSelectColor(aboutBtn);     \n    (0,_about__WEBPACK_IMPORTED_MODULE_1__.addAbout)(container);\n})\n\nmenuBtn.addEventListener('click',()=>{\n    changeBtnSelectColor(menuBtn);\n(0,_menu__WEBPACK_IMPORTED_MODULE_3__.addMenu)(container);\n})\n\nconsole.log(\"HELLOOOOOOO\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMenu: () => (/* binding */ addMenu)\n/* harmony export */ });\nconst addMenu = (container)=>{\n    container.innerHTML=\"\";\n    container.className=\"\";\n    container.className=\"menuContainer\";\n     container.style.width=\"75%\"\n    // const header1 = document.createElement('h2');\n    // header1.className=\"headerText\";\n    // header1.textContent=\"Appetizers\";\n    // container.appendChild(header1);\n\n    const menuItems= [\n        {\n            title: 'Garlic Butter Shrimp Skewers',\n            description: 'Grilled shrimp skewers brushed with garlic butter and served with a zesty lemon dipping sauce.',\n            price: '12.99$',\n            imageSrc: 'https://www.thespruceeats.com/thmb/Kk9ncgxXYVWmD9MvHLAHOU4Zto4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-shrimp-with-garlic-butter-dipping-sauce-3060876-Hero_01-987656c360754fc79b6e09b83e0361b1.jpg'\n        },\n        {\n            title: 'Classic Caesar Salad',\n            description: 'Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing, topped with anchovies and cracked black pepper.',\n            price: '12.99$',\n            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUO7I6p5hcfCMYa6URocjt0M1RzVEsf5fHg&s'\n        },\n        {\n            title: 'Bacon-Wrapped Jalapeño Poppers',\n            description: 'Jalapeño peppers stuffed with cream cheese, wrapped in bacon, and baked to perfection.',\n            price: '12.99$',\n            imageSrc: 'https://cookingwithcocktailrings.com/wp-content/uploads/2022/11/Bacon-Wrapped-Jalapeno-Poppers-41.jpg'\n        },\n        {\n            title: 'Ribeye Steak',\n            description: 'A juicy, well-marbled ribeye steak, cooked to your liking, served with a choice of sides like mashed potatoes or grilled asparagus.',\n            price: '12.99$',\n            imageSrc: 'https://foremangrillrecipes.com/wp-content/uploads/featured-ribeye-steak-foreman-grill-new.jpg'\n\n        },\n        {\n            title: 'Filet Mignon',\n            description: 'Tender and succulent filet mignon, topped with a rich mushroom demi-glace, and served with roasted garlic mashed potatoes.',\n            price: '12.99$',\n            imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/filet-mignon-index-66c4b19cc80ba.jpeg?crop=1.00xw:1.00xh;0,0&resize=1200:*'\n        },\n        {\n            title: 'New York Strip',\n            description: 'A flavorful New York strip steak, seasoned and grilled, served with a side of creamy spinach and a baked potato.',\n            price: '12.99$',\n            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ66NqQtNti2nj6AkzZSMEEjXAPxxygUpCw&s'\n        },\n        {\n            title: 'Truffle Parmesan Fries',\n            description: 'Crispy fries tossed in truffle oil, sprinkled with grated Parmesan cheese, and garnished with fresh parsley.',\n            price: '12.99$',\n            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdmqnvntHjJj62Rtn2Zlwjo0KRddn6peCrQ&s'\n        },\n        {\n            title: 'Creamed Spinach',\n            description: 'Spinach cooked in a creamy, cheesy sauce, with a hint of nutmeg and garlic.',\n            price: '12.99$',\n            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBsZ8f6fitkySOAJ7DDSNBDmqkYGm34k92w&s'    \n        },\n        {\n            title: 'Grilled Asparagus',\n            description: 'Fresh asparagus spears, lightly seasoned and grilled, drizzled with balsamic glaze and topped with shaved Parmesan.',\n            price: '12.99$',\n            imageSrc: 'https://www.seriouseats.com/thmb/ChkV1pLbydsYuoW-4zETC6QjPJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-simple-grilled-asparagus-recipe-hero-02-withservingutensil-cd400626b79b49e280f07c8eaee52103.jpg'\n                }\n\n      \n    ]\n    // for(let i=0; i<9; i++){\n    //     let item=document.createElement('div');\n    //     item.className=`item${i+1}`\n    //     let itemName=document.createElement('h3');\n    //     itemName.textContent=menuItems.title[0];\n    //     item.appendChild(itemName);\n    //     let itemDesc=document.createElement('p');\n    //     itemDesc.className=\"itemDesc\";\n    //     itemDesc.textContent=menuItems.itemDesc[0];\n    //     item.appendChild(itemDesc);\n    //     let itemPrice=document.createElement('p');\n    //     itemPrice.className=\"price\";\n    //     itemPrice.textContent=menuItems.itemsPrice[0];\n\n    //     container.appendChild(item);\n    // }\n    function setBackgroundImage(index, imageSrc) {\n          const escapedImageSrc = imageSrc.replace(/'/g, \"\\\\'\");\n        const styleSheet = document.styleSheets[0];\n       \n        const rule = \n        `.foodItem:nth-child(${index + 1})::before {\n       transition: filter 0.3s ease;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    top: 0;\n    left: 0;\n    content: '';\n    filter: blur(13px);\n    z-index: -1;\n    border-radius: 35%;\n    transition: border-radius 0.3s ease;\n    background-image: url('${escapedImageSrc}');\n    }`;\n    try {\n        styleSheet.insertRule(rule, styleSheet.cssRules.length);\n    } catch (e) {\n        console.error('Failed to insert CSS rule:', e);\n    }\n     \n    }\n    menuItems.forEach((food,index)=>{\n     \n        let item=document.createElement('div');\n            item.className=\"foodItem\";\n            let itemName=document.createElement('h3');\n            itemName.className=\"itemName\";\n            itemName.textContent=food.title;\n            item.appendChild(itemName);\n            let itemDesc=document.createElement('p');\n            itemDesc.className=\"itemDesc\";\n            itemDesc.textContent=food.description;\n            item.appendChild(itemDesc);\n            let itemPrice=document.createElement('p');\n            itemPrice.className=\"price\";\n            itemPrice.textContent=food.price;\n            item.appendChild(itemPrice);\n            setBackgroundImage(index,food.imageSrc);\n           \n    \n            container.appendChild(item);\n            // if(index===2){\n            //     const header2 = document.createElement('h2');\n            //     header2.className=\"headerText\";\n            //     header2.textContent=\"Main Courses\";\n            //     container.appendChild(header2);\n            \n            // }\n            // else if(index===5){\n            //     const header3 = document.createElement('h2');\n            //     header3.className=\"headerText\";\n            //     header3.textContent=\"Sides\";\n            //     container.appendChild(header3);\n            // }\n    })\n    \n}\n\n//# sourceURL=webpack:///./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;