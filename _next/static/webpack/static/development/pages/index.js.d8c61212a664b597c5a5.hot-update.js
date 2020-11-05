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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Header */ "./components/layout/Header.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var _components_layout_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Container */ "./components/layout/Container.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostList */ "./components/PostList.js");
/* harmony import */ var _components_AccountPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AccountPicker */ "./components/AccountPicker.js");
/* harmony import */ var _components_DummyPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DummyPost */ "./components/DummyPost.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _components_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout/ContextMenu */ "./components/layout/ContextMenu.js");
/* harmony import */ var _components_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/layout/EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");
/* harmony import */ var _components_PushSubToggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PushSubToggle */ "./components/PushSubToggle.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Math.random()),
      plsRerender = _useState[0],
      setRerender = _useState[1];

  function rerender(id) {
    console.log("rerender");

    if (id) {
      return setRerender(id);
    }

    setRerender(Math.random());
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("" + "/servicework.js");
    }
  }, []);
  return __jsx(_components_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_14__["EyeProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Civil Discussion")), __jsx(_hooks_identity__WEBPACK_IMPORTED_MODULE_12__["IdentityProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_components_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenu"], {
    style: {
      backgroundColor: "#181a1b",
      height: "100vh",
      width: "100vw"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    title: "Discussion",
    rerenderFunc: rerender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__["HeaderButton"], {
    icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 45
      }
    }),
    drawer: __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_8__["PostForm"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }), __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__["HeaderButton"], {
    icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaUser"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 45
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    text: "Profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSwapHoriz"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 57
      }
    }),
    text: "Switch Acount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx(_components_AccountPicker__WEBPACK_IMPORTED_MODULE_6__["AccountPicker"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  })), __jsx(_components_PushSubToggle__WEBPACK_IMPORTED_MODULE_15__["PushSubToggle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSettings"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 57
      }
    }),
    text: "Account Settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }))), __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__["HeaderButton"], {
    icon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSettings"], {
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
  }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    text: "Dark Theme",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    text: "Privacy Policy",
    link: "" + "/privacy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  })))), __jsx(_components_layout_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(_components_PostList__WEBPACK_IMPORTED_MODULE_5__["PostList"], {
    rerender: plsRerender,
    rerenderFunc: rerender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.d8c61212a664b597c5a5.hot-update.js.map