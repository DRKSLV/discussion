webpackHotUpdate("static\\development\\pages\\dropdownExample.js",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: Header, HeaderButton, Dropdown, DropdownMenu, DropdownItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButton", function() { return HeaderButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return DropdownItem; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_header_module_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../style/header.module.sass */ "./style/header.module.sass");
/* harmony import */ var _style_header_module_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_header_module_sass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _res_svg_eyeOfJudgementEllipse_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../res/svg/eyeOfJudgementEllipse.svg */ "./res/svg/eyeOfJudgementEllipse.svg");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _style_dropdownOuter_module_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../style/dropdownOuter.module.sass */ "./style/dropdownOuter.module.sass");
/* harmony import */ var _style_dropdownOuter_module_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_dropdownOuter_module_sass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style_dropdownInner_module_sass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../style/dropdownInner.module.sass */ "./style/dropdownInner.module.sass");
/* harmony import */ var _style_dropdownInner_module_sass__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_dropdownInner_module_sass__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../style/dropdown.module.sass */ "./style/dropdown.module.sass");
/* harmony import */ var _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");







var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\layout\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










function Header(props) {
  return __jsx("nav", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_8___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_8___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_res_svg_eyeOfJudgementEllipse_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_8___default.a.headerTray,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, props.children));
}
function HeaderButton(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1]; //dropdown will only open if component IS a dropdown


  var openD = typeof props.children === "object" && props.children.type.name === Dropdown.name;
  console.log(props.children);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_8___default.a.headerButton,
    onClick: function onClick() {
      return setOpen(!open);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, props.icon && props.icon), open ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, props.children) : undefined);
}
var Dropdown = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dropdown);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "add", function (menu) {
      //console.log("Adding Menu: ", menu)
      _this.setState(function (prev) {
        if (prev.backing || prev.adding) {
          //anim is already in progress
          return; // console.log("no");
        } //console.log("Previous Menus: ", prev.menus);


        return {
          menus: prev.menus.concat(menu),
          reverse: true,
          suppress: true,
          adding: true
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "back", function () {
      _this.setState(function (prev) {
        //console.log("Back Button engaged");
        //anim already in progress, active menu is root
        if (prev.menus.length < 2 || prev.backing || prev.adding) return; //console.log("no"); //noop
        //start backing

        return {
          backing: true,
          reverse: true
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "done", function () {
      _this.setState(function (prev) {
        if (prev.addingTrans) {
          return _this.addingDone(prev);
        }

        if (prev.backing) {
          return _this.backingDone(prev);
        }

        return {};
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "backingDone", function (prev) {
      if (prev.menus.length < 2) return; //noop
      //console.log("MEnus before removal:",prev.menus)

      return {
        backing: false,
        reverse: false,
        menus: prev.menus.slice(0, prev.menus.length - 1),
        suppress: true
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "addingDone", function (prev) {
      return {
        adding: false,
        addingTrans: false
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "calculateHeight", function (el, appear) {
      var height = el.offsetHeight;

      if (appear) {
        return setTimeout(_this.calculateHeight(el));
      }

      _this.setState(function (prev) {
        if (!prev.backing) {
          height += 16;
        }

        return {
          menuHeight: height
        };
      });
    });

    _this.state = {
      menus: [props.children],
      menuHeight: null,
      adding: false,
      addingTrans: false,
      backing: false,
      suppress: false,
      reverse: false
    }; //enforce type: props.children

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      //Disables Animation-Suppression after render, when adding flips reverse back to false
      if (this.state.suppress) {
        var changes = {
          suppress: false
        };

        if (this.state.adding) {
          changes.reverse = false;
          changes.addingTrans = true;
        }

        this.setState(changes);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var menu = this.state.menus;
      var mL = menu.length;
      var menuObj = [menu[mL - 1], menu[mL - 2] || undefined];
      var root = [menu.length < 2, menu.length - 1 < 2];
      /**
       * The second menu is the active one.
       * The first one is the one before, that will transition in when the user hits "back"
       * 
       * When a menu is added by a menuItem, that Menu gets appended to the array and thus the second will switch places to the inactive menu and will start transitioning out
       * When the user hits back, the active menu will transition out using the "outer" anim and will then get sliced of off the array
       */

      return __jsx("div", {
        className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.dropdown,
        style: {
          height: this.state.menuHeight
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }, __jsx(DropdownMenu, {
        add: this.add,
        done: this.done,
        back: this.back,
        calcHeight: this.calculateHeight,
        suppress: this.state.suppress,
        "in": this.state.reverse,
        root: root[1],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 17
        }
      }, menuObj[1]), __jsx(DropdownMenu, {
        add: this.add,
        done: this.done,
        back: this.back,
        calcHeight: this.calculateHeight,
        suppress: this.state.suppress,
        "in": !this.state.reverse,
        root: root[0],
        outer: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }
      }, menuObj[0]));
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
var DropdownMenu = /*#__PURE__*/function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DropdownMenu, _React$Component2);

  var _super2 = _createSuper(DropdownMenu);

  function DropdownMenu() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DropdownMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "onClick", function () {
      _this2.props.back();
    });

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DropdownMenu, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var items = this.props.children || [];
      var itemObj = items.map(function (item) {
        item.props;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(item, {
          add: _this3.props.add
        });
      });
      var anim = this.props.outer ? _style_dropdownOuter_module_sass__WEBPACK_IMPORTED_MODULE_11___default.a : _style_dropdownInner_module_sass__WEBPACK_IMPORTED_MODULE_12___default.a;
      return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_10__["CSSTransition"], {
        timeout: 300,
        classNames: _objectSpread({}, anim),
        className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.menu,
        component: "div",
        "in": this.props["in"],
        onEnter: this.props.calcHeight,
        onExited: this.props.done // tell Dropdown that a transition has completed
        ,
        enter: !this.props.suppress,
        exit: !this.props.suppress,
        mountOnEnter: true,
        unmountOnExit: true,
        appear: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }
      }, __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 17
        }
      }, !this.props.root && __jsx(DropdownItem, {
        onClick: this.onClick,
        leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaArrowLeft"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 89
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 42
        }
      }, "BACK"), itemObj));
    }
  }]);

  return DropdownMenu;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
;
function DropdownItem(props) {
  var secndry = props.dropdown;

  if (props.link && secndry) {
    //no double behaviour
    props.link = "#";
  }

  if (secondry) {
    props.rightIcon = __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_15__["RiArrowRightSLine"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 27
      }
    });
  }

  function onClick() {
    if (secndry) props.add(secndry);
  }

  return __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: props.link || "#",
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.item,
    onClick: props.onClick || onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }
  }, props.leftIcon && __jsx("span", {
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.leftIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 36
    }
  }, props.leftIcon), __jsx("span", {
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }, props.children), props.rightIcon && __jsx("span", {
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.rightIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  }, props.rightIcon)));
}

/***/ })

})
//# sourceMappingURL=dropdownExample.js.05f9cf9d9d2b08714f27.hot-update.js.map