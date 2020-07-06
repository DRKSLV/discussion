webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/EyeOfJudgement.js":
/*!*********************************************!*\
  !*** ./components/layout/EyeOfJudgement.js ***!
  \*********************************************/
/*! exports provided: EyePlaceholder, EyeProvider, EyeOnMount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyePlaceholder", function() { return EyePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeProvider", function() { return EyeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeOnMount", function() { return EyeOnMount; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _res_svg_eyeOfJudgementEllipseSVG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../res/svg/eyeOfJudgementEllipseSVG */ "./res/svg/eyeOfJudgementEllipseSVG.js");
/* harmony import */ var _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../style/eye.module.sass */ "./style/eye.module.sass");
/* harmony import */ var _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_eye_module_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_uniqueId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/uniqueId */ "./helpers/uniqueId.js");



var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\layout\\EyeOfJudgement.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var eyeContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])(); // TODO EYE starts flying from wrong points on the page when placeholder has position: ficed and placeholders are triggered from clicking on unrelated things.
// this happens because of the useEffect call that pulls the eye when the position is off. the position is offset by scrolling, component rerenders and pulls the eye. Damn

function EyePlaceholder(props) {
  var placeholder = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
    return props.id || Object(_helpers_uniqueId__WEBPACK_IMPORTED_MODULE_6__["default"])();
  }),
      id = _useState[0],
      setId = _useState[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(eyeContext);
  if (!context) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  });

  var _context = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(context, 4),
      active = _context[0],
      pos = _context[1],
      animating = _context[2],
      _context$ = _context[3],
      setActive = _context$.setActive,
      setPos = _context$.setPos,
      setSize = _context$.setSize,
      setColor = _context$.setColor,
      setAnimating = _context$.setAnimating,
      init = _context$.init;

  var activeRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(active);
  activeRef.current = active;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      animDone = _useState2[0],
      setAnimDone = _useState2[1];

  function becomeActive(evt) {
    setPos(calcPos());
    setSize(props.size);
    setColor([props.baseColor, props.innerColor]);
    setActive(id);
    if (evt) evt.stopPropagation();
  }

  function resetActive(act, ide) {
    if (activeRef.current === id) {
      setActive("default");
      setAnimating(true);
    }
  }

  function calcPos() {
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = placeholder.current.getBoundingClientRect(),
        offsetY = elemRect.top - bodyRect.top,
        offsetX = elemRect.left - bodyRect.left;
    return [offsetX, offsetY];
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var currentPos = calcPos();

    if (active === id && (pos[0] !== currentPos[0] || pos[1] !== currentPos[1] || !init)) {
      if (animDone) {
        return setPos(calcPos(), false);
      }

      becomeActive();
      setAnimDone(true);
    }

    if (active !== id && animDone) {
      setAnimDone(false);
    }
  });
  var controllerObj;
  if (props.controller) controllerObj = react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(props.controller, {
    becomeActive: becomeActive,
    resetActive: resetActive,
    active: active,
    id: id
  });
  return __jsx("div", {
    onClick: becomeActive,
    ref: placeholder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(EyeOfJudgement, {
    size: props.size,
    show: active === id && !animating,
    id: id,
    baseColor: props.baseColor,
    innerColor: props.innerColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), controllerObj);
}

function EyeOfJudgement(props) {
  var width = (140 / 71 * props.size || 291) + "px";
  var height = props.size + "px";
  var grow = props.grow;
  var show = props.show;
  if (typeof grow !== "boolean") grow = true;
  if (typeof show !== "boolean") show = true;

  var eee = _objectSpread({}, props);

  delete eee.style;
  delete eee.baseColor;
  delete eee.innerColor;
  delete eee.show;
  delete eee.grow;

  var newStyle = _objectSpread({
    "--base-color": props.baseColor || "#ff00fe",
    "--inner-color": props.innerColor || "#00f3ff"
  }, props.style);

  var Svg = __jsx(_res_svg_eyeOfJudgementEllipseSVG__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    height: height,
    width: width,
    style: newStyle
  }, eee, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }));

  return grow ? __jsx("div", {
    className: _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.eyeWrapper,
    style: {
      height: height,
      width: width
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.eye,
    style: {
      display: show ? "block" : "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, Svg)) : Svg;
}

function EyeProvider(props) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("default"),
      active = _useState3[0],
      setActive = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      animating = _useState4[0],
      setAnimating = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([undefined, undefined]),
      pos = _useState5[0],
      setPos = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(400),
      size = _useState6[0],
      setSize = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(["", ""]),
      _useState7$ = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7[0], 2),
      baseColor = _useState7$[0],
      innerColor = _useState7$[1],
      setColor = _useState7[1];

  var activeRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      init = _useState8[0],
      setInit = _useState8[1];

  function setterPos(e) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (init && animate) {
      setAnimating(true);
    }
    /*clearTimeout(timer.current);
    timer.current = setTimeout(() => {
        setAnimating(false);
    }, 300);*/


    setPos(e);
  }

  function animEnd() {
    setAnimating(false);
  }

  if (!init && typeof pos[0] !== "undefined" && !animating) {
    setInit(true);
  }

  return __jsx(eyeContext.Provider, {
    value: [active, pos, animating, {
      setActive: setActive,
      setPos: setterPos,
      setSize: setSize,
      setColor: setColor,
      setAnimating: setAnimating,
      init: init
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 12
    }
  }, props.children, __jsx(EyeOfJudgement, {
    style: {
      top: pos[1],
      left: pos[0],
      visibility: animating ? "visible" : "hidden"
    },
    className: init && animating ? _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.flyingEye : _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.flyingEyeNoAnim,
    size: size,
    grow: false,
    onTransitionEnd: animEnd,
    id: "flying",
    baseColor: baseColor,
    innerColor: innerColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }));
}
function EyeOnMount(props) {
  return __jsx(EyePlaceholder, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    controller: __jsx(OnMount, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 40
      }
    })
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 12
    }
  }));
}

