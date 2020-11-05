webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Header */ "./components/layout/Header.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var _components_layout_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Container */ "./components/layout/Container.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostList */ "./components/PostList.js");
/* harmony import */ var _components_AccountPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AccountPicker */ "./components/AccountPicker.js");
/* harmony import */ var _components_DummyPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DummyPost */ "./components/DummyPost.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _components_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/layout/ContextMenu */ "./components/layout/ContextMenu.js");
/* harmony import */ var _components_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/layout/EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");
/* harmony import */ var _components_PushSubToggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/PushSubToggle */ "./components/PushSubToggle.js");

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Math.random()),
      plsRerender = _useState[0],
      setRerender = _useState[1];

  function rerender(id) {
    console.log("rerender");

    if (id) {
      return setRerender(id);
    }

    setRerender(Math.random());
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("" + "/serviceworker.js").then(function _callee(reg) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("registered -> ", reg); //sw message

                navigator.serviceWorker.addEventListener("message", function (ev) {//console.log("bruh");
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, null, Promise);
      })["catch"](function (err) {
        console.log("error -> ", err);
      });
    }
  }, []);
  return __jsx(_components_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_15__["EyeProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Civil Discussion")), __jsx(_hooks_identity__WEBPACK_IMPORTED_MODULE_13__["IdentityProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_components_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenu"], {
    style: {
      backgroundColor: "#181a1b",
      height: "100vh",
      width: "100vw"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    title: "Discussion",
    rerenderFunc: rerender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_3__["HeaderButton"], {
    icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 45
      }
    }),
    drawer: __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_9__["PostForm"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }), __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_3__["HeaderButton"], {
    icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaUser"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 45
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    text: "Profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdSwapHoriz"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 57
      }
    }),
    text: "Switch Acount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx(_components_AccountPicker__WEBPACK_IMPORTED_MODULE_7__["AccountPicker"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  })), __jsx(_components_PushSubToggle__WEBPACK_IMPORTED_MODULE_16__["PushSubToggle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdSettings"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 57
      }
    }),
    text: "Account Settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }))), __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_3__["HeaderButton"], {
    icon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdSettings"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 45
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    text: "Dark Theme",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    text: "Privacy Policy",
    link: "" + "/privacy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  })))), __jsx(_components_layout_Container__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(_components_PostList__WEBPACK_IMPORTED_MODULE_6__["PostList"], {
    rerender: plsRerender,
    rerenderFunc: rerender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.bd4a10ccef2169f795a2.hot-update.js.map