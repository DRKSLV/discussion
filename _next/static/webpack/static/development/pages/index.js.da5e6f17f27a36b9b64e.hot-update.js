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
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _layout_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/Modal */ "./components/layout/Modal.js");
/* harmony import */ var _style_form_module_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/form.module.sass */ "./style/form.module.sass");
/* harmony import */ var _style_form_module_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_form_module_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\AccountPicker.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function AccountPicker() {
  var _this = this;

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_2__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function _onClick(idx) {
    if (id.active === idx) return id.setActive(null);
    if (id.users[idx].error) return;
    id.setActive(idx);
  }

  function icon(idx) {
    if (id.users[idx].error) {
      switch (id.users[idx].error.icon) {
        case "bolt":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaBolt"], {
            "data-error": true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 28
            }
          });

        case "time":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaClock"], {
            "data-error": true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 28
            }
          });

        case "death":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaSkull"], {
            "data-error": true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 28
            }
          });
      }
    } else if (idx === id.active) {
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaCheck"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 20
        }
      });
    }
  }

  function addAccountClick(evt) {
    modalRef.current.toggleModal();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, id.users.map(function (user, idx) {
    return __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
      text: user.username,
      rightIcon: icon(idx),
      key: idx,
      onClick: function onClick() {
        return _onClick(idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    });
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 33
      }
    }),
    text: "Add Acount",
    onClick: addAccountClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(_layout_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    ref: modalRef,
    className: _style_form_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.accountFormWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_7__["EyeOnMount"], {
    size: 150,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Login"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Ok listen i am working on this", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 46
    }
  }), " Give me a break"), __jsx("p", {
    style: {
      fontSize: "2em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Did you see how cool the eye moved? ", __jsx("span", {
    style: {
      backgroundImage: "linear-gradient(135deg, #ff00fe, #00f3ff)",
      backgroundClip: "text",
      color: "transparent",
      fontWeight: "bolder"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 78
    }
  }, "Fabulous!"))));
}

/***/ })

})
//# sourceMappingURL=index.js.da5e6f17f27a36b9b64e.hot-update.js.map