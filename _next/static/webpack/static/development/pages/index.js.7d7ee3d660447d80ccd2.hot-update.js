webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: Header, HeaderButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButton", function() { return HeaderButton; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/header.module.sass */ "./style/header.module.sass");
/* harmony import */ var _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_header_module_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_headerDrawer_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/headerDrawer.module.sass */ "./style/headerDrawer.module.sass");
/* harmony import */ var _style_headerDrawer_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_headerDrawer_module_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _res_svg_eyeOfJudgementEllipse_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../res/svg/eyeOfJudgementEllipse.svg */ "./res/svg/eyeOfJudgementEllipse.svg");
/* harmony import */ var _hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/clickOutside */ "./hooks/clickOutside.js");
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _EyeOfJudgement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\layout\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Header(props) {
  //Drawer
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-2),
      drawerButton = _useState[0],
      setDrawerButton = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      drawer = _useState2[0],
      setDrawer = _useState2[1]; //collect refs


  var items = props.children || [];
  var refs = [];

  if (!Array.isArray(items)) {
    items = [items];
  }

  var itemObj = items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(item, {
      ref: function ref(_ref) {
        return refs.push(_ref);
      },
      key: index,
      addDrawer: addDrawer(index),
      removeDrawer: removeDrawer(index),
      drawer: drawer
    });
  });
  console.log(refs);

  function addDrawer(nr) {
    return function (drawer) {
      setDrawer(drawer);
      setDrawerButton(nr);
    };
  }

  function removeDrawer(nr) {
    return function () {
      setDrawer(undefined);
      setDrawerButton(-2);
    };
  }

  var open = drawerButton > -1;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.headerStart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_8__["EyePlaceholder"], {
    size: 40,
    id: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, props.title)), __jsx("ul", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.headerTray,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, itemObj)), __jsx("div", {
    style: {
      paddingTop: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.headerDrawerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["SwitchTransition"], {
    mode: "out-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["CSSTransition"], {
    classNames: _objectSpread({}, _style_headerDrawer_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a),
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.headerDrawer,
    timeout: open ? 500 : 0,
    key: drawerButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, drawer)))));
}
var HeaderButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function HeaderButton(props, ref) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState3[0],
      setOpen = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      drawerOpen = _useState4[0],
      setDrawerOpen = _useState4[1]; //dropdown will only open if component IS a dropdown


  var openD = typeof props.children === "object" && props.children.type.name === _MultilevelMenu__WEBPACK_IMPORTED_MODULE_6__["Dropdown"].name;

  function clickOutside() {
    setOpen(false);
  }

  return __jsx(_hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__["OutsideAlerter"], {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.headerItem,
    component: "li",
    onClickOutside: clickOutside,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.headerButton,
    "data-drawer": drawerOpen,
    onClick: function onClick() {
      setOpen(!open);
      setDrawerOpen(!drawerOpen);

      if (!drawerOpen) {
        props.drawer ? props.addDrawer(props.drawer) : props.removeDrawer();
      } else {
        props.removeDrawer();
      }

      if (!props.drawer) {
        setDrawerOpen(false);
      }
    },
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, props.icon && props.icon), open ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, props.children) : undefined);
});

/***/ })

})
//# sourceMappingURL=index.js.7d7ee3d660447d80ccd2.hot-update.js.map