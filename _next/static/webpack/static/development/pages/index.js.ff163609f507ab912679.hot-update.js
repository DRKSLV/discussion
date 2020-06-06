webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Timestamp.js":
/*!*********************************!*\
  !*** ./components/Timestamp.js ***!
  \*********************************/
/*! exports provided: Timestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return Timestamp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Timestamp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Timestamp(props) {
  var time = Object(moment__WEBPACK_IMPORTED_MODULE_1__["default"])(props.time);
  var editTime = props.edit ? Object(moment__WEBPACK_IMPORTED_MODULE_1__["default"])(props.edit) : null;
  var edited = editTime && !editTime.isSame(time);

  if (props.compact) {
    edited = false;
  }

  if (props.compact) {
    return __jsx("span", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.timestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 16
      }
    }, time.fromNow(), " ", edited ? "(edited)" : "");
  } else if (props.dummy) {
    return __jsx("span", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.timestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }
    }, "not yet created");
  } else {
    return __jsx("span", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.timestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 16
      }
    }, "created ", time.fromNow(), " ", edited && "－ edited " + editTime.fromNow());
  }
}

/***/ })

})
//# sourceMappingURL=index.js.ff163609f507ab912679.hot-update.js.map