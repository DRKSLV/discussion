webpackHotUpdate("static\\development\\pages\\dialog.js",{

/***/ "./pages/dialog.js":
/*!*************************!*\
  !*** ./pages/dialog.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _constants_dialog_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/dialog.json */ "./constants/dialog.json");
var _constants_dialog_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/dialog.json */ "./constants/dialog.json", 1);
/* harmony import */ var _style_dialog_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/dialog.module.sass */ "./style/dialog.module.sass");
/* harmony import */ var _style_dialog_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_dialog_module_sass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\pages\\dialog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Home() {
  console.log(_constants_dialog_json__WEBPACK_IMPORTED_MODULE_2__);
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    title: "Dialog test",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(Dialog, {
    dialog: _constants_dialog_json__WEBPACK_IMPORTED_MODULE_2__,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 8
    }
  }));
}

function Dialog(props) {
  var d = props.dialog;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      option = _useState[0],
      setOption = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      line = _useState2[0],
      setLine = _useState2[1];

  var lineRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  function keyDwn(evt) {
    if (lineRef.current.keyDwn() !== true) return;
    setLine(function (prev) {
      if (option === -1) return prev;
      return prev + 1;
    });
  }

  function setOpt(i) {
    setOption(i);
    setLine(0);
  }

  return __jsx("div", {
    className: _style_dialog_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.dialogBox,
    onKeyDown: keyDwn,
    tabIndex: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, option === -1 ? __jsx(DisplayOptions, {
    dia: d,
    setOpt: setOpt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 26
    }
  }) : "", option !== -1 ? __jsx(Line, {
    line: d.options[option].answer,
    idx: line,
    setOpt: setOpt,
    ref: lineRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 26
    }
  }) : "");
}

var Line = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function eLine(_ref, ref) {
  var _ref$line = _ref.line,
      line = _ref$line === void 0 ? "..." : _ref$line,
      idx = _ref.idx,
      setTopOpt = _ref.setOpt;
  var current = null;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      option = _useState3[0],
      setOption = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      innerLine = _useState4[0],
      setLine = _useState4[1];

  var lineRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (Array.isArray(line)) {
    if (line.length < 1) line = ["..."];
    current = line[Math.min(idx, line.length - 1)];
  } else {
    current = line;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {
      keyDwn: function keyDwn() {
        console.log("e");

        if (current.options) {
          if (!current.stayInOptions && option !== -1) var answers = current.options[option].answer;
          console.log(Array.isArray(answers) ? answers.length - 1 : 0);
          if (innerLine >= (Array.isArray(answers) ? answers.length - 1 : 0)) return true;
          console.log(current);
          setLine(function (prev) {
            if (option === -1) return prev;
            return prev + 1;
          });
          return false;
        }

        return true;
      }
    };
  }, [current, option, line, innerLine]);

  function setOpt(i) {
    setOption(i);
    setLine(0);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (Array.isArray(line) && idx >= line.length || !Array.isArray(line) && idx > 0) {
      if (setTopOpt) setTopOpt(-1);
    }
  }, [idx, line]);
  var currentString = typeof current !== "object" ? current || "..." : option === -1 ? current.text : "";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentString, current.options && option === -1 && __jsx(DisplayOptions, {
    dia: current,
    setOpt: setOpt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 27
    }
  }) || option !== -1 && __jsx(Line, {
    line: current.options[option].answer,
    idx: innerLine,
    setOpt: setOpt,
    ref: lineRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 27
    }
  }));
});

function DisplayOptions(_ref2) {
  var _this = this;

  var dia = _ref2.dia,
      setOpt = _ref2.setOpt;
  var arr = [];

  function clicked(i) {
    if (typeof setOpt === "function") {
      setOpt(i);
    }
  }

  dia.options.forEach(function (opt, i) {
    arr.push(__jsx("li", {
      className: _style_dialog_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.dialogOption,
      onClick: function onClick() {
        return clicked(i);
      },
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }, opt.question));
  });
  if (!dia.options || dia.options.length < 1) arr = [__jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "+ There was nothing to say")];
  return __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 12
    }
  }, arr);
}

/***/ })

})
//# sourceMappingURL=dialog.js.cbbb2b1e8b4373f60615.hot-update.js.map