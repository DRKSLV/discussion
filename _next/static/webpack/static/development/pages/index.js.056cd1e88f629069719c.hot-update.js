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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/index */ "./constants/index.js");



var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\PushSubToggle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function PushSubToggle() {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_6__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      subs = _useState[0],
      setSubs = _useState[1];

  var activeUser = id.users[id.active];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      pending = _useState2[0],
      setPending = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setSubs(JSON.parse(localStorage.getItem("notifications") || "{}"));
  }, []);

  function onClick() {
    var reg, sub, response, body, publicKey;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onClick$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!"serviceWorker" in navigator || !activeUser)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.serviceWorker.ready);

          case 4:
            reg = _context.sent;
            _context.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(reg.pushManager.getSubscription());

          case 7:
            sub = _context.sent;

            if (sub) {
              _context.next = 26;
              break;
            }

            _context.next = 11;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(_constants_index__WEBPACK_IMPORTED_MODULE_7__["apiUrl"] + "/notifier/pushSubscriptionKey"));

          case 11:
            response = _context.sent;
            _context.next = 14;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

          case 14:
            body = _context.sent;
            publicKey = urlBase64ToUint8Array(body["public"]);
            _context.prev = 16;
            _context.next = 19;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: publicKey
            }));

          case 19:
            sub = _context.sent;
            _context.next = 22;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post("/notifier/subscribe", _objectSpread({}, sub.toJSON()), {
              params: {
                usersub: true
              }
            }));

          case 22:
            _context.next = 26;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](16);

          case 26:
            setSubs(function (prev) {
              var lol = _objectSpread({}, prev);

              lol[id.users[id.active].username] = !prev[id.users[id.active].username];
              localStorage.setItem("notifications", JSON.stringify(lol));
              return lol;
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[16, 24]], Promise);
  }

  var on = !!activeUser && !!subs[activeUser.username];
  var statText = on ? "ON" : "OFF";

  if (!activeUser) {
    statText = "PLS LOG IN";
  }

  if (typeof Notification !== "undefined" && Notification.permission === "denied") {
    on = false;
    statText = "DENIED";
  }

  if (typeof navigator === "undefined" || !"serviceWorker" in navigator) {
    on = false;
    statText = "UNSUPPORTED";
  }

  return __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    onClick: onClick,
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBell"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }),
    text: __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "Notifications: ", __jsx("span", {
      style: {
        color: on ? "lime" : "red"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 32
      }
    }, statText)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  });
}

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

/***/ })

})
//# sourceMappingURL=index.js.056cd1e88f629069719c.hot-update.js.map