function OnMount(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    props.becomeActive();
    return function () {
      props.resetActive();
    };
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 12
    }
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/eye.module.sass":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style/eye.module.sass ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".eye_flyingEye__3KiV7 {\n  position: absolute;\n  z-index: 100;\n  transition: 1000ms cubic-bezier(0.68, -0.6, 0.32, 1.6);\n  transition-property: height, width, top, left;\n}\n.eye_flyingEye__3KiV7 * {\n  transition: 1000ms;\n  transition-property: stroke, stop-color;\n}\n\n.eye_flyingEyeNoAnim__3VQxz {\n  position: absolute;\n  z-index: 100;\n}\n\n.eye_eyeWrapper__1RNu4 {\n  display: block;\n  position: relative;\n}\n\n.eye_eye__34j_G {\n  position: absolute;\n  transition: transform 20s ease-in;\n  transform: scale(1);\n  z-index: 2;\n}\n.eye_eye__34j_G svg {\n  transition: -webkit-filter 20s ease-in;\n  transition: filter 20s ease-in;\n  transition: filter 20s ease-in, -webkit-filter 20s ease-in;\n  -webkit-filter: contrast(1);\n          filter: contrast(1);\n}\n\n.eye_eye__34j_G:hover {\n  transform: scale(100);\n}\n.eye_eye__34j_G:hover svg {\n  -webkit-animation: eye_triggered___-AcB 0.2s steps(2) infinite;\n          animation: eye_triggered___-AcB 0.2s steps(2) infinite;\n  -webkit-filter: contrast(100);\n          filter: contrast(100);\n}\n\n.eye_triggered___-AcB {\n  -webkit-animation: eye_triggered___-AcB 0.2s steps(2) infinite;\n          animation: eye_triggered___-AcB 0.2s steps(2) infinite;\n}\n\n@-webkit-keyframes eye_triggered___-AcB {\n  0% {\n    transform: translate(2px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-2deg);\n  }\n  20% {\n    transform: translate(-3px, 0) rotate(3deg);\n  }\n  30% {\n    transform: translate(0, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(2px, 1px) rotate(-2deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(4deg);\n  }\n  90% {\n    transform: translate(2px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n\n@keyframes eye_triggered___-AcB {\n  0% {\n    transform: translate(2px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-2deg);\n  }\n  20% {\n    transform: translate(-3px, 0) rotate(3deg);\n  }\n  30% {\n    transform: translate(0, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(2px, 1px) rotate(-2deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(4deg);\n  }\n  90% {\n    transform: translate(2px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}", "",{"version":3,"sources":["eye.module.sass"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,YAAA;EACA,sDAAA;EACA,6CAAA;AACJ;AACI;EACI,kBAAA;EACA,uCAAA;AACR;;AACA;EACI,kBAAA;EACA,YAAA;AAEJ;;AAAA;EACI,cAAA;EACA,kBAAA;AAGJ;;AAAA;EACI,kBAAA;EACA,iCAAA;EACA,mBAAA;EACA,UAAA;AAGJ;AADI;EACI,sCAAA;EAAA,8BAAA;EAAA,0DAAA;EACA,2BAAA;UAAA,mBAAA;AAGR;;AADA;EACI,qBAAA;AAIJ;AAFI;EACI,8DAAA;UAAA,sDAAA;EACA,6BAAA;UAAA,qBAAA;AAIR;;AAFA;EACI,8DAAA;UAAA,sDAAA;AAKJ;;AAHA;EACI;IACI,2CAAA;EAMN;EAJE;IACI,8CAAA;EAMN;EAJE;IACI,0CAAA;EAMN;EAJE;IACI,yCAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;EAJE;IACI,2CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;AACF;;AAvCA;EACI;IACI,2CAAA;EAMN;EAJE;IACI,8CAAA;EAMN;EAJE;IACI,0CAAA;EAMN;EAJE;IACI,yCAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;EAJE;IACI,2CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;AACF","file":"eye.module.sass","sourcesContent":[".flyingEye\r\n    position: absolute\r\n    z-index: 100\r\n    transition: 1000ms cubic-bezier(0.68, -0.6, 0.32, 1.6)\r\n    transition-property: height, width, top, left\r\n\r\n    & *\r\n        transition: 1000ms\r\n        transition-property: stroke, stop-color\r\n\r\n.flyingEyeNoAnim\r\n    position: absolute\r\n    z-index: 100\r\n\r\n.eyeWrapper \r\n    display: block\r\n    position: relative\r\n    \r\n\r\n.eye\r\n    position: absolute\r\n    transition: transform 20s ease-in\r\n    transform: scale(1)\r\n    z-index: 2\r\n\r\n    svg\r\n        transition: filter 20s ease-in\r\n        filter: contrast(1)\r\n\r\n.eye:hover\r\n    transform: scale(100)\r\n\r\n    svg\r\n        animation: triggered .2s steps(2) infinite\r\n        filter: contrast(100)\r\n\r\n.triggered\r\n    animation: triggered .2s steps(2) infinite\r\n\r\n@keyframes triggered     \r\n    0% \r\n        transform: translate(2px,1px) rotate(0deg)\r\n    \r\n    10% \r\n        transform: translate(-1px,-2px) rotate(-2deg)\r\n    \r\n    20% \r\n        transform: translate(-3px,0) rotate(3deg)\r\n    \r\n    30% \r\n        transform: translate(0,2px) rotate(0deg)\r\n    \r\n    40% \r\n        transform: translate(1px,-1px) rotate(1deg)\r\n    \r\n    50% \r\n        transform: translate(-1px,2px) rotate(-1deg)\r\n    \r\n    60% \r\n        transform: translate(-3px,1px) rotate(0deg)\r\n    \r\n    70% \r\n        transform: translate(2px,1px) rotate(-2deg)\r\n\r\n    80% \r\n        transform: translate(-1px,-1px) rotate(4deg)\r\n    \r\n    90% \r\n        transform: translate(2px,2px) rotate(0deg)\r\n    \r\n    100% \r\n        transform: translate(1px,-2px) rotate(-1deg)"]}]);
// Exports
exports.locals = {
	"flyingEye": "eye_flyingEye__3KiV7",
	"flyingEyeNoAnim": "eye_flyingEyeNoAnim__3VQxz",
	"eyeWrapper": "eye_eyeWrapper__1RNu4",
	"eye": "eye_eye__34j_G",
	"triggered": "eye_triggered___-AcB"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/header.module.sass":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style/header.module.sass ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".header_header__2DoTL {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  width: calc(100% - 2rem);\n  height: 50px;\n  background-color: var(--header-solid, #262626);\n  color: #ffffff;\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.header_headerTray__eIMO9 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-grow: 2;\n  justify-content: flex-end;\n  padding-left: 0;\n}\n\n.header_headerStart__1ifaZ {\n  justify-self: flex-start;\n  display: flex;\n}\n\n.header_title__Z_484 {\n  position: relative;\n  bottom: 2px;\n  margin-left: 0.5em;\n  font-size: 1.75em;\n  font-weight: bolder;\n  align-self: center;\n  line-height: 1.3em;\n  background-image: linear-gradient(135deg, #ff00fe, #00f3ff);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: #00000000;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.header_title__Z_484::-moz-selection {\n  background-color: rgba(0, 255, 255, 0);\n}\n.header_title__Z_484::selection {\n  background-color: rgba(0, 255, 255, 0);\n}\n\n.header_headerItem__2yi4o {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header_headerButton__1wdFQ {\n  border-radius: 50%;\n  background-color: #535353;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 5px;\n  transition: all 200ms ease-in-out;\n}\n.header_headerButton__1wdFQ svg {\n  width: 40% !important;\n  height: auto;\n  color: white;\n}\n\n.header_headerDrawerWrap__1WN0J {\n  position: fixed;\n  width: 100%;\n  top: 50px;\n  left: 0px;\n  z-index: 2;\n}\n\n.header_headerDrawer__1bBTf {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  background-color: #353535;\n  border-bottom: 3px solid #181a1b;\n  box-shadow: 0px 10px 31px 0px rgba(0, 0, 0, 0.75);\n}\n\n.header_headerButton__1wdFQ:hover {\n  -webkit-filter: brightness(120%);\n          filter: brightness(120%);\n}", "",{"version":3,"sources":["header.module.sass"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,wBAAA;EACA,YAAA;EAEA,8CAAA;EACA,cAAA;EAEA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,mBAAA;AAFJ;;AAIA;EAEI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;AAFJ;;AAIA;EACI,wBAAA;EACA,aAAA;AADJ;;AAGA;EACI,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,2DAAA;EACA,6BAAA;UAAA,qBAAA;EACA,oCAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AAAJ;AAEI;EACI,sCAAA;AAAR;AADI;EACI,sCAAA;AAAR;;AAEA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AACJ;;AACA;EACI,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,iCAAA;AACJ;AACI;EACI,qBAAA;EACA,YAAA;EACA,YAAA;AACR;;AAEA;EACI,eAAA;EACA,WAAA;EACA,SAAA;EACA,SAAA;EACA,UAAA;AACJ;;AAEA;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,gCAAA;EACA,iDAAA;AACJ;;AAEA;EACI,gCAAA;UAAA,wBAAA;AACJ","file":"header.module.sass","sourcesContent":[".header\r\n    position: fixed\r\n    top: 0\r\n    left: 0\r\n    z-index: 3\r\n    width: calc(100% - 2rem)\r\n    height: 50px\r\n\r\n    background-color: var(--header-solid, #262626) //var(--header-solid, #535353)\r\n    color: #ffffff\r\n    \r\n    padding: 0 1rem\r\n\r\n    display: flex\r\n    flex-direction: row\r\n    align-items: center\r\n\r\n.headerTray\r\n    //width: 100%\r\n    display: flex\r\n    flex-direction: row\r\n    align-items: center\r\n    flex-grow: 2\r\n    justify-content: flex-end\r\n    padding-left: 0\r\n\r\n.headerStart\r\n    justify-self: flex-start\r\n    display: flex\r\n\r\n.title\r\n    position: relative\r\n    bottom: 2px\r\n    margin-left: .5em\r\n    font-size: 1.75em\r\n    font-weight: bolder\r\n    align-self: center\r\n    line-height: 1.3em\r\n    background-image: linear-gradient(135deg,#ff00fe, #00f3ff)\r\n    background-clip: text\r\n    -webkit-text-fill-color: transparent\r\n    color: #00000000\r\n    user-select: none\r\n\r\n    &::selection \r\n        background-color: rgba(0, 255, 255, 0)\r\n\r\n.headerItem\r\n    position: relative\r\n    display: flex\r\n    align-items: center\r\n    justify-content: center\r\n\r\n.headerButton\r\n    border-radius: 50%\r\n    background-color: #535353\r\n    width: 40px\r\n    height: 40px\r\n\r\n    display: flex\r\n    align-items: center\r\n    justify-content: center\r\n    margin: 0 5px\r\n    transition: all 200ms ease-in-out\r\n\r\n    svg\r\n        width: 40% !important\r\n        height: auto\r\n        color: white\r\n\r\n\r\n.headerDrawerWrap\r\n    position: fixed\r\n    width: 100%\r\n    top: 50px\r\n    left: 0px\r\n    z-index: 2\r\n\r\n\r\n.headerDrawer\r\n    width: 100%\r\n    max-width: 100%\r\n    overflow: hidden\r\n    background-color: #353535\r\n    border-bottom: 3px solid #181a1b\r\n    box-shadow: 0px 10px 31px 0px rgba(0,0,0,0.75)\r\n\r\n\r\n.headerButton:hover\r\n    filter: brightness(120%)\r\n\r\n\r\n@media screen and (max-width: 600px) \r\n    "]}]);
// Exports
exports.locals = {
	"header": "header_header__2DoTL",
	"headerTray": "header_headerTray__eIMO9",
	"headerStart": "header_headerStart__1ifaZ",
	"title": "header_title__Z_484",
	"headerItem": "header_headerItem__2yi4o",
	"headerButton": "header_headerButton__1wdFQ",
	"headerDrawerWrap": "header_headerDrawerWrap__1WN0J",
	"headerDrawer": "header_headerDrawer__1bBTf"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/post.module.sass":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style/post.module.sass ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".post_card__2hKeS, .post_postForm__2hpth, .post_animCard__2Fp_O, .post_post__3HKSh {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  background: #353535;\n  color: #fff;\n  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  transition: all 250ms ease-in-out;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.post_animCard__2Fp_O, .post_post__3HKSh {\n  -webkit-animation: post_cardEntrance__3NjVZ 700ms ease-out;\n          animation: post_cardEntrance__3NjVZ 700ms ease-out;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n  will-change: transform;\n}\n\n.post_animCard__2Fp_O[data-expanded=false]:hover, [data-expanded=false].post_post__3HKSh:hover {\n  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;\n  transform: translateY(-3px) scale(1.01);\n  /*border-radius: 30px*/\n  /*filter: brightness(105%)*/\n}\n\n.post_animCard__2Fp_O[data-expanded=true], [data-expanded=true].post_post__3HKSh {\n  background: #333333;\n  transform: translateY(-3px);\n  transition: none;\n}\n\n.post_entering__23CCS {\n  -webkit-animation: post_cardboardEntrance__XT7Sn 300ms ease-out;\n          animation: post_cardboardEntrance__XT7Sn 300ms ease-out;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n\n@media screen and (max-width: 600px) {\n  .post_animCard__2Fp_O[data-expanded=false]:hover, [data-expanded=false].post_post__3HKSh:hover {\n    transform: translateY(-3px) scale(1.01);\n  }\n}\n@-webkit-keyframes post_cardboardEntrance__XT7Sn {\n  from {\n    opacity: 0;\n    transform: scaleY(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@keyframes post_cardboardEntrance__XT7Sn {\n  from {\n    opacity: 0;\n    transform: scaleY(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@-webkit-keyframes post_cardEntrance__3NjVZ {\n  from {\n    opacity: 0;\n    transform: scale(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@keyframes post_cardEntrance__3NjVZ {\n  from {\n    opacity: 0;\n    transform: scale(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n.post_body__2sPi7 {\n  transition: max-height var(--expandtime, 500ms);\n  overflow: hidden;\n}\n.post_body__2sPi7 > p {\n  margin: 0rem;\n}\n.post_body__2sPi7 p {\n  margin-top: 0;\n}\n\n.post_postT__4aoKO .post_content__1G1Ie, .post_postForm__2hpth .post_content__1G1Ie, .post_post__3HKSh .post_content__1G1Ie {\n  flex: 1 1;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_title__4CteQ, .post_postForm__2hpth .post_content__1G1Ie .post_title__4CteQ, .post_post__3HKSh .post_content__1G1Ie .post_title__4CteQ {\n  font-size: 1.5em;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_body__2sPi7, .post_postForm__2hpth .post_content__1G1Ie .post_body__2sPi7, .post_post__3HKSh .post_content__1G1Ie .post_body__2sPi7 {\n  font-size: 1em;\n  position: relative;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_body__2sPi7 p, .post_postForm__2hpth .post_content__1G1Ie .post_body__2sPi7 p, .post_post__3HKSh .post_content__1G1Ie .post_body__2sPi7 p {\n  margin-bottom: 10px;\n}\n.post_postT__4aoKO .post_content__1G1Ie p, .post_postForm__2hpth .post_content__1G1Ie p, .post_post__3HKSh .post_content__1G1Ie p {\n  margin: 0;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_author__3gKZp, .post_postForm__2hpth .post_content__1G1Ie .post_author__3gKZp, .post_post__3HKSh .post_content__1G1Ie .post_author__3gKZp {\n  color: #888;\n  display: block;\n  margin-top: 0rem;\n  margin-bottom: 0.75rem;\n  font-size: 0.48em;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_comments__ZzTEU, .post_postForm__2hpth .post_content__1G1Ie .post_comments__ZzTEU, .post_post__3HKSh .post_content__1G1Ie .post_comments__ZzTEU {\n  float: right;\n  padding: 10px;\n  margin-right: 5px;\n  color: #888;\n  font-size: 1rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_comments__ZzTEU svg, .post_postForm__2hpth .post_content__1G1Ie .post_comments__ZzTEU svg, .post_post__3HKSh .post_content__1G1Ie .post_comments__ZzTEU svg {\n  margin-left: 5px;\n  width: 25px;\n  height: 25px;\n}\n\n.post_postWrapper__1jJJG {\n  margin-bottom: 1em;\n}\n\n.post_postList__3iez6 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 0% 10%;\n}\n\n.post_comment__did10 {\n  position: relative;\n  margin-top: 0.5rem;\n  flex: 1 1;\n  max-width: 100%;\n}\n.post_comment__did10 .post_content__1G1Ie {\n  margin-bottom: 1rem;\n}\n.post_comment__did10 .post_content__1G1Ie .post_title__4CteQ {\n  font-size: 1.5em;\n}\n.post_comment__did10 .post_content__1G1Ie .post_body__2sPi7 {\n  font-size: 1em;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.post_comment__did10 .post_content__1G1Ie p {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  margin: 0rem;\n}\n.post_comment__did10 .post_content__1G1Ie .post_author__3gKZp {\n  color: #888;\n  display: block;\n  margin-top: 0rem;\n  margin-bottom: 0.25rem;\n  font-size: 0.75em;\n}\n.post_comment__did10 .post_content__1G1Ie .post_author__3gKZp .post_timestamp__1o7Bq {\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.post_commentWrap__Cef8r {\n  display: flex;\n  max-width: 100%;\n}\n.post_commentWrap__Cef8r .post_indents__79RwN {\n  display: block;\n  white-space: nowrap;\n}\n\n.post_threadindent__1Cfcl {\n  display: inline-block;\n  width: 5px;\n  height: 110%;\n  flex: 1 1;\n  position: relative;\n  top: 5%;\n  margin: 0px 0.5555em;\n  border-radius: 5px;\n  background-color: #353535;\n}\n\n.post_indentVote__N7vcj {\n  height: 106%;\n  position: relative;\n  top: 5%;\n  float: left;\n  display: flex;\n  flex-direction: column;\n}\n.post_indentVote__N7vcj .post_threadindent__1Cfcl {\n  flex: 1 1;\n}\n\n.post_vote__2IS4Y, .post_voteSmall__12ULw {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  font-size: 1rem;\n  color: #888;\n  margin: 1.111111em;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n.post_vote__2IS4Y svg, .post_voteSmall__12ULw svg {\n  width: 25px;\n  height: auto;\n  transition: all 250ms ease-in-out;\n}\n.post_vote__2IS4Y svg::-moz-selection, .post_voteSmall__12ULw svg::-moz-selection {\n  background-color: rgba(0, 255, 255, 0);\n}\n.post_vote__2IS4Y svg::selection, .post_voteSmall__12ULw svg::selection {\n  background-color: rgba(0, 255, 255, 0);\n}\n.post_vote__2IS4Y .post_upvote__gzCG1, .post_voteSmall__12ULw .post_upvote__gzCG1 {\n  color: #848484;\n}\n.post_vote__2IS4Y .post_upvote__gzCG1:hover, .post_voteSmall__12ULw .post_upvote__gzCG1:hover {\n  transform: translateY(-0.5rem);\n}\n.post_vote__2IS4Y .post_upvote__gzCG1[data-active=true], .post_voteSmall__12ULw .post_upvote__gzCG1[data-active=true], .post_vote__2IS4Y .post_upvote__gzCG1:hover, .post_voteSmall__12ULw .post_upvote__gzCG1:hover {\n  color: #ff004f;\n}\n.post_vote__2IS4Y .post_downvote__1deOJ, .post_voteSmall__12ULw .post_downvote__1deOJ {\n  color: #848484;\n  transform: rotate(180deg);\n}\n.post_vote__2IS4Y .post_downvote__1deOJ:hover, .post_voteSmall__12ULw .post_downvote__1deOJ:hover {\n  transform: rotate(180deg) translateY(-0.5rem);\n}\n.post_vote__2IS4Y .post_downvote__1deOJ[data-active=true], .post_voteSmall__12ULw .post_downvote__1deOJ[data-active=true], .post_vote__2IS4Y .post_downvote__1deOJ:hover, .post_voteSmall__12ULw .post_downvote__1deOJ:hover {\n  color: #1f98e5;\n}\n\n.post_voteSmall__12ULw {\n  margin: 0.2777em;\n  margin-right: 15px;\n  align-self: stretch;\n}\n.post_voteSmall__12ULw div {\n  max-width: 1rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-align: center;\n}\n.post_voteSmall__12ULw span {\n  display: inline;\n  text-align: center;\n  position: relative;\n}\n.post_voteSmall__12ULw svg {\n  width: 15px;\n  height: auto;\n  flex-shrink: 0;\n}\n.post_voteSmall__12ULw .post_upvote__gzCG1:hover {\n  transform: translateY(-0.25rem);\n}\n.post_voteSmall__12ULw .post_downvote__1deOJ:hover {\n  transform: rotate(180deg) translateY(-0.25rem);\n}\n.post_voteSmall__12ULw .post_threadindent__1Cfcl {\n  display: inline-block;\n  float: none;\n  flex: 1 1;\n}\n\n.post_timestamp__1o7Bq {\n  color: #888;\n  margin-top: 0rem;\n  font-size: 0.75em;\n}\n\n.post_expandDialog__32EtC {\n  position: absolute;\n  width: 95%;\n  bottom: 1em;\n  border-radius: 1em;\n  padding: 0.5em;\n  background-color: rgba(24, 26, 28, 0.91);\n  color: white;\n  text-align: center;\n}\n\n@media screen and (max-width: 600px) {\n  .post_postList__3iez6 {\n    padding: 0% 1.5%;\n    font-size: 14px;\n  }\n\n  .post_vote__2IS4Y, .post_voteSmall__12ULw {\n    margin: 0.75em;\n  }\n}", "",{"version":3,"sources":["style.module.sass","post.module.sass"],"names":[],"mappings":"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","file":"post.module.sass","sourcesContent":[".card \r\n    display: flex\r\n    flex-direction: row\r\n    justify-content: center\r\n    align-items: flex-start\r\n    background: #353535\r\n    color: #fff\r\n    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem\r\n    height: 100%\r\n    width: 100%\r\n    border-radius: 4px\r\n    transition: all 250ms ease-in-out\r\n    overflow: hidden\r\n\r\n    background-size: cover\r\n    background-position: center\r\n    background-repeat: no-repeat\r\n\r\n.animCard\r\n    @extend .card\r\n    animation: cardEntrance 700ms ease-out\r\n    animation-fill-mode: backwards\r\n    will-change: transform\r\n\r\n.animCard[data-expanded=false]:hover \r\n    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em\r\n    transform: translateY(-3px) scale(1.01)\r\n    /*border-radius: 30px*/\r\n    /*filter: brightness(105%)*/\r\n\r\n.animCard[data-expanded=true]\r\n    background: #333333\r\n    transform: translateY(-3px)\r\n    transition: none\r\n\r\n.entering\r\n    animation: cardboardEntrance 300ms ease-out\r\n    animation-fill-mode: backwards    \r\n\r\n@media screen and (max-width: 600px) \r\n    .animCard[data-expanded=false]:hover \r\n        transform: translateY(-3px) scale(1.01)\r\n \r\n@keyframes cardboardEntrance \r\n    from \r\n        opacity: 0\r\n        transform: scaleY(0.3)\r\n        filter: hue-rotate(180deg)\r\n  \r\n    to \r\n        opacity: 1\r\n        transform: scaleY(1)\r\n        filter: hue-rotate(0deg)\r\n\r\n@keyframes cardEntrance \r\n    from \r\n        opacity: 0\r\n        transform: scale(0.3)\r\n        filter: hue-rotate(180deg)\r\n  \r\n    to \r\n        opacity: 1\r\n        transform: scale(1)\r\n        filter: hue-rotate(0deg)",".card, .postForm, .animCard, .post {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  background: #353535;\n  color: #fff;\n  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  transition: all 250ms ease-in-out;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.animCard, .post {\n  animation: cardEntrance 700ms ease-out;\n  animation-fill-mode: backwards;\n  will-change: transform;\n}\n\n.animCard[data-expanded=false]:hover, [data-expanded=false].post:hover {\n  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;\n  transform: translateY(-3px) scale(1.01);\n  /*border-radius: 30px*/\n  /*filter: brightness(105%)*/\n}\n\n.animCard[data-expanded=true], [data-expanded=true].post {\n  background: #333333;\n  transform: translateY(-3px);\n  transition: none;\n}\n\n.entering {\n  animation: cardboardEntrance 300ms ease-out;\n  animation-fill-mode: backwards;\n}\n\n@media screen and (max-width: 600px) {\n  .animCard[data-expanded=false]:hover, [data-expanded=false].post:hover {\n    transform: translateY(-3px) scale(1.01);\n  }\n}\n@keyframes cardboardEntrance {\n  from {\n    opacity: 0;\n    transform: scaleY(0.3);\n    filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n    filter: hue-rotate(0deg);\n  }\n}\n@keyframes cardEntrance {\n  from {\n    opacity: 0;\n    transform: scale(0.3);\n    filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n    filter: hue-rotate(0deg);\n  }\n}\n.body {\n  transition: max-height var(--expandtime, 500ms);\n  overflow: hidden;\n}\n.body > p {\n  margin: 0rem;\n}\n.body p {\n  margin-top: 0;\n}\n\n.postT .content, .postForm .content, .post .content {\n  flex: 1;\n}\n.postT .content .title, .postForm .content .title, .post .content .title {\n  font-size: 1.5em;\n}\n.postT .content .body, .postForm .content .body, .post .content .body {\n  font-size: 1em;\n  position: relative;\n}\n.postT .content .body p, .postForm .content .body p, .post .content .body p {\n  margin-bottom: 10px;\n}\n.postT .content p, .postForm .content p, .post .content p {\n  margin: 0;\n}\n.postT .content .author, .postForm .content .author, .post .content .author {\n  color: #888;\n  display: block;\n  margin-top: 0rem;\n  margin-bottom: 0.75rem;\n  font-size: 0.48em;\n}\n.postT .content .comments, .postForm .content .comments, .post .content .comments {\n  float: right;\n  padding: 10px;\n  margin-right: 5px;\n  color: #888;\n  font-size: 1rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.postT .content .comments svg, .postForm .content .comments svg, .post .content .comments svg {\n  margin-left: 5px;\n  width: 25px;\n  height: 25px;\n}\n\n.postWrapper {\n  margin-bottom: 1em;\n}\n\n.postList {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 0% 10%;\n}\n\n.comment {\n  position: relative;\n  margin-top: 0.5rem;\n  flex: 1;\n  max-width: 100%;\n}\n.comment .content {\n  margin-bottom: 1rem;\n}\n.comment .content .title {\n  font-size: 1.5em;\n}\n.comment .content .body {\n  font-size: 1em;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.comment .content p {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  margin: 0rem;\n}\n.comment .content .author {\n  color: #888;\n  display: block;\n  margin-top: 0rem;\n  margin-bottom: 0.25rem;\n  font-size: 0.75em;\n}\n.comment .content .author .timestamp {\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.commentWrap {\n  display: flex;\n  max-width: 100%;\n}\n.commentWrap .indents {\n  display: block;\n  white-space: nowrap;\n}\n\n.threadindent {\n  display: inline-block;\n  width: 5px;\n  height: 110%;\n  flex: 1;\n  position: relative;\n  top: 5%;\n  margin: 0px 0.5555em;\n  border-radius: 5px;\n  background-color: #353535;\n}\n\n.indentVote {\n  height: 106%;\n  position: relative;\n  top: 5%;\n  float: left;\n  display: flex;\n  flex-direction: column;\n}\n.indentVote .threadindent {\n  flex: 1;\n}\n\n.vote, .voteSmall {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  font-size: 1rem;\n  color: #888;\n  margin: 1.111111em;\n  height: max-content;\n}\n.vote svg, .voteSmall svg {\n  width: 25px;\n  height: auto;\n  transition: all 250ms ease-in-out;\n}\n.vote svg::selection, .voteSmall svg::selection {\n  background-color: rgba(0, 255, 255, 0);\n}\n.vote .upvote, .voteSmall .upvote {\n  color: #848484;\n}\n.vote .upvote:hover, .voteSmall .upvote:hover {\n  transform: translateY(-0.5rem);\n}\n.vote .upvote[data-active=true], .voteSmall .upvote[data-active=true], .vote .upvote:hover, .voteSmall .upvote:hover {\n  color: #ff004f;\n}\n.vote .downvote, .voteSmall .downvote {\n  color: #848484;\n  transform: rotate(180deg);\n}\n.vote .downvote:hover, .voteSmall .downvote:hover {\n  transform: rotate(180deg) translateY(-0.5rem);\n}\n.vote .downvote[data-active=true], .voteSmall .downvote[data-active=true], .vote .downvote:hover, .voteSmall .downvote:hover {\n  color: #1f98e5;\n}\n\n.voteSmall {\n  margin: 0.2777em;\n  margin-right: 15px;\n  align-self: stretch;\n}\n.voteSmall div {\n  max-width: 1rem;\n  height: fit-content;\n  text-align: center;\n}\n.voteSmall span {\n  display: inline;\n  text-align: center;\n  position: relative;\n}\n.voteSmall svg {\n  width: 15px;\n  height: auto;\n  flex-shrink: 0;\n}\n.voteSmall .upvote:hover {\n  transform: translateY(-0.25rem);\n}\n.voteSmall .downvote:hover {\n  transform: rotate(180deg) translateY(-0.25rem);\n}\n.voteSmall .threadindent {\n  display: inline-block;\n  float: none;\n  flex: 1;\n}\n\n.timestamp {\n  color: #888;\n  margin-top: 0rem;\n  font-size: 0.75em;\n}\n\n.expandDialog {\n  position: absolute;\n  width: 95%;\n  bottom: 1em;\n  border-radius: 1em;\n  padding: 0.5em;\n  background-color: rgba(24, 26, 28, 0.91);\n  color: white;\n  text-align: center;\n}\n\n@media screen and (max-width: 600px) {\n  .postList {\n    padding: 0% 1.5%;\n    font-size: 14px;\n  }\n\n  .vote, .voteSmall {\n    margin: 0.75em;\n  }\n}"]}]);
// Exports
exports.locals = {
	"card": "post_card__2hKeS",
	"postForm": "post_postForm__2hpth",
	"animCard": "post_animCard__2Fp_O",
	"post": "post_post__3HKSh",
	"cardEntrance": "post_cardEntrance__3NjVZ",
	"entering": "post_entering__23CCS",
	"cardboardEntrance": "post_cardboardEntrance__XT7Sn",
	"body": "post_body__2sPi7",
	"postT": "post_postT__4aoKO",
	"content": "post_content__1G1Ie",
	"title": "post_title__4CteQ",
	"author": "post_author__3gKZp",
	"comments": "post_comments__ZzTEU",
	"postWrapper": "post_postWrapper__1jJJG",
	"postList": "post_postList__3iez6",
	"comment": "post_comment__did10",
	"timestamp": "post_timestamp__1o7Bq",
	"commentWrap": "post_commentWrap__Cef8r",
	"indents": "post_indents__79RwN",
	"threadindent": "post_threadindent__1Cfcl",
	"indentVote": "post_indentVote__N7vcj",
	"vote": "post_vote__2IS4Y",
	"voteSmall": "post_voteSmall__12ULw",
	"upvote": "post_upvote__gzCG1",
	"downvote": "post_downvote__1deOJ",
	"expandDialog": "post_expandDialog__32EtC"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=index.js.187a26dd5888cbf52c8f.hot-update.js.map