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
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/index */ "./constants/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);








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
        return req;
      }

      throw "Request not authorized";
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
          return val.username === username;
        });
        if (index === -1) newO.users = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newO.users), [{
          idString: idString,
          username: username,
          accessToken: accessToken
        }]);else {
          var e = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newO.users);

          e[index].accessToken = accessToken;
          delete e[index].error;
          newO.users = e;
        }
        return {
          id: newO
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "removeUser", function (username) {
      _this.setState(function (prev) {
        var newO = _objectSpread({}, prev.id);

        var index = newO.users.findIndex(function (val) {
          return val.username === username;
        });
        if (index > -1) newO.users.splice(index, 1);
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
      }, _this.checkActive);
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
        if (this.state.id.users[this.state.id.active].test === true) {
          return;
        }

        this.state.axios.get("/protected").then(function (val) {
          console.log("✔ Account ok: ", val);
        }, function (reason) {
          console.log("❌ Account bad: ", reason);

          if (reason.response && reason.response.headers["www-authenticate"]) {
            //authenticate header
            var auth = reason.response.headers["www-authenticate"];
            console.log(auth);
            var tokens = auth.split(",").map(function (x) {
              return x.trim();
            });
            var error = {}; //parse header

            if (tokens[1] && tokens[1].startsWith('error="')) {
              error.err = tokens[1].substring(7, tokens[1].length - 1);
            }

            if (tokens[2] && tokens[2].startsWith('error_description="')) {
              error.desc = tokens[2].substring(19, tokens[2].length - 1);
            } //decide what to do


            switch (error.err) {
              case "UnsupportedAuthError":
                throw reason;

              case "TokenClaimError":
                if (error.desc === "insufficient claims.") {
                  error.icon = "bolt";
                } else if (error.desc === "invalid claims.") {
                  error.icon = "death";
                }

                break;

              case "TokenExpiredError":
                error.icon = "time";
                break;

              case "NotBeforeError":
                error.icon = "time";
                break;

              case "JsonWebTokenError":
                error.icon = "bolt";
                break;
            }

            console.log(error);

            if (error.icon) {
              return _this2.setState(function (prev) {
                var newUsers = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.id.users);

                newUsers[prev.id.active] = _objectSpread({}, newUsers[prev.id.active], {
                  error: error
                });
                return {
                  id: _objectSpread({}, prev.id, {
                    users: newUsers,
                    active: null
                  })
                };
              });
            }
          } //tf happened


          _this2.setState(function (prev) {
            return {
              id: _objectSpread({}, prev.id, {
                active: null
              })
            };
          });
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
        baseURL: _constants_index__WEBPACK_IMPORTED_MODULE_10__["apiUrl"]
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
      this.state.axios = instance; //this.setState(prev=> {return {id: {active, users, addUser: this.addUser, removeUser: this.removeUser, setActive: this.setActive}, axios: instance}});
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      publish();
      this.checkActive();
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
          lineNumber: 215,
          columnNumber: 16
        }
      }, this.props.children);
    }
  }]);

  return IdentityProvider;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
var useIdentity = function useIdentity() {
  return Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(Identity);
};

function publish() {
  console.log("GLOBAL");

  window.supersecrettestusers = function () {
    localStorage.setItem("users", "[\n                {\n                    \"username\":\"test-_-\",\n                    \"idString\":\"gamer\",\n                    \"accessToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MGMzYjRlMC04YjI5LTExZWEtODI5MS0xM2JmNDBkZmVmYWQiLCJpYXQiOjE1OTEzOTI0MTksImV4cCI6MTU5MTk5NzIxOSwiYXVkIjoiVXNlciIsImlzcyI6IkRSS1NMViJ9.dcnyAkv1Z3qzPdBpo_0s4-YP642amNVOGFCwMItvsoo\",\n                    \"error\": {\n                        \"err\":\"TokenClaimError\",\n                        \"desc\":\"invalid claims.\",\n                        \"icon\":\"death\"\n                    },\n                    \"test\":\"true\"\n                },\n                {\n                    \"username\":\"gamer\",\n                    \"idString\":\"gamer\",\n                    \"accessToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI0ZWU3NjkxMC04YjI5LTExZWEtODI5MS0xM2JmNDBkZmVmYWQiLCJpYXQiOjE1OTE0NjA4ODcsImV4cCI6MTU5MjA2NTY4NywiYXVkIjoiVXNlciIsImlzcyI6IkRSS1NMViJ9.S2UrWzhT8jj8ewDP4ZIqrzlOx6yKQN-8fCZVugW2W6k\",\n                    \"error\":{\n                        \"err\":\"JsonWebTokenError\",\n                        \"desc\":\"invalid signature\",\n                        \"icon\":\"bolt\"\n                    },\n                    \"test\":\"true\"\n                },\n                {\n                    \"username\":\"felix-d-class\",\n                    \"idString\":\"gamer\",\"accessToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIxMDMwMzA2MC1hODEzLTExZWEtOTNiZS0yNzBhMjBjM2EyOTQiLCJpYXQiOjE1OTE0NjEwNTYsImV4cCI6MTU5MjA2NTg1NiwiYXVkIjoiVXNlciIsImlzcyI6IkRSS1NMViJ9.zb78T8307vb-mBncJ7AwmShV2cxMX2nfchaUYZXD6fE\",\n                    \"error\":{\n                        \"err\":\"JsonWebTokenError\",\n                        \"desc\":\"invalid signature\",\n                        \"icon\":\"bolt\"\n                    },\n                    \"test\":\"true\"\n                }\n            ]");
    window.location.reload(false);
  };

  window.supersecrettrashusers = function () {
    localStorage.setItem("users", "[\n            {\n                \"username\": \"sonic\",\n                \"idString\": \"bruh\",\n                \"accessToken\": \"hurensohn\",\n                \"error\": {\n                    \"err\":\"NotBeforeError\",\n                    \"desc\":\"e\",\n                    \"icon\":\"time\"\n                },\n                \"test\":\"true\"\n            },\n            {\n                \"username\": \"turtle\",\n                \"idString\": \"bruh\",\n                \"accessToken\": \"hurensohn\",\n                \"error\": {\n                    \"err\":\"TokenExpiredError\",\n                    \"desc\":\"e\",\n                    \"icon\":\"time\"\n                },\n                \"test\":\"true\"\n            },\n            {\n                \"username\": \"d-class-personell\",\n                \"idString\": \"bruh\",\n                \"accessToken\": \"hurensohn\",\n                \"error\": {\n                    \"err\":\"TokenClaimError\",\n                    \"desc\":\"invalid claims.\",\n                    \"icon\":\"death\"\n                },\n                \"test\":\"true\"\n            },\n            {\n                \"username\": \"Jorji-Costava\",\n                \"idString\": \"bruh\",\n                \"accessToken\": \"hurensohn\",\n                \"error\": {\n                    \"err\":\"JsonWebTokenError\",\n                    \"desc\":\"invalid signiture\",\n                    \"icon\":\"bolt\"\n                },\n                \"test\":\"true\"\n            }\n        ]\n        ");
    window.location.reload(false);
  };
}

/***/ })

})
//# sourceMappingURL=index.js.334f39ffe8aa919e41bd.hot-update.js.map