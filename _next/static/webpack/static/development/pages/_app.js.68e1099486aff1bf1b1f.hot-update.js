webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/uniqueId */ "./helpers/uniqueId.js");
/* harmony import */ var _style_global_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/global.sass */ "./style/global.sass");
/* harmony import */ var _style_global_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_global_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("hidden"),
      overflow = _useState[0],
      setOverflow = _useState[1];

  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  if (typeof document === "undefined") {
    Object(_helpers_uniqueId__WEBPACK_IMPORTED_MODULE_3__["resetIdCounter"])();
  }

  var ie = false;

  if (true) {
    ie = msieversion() !== 0;
  }

  if (!ie) {}

  return !ie ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, router.pathname.split("/")[1] === "embed" && __jsx("style", {
    jsx: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 59
    }
  }, "\n                body{ background-color: transparent !important;}\n            ")), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }))) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: __webpack_require__(/*! ../res/img/Inspector.png */ "./res/img/Inspector.png"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("p", {
    style: {
      fontSize: "1.5rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "GOOD MORNING INSPECTOR."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "We've been noticing your very unorthodox Choice of Browsers"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "You have choosen to use ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 40
    }
  }, "INTERNET EXPLORER")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "We consider this Choice HIGH TREASON"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "You will be gulaged by tomorrow morning"), __jsx("p", {
    style: {
      color: "red",
      fontSize: "1.25rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 60
    }
  }, "GLORY TO ARSTOTZKA.")));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp); //INTERNET EXPLORER??

function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    } else // If another browser, return 0
    {
      return 0;
    }
}

/***/ })

})
//# sourceMappingURL=_app.js.68e1099486aff1bf1b1f.hot-update.js.map