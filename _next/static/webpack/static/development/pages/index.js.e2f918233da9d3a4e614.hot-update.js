webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AccountPicker.js":
/*!*************************************!*\
  !*** ./components/AccountPicker.js ***!
  \*************************************/
/*! exports provided: AccountPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPicker", function() { return AccountPicker; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_accountForm_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/accountForm.module.sass */ "./style/accountForm.module.sass");
/* harmony import */ var _style_accountForm_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_accountForm_module_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\AccountPicker.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function AccountPicker() {
  var _this = this;

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  function onClick() {}

  function icon(idx) {
    if (id.users[idx].error) {
      switch (id.users[idx].error.icon) {
        case "bolt":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBolt"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 28
            }
          });

        case "time":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaClock"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 28
            }
          });

        case "death":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSkull"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 28
            }
          });
      }
    } else if (idx === id.active) {
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCheck"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 20
        }
      });
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, id.users.map(function (user, idx) {
    return __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
      text: user.username,
      rightIcon: icon(idx),
      key: idx,
      onClick: function onClick() {
        if (id.active === idx) {
          return id.setActive(null);
        }

        id.setActive(idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    });
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 33
      }
    }),
    text: "Add Acount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.e2f918233da9d3a4e614.hot-update.js.map