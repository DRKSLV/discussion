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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");


var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\PushSubToggle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function PushSubToggle() {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_5__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      subs = _useState[0],
      setSubs = _useState[1];

  var activeUser = id.users[id.active];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSubs(JSON.parse(localStorage.getItem("notifications") || "{}"));
  }, []);

  function onClick() {
    //
    if (!"serviceWorker" in navigator) {
      return;
    }

    setSubs(function (prev) {
      var lol = _objectSpread({}, prev);

      lol[id.users[id.active].username] = !prev[id.users[id.active].username];
      localStorage.setItem("notifications", JSON.stringify(lol));
      return lol;
    });
  }

  var on = !!activeUser && !!subs[activeUser.username];
  var statText = on ? "ON" : "OFF";

  if (typeof Notification !== "undefined" && Notification.permission === "denied") {
    on = false;
    statText = "DENIED";
  }

  if (typeof navigator === "undefined" || !"serviceWorker" in navigator) {
    on = false;
    statText = "UNSUPPORTED";
  }

  return __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    onClick: onClick,
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaBell"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 19
      }
    }),
    text: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Notifications: ", __jsx("span", {
      style: {
        color: on ? "lime" : "red"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 32
      }
    }, statText)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.50f9a2e7338f0b3e4491.hot-update.js.map