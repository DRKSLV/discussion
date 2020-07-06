webpackHotUpdate("static\\development\\pages\\modal.js",{

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





var eyeContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();
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
      lineNumber: 12,
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
      lineNumber: 59,
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
      lineNumber: 60,
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
      lineNumber: 89,
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
      lineNumber: 97,
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
      lineNumber: 101,
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
      lineNumber: 136,
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
      lineNumber: 138,
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
        lineNumber: 154,
        columnNumber: 40
      }
    })
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 164,
      columnNumber: 12
    }
  });
}

/***/ })

})
//# sourceMappingURL=modal.js.1ffc11da8dacc2458038.hot-update.js.map