webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PushSubToggle.js":
/*!*************************************!*\
  !*** ./components/PushSubToggle.js ***!
  \*************************************/
/*! exports provided: PushSubToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSubToggle", function() { return PushSubToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\PushSubToggle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PushSubToggle() {
  var identity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentity"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      subs = _useState[0],
      setSubs = _useState[1];

  useEffect(function () {
    setSubs(JSON.parse(localStorage.getItem("notifications")));
  });
  return __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaBell"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 37
      }
    }),
    text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Notifications: ", __jsx("span", {
      style: {
        color: "red"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 71
      }
    }, "OFF")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.eb4bd526b551fdfc23f4.hot-update.js.map