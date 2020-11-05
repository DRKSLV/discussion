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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\PushSubToggle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function PushSubToggle() {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_4__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      subs = _useState[0],
      setSubs = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSubs(JSON.parse(localStorage.getItem("notifications") || "{}"));
  }, []);

  function persist() {
    localStorage.setItem("notifications", JSON.stringify(subs));
  }

  function onClick() {}

  var on = !!subs[id.users[id.active].username];
  return __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    onClick: onClick,
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaBell"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }
    }),
    text: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Notifications: ", __jsx("span", {
      style: {
        color: on ? "green" : "red"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 32
      }
    }, on ? "ON" : "OFF")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.90174fd593331e5eb93c.hot-update.js.map