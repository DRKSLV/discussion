webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/ContextMenu.js":
/*!******************************************!*\
  !*** ./components/layout/ContextMenu.js ***!
  \******************************************/
/*! exports provided: MenuData, ContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuData", function() { return MenuData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return ContextMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/dropdown.module.sass */ "./style/dropdown.module.sass");
/* harmony import */ var _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_clickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/clickOutside */ "./hooks/clickOutside.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\layout\\ContextMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MenuData = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
function ContextMenu(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([0, 0]),
      pos = _useState2[0],
      setPos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([__jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    text: "Dark Theme",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 47
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 82
    }
  }), __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    text: "Privacy Policy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 88
    }
  })]),
      contents = _useState3[0],
      setContents = _useState3[1];

  if (!document) {
    var document = {
      body: {
        scrollHeight: 0
      }
    };
  }

  var d = {
    left: "min( calc( 100vw - 205px ),   " + pos[0] + "px  )",
    top: "min( calc( 100vh + " + document.body.scrollHeight + "px - 205px ),   " + pos[1] + "px  )",
    display: open ? "block" : "none"
  }; //console.log(d);

  function openMenu(x, y, content) {
    if (content) {
      setOpen(true);
      setPos([x, y]);
      setContents(content);
    }
  }

  function removeMenu() {
    setOpen(false);
  }

  function clickOutside() {
    removeMenu();
  }

  var contentObj = contents.map(function (ctn, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(ctn, {
      key: index
    });
  });
  return __jsx("div", {
    style: props.style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(MenuData.Provider, {
    value: {
      openMenu: openMenu,
      removeMenu: removeMenu
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, props.children), __jsx(_hooks_clickOutside__WEBPACK_IMPORTED_MODULE_3__["OutsideAlerter"], {
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.menuMover,
    component: "div",
    onClickOutside: clickOutside,
    style: d,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, open && __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    small: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 26
    }
  }, contentObj)));
}

/***/ })

})
//# sourceMappingURL=index.js.ffa97caaeab82c403c27.hot-update.js.map