webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./hooks/identity.js":
/*!***************************!*\
  !*** ./hooks/identity.js ***!
  \***************************/
/*! exports provided: IdentityProvider, useIdentity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityProvider", function() { return IdentityProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIdentity", function() { return useIdentity; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\hooks\\identity.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Identity = Object(react__WEBPACK_IMPORTED_MODULE_8__["createContext"])([{
  active: null,
  users: []
}, undefined]);
var IdentityProvider = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IdentityProvider, _React$Component);

  var _super = _createSuper(IdentityProvider);

  function IdentityProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IdentityProvider);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "request", function (req) {
      var ide = _this.state.id;

      if (Number.isInteger(ide.active) && ide.users && ide.users[ide.active]) {
        console.log("token supplied");
        req.headers.Authorization = "Bearer ".concat(ide.users[ide.active].accessToken);
      }

      return req;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "response", function (res) {
      if (res.status === 401) {
        var no = res.headers["Www-Authenticate"].split(","); ///...
        ///removeUser(id.users[id.active].idString);
      }

      return res;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "reject", function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "addUser", function (idString, username, accessToken) {
      _this.setState(function (prev) {
        var newO = _objectSpread({}, prev.id);

        var index = newO.users.findIndex(function (val) {
          return val.idString = idString;
        });
        if (index === -1) newO.users = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newO.users), [{
          idString: idString,
          username: username,
          accessToken: accessToken
        }]);
        return {
          id: newO
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "removeUser", function (idString) {
      _this.setState(function (prev) {
        var newO = _objectSpread({}, prev.id);

        var index = newO.users.findIndex(function (val) {
          return val.idString = idString;
        });
        if (index > -1) newO.users = newO.users.slice(index, index + 1);
        return {
          id: newO
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "setActive", function (idx) {
      _this.setState(function (prev) {
        var newO = _objectSpread({}, prev.id);

        if (idx > -1 && idx < prev.id.users.length || idx === null) {
          newO.active = idx;
        }

        return {
          id: newO
        };
      });
    });

    _this.state = {
      id: {
        active: null,
        users: []
      },
      axios: undefined
    };

    _this.beforeMount();

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(IdentityProvider, [{
    key: "persist",
    value: function persist() {
      console.log("persist");
      localStorage.setItem("active", JSON.stringify(this.state.id.active));
      localStorage.setItem("users", JSON.stringify(this.state.id.users));
    }
  }, {
    key: "checkActive",
    value: function checkActive() {
      var _this2 = this;

      if (this.state.id.active !== null) {
        this.state.axios.get("/protected").then(function (val) {
          console.log("✔ Account ok: ", val);
        }, function (reason) {
          console.log("❌ Account bad: ", reason);

          if (reason.response && reason.response.headers["www-authenticate"]) {
            var auth = reason.response.headers["www-authenticate"];
            console.log(auth);
            var tokens = auth.split(",").map(function (x) {
              return x.trim();
            }); //decide what to do

            if (tokens[1] && tokens[1].startsWith('error="')) {
              var error = tokens[1].substring(7, tokens[1].length - 2);
              console.log(error);
            }
          } else {
            _this2.setState(function (prev) {
              return {
                id: _objectSpread({}, prev.id, {
                  active: null
                })
              };
            });
          }
        });
      }
    }
  }, {
    key: "beforeMount",
    value: function beforeMount() {
      if (false) {}

      console.log("before"); //get initial data

      var active, users;

      try {
        active = JSON.parse(localStorage.getItem("active") || "null");
      } catch (error) {
        active = this.state.id.active;
      }

      try {
        users = JSON.parse(localStorage.getItem("users") || "[]");
      } catch (error) {
        users = this.state.id.users;
      }

      var instance = axios__WEBPACK_IMPORTED_MODULE_9___default.a.create({
        baseURL: "https://drkslv.herokuapp.com"
      });
      instance.interceptors.request.use(this.request, this.reject);
      instance.interceptors.response.use(this.response, this.reject); //pass context down

      this.state.id = {
        active: active,
        users: users,
        addUser: this.addUser,
        removeUser: this.removeUser,
        setActive: this.setActive
      };
      this.state.axios = instance;
      this.checkActive(); //this.setState(prev=> {return {id: {active, users, addUser: this.addUser, removeUser: this.removeUser, setActive: this.setActive}, axios: instance}});
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        this.persist();
      }

      return __jsx(Identity.Provider, {
        value: [this.state.id, this.state.axios],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 16
        }
      }, this.props.children);
    }
  }]);

  return IdentityProvider;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
var useIdentity = function useIdentity() {
  return Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(Identity);
}; // [{"username": "test-_-", "idString": "gamer", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MGMzYjRlMC04YjI5LTExZWEtODI5MS0xM2JmNDBkZmVmYWQiLCJpYXQiOjE1OTEzOTI0MTksImV4cCI6MTU5MTk5NzIxOSwiYXVkIjoiVXNlciIsImlzcyI6IkRSS1NMViJ9.dcnyAkv1Z3qzPdBpo_0s4-YP642amNVOGFCwMItvsoo"}, {"username": "gamer", "idString": "gamer", "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI0ZWU3NjkxMC04YjI5LTExZWEtODI5MS0xM2JmNDBkZmVmYWQiLCJpYXQiOjE1OTEzOTI0NTIsImV4cCI6MTU5MTk5NzI1MiwiYXVkIjoiVXNlciIsImlzcyI6IkRSS1NMViJ9.0P6NWE5rV3V-RBdkFRcBmWgydpMH07yzP2Uij86PReQ"}]
//
//

/***/ })

})
//# sourceMappingURL=index.js.f07c800030d00d59af5f.hot-update.js.map