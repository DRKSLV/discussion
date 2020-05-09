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

  function onClick() {
    if (secndry) props.add(secndry);
  }

  return __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: props.link || "#",
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.item,
    onClick: props.onClick || onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }
  }, props.leftIcon && __jsx("span", {
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.leftIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 36
    }
  }, props.leftIcon), __jsx("span", {
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, props.children), props.rightIcon && __jsx("span", {
    className: _style_dropdown_module_sass__WEBPACK_IMPORTED_MODULE_13___default.a.rightIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 37
    }
  }, props.rightIcon)));
}

/***/ }),

/***/ "./node_modules/react-icons/ri/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/ri/index.esm.js ***!
  \**************************************************/
/*! exports provided: RiAncientGateLine, RiAncientPavilionLine, RiBankLine, RiBuilding2Line, RiBuilding3Line, RiBuilding4Line, RiBuildingLine, RiCommunityLine, RiGovernmentLine, RiHome2Line, RiHome3Line, RiHome4Line, RiHome5Line, RiHome6Line, RiHome7Line, RiHome8Line, RiHomeGearLine, RiHomeHeartLine, RiHomeLine, RiHomeSmile2Line, RiHomeSmileLine, RiHomeWifiLine, RiHospitalLine, RiHotelLine, RiStore2Line, RiStore3Line, RiStoreLine, RiAdvertisementLine, RiArchiveDrawerLine, RiArchiveLine, RiAtLine, RiAttachmentLine, RiAwardLine, RiBarChart2Line, RiBarChartBoxLine, RiBarChartGroupedLine, RiBarChartHorizontalLine, RiBarChartLine, RiBookmark2Line, RiBookmark3Line, RiBookmarkLine, RiBriefcase2Line, RiBriefcase3Line, RiBriefcase4Line, RiBriefcase5Line, RiBriefcaseLine, RiCalculatorLine, RiCalendar2Line, RiCalendarCheckLine, RiCalendarEventLine, RiCalendarLine, RiCalendarTodoLine, RiCloudLine, RiCloudOffLine, RiCopyrightLine, RiCreativeCommonsByLine, RiCreativeCommonsLine, RiCreativeCommonsNcLine, RiCreativeCommonsNdLine, RiCreativeCommonsSaLine, RiCreativeCommonsZeroLine, RiCustomerService2Line, RiCustomerServiceLine, RiFlag2Line, RiFlagLine, RiGlobalLine, RiHonourLine, RiInboxArchiveLine, RiInboxLine, RiInboxUnarchiveLine, RiLinksLine, RiMailAddLine, RiMailCheckLine, RiMailCloseLine, RiMailDownloadLine, RiMailForbidLine, RiMailLine, RiMailLockLine, RiMailOpenLine, RiMailSendLine, RiMailSettingsLine, RiMailStarLine, RiMailUnreadLine, RiMailVolumeLine, RiMedal2Line, RiMedalLine, RiPieChart2Line, RiPieChartBoxLine, RiPieChartLine, RiPrinterCloudLine, RiPrinterLine, RiProfileLine, RiProjector2Line, RiProjectorLine, RiRecordMailLine, RiRegisteredLine, RiReplyLine, RiSendPlane2Line, RiSendPlaneLine, RiServiceLine, RiSlideshow2Line, RiSlideshow3Line, RiSlideshow4Line, RiSlideshowLine, RiStackLine, RiTrademarkLine, RiWindow2Line, RiWindowLine, RiChat1Line, RiChat2Line, RiChat3Line, RiChat4Line, RiChatCheckLine, RiChatDeleteLine, RiChatDownloadLine, RiChatForwardLine, RiChatHeartLine, RiChatNewLine, RiChatOffLine, RiChatSettingsLine, RiChatSmile2Line, RiChatSmile3Line, RiChatSmileLine, RiChatUploadLine, RiChatVoiceLine, RiDiscussLine, RiFeedbackLine, RiMessage2Line, RiMessage3Line, RiMessageLine, RiQuestionAnswerLine, RiQuestionnaireLine, RiVideoChatLine, RiAnticlockwise2Line, RiAnticlockwiseLine, RiArtboard2Line, RiArtboardLine, RiBallPenLine, RiBlurOffLine, RiBrush2Line, RiBrush3Line, RiBrush4Line, RiBrushLine, RiClockwise2Line, RiClockwiseLine, RiCompasses2Line, RiCompassesLine, RiContrast2Line, RiContrastDrop2Line, RiContrastDropLine, RiContrastLine, RiCrop2Line, RiCropLine, RiDragDropLine, RiDragMove2Line, RiDragMoveLine, RiDropLine, RiEdit2Line, RiEditBoxLine, RiEditCircleLine, RiEditLine, RiEraserLine, RiFocus2Line, RiFocus3Line, RiFocusLine, RiGridLine, RiHammerLine, RiInputMethodLine, RiLayout2Line, RiLayout3Line, RiLayout4Line, RiLayout5Line, RiLayout6Line, RiLayoutBottom2Line, RiLayoutBottomLine, RiLayoutColumnLine, RiLayoutGridLine, RiLayoutLeft2Line, RiLayoutLeftLine, RiLayoutLine, RiLayoutMasonryLine, RiLayoutRight2Line, RiLayoutRightLine, RiLayoutRowLine, RiLayoutTop2Line, RiLayoutTopLine, RiMagicLine, RiMarkPenLine, RiMarkupLine, RiPaintBrushLine, RiPaintLine, RiPaletteLine, RiPantoneLine, RiPenNibLine, RiPencilLine, RiPencilRuler2Line, RiPencilRulerLine, RiQuillPenLine, RiRuler2Line, RiRulerLine, RiScissors2Line, RiScissorsCutLine, RiScissorsLine, RiScreenshot2Line, RiScreenshotLine, RiShape2Line, RiShapeLine, RiSipLine, RiSliceLine, RiTBoxLine, RiTableAltLine, RiTableLine, RiToolsLine, RiBracesLine, RiBracketsLine, RiBug2Line, RiBugLine, RiCodeBoxLine, RiCodeLine, RiCodeSLine, RiCodeSSlashLine, RiCommandLine, RiCss3Line, RiCursorLine, RiGitBranchLine, RiGitCommitLine, RiGitMergeLine, RiGitPullRequestLine, RiGitRepositoryCommitsLine, RiGitRepositoryLine, RiGitRepositoryPrivateLine, RiHtml5Line, RiParenthesesLine, RiStackshareLine, RiTerminalBoxLine, RiTerminalLine, RiTerminalWindowLine, RiAirplayLine, RiBattery2ChargeLine, RiBattery2Line, RiBatteryChargeLine, RiBatteryLine, RiBatteryLowLine, RiBatterySaverLine, RiBatteryShareLine, RiCastLine, RiCellphoneLine, RiComputerLine, RiCpuLine, RiDatabase2Line, RiDatabaseLine, RiDeviceLine, RiDeviceRecoverLine, RiDualSim1Line, RiDualSim2Line, RiGamepadLine, RiGradienterLine, RiHardDrive2Line, RiHardDriveLine, RiHotspotLine, RiInstallLine, RiKeyboardBoxLine, RiKeyboardLine, RiMacLine, RiMacbookLine, RiMouseLine, RiPhoneFindLine, RiPhoneLine, RiPhoneLockLine, RiRadarLine, RiRemoteControl2Line, RiRemoteControlLine, RiRouterLine, RiSave2Line, RiSave3Line, RiSaveLine, RiSdCardLine, RiSdCardMiniLine, RiSensorLine, RiServerLine, RiSimCard2Line, RiSimCardLine, RiSmartphoneLine, RiTabletLine, RiTv2Line, RiTvLine, RiUDiskLine, RiUninstallLine, RiArticleLine, RiBillLine, RiBook2Line, RiBook3Line, RiBookLine, RiBookMarkLine, RiBookOpenLine, RiBookReadLine, RiBookletLine, RiClipboardLine, RiContactsBook2Line, RiContactsBookLine, RiContactsBookUploadLine, RiFile2Line, RiFile3Line, RiFile4Line, RiFileAddLine, RiFileChart2Line, RiFileChartLine, RiFileCloudLine, RiFileCodeLine, RiFileCopy2Line, RiFileCopyLine, RiFileDamageLine, RiFileDownloadLine, RiFileEditLine, RiFileExcel2Line, RiFileExcelLine, RiFileForbidLine, RiFileHwpLine, RiFileInfoLine, RiFileLine, RiFileList2Line, RiFileList3Line, RiFileListLine, RiFileLockLine, RiFileMarkLine, RiFileMusicLine, RiFilePaper2Line, RiFilePaperLine, RiFilePdfLine, RiFilePpt2Line, RiFilePptLine, RiFileReduceLine, RiFileSearchLine, RiFileSettingsLine, RiFileShield2Line, RiFileShieldLine, RiFileShredLine, RiFileTextLine, RiFileTransferLine, RiFileUnknowLine, RiFileUploadLine, RiFileUserLine, RiFileWarningLine, RiFileWord2Line, RiFileWordLine, RiFileZipLine, RiFolder2Line, RiFolder3Line, RiFolder4Line, RiFolder5Line, RiFolderAddLine, RiFolderChart2Line, RiFolderChartLine, RiFolderDownloadLine, RiFolderForbidLine, RiFolderInfoLine, RiFolderKeyholeLine, RiFolderLine, RiFolderLockLine, RiFolderMusicLine, RiFolderOpenLine, RiFolderReceivedLine, RiFolderReduceLine, RiFolderSettingsLine, RiFolderSharedLine, RiFolderShield2Line, RiFolderShieldLine, RiFolderTransferLine, RiFolderUnknowLine, RiFolderUploadLine, RiFolderUserLine, RiFolderWarningLine, RiFolderZipLine, RiFoldersLine, RiKeynoteLine, RiMarkdownLine, RiNewspaperLine, RiNumbersLine, RiPagesLine, RiPassportLine, RiStickyNote2Line, RiStickyNoteLine, RiTaskLine, RiTodoLine, RiAuctionLine, RiBankCard2Line, RiBankCardLine, RiBitCoinLine, RiCoinLine, RiCoinsLine, RiCopperCoinLine, RiCopperDiamondLine, RiCoupon2Line, RiCoupon3Line, RiCoupon4Line, RiCoupon5Line, RiCouponLine, RiCurrencyLine, RiExchangeBoxLine, RiExchangeCnyLine, RiExchangeDollarLine, RiExchangeFundsLine, RiExchangeLine, RiFundsBoxLine, RiFundsLine, RiGift2Line, RiGiftLine, RiHandCoinLine, RiHandHeartLine, RiIncreaseDecreaseLine, RiMoneyCnyBoxLine, RiMoneyCnyCircleLine, RiMoneyDollarBoxLine, RiMoneyDollarCircleLine, RiMoneyEuroBoxLine, RiMoneyEuroCircleLine, RiMoneyPoundBoxLine, RiMoneyPoundCircleLine, RiPercentLine, RiPriceTag2Line, RiPriceTag3Line, RiPriceTagLine, RiRedPacketLine, RiRefund2Line, RiRefundLine, RiSafe2Line, RiSafeLine, RiSecurePaymentLine, RiShoppingBag2Line, RiShoppingBag3Line, RiShoppingBagLine, RiShoppingBasket2Line, RiShoppingBasketLine, RiShoppingCart2Line, RiShoppingCartLine, RiStockLine, RiSwapBoxLine, RiSwapLine, RiTicket2Line, RiTicketLine, RiTrophyLine, RiVipCrown2Line, RiVipCrownLine, RiVipDiamondLine, RiVipLine, RiWallet2Line, RiWallet3Line, RiWalletLine, RiWaterFlashLine, RiAlipayLine, RiAmazonLine, RiAndroidLine, RiAngularjsLine, RiAppStoreLine, RiAppleLine, RiBaiduLine, RiBehanceLine, RiBilibiliLine, RiChromeLine, RiCodepenLine, RiCoreosLine, RiDingdingLine, RiDiscordLine, RiDoubanLine, RiDribbbleLine, RiDriveLine, RiDropboxLine, RiEdgeLine, RiEvernoteLine, RiFacebookBoxLine, RiFacebookCircleLine, RiFacebookLine, RiFirefoxLine, RiFlutterLine, RiGatsbyLine, RiGithubLine, RiGitlabLine, RiGoogleLine, RiGooglePlayLine, RiIeLine, RiInstagramLine, RiInvisionLine, RiKakaoTalkLine, RiLineLine, RiLinkedinBoxLine, RiLinkedinLine, RiMastercardLine, RiMastodonLine, RiMediumLine, RiMessengerLine, RiMiniProgramLine, RiNeteaseCloudMusicLine, RiNetflixLine, RiOperaLine, RiPatreonLine, RiPaypalLine, RiPinterestLine, RiPlaystationLine, RiProductHuntLine, RiQqLine, RiReactjsLine, RiRedditLine, RiRemixiconLine, RiSafariLine, RiSkypeLine, RiSlackLine, RiSnapchatLine, RiSoundcloudLine, RiSpectrumLine, RiSpotifyLine, RiStackOverflowLine, RiSwitchLine, RiTaobaoLine, RiTelegramLine, RiTrelloLine, RiTumblrLine, RiTwitchLine, RiTwitterLine, RiUbuntuLine, RiVisaLine, RiVuejsLine, RiWechat2Line, RiWechatLine, RiWechatPayLine, RiWeiboLine, RiWhatsappLine, RiWindowsLine, RiXboxLine, RiXingLine, RiYoutubeLine, RiZcoolLine, RiZhihuLine, RiAnchorLine, RiBarricadeLine, RiBikeLine, RiBus2Line, RiBusLine, RiBusWifiLine, RiCarLine, RiCarWashingLine, RiChargingPile2Line, RiChargingPileLine, RiChinaRailwayLine, RiCompass2Line, RiCompass3Line, RiCompass4Line, RiCompassDiscoverLine, RiCompassLine, RiCupLine, RiDirectionLine, RiEBike2Line, RiEBikeLine, RiEarthLine, RiFlightLandLine, RiFlightTakeoffLine, RiFootprintLine, RiGasStationLine, RiGlobeLine, RiGobletLine, RiGuideLine, RiHotelBedLine, RiLifebuoyLine, RiMap2Line, RiMapLine, RiMapPin2Line, RiMapPin3Line, RiMapPin4Line, RiMapPin5Line, RiMapPinAddLine, RiMapPinLine, RiMapPinRangeLine, RiMapPinTimeLine, RiMapPinUserLine, RiMotorbikeLine, RiNavigationLine, RiOilLine, RiParkingBoxLine, RiParkingLine, RiPinDistanceLine, RiPlaneLine, RiPoliceCarLine, RiPushpin2Line, RiPushpinLine, RiRestaurant2Line, RiRestaurantLine, RiRidingLine, RiRoadMapLine, RiRoadsterLine, RiRocket2Line, RiRocketLine, RiRouteLine, RiRunLine, RiSailboatLine, RiShip2Line, RiShipLine, RiSignalTowerLine, RiSpaceShipLine, RiSteering2Line, RiSteeringLine, RiSubwayLine, RiSubwayWifiLine, RiTakeawayLine, RiTaxiLine, RiTaxiWifiLine, RiTrafficLightLine, RiTrainLine, RiTrainWifiLine, RiTreasureMapLine, RiTruckLine, RiWalkLine, Ri4KLine, RiAlbumLine, RiAspectRatioLine, RiBroadcastLine, RiCamera2Line, RiCamera3Line, RiCameraLensLine, RiCameraLine, RiCameraOffLine, RiCameraSwitchLine, RiClapperboardLine, RiDiscLine, RiDvLine, RiDvdLine, RiEjectLine, RiEqualizerLine, RiFilmLine, RiFullscreenExitLine, RiFullscreenLine, RiGalleryLine, RiGalleryUploadLine, RiHdLine, RiHeadphoneLine, RiHqLine, RiImage2Line, RiImageAddLine, RiImageLine, RiLandscapeLine, RiLiveLine, RiMic2Line, RiMicLine, RiMicOffLine, RiMovie2Line, RiMovieLine, RiMusic2Line, RiMusicLine, RiMvLine, RiNotification2Line, RiNotification3Line, RiNotification4Line, RiNotificationLine, RiNotificationOffLine, RiOrderPlayLine, RiPauseCircleLine, RiPauseLine, RiPauseMiniLine, RiPhoneCameraLine, RiPictureInPicture2Line, RiPictureInPictureExitLine, RiPictureInPictureLine, RiPlayCircleLine, RiPlayLine, RiPlayListAddLine, RiPlayListLine, RiPlayMiniLine, RiPolaroid2Line, RiPolaroidLine, RiRadio2Line, RiRadioLine, RiRecordCircleLine, RiRepeat2Line, RiRepeatLine, RiRepeatOneLine, RiRewindLine, RiRewindMiniLine, RiRhythmLine, RiShuffleLine, RiSkipBackLine, RiSkipBackMiniLine, RiSkipForwardLine, RiSkipForwardMiniLine, RiSoundModuleLine, RiSpeaker2Line, RiSpeaker3Line, RiSpeakerLine, RiSpeedLine, RiSpeedMiniLine, RiStopCircleLine, RiStopLine, RiStopMiniLine, RiSurroundSoundLine, RiTapeLine, RiVideoLine, RiVidicon2Line, RiVidiconLine, RiVoiceprintLine, RiVolumeDownLine, RiVolumeMuteLine, RiVolumeOffVibrateLine, RiVolumeUpLine, RiVolumeVibrateLine, RiWebcamLine, RiBasketballLine, RiBellLine, RiBilliardsLine, RiBoxingLine, RiCake2Line, RiCake3Line, RiCakeLine, RiCharacterRecognitionLine, RiDoorLockBoxLine, RiDoorLockLine, RiFireLine, RiFlaskLine, RiFootballLine, RiGameLine, RiHandbagLine, RiHeartsLine, RiKey2Line, RiKeyLine, RiKnifeBloodLine, RiKnifeLine, RiLightbulbFlashLine, RiLightbulbLine, RiOutlet2Line, RiOutletLine, RiPingPongLine, RiPlug2Line, RiPlugLine, RiReservedLine, RiShirtLine, RiSwordLine, RiTShirt2Line, RiTShirtAirLine, RiTShirtLine, RiUmbrellaLine, RiVoiceRecognitionLine, RiAddBoxLine, RiAddCircleLine, RiAddLine, RiAlarmLine, RiAlarmWarningLine, RiAlertLine, RiApps2Line, RiAppsLine, RiArrowDownCircleLine, RiArrowDownLine, RiArrowDownSLine, RiArrowDropDownLine, RiArrowDropLeftLine, RiArrowDropRightLine, RiArrowDropUpLine, RiArrowGoBackLine, RiArrowGoForwardLine, RiArrowLeftCircleLine, RiArrowLeftDownLine, RiArrowLeftLine, RiArrowLeftRightLine, RiArrowLeftSLine, RiArrowLeftUpLine, RiArrowRightCircleLine, RiArrowRightDownLine, RiArrowRightLine, RiArrowRightSLine, RiArrowRightUpLine, RiArrowUpCircleLine, RiArrowUpDownLine, RiArrowUpLine, RiArrowUpSLine, RiBarcodeBoxLine, RiBarcodeLine, RiBaseStationLine, RiBluetoothConnectLine, RiBluetoothLine, RiCheckDoubleLine, RiCheckLine, RiCheckboxBlankCircleLine, RiCheckboxBlankLine, RiCheckboxCircleLine, RiCheckboxIndeterminateLine, RiCheckboxLine, RiCheckboxMultipleBlankLine, RiCheckboxMultipleLine, RiCloseCircleLine, RiCloseLine, RiDashboardLine, RiDeleteBack2Line, RiDeleteBackLine, RiDeleteBin2Line, RiDeleteBin3Line, RiDeleteBin4Line, RiDeleteBin5Line, RiDeleteBin6Line, RiDeleteBin7Line, RiDeleteBinLine, RiDivideLine, RiDownload2Line, RiDownloadCloud2Line, RiDownloadCloudLine, RiDownloadLine, RiErrorWarningLine, RiExternalLinkLine, RiEye2Line, RiEyeCloseLine, RiEyeLine, RiEyeOffLine, RiFilter2Line, RiFilter3Line, RiFilterLine, RiFindReplaceLine, RiFingerprint2Line, RiFingerprintLine, RiForbid2Line, RiForbidLine, RiFunctionLine, RiGpsLine, RiHeart2Line, RiHeartAddLine, RiHeartLine, RiIndeterminateCircleLine, RiInformationLine, RiListSettingsLine, RiLoader2Line, RiLoader3Line, RiLoader4Line, RiLoader5Line, RiLoaderLine, RiLock2Line, RiLockLine, RiLockPasswordLine, RiLockUnlockLine, RiLoginBoxLine, RiLoginCircleLine, RiLogoutBoxLine, RiLogoutBoxRLine, RiLogoutCircleLine, RiLogoutCircleRLine, RiMenu2Line, RiMenu3Line, RiMenu4Line, RiMenu5Line, RiMenuAddLine, RiMenuLine, RiMore2Line, RiMoreLine, RiNotificationBadgeLine, RiQrCodeLine, RiQrScan2Line, RiQrScanLine, RiQuestionLine, RiRadioButtonLine, RiRefreshLine, RiRestartLine, RiRotateLockLine, RiRssLine, RiScan2Line, RiScanLine, RiSearch2Line, RiSearchEyeLine, RiSearchLine, RiSettings2Line, RiSettings3Line, RiSettings4Line, RiSettings5Line, RiSettings6Line, RiSettingsLine, RiShareBoxLine, RiShareCircleLine, RiShareForward2Line, RiShareForwardBoxLine, RiShareForwardLine, RiShareLine, RiShieldCrossLine, RiShieldFlashLine, RiShieldKeyholeLine, RiShieldLine, RiShieldStarLine, RiShieldUserLine, RiShutDownLine, RiSideBarLine, RiSpam2Line, RiSpam3Line, RiSpamLine, RiStarHalfLine, RiStarHalfSLine, RiStarLine, RiStarSLine, RiSubtractLine, RiThumbDownLine, RiThumbUpLine, RiTimeLine, RiTimer2Line, RiTimerFlashLine, RiTimerLine, RiToggleLine, RiUpload2Line, RiUploadCloud2Line, RiUploadCloudLine, RiUploadLine, RiWifiLine, RiWifiOffLine, RiZoomInLine, RiZoomOutLine, RiAccountBoxLine, RiAccountCircleLine, RiAccountPinBoxLine, RiAccountPinCircleLine, RiAdminLine, RiAliensLine, RiBearSmileLine, RiBodyScanLine, RiContactsLine, RiCriminalLine, RiEmotion2Line, RiEmotionHappyLine, RiEmotionLaughLine, RiEmotionLine, RiEmotionNormalLine, RiEmotionSadLine, RiEmotionUnhappyLine, RiGenderlessLine, RiGhost2Line, RiGhostLine, RiGhostSmileLine, RiGroup2Line, RiGroupLine, RiMenLine, RiMickeyLine, RiOpenArmLine, RiParentLine, RiRobotLine, RiSkull2Line, RiSkullLine, RiSpyLine, RiStarSmileLine, RiTeamLine, RiTravestiLine, RiUser2Line, RiUser3Line, RiUser4Line, RiUser5Line, RiUser6Line, RiUserAddLine, RiUserFollowLine, RiUserHeartLine, RiUserLine, RiUserLocationLine, RiUserReceived2Line, RiUserReceivedLine, RiUserSearchLine, RiUserSettingsLine, RiUserShared2Line, RiUserSharedLine, RiUserSmileLine, RiUserStarLine, RiUserUnfollowLine, RiUserVoiceLine, RiWomenLine, RiBlazeLine, RiCelsiusLine, RiCloudWindyLine, RiCloudy2Line, RiCloudyLine, RiDrizzleLine, RiEarthquakeLine, RiFahrenheitLine, RiFlashlightLine, RiFloodLine, RiFoggyLine, RiHailLine, RiHaze2Line, RiHazeLine, RiHeavyShowersLine, RiMeteorLine, RiMistLine, RiMoonClearLine, RiMoonCloudyLine, RiMoonFoggyLine, RiMoonLine, RiRainbowLine, RiRainyLine, RiShowersLine, RiSnowyLine, RiSunCloudyLine, RiSunFoggyLine, RiSunLine, RiTempColdLine, RiTempHotLine, RiThunderstormsLine, RiTornadoLine, RiTyphoonLine, RiWindyLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAncientGateLine", function() { return RiAncientGateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAncientPavilionLine", function() { return RiAncientPavilionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBankLine", function() { return RiBankLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBuilding2Line", function() { return RiBuilding2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBuilding3Line", function() { return RiBuilding3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBuilding4Line", function() { return RiBuilding4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBuildingLine", function() { return RiBuildingLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCommunityLine", function() { return RiCommunityLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGovernmentLine", function() { return RiGovernmentLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHome2Line", function() { return RiHome2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHome3Line", function() { return RiHome3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHome4Line", function() { return RiHome4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHome5Line", function() { return RiHome5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHome6Line", function() { return RiHome6Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHome7Line", function() { return RiHome7Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHome8Line", function() { return RiHome8Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHomeGearLine", function() { return RiHomeGearLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHomeHeartLine", function() { return RiHomeHeartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHomeLine", function() { return RiHomeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHomeSmile2Line", function() { return RiHomeSmile2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHomeSmileLine", function() { return RiHomeSmileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHomeWifiLine", function() { return RiHomeWifiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHospitalLine", function() { return RiHospitalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHotelLine", function() { return RiHotelLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStore2Line", function() { return RiStore2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStore3Line", function() { return RiStore3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStoreLine", function() { return RiStoreLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAdvertisementLine", function() { return RiAdvertisementLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArchiveDrawerLine", function() { return RiArchiveDrawerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArchiveLine", function() { return RiArchiveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAtLine", function() { return RiAtLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAttachmentLine", function() { return RiAttachmentLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAwardLine", function() { return RiAwardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBarChart2Line", function() { return RiBarChart2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBarChartBoxLine", function() { return RiBarChartBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBarChartGroupedLine", function() { return RiBarChartGroupedLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBarChartHorizontalLine", function() { return RiBarChartHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBarChartLine", function() { return RiBarChartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBookmark2Line", function() { return RiBookmark2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBookmark3Line", function() { return RiBookmark3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBookmarkLine", function() { return RiBookmarkLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBriefcase2Line", function() { return RiBriefcase2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBriefcase3Line", function() { return RiBriefcase3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBriefcase4Line", function() { return RiBriefcase4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBriefcase5Line", function() { return RiBriefcase5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBriefcaseLine", function() { return RiBriefcaseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCalculatorLine", function() { return RiCalculatorLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCalendar2Line", function() { return RiCalendar2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCalendarCheckLine", function() { return RiCalendarCheckLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCalendarEventLine", function() { return RiCalendarEventLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCalendarLine", function() { return RiCalendarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCalendarTodoLine", function() { return RiCalendarTodoLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCloudLine", function() { return RiCloudLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCloudOffLine", function() { return RiCloudOffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCopyrightLine", function() { return RiCopyrightLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCreativeCommonsByLine", function() { return RiCreativeCommonsByLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCreativeCommonsLine", function() { return RiCreativeCommonsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCreativeCommonsNcLine", function() { return RiCreativeCommonsNcLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCreativeCommonsNdLine", function() { return RiCreativeCommonsNdLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCreativeCommonsSaLine", function() { return RiCreativeCommonsSaLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCreativeCommonsZeroLine", function() { return RiCreativeCommonsZeroLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCustomerService2Line", function() { return RiCustomerService2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCustomerServiceLine", function() { return RiCustomerServiceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFlag2Line", function() { return RiFlag2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFlagLine", function() { return RiFlagLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGlobalLine", function() { return RiGlobalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHonourLine", function() { return RiHonourLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiInboxArchiveLine", function() { return RiInboxArchiveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiInboxLine", function() { return RiInboxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiInboxUnarchiveLine", function() { return RiInboxUnarchiveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLinksLine", function() { return RiLinksLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailAddLine", function() { return RiMailAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailCheckLine", function() { return RiMailCheckLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailCloseLine", function() { return RiMailCloseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailDownloadLine", function() { return RiMailDownloadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailForbidLine", function() { return RiMailForbidLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailLine", function() { return RiMailLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailLockLine", function() { return RiMailLockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailOpenLine", function() { return RiMailOpenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailSendLine", function() { return RiMailSendLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailSettingsLine", function() { return RiMailSettingsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailStarLine", function() { return RiMailStarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailUnreadLine", function() { return RiMailUnreadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMailVolumeLine", function() { return RiMailVolumeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMedal2Line", function() { return RiMedal2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMedalLine", function() { return RiMedalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPieChart2Line", function() { return RiPieChart2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPieChartBoxLine", function() { return RiPieChartBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPieChartLine", function() { return RiPieChartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPrinterCloudLine", function() { return RiPrinterCloudLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPrinterLine", function() { return RiPrinterLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiProfileLine", function() { return RiProfileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiProjector2Line", function() { return RiProjector2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiProjectorLine", function() { return RiProjectorLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRecordMailLine", function() { return RiRecordMailLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRegisteredLine", function() { return RiRegisteredLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiReplyLine", function() { return RiReplyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSendPlane2Line", function() { return RiSendPlane2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSendPlaneLine", function() { return RiSendPlaneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiServiceLine", function() { return RiServiceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSlideshow2Line", function() { return RiSlideshow2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSlideshow3Line", function() { return RiSlideshow3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSlideshow4Line", function() { return RiSlideshow4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSlideshowLine", function() { return RiSlideshowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStackLine", function() { return RiStackLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTrademarkLine", function() { return RiTrademarkLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWindow2Line", function() { return RiWindow2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWindowLine", function() { return RiWindowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChat1Line", function() { return RiChat1Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChat2Line", function() { return RiChat2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChat3Line", function() { return RiChat3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChat4Line", function() { return RiChat4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatCheckLine", function() { return RiChatCheckLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatDeleteLine", function() { return RiChatDeleteLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatDownloadLine", function() { return RiChatDownloadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatForwardLine", function() { return RiChatForwardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatHeartLine", function() { return RiChatHeartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatNewLine", function() { return RiChatNewLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatOffLine", function() { return RiChatOffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatSettingsLine", function() { return RiChatSettingsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatSmile2Line", function() { return RiChatSmile2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatSmile3Line", function() { return RiChatSmile3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatSmileLine", function() { return RiChatSmileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatUploadLine", function() { return RiChatUploadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChatVoiceLine", function() { return RiChatVoiceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDiscussLine", function() { return RiDiscussLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFeedbackLine", function() { return RiFeedbackLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMessage2Line", function() { return RiMessage2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMessage3Line", function() { return RiMessage3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMessageLine", function() { return RiMessageLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiQuestionAnswerLine", function() { return RiQuestionAnswerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiQuestionnaireLine", function() { return RiQuestionnaireLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVideoChatLine", function() { return RiVideoChatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAnticlockwise2Line", function() { return RiAnticlockwise2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAnticlockwiseLine", function() { return RiAnticlockwiseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArtboard2Line", function() { return RiArtboard2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArtboardLine", function() { return RiArtboardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBallPenLine", function() { return RiBallPenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBlurOffLine", function() { return RiBlurOffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBrush2Line", function() { return RiBrush2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBrush3Line", function() { return RiBrush3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBrush4Line", function() { return RiBrush4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBrushLine", function() { return RiBrushLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiClockwise2Line", function() { return RiClockwise2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiClockwiseLine", function() { return RiClockwiseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCompasses2Line", function() { return RiCompasses2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCompassesLine", function() { return RiCompassesLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiContrast2Line", function() { return RiContrast2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiContrastDrop2Line", function() { return RiContrastDrop2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiContrastDropLine", function() { return RiContrastDropLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiContrastLine", function() { return RiContrastLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCrop2Line", function() { return RiCrop2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCropLine", function() { return RiCropLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDragDropLine", function() { return RiDragDropLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDragMove2Line", function() { return RiDragMove2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDragMoveLine", function() { return RiDragMoveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDropLine", function() { return RiDropLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEdit2Line", function() { return RiEdit2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEditBoxLine", function() { return RiEditBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEditCircleLine", function() { return RiEditCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEditLine", function() { return RiEditLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEraserLine", function() { return RiEraserLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFocus2Line", function() { return RiFocus2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFocus3Line", function() { return RiFocus3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFocusLine", function() { return RiFocusLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGridLine", function() { return RiGridLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHammerLine", function() { return RiHammerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiInputMethodLine", function() { return RiInputMethodLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayout2Line", function() { return RiLayout2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayout3Line", function() { return RiLayout3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayout4Line", function() { return RiLayout4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayout5Line", function() { return RiLayout5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayout6Line", function() { return RiLayout6Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutBottom2Line", function() { return RiLayoutBottom2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutBottomLine", function() { return RiLayoutBottomLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutColumnLine", function() { return RiLayoutColumnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutGridLine", function() { return RiLayoutGridLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutLeft2Line", function() { return RiLayoutLeft2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutLeftLine", function() { return RiLayoutLeftLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutLine", function() { return RiLayoutLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutMasonryLine", function() { return RiLayoutMasonryLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutRight2Line", function() { return RiLayoutRight2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutRightLine", function() { return RiLayoutRightLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutRowLine", function() { return RiLayoutRowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutTop2Line", function() { return RiLayoutTop2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLayoutTopLine", function() { return RiLayoutTopLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMagicLine", function() { return RiMagicLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMarkPenLine", function() { return RiMarkPenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMarkupLine", function() { return RiMarkupLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPaintBrushLine", function() { return RiPaintBrushLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPaintLine", function() { return RiPaintLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPaletteLine", function() { return RiPaletteLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPantoneLine", function() { return RiPantoneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPenNibLine", function() { return RiPenNibLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPencilLine", function() { return RiPencilLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPencilRuler2Line", function() { return RiPencilRuler2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPencilRulerLine", function() { return RiPencilRulerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiQuillPenLine", function() { return RiQuillPenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRuler2Line", function() { return RiRuler2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRulerLine", function() { return RiRulerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiScissors2Line", function() { return RiScissors2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiScissorsCutLine", function() { return RiScissorsCutLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiScissorsLine", function() { return RiScissorsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiScreenshot2Line", function() { return RiScreenshot2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiScreenshotLine", function() { return RiScreenshotLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShape2Line", function() { return RiShape2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShapeLine", function() { return RiShapeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSipLine", function() { return RiSipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSliceLine", function() { return RiSliceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTBoxLine", function() { return RiTBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTableAltLine", function() { return RiTableAltLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTableLine", function() { return RiTableLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiToolsLine", function() { return RiToolsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBracesLine", function() { return RiBracesLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBracketsLine", function() { return RiBracketsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBug2Line", function() { return RiBug2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBugLine", function() { return RiBugLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCodeBoxLine", function() { return RiCodeBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCodeLine", function() { return RiCodeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCodeSLine", function() { return RiCodeSLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCodeSSlashLine", function() { return RiCodeSSlashLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCommandLine", function() { return RiCommandLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCss3Line", function() { return RiCss3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCursorLine", function() { return RiCursorLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGitBranchLine", function() { return RiGitBranchLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGitCommitLine", function() { return RiGitCommitLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGitMergeLine", function() { return RiGitMergeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGitPullRequestLine", function() { return RiGitPullRequestLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGitRepositoryCommitsLine", function() { return RiGitRepositoryCommitsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGitRepositoryLine", function() { return RiGitRepositoryLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGitRepositoryPrivateLine", function() { return RiGitRepositoryPrivateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHtml5Line", function() { return RiHtml5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiParenthesesLine", function() { return RiParenthesesLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStackshareLine", function() { return RiStackshareLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTerminalBoxLine", function() { return RiTerminalBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTerminalLine", function() { return RiTerminalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTerminalWindowLine", function() { return RiTerminalWindowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAirplayLine", function() { return RiAirplayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBattery2ChargeLine", function() { return RiBattery2ChargeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBattery2Line", function() { return RiBattery2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBatteryChargeLine", function() { return RiBatteryChargeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBatteryLine", function() { return RiBatteryLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBatteryLowLine", function() { return RiBatteryLowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBatterySaverLine", function() { return RiBatterySaverLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBatteryShareLine", function() { return RiBatteryShareLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCastLine", function() { return RiCastLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCellphoneLine", function() { return RiCellphoneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiComputerLine", function() { return RiComputerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCpuLine", function() { return RiCpuLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDatabase2Line", function() { return RiDatabase2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDatabaseLine", function() { return RiDatabaseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeviceLine", function() { return RiDeviceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeviceRecoverLine", function() { return RiDeviceRecoverLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDualSim1Line", function() { return RiDualSim1Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDualSim2Line", function() { return RiDualSim2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGamepadLine", function() { return RiGamepadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGradienterLine", function() { return RiGradienterLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHardDrive2Line", function() { return RiHardDrive2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHardDriveLine", function() { return RiHardDriveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHotspotLine", function() { return RiHotspotLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiInstallLine", function() { return RiInstallLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiKeyboardBoxLine", function() { return RiKeyboardBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiKeyboardLine", function() { return RiKeyboardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMacLine", function() { return RiMacLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMacbookLine", function() { return RiMacbookLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMouseLine", function() { return RiMouseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPhoneFindLine", function() { return RiPhoneFindLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPhoneLine", function() { return RiPhoneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPhoneLockLine", function() { return RiPhoneLockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRadarLine", function() { return RiRadarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRemoteControl2Line", function() { return RiRemoteControl2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRemoteControlLine", function() { return RiRemoteControlLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRouterLine", function() { return RiRouterLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSave2Line", function() { return RiSave2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSave3Line", function() { return RiSave3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSaveLine", function() { return RiSaveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSdCardLine", function() { return RiSdCardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSdCardMiniLine", function() { return RiSdCardMiniLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSensorLine", function() { return RiSensorLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiServerLine", function() { return RiServerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSimCard2Line", function() { return RiSimCard2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSimCardLine", function() { return RiSimCardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSmartphoneLine", function() { return RiSmartphoneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTabletLine", function() { return RiTabletLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTv2Line", function() { return RiTv2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTvLine", function() { return RiTvLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUDiskLine", function() { return RiUDiskLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUninstallLine", function() { return RiUninstallLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArticleLine", function() { return RiArticleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBillLine", function() { return RiBillLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBook2Line", function() { return RiBook2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBook3Line", function() { return RiBook3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBookLine", function() { return RiBookLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBookMarkLine", function() { return RiBookMarkLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBookOpenLine", function() { return RiBookOpenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBookReadLine", function() { return RiBookReadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBookletLine", function() { return RiBookletLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiClipboardLine", function() { return RiClipboardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiContactsBook2Line", function() { return RiContactsBook2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiContactsBookLine", function() { return RiContactsBookLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiContactsBookUploadLine", function() { return RiContactsBookUploadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFile2Line", function() { return RiFile2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFile3Line", function() { return RiFile3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFile4Line", function() { return RiFile4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileAddLine", function() { return RiFileAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileChart2Line", function() { return RiFileChart2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileChartLine", function() { return RiFileChartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileCloudLine", function() { return RiFileCloudLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileCodeLine", function() { return RiFileCodeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileCopy2Line", function() { return RiFileCopy2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileCopyLine", function() { return RiFileCopyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileDamageLine", function() { return RiFileDamageLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileDownloadLine", function() { return RiFileDownloadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileEditLine", function() { return RiFileEditLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileExcel2Line", function() { return RiFileExcel2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileExcelLine", function() { return RiFileExcelLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileForbidLine", function() { return RiFileForbidLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileHwpLine", function() { return RiFileHwpLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileInfoLine", function() { return RiFileInfoLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileLine", function() { return RiFileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileList2Line", function() { return RiFileList2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileList3Line", function() { return RiFileList3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileListLine", function() { return RiFileListLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileLockLine", function() { return RiFileLockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileMarkLine", function() { return RiFileMarkLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileMusicLine", function() { return RiFileMusicLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilePaper2Line", function() { return RiFilePaper2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilePaperLine", function() { return RiFilePaperLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilePdfLine", function() { return RiFilePdfLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilePpt2Line", function() { return RiFilePpt2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilePptLine", function() { return RiFilePptLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileReduceLine", function() { return RiFileReduceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileSearchLine", function() { return RiFileSearchLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileSettingsLine", function() { return RiFileSettingsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileShield2Line", function() { return RiFileShield2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileShieldLine", function() { return RiFileShieldLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileShredLine", function() { return RiFileShredLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileTextLine", function() { return RiFileTextLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileTransferLine", function() { return RiFileTransferLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileUnknowLine", function() { return RiFileUnknowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileUploadLine", function() { return RiFileUploadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileUserLine", function() { return RiFileUserLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileWarningLine", function() { return RiFileWarningLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileWord2Line", function() { return RiFileWord2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileWordLine", function() { return RiFileWordLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFileZipLine", function() { return RiFileZipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolder2Line", function() { return RiFolder2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolder3Line", function() { return RiFolder3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolder4Line", function() { return RiFolder4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolder5Line", function() { return RiFolder5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderAddLine", function() { return RiFolderAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderChart2Line", function() { return RiFolderChart2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderChartLine", function() { return RiFolderChartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderDownloadLine", function() { return RiFolderDownloadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderForbidLine", function() { return RiFolderForbidLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderInfoLine", function() { return RiFolderInfoLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderKeyholeLine", function() { return RiFolderKeyholeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderLine", function() { return RiFolderLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderLockLine", function() { return RiFolderLockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderMusicLine", function() { return RiFolderMusicLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderOpenLine", function() { return RiFolderOpenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderReceivedLine", function() { return RiFolderReceivedLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderReduceLine", function() { return RiFolderReduceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderSettingsLine", function() { return RiFolderSettingsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderSharedLine", function() { return RiFolderSharedLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderShield2Line", function() { return RiFolderShield2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderShieldLine", function() { return RiFolderShieldLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderTransferLine", function() { return RiFolderTransferLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderUnknowLine", function() { return RiFolderUnknowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderUploadLine", function() { return RiFolderUploadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderUserLine", function() { return RiFolderUserLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderWarningLine", function() { return RiFolderWarningLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFolderZipLine", function() { return RiFolderZipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFoldersLine", function() { return RiFoldersLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiKeynoteLine", function() { return RiKeynoteLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMarkdownLine", function() { return RiMarkdownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNewspaperLine", function() { return RiNewspaperLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNumbersLine", function() { return RiNumbersLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPagesLine", function() { return RiPagesLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPassportLine", function() { return RiPassportLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStickyNote2Line", function() { return RiStickyNote2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStickyNoteLine", function() { return RiStickyNoteLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTaskLine", function() { return RiTaskLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTodoLine", function() { return RiTodoLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAuctionLine", function() { return RiAuctionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBankCard2Line", function() { return RiBankCard2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBankCardLine", function() { return RiBankCardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBitCoinLine", function() { return RiBitCoinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCoinLine", function() { return RiCoinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCoinsLine", function() { return RiCoinsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCopperCoinLine", function() { return RiCopperCoinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCopperDiamondLine", function() { return RiCopperDiamondLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCoupon2Line", function() { return RiCoupon2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCoupon3Line", function() { return RiCoupon3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCoupon4Line", function() { return RiCoupon4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCoupon5Line", function() { return RiCoupon5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCouponLine", function() { return RiCouponLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCurrencyLine", function() { return RiCurrencyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiExchangeBoxLine", function() { return RiExchangeBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiExchangeCnyLine", function() { return RiExchangeCnyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiExchangeDollarLine", function() { return RiExchangeDollarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiExchangeFundsLine", function() { return RiExchangeFundsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiExchangeLine", function() { return RiExchangeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFundsBoxLine", function() { return RiFundsBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFundsLine", function() { return RiFundsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGift2Line", function() { return RiGift2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGiftLine", function() { return RiGiftLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHandCoinLine", function() { return RiHandCoinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHandHeartLine", function() { return RiHandHeartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiIncreaseDecreaseLine", function() { return RiIncreaseDecreaseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoneyCnyBoxLine", function() { return RiMoneyCnyBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoneyCnyCircleLine", function() { return RiMoneyCnyCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoneyDollarBoxLine", function() { return RiMoneyDollarBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoneyDollarCircleLine", function() { return RiMoneyDollarCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoneyEuroBoxLine", function() { return RiMoneyEuroBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoneyEuroCircleLine", function() { return RiMoneyEuroCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoneyPoundBoxLine", function() { return RiMoneyPoundBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoneyPoundCircleLine", function() { return RiMoneyPoundCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPercentLine", function() { return RiPercentLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPriceTag2Line", function() { return RiPriceTag2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPriceTag3Line", function() { return RiPriceTag3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPriceTagLine", function() { return RiPriceTagLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRedPacketLine", function() { return RiRedPacketLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRefund2Line", function() { return RiRefund2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRefundLine", function() { return RiRefundLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSafe2Line", function() { return RiSafe2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSafeLine", function() { return RiSafeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSecurePaymentLine", function() { return RiSecurePaymentLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShoppingBag2Line", function() { return RiShoppingBag2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShoppingBag3Line", function() { return RiShoppingBag3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShoppingBagLine", function() { return RiShoppingBagLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShoppingBasket2Line", function() { return RiShoppingBasket2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShoppingBasketLine", function() { return RiShoppingBasketLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShoppingCart2Line", function() { return RiShoppingCart2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShoppingCartLine", function() { return RiShoppingCartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStockLine", function() { return RiStockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSwapBoxLine", function() { return RiSwapBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSwapLine", function() { return RiSwapLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTicket2Line", function() { return RiTicket2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTicketLine", function() { return RiTicketLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTrophyLine", function() { return RiTrophyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVipCrown2Line", function() { return RiVipCrown2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVipCrownLine", function() { return RiVipCrownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVipDiamondLine", function() { return RiVipDiamondLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVipLine", function() { return RiVipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWallet2Line", function() { return RiWallet2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWallet3Line", function() { return RiWallet3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWalletLine", function() { return RiWalletLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWaterFlashLine", function() { return RiWaterFlashLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAlipayLine", function() { return RiAlipayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAmazonLine", function() { return RiAmazonLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAndroidLine", function() { return RiAndroidLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAngularjsLine", function() { return RiAngularjsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAppStoreLine", function() { return RiAppStoreLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAppleLine", function() { return RiAppleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBaiduLine", function() { return RiBaiduLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBehanceLine", function() { return RiBehanceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBilibiliLine", function() { return RiBilibiliLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChromeLine", function() { return RiChromeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCodepenLine", function() { return RiCodepenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCoreosLine", function() { return RiCoreosLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDingdingLine", function() { return RiDingdingLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDiscordLine", function() { return RiDiscordLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDoubanLine", function() { return RiDoubanLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDribbbleLine", function() { return RiDribbbleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDriveLine", function() { return RiDriveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDropboxLine", function() { return RiDropboxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEdgeLine", function() { return RiEdgeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEvernoteLine", function() { return RiEvernoteLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFacebookBoxLine", function() { return RiFacebookBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFacebookCircleLine", function() { return RiFacebookCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFacebookLine", function() { return RiFacebookLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFirefoxLine", function() { return RiFirefoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFlutterLine", function() { return RiFlutterLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGatsbyLine", function() { return RiGatsbyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGithubLine", function() { return RiGithubLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGitlabLine", function() { return RiGitlabLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGoogleLine", function() { return RiGoogleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGooglePlayLine", function() { return RiGooglePlayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiIeLine", function() { return RiIeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiInstagramLine", function() { return RiInstagramLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiInvisionLine", function() { return RiInvisionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiKakaoTalkLine", function() { return RiKakaoTalkLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLineLine", function() { return RiLineLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLinkedinBoxLine", function() { return RiLinkedinBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLinkedinLine", function() { return RiLinkedinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMastercardLine", function() { return RiMastercardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMastodonLine", function() { return RiMastodonLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMediumLine", function() { return RiMediumLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMessengerLine", function() { return RiMessengerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMiniProgramLine", function() { return RiMiniProgramLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNeteaseCloudMusicLine", function() { return RiNeteaseCloudMusicLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNetflixLine", function() { return RiNetflixLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiOperaLine", function() { return RiOperaLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPatreonLine", function() { return RiPatreonLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPaypalLine", function() { return RiPaypalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPinterestLine", function() { return RiPinterestLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlaystationLine", function() { return RiPlaystationLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiProductHuntLine", function() { return RiProductHuntLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiQqLine", function() { return RiQqLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiReactjsLine", function() { return RiReactjsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRedditLine", function() { return RiRedditLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRemixiconLine", function() { return RiRemixiconLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSafariLine", function() { return RiSafariLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSkypeLine", function() { return RiSkypeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSlackLine", function() { return RiSlackLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSnapchatLine", function() { return RiSnapchatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSoundcloudLine", function() { return RiSoundcloudLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpectrumLine", function() { return RiSpectrumLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpotifyLine", function() { return RiSpotifyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStackOverflowLine", function() { return RiStackOverflowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSwitchLine", function() { return RiSwitchLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTaobaoLine", function() { return RiTaobaoLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTelegramLine", function() { return RiTelegramLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTrelloLine", function() { return RiTrelloLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTumblrLine", function() { return RiTumblrLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTwitchLine", function() { return RiTwitchLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTwitterLine", function() { return RiTwitterLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUbuntuLine", function() { return RiUbuntuLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVisaLine", function() { return RiVisaLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVuejsLine", function() { return RiVuejsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWechat2Line", function() { return RiWechat2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWechatLine", function() { return RiWechatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWechatPayLine", function() { return RiWechatPayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWeiboLine", function() { return RiWeiboLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWhatsappLine", function() { return RiWhatsappLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWindowsLine", function() { return RiWindowsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiXboxLine", function() { return RiXboxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiXingLine", function() { return RiXingLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiYoutubeLine", function() { return RiYoutubeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiZcoolLine", function() { return RiZcoolLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiZhihuLine", function() { return RiZhihuLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAnchorLine", function() { return RiAnchorLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBarricadeLine", function() { return RiBarricadeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBikeLine", function() { return RiBikeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBus2Line", function() { return RiBus2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBusLine", function() { return RiBusLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBusWifiLine", function() { return RiBusWifiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCarLine", function() { return RiCarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCarWashingLine", function() { return RiCarWashingLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChargingPile2Line", function() { return RiChargingPile2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChargingPileLine", function() { return RiChargingPileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiChinaRailwayLine", function() { return RiChinaRailwayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCompass2Line", function() { return RiCompass2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCompass3Line", function() { return RiCompass3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCompass4Line", function() { return RiCompass4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCompassDiscoverLine", function() { return RiCompassDiscoverLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCompassLine", function() { return RiCompassLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCupLine", function() { return RiCupLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDirectionLine", function() { return RiDirectionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEBike2Line", function() { return RiEBike2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEBikeLine", function() { return RiEBikeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEarthLine", function() { return RiEarthLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFlightLandLine", function() { return RiFlightLandLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFlightTakeoffLine", function() { return RiFlightTakeoffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFootprintLine", function() { return RiFootprintLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGasStationLine", function() { return RiGasStationLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGlobeLine", function() { return RiGlobeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGobletLine", function() { return RiGobletLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGuideLine", function() { return RiGuideLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHotelBedLine", function() { return RiHotelBedLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLifebuoyLine", function() { return RiLifebuoyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMap2Line", function() { return RiMap2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapLine", function() { return RiMapLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPin2Line", function() { return RiMapPin2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPin3Line", function() { return RiMapPin3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPin4Line", function() { return RiMapPin4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPin5Line", function() { return RiMapPin5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPinAddLine", function() { return RiMapPinAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPinLine", function() { return RiMapPinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPinRangeLine", function() { return RiMapPinRangeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPinTimeLine", function() { return RiMapPinTimeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMapPinUserLine", function() { return RiMapPinUserLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMotorbikeLine", function() { return RiMotorbikeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNavigationLine", function() { return RiNavigationLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiOilLine", function() { return RiOilLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiParkingBoxLine", function() { return RiParkingBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiParkingLine", function() { return RiParkingLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPinDistanceLine", function() { return RiPinDistanceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlaneLine", function() { return RiPlaneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPoliceCarLine", function() { return RiPoliceCarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPushpin2Line", function() { return RiPushpin2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPushpinLine", function() { return RiPushpinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRestaurant2Line", function() { return RiRestaurant2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRestaurantLine", function() { return RiRestaurantLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRidingLine", function() { return RiRidingLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRoadMapLine", function() { return RiRoadMapLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRoadsterLine", function() { return RiRoadsterLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRocket2Line", function() { return RiRocket2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRocketLine", function() { return RiRocketLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRouteLine", function() { return RiRouteLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRunLine", function() { return RiRunLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSailboatLine", function() { return RiSailboatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShip2Line", function() { return RiShip2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShipLine", function() { return RiShipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSignalTowerLine", function() { return RiSignalTowerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpaceShipLine", function() { return RiSpaceShipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSteering2Line", function() { return RiSteering2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSteeringLine", function() { return RiSteeringLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSubwayLine", function() { return RiSubwayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSubwayWifiLine", function() { return RiSubwayWifiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTakeawayLine", function() { return RiTakeawayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTaxiLine", function() { return RiTaxiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTaxiWifiLine", function() { return RiTaxiWifiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTrafficLightLine", function() { return RiTrafficLightLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTrainLine", function() { return RiTrainLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTrainWifiLine", function() { return RiTrainWifiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTreasureMapLine", function() { return RiTreasureMapLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTruckLine", function() { return RiTruckLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWalkLine", function() { return RiWalkLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ri4KLine", function() { return Ri4KLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAlbumLine", function() { return RiAlbumLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAspectRatioLine", function() { return RiAspectRatioLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBroadcastLine", function() { return RiBroadcastLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCamera2Line", function() { return RiCamera2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCamera3Line", function() { return RiCamera3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCameraLensLine", function() { return RiCameraLensLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCameraLine", function() { return RiCameraLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCameraOffLine", function() { return RiCameraOffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCameraSwitchLine", function() { return RiCameraSwitchLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiClapperboardLine", function() { return RiClapperboardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDiscLine", function() { return RiDiscLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDvLine", function() { return RiDvLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDvdLine", function() { return RiDvdLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEjectLine", function() { return RiEjectLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEqualizerLine", function() { return RiEqualizerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilmLine", function() { return RiFilmLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFullscreenExitLine", function() { return RiFullscreenExitLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFullscreenLine", function() { return RiFullscreenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGalleryLine", function() { return RiGalleryLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGalleryUploadLine", function() { return RiGalleryUploadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHdLine", function() { return RiHdLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHeadphoneLine", function() { return RiHeadphoneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHqLine", function() { return RiHqLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiImage2Line", function() { return RiImage2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiImageAddLine", function() { return RiImageAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiImageLine", function() { return RiImageLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLandscapeLine", function() { return RiLandscapeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLiveLine", function() { return RiLiveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMic2Line", function() { return RiMic2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMicLine", function() { return RiMicLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMicOffLine", function() { return RiMicOffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMovie2Line", function() { return RiMovie2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMovieLine", function() { return RiMovieLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMusic2Line", function() { return RiMusic2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMusicLine", function() { return RiMusicLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMvLine", function() { return RiMvLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNotification2Line", function() { return RiNotification2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNotification3Line", function() { return RiNotification3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNotification4Line", function() { return RiNotification4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNotificationLine", function() { return RiNotificationLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNotificationOffLine", function() { return RiNotificationOffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiOrderPlayLine", function() { return RiOrderPlayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPauseCircleLine", function() { return RiPauseCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPauseLine", function() { return RiPauseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPauseMiniLine", function() { return RiPauseMiniLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPhoneCameraLine", function() { return RiPhoneCameraLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPictureInPicture2Line", function() { return RiPictureInPicture2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPictureInPictureExitLine", function() { return RiPictureInPictureExitLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPictureInPictureLine", function() { return RiPictureInPictureLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlayCircleLine", function() { return RiPlayCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlayLine", function() { return RiPlayLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlayListAddLine", function() { return RiPlayListAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlayListLine", function() { return RiPlayListLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlayMiniLine", function() { return RiPlayMiniLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPolaroid2Line", function() { return RiPolaroid2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPolaroidLine", function() { return RiPolaroidLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRadio2Line", function() { return RiRadio2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRadioLine", function() { return RiRadioLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRecordCircleLine", function() { return RiRecordCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRepeat2Line", function() { return RiRepeat2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRepeatLine", function() { return RiRepeatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRepeatOneLine", function() { return RiRepeatOneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRewindLine", function() { return RiRewindLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRewindMiniLine", function() { return RiRewindMiniLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRhythmLine", function() { return RiRhythmLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShuffleLine", function() { return RiShuffleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSkipBackLine", function() { return RiSkipBackLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSkipBackMiniLine", function() { return RiSkipBackMiniLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSkipForwardLine", function() { return RiSkipForwardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSkipForwardMiniLine", function() { return RiSkipForwardMiniLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSoundModuleLine", function() { return RiSoundModuleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpeaker2Line", function() { return RiSpeaker2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpeaker3Line", function() { return RiSpeaker3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpeakerLine", function() { return RiSpeakerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpeedLine", function() { return RiSpeedLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpeedMiniLine", function() { return RiSpeedMiniLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStopCircleLine", function() { return RiStopCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStopLine", function() { return RiStopLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStopMiniLine", function() { return RiStopMiniLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSurroundSoundLine", function() { return RiSurroundSoundLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTapeLine", function() { return RiTapeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVideoLine", function() { return RiVideoLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVidicon2Line", function() { return RiVidicon2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVidiconLine", function() { return RiVidiconLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVoiceprintLine", function() { return RiVoiceprintLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVolumeDownLine", function() { return RiVolumeDownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVolumeMuteLine", function() { return RiVolumeMuteLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVolumeOffVibrateLine", function() { return RiVolumeOffVibrateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVolumeUpLine", function() { return RiVolumeUpLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVolumeVibrateLine", function() { return RiVolumeVibrateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWebcamLine", function() { return RiWebcamLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBasketballLine", function() { return RiBasketballLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBellLine", function() { return RiBellLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBilliardsLine", function() { return RiBilliardsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBoxingLine", function() { return RiBoxingLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCake2Line", function() { return RiCake2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCake3Line", function() { return RiCake3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCakeLine", function() { return RiCakeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCharacterRecognitionLine", function() { return RiCharacterRecognitionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDoorLockBoxLine", function() { return RiDoorLockBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDoorLockLine", function() { return RiDoorLockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFireLine", function() { return RiFireLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFlaskLine", function() { return RiFlaskLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFootballLine", function() { return RiFootballLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGameLine", function() { return RiGameLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHandbagLine", function() { return RiHandbagLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHeartsLine", function() { return RiHeartsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiKey2Line", function() { return RiKey2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiKeyLine", function() { return RiKeyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiKnifeBloodLine", function() { return RiKnifeBloodLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiKnifeLine", function() { return RiKnifeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLightbulbFlashLine", function() { return RiLightbulbFlashLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLightbulbLine", function() { return RiLightbulbLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiOutlet2Line", function() { return RiOutlet2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiOutletLine", function() { return RiOutletLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPingPongLine", function() { return RiPingPongLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlug2Line", function() { return RiPlug2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiPlugLine", function() { return RiPlugLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiReservedLine", function() { return RiReservedLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShirtLine", function() { return RiShirtLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSwordLine", function() { return RiSwordLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTShirt2Line", function() { return RiTShirt2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTShirtAirLine", function() { return RiTShirtAirLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTShirtLine", function() { return RiTShirtLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUmbrellaLine", function() { return RiUmbrellaLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiVoiceRecognitionLine", function() { return RiVoiceRecognitionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAddBoxLine", function() { return RiAddBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAddCircleLine", function() { return RiAddCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAddLine", function() { return RiAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAlarmLine", function() { return RiAlarmLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAlarmWarningLine", function() { return RiAlarmWarningLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAlertLine", function() { return RiAlertLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiApps2Line", function() { return RiApps2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAppsLine", function() { return RiAppsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowDownCircleLine", function() { return RiArrowDownCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowDownLine", function() { return RiArrowDownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowDownSLine", function() { return RiArrowDownSLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowDropDownLine", function() { return RiArrowDropDownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowDropLeftLine", function() { return RiArrowDropLeftLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowDropRightLine", function() { return RiArrowDropRightLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowDropUpLine", function() { return RiArrowDropUpLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowGoBackLine", function() { return RiArrowGoBackLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowGoForwardLine", function() { return RiArrowGoForwardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowLeftCircleLine", function() { return RiArrowLeftCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowLeftDownLine", function() { return RiArrowLeftDownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowLeftLine", function() { return RiArrowLeftLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowLeftRightLine", function() { return RiArrowLeftRightLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowLeftSLine", function() { return RiArrowLeftSLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowLeftUpLine", function() { return RiArrowLeftUpLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowRightCircleLine", function() { return RiArrowRightCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowRightDownLine", function() { return RiArrowRightDownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowRightLine", function() { return RiArrowRightLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowRightSLine", function() { return RiArrowRightSLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowRightUpLine", function() { return RiArrowRightUpLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowUpCircleLine", function() { return RiArrowUpCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowUpDownLine", function() { return RiArrowUpDownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowUpLine", function() { return RiArrowUpLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiArrowUpSLine", function() { return RiArrowUpSLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBarcodeBoxLine", function() { return RiBarcodeBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBarcodeLine", function() { return RiBarcodeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBaseStationLine", function() { return RiBaseStationLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBluetoothConnectLine", function() { return RiBluetoothConnectLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBluetoothLine", function() { return RiBluetoothLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckDoubleLine", function() { return RiCheckDoubleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckLine", function() { return RiCheckLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckboxBlankCircleLine", function() { return RiCheckboxBlankCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckboxBlankLine", function() { return RiCheckboxBlankLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckboxCircleLine", function() { return RiCheckboxCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckboxIndeterminateLine", function() { return RiCheckboxIndeterminateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckboxLine", function() { return RiCheckboxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckboxMultipleBlankLine", function() { return RiCheckboxMultipleBlankLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCheckboxMultipleLine", function() { return RiCheckboxMultipleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCloseCircleLine", function() { return RiCloseCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCloseLine", function() { return RiCloseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDashboardLine", function() { return RiDashboardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBack2Line", function() { return RiDeleteBack2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBackLine", function() { return RiDeleteBackLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBin2Line", function() { return RiDeleteBin2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBin3Line", function() { return RiDeleteBin3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBin4Line", function() { return RiDeleteBin4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBin5Line", function() { return RiDeleteBin5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBin6Line", function() { return RiDeleteBin6Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBin7Line", function() { return RiDeleteBin7Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDeleteBinLine", function() { return RiDeleteBinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDivideLine", function() { return RiDivideLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDownload2Line", function() { return RiDownload2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDownloadCloud2Line", function() { return RiDownloadCloud2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDownloadCloudLine", function() { return RiDownloadCloudLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDownloadLine", function() { return RiDownloadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiErrorWarningLine", function() { return RiErrorWarningLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiExternalLinkLine", function() { return RiExternalLinkLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEye2Line", function() { return RiEye2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEyeCloseLine", function() { return RiEyeCloseLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEyeLine", function() { return RiEyeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEyeOffLine", function() { return RiEyeOffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilter2Line", function() { return RiFilter2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilter3Line", function() { return RiFilter3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFilterLine", function() { return RiFilterLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFindReplaceLine", function() { return RiFindReplaceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFingerprint2Line", function() { return RiFingerprint2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFingerprintLine", function() { return RiFingerprintLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiForbid2Line", function() { return RiForbid2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiForbidLine", function() { return RiForbidLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFunctionLine", function() { return RiFunctionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGpsLine", function() { return RiGpsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHeart2Line", function() { return RiHeart2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHeartAddLine", function() { return RiHeartAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHeartLine", function() { return RiHeartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiIndeterminateCircleLine", function() { return RiIndeterminateCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiInformationLine", function() { return RiInformationLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiListSettingsLine", function() { return RiListSettingsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLoader2Line", function() { return RiLoader2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLoader3Line", function() { return RiLoader3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLoader4Line", function() { return RiLoader4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLoader5Line", function() { return RiLoader5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLoaderLine", function() { return RiLoaderLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLock2Line", function() { return RiLock2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLockLine", function() { return RiLockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLockPasswordLine", function() { return RiLockPasswordLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLockUnlockLine", function() { return RiLockUnlockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLoginBoxLine", function() { return RiLoginBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLoginCircleLine", function() { return RiLoginCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLogoutBoxLine", function() { return RiLogoutBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLogoutBoxRLine", function() { return RiLogoutBoxRLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLogoutCircleLine", function() { return RiLogoutCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiLogoutCircleRLine", function() { return RiLogoutCircleRLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMenu2Line", function() { return RiMenu2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMenu3Line", function() { return RiMenu3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMenu4Line", function() { return RiMenu4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMenu5Line", function() { return RiMenu5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMenuAddLine", function() { return RiMenuAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMenuLine", function() { return RiMenuLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMore2Line", function() { return RiMore2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoreLine", function() { return RiMoreLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiNotificationBadgeLine", function() { return RiNotificationBadgeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiQrCodeLine", function() { return RiQrCodeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiQrScan2Line", function() { return RiQrScan2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiQrScanLine", function() { return RiQrScanLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiQuestionLine", function() { return RiQuestionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRadioButtonLine", function() { return RiRadioButtonLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRefreshLine", function() { return RiRefreshLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRestartLine", function() { return RiRestartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRotateLockLine", function() { return RiRotateLockLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRssLine", function() { return RiRssLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiScan2Line", function() { return RiScan2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiScanLine", function() { return RiScanLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSearch2Line", function() { return RiSearch2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSearchEyeLine", function() { return RiSearchEyeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSearchLine", function() { return RiSearchLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSettings2Line", function() { return RiSettings2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSettings3Line", function() { return RiSettings3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSettings4Line", function() { return RiSettings4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSettings5Line", function() { return RiSettings5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSettings6Line", function() { return RiSettings6Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSettingsLine", function() { return RiSettingsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShareBoxLine", function() { return RiShareBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShareCircleLine", function() { return RiShareCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShareForward2Line", function() { return RiShareForward2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShareForwardBoxLine", function() { return RiShareForwardBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShareForwardLine", function() { return RiShareForwardLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShareLine", function() { return RiShareLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShieldCrossLine", function() { return RiShieldCrossLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShieldFlashLine", function() { return RiShieldFlashLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShieldKeyholeLine", function() { return RiShieldKeyholeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShieldLine", function() { return RiShieldLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShieldStarLine", function() { return RiShieldStarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShieldUserLine", function() { return RiShieldUserLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShutDownLine", function() { return RiShutDownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSideBarLine", function() { return RiSideBarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpam2Line", function() { return RiSpam2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpam3Line", function() { return RiSpam3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpamLine", function() { return RiSpamLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStarHalfLine", function() { return RiStarHalfLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStarHalfSLine", function() { return RiStarHalfSLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStarLine", function() { return RiStarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStarSLine", function() { return RiStarSLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSubtractLine", function() { return RiSubtractLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiThumbDownLine", function() { return RiThumbDownLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiThumbUpLine", function() { return RiThumbUpLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTimeLine", function() { return RiTimeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTimer2Line", function() { return RiTimer2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTimerFlashLine", function() { return RiTimerFlashLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTimerLine", function() { return RiTimerLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiToggleLine", function() { return RiToggleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUpload2Line", function() { return RiUpload2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUploadCloud2Line", function() { return RiUploadCloud2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUploadCloudLine", function() { return RiUploadCloudLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUploadLine", function() { return RiUploadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWifiLine", function() { return RiWifiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWifiOffLine", function() { return RiWifiOffLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiZoomInLine", function() { return RiZoomInLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiZoomOutLine", function() { return RiZoomOutLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAccountBoxLine", function() { return RiAccountBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAccountCircleLine", function() { return RiAccountCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAccountPinBoxLine", function() { return RiAccountPinBoxLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAccountPinCircleLine", function() { return RiAccountPinCircleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAdminLine", function() { return RiAdminLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiAliensLine", function() { return RiAliensLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBearSmileLine", function() { return RiBearSmileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBodyScanLine", function() { return RiBodyScanLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiContactsLine", function() { return RiContactsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCriminalLine", function() { return RiCriminalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEmotion2Line", function() { return RiEmotion2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEmotionHappyLine", function() { return RiEmotionHappyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEmotionLaughLine", function() { return RiEmotionLaughLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEmotionLine", function() { return RiEmotionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEmotionNormalLine", function() { return RiEmotionNormalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEmotionSadLine", function() { return RiEmotionSadLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEmotionUnhappyLine", function() { return RiEmotionUnhappyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGenderlessLine", function() { return RiGenderlessLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGhost2Line", function() { return RiGhost2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGhostLine", function() { return RiGhostLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGhostSmileLine", function() { return RiGhostSmileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGroup2Line", function() { return RiGroup2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiGroupLine", function() { return RiGroupLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMenLine", function() { return RiMenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMickeyLine", function() { return RiMickeyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiOpenArmLine", function() { return RiOpenArmLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiParentLine", function() { return RiParentLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRobotLine", function() { return RiRobotLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSkull2Line", function() { return RiSkull2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSkullLine", function() { return RiSkullLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSpyLine", function() { return RiSpyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiStarSmileLine", function() { return RiStarSmileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTeamLine", function() { return RiTeamLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTravestiLine", function() { return RiTravestiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUser2Line", function() { return RiUser2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUser3Line", function() { return RiUser3Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUser4Line", function() { return RiUser4Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUser5Line", function() { return RiUser5Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUser6Line", function() { return RiUser6Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserAddLine", function() { return RiUserAddLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserFollowLine", function() { return RiUserFollowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserHeartLine", function() { return RiUserHeartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserLine", function() { return RiUserLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserLocationLine", function() { return RiUserLocationLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserReceived2Line", function() { return RiUserReceived2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserReceivedLine", function() { return RiUserReceivedLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserSearchLine", function() { return RiUserSearchLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserSettingsLine", function() { return RiUserSettingsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserShared2Line", function() { return RiUserShared2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserSharedLine", function() { return RiUserSharedLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserSmileLine", function() { return RiUserSmileLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserStarLine", function() { return RiUserStarLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserUnfollowLine", function() { return RiUserUnfollowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUserVoiceLine", function() { return RiUserVoiceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWomenLine", function() { return RiWomenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiBlazeLine", function() { return RiBlazeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCelsiusLine", function() { return RiCelsiusLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCloudWindyLine", function() { return RiCloudWindyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCloudy2Line", function() { return RiCloudy2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiCloudyLine", function() { return RiCloudyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiDrizzleLine", function() { return RiDrizzleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiEarthquakeLine", function() { return RiEarthquakeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFahrenheitLine", function() { return RiFahrenheitLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFlashlightLine", function() { return RiFlashlightLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFloodLine", function() { return RiFloodLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiFoggyLine", function() { return RiFoggyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHailLine", function() { return RiHailLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHaze2Line", function() { return RiHaze2Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHazeLine", function() { return RiHazeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiHeavyShowersLine", function() { return RiHeavyShowersLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMeteorLine", function() { return RiMeteorLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMistLine", function() { return RiMistLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoonClearLine", function() { return RiMoonClearLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoonCloudyLine", function() { return RiMoonCloudyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoonFoggyLine", function() { return RiMoonFoggyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiMoonLine", function() { return RiMoonLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRainbowLine", function() { return RiRainbowLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiRainyLine", function() { return RiRainyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiShowersLine", function() { return RiShowersLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSnowyLine", function() { return RiSnowyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSunCloudyLine", function() { return RiSunCloudyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSunFoggyLine", function() { return RiSunFoggyLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiSunLine", function() { return RiSunLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTempColdLine", function() { return RiTempColdLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTempHotLine", function() { return RiTempHotLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiThunderstormsLine", function() { return RiThunderstormsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTornadoLine", function() { return RiTornadoLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiTyphoonLine", function() { return RiTyphoonLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiWindyLine", function() { return RiWindyLine; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/esm/index.js");
// THIS FILE IS AUTO GENERATED

var RiAncientGateLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M18.901 10a2.999 2.999 0 0 0 4.075 1.113 3.5 3.5 0 0 1-1.975 3.55L21 21h-7v-2a2 2 0 0 0-1.85-1.995L12 17a2 2 0 0 0-1.995 1.85L10 19v2H3v-6.336a3.5 3.5 0 0 1-1.979-3.553A2.999 2.999 0 0 0 5.098 10h13.803zm-.971 2H6.069l-.076.079c-.431.42-.935.76-1.486 1.002l-.096.039.589.28-.001 5.6 3.002-.001v-.072l.01-.223c.149-2.016 1.78-3.599 3.854-3.698l.208-.005.223.01a4 4 0 0 1 3.699 3.787l.004.201L19 19l.001-5.6.587-.28-.095-.04a5.002 5.002 0 0 1-1.486-1.001L17.93 12zm-.894-9a3.5 3.5 0 0 0 4.446 2.86 3.5 3.5 0 0 1-3.29 3.135L18 9H6a3.5 3.5 0 0 1-3.482-3.14A3.5 3.5 0 0 0 6.964 3h10.072zM15.6 5H8.399a5.507 5.507 0 0 1-1.49 1.816L6.661 7h10.677l-.012-.008a5.518 5.518 0 0 1-1.579-1.722L15.6 5z"}}]}]})(props);
};
RiAncientGateLine.displayName = "RiAncientGateLine";
var RiAncientPavilionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12.513 2.001a9.004 9.004 0 0 0 9.97 5.877A4.501 4.501 0 0 1 19 11.888V19l2 .001v2H3v-2h2v-7.113a4.503 4.503 0 0 1-3.484-4.01 9.004 9.004 0 0 0 9.972-5.876h1.025zM17 12H7V19h10v-7zm-5-6.673l-.11.155A11.012 11.012 0 0 1 5.4 9.736l-.358.073.673.19h12.573l.668-.19-.011-.002a11.01 11.01 0 0 1-6.836-4.326L12 5.326z"}}]}]})(props);
};
RiAncientPavilionLine.displayName = "RiAncientPavilionLine";
var RiBankLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm2 1.236V9h16v-.764l-8-4-8 4zM12 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]}]})(props);
};
RiBankLine.displayName = "RiBankLine";
var RiBuilding2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z"}}]}]})(props);
};
RiBuilding2Line.displayName = "RiBuilding2Line";
var RiBuilding3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 10.111V1l11 6v14H3V7l7 3.111zm2-5.742v8.82l-7-3.111V19h14V8.187L12 4.37z"}}]}]})(props);
};
RiBuilding3Line.displayName = "RiBuilding3Line";
var RiBuilding4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zm-2 0V4H5v16h14zM8 11h3v2H8v-2zm0-4h3v2H8V7zm0 8h3v2H8v-2zm5 0h3v2h-3v-2zm0-4h3v2h-3v-2zm0-4h3v2h-3V7z"}}]}]})(props);
};
RiBuilding4Line.displayName = "RiBuilding4Line";
var RiBuildingLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z"}}]}]})(props);
};
RiBuildingLine.displayName = "RiBuildingLine";
var RiCommunityLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19zm2-8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2V7zm-4 0h2v2h-2V7z"}}]}]})(props);
};
RiCommunityLine.displayName = "RiCommunityLine";
var RiGovernmentLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3V8zM6 5v1h12V5H6z"}}]}]})(props);
};
RiGovernmentLine.displayName = "RiGovernmentLine";
var RiHome2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z"}}]}]})(props);
};
RiHome2Line.displayName = "RiHome2Line";
var RiHome3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm2-4h8v2H8v-2z"}}]}]})(props);
};
RiHome3Line.displayName = "RiHome3Line";
var RiHome4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z"}}]}]})(props);
};
RiHome4Line.displayName = "RiHome4Line";
var RiHome5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z"}}]}]})(props);
};
RiHome5Line.displayName = "RiHome5Line";
var RiHome6Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14zM7 15h10v2H7v-2z"}}]}]})(props);
};
RiHome6Line.displayName = "RiHome6Line";
var RiHome7Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm6-4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"}}]}]})(props);
};
RiHome7Line.displayName = "RiHome7Line";
var RiHome8Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm3-9h6v6H9v-6zm2 2v2h2v-2h-2z"}}]}]})(props);
};
RiHome8Line.displayName = "RiHome8Line";
var RiHomeGearLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm2.591-5.191a3.508 3.508 0 0 1 0-1.622l-.991-.572 1-1.732.991.573a3.495 3.495 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573 1 1.731-.991.573a3.508 3.508 0 0 1 0 1.622l.991.572-1 1.731-.991-.572a3.495 3.495 0 0 1-1.404.811v1.145h-2V16.35a3.495 3.495 0 0 1-1.404-.811l-.991.572-1-1.73.991-.573zm3.404.688a1.5 1.5 0 1 0 0-2.998 1.5 1.5 0 0 0 0 2.998z"}}]}]})(props);
};
RiHomeGearLine.displayName = "RiHomeGearLine";
var RiHomeHeartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-2-1V9.157l-6-5.454-6 5.454V19h12zm-6-2l-3.359-3.359a2.25 2.25 0 1 1 3.182-3.182l.177.177.177-.177a2.25 2.25 0 1 1 3.182 3.182L12 17z"}}]}]})(props);
};
RiHomeHeartLine.displayName = "RiHomeHeartLine";
var RiHomeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"}}]}]})(props);
};
RiHomeLine.displayName = "RiHomeLine";
var RiHomeSmile2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 19V9.799l-7-5.522-7 5.522V19h14zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786V20zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"}}]}]})(props);
};
RiHomeSmile2Line.displayName = "RiHomeSmile2Line";
var RiHomeSmileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 19h12V9.157l-6-5.454-6 5.454V19zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM7.5 13h2a2.5 2.5 0 1 0 5 0h2a4.5 4.5 0 1 1-9 0z"}}]}]})(props);
};
RiHomeSmileLine.displayName = "RiHomeSmileLine";
var RiHomeWifiLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 19h12V9.157l-6-5.454-6 5.454V19zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM8 10a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5v-2zm0 4a3 3 0 0 1 3 3H8v-3z"}}]}]})(props);
};
RiHomeWifiLine.displayName = "RiHomeWifiLine";
var RiHospitalLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8 20v-6h8v6h3V4H5v16h3zm2 0h4v-4h-4v4zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zM11 8V6h2v2h2v2h-2v2h-2v-2H9V8h2z"}}]}]})(props);
};
RiHospitalLine.displayName = "RiHospitalLine";
var RiHotelLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2zm-5-2h2v-8h-6v8h2v-6h2v6zm0-10V5H5v14h6V9h6zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7V7z"}}]}]})(props);
};
RiHotelLine.displayName = "RiHotelLine";
var RiStore2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z"}}]}]})(props);
};
RiStore2Line.displayName = "RiStore2Line";
var RiStore3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2h-1zM5 13v6h14v-6H5zm-.96-2h15.92l-.6-3H4.64l-.6 3zM6 14h8v3H6v-3zM3 3h18v2H3V3z"}}]}]})(props);
};
RiStore3Line.displayName = "RiStore3Line";
var RiStoreLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A3.985 3.985 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6c0 1.014-.378 1.94-1 2.646zm-2 1.228a4.007 4.007 0 0 1-4-1.228A3.99 3.99 0 0 1 12 13a3.99 3.99 0 0 1-3-1.354 3.99 3.99 0 0 1-4 1.228V20h14v-7.126zM14 9a1 1 0 0 1 2 0 2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0 1 1 0 1 1 2 0 2 2 0 1 0 4 0z"}}]}]})(props);
};
RiStoreLine.displayName = "RiStoreLine";
var RiAdvertisementLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zM9.399 8l3.199 8h-2.155l-.4-1h-3.29l-.4 1H4.199l3.2-8h2zM19 8v8h-3a3 3 0 0 1 0-6h.999L17 8h2zm-2 4h-1a1 1 0 0 0-.117 1.993L16 14h1v-2zm-8.601-1.115L7.552 13h1.692l-.845-2.115z"}}]}]})(props);
};
RiAdvertisementLine.displayName = "RiAdvertisementLine";
var RiArchiveDrawerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 2.992C3 2.444 3.445 2 3.993 2h16.014a1 1 0 0 1 .993.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992zM19 11V4H5v7h14zm0 2H5v7h14v-7zM9 6h6v2H9V6zm0 9h6v2H9v-2z"}}]}]})(props);
};
RiArchiveDrawerLine.displayName = "RiArchiveDrawerLine";
var RiArchiveLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 10H2V4.003C2 3.449 2.455 3 2.992 3h18.016A.99.99 0 0 1 22 4.003V10h-1v10.001a.996.996 0 0 1-.993.999H3.993A.996.996 0 0 1 3 20.001V10zm16 0H5v9h14v-9zM4 5v3h16V5H4zm5 7h6v2H9v-2z"}}]}]})(props);
};
RiArchiveLine.displayName = "RiArchiveLine";
var RiAtLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8H17v5.5a1.5 1.5 0 0 0 3 0V12zm-8-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"}}]}]})(props);
};
RiAtLine.displayName = "RiAtLine";
var RiAttachmentLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 13.5V8a4 4 0 1 0-8 0v5.5a6.5 6.5 0 1 0 13 0V4h2v9.5a8.5 8.5 0 1 1-17 0V8a6 6 0 1 1 12 0v5.5a3.5 3.5 0 0 1-7 0V8h2v5.5a1.5 1.5 0 0 0 3 0z"}}]}]})(props);
};
RiAttachmentLine.displayName = "RiAttachmentLine";
var RiAwardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"}}]}]})(props);
};
RiAwardLine.displayName = "RiAwardLine";
var RiBarChart2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 13h6v8H2v-8zm14-5h6v13h-6V8zM9 3h6v18H9V3zM4 15v4h2v-4H4zm7-10v14h2V5h-2zm7 5v9h2v-9h-2z"}}]}]})(props);
};
RiBarChart2Line.displayName = "RiBarChart2Line";
var RiBarChartBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm3 8h2v4H7v-4zm4-6h2v10h-2V7zm4 3h2v7h-2v-7z"}}]}]})(props);
};
RiBarChartBoxLine.displayName = "RiBarChartBoxLine";
var RiBarChartGroupedLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 12h2v9H2v-9zm3 2h2v7H5v-7zm11-6h2v13h-2V8zm3 2h2v11h-2V10zM9 2h2v19H9V2zm3 2h2v17h-2V4z"}}]}]})(props);
};
RiBarChartGroupedLine.displayName = "RiBarChartGroupedLine";
var RiBarChartHorizontalLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z"}}]}]})(props);
};
RiBarChartHorizontalLine.displayName = "RiBarChartHorizontalLine";
var RiBarChartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 12h2v9H3v-9zm16-4h2v13h-2V8zm-8-6h2v19h-2V2z"}}]}]})(props);
};
RiBarChartLine.displayName = "RiBarChartLine";
var RiBookmark2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4zM8 9h8v2H8V9z"}}]}]})(props);
};
RiBookmark2Line.displayName = "RiBookmark2Line";
var RiBookmark3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 2h16a1 1 0 0 1 1 1v19.276a.5.5 0 0 1-.704.457L12 19.03l-8.296 3.702A.5.5 0 0 1 3 22.276V3a1 1 0 0 1 1-1zm15 17.965V4H5v15.965l7-3.124 7 3.124zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272L12 13.5z"}}]}]})(props);
};
RiBookmark3Line.displayName = "RiBookmark3Line";
var RiBookmarkLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"}}]}]})(props);
};
RiBookmarkLine.displayName = "RiBookmarkLine";
var RiBriefcase2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm13 8H4v6h16v-6zm0-6H4v4h3V9h2v2h6V9h2v2h3V7zM9 3v2h6V3H9z"}}]}]})(props);
};
RiBriefcase2Line.displayName = "RiBriefcase2Line";
var RiBriefcase3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm8 2H9v12h6V7zM7 7H4v12h3V7zm10 0v12h3V7h-3zM9 3v2h6V3H9z"}}]}]})(props);
};
RiBriefcase3Line.displayName = "RiBriefcase3Line";
var RiBriefcase4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z"}}]}]})(props);
};
RiBriefcase4Line.displayName = "RiBriefcase4Line";
var RiBriefcase5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm9 10h-3v1h-2v-1H8v4h8v-4zM8 7v6h3v-1h2v1h3V7H8zm-2 6V7H4v6h2zm12 0h2V7h-2v6zM6 15H4v4h2v-4zm12 0v4h2v-4h-2zM9 3v2h6V3H9z"}}]}]})(props);
};
RiBriefcase5Line.displayName = "RiBriefcase5Line";
var RiBriefcaseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 16v3h16v-3H4zm0-2h16V7H4v7zM9 3v2h6V3H9zm2 8h2v2h-2v-2z"}}]}]})(props);
};
RiBriefcaseLine.displayName = "RiBriefcaseLine";
var RiCalculatorLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 2v16h14V4H5zm2 2h10v4H7V6zm0 6h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v6h-2v-6z"}}]}]})(props);
};
RiCalculatorLine.displayName = "RiCalculatorLine";
var RiCalendar2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"}}]}]})(props);
};
RiCalendar2Line.displayName = "RiCalendar2Line";
var RiCalendarCheckLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2zm11 9H4v9h16v-9zm-4.964 1.136l1.414 1.414-4.95 4.95-3.536-3.536L9.38 12.55l2.121 2.122 3.536-3.536zM7 5H4v3h16V5h-3v1h-2V5H9v1H7V5z"}}]}]})(props);
};
RiCalendarCheckLine.displayName = "RiCalendarCheckLine";
var RiCalendarEventLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 6V5h-3v2h-2V5H9v2H7V5H4v4h16zm0 2H4v8h16v-8zM6 13h5v4H6v-4z"}}]}]})(props);
};
RiCalendarEventLine.displayName = "RiCalendarEventLine";
var RiCalendarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z"}}]}]})(props);
};
RiCalendarLine.displayName = "RiCalendarLine";
var RiCalendarTodoLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8zM6 14h2v2H6v-2zm4 0h8v2h-8v-2z"}}]}]})(props);
};
RiCalendarTodoLine.displayName = "RiCalendarTodoLine";
var RiCloudLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zm0-12a5 5 0 1 0-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6.003 6.003 0 0 1 17 9z"}}]}]})(props);
};
RiCloudLine.displayName = "RiCloudLine";
var RiCloudOffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.515 2.1l19.092 19.092-1.415 1.415-2.014-2.015A5.985 5.985 0 0 1 17 21H7A6 6 0 0 1 5.008 9.339a6.992 6.992 0 0 1 .353-2.563L2.1 3.514 3.515 2.1zM7 9c0 .081.002.163.006.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10c.186 0 .369-.013.548-.037L7.03 8.445C7.01 8.627 7 8.812 7 9zm5-7a7 7 0 0 1 6.992 7.339 6.003 6.003 0 0 1 3.212 8.65l-1.493-1.493a3.999 3.999 0 0 0-5.207-5.206L14.01 9.795C14.891 9.29 15.911 9 17 9a5 5 0 0 0-7.876-4.09l-1.43-1.43A6.97 6.97 0 0 1 12 2z"}}]}]})(props);
};
RiCloudOffLine.displayName = "RiCloudOffLine";
var RiCopyrightLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3c1.82 0 3.413.973 4.288 2.428l-1.714 1.029A3 3 0 1 0 12 15a2.998 2.998 0 0 0 2.573-1.456l1.715 1.028A4.999 4.999 0 0 1 7 12c0-2.76 2.24-5 5-5z"}}]}]})(props);
};
RiCopyrightLine.displayName = "RiCopyrightLine";
var RiCreativeCommonsByLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 6a1 1 0 0 1 1 1v4h-1.5v4h-3v-4H9v-4a1 1 0 0 1 1-1h4zm-2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"}}]}]})(props);
};
RiCreativeCommonsByLine.displayName = "RiCreativeCommonsByLine";
var RiCreativeCommonsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9 8c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0-.001 2.828l1.414 1.413A4.001 4.001 0 0 1 5 12c0-2.208 1.792-4 4-4zm7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0-.001 2.828l1.414 1.413A4.001 4.001 0 0 1 12 12c0-2.208 1.792-4 4-4z"}}]}]})(props);
};
RiCreativeCommonsLine.displayName = "RiCreativeCommonsLine";
var RiCreativeCommonsNcLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l.034.036-1.414 1.414-.036-.034A9.959 9.959 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zM4 12a8 8 0 0 0 12.905 6.32l-2.375-2.376A2.51 2.51 0 0 1 14 16h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 0 1-2.165-3.75L5.679 7.094A7.965 7.965 0 0 0 4 12zm8-8c-1.848 0-3.55.627-4.905 1.68L9.47 8.055A2.51 2.51 0 0 1 10 8h1V6h2v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 0 1 2.165 3.75l2.156 2.155A8 8 0 0 0 12 4z"}}]}]})(props);
};
RiCreativeCommonsNcLine.displayName = "RiCreativeCommonsNcLine";
var RiCreativeCommonsNdLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm4 9v2H8v-2h8zm0-4v2H8V9h8z"}}]}]})(props);
};
RiCreativeCommonsNdLine.displayName = "RiCreativeCommonsNdLine";
var RiCreativeCommonsSaLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.415 0-8 3.585-8 8s3.585 8 8 8 8-3.585 8-8-3.585-8-8-8zm0 2c2.761 0 5 2.686 5 6s-2.239 6-5 6c-2.177 0-4.029-1.67-4.715-4l2.117.001C9.92 15.196 10.89 16 12 16c1.657 0 3-1.79 3-4s-1.343-4-3-4c-1.11 0-2.08.805-2.599 2H11l-2.5 3L6 10h1.284C7.971 7.67 9.823 6 12 6z"}}]}]})(props);
};
RiCreativeCommonsSaLine.displayName = "RiCreativeCommonsSaLine";
var RiCreativeCommonsZeroLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.415 0-8 3.585-8 8s3.585 8 8 8 8-3.585 8-8-3.585-8-8-8zm0 2c2.761 0 5 2.686 5 6s-2.239 6-5 6-5-2.686-5-6 2.239-6 5-6zm2.325 3.472l-3.562 6.173c.377.228.796.355 1.237.355 1.657 0 3-1.79 3-4 0-.959-.253-1.839-.675-2.528zM12 8c-1.657 0-3 1.79-3 4 0 .959.253 1.839.675 2.528l3.562-6.173A2.377 2.377 0 0 0 12 8z"}}]}]})(props);
};
RiCreativeCommonsZeroLine.displayName = "RiCreativeCommonsZeroLine";
var RiCustomerService2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0zM3 10v4h1v-4H3zm17 0v4h1v-4h-1zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z"}}]}]})(props);
};
RiCustomerService2Line.displayName = "RiCustomerService2Line";
var RiCustomerServiceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z"}}]}]})(props);
};
RiCustomerServiceLine.displayName = "RiCustomerServiceLine";
var RiFlag2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 17v5H2V3h19.138a.5.5 0 0 1 .435.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4zM4 5v10h14.554l-2.858-5 2.858-5H4z"}}]}]})(props);
};
RiFlag2Line.displayName = "RiFlag2Line";
var RiFlagLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 16v6H3V3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5zM5 5v9h8.236l1 2H19V7h-6.236l-1-2H5z"}}]}]})(props);
};
RiFlagLine.displayName = "RiFlagLine";
var RiGlobalLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"}}]}]})(props);
};
RiGlobalLine.displayName = "RiGlobalLine";
var RiHonourLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03 3.298 19.18A.5.5 0 0 1 3 18.72V4H1V2h22v2h-2zM5 4v13.745l7 3.1 7-3.1V4H5zm3 4h8v2H8V8zm0 4h8v2H8v-2z"}}]}]})(props);
};
RiHonourLine.displayName = "RiHonourLine";
var RiInboxArchiveLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2l-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z"}}]}]})(props);
};
RiInboxArchiveLine.displayName = "RiInboxArchiveLine";
var RiInboxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 11h-3.416a5.001 5.001 0 0 1-9.168 0H4v5h16v-5zm0-2V5H4v7h5a3 3 0 0 0 6 0h5z"}}]}]})(props);
};
RiInboxLine.displayName = "RiInboxLine";
var RiInboxUnarchiveLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z"}}]}]})(props);
};
RiInboxUnarchiveLine.displayName = "RiInboxUnarchiveLine";
var RiLinksLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"}}]}]})(props);
};
RiLinksLine.displayName = "RiLinksLine";
var RiMailAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9zM4.511 5l7.55 6.662L19.502 5H4.511zM21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"}}]}]})(props);
};
RiMailAddLine.displayName = "RiMailAddLine";
var RiMailCheckLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 14h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10zM4.511 5l7.55 6.662L19.502 5H4.511zM19 22l-3.536-3.536 1.415-1.414L19 19.172l3.536-3.536 1.414 1.414L19 22z"}}]}]})(props);
};
RiMailCheckLine.displayName = "RiMailCheckLine";
var RiMailCloseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 14h-2V7.238l-7.928 7.1L4 7.216V19h11v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10zM4.511 5l7.55 6.662L19.502 5H4.511zm16.903 14l2.122 2.121-1.415 1.415L20 20.414l-2.121 2.122-1.415-1.415L18.586 19l-2.122-2.121 1.415-1.415L20 17.586l2.121-2.122 1.415 1.415L21.414 19z"}}]}]})(props);
};
RiMailCloseLine.displayName = "RiMailCloseLine";
var RiMailDownloadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 7.238l-7.928 7.1L4 7.216V19h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM20 18h3l-4 4-4-4h3v-4h2v4z"}}]}]})(props);
};
RiMailDownloadLine.displayName = "RiMailDownloadLine";
var RiMailForbidLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 7.238l-7.928 7.1L4 7.216V19h7.07a6.95 6.95 0 0 0 .604 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255a6.972 6.972 0 0 0-2-.965V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zm-2.794 15.708a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"}}]}]})(props);
};
RiMailForbidLine.displayName = "RiMailForbidLine";
var RiMailLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"}}]}]})(props);
};
RiMailLine.displayName = "RiMailLine";
var RiMailLockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 7.238l-7.928 7.1L4 7.216V19h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM22 17h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"}}]}]})(props);
};
RiMailLockLine.displayName = "RiMailLockLine";
var RiMailOpenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z"}}]}]})(props);
};
RiMailOpenLine.displayName = "RiMailOpenLine";
var RiMailSendLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z"}}]}]})(props);
};
RiMailSendLine.displayName = "RiMailSendLine";
var RiMailSettingsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM17.05 19.548a3.017 3.017 0 0 1 0-1.096l-1.014-.586 1-1.732 1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586 1 1.732-1.014.586a3.017 3.017 0 0 1 0 1.096l1.014.586-1 1.732-1.014-.586a2.997 2.997 0 0 1-.95.55V23h-2v-1.17a2.997 2.997 0 0 1-.95-.55l-1.014.586-1-1.732 1.014-.586zM20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiMailSettingsLine.displayName = "RiMailSettingsLine";
var RiMailStarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9zM4.511 5l7.55 6.662L19.502 5H4.511zM19.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L19.5 15l1.323 2.68 2.957.43-2.14 2.085.505 2.946L19.5 21.75z"}}]}]})(props);
};
RiMailStarLine.displayName = "RiMailStarLine";
var RiMailUnreadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.1 3a5.023 5.023 0 0 0 0 2H4.511l7.55 6.662 5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5.023 5.023 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1zM21 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]}]})(props);
};
RiMailUnreadLine.displayName = "RiMailUnreadLine";
var RiMailVolumeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 14.5v9L16.667 21H14v-4h2.667L20 14.5zM21 3a1 1 0 0 1 1 1v9h-2V7.237l-7.928 7.101L4 7.215V19h8v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 14a2 2 0 0 1 .15 3.995L21 21v-4zM19.5 5H4.511l7.55 6.662L19.5 5z"}}]}]})(props);
};
RiMailVolumeLine.displayName = "RiMailVolumeLine";
var RiMedal2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 8.5l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zm0 5.207l-.739 1.777-1.916.153 1.46 1.251-.447 1.871L12 17.756l1.641 1.003-.446-1.87 1.459-1.252-1.915-.153L12 13.707zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"}}]}]})(props);
};
RiMedal2Line.displayName = "RiMedal2Line";
var RiMedalLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 1.5l1.323 2.68 2.957.43-2.14 2.085.505 2.946L12 17.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L12 10.5zM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049L13 2 18 2zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2l5-.001z"}}]}]})(props);
};
RiMedalLine.displayName = "RiMedalLine";
var RiPieChart2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 .543c.33-.029.663-.043 1-.043C18.351.5 23.5 5.649 23.5 12c0 .337-.014.67-.043 1h-1.506c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95V.542zM11 13V4.062A8.001 8.001 0 0 0 12 20a8.001 8.001 0 0 0 7.938-7H11zm10.448-2A9.503 9.503 0 0 0 13 2.552V11h8.448z"}}]}]})(props);
};
RiPieChart2Line.displayName = "RiPieChart2Line";
var RiPieChartBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm12.9 8A5.002 5.002 0 0 1 7 12a5.002 5.002 0 0 1 4-4.9V13h5.9zm0-2H13V7.1a5.006 5.006 0 0 1 3.9 3.9z"}}]}]})(props);
};
RiPieChartBoxLine.displayName = "RiPieChartBoxLine";
var RiPieChartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12c0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0 0 12 20a8.003 8.003 0 0 0 7.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H11V2.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM13 4.062V11h6.938A8.004 8.004 0 0 0 13 4.062z"}}]}]})(props);
};
RiPieChartLine.displayName = "RiPieChartLine";
var RiPrinterCloudLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1l.001 5.346a5.516 5.516 0 0 0-2-1.745L20 9H4v8h2v-1a1 1 0 0 1 1-1h5.207l-.071.283-.03.02A4.763 4.763 0 0 0 10.567 17L8 17v3h2.06a4.73 4.73 0 0 0 .817 2H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h10zm.5 11a3.5 3.5 0 0 1 3.5 3.5l-.001.103a2.75 2.75 0 0 1-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.392L14 16.5a3.5 3.5 0 0 1 3.5-3.5zm0 2a1.5 1.5 0 0 0-1.473 1.215l-.02.14L16 16.5v1.62l-1.444.406a.75.75 0 0 0 .08 1.466l.109.008h5.51a.75.75 0 0 0 .19-1.474l-1.013-.283L19 18.12V16.5l-.007-.144A1.5 1.5 0 0 0 17.5 15zM8 10v2H5v-2h3zm8-6H8v3h8V4z"}}]}]})(props);
};
RiPrinterCloudLine.displayName = "RiPrinterCloudLine";
var RiPrinterLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 19H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm0-2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2V9H4v8h2zM8 4v3h8V4H8zm0 13v3h8v-3H8zm-3-7h3v2H5v-2z"}}]}]})(props);
};
RiPrinterLine.displayName = "RiPrinterLine";
var RiProfileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"}}]}]})(props);
};
RiProfileLine.displayName = "RiProfileLine";
var RiProjector2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10.528A5.985 5.985 0 0 1 17 3c1.777 0 3.374.773 4.472 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zM11.341 7H3v10h18v-3.528A6 6 0 0 1 11.341 7zM17 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 13h2v2H5v-2zm3 0h2v2H8v-2z"}}]}]})(props);
};
RiProjector2Line.displayName = "RiProjector2Line";
var RiProjectorLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8.126 9H4v7h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0zm0-2a4.002 4.002 0 0 1 7.748 0H20V5H4v5h7.126zM15 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-9 2h2v2H6v-2z"}}]}]})(props);
};
RiProjectorLine.displayName = "RiProjectorLine";
var RiRecordMailLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.257 15a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2h4.514zM5.5 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm13 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}}]}]})(props);
};
RiRecordMailLine.displayName = "RiRecordMailLine";
var RiRegisteredLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm.5 3a3.5 3.5 0 0 1 1.82 6.49L16.868 17h-2.472l-2.18-3H10v3H8V7h4.5zm0 2H10v3h2.5a1.5 1.5 0 0 0 1.493-1.356L14 10.5A1.5 1.5 0 0 0 12.5 9z"}}]}]})(props);
};
RiRegisteredLine.displayName = "RiRegisteredLine";
var RiReplyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 14v5.5L1.5 11 12 2.5V8c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81A8.999 8.999 0 0 0 14 14h-2zm-2 1.308V12h4c1.42 0 2.791.271 4.057.773A7.982 7.982 0 0 0 12 10h-2V6.692L4.679 11 10 15.308z"}}]}]})(props);
};
RiReplyLine.displayName = "RiReplyLine";
var RiSendPlane2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.741 1.408l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .741-.438zM5 13v6.617L18.85 12 5 4.383V11h5v2H5z"}}]}]})(props);
};
RiSendPlane2Line.displayName = "RiSendPlane2Line";
var RiSendPlaneLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"}}]}]})(props);
};
RiSendPlaneLine.displayName = "RiSendPlaneLine";
var RiServiceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"}}]}]})(props);
};
RiServiceLine.displayName = "RiServiceLine";
var RiSlideshow2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1h-7zm-8-2h14V4H5v11zm5-9l5 3.5-5 3.5V6z"}}]}]})(props);
};
RiSlideshow2Line.displayName = "RiSlideshow2Line";
var RiSlideshow3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 18v2h4v2H7v-2h4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-8zM4 5v11h16V5H4zm6 2.5l5 3-5 3v-6z"}}]}]})(props);
};
RiSlideshow3Line.displayName = "RiSlideshow3Line";
var RiSlideshow4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.17 3A3.001 3.001 0 0 1 11 1h2c1.306 0 2.417.835 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5.17zM4 5v14h16V5h-4.17A3.001 3.001 0 0 1 13 7h-2a3.001 3.001 0 0 1-2.83-2H4zm7-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-1 6l5 3-5 3V9z"}}]}]})(props);
};
RiSlideshow4Line.displayName = "RiSlideshow4Line";
var RiSlideshowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1h-8zm-9-2h16V8H4v11zm9-9h5v2h-5v-2zm0 4h5v2h-5v-2zm-4-4v3h3a3 3 0 1 1-3-3zM2 3h20v2H2V3z"}}]}]})(props);
};
RiSlideshowLine.displayName = "RiSlideshowLine";
var RiStackLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"}}]}]})(props);
};
RiStackLine.displayName = "RiStackLine";
var RiTrademarkLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 6v2H6v10H4V8H0V6h10zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2V6z"}}]}]})(props);
};
RiTrademarkLine.displayName = "RiTrademarkLine";
var RiWindow2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-5-3h4v2h-4V6z"}}]}]})(props);
};
RiWindow2Line.displayName = "RiWindow2Line";
var RiWindowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zM9 6h2v2H9V6zM5 6h2v2H5V6z"}}]}]})(props);
};
RiWindowLine.displayName = "RiWindowLine";
var RiChat1Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"}}]}]})(props);
};
RiChat1Line.displayName = "RiChat1Line";
var RiChat2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.45 19L12 22.5 9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6.55zm-1.041-2H20V5H4v12h6.591L12 19.012 13.409 17z"}}]}]})(props);
};
RiChat2Line.displayName = "RiChat2Line";
var RiChat3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z"}}]}]})(props);
};
RiChat3Line.displayName = "RiChat3Line";
var RiChat4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z"}}]}]})(props);
};
RiChat4Line.displayName = "RiChat4Line";
var RiChatCheckLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zm5.53-4.879l4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z"}}]}]})(props);
};
RiChatCheckLine.displayName = "RiChatCheckLine";
var RiChatDeleteLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM13.414 11l2.475 2.475-1.414 1.414L12 12.414 9.525 14.89l-1.414-1.414L10.586 11 8.11 8.525l1.414-1.414L12 9.586l2.475-2.475 1.414 1.414L13.414 11z"}}]}]})(props);
};
RiChatDeleteLine.displayName = "RiChatDeleteLine";
var RiChatDownloadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM13 11h3l-4 4-4-4h3V7h2v4z"}}]}]})(props);
};
RiChatDownloadLine.displayName = "RiChatDownloadLine";
var RiChatForwardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM12 10V7l4 4-4 4v-3H8v-2h4z"}}]}]})(props);
};
RiChatForwardLine.displayName = "RiChatForwardLine";
var RiChatHeartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zm8.018-3.685L8.659 11.34a2.25 2.25 0 0 1 3.182-3.182l.177.177.177-.177a2.25 2.25 0 0 1 3.182 3.182l-3.36 3.359z"}}]}]})(props);
};
RiChatHeartLine.displayName = "RiChatHeartLine";
var RiChatNewLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h11zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3h3z"}}]}]})(props);
};
RiChatNewLine.displayName = "RiChatNewLine";
var RiChatOffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.808 1.393l19.799 19.8-1.415 1.414-3.608-3.608L6.455 19 2 22.5V4c0-.17.042-.329.116-.469l-.723-.723 1.415-1.415zm1.191 4.02L4 18.385 5.763 17h9.821L4 5.412zM21 3a1 1 0 0 1 1 1v13.785l-2-2V5L9.213 4.999 7.214 3H21z"}}]}]})(props);
};
RiChatOffLine.displayName = "RiChatOffLine";
var RiChatSettingsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 12h-2V5H4v13.385L5.763 17H12v2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8zm-7.855 7.071a4.004 4.004 0 0 1 0-2.142l-.975-.563 1-1.732.976.563A3.996 3.996 0 0 1 17 14.126V13h2v1.126c.715.184 1.353.56 1.854 1.071l.976-.563 1 1.732-.975.563a4.004 4.004 0 0 1 0 2.142l.975.563-1 1.732-.976-.563c-.501.51-1.14.887-1.854 1.071V23h-2v-1.126a3.996 3.996 0 0 1-1.854-1.071l-.976.563-1-1.732.975-.563zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiChatSettingsLine.displayName = "RiChatSettingsLine";
var RiChatSmile2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"}}]}]})(props);
};
RiChatSmile2Line.displayName = "RiChatSmile2Line";
var RiChatSmile3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 0 1 2 12zm4.828 8H12a8 8 0 1 0-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 1 1-8 0z"}}]}]})(props);
};
RiChatSmile3Line.displayName = "RiChatSmile3Line";
var RiChatSmileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM7 10h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"}}]}]})(props);
};
RiChatSmileLine.displayName = "RiChatSmileLine";
var RiChatUploadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM13 11v4h-2v-4H8l4-4 4 4h-3z"}}]}]})(props);
};
RiChatUploadLine.displayName = "RiChatUploadLine";
var RiChatVoiceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 0 1 2 12zm4.828 8H12a8 8 0 1 0-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM11 6h2v12h-2V6zM7 9h2v6H7V9zm8 0h2v6h-2V9z"}}]}]})(props);
};
RiChatVoiceLine.displayName = "RiChatVoiceLine";
var RiDiscussLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17H12.161L14 19.298 15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiDiscussLine.displayName = "RiDiscussLine";
var RiFeedbackLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM11 13h2v2h-2v-2zm0-6h2v5h-2V7z"}}]}]})(props);
};
RiFeedbackLine.displayName = "RiFeedbackLine";
var RiMessage2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z"}}]}]})(props);
};
RiMessage2Line.displayName = "RiMessage2Line";
var RiMessage3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"}}]}]})(props);
};
RiMessage3Line.displayName = "RiMessage3Line";
var RiMessageLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM8 10h8v2H8v-2z"}}]}]})(props);
};
RiMessageLine.displayName = "RiMessageLine";
var RiQuestionAnswerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"}}]}]})(props);
};
RiQuestionAnswerLine.displayName = "RiQuestionAnswerLine";
var RiQuestionnaireLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z"}}]}]})(props);
};
RiQuestionnaireLine.displayName = "RiQuestionnaireLine";
var RiVideoChatLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 10.25L17 8v6l-3-2.25V14H7V8h7v2.25zM5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z"}}]}]})(props);
};
RiVideoChatLine.displayName = "RiVideoChatLine";
var RiAnticlockwise2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13.414 6l1.829 1.828-1.415 1.415L9.586 5 13.828.757l1.415 1.415L13.414 4H16a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3h-2.586zM15 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-2 1H5v8h8v-8z"}}]}]})(props);
};
RiAnticlockwise2Line.displayName = "RiAnticlockwise2Line";
var RiAnticlockwiseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11 9h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm1 2v8h8v-8h-8zm-6-.414l1.828-1.829 1.415 1.415L5 14.414.757 10.172l1.415-1.415L4 10.586V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3v2.586z"}}]}]})(props);
};
RiAnticlockwiseLine.displayName = "RiAnticlockwiseLine";
var RiArtboard2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 8v8h8V8H8zM6 6h12v12H6V6zm0-4h2v3H6V2zm0 17h2v3H6v-3zM2 6h3v2H2V6zm0 10h3v2H2v-2zM19 6h3v2h-3V6zm0 10h3v2h-3v-2zM16 2h2v3h-2V2zm0 17h2v3h-2v-3z"}}]}]})(props);
};
RiArtboard2Line.displayName = "RiArtboard2Line";
var RiArtboardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414L8.586 17zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1zm1 2v7h12V5H6z"}}]}]})(props);
};
RiArtboardLine.displayName = "RiArtboardLine";
var RiBallPenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.849 11.808l-.707-.707-9.9 9.9H3v-4.243L14.313 5.444l5.657 5.657a1 1 0 0 1 0 1.414l-7.07 7.071-1.415-1.414 6.364-6.364zm-2.121-2.121l-1.415-1.414L5 17.586v1.415h1.414l9.314-9.314zm2.828-7.071l2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.273 15.728 4.03l1.414-1.414a1 1 0 0 1 1.414 0z"}}]}]})(props);
};
RiBallPenLine.displayName = "RiBallPenLine";
var RiBlurOffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.154 19.568A9 9 0 0 1 5.432 6.846L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04zM6.847 8.262a7 7 0 0 0 9.891 9.89l-9.89-9.89zM20.414 16.2l-1.599-1.599a6.995 6.995 0 0 0-1.865-6.55L12 3.1 9.657 5.443 8.243 4.03 12 .272l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564z"}}]}]})(props);
};
RiBlurOffLine.displayName = "RiBlurOffLine";
var RiBrush2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.536 15.95l2.12-2.122-3.181-3.182 3.535-3.535-2.12-2.121-3.536 3.535-3.182-3.182L8.05 7.464l8.486 8.486zm-1.415 1.414L6.636 8.879l-2.828 2.828 8.485 8.485 2.828-2.828zM13.354 5.697l2.828-2.829a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828 2.475 2.475a1 1 0 0 1 0 1.415L13 22.314a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.778-7.778a1 1 0 0 1 1.415 0l2.475 2.475z"}}]}]})(props);
};
RiBrush2Line.displayName = "RiBrush2Line";
var RiBrush3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 20v-5h2v5h9v-7H5v7h3zm-4-9h16V8h-6V4h-4v4H4v3zM3 21v-8H2V7a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6h-1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"}}]}]})(props);
};
RiBrush3Line.displayName = "RiBrush3Line";
var RiBrush4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 5v6.273H7V5H5v9h14V5H9zm11 11H4v2h16v-2zM3 14V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5h1z"}}]}]})(props);
};
RiBrush4Line.displayName = "RiBrush4Line";
var RiBrushLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.456 9.678l-.142-.142a5.475 5.475 0 0 0-2.39-1.349c-2.907-.778-5.699.869-6.492 3.83-.043.16-.066.34-.104.791-.154 1.87-.594 3.265-1.8 4.68 2.26.888 4.938 1.514 6.974 1.514a5.505 5.505 0 0 0 5.31-4.078 5.497 5.497 0 0 0-1.356-5.246zM13.29 6.216l4.939-3.841a1 1 0 0 1 1.32.082l2.995 2.994a1 1 0 0 1 .082 1.321l-3.84 4.938a7.505 7.505 0 0 1-7.283 9.292C8 21.002 3.5 19.5 1 18c3.98-3 3.047-4.81 3.5-6.5 1.058-3.95 4.842-6.257 8.789-5.284zm3.413 1.879c.065.063.13.128.193.194l1.135 1.134 2.475-3.182-1.746-1.746-3.182 2.475 1.125 1.125z"}}]}]})(props);
};
RiBrushLine.displayName = "RiBrushLine";
var RiClockwise2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10.586 4L8.757 2.172 10.172.757 14.414 5l-4.242 4.243-1.415-1.415L10.586 6H8a3 3 0 0 0-3 3v4H3V9a5 5 0 0 1 5-5h2.586zM9 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11zm2 1v8h8v-8h-8z"}}]}]})(props);
};
RiClockwise2Line.displayName = "RiClockwise2Line";
var RiClockwiseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M20 10.586l1.828-1.829 1.415 1.415L19 14.414l-4.243-4.242 1.415-1.415L18 10.586V8a3 3 0 0 0-3-3h-4V3h4a5 5 0 0 1 5 5v2.586zM13 9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10zm-1 2H4v8h8v-8z"}}]}]})(props);
};
RiClockwiseLine.displayName = "RiClockwiseLine";
var RiCompasses2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.33 13.5A6.988 6.988 0 0 0 19 8h2a8.987 8.987 0 0 1-3.662 7.246l2.528 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108A8.97 8.97 0 0 1 12 17a8.97 8.97 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.063-8.77A4.002 4.002 0 0 1 11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728L16.33 13.5zM14.6 14.502l-1.528-2.647a4.004 4.004 0 0 1-2.142 0l-1.528 2.647c.804.321 1.68.498 2.599.498.918 0 1.795-.177 2.599-.498zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiCompasses2Line.displayName = "RiCompasses2Line";
var RiCompassesLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728l6.063 10.502-1.732 1-6.063-10.501a4.004 4.004 0 0 1-2.142 0L4.866 22.356l-1.732-1 6.063-10.502A4.002 4.002 0 0 1 11 4.126zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiCompassesLine.displayName = "RiCompassesLine";
var RiContrast2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-4.68a8.965 8.965 0 0 0 5.707-2.613A8.965 8.965 0 0 0 15.32 7 6 6 0 1 1 7 15.32z"}}]}]})(props);
};
RiContrast2Line.displayName = "RiContrast2Line";
var RiContrastDrop2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3.1L7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 1 1-12.728 0L12 .272zM7 13h10a5 5 0 0 1-10 0z"}}]}]})(props);
};
RiContrastDrop2Line.displayName = "RiContrastDrop2Line";
var RiContrastDropLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3.1L7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 1 1-12.728 0L12 .272zM12 18V8a5 5 0 0 1 0 10z"}}]}]})(props);
};
RiContrastDropLine.displayName = "RiContrastDropLine";
var RiContrastLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2V6a6 6 0 1 1 0 12z"}}]}]})(props);
};
RiContrastLine.displayName = "RiContrastLine";
var RiCrop2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.414 17H15v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v13.586L15.586 7H9V5h8.586l2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V8.414L8.414 17z"}}]}]})(props);
};
RiCrop2Line.displayName = "RiCrop2Line";
var RiCropLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15h8zm2 5V7H9V5h9a1 1 0 0 1 1 1v11h3v2h-3v3h-2z"}}]}]})(props);
};
RiCropLine.displayName = "RiCropLine";
var RiDragDropLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z"}}]}]})(props);
};
RiDragDropLine.displayName = "RiDragDropLine";
var RiDragMove2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11z"}}]}]})(props);
};
RiDragMove2Line.displayName = "RiDragMove2Line";
var RiDragMoveLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2l4.243 4.243-1.415 1.414L12 4.828 9.172 7.657 7.757 6.243 12 2zM2 12l4.243-4.243 1.414 1.415L4.828 12l2.829 2.828-1.414 1.415L2 12zm20 0l-4.243 4.243-1.414-1.415L19.172 12l-2.829-2.828 1.414-1.415L22 12zm-10 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8l-4.243-4.243 1.415-1.414L12 19.172l2.828-2.829 1.415 1.414L12 22z"}}]}]})(props);
};
RiDragMoveLine.displayName = "RiDragMoveLine";
var RiDropLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3.1L7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 1 1-12.728 0L12 .272z"}}]}]})(props);
};
RiDropLine.displayName = "RiDropLine";
var RiEdit2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"}}]}]})(props);
};
RiEdit2Line.displayName = "RiEdit2Line";
var RiEditBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"}}]}]})(props);
};
RiEditBoxLine.displayName = "RiEditBoxLine";
var RiEditCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.684 4.029a8 8 0 1 0 7.287 7.287 7.936 7.936 0 0 0-.603-2.44l1.5-1.502A9.933 9.933 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.982 9.982 0 0 1 4.626 1.132l-1.501 1.5a7.941 7.941 0 0 0-2.44-.603zM20.485 2.1L21.9 3.515l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"}}]}]})(props);
};
RiEditCircleLine.displayName = "RiEditCircleLine";
var RiEditLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"}}]}]})(props);
};
RiEditLine.displayName = "RiEditLine";
var RiEraserLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.586 8.858l-4.95 4.95 5.194 5.194H10V19h1.172l3.778-3.778-6.364-6.364zM10 7.444l6.364 6.364 2.828-2.829-6.364-6.364L10 7.444zM14 19h7v2h-9l-3.998.002-6.487-6.487a1 1 0 0 1 0-1.414L12.12 2.494a1 1 0 0 1 1.415 0l7.778 7.778a1 1 0 0 1 0 1.414L14 19z"}}]}]})(props);
};
RiEraserLine.displayName = "RiEraserLine";
var RiFocus2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiFocus2Line.displayName = "RiFocus2Line";
var RiFocus3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 1l.001 3.062A8.004 8.004 0 0 1 19.938 11H23v2l-3.062.001a8.004 8.004 0 0 1-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 0 1-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0 1 11 4.062V1h2zm-1 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"}}]}]})(props);
};
RiFocus3Line.displayName = "RiFocus3Line";
var RiFocusLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiFocusLine.displayName = "RiFocusLine";
var RiGridLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 10h-4v4h4v-4zm2 0v4h3v-4h-3zm-2 9v-3h-4v3h4zm2 0h3v-3h-3v3zM14 5h-4v3h4V5zm2 0v3h3V5h-3zm-8 5H5v4h3v-4zm0 9v-3H5v3h3zM8 5H5v3h3V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiGridLine.displayName = "RiGridLine";
var RiHammerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5v13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9H3.5a1 1 0 0 1-1-1V5.618a1 1 0 0 1 .553-.894L8.5 2H20zm-5 2H8.972L4.5 6.236V7H11v14h2V7h2V4zm4 0h-2v3h2V4z"}}]}]})(props);
};
RiHammerLine.displayName = "RiHammerLine";
var RiInputMethodLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 5v14h14V5H5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5.869 12l-.82 2H6.833L11 7h2l4.167 10H14.95l-.82-2H9.87zm.82-2h2.622L12 9.8 10.689 13z"}}]}]})(props);
};
RiInputMethodLine.displayName = "RiInputMethodLine";
var RiLayout2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16zM11 5H5v14h6V5zm8 8h-6v6h6v-6zm0-8h-6v6h6V5z"}}]}]})(props);
};
RiLayout2Line.displayName = "RiLayout2Line";
var RiLayout3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M4 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4zm4-11H5v9h3v-9zm11 0h-9v9h9v-9zm0-5H5v3h14V5z"}}]}]})(props);
};
RiLayout3Line.displayName = "RiLayout3Line";
var RiLayout4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-9 10H5v6h6v-6zm2 6h6V5h-6v14zM11 5H5v6h6V5z"}}]}]})(props);
};
RiLayout4Line.displayName = "RiLayout4Line";
var RiLayout5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3zm4-11H4v9h3v-9zm13 0H9v9h11v-9zm0-5H4v3h16V5z"}}]}]})(props);
};
RiLayout5Line.displayName = "RiLayout5Line";
var RiLayout6Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3zm12-11H4v9h11v-9zm5 0h-3v9h3v-9zm0-5H4v3h16V5z"}}]}]})(props);
};
RiLayout6Line.displayName = "RiLayout6Line";
var RiLayoutBottom2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zm-2 10v2H6v-2h12z"}}]}]})(props);
};
RiLayoutBottom2Line.displayName = "RiLayoutBottom2Line";
var RiLayoutBottomLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM4 16v3h16v-3H4zm0-2h16V5H4v9z"}}]}]})(props);
};
RiLayoutBottomLine.displayName = "RiLayoutBottomLine";
var RiLayoutColumnLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11 5H5v14h6V5zm2 0v14h6V5h-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiLayoutColumnLine.displayName = "RiLayoutColumnLine";
var RiLayoutGridLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM11 13H4v6h7v-6zm9 0h-7v6h7v-6zm-9-8H4v6h7V5zm9 0h-7v6h7V5z"}}]}]})(props);
};
RiLayoutGridLine.displayName = "RiLayoutGridLine";
var RiLayoutLeft2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zM8 7v10H6V7h2z"}}]}]})(props);
};
RiLayoutLeft2Line.displayName = "RiLayoutLeft2Line";
var RiLayoutLeftLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM7 5H4v14h3V5zm13 0H9v14h11V5z"}}]}]})(props);
};
RiLayoutLeftLine.displayName = "RiLayoutLeftLine";
var RiLayoutLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 8h14V5H5v3zm9 11v-9H5v9h9zm2 0h3v-9h-3v9zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiLayoutLine.displayName = "RiLayoutLine";
var RiLayoutMasonryLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M22 20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16zm-11-5H4v4h7v-4zm9-4h-7v8h7v-8zm-9-6H4v8h7V5zm9 0h-7v4h7V5z"}}]}]})(props);
};
RiLayoutMasonryLine.displayName = "RiLayoutMasonryLine";
var RiLayoutRight2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zm-2 2v10h-2V7h2z"}}]}]})(props);
};
RiLayoutRight2Line.displayName = "RiLayoutRight2Line";
var RiLayoutRightLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-6 2H4v14h11V5zm5 0h-3v14h3V5z"}}]}]})(props);
};
RiLayoutRightLine.displayName = "RiLayoutRightLine";
var RiLayoutRowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M19 11V5H5v6h14zm0 2H5v6h14v-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiLayoutRowLine.displayName = "RiLayoutRowLine";
var RiLayoutTop2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zm-2 2v2H6V7h12z"}}]}]})(props);
};
RiLayoutTop2Line.displayName = "RiLayoutTop2Line";
var RiLayoutTopLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM4 10v9h16v-9H4zm0-2h16V5H4v3z"}}]}]})(props);
};
RiLayoutTopLine.displayName = "RiLayoutTopLine";
var RiMagicLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.199 9.945a2.6 2.6 0 0 1-.79-1.551l-.403-3.083-2.73 1.486a2.6 2.6 0 0 1-1.72.273L6.5 6.5l.57 3.056a2.6 2.6 0 0 1-.273 1.72l-1.486 2.73 3.083.403a2.6 2.6 0 0 1 1.55.79l2.138 2.257 1.336-2.807a2.6 2.6 0 0 1 1.23-1.231l2.808-1.336-2.257-2.137zm.025 5.563l-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.357-.182l-5.107-.668a.6.6 0 0 1-.449-.881l2.462-4.524a.6.6 0 0 0 .062-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.063.943a.6.6 0 0 0 .396-.062l4.524-2.462a.6.6 0 0 1 .881.45l.668 5.106a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284zm.797 1.927l1.414-1.414 4.243 4.242-1.415 1.415-4.242-4.243z"}}]}]})(props);
};
RiMagicLine.displayName = "RiMagicLine";
var RiMarkPenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z"}}]}]})(props);
};
RiMarkPenLine.displayName = "RiMarkPenLine";
var RiMarkupLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10 10.5l1.038-3.635a1 1 0 0 1 1.924 0L14 10.5V12h.72a1 1 0 0 1 .97.757l1.361 5.447a8 8 0 1 0-10.102 0l1.362-5.447A1 1 0 0 1 9.28 12H10v-1.5zm2 9.5a7.952 7.952 0 0 0 3.265-.694L13.938 14h-3.876l-1.327 5.306A7.95 7.95 0 0 0 12 20zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"}}]}]})(props);
};
RiMarkupLine.displayName = "RiMarkupLine";
var RiPaintBrushLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z"}}]}]})(props);
};
RiPaintBrushLine.displayName = "RiPaintBrushLine";
var RiPaintLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.228 18.732l1.768-1.768 1.767 1.768a2.5 2.5 0 1 1-3.535 0zM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778-2.122-2.121L8.88 1.08zM11 6.03L3.929 13.1 11 20.173l7.071-7.071L11 6.029z"}}]}]})(props);
};
RiPaintLine.displayName = "RiPaintLine";
var RiPaletteLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiPaletteLine.displayName = "RiPaletteLine";
var RiPantoneLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.764 8l-.295-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.301.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302L5.764 8zM8 19h2.209L8 13.533V19zm-2-6.244l-1.673 4.141L6 17.608v-4.852zm1.698-5.309l4.87 12.054 7.418-2.997-4.87-12.053-7.418 2.996zm2.978 2.033a1 1 0 1 1-.749-1.855 1 1 0 0 1 .75 1.855z"}}]}]})(props);
};
RiPantoneLine.displayName = "RiPantoneLine";
var RiPenNibLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.596 1.04l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.656.212-1.485a.5.5 0 0 1 .848-.283zM4.595 20.15c3.722-3.331 7.995-4.328 12.643-5.52l.446-4.018-4.297-4.297-4.018.446c-1.192 4.648-2.189 8.92-5.52 12.643L2.454 18.01c2.828-3.3 3.89-6.953 5.303-13.081l6.364-.707 5.657 5.657-.707 6.364c-6.128 1.414-9.782 2.475-13.081 5.303L4.595 20.15zm5.284-6.03a2 2 0 1 1 2.828-2.828A2 2 0 0 1 9.88 14.12z"}}]}]})(props);
};
RiPenNibLine.displayName = "RiPenNibLine";
var RiPencilLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"}}]}]})(props);
};
RiPencilLine.displayName = "RiPencilLine";
var RiPencilRuler2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.05 14.121L4.93 16.243l2.828 2.828L19.071 7.757 16.243 4.93 14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415-1.414 1.415 1.414 1.414-1.414 1.414-1.414-1.414-1.415 1.414 1.415 1.414-1.415 1.415L7.05 14.12zm9.9-11.313l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0zM14.12 18.363l1.415-1.414 2.242 2.243h1.414v-1.414l-2.242-2.243 1.414-1.414L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 8.464 7.05 6.343 4.928 4.929 6.343l2.121 2.12-1.414 1.415z"}}]}]})(props);
};
RiPencilRuler2Line.displayName = "RiPencilRuler2Line";
var RiPencilRulerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiPencilRulerLine.displayName = "RiPencilRulerLine";
var RiQuillPenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z"}}]}]})(props);
};
RiQuillPenLine.displayName = "RiQuillPenLine";
var RiRuler2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 19h2v-5h-9V5H5v2h2v2H5v2h3v2H5v2h2v2H5v2h2v-2h2v2h2v-3h2v3h2v-2h2v2zm-5-7h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8z"}}]}]})(props);
};
RiRuler2Line.displayName = "RiRuler2Line";
var RiRulerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.414l14.85-14.85a1 1 0 0 1 1.414 0z"}}]}]})(props);
};
RiRulerLine.displayName = "RiRulerLine";
var RiScissors2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 13.414l-2.554 2.554a4 4 0 1 1-1.414-1.414L10.586 12 4.565 5.98a2 2 0 0 1 0-2.83L12 10.587l7.435-7.435a2 2 0 0 1 0 2.828L13.415 12l2.553 2.554a4 4 0 1 1-1.414 1.414L12 13.414zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiScissors2Line.displayName = "RiScissors2Line";
var RiScissorsCutLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 6c0 .732-.197 1.419-.54 2.01L12 10.585l6.728-6.728a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414L10.586 12 8.032 9.446A4 4 0 1 1 10 6zM8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm13.556 14.142a2 2 0 0 1-2.828 0l-5.317-5.316 1.415-1.415 6.73 6.731zM16 11h2v2h-2v-2zm4 0h2v2h-2v-2zM6 11h2v2H6v-2zm-4 0h2v2H2v-2zm4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiScissorsCutLine.displayName = "RiScissorsCutLine";
var RiScissorsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.446 8.032L12 10.586l6.728-6.728a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414L10.586 12 8.032 9.446a4 4 0 1 1 1.414-1.414zm5.38 5.38l6.73 6.73a2 2 0 0 1-2.828 0l-5.317-5.316 1.415-1.415zm-7.412 3.174a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.828zm0-9.172a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828z"}}]}]})(props);
};
RiScissorsLine.displayName = "RiScissorsLine";
var RiScreenshot2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h2v2H3V3zm4 0h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm0 4h2v2h-2V7zM3 19h2v2H3v-2zm0-4h2v2H3v-2zm0-4h2v2H3v-2zm0-4h2v2H3V7zm7.667 4l1.036-1.555A1 1 0 0 1 12.535 9h2.93a1 1 0 0 1 .832.445L17.333 11H20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2.667zM9 19h10v-6h-2.737l-1.333-2h-1.86l-1.333 2H9v6zm5-1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiScreenshot2Line.displayName = "RiScreenshot2Line";
var RiScreenshotLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.993 14.407l-1.552 1.552a4 4 0 1 1-1.418-1.41l1.555-1.556-4.185-4.185 1.415-1.415 4.185 4.185 4.189-4.189 1.414 1.414-4.19 4.19 1.562 1.56a4 4 0 1 1-1.414 1.414l-1.561-1.56zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm2-7V5H5v8H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9h-2z"}}]}]})(props);
};
RiScreenshotLine.displayName = "RiScreenshotLine";
var RiShape2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z"}}]}]})(props);
};
RiShape2Line.displayName = "RiShape2Line";
var RiShapeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.83 20A3.001 3.001 0 1 1 4 16.17V7.83A3.001 3.001 0 1 1 7.83 4h8.34A3.001 3.001 0 1 1 20 7.83v8.34A3.001 3.001 0 1 1 16.17 20H7.83zm0-2h8.34A3.008 3.008 0 0 1 18 16.17V7.83A3.008 3.008 0 0 1 16.17 6H7.83A3.008 3.008 0 0 1 6 7.83v8.34A3.008 3.008 0 0 1 7.83 18zM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiShapeLine.displayName = "RiShapeLine";
var RiSipLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.457 18.957l8.564-8.564-1.414-1.414-8.564 8.564 1.414 1.414zm5.735-11.392l-1.414-1.414 1.414-1.414 1.768 1.767 2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829 1.767 1.768-1.414 1.414-1.414-1.414L7.243 21H3v-4.243l9.192-9.192z"}}]}]})(props);
};
RiSipLine.displayName = "RiSipLine";
var RiSliceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.69 12.918l1.769 1.768c-6.01 6.01-10.96 6.01-15.203 4.596L17.812 3.726l3.536 3.535-5.657 5.657zm-2.828 0l5.657-5.657-.707-.707L6.314 18.052c2.732.107 5.358-.907 8.267-3.416l-1.719-1.718z"}}]}]})(props);
};
RiSliceLine.displayName = "RiSliceLine";
var RiTBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 5v14h14V5H5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 7v7h-2v-7H7V8h10v2h-4z"}}]}]})(props);
};
RiTBoxLine.displayName = "RiTBoxLine";
var RiTableAltLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 13H4v3h16v-3zM8 5H4v9h4V5zm6 0h-4v9h4V5zm6 0h-4v9h4V5z"}}]}]})(props);
};
RiTableAltLine.displayName = "RiTableAltLine";
var RiTableLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 8h16V5H4v3zm10 11v-9h-4v9h4zm2 0h4v-9h-4v9zm-8 0v-9H4v9h4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiTableLine.displayName = "RiTableLine";
var RiToolsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.33 3.271a3.5 3.5 0 0 1 4.254 4.963l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132l1.414 1.414-5.303 5.303a1 1 0 0 1-1.492-1.327l.078-.087 5.303-5.303z"}}]}]})(props);
};
RiToolsLine.displayName = "RiToolsLine";
var RiBracesLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12 2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3zm16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5z"}}]}]})(props);
};
RiBracesLine.displayName = "RiBracesLine";
var RiBracketsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 3v2H6v14h3v2H4V3h5zm6 0h5v18h-5v-2h3V5h-3V3z"}}]}]})(props);
};
RiBracketsLine.displayName = "RiBracketsLine";
var RiBug2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.562 4.148a7.03 7.03 0 0 1 2.876 0l1.683-1.684 1.415 1.415-1.05 1.05A7.03 7.03 0 0 1 18.326 8H21v2h-2.07c.046.327.07.66.07 1v1h2v2h-2v1c0 .34-.024.673-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2h2.07A7.06 7.06 0 0 1 5 15v-1H3v-2h2v-1c0-.34.024-.673.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684zM12 6a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5zm-3 8h6v2H9v-2zm0-4h6v2H9v-2z"}}]}]})(props);
};
RiBug2Line.displayName = "RiBug2Line";
var RiBugLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 19.9a5.002 5.002 0 0 0 4-4.9v-3a4.98 4.98 0 0 0-.415-2h-9.17A4.98 4.98 0 0 0 7 12v3a5.002 5.002 0 0 0 4 4.9V14h2v5.9zm-7.464-2.21A6.979 6.979 0 0 1 5 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732L6.056 8.3a7.01 7.01 0 0 1 .199-.3h11.49c.069.098.135.199.199.3l2.02-1.166 1 1.732-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3c0 .953-.19 1.862-.536 2.69l2.5 1.444-1 1.732-2.526-1.458A6.986 6.986 0 0 1 12 22a6.986 6.986 0 0 1-5.438-2.592l-2.526 1.458-1-1.732 2.5-1.443zM8 6a4 4 0 1 1 8 0H8z"}}]}]})(props);
};
RiBugLine.displayName = "RiBugLine";
var RiCodeBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm16 7l-3.536 3.536-1.414-1.415L17.172 12 15.05 9.879l1.414-1.415L20 12zM6.828 12l2.122 2.121-1.414 1.415L4 12l3.536-3.536L8.95 9.88 6.828 12zm4.416 5H9.116l3.64-10h2.128l-3.64 10z"}}]}]})(props);
};
RiCodeBoxLine.displayName = "RiCodeBoxLine";
var RiCodeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"}}]}]})(props);
};
RiCodeLine.displayName = "RiCodeLine";
var RiCodeSLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12z"}}]}]})(props);
};
RiCodeSLine.displayName = "RiCodeSLine";
var RiCodeSSlashLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"}}]}]})(props);
};
RiCodeSSlashLine.displayName = "RiCodeSSlashLine";
var RiCommandLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10 8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 1 1 10 6.5V8zM8 8V6.5A1.5 1.5 0 1 0 6.5 8H8zm0 8H6.5A1.5 1.5 0 1 0 8 17.5V16zm8-8h1.5A1.5 1.5 0 1 0 16 6.5V8zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5H16zm-6-6v4h4v-4h-4z"}}]}]})(props);
};
RiCommandLine.displayName = "RiCommandLine";
var RiCss3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.8 14h2.04l-.545 2.725 5.744 2.154 7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15-9 3-8-3z"}}]}]})(props);
};
RiCss3Line.displayName = "RiCss3Line";
var RiCursorLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.388 13.498l2.552 7.014-4.698 1.71-2.553-7.014-3.899 2.445L8.41 1.633l11.537 11.232-4.558.633zm-.011 5.818l-2.715-7.46 2.96-.41-5.64-5.49-.79 7.83 2.53-1.587 2.715 7.46.94-.343z"}}]}]})(props);
};
RiCursorLine.displayName = "RiCursorLine";
var RiGitBranchLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5.001 5.001 0 0 1 14 13h-4a3.001 3.001 0 0 0-2.895 2.21zM6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}}]}]})(props);
};
RiGitBranchLine.displayName = "RiGitBranchLine";
var RiGitCommitLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2h-5.126zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiGitCommitLine.displayName = "RiGitCommitLine";
var RiGitMergeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.105 8.79A3.001 3.001 0 0 0 10 11h4a5.001 5.001 0 0 1 4.927 4.146A3.001 3.001 0 0 1 18 21a3 3 0 0 1-1.105-5.79A3.001 3.001 0 0 0 14 13h-4a4.978 4.978 0 0 1-3-1v3.17a3.001 3.001 0 1 1-2 0V8.83a3.001 3.001 0 1 1 2.105-.04zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiGitMergeLine.displayName = "RiGitMergeLine";
var RiGitPullRequestLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 5h2a2 2 0 0 1 2 2v8.17a3.001 3.001 0 1 1-2 0V7h-2v3l-4.5-4L15 2v3zM5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0V8.83zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiGitPullRequestLine.displayName = "RiGitPullRequestLine";
var RiGitRepositoryCommitsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M18 16v-2h1V4H6v10.035A3.53 3.53 0 0 1 6.5 14H8v2H6.5a1.5 1.5 0 0 0 0 3H10v2H6.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-4v-2h3v-3h-1zM7 5h2v2H7V5zm0 3h2v2H7V8zm7 9v6h-2v-6H9l4-5 4 5h-3z"}}]}]})(props);
};
RiGitRepositoryCommitsLine.displayName = "RiGitRepositoryCommitsLine";
var RiGitRepositoryLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"}}]}]})(props);
};
RiGitRepositoryLine.displayName = "RiGitRepositoryLine";
var RiGitRepositoryPrivateLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M6 10v10h13V10H6zm12-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-9 3h2v2H7v-2zm0 3h2v2H7v-2zm0 3h2v2H7v-2z"}}]}]})(props);
};
RiGitRepositoryPrivateLine.displayName = "RiGitRepositoryPrivateLine";
var RiHtml5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z"}}]}]})(props);
};
RiHtml5Line.displayName = "RiHtml5Line";
var RiParenthesesLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.923 21C5.113 18.664 4 15.493 4 12c0-3.493 1.113-6.664 2.923-9h2.014C7.235 5.388 6.2 8.542 6.2 12s1.035 6.612 2.737 9H6.923zm10.151 0H15.06c1.702-2.388 2.737-5.542 2.737-9s-1.035-6.612-2.737-9h2.014c1.81 2.336 2.923 5.507 2.923 9 0 3.493-1.112 6.664-2.923 9z"}}]}]})(props);
};
RiParenthesesLine.displayName = "RiParenthesesLine";
var RiStackshareLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.536 13H7.329a3.001 3.001 0 1 1 0-2h2.207L13 5h3.17a3.001 3.001 0 1 1 .001 2h-2.017l-2.886 4.999L14.155 17h2.016a3.001 3.001 0 1 1 0 2H13l-3.464-6zM19 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM19 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}}]}]})(props);
};
RiStackshareLine.displayName = "RiStackshareLine";
var RiTerminalBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z"}}]}]})(props);
};
RiTerminalBoxLine.displayName = "RiTerminalBoxLine";
var RiTerminalLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z"}}]}]})(props);
};
RiTerminalLine.displayName = "RiTerminalLine";
var RiTerminalWindowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 9V5H4v4h16zm0 2H4v8h16v-8zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h3v5H5v-5zm0-6h2v2H5V6zm4 0h2v2H9V6z"}}]}]})(props);
};
RiTerminalWindowLine.displayName = "RiTerminalWindowLine";
var RiAirplayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.4 13.533l5 6.667a.5.5 0 0 1-.4.8H7a.5.5 0 0 1-.4-.8l5-6.667a.5.5 0 0 1 .8 0zM12 16.33L10 19h4l-2-2.67zM18 19v-2h2V5H4v12h2v2H2.992A.994.994 0 0 1 2 18V4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H18z"}}]}]})(props);
};
RiAirplayLine.displayName = "RiAirplayLine";
var RiBattery2ChargeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 12h3l-5 7v-5H8l5-7v5zm-2-6H7v14h10V6h-4V4h-2v2zM9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3z"}}]}]})(props);
};
RiBattery2ChargeLine.displayName = "RiBattery2ChargeLine";
var RiBattery2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 6H7v14h10V6h-4V4h-2v2zM9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3z"}}]}]})(props);
};
RiBattery2Line.displayName = "RiBattery2Line";
var RiBatteryChargeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 19H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6.625L8.458 7H4v10h4v2zm4.375 0l1.167-2H18V7h-4V5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6.625zM21 9h2v6h-2V9zm-9 2h3l-5 8v-6H7l5-8v6z"}}]}]})(props);
};
RiBatteryChargeLine.displayName = "RiBatteryChargeLine";
var RiBatteryLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 7v10h14V7H4zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm18 4h2v6h-2V9z"}}]}]})(props);
};
RiBatteryLine.displayName = "RiBatteryLine";
var RiBatteryLowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 7v10h14V7H4zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 3h4v8H5V8zm16 1h2v6h-2V9z"}}]}]})(props);
};
RiBatteryLowLine.displayName = "RiBatteryLowLine";
var RiBatterySaverLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h4zm-1 2h-2v2H7v14h10V6h-4V4zm0 5v3h3v2h-3v3h-2v-3H8v-2h3V9h2z"}}]}]})(props);
};
RiBatterySaverLine.displayName = "RiBatterySaverLine";
var RiBatteryShareLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v2h-2V6h-4V4h-2v2H7v14h10v-3h2v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h4zm1 6l5 4-5 4v-3h-1c-1.054 0-2 .95-2 2v3h-2v-3a4 4 0 0 1 4-4h1V8z"}}]}]})(props);
};
RiBatteryShareLine.displayName = "RiBatteryShareLine";
var RiCastLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a13.1 13.1 0 0 0-.153-2H20V5H4v3.153A13.1 13.1 0 0 0 2 8V4a1 1 0 0 1 1-1zm10 18h-2a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11zm-4 0H7a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7zm-4 0H2v-3a3 3 0 0 1 3 3z"}}]}]})(props);
};
RiCastLine.displayName = "RiCastLine";
var RiCellphoneLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2v2zm0 7h10V4H7v5zm0 2v9h10v-9H7z"}}]}]})(props);
};
RiCellphoneLine.displayName = "RiCellphoneLine";
var RiComputerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"}}]}]})(props);
};
RiComputerLine.displayName = "RiComputerLine";
var RiCpuLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 18h12V6H6v12zm8 2h-4v2H8v-2H5a1 1 0 0 1-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 0 1 1-1h3V2h2v2h4V2h2v2h3a1 1 0 0 1 1 1v3h2v2h-2v4h2v2h-2v3a1 1 0 0 1-1 1h-3v2h-2v-2zM8 8h8v8H8V8z"}}]}]})(props);
};
RiCpuLine.displayName = "RiCpuLine";
var RiDatabase2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171zM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10z"}}]}]})(props);
};
RiDatabase2Line.displayName = "RiDatabase2Line";
var RiDatabaseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 19V9H4v10h7zm0-12V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8zm2-2v14h7V5h-7zM5 16h5v2H5v-2zm9 0h5v2h-5v-2zm0-3h5v2h-5v-2zm0-3h5v2h-5v-2zm-9 3h5v2H5v-2z"}}]}]})(props);
};
RiDatabaseLine.displayName = "RiDatabaseLine";
var RiDeviceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5zm-2 0V4H5v14h7V9a1 1 0 0 1 1-1h4zm-3 2v10h6V10h-6z"}}]}]})(props);
};
RiDeviceLine.displayName = "RiDeviceLine";
var RiDeviceRecoverLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14zm-1 2H6v16h12V4zm-6 3a5 5 0 0 1 2.628 9.254L12.5 12H15a3 3 0 1 0-3 3l.955 1.909A5 5 0 1 1 12 7z"}}]}]})(props);
};
RiDeviceRecoverLine.displayName = "RiDeviceRecoverLine";
var RiDualSim1Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15 2l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10zm-.829 2H6v16h12V7.829L14.171 4zM13 16h-2v-6h-1V8h3v8z"}}]}]})(props);
};
RiDualSim1Line.displayName = "RiDualSim1Line";
var RiDualSim2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15 2l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10zm-.829 2H6v16h12V7.829L14.171 4zM12 7.5a3 3 0 0 1 2.009 5.228l-.008-.008.006.01L12.595 14H15v2H9v-1.453l3.67-3.304A1 1 0 1 0 11 10.5H9a3 3 0 0 1 3-3z"}}]}]})(props);
};
RiDualSim2Line.displayName = "RiDualSim2Line";
var RiGamepadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm0 2H7a4 4 0 0 0-3.995 3.8L3 10v4a4 4 0 0 0 3.8 3.995L7 18h10a4 4 0 0 0 3.995-3.8L21 14v-4a4 4 0 0 0-3.8-3.995L17 6zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9h2zm8 4v2h-2v-2h2zm-2-4v2h-2V9h2z"}}]}]})(props);
};
RiGamepadLine.displayName = "RiGamepadLine";
var RiGradienterLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.05 13h2.012a8.001 8.001 0 0 0 15.876 0h2.013c-.502 5.053-4.766 9-9.951 9-5.185 0-9.449-3.947-9.95-9zm0-2C2.55 5.947 6.814 2 12 2s9.449 3.947 9.95 9h-2.012a8.001 8.001 0 0 0-15.876 0H2.049zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiGradienterLine.displayName = "RiGradienterLine";
var RiHardDrive2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 14h14V4H5v10zm0 2v4h14v-4H5zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm11 15h2v2h-2v-2z"}}]}]})(props);
};
RiHardDrive2Line.displayName = "RiHardDrive2Line";
var RiHardDriveLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 10.938A8.004 8.004 0 0 0 11.938 4H5v6.938zm0 2.013V20h14V4h-5.05A10.003 10.003 0 0 1 5 12.95zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm11 14h2v2h-2v-2z"}}]}]})(props);
};
RiHardDriveLine.displayName = "RiHardDriveLine";
var RiHotspotLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11 2v2H7v16h10v-9h2v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5zm2 5a2 2 0 0 1 2 2h-2V7zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V4zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6V1z"}}]}]})(props);
};
RiHotspotLine.displayName = "RiHotspotLine";
var RiInstallLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M9 2v2H5l-.001 10h14L19 4h-4V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5zm9.999 14h-14L5 20h14l-.001-4zM17 17v2h-2v-2h2zM13 2v5h3l-4 4-4-4h3V2h2z"}}]}]})(props);
};
RiInstallLine.displayName = "RiInstallLine";
var RiKeyboardBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 4h2v2H6V7zm0 4h2v2H6v-2zm0 4h12v2H6v-2zm5-4h2v2h-2v-2zm0-4h2v2h-2V7zm5 0h2v2h-2V7zm0 4h2v2h-2v-2z"}}]}]})(props);
};
RiKeyboardBoxLine.displayName = "RiKeyboardBoxLine";
var RiKeyboardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 17h18v2H3v-2zm0-6h3v3H3v-3zm5 0h3v3H8v-3zM3 5h3v3H3V5zm10 0h3v3h-3V5zm5 0h3v3h-3V5zm-5 6h3v3h-3v-3zm5 0h3v3h-3v-3zM8 5h3v3H8V5z"}}]}]})(props);
};
RiKeyboardLine.displayName = "RiKeyboardLine";
var RiMacLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 18v2l2 1v1H8l-.004-.996L10 20v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H14zM4 5v9h16V5H4z"}}]}]})(props);
};
RiMacLine.displayName = "RiMacLine";
var RiMacbookLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z"}}]}]})(props);
};
RiMacbookLine.displayName = "RiMacbookLine";
var RiMouseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.141 4c-1.582 0-2.387.169-3.128.565a3.453 3.453 0 0 0-1.448 1.448C6.169 6.753 6 7.559 6 9.14v5.718c0 1.582.169 2.387.565 3.128.337.63.818 1.111 1.448 1.448.74.396 1.546.565 3.128.565h1.718c1.582 0 2.387-.169 3.128-.565a3.453 3.453 0 0 0 1.448-1.448c.396-.74.565-1.546.565-3.128V9.14c0-1.582-.169-2.387-.565-3.128a3.453 3.453 0 0 0-1.448-1.448C15.247 4.169 14.441 4 12.86 4H11.14zm0-2h1.718c2.014 0 3.094.278 4.072.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 2.058.801 4.072v5.718c0 2.014-.278 3.094-.801 4.072a5.452 5.452 0 0 1-2.268 2.268c-.978.523-2.058.801-4.072.801H11.14c-2.014 0-3.094-.278-4.072-.801a5.452 5.452 0 0 1-2.268-2.268C4.278 17.953 4 16.873 4 14.859V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2zM11 6h2v5h-2V6z"}}]}]})(props);
};
RiMouseLine.displayName = "RiMouseLine";
var RiPhoneFindLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 2a1 1 0 0 1 1 1v8h-2V4H7v16h4v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21-1.413 1.415-2.212-2.21A4 4 0 1 1 15 12zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"}}]}]})(props);
};
RiPhoneFindLine.displayName = "RiPhoneFindLine";
var RiPhoneLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"}}]}]})(props);
};
RiPhoneLine.displayName = "RiPhoneLine";
var RiPhoneLockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 2a1 1 0 0 1 1 1v7h-2V4H7v16h5v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm0 10a3 3 0 0 1 3 3v1h1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5h1v-1a3 3 0 0 1 3-3zm2 6h-4v2h4v-2zm-2-4c-.508 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1z"}}]}]})(props);
};
RiPhoneLockLine.displayName = "RiPhoneLockLine";
var RiRadarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.506 3.623l-1.023 1.772c-2.91-.879-5.514-.45-6.411 1.105-1.178 2.04.79 5.652 4.678 7.897s8 2.142 9.178.103c.898-1.555-.033-4.024-2.249-6.105l1.023-1.772c3.082 2.709 4.463 6.27 2.958 8.877-1.86 3.222-7.189 3.355-11.91.63C4.029 13.402 1.48 8.721 3.34 5.5c1.505-2.607 5.28-3.192 9.166-1.877zm3.378-1.85l1.732 1-5 8.66-1.732-1 5-8.66zM6.732 20H17v2H5.017a.995.995 0 0 1-.883-.5 1.005 1.005 0 0 1 0-1l2.25-3.897 1.732 1L6.732 20z"}}]}]})(props);
};
RiRadarLine.displayName = "RiRadarLine";
var RiRemoteControl2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-1 2H7v16h10V4zm-2 11v2h-2v-2h2zm-4 0v2H9v-2h2zm2-9v2h2v2h-2.001L13 12h-2l-.001-2H9V8h2V6h2z"}}]}]})(props);
};
RiRemoteControl2Line.displayName = "RiRemoteControl2Line";
var RiRemoteControlLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 12a1 1 0 0 1 1 1v9h-2v-8H8v8H6v-9a1 1 0 0 1 1-1h10zm-5 4v2h-2v-2h2zm0-10a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.157 0l-1.789-.895A6 6 0 0 1 12 6zm0-4a10 10 0 0 1 8.946 5.527l-1.789.895A8 8 0 0 0 12 4a8 8 0 0 0-7.157 4.422l-1.79-.895A10 10 0 0 1 12 2z"}}]}]})(props);
};
RiRemoteControlLine.displayName = "RiRemoteControlLine";
var RiRouterLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 14v-3h2v3h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5zM2.51 8.837C3.835 4.864 7.584 2 12 2s8.166 2.864 9.49 6.837l-1.898.632a8.003 8.003 0 0 0-15.184 0l-1.897-.632zm3.796 1.265a6.003 6.003 0 0 1 11.388 0l-1.898.633a4.002 4.002 0 0 0-7.592 0l-1.898-.633zM7 16v4h10v-4H7z"}}]}]})(props);
};
RiRouterLine.displayName = "RiRouterLine";
var RiSave2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 5v14h14V7.828L16.172 5H5zM4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM6 6h9v4H6V6z"}}]}]})(props);
};
RiSave2Line.displayName = "RiSave2Line";
var RiSave3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 19h1V6.828L17.172 5H16v4H7V5H5v14h1v-7h12v7zM4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 11v5h8v-5H8z"}}]}]})(props);
};
RiSave3Line.displayName = "RiSave3Line";
var RiSaveLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 19v-6h10v6h2V7.828L16.172 5H5v14h2zM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 12v4h6v-4H9z"}}]}]})(props);
};
RiSaveLine.displayName = "RiSaveLine";
var RiSdCardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 7.828V20h12V4H9.828L6 7.828zm-1.707-1.12L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707zM15 5h2v4h-2V5zm-3 0h2v4h-2V5zM9 6h2v3H9V6z"}}]}]})(props);
};
RiSdCardLine.displayName = "RiSdCardLine";
var RiSdCardMiniLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 4v5.793a2.5 2.5 0 0 1-.73 1.765L6 12.833V20h12V4H8zM7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.706l1.562-1.568A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1zm8 3h2v4h-2V5zm-3 0h2v4h-2V5zM9 5h2v4H9V5z"}}]}]})(props);
};
RiSdCardMiniLine.displayName = "RiSdCardMiniLine";
var RiSensorLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6H6zm7-6v6h-2V2h2z"}}]}]})(props);
};
RiSensorLine.displayName = "RiSensorLine";
var RiServerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 11h14V5H5v6zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 9H5v6h14v-6zM7 15h3v2H7v-2zm0-8h3v2H7V7z"}}]}]})(props);
};
RiServerLine.displayName = "RiServerLine";
var RiSimCard2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 4v16h12V7.828L14.172 4H6zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 8v8h-2v-6H8v-2h5zm-5 3h2v2H8v-2zm6 0h2v2h-2v-2zm0-3h2v2h-2v-2zm-6 6h2v2H8v-2zm6 0h2v2h-2v-2z"}}]}]})(props);
};
RiSimCard2Line.displayName = "RiSimCard2Line";
var RiSimCardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 4v16h12V7.828L14.172 4H6zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 10h8v6H8v-6z"}}]}]})(props);
};
RiSimCardLine.displayName = "RiSimCardLine";
var RiSmartphoneLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]}]})(props);
};
RiSmartphoneLine.displayName = "RiSmartphoneLine";
var RiTabletLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 4v16h12V4H6zM5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]}]})(props);
};
RiTabletLine.displayName = "RiTabletLine";
var RiTv2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 18V4zm2 1v12h16V5H4zm1 15h14v2H5v-2z"}}]}]})(props);
};
RiTv2Line.displayName = "RiTv2Line";
var RiTvLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464 7.464 1.05 11.414 5h1.172l3.95-3.95 1.414 1.414L15.414 5zM4 7v12h16V7H4z"}}]}]})(props);
};
RiTvLine.displayName = "RiTvLine";
var RiUDiskLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 12H5v8h14v-8zM5 10V2h14v8h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1zm2 0h10V4H7v6zm2-4h2v2H9V6zm4 0h2v2h-2V6z"}}]}]})(props);
};
RiUDiskLine.displayName = "RiUDiskLine";
var RiUninstallLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8 2v2H5l-.001 10h14L19 4h-3V2h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4zm10.999 14h-14L5 20h14l-.001-4zM17 17v2h-2v-2h2zM12 2l4 4h-3v5h-2V6H8l4-4z"}}]}]})(props);
};
RiUninstallLine.displayName = "RiUninstallLine";
var RiArticleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"}}]}]})(props);
};
RiArticleLine.displayName = "RiArticleLine";
var RiBillLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 9h8v2H8V9zm0 4h8v2H8v-2z"}}]}]})(props);
};
RiBillLine.displayName = "RiBillLine";
var RiBook2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05zM16 9H8V7h8v2z"}}]}]})(props);
};
RiBook2Line.displayName = "RiBook2Line";
var RiBook3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1zM5 18a2 2 0 0 0 2 2h12V10H7a3.982 3.982 0 0 1-2-.535V18zM20 7H7a1 1 0 1 1 0-2h13v2z"}}]}]})(props);
};
RiBook3Line.displayName = "RiBook3Line";
var RiBookLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z"}}]}]})(props);
};
RiBookLine.displayName = "RiBookLine";
var RiBookMarkLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM10 4H6a1 1 0 0 0-1 1v10.337A3.486 3.486 0 0 1 6.5 15H19V4h-2v8l-3.5-2-3.5 2V4z"}}]}]})(props);
};
RiBookMarkLine.displayName = "RiBookMarkLine";
var RiBookOpenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8zm7-2V5h-5a2 2 0 0 0-2 2v12h7zm-9 0V7a2 2 0 0 0-2-2H4v14h7z"}}]}]})(props);
};
RiBookOpenLine.displayName = "RiBookOpenLine";
var RiBookReadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM11 5H4v14h7V5zm2 0v14h7V5h-7zm1 2h5v2h-5V7zm0 3h5v2h-5v-2z"}}]}]})(props);
};
RiBookReadLine.displayName = "RiBookReadLine";
var RiBookletLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z"}}]}]})(props);
};
RiBookletLine.displayName = "RiBookletLine";
var RiClipboardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z"}}]}]})(props);
};
RiClipboardLine.displayName = "RiClipboardLine";
var RiContactsBook2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2v-2H6a1 1 0 0 0 0 2h13zM5 16.17c.313-.11.65-.17 1-.17h13V4H6a1 1 0 0 0-1 1v11.17zM12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-3 4a3 3 0 0 1 6 0H9z"}}]}]})(props);
};
RiContactsBook2Line.displayName = "RiContactsBook2Line";
var RiContactsBookLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"}}]}]})(props);
};
RiContactsBookLine.displayName = "RiContactsBookLine";
var RiContactsBookUploadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.005 2C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2h16.005zM7 4H5v16h2V4zm12 0H9v16h10V4zm-5 4l4 4h-3v4h-2v-4h-3l4-4zm10 4v4h-2v-4h2zm0-6v4h-2V6h2z"}}]}]})(props);
};
RiContactsBookUploadLine.displayName = "RiContactsBookUploadLine";
var RiFile2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8zm7-4v5H5v11h14V4h-9z"}}]}]})(props);
};
RiFile2Line.displayName = "RiFile2Line";
var RiFile3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9z"}}]}]})(props);
};
RiFile3Line.displayName = "RiFile3Line";
var RiFile4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 16l-6.003 6H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13zm-2-1V4H5v16h9v-5h5z"}}]}]})(props);
};
RiFile4Line.displayName = "RiFile4Line";
var RiFileAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3z"}}]}]})(props);
};
RiFileAddLine.displayName = "RiFileAddLine";
var RiFileChart2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM12 8v4h4a4 4 0 1 1-4-4z"}}]}]})(props);
};
RiFileChart2Line.displayName = "RiFileChart2Line";
var RiFileChartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11 7h2v10h-2V7zm4 4h2v6h-2v-6zm-8 2h2v4H7v-4zm8-9H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"}}]}]})(props);
};
RiFileChartLine.displayName = "RiFileChartLine";
var RiFileCloudLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14.997 2L21 8l.001 4.26a5.471 5.471 0 0 0-2-1.053L19 9h-5V4H5v16h5.06a4.73 4.73 0 0 0 .817 2H3.993a.993.993 0 0 1-.986-.876L3 21.008V2.992c0-.498.387-.927.885-.985L4.002 2h10.995zM17.5 13a3.5 3.5 0 0 1 3.5 3.5l-.001.103a2.75 2.75 0 0 1-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.392L14 16.5a3.5 3.5 0 0 1 3.5-3.5zm0 2a1.5 1.5 0 0 0-1.473 1.215l-.02.14L16 16.5v1.62l-1.444.406a.75.75 0 0 0 .08 1.466l.109.008h5.51a.75.75 0 0 0 .19-1.474l-1.013-.283L19 18.12V16.5l-.007-.144A1.5 1.5 0 0 0 17.5 15z"}}]}]})(props);
};
RiFileCloudLine.displayName = "RiFileCloudLine";
var RiFileCodeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415L17.657 12zM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415L6.343 12z"}}]}]})(props);
};
RiFileCodeLine.displayName = "RiFileCodeLine";
var RiFileCopy2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2zm-2 5h6v2H7v-2zm0 4h6v2H7v-2z"}}]}]})(props);
};
RiFileCopy2Line.displayName = "RiFileCopy2Line";
var RiFileCopyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"}}]}]})(props);
};
RiFileCopyLine.displayName = "RiFileCopyLine";
var RiFileDamageLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M19 9h-5V4H5v7.857l1.5 1.393L10 9.5l3 5 2-2.5 3 3-3-.5-2 2.5-3-4-3 3.5-2-1.25V20h14V9zm2-1v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8z"}}]}]})(props);
};
RiFileDamageLine.displayName = "RiFileDamageLine";
var RiFileDownloadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"}}]}]})(props);
};
RiFileDownloadLine.displayName = "RiFileDownloadLine";
var RiFileEditLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002.002-1.412 7.778-7.778z"}}]}]})(props);
};
RiFileEditLine.displayName = "RiFileEditLine";
var RiFileExcel2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z"}}]}]})(props);
};
RiFileExcel2Line.displayName = "RiFileExcel2Line";
var RiFileExcelLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13.2 12l2.8 4h-2.4L12 13.714 10.4 16H8l2.8-4L8 8h2.4l1.6 2.286L13.6 8H15V4H5v16h14V8h-3l-2.8 4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"}}]}]})(props);
};
RiFileExcelLine.displayName = "RiFileExcelLine";
var RiFileForbidLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.29 20c.215.722.543 1.396.965 2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v4.674a6.95 6.95 0 0 0-2-.603V8h-4V4H5v16h6.29zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm-1.293-2.292a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001z"}}]}]})(props);
};
RiFileForbidLine.displayName = "RiFileForbidLine";
var RiFileHwpLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16 2l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm0 6.667H8V7.333h3.333V6h1.334l-.001 1.333h2.333L15 4H5v16h14V8l-3-.001v.668zm-6.667 6v1.999H16V18H8v-3.333h1.333zM12 14.333a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 1.333a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334z"}}]}]})(props);
};
RiFileHwpLine.displayName = "RiFileHwpLine";
var RiFileInfoLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 11h2v6h-2v-6zm0-4h2v2h-2V7z"}}]}]})(props);
};
RiFileInfoLine.displayName = "RiFileInfoLine";
var RiFileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z"}}]}]})(props);
};
RiFileLine.displayName = "RiFileLine";
var RiFileList2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"}}]}]})(props);
};
RiFileList2Line.displayName = "RiFileList2Line";
var RiFileList3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zm-2 3V4H4v15a1 1 0 0 0 1 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"}}]}]})(props);
};
RiFileList3Line.displayName = "RiFileList3Line";
var RiFileListLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"}}]}]})(props);
};
RiFileListLine.displayName = "RiFileListLine";
var RiFileLockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM15 11h1v5H8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"}}]}]})(props);
};
RiFileLockLine.displayName = "RiFileLockLine";
var RiFileMarkLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 4H5v16h14V4h-5v9l-3.5-2L7 13V4z"}}]}]})(props);
};
RiFileMarkLine.displayName = "RiFileMarkLine";
var RiFileMusicLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16 8v2h-3v4.5a2.5 2.5 0 1 1-2-2.45V8h4V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"}}]}]})(props);
};
RiFileMusicLine.displayName = "RiFileMusicLine";
var RiFilePaper2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 2a3 3 0 0 1 3 3v2h-2v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2a1 1 0 0 0 .883.993L18 20a1 1 0 0 0 .993-.883L19 19V4H6a1 1 0 0 0-.993.883L5 5v10H3V5a3 3 0 0 1 3-3h14z"}}]}]})(props);
};
RiFilePaper2Line.displayName = "RiFilePaper2Line";
var RiFilePaperLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 17v2a1 1 0 0 0 2 0V4H5v11H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16z"}}]}]})(props);
};
RiFilePaperLine.displayName = "RiFilePaperLine";
var RiFilePdfLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 16H8V8h4a4 4 0 1 1 0 8zm-2-6v4h2a2 2 0 1 0 0-4h-2zm5-6H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"}}]}]})(props);
};
RiFilePdfLine.displayName = "RiFilePdfLine";
var RiFilePpt2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zM5 8h8v6H7v2H5V8zm2 2v2h4v-2H7z"}}]}]})(props);
};
RiFilePpt2Line.displayName = "RiFilePpt2Line";
var RiFilePptLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM5 4v16h14V8h-3v6h-6v2H8V8h7V4H5zm5 6v2h4v-2h-4z"}}]}]})(props);
};
RiFilePptLine.displayName = "RiFilePptLine";
var RiFileReduceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM16 11v2H8v-2h8z"}}]}]})(props);
};
RiFileReduceLine.displayName = "RiFileReduceLine";
var RiFileSearchLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zm10.529 11.454a4.002 4.002 0 0 1-4.86-6.274 4 4 0 0 1 6.274 4.86l2.21 2.21-1.414 1.415-2.21-2.21zm-.618-2.032a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828z"}}]}]})(props);
};
RiFileSearchLine.displayName = "RiFileSearchLine";
var RiFileSettingsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8.595 12.812a3.51 3.51 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0 1 11 8.645V7.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573-1 1.732-.992-.573a3.496 3.496 0 0 1-1.405.812V16.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573-1-1.732.992-.572zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"}}]}]})(props);
};
RiFileSettingsLine.displayName = "RiFileSettingsLine";
var RiFileShield2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"}}]}]})(props);
};
RiFileShield2Line.displayName = "RiFileShield2Line";
var RiFileShieldLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14 8V4H5v16h14V9h-3v4.62c0 .844-.446 1.633-1.187 2.101L12 17.498 9.187 15.72C8.446 15.253 8 14.464 8 13.62V8h6zm7 0v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-11 5.62c0 .15.087.304.255.41L12 15.132l1.745-1.102c.168-.106.255-.26.255-.41V10h-4v3.62z"}}]}]})(props);
};
RiFileShieldLine.displayName = "RiFileShieldLine";
var RiFileShredLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 12h12V8h-4V4H6v8zm-2 0V2.995c0-.55.445-.995.996-.995H15l5 5v5h2v2H2v-2h2zm-1 4h2v6H3v-6zm16 0h2v6h-2v-6zm-4 0h2v6h-2v-6zm-4 0h2v6h-2v-6zm-4 0h2v6H7v-6z"}}]}]})(props);
};
RiFileShredLine.displayName = "RiFileShredLine";
var RiFileTextLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"}}]}]})(props);
};
RiFileTextLine.displayName = "RiFileTextLine";
var RiFileTransferLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM12 11V8l4 4-4 4v-3H8v-2h4z"}}]}]})(props);
};
RiFileTransferLine.displayName = "RiFileTransferLine";
var RiFileUnknowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11 15h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355zM15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"}}]}]})(props);
};
RiFileUnknowLine.displayName = "RiFileUnknowLine";
var RiFileUploadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM13 12v4h-2v-4H8l4-4 4 4h-3z"}}]}]})(props);
};
RiFileUploadLine.displayName = "RiFileUploadLine";
var RiFileUserLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zm9 8.508a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM7.527 17a4.5 4.5 0 0 1 8.946 0H7.527z"}}]}]})(props);
};
RiFileUserLine.displayName = "RiFileUserLine";
var RiFileWarningLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z"}}]}]})(props);
};
RiFileWarningLine.displayName = "RiFileWarningLine";
var RiFileWord2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM11 8h2v8h-2l-2-2-2 2H5V8h2l.01 5L9 11l2 1.989V8z"}}]}]})(props);
};
RiFileWord2Line.displayName = "RiFileWord2Line";
var RiFileWordLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16 8v8h-2l-2-2-2 2H8V8h2v5l2-2 2 2V8h1V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"}}]}]})(props);
};
RiFileWordLine.displayName = "RiFileWordLine";
var RiFileZipLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zm-5-8v5h-4v-3h2v-2h2zm-2-8h2v2h-2V4zm-2 2h2v2h-2V6zm2 2h2v2h-2V8zm-2 2h2v2h-2v-2z"}}]}]})(props);
};
RiFileZipLine.displayName = "RiFileZipLine";
var RiFolder2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM20 11H4v8h16v-8zm0-2V7h-8.414l-2-2H4v4h16z"}}]}]})(props);
};
RiFolder2Line.displayName = "RiFolder2Line";
var RiFolder3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 7v12h16V7H4z"}}]}]})(props);
};
RiFolder3Line.displayName = "RiFolder3Line";
var RiFolder4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14h2z"}}]}]})(props);
};
RiFolder4Line.displayName = "RiFolder4Line";
var RiFolder5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.087 9h17.826a1 1 0 0 1 .997 1.083l-.834 10a1 1 0 0 1-.996.917H3.92a1 1 0 0 1-.996-.917l-.834-10A1 1 0 0 1 3.087 9zM4.84 19h14.32l.666-8H4.174l.666 8zm8.574-14H20a1 1 0 0 1 1 1v1H3V4a1 1 0 0 1 1-1h7.414l2 2z"}}]}]})(props);
};
RiFolder5Line.displayName = "RiFolder5Line";
var RiFolderAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 7V9h2v3h3v2h-3v3h-2v-3H8v-2h3z"}}]}]})(props);
};
RiFolderAddLine.displayName = "RiFolderAddLine";
var RiFolderChart2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 4v4h4a4 4 0 1 1-4-4z"}}]}]})(props);
};
RiFolderChart2Line.displayName = "RiFolderChart2Line";
var RiFolderChartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 4h2v8h-2V9zm4 3h2v5h-2v-5zm-8 2h2v3H7v-3z"}}]}]})(props);
};
RiFolderChartLine.displayName = "RiFolderChartLine";
var RiFolderDownloadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm9 8h3l-4 4-4-4h3V9h2v4z"}}]}]})(props);
};
RiFolderDownloadLine.displayName = "RiFolderDownloadLine";
var RiFolderForbidLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 11.255a6.972 6.972 0 0 0-2-.965V7h-8.414l-2-2H4v14h7.29c.215.722.543 1.396.965 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v5.255zM18 22a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm-1.293-2.292a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001z"}}]}]})(props);
};
RiFolderForbidLine.displayName = "RiFolderForbidLine";
var RiFolderInfoLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 7h2v5h-2v-5zm0-3h2v2h-2V9z"}}]}]})(props);
};
RiFolderInfoLine.displayName = "RiFolderInfoLine";
var RiFolderKeyholeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10.414 3l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zm-.828 2H4v14h16V7h-8.414l-2-2zM12 9a2 2 0 0 1 1.001 3.732L13 17h-2v-4.268A2 2 0 0 1 12 9z"}}]}]})(props);
};
RiFolderKeyholeLine.displayName = "RiFolderKeyholeLine";
var RiFolderLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V7h-8.414l-2-2H4zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2z"}}]}]})(props);
};
RiFolderLine.displayName = "RiFolderLine";
var RiFolderLockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm11 8h1v4H8v-4h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"}}]}]})(props);
};
RiFolderLockLine.displayName = "RiFolderLockLine";
var RiFolderMusicLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 8.05V9h5v2h-3v4.5a2.5 2.5 0 1 1-2-2.45z"}}]}]})(props);
};
RiFolderMusicLine.displayName = "RiFolderMusicLine";
var RiFolderOpenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z"}}]}]})(props);
};
RiFolderOpenLine.displayName = "RiFolderOpenLine";
var RiFolderReceivedLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7zm-2 4h3v2h-3v3.5L15 18l5-4.5V17z"}}]}]})(props);
};
RiFolderReceivedLine.displayName = "RiFolderReceivedLine";
var RiFolderReduceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4 7h8v2H8v-2z"}}]}]})(props);
};
RiFolderReduceLine.displayName = "RiFolderReduceLine";
var RiFolderSettingsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4.591 8.809a3.508 3.508 0 0 1 0-1.622l-.991-.572 1-1.732.991.573a3.495 3.495 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.403.812l.992-.573 1 1.731-.991.573a3.508 3.508 0 0 1 0 1.622l.991.572-1 1.731-.991-.572a3.495 3.495 0 0 1-1.404.811v1.145h-2V16.35a3.495 3.495 0 0 1-1.404-.811l-.991.572-1-1.73.991-.573zm3.404.688a1.5 1.5 0 1 0 0-2.998 1.5 1.5 0 0 0 0 2.998z"}}]}]})(props);
};
RiFolderSettingsLine.displayName = "RiFolderSettingsLine";
var RiFolderSharedLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7zm-4 4v-3.5l5 4.5-5 4.5V19h-3v-2h3z"}}]}]})(props);
};
RiFolderSharedLine.displayName = "RiFolderSharedLine";
var RiFolderShield2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M22 9h-2V7h-8.414l-2-2H4v14h7.447a4.97 4.97 0 0 0 1.664 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v3zm-9 2h9v5.949c0 .99-.501 1.916-1.336 2.465L17.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 13 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"}}]}]})(props);
};
RiFolderShield2Line.displayName = "RiFolderShield2Line";
var RiFolderShieldLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4 4h8v4.904c0 .892-.446 1.724-1.187 2.219L12 17.998l-2.813-1.875A2.667 2.667 0 0 1 8 13.904V9zm2 4.904c0 .223.111.431.297.555L12 15.594l1.703-1.135a.667.667 0 0 0 .297-.555V11h-4v2.904z"}}]}]})(props);
};
RiFolderShieldLine.displayName = "RiFolderShieldLine";
var RiFolderTransferLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"}}]}]})(props);
};
RiFolderTransferLine.displayName = "RiFolderTransferLine";
var RiFolderUnknowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 11h2v2h-2v-2zm-2.433-5.187A3.501 3.501 0 1 1 12 15h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z"}}]}]})(props);
};
RiFolderUnknowLine.displayName = "RiFolderUnknowLine";
var RiFolderUploadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm9 8v4h-2v-4H8l4-4 4 4h-3z"}}]}]})(props);
};
RiFolderUploadLine.displayName = "RiFolderUploadLine";
var RiFolderUserLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4 13a4 4 0 1 1 8 0H8zm4-5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"}}]}]})(props);
};
RiFolderUserLine.displayName = "RiFolderUserLine";
var RiFolderWarningLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 10h2v2h-2v-2zm0-6h2v5h-2V9z"}}]}]})(props);
};
RiFolderWarningLine.displayName = "RiFolderWarningLine";
var RiFolderZipLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10.414 3l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM18 18h-4v-3h2v-2h-2v-2h2V9h-2V7h-2.414l-2-2H4v14h16V7h-4v2h2v2h-2v2h2v5z"}}]}]})(props);
};
RiFolderZipLine.displayName = "RiFolderZipLine";
var RiFoldersLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 7V4a1 1 0 0 1 1-1h6.414l2 2H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3zm0 2H4v10h12v-2H6V9zm2-4v10h12V7h-5.414l-2-2H8z"}}]}]})(props);
};
RiFoldersLine.displayName = "RiFoldersLine";
var RiKeynoteLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.44 10h15.12l-1.2-6H5.64l-1.2 6zM13 12v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2h13.998c.553 0 1.087.43 1.196.977l1.61 8.046c.108.54-.26.977-.797.977H13z"}}]}]})(props);
};
RiKeynoteLine.displayName = "RiKeynoteLine";
var RiMarkdownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm3 10.5H5v-7h2l2 2 2-2h2v7h-2v-4l-2 2-2-2v4zm11-3h2l-3 3-3-3h2v-4h2v4z"}}]}]})(props);
};
RiMarkdownLine.displayName = "RiMarkdownLine";
var RiNewspaperLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16 20V4H4v15a1 1 0 0 0 1 1h11zm3 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3zm-1-10v7a1 1 0 0 0 2 0v-7h-2zM6 6h6v6H6V6zm2 2v2h2V8H8zm-2 5h8v2H6v-2zm0 3h8v2H6v-2z"}}]}]})(props);
};
RiNewspaperLine.displayName = "RiNewspaperLine";
var RiNumbersLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 18H4v-8h5v8zm-2-2v-4H6v4h1zm6 0V8h-1v8h1zm2 2h-5V6h5v12zm4-2V4h-1v12h1zm2 2h-5V2h5v16zm1 4H3v-2h19v2z"}}]}]})(props);
};
RiNumbersLine.displayName = "RiNumbersLine";
var RiPagesLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z"}}]}]})(props);
};
RiPagesLine.displayName = "RiPagesLine";
var RiPassportLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16zm-1 2H5v16h14V4zm-3 12v2H8v-2h8zM12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"}}]}]})(props);
};
RiPassportLine.displayName = "RiPassportLine";
var RiStickyNote2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.998 21A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16l-5.003 5H3.998zM5 19h10.169L19 15.171V5H5v14z"}}]}]})(props);
};
RiStickyNote2Line.displayName = "RiStickyNote2Line";
var RiStickyNoteLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z"}}]}]})(props);
};
RiStickyNoteLine.displayName = "RiStickyNoteLine";
var RiTaskLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992zM19 4H5v16h14V4zm-7.707 9.121l4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z"}}]}]})(props);
};
RiTaskLine.displayName = "RiTaskLine";
var RiTodoLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2zm0 2v2h-2V4H9v2H7V4H5v16h14V4h-2zM7 8h10v2H7V8zm0 4h10v2H7v-2z"}}]}]})(props);
};
RiTodoLine.displayName = "RiTodoLine";
var RiAuctionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"}}]}]})(props);
};
RiAuctionLine.displayName = "RiAuctionLine";
var RiBankCard2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 9H4v7h16v-7zm0-4V5H4v3h16z"}}]}]})(props);
};
RiBankCard2Line.displayName = "RiBankCard2Line";
var RiBankCardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-6 6h4v2h-4v-2z"}}]}]})(props);
};
RiBankCardLine.displayName = "RiBankCardLine";
var RiBitCoinLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-4H8V8h3V6h2v2h1a2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-2 4h-1v2h-2v-2zm-1-3v1h4a.5.5 0 1 0 0-1h-4zm0-3v1h4a.5.5 0 1 0 0-1h-4z"}}]}]})(props);
};
RiBitCoinLine.displayName = "RiBitCoinLine";
var RiCoinLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 4c6.075 0 11 2.686 11 6v4c0 3.314-4.925 6-11 6-5.967 0-10.824-2.591-10.995-5.823L1 14v-4c0-3.314 4.925-6 11-6zm0 12c-3.72 0-7.01-1.007-9-2.55V14c0 1.882 3.883 4 9 4 5.01 0 8.838-2.03 8.995-3.882L21 14l.001-.55C19.011 14.992 15.721 16 12 16zm0-10c-5.117 0-9 2.118-9 4 0 1.882 3.883 4 9 4s9-2.118 9-4c0-1.882-3.883-4-9-4z"}}]}]})(props);
};
RiCoinLine.displayName = "RiCoinLine";
var RiCoinsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8.003 8.003 0 0 1 14 2zm-4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm1 1v1h2v2H9a.5.5 0 0 0-.09.992L9 13h2a2.5 2.5 0 1 1 0 5v1H9v-1H7v-2h4a.5.5 0 0 0 .09-.992L11 15H9a2.5 2.5 0 1 1 0-5V9h2zm3-5a5.985 5.985 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z"}}]}]})(props);
};
RiCoinsLine.displayName = "RiCoinsLine";
var RiCopperCoinLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-12.95L16.95 12 12 16.95 7.05 12 12 7.05zm0 2.829L9.879 12 12 14.121 14.121 12 12 9.879z"}}]}]})(props);
};
RiCopperCoinLine.displayName = "RiCopperCoinLine";
var RiCopperDiamondLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 8h6l2.5 3.5L12 17l-5.5-5.5L9 8zm1.03 2l-.92 1.29L12 14.18l2.89-2.89-.92-1.29h-3.94z"}}]}]})(props);
};
RiCopperDiamondLine.displayName = "RiCopperDiamondLine";
var RiCoupon2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5zM14 5H4v2.968a4.5 4.5 0 0 1 0 8.064V19h10V5zm2 0v14h4v-2.968a4.5 4.5 0 0 1 0-8.064V5h-4z"}}]}]})(props);
};
RiCoupon2Line.displayName = "RiCoupon2Line";
var RiCoupon3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiCoupon3Line.displayName = "RiCoupon3Line";
var RiCoupon4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0zm-1.465-2A3.998 3.998 0 0 1 12 17c1.48 0 2.773.804 3.465 2H20V5h-4.535A3.998 3.998 0 0 1 12 7a3.998 3.998 0 0 1-3.465-2H4v14h4.535zM6 8h2v8H6V8zm10 0h2v8h-2V8z"}}]}]})(props);
};
RiCoupon4Line.displayName = "RiCoupon4Line";
var RiCoupon5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 14v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a2 2 0 1 0 0-4V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 1 0 0 4zm-2 1.465A3.998 3.998 0 0 1 17 12c0-1.48.804-2.773 2-3.465V4H5v4.535C6.196 9.227 7 10.52 7 12c0 1.48-.804 2.773-2 3.465V20h14v-4.535zM9 6h6v2H9V6zm0 10h6v2H9v-2z"}}]}]})(props);
};
RiCoupon5Line.displayName = "RiCoupon5Line";
var RiCouponLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5zm2-1.532a4.5 4.5 0 0 1 0 8.064V19h16v-2.968a4.5 4.5 0 0 1 0-8.064V5H4v2.968zM9 9h6v2H9V9zm0 4h6v2H9v-2z"}}]}]})(props);
};
RiCouponLine.displayName = "RiCouponLine";
var RiCurrencyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z"}}]}]})(props);
};
RiCurrencyLine.displayName = "RiCurrencyLine";
var RiExchangeBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 6V6l5 5H8V9h4zm-5 4h9v2h-4v3l-5-5z"}}]}]})(props);
};
RiExchangeBoxLine.displayName = "RiExchangeBoxLine";
var RiExchangeCnyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.375 15.103A8.001 8.001 0 0 0 8.03 5.053l-.992-1.737A9.996 9.996 0 0 1 17 3.34c4.49 2.592 6.21 8.142 4.117 12.77l1.342.774-4.165 2.214-.165-4.714 1.246.719zM4.625 8.897a8.001 8.001 0 0 0 11.345 10.05l.992 1.737A9.996 9.996 0 0 1 7 20.66C2.51 18.068.79 12.518 2.883 7.89L1.54 7.117l4.165-2.214.165 4.714-1.246-.719zM13 13.536h3v2h-3v2h-2v-2H8v-2h3v-1H8v-2h2.586L8.464 8.414 9.88 7 12 9.121 14.121 7l1.415 1.414-2.122 2.122H16v2h-3v1z"}}]}]})(props);
};
RiExchangeCnyLine.displayName = "RiExchangeCnyLine";
var RiExchangeDollarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.375 15.103A8.001 8.001 0 0 0 8.03 5.053l-.992-1.737A9.996 9.996 0 0 1 17 3.34c4.49 2.592 6.21 8.142 4.117 12.77l1.342.774-4.165 2.214-.165-4.714 1.246.719zM4.625 8.897a8.001 8.001 0 0 0 11.345 10.05l.992 1.737A9.996 9.996 0 0 1 7 20.66C2.51 18.068.79 12.518 2.883 7.89L1.54 7.117l4.165-2.214.165 4.714-1.246-.719zM8.5 14H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V7h2v1h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v1h-2v-1H8.5v-2z"}}]}]})(props);
};
RiExchangeDollarLine.displayName = "RiExchangeDollarLine";
var RiExchangeFundsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.375 15.103A8.001 8.001 0 0 0 8.03 5.053l-.992-1.737A9.996 9.996 0 0 1 17 3.34c4.49 2.592 6.21 8.142 4.117 12.77l1.342.774-4.165 2.214-.165-4.714 1.246.719zM4.625 8.897a8.001 8.001 0 0 0 11.345 10.05l.992 1.737A9.996 9.996 0 0 1 7 20.66C2.51 18.068.79 12.518 2.883 7.89L1.54 7.117l4.165-2.214.165 4.714-1.246-.719zm8.79 5.931L10.584 12l-2.828 2.828-1.414-1.414 4.243-4.242L13.414 12l2.829-2.828 1.414 1.414-4.243 4.242z"}}]}]})(props);
};
RiExchangeFundsLine.displayName = "RiExchangeFundsLine";
var RiExchangeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h9v2h-4v3l-5-5zm5-4V6l5 5H8V9h4z"}}]}]})(props);
};
RiExchangeLine.displayName = "RiExchangeLine";
var RiFundsBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z"}}]}]})(props);
};
RiFundsBoxLine.displayName = "RiFundsBoxLine";
var RiFundsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z"}}]}]})(props);
};
RiFundsLine.displayName = "RiFundsLine";
var RiGift2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14.5 2a3.5 3.5 0 0 1 3.163 5.001L21 7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1l3.337.001a3.5 3.5 0 0 1 5.664-3.95A3.48 3.48 0 0 1 14.5 2zM18 13H6v7h12v-7zm2-4H4v2h16V9zM9.5 4a1.5 1.5 0 0 0-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 0 0-1.356-1.493L9.5 4zm5 0l-.144.007a1.5 1.5 0 0 0-1.35 1.349L13 5.5V7h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986L14.5 4z"}}]}]})(props);
};
RiGift2Line.displayName = "RiGift2Line";
var RiGiftLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15 2a4 4 0 0 1 3.464 6.001L23 8v2h-2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H1V8l4.536.001A4 4 0 0 1 12 3.355 3.983 3.983 0 0 1 15 2zm-4 8H5v9h6v-9zm8 0h-6v9h6v-9zM9 4a2 2 0 0 0-.15 3.995L9 8h2V6a2 2 0 0 0-1.697-1.977l-.154-.018L9 4zm6 0a2 2 0 0 0-1.995 1.85L13 6v2h2a2 2 0 0 0 1.995-1.85L17 6a2 2 0 0 0-2-2z"}}]}]})(props);
};
RiGiftLine.displayName = "RiGiftLine";
var RiHandCoinLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5 9a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63L19 15h-2.111c.072.322.111.656.111 1v1H8v-2l6.79-.001-.034-.078a2.501 2.501 0 0 0-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 0 0 6.002 12zM4 11H3v7h1v-7zm14-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}}]}]})(props);
};
RiHandCoinLine.displayName = "RiHandCoinLine";
var RiHandHeartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5 9a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.332 0 2.53.579 3.353 1.499L19 13a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm1.001 3L6 17.021l.045.033C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63L19 15l-2.112-.001c.073.322.112.657.112 1.001v1H8v-2l6.79-.001-.034-.078a2.501 2.501 0 0 0-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 0 0 6.002 12zM4 11H3v7h1v-7zm9.646-7.425L14 3.93l.354-.354a2.5 2.5 0 1 1 3.535 3.536L14 11l-3.89-3.89a2.5 2.5 0 1 1 3.536-3.535zm-2.12 1.415a.5.5 0 0 0-.06.637l.058.069L14 8.17l2.476-2.474a.5.5 0 0 0 .058-.638l-.058-.07a.5.5 0 0 0-.638-.057l-.07.058-1.769 1.768-1.767-1.77-.068-.056a.5.5 0 0 0-.638.058z"}}]}]})(props);
};
RiHandHeartLine.displayName = "RiHandHeartLine";
var RiIncreaseDecreaseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm5 6h2v2H9v2H7v-2H5v-2h2V9h2v2zm4 0h6v2h-6v-2z"}}]}]})(props);
};
RiIncreaseDecreaseLine.displayName = "RiIncreaseDecreaseLine";
var RiMoneyCnyBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm9 8h3v2h-3v2h-2v-2H8v-2h3v-1H8v-2h2.586L8.464 7.879 9.88 6.464 12 8.586l2.121-2.122 1.415 1.415L13.414 10H16v2h-3v1z"}}]}]})(props);
};
RiMoneyCnyBoxLine.displayName = "RiMoneyCnyBoxLine";
var RiMoneyCnyCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7h3v2h-3v2h-2v-2H8v-2h3v-1H8v-2h2.586L8.464 7.879 9.88 6.464 12 8.586l2.121-2.122 1.415 1.415L13.414 10H16v2h-3v1z"}}]}]})(props);
};
RiMoneyCnyCircleLine.displayName = "RiMoneyCnyCircleLine";
var RiMoneyDollarBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"}}]}]})(props);
};
RiMoneyDollarBoxLine.displayName = "RiMoneyDollarBoxLine";
var RiMoneyDollarCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"}}]}]})(props);
};
RiMoneyDollarCircleLine.displayName = "RiMoneyDollarCircleLine";
var RiMoneyEuroBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm6.05 6H15v2h-4.95a2.5 2.5 0 0 0 4.064 1.41l1.7 1.133A4.5 4.5 0 0 1 8.028 13H7v-2h1.027a4.5 4.5 0 0 1 7.788-2.543L14.114 9.59A2.5 2.5 0 0 0 10.05 11z"}}]}]})(props);
};
RiMoneyEuroBoxLine.displayName = "RiMoneyEuroBoxLine";
var RiMoneyEuroCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1.95-9H15v2h-4.95a2.5 2.5 0 0 0 4.064 1.41l1.7 1.133A4.5 4.5 0 0 1 8.028 13H7v-2h1.027a4.5 4.5 0 0 1 7.788-2.543L14.114 9.59A2.5 2.5 0 0 0 10.05 11z"}}]}]})(props);
};
RiMoneyEuroCircleLine.displayName = "RiMoneyEuroCircleLine";
var RiMoneyPoundBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm5 8H8v-2h1v-1a3.5 3.5 0 0 1 6.746-1.311l-1.986.496A1.499 1.499 0 0 0 11 10v1h3v2h-3v2h5v2H8v-2h1v-2z"}}]}]})(props);
};
RiMoneyPoundBoxLine.displayName = "RiMoneyPoundBoxLine";
var RiMoneyPoundCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3-7H8v-2h1v-1a3.5 3.5 0 0 1 6.746-1.311l-1.986.496A1.499 1.499 0 0 0 11 10v1h3v2h-3v2h5v2H8v-2h1v-2z"}}]}]})(props);
};
RiMoneyPoundCircleLine.displayName = "RiMoneyPoundCircleLine";
var RiPercentLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.5 21a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-11-9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm12.571-4.485l1.414 1.414L4.93 20.485l-1.414-1.414L19.07 3.515z"}}]}]})(props);
};
RiPercentLine.displayName = "RiPercentLine";
var RiPriceTag2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 7l8.445-5.63a1 1 0 0 1 1.11 0L21 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7zm2 1.07V20h14V8.07l-7-4.666L5 8.07zM8 16h8v2H8v-2zm0-3h8v2H8v-2zm4-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiPriceTag2Line.displayName = "RiPriceTag2Line";
var RiPriceTag3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"}}]}]})(props);
};
RiPriceTag3Line.displayName = "RiPriceTag3Line";
var RiPriceTagLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 7l8.445-5.63a1 1 0 0 1 1.11 0L21 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7zm2 1.07V20h14V8.07l-7-4.666L5 8.07zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiPriceTagLine.displayName = "RiPriceTagLine";
var RiRedPacketLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.173 9.763A9.98 9.98 0 0 0 19 7.141V4H5v3.141a9.98 9.98 0 0 0 4.827 2.622 2.5 2.5 0 0 1 4.346 0zm.208 2a2.501 2.501 0 0 1-4.762 0A11.94 11.94 0 0 1 5 9.749V20h14V9.748a11.94 11.94 0 0 1-4.619 2.016zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiRedPacketLine.displayName = "RiRedPacketLine";
var RiRefund2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.671 4.257c3.928-3.219 9.733-2.995 13.4.672 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0A9.993 9.993 0 0 1 2.25 9.767l.077-.313 1.934.51a8 8 0 1 0 3.053-4.45l-.221.166 1.017 1.017-4.596 1.06 1.06-4.596 1.096 1.096zM13 6v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 1 1 0-5h1V6h2z"}}]}]})(props);
};
RiRefund2Line.displayName = "RiRefund2Line";
var RiRefundLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 8V5H4v3h16zm0 2H4v9h16v-9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 11h6v2H6.5l4.5-4.5V14z"}}]}]})(props);
};
RiRefundLine.displayName = "RiRefundLine";
var RiSafe2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 20.333V22h-2v-1.333l-7.418 1.236A.5.5 0 0 1 10 21.41V20H6v2H4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.59a.5.5 0 0 1 .582-.493l10.582 1.764a1 1 0 0 1 .836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 0 1-.836.986L20 20.333zM4 5v13h6V5H4zm8 14.64l8-1.334V4.694l-8-1.333v16.278zM16.5 14c-.828 0-1.5-1.12-1.5-2.5S15.672 9 16.5 9s1.5 1.12 1.5 2.5-.672 2.5-1.5 2.5z"}}]}]})(props);
};
RiSafe2Line.displayName = "RiSafe2Line";
var RiSafeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 20H6v2H4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2zM4 18h16V5H4v13zm9-4.126V17h-2v-3.126A4.002 4.002 0 0 1 12 6a4 4 0 0 1 1 7.874zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiSafeLine.displayName = "RiSafeLine";
var RiSecurePaymentLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11 22l-5.38-3.668A6 6 0 0 1 3 13.374V5.235a1 1 0 0 1 .702-.954L11 2zm0 2.094L5 5.97v7.404a4 4 0 0 0 1.558 3.169l.189.136L11 19.58 14.782 17H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7V5.97l-6-1.876zM11 12v3h9v-3h-9zm0-2h9V9h-9v1z"}}]}]})(props);
};
RiSecurePaymentLine.displayName = "RiSecurePaymentLine";
var RiShoppingBag2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM9 6v2a3 3 0 0 0 6 0V6h2v2A5 5 0 0 1 7 8V6h2z"}}]}]})(props);
};
RiShoppingBag2Line.displayName = "RiShoppingBag2Line";
var RiShoppingBag3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"}}]}]})(props);
};
RiShoppingBag3Line.displayName = "RiShoppingBag3Line";
var RiShoppingBagLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"}}]}]})(props);
};
RiShoppingBagLine.displayName = "RiShoppingBagLine";
var RiShoppingBasket2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.366 3.438L18.577 9H22v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h3.422l3.212-5.562 1.732 1L7.732 9h8.535l-2.633-4.562 1.732-1zM18.826 11H5.173l.667 8h12.319l.667-8zM13 13v4h-2v-4h2zm-4 0v4H7v-4h2zm8 0v4h-2v-4h2z"}}]}]})(props);
};
RiShoppingBasket2Line.displayName = "RiShoppingBasket2Line";
var RiShoppingBasketLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h4V8a6 6 0 0 1 6-6zm6.826 9H5.173l.667 8h12.319l.667-8zM13 13v4h-2v-4h2zm-4 0v4H7v-4h2zm8 0v4h-2v-4h2zm-5-9a4 4 0 0 0-3.995 3.8L8 8v1h8V8a4 4 0 0 0-3.8-3.995L12 4z"}}]}]})(props);
};
RiShoppingBasketLine.displayName = "RiShoppingBasketLine";
var RiShoppingCart2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiShoppingCart2Line.displayName = "RiShoppingCart2Line";
var RiShoppingCartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiShoppingCartLine.displayName = "RiShoppingCartLine";
var RiStockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zM5 7v5h4V7H5zm13 3h3v9h-3v3h-2v-3h-3v-9h3V7h2v3zm-3 2v5h4v-5h-4z"}}]}]})(props);
};
RiStockLine.displayName = "RiStockLine";
var RiSwapBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm12 4l3.5 3-3.5 3v-2h-4V9h4V7zM9 17l-3.5-3L9 11v2h4v2H9v2z"}}]}]})(props);
};
RiSwapBoxLine.displayName = "RiSwapBoxLine";
var RiSwapLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 9l3-3.5L13 9h-2v4H9V9H7zm10 6l-3 3.5-3-3.5h2v-4h2v4h2z"}}]}]})(props);
};
RiSwapLine.displayName = "RiSwapLine";
var RiTicket2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5V4a1 1 0 0 1 1-1h18zm-1 2H4v2.968l.156.081a4.5 4.5 0 0 1 2.34 3.74L6.5 12a4.499 4.499 0 0 1-2.344 3.95L4 16.032V19h16v-2.969l-.156-.08a4.5 4.5 0 0 1-2.34-3.74L17.5 12c0-1.704.947-3.187 2.344-3.95L20 7.967V5zm-4 4v6H8V9h8z"}}]}]})(props);
};
RiTicket2Line.displayName = "RiTicket2Line";
var RiTicketLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5V4a1 1 0 0 1 1-1h18zm-1 2H4v2.968l.156.081a4.5 4.5 0 0 1 2.34 3.74L6.5 12a4.499 4.499 0 0 1-2.344 3.95L4 16.032V19h16v-2.969l-.156-.08a4.5 4.5 0 0 1-2.34-3.74L17.5 12c0-1.704.947-3.187 2.344-3.95L20 7.967V5z"}}]}]})(props);
};
RiTicketLine.displayName = "RiTicketLine";
var RiTrophyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 16.938V19h5v2H6v-2h5v-2.062A8.001 8.001 0 0 1 4 9V3h16v6a8.001 8.001 0 0 1-7 7.938zM6 5v4a6 6 0 1 0 12 0V5H6zM1 5h2v4H1V5zm20 0h2v4h-2V5z"}}]}]})(props);
};
RiTrophyLine.displayName = "RiTrophyLine";
var RiVipCrown2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M3.492 8.065L4.778 19h14.444l1.286-10.935-4.01 2.673L12 4.441l-4.498 6.297-4.01-2.673zM2.801 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiVipCrown2Line.displayName = "RiVipCrown2Line";
var RiVipCrownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 19h20v2H2v-2zM2 5l5 3.5L12 2l5 6.5L22 5v12H2V5zm2 3.841V15h16V8.841l-3.42 2.394L12 5.28l-4.58 5.955L4 8.84z"}}]}]})(props);
};
RiVipCrownLine.displayName = "RiVipCrownLine";
var RiVipDiamondLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256A1 1 0 0 1 4.873 3zm.51 2l-2.8 3.85L12 19.05 21.417 8.85 18.617 5H5.383z"}}]}]})(props);
};
RiVipDiamondLine.displayName = "RiVipDiamondLine";
var RiVipLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 19h20v2H2v-2zm9-11h2v8h-2V8zM7.965 8h2.125l-2.986 7.964h-2L2.118 8h2.125l1.861 5.113L7.965 8zM17 14v2h-2V8h4a3 3 0 0 1 0 6h-2zm0-4v2h2a1 1 0 0 0 0-2h-2zM2 3h20v2H2V3z"}}]}]})(props);
};
RiVipLine.displayName = "RiVipLine";
var RiWallet2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 7V5H4v14h16v-2h-8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 6v6h7V9h-7zm2 2h3v2h-3v-2z"}}]}]})(props);
};
RiWallet2Line.displayName = "RiWallet2Line";
var RiWallet3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"}}]}]})(props);
};
RiWallet3Line.displayName = "RiWallet3Line";
var RiWalletLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15v4zM4 9v10h16V9H4zm0-4v2h12V5H4zm11 8h3v2h-3v-2z"}}]}]})(props);
};
RiWalletLine.displayName = "RiWalletLine";
var RiWaterFlashLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3.1L7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 1 1-12.728 0L12 .272zM13 11h2.5L11 17.5V13H8.5L13 6.5V11z"}}]}]})(props);
};
RiWaterFlashLine.displayName = "RiWaterFlashLine";
var RiAlipayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M18.408 16.79c-2.173-.95-3.72-1.646-4.64-2.086-1.4 1.696-2.872 2.72-5.08 2.72S5 16.064 5.176 14.392c.12-1.096.872-2.888 4.128-2.576 1.72.16 2.504.48 3.912.944.36-.664.664-1.4.888-2.176H7.88v-.616h3.072V8.864H7.2v-.68h3.752V6.592s.032-.248.312-.248H12.8v1.848h4v.68h-4v1.104h3.264a12.41 12.41 0 0 1-1.32 3.32c.51.182 2.097.676 4.76 1.483a8 8 0 1 0-1.096 2.012zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.568-5.632c1.44 0 2.824-.872 3.96-2.352-1.608-.776-2.944-1.16-4.44-1.16-1.304 0-1.984.8-2.104 1.416-.12.616.248 2.096 2.584 2.096z"}}]}]})(props);
};
RiAlipayLine.displayName = "RiAlipayLine";
var RiAmazonLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.625 14.62c-1.107 1.619-2.728 2.384-4.625 2.384-2.304 0-4.276-1.773-3.993-4.124.315-2.608 2.34-3.73 5.708-4.143.601-.073.85-.094 2.147-.19l.138-.01v-.215C15 6.526 13.932 5.3 12.5 5.3c-1.437 0-2.44.747-3.055 2.526l-1.89-.652C8.442 4.604 10.193 3.3 12.5 3.3c2.603 0 4.5 2.178 4.5 5.022 0 2.649.163 4.756.483 5.557.356.892.486 1.117.884 1.613l-1.56 1.251c-.523-.652-.753-1.049-1.181-2.122v-.001zm5.632 5.925c-.271.2-.742.081-.529-.44.265-.648.547-1.408.262-1.752-.21-.255-.467-.382-1.027-.382-.46 0-.69.06-.995.08-.204.013-.293-.297-.091-.44a2.96 2.96 0 0 1 .87-.428c1.15-.344 2.505-.155 2.67.083.365.53-.199 2.569-1.16 3.28zm-1.182-1.084a7.555 7.555 0 0 1-.83.695c-2.122 1.616-4.87 2.46-7.258 2.46-3.843 0-7.28-1.793-9.888-4.795-.223-.23-.038-.566.223-.384 2.81 2.077 6.288 3.333 9.889 3.333 2.265 0 4.708-.537 7.035-1.693.162-.076.344-.18.503-.254.367-.21.69.306.326.638zm-5.065-8.92c-1.258.094-1.496.113-2.052.181-2.552.313-3.797 1.003-3.965 2.398-.126 1.043.81 1.884 2.007 1.884 2.039 0 3.517-1.228 4.022-4.463h-.012z"}}]}]})(props);
};
RiAmazonLine.displayName = "RiAmazonLine";
var RiAndroidLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M19 13H5v7h14v-7zm0-2a7 7 0 0 0-14 0h14zM6.382 3.968A8.962 8.962 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A8.962 8.962 0 0 1 21 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414 1.453 1.453zM9 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]}]})(props);
};
RiAndroidLine.displayName = "RiAndroidLine";
var RiAngularjsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17.523 16.65l.49-.27 1.118-9.71L12 4.123 4.869 6.669l1.119 9.71.473.263L12 4.21l5.523 12.44zm-1.099.61h-.798l-1.169-2.92H9.523l-1.17 2.92h-.777L12 19.713l4.424-2.453zM12 2l9.3 3.32-1.418 12.31L12 22l-7.882-4.37L2.7 5.32 12 2zm1.698 10.54L12 8.45l-1.698 4.09h3.396z"}}]}]})(props);
};
RiAngularjsLine.displayName = "RiAngularjsLine";
var RiAppStoreLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM8.823 15.343l-.79 1.37a.823.823 0 1 1-1.428-.822l.589-1.016c.66-.206 1.201-.048 1.629.468zM13.21 8.66l2.423 4.194h2.141a.82.82 0 0 1 .823.822.82.82 0 0 1-.823.823h-1.19l.803 1.391a.824.824 0 0 1-1.427.823l-3.04-5.266c-.69-1.19-.198-2.383.29-2.787zm.278-3.044c.395.226.528.73.302 1.125l-3.528 6.109h2.553c.826 0 1.29.972.931 1.645h-7.48a.82.82 0 0 1-.822-.823.82.82 0 0 1 .822-.822h2.097l2.685-4.653-.838-1.456a.824.824 0 0 1 1.427-.823l.359.633.367-.633a.823.823 0 0 1 1.125-.302z"}}]}]})(props);
};
RiAppStoreLine.displayName = "RiAppStoreLine";
var RiAppleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.729 8.208c-.473-.037-.981.076-1.759.373.066-.025-.742.29-.968.37-.502.175-.915.271-1.378.271-.458 0-.88-.092-1.366-.255-.155-.053-.311-.11-.505-.186-.082-.032-.382-.152-.448-.177-.648-.254-1.013-.35-1.316-.342-1.152.015-2.243.68-2.876 1.782-1.292 2.244-.577 6.299 1.312 9.031 1.006 1.444 1.556 1.96 1.778 1.953.222-.01.385-.057.783-.225l.167-.071c1.005-.429 1.71-.618 2.771-.618 1.021 0 1.703.186 2.668.602l.168.072c.398.17.542.208.792.202.358-.005.799-.417 1.778-1.854.268-.391.505-.803.71-1.22a7.354 7.354 0 0 1-.392-.347c-1.289-1.228-2.086-2.884-2.108-4.93a6.625 6.625 0 0 1 1.41-4.181 4.124 4.124 0 0 0-1.221-.25zm.155-1.994c.708.048 2.736.264 4.056 2.196-.108.06-2.424 1.404-2.4 4.212.036 3.36 2.94 4.476 2.976 4.488-.024.084-.468 1.596-1.536 3.156-.924 1.356-1.884 2.7-3.396 2.724-1.488.036-1.968-.876-3.66-.876-1.704 0-2.232.852-3.636.912-1.464.048-2.568-1.464-3.504-2.808-1.908-2.76-3.36-7.776-1.404-11.172.972-1.692 2.7-2.76 4.584-2.784 1.428-.036 2.784.96 3.66.96.864 0 2.412-1.152 4.26-1.008zm-1.14-1.824c-.78.936-2.052 1.668-3.288 1.572-.168-1.272.456-2.604 1.176-3.432.804-.936 2.148-1.632 3.264-1.68.144 1.296-.372 2.604-1.152 3.54z"}}]}]})(props);
};
RiAppleLine.displayName = "RiAppleLine";
var RiBaiduLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M7.564 19.28a9.69 9.69 0 0 0 2.496-.217 8.8 8.8 0 0 1 2.98-.131c.547.067.985.165 1.288.257 1.078.275 2.61.223 3.005-.41.291-.468.253-.787-.026-1.199a1.886 1.886 0 0 0-.212-.26 25.006 25.006 0 0 1-.743-.618 25.618 25.618 0 0 1-1.753-1.66 16.151 16.151 0 0 1-1.577-1.893l-.036-.053c-.742-1.139-1.558-1.067-2.002-.317a9.604 9.604 0 0 1-.955 1.331c-.41.482-.83.89-1.305 1.297-.123.105-.503.42-.412.344-.004.003-.017.015.051-.071-.098.12-.95.877-1.2 1.162-.515.583-.723 1.08-.645 1.48.072.376.219.587.45.745a1.432 1.432 0 0 0 .48.206l.116.007zm7.098-7.276c1.376 1.97 3.732 3.793 3.732 3.793s2.063 1.748.637 4.038c-1.426 2.29-5.253 1.278-5.253 1.278s-1.52-.49-3.286-.098c-1.765.395-3.286.245-3.286.245S5 21.015 4.554 18.701c-.446-2.314 2.06-4.04 2.258-4.284.195-.247 1.512-1.073 2.452-2.658.94-1.586 3.583-2.54 5.398.245zm5.539-1.42c0 .458.19 2.393-1.553 2.432-1.742.038-1.816-1.178-1.816-2.05 0-.913.188-2.205 1.59-2.205 1.4 0 1.779 1.369 1.779 1.824zm-5.43-2.777c-1.18-.152-1.447-1.222-1.333-2.293.096-.875 1.143-2.219 1.981-2.026.837.19 1.6 1.3 1.446 2.254-.151.957-.911 2.218-2.094 2.065zM9.755 7.44c-.86 0-1.56-.993-1.56-2.22 0-1.227.699-2.22 1.56-2.22.863 0 1.56.993 1.56 2.22 0 1.227-.697 2.22-1.56 2.22zm-3.793 4.566c-1.695.365-2.326-1.597-2.14-2.515 0 0 .2-1.987 1.576-2.11 1.093-.095 1.898 1.101 1.981 1.785.051.444.283 2.475-1.417 2.84z"}}]}]})(props);
};
RiBaiduLine.displayName = "RiBaiduLine";
var RiBehanceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.5 11a2 2 0 1 0 0-4H3v4h4.5zm1 2H3v4h5.5a2 2 0 1 0 0-4zm2.063-1.428A4 4 0 0 1 8.5 19H1V5h6.5a4 4 0 0 1 3.063 6.572zM15.5 6H21v1.5h-5.5V6zm7.5 8.5h-7.5v.25A2.75 2.75 0 0 0 20.7 16h2.134a4.752 4.752 0 0 1-9.334-1.25v-1.5a4.75 4.75 0 1 1 9.5 0v1.25zm-2.104-2a2.751 2.751 0 0 0-5.292 0h5.292z"}}]}]})(props);
};
RiBehanceLine.displayName = "RiBehanceLine";
var RiBilibiliLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415l-1.829 1.827L18.5 6A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiBilibiliLine.displayName = "RiBilibiliLine";
var RiChromeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.365 19.833l1.93-3.342a4.499 4.499 0 0 1-4.234-2.315L4.794 8.52a8.003 8.003 0 0 0 5.57 11.313zm2.225.146A8 8 0 0 0 19.602 9.5h-3.86A4.48 4.48 0 0 1 16.5 12a4.48 4.48 0 0 1-.642 2.318l-3.268 5.66zm1.553-6.691l.022-.038a2.5 2.5 0 1 0-4.354-.042l.024.042a2.499 2.499 0 0 0 4.308.038zm-8.108-6.62l1.929 3.34A4.5 4.5 0 0 1 12 7.5h6.615A7.992 7.992 0 0 0 12 4a7.98 7.98 0 0 0-5.965 2.669zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"}}]}]})(props);
};
RiChromeLine.displayName = "RiChromeLine";
var RiCodepenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16.5 13.202L13 15.535v3.596L19.197 15 16.5 13.202zM14.697 12L12 10.202 9.303 12 12 13.798 14.697 12zM20 10.869L18.303 12 20 13.131V10.87zM19.197 9L13 4.869v3.596l3.5 2.333L19.197 9zM7.5 10.798L11 8.465V4.869L4.803 9 7.5 10.798zM4.803 15L11 19.131v-3.596l-3.5-2.333L4.803 15zM4 13.131L5.697 12 4 10.869v2.262zM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15V9z"}}]}]})(props);
};
RiCodepenLine.displayName = "RiCodepenLine";
var RiCoreosLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M9.42 4.4a8 8 0 1 0 10.202 9.91c-3.4 1.46-7.248 1.98-11.545 1.565-.711-4.126-.264-7.95 1.343-11.475zm2.448-.414a16.805 16.805 0 0 0-1.542 3.769 5.98 5.98 0 0 1 4.115 1.756 5.977 5.977 0 0 1 1.745 3.861c1.33-.341 2.589-.82 3.78-1.433a7.994 7.994 0 0 0-8.098-7.953zM4.895 19.057C.99 15.152.99 8.82 4.895 4.915c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0zm5.02-9.293a17.885 17.885 0 0 0-.076 4.229 23.144 23.144 0 0 0 4.36-.22 3.988 3.988 0 0 0-1.172-2.848 3.99 3.99 0 0 0-3.112-1.161z"}}]}]})(props);
};
RiCoreosLine.displayName = "RiCoreosLine";
var RiDingdingLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.49 9.04l-.006.014c-.42.898-1.516 2.66-1.516 2.66l-.005-.012-.32.558h1.543l-2.948 3.919.67-2.666h-1.215l.422-1.763c-.341.082-.745.195-1.223.349 0 0-.646.378-1.862-.729 0 0-.82-.722-.344-.902.202-.077.981-.175 1.594-.257.83-.112 1.339-.172 1.339-.172s-2.555.038-3.161-.057c-.606-.095-1.375-1.107-1.539-1.996 0 0-.253-.488.545-.257.798.231 4.101.9 4.101.9S8.27 9.312 7.983 8.99c-.286-.32-.841-1.754-.769-2.634 0 0 .031-.22.257-.16 0 0 3.176 1.45 5.347 2.245 2.172.795 4.06 1.199 3.816 2.228-.02.087-.072.216-.144.37z"}}]}]})(props);
};
RiDingdingLine.displayName = "RiDingdingLine";
var RiDiscordLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13.914 14.58a8.998 8.998 0 0 1-.484.104 7.06 7.06 0 0 1-2.664-.01c-.154-.03-.372-.083-.653-.158l-.921 1.197c-2.273-.073-3.137-1.596-3.137-1.596 0-3.381 1.481-6.122 1.481-6.122 1.481-1.133 2.89-1.102 2.89-1.102l.403.525a1.12 1.12 0 0 1 .112-.01 8.527 8.527 0 0 1 2.314.01l.442-.525s1.41-.031 2.89 1.103c0 0 1.482 2.74 1.482 6.121 0 0-.875 1.522-3.148 1.596l-1.007-1.134zM10.076 11C9.475 11 9 11.45 9 12s.485 1 1.076 1c.6 0 1.075-.45 1.075-1 .01-.55-.474-1-1.075-1zm3.848 0c-.6 0-1.075.45-1.075 1s.485 1 1.075 1c.601 0 1.076-.45 1.076-1s-.475-1-1.076-1zM21 23l-4.99-5H19V4H5v14h11.003l.57 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v19z"}}]}]})(props);
};
RiDiscordLine.displayName = "RiDiscordLine";
var RiDoubanLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.273 15H5V7h14v8h-1.624l-1.3 4H21v2H3v-2h4.612L6.8 16.5l1.902-.618L9.715 19h4.259l1.3-4zM3.5 3h17v2h-17V3zM7 9v4h10V9H7z"}}]}]})(props);
};
RiDoubanLine.displayName = "RiDoubanLine";
var RiDribbbleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 9.749 9.749 0 0 1-.92.87 13.157 13.157 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003a9.186 9.186 0 0 1 .11.27c1.514-.17 3.11-.108 4.657.101.206.028.4.058.584.088zm-9.385-7.45a46.164 46.164 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767a7.88 7.88 0 0 0 .796-.755A7.968 7.968 0 0 0 12 4a8.05 8.05 0 0 0-1.396.121zM4.253 9.997a29.21 29.21 0 0 0 2.04-.123 31.53 31.53 0 0 0 4.862-.822 54.365 54.365 0 0 0-2.7-4.227 8.018 8.018 0 0 0-4.202 5.172zm1.53 7.038c.388-.567.898-1.205 1.575-1.899 1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995-1.836.535-3.77.869-5.697 1.042-.94.085-1.783.122-2.403.128a7.967 7.967 0 0 0 1.784 5.032zm9.222 2.38a35.947 35.947 0 0 0-1.632-5.709c-2.002.727-3.597 1.79-4.83 3.058a9.77 9.77 0 0 0-1.317 1.655A7.964 7.964 0 0 0 12 20a7.977 7.977 0 0 0 3.005-.583zm1.873-1.075a7.998 7.998 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12.023 12.023 0 0 0-3.18-.033 39.368 39.368 0 0 1 1.438 5.14zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"}}]}]})(props);
};
RiDribbbleLine.displayName = "RiDribbbleLine";
var RiDriveLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M9.097 6.15L4.31 14.443l1.755 3.032 4.785-8.29L9.097 6.15zm-1.3 12.324h9.568l1.751-3.034H9.55l-1.752 3.034zm11.314-5.034l-4.786-8.29H10.83l4.787 8.29h3.495zM8.52 3.15h6.96L22 14.444l-3.48 6.03H5.49L2 14.444 8.52 3.15zm3.485 8.036l-1.302 2.254h2.603l-1.301-2.254z"}}]}]})(props);
};
RiDriveLine.displayName = "RiDriveLine";
var RiDropboxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.646 17.26l3.392 2.162 3.392-2.161 1.86 1.185-5.252 3.346-5.252-3.346 1.86-1.185zm-.877-8.28l2.393-1.553-2.425-1.574L5.28 7.37 7.77 8.98zm1.84 1.19L12 11.719l2.39-1.547L12 8.619l-2.391 1.552zm4.231 2.74l2.424 1.568 2.45-1.502-2.485-1.612-2.389 1.545zM12 6.234l4.237-2.748L22.46 7.33l-4.392 2.843 4.393 2.85-6.226 3.819L12 14.1l-4.235 2.74-6.23-3.817 4.396-2.851L1.539 7.33l6.224-3.843L12 6.235zm1.837 1.192L16.23 8.98l2.489-1.61-2.456-1.517-2.426 1.574zM10.16 12.91l-2.39-1.546-2.486 1.613 2.451 1.502 2.425-1.569z"}}]}]})(props);
};
RiDropboxLine.displayName = "RiDropboxLine";
var RiEdgeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8.007 14.001A4.559 4.559 0 0 0 8 14.25C8 16.632 9.753 19 13 19c2.373 0 4.528-.655 6-1.553v3.35C17.211 21.564 15.113 22 13 22c-5.502 0-8-3.47-8-7.75 0-3.231 2.041-6 4.943-7.164C8.539 8.663 8 10.341 8 10.996L18 11c0-3.406-2.548-6-6-6-5 0-8.001 3.988-9 5.999C3.29 6.237 7.01 2 12 2c5.2 0 9 4.03 9 9v3H8l.007.001z"}}]}]})(props);
};
RiEdgeLine.displayName = "RiEdgeLine";
var RiEvernoteLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10.5 8.5a1 1 0 0 1-1 1H6.001c-.336 0-.501.261-.501.532 0 1.32.254 2.372.664 3.193.216.433.399.67.523.79.735.76 1.886 1.16 3.092 1.089.095-.006.199-.064.332-.208a1.51 1.51 0 0 0 .214-.293 2 2 0 0 1 2.531-1.073c.693.258 1.277.434 1.813.56.196.046.375.083.586.122-.077-.014.402.074.518.098.34.07.598.146.883.29a5.087 5.087 0 0 1 1.775 1.475c.045-.591.077-1.268.087-2.026a34.182 34.182 0 0 0-.559-6.673c-.074-.398-.236-.562-.663-.718a3.847 3.847 0 0 0-.587-.155c-.147-.028-.65-.11-.693-.118a1273 1273 0 0 1-2.34-.409l-.528-.092a2 2 0 0 1-1.524-1.26 11.467 11.467 0 0 0-.034-.088 5.595 5.595 0 0 0-.702-.036c-.271 0-.388.124-.388.463V8.5zm6.23 11.639c.352-.356.56-.829.587-1.327.054-1.036-.824-2.48-2.317-2.634-.617-.063-1.586-.306-2.842-.774 0 0-.7 1.603-2.26 1.696-1.665.1-3.43-.433-4.65-1.696 0 0-1.748-1.64-1.748-5.372 0-.814.29-1.422.648-1.904.96-1.292 2.505-2.78 4.133-4.304C9 3.15 9.701 2.5 10.888 2.5c2.04 0 2.32.664 2.605 1.414l2.854.499c.907.166 3.15.316 3.578 2.594 1.006 5.42.458 9.87.347 10.675-.71 5.121-4.772 4.871-4.931 4.871-2.059 0-3.178-1.373-3.183-2.677a2.494 2.494 0 0 1 1.038-2.034 2.586 2.586 0 0 1 1.527-.478c.305 0 .687.318.687.753 0 .37-.255.575-.382.645-.223.124-1.122.174-1.122.865 0 .317.35 1.114 1.386 1.114.588 0 1.094-.256 1.437-.602zm-1.796-9.51c.166-.415.627-.632 1.172-.582.544.067.956.4 1.006.848 0 .083.017.183-.017.233-.032.05-.066.067-.1.067-.213.033-.543 0-1.021-.05-.48-.05-.808-.1-1.006-.2-.033-.017-.066-.033-.083-.083s.016-.15.05-.233z"}}]}]})(props);
};
RiEvernoteLine.displayName = "RiEvernoteLine";
var RiFacebookBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 19h5V5H5v14h7v-5h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 13.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H16c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiFacebookBoxLine.displayName = "RiFacebookBoxLine";
var RiFacebookCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"}}]}]})(props);
};
RiFacebookCircleLine.displayName = "RiFacebookCircleLine";
var RiFacebookLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2c.522 0 .98.05 1.372.15V4h-1.372c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138V9z"}}]}]})(props);
};
RiFacebookLine.displayName = "RiFacebookLine";
var RiFirefoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.464.314-2.854.88-4.106.466-.939 1.233-1.874 1.85-2.194-.653 1.283-.973 2.54-1.04 3.383.454-1.5 1.315-2.757 2.52-3.644 2.066-1.519 4.848-1.587 5.956-.62-2.056.707-4.296 3.548-3.803 6.876.08.55.245 1.084.489 1.582-.384-1.01-.418-2.433.202-3.358.692-1.03 1.678-1.248 2.206-1.136-.208-.044-.668.836-.736.991-.173.394-.259.82-.251 1.25a3.395 3.395 0 0 0 1.03 2.38c1.922 1.871 5.023 1.135 6.412-1.002.953-1.471 1.069-3.968-.155-5.952a6.915 6.915 0 0 0-1.084-1.32c-1.85-1.766-4.48-2.57-6.982-2.205-1.106.177-2.047.496-2.824.956C7.755 2.798 9.91 2 12 2zM6.875 7.705c-2.253.781-3.501 3.17-2.579 6.46a8.004 8.004 0 0 0 7.455 5.831L12 20a8 8 0 0 0 7.985-7.504l.009-.212c-.13.349-.283.674-.463.98l-.14.227c-2.104 3.239-6.681 4.075-9.48 1.348a5.392 5.392 0 0 1-.962-1.257l-.106-.201c-1.736-.387-2.584-1.326-2.543-2.817.027-.991.23-1.96.575-2.86z"}}]}]})(props);
};
RiFirefoxLine.displayName = "RiFirefoxLine";
var RiFlutterLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.597 10.684h2.828l-5.657 5.658 5.657 5.656h-2.828L8.94 16.34l5.657-5.657zm-.194-8.68h2.829L5.918 13.318l-1.414-1.414 9.9-9.9z"}}]}]})(props);
};
RiFlutterLine.displayName = "RiFlutterLine";
var RiGatsbyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.751 21.997c-5.221-.128-9.45-4.257-9.736-9.438l-.012-.313 9.748 9.751zM12 2a9.988 9.988 0 0 1 8.193 4.265l-1.638 1.148A8.003 8.003 0 0 0 4.534 9.12L14.88 19.466A8.018 8.018 0 0 0 19.748 14H15.5v-2H22c0 4.726-3.279 8.686-7.685 9.73L2.269 9.686C3.314 5.28 7.274 2 12 2z"}}]}]})(props);
};
RiGatsbyLine.displayName = "RiGatsbyLine";
var RiGithubLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"}}]}]})(props);
};
RiGithubLine.displayName = "RiGithubLine";
var RiGitlabLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5.68 7.314l-1.82 5.914L12 19.442l8.14-6.214-1.82-5.914L16.643 11H7.356L5.681 7.314zM15.357 9l2.888-6.354a.4.4 0 0 1 .747.048l3.367 10.945a.5.5 0 0 1-.174.544L12 21.958 1.816 14.183a.5.5 0 0 1-.174-.544L5.009 2.694a.4.4 0 0 1 .747-.048L8.644 9h6.712z"}}]}]})(props);
};
RiGitlabLine.displayName = "RiGitlabLine";
var RiGoogleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 11h8.533c.044.385.067.78.067 1.184 0 2.734-.98 5.036-2.678 6.6-1.485 1.371-3.518 2.175-5.942 2.175A8.976 8.976 0 0 1 3 11.98 8.976 8.976 0 0 1 11.98 3c2.42 0 4.453.89 6.008 2.339L16.526 6.8C15.368 5.681 13.803 5 12 5a7 7 0 1 0 0 14c3.526 0 6.144-2.608 6.577-6H12v-2z"}}]}]})(props);
};
RiGoogleLine.displayName = "RiGoogleLine";
var RiGooglePlayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.501 22.131A1 1 0 0 1 3 21.266V2.734a1 1 0 0 1 1-1zm8.292 11.68l-4.498 4.498 5.699-3.299-1.2-1.2zM5 6.118v11.76l5.88-5.88-5.88-5.88zm10.284 4.302L13.706 12l1.578 1.577L18.008 12l-2.725-1.579zm-7.49-4.336l4.5 4.5 1.199-1.2-5.699-3.3z"}}]}]})(props);
};
RiGooglePlayLine.displayName = "RiGooglePlayLine";
var RiIeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M18.159 10A6.002 6.002 0 0 0 6.84 10H18.16zM6.583 13a6.002 6.002 0 0 0 11.08 2.057h3.304A9.003 9.003 0 0 1 8.612 20.12c-2.744 1.491-5.113 1.8-6.422.491-1.344-1.34-.628-4.851 1.313-8.373a23.624 23.624 0 0 1 2.499-3.665c.359-.433.735-.852 1.125-1.252-.275.055-1.88.851-3.412 2.714a9.004 9.004 0 0 1 9.468-7.009c3.095-1.402 5.974-1.726 7.192-.51 1.125 1.123 1.062 2.995.125 5.242-.01.021-.018.043-.027.064A8.96 8.96 0 0 1 21.5 12c0 .338-.019.672-.055 1H6.583zm1.422 6.799a9.03 9.03 0 0 1-3.972-4.742c-1.161 2.282-1.46 4.19-.469 5.18.813.812 2.438.624 4.438-.436l.003-.002zM20.172 7.292a8.19 8.19 0 0 1 .015-.034c.75-1.622.813-2.994.125-3.806-.869-.868-2.54-.75-4.522.168a9.032 9.032 0 0 1 4.382 3.672z"}}]}]})(props);
};
RiIeLine.displayName = "RiIeLine";
var RiInstagramLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"}}]}]})(props);
};
RiInstagramLine.displayName = "RiInstagramLine";
var RiInvisionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm1.988 9.065l.77-3.271H6.564l.362-1.39h2.868l-1.132 4.67a3.071 3.071 0 0 0-.106.72c0 .298.141.386.362.437.135.032 1.208.01 1.791-1.34l.744-3.097h-1.208l.363-1.39h2.58l-.331 1.578c.452-.88 1.358-1.715 2.248-1.715.95 0 1.736.704 1.736 2.055 0 .345-.046.721-.166 1.145l-.483 1.805a2.159 2.159 0 0 0-.076.487c0 .314.121.47.347.47.227 0 .514-.172.846-1.13l.664.267c-.393 1.429-1.102 2.025-1.993 2.025-1.041 0-1.539-.643-1.539-1.523 0-.25.03-.518.106-.785l.498-1.853c.06-.204.075-.392.075-.565 0-.596-.347-.958-.905-.958-.71 0-1.178.53-1.419 1.55l-.966 4.032h-1.69l.303-1.267c-.497.85-1.187 1.375-2.038 1.375-1.026 0-1.509-.615-1.509-1.542 0-.235.03-.523.09-.79zm1.637-5.44a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25z"}}]}]})(props);
};
RiInvisionLine.displayName = "RiInvisionLine";
var RiKakaoTalkLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5.678 18.123C3.092 16.566 1.5 14.112 1.5 11.405 1.5 6.701 6.248 3 12 3s10.5 3.701 10.5 8.405c0 4.704-4.748 8.405-10.5 8.405-.442 0-.882-.022-1.318-.065l-3.765 2.458c-.615.326-.957.425-1.485.066-.62-.424-.596-.892-.381-1.56l.627-2.586zM3.5 11.405c0 2.132 1.418 4.123 3.781 5.32l.706.359-.186.77-.401 1.648 2.8-1.83.366.046c.473.061.952.092 1.434.092 4.741 0 8.5-2.93 8.5-6.405S16.741 5 12 5s-8.5 2.93-8.5 6.405zm14.407-.346l1.514 2.155a.472.472 0 1 1-.773.543l-1.428-2.033-.427.413V13.5a.472.472 0 0 1-.944 0v-1.439a.471.471 0 0 1 0-.222V9.282a.472.472 0 0 1 .944 0v1.542l1.928-1.866a.472.472 0 0 1 .656.678l-1.47 1.423zm-2.958 1.925a.472.472 0 0 1 0 .944h-1.932a.472.472 0 0 1-.471-.472V9.297a.472.472 0 1 1 .943 0v3.687h1.46zm-5.857-1.092h1.334l-.638-1.707-.696 1.707zm2.523.488l.345.925a.472.472 0 1 1-.884.33l-.298-.799h-2.07l-.331.813a.472.472 0 1 1-.874-.357l1.66-4.075a.696.696 0 0 1 .654-.447.69.69 0 0 1 .627.474l1.046 2.8a.469.469 0 0 1 .127.32l-.002.016zM8.293 9.302c0 .26-.21.472-.471.472h-1.14v3.736a.472.472 0 0 1-.945 0V9.774h-1.16a.472.472 0 1 1 0-.944h3.245c.26 0 .471.211.471.472z"}}]}]})(props);
};
RiKakaoTalkLine.displayName = "RiKakaoTalkLine";
var RiLineLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M22 10.69c0 1.787-.687 3.4-2.123 4.974-2.1 2.414-6.788 5.363-7.864 5.812-1.074.451-.911-.287-.874-.537l.137-.85c.034-.262.068-.65-.032-.9-.112-.277-.556-.424-.881-.492C5.558 18.059 2 14.7 2 10.69c0-4.475 4.487-8.118 10-8.118 5.512 0 10 3.643 10 8.118zm-3.6 3.625c1.113-1.22 1.6-2.361 1.6-3.625 0-3.268-3.51-6.118-8-6.118s-8 2.85-8 6.118c0 2.905 2.728 5.507 6.626 6.024l.147.026c1.078.226 1.884.614 2.329 1.708l.036.096c1.806-1.176 4.174-2.98 5.261-4.229zm-.262-4a.526.526 0 0 1 0 1.05h-1.463v.938h1.462a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.525.525 0 0 1-.003 1.05h-1.462v.938h1.462zm-3.213 2.513a.524.524 0 0 1-.526.522.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525.287 0 .525.238.525.525v3.976zm-4.784 0a.527.527 0 0 1-.526.524.526.526 0 0 1-.523-.524V8.852c0-.287.236-.525.525-.525.289 0 .524.238.524.525v3.976zm-2.055.524H6.097a.528.528 0 0 1-.525-.524V8.852a.527.527 0 0 1 1.05 0v3.45h1.464a.525.525 0 0 1 0 1.05z"}}]}]})(props);
};
RiLineLine.displayName = "RiLineLine";
var RiLinkedinBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z"}}]}]})(props);
};
RiLinkedinBoxLine.displayName = "RiLinkedinBoxLine";
var RiLinkedinLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z"}}]}]})(props);
};
RiLinkedinLine.displayName = "RiLinkedinLine";
var RiMastercardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 18.294a7.3 7.3 0 1 1 0-12.588 7.3 7.3 0 1 1 0 12.588zm1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.273 7.273 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91zm-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.273 7.273 0 0 1 8.4 12c0-1.89.719-3.614 1.898-4.91zM12 8.205A5.284 5.284 0 0 0 10.4 12c0 1.488.613 2.832 1.6 3.795A5.284 5.284 0 0 0 13.6 12 5.284 5.284 0 0 0 12 8.205z"}}]}]})(props);
};
RiMastercardLine.displayName = "RiMastercardLine";
var RiMastodonLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M3.018 12.008c-.032-1.26-.012-2.448-.012-3.442 0-4.338 2.843-5.61 2.843-5.61 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.396 5.424-.275 1.41-2.457 2.955-4.963 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.084.633.299 1.095.605 1.435.766.85 2.106.93 3.395.974 1.82.063 3.44-.449 3.44-.449l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-1.532-.406-2.568-1.29-3.27-2.471-1.093-1.843-1.368-4.406-1.431-6.992zm3.3 4.937v-2.548l2.474.605a20.54 20.54 0 0 0 1.303.245c.753.116 1.538.2 2.328.235 1.019.047 1.901-.017 3.636-.224 1.663-.199 3.148-1.196 3.236-1.65.082-.422.151-.922.206-1.482a33.6 33.6 0 0 0 .137-2.245c.015-.51.02-.945.017-1.256v-.059c0-1.43-.369-2.438-.963-3.158a3.008 3.008 0 0 0-.584-.548c-.09-.064-.135-.089-.13-.087-1.013-.465-3.093-.752-5.617-.773h-.046c-2.54.02-4.62.308-5.65.782.023-.01-.021.014-.112.078a3.008 3.008 0 0 0-.584.548c-.594.72-.963 1.729-.963 3.158 0 .232 0 .397-.003.875a77.483 77.483 0 0 0 .014 2.518c.054 2.197.264 3.835.7 5.041.212.587.472 1.07.78 1.45a5.7 5.7 0 0 1-.18-1.505zM8.084 6.37a1.143 1.143 0 1 1 0 2.287 1.143 1.143 0 0 1 0-2.287z"}}]}]})(props);
};
RiMastodonLine.displayName = "RiMastodonLine";
var RiMediumLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm12.3 10.94l.955.954v.05h-4.921v-.05l1.004-.954c.1-.1.15-.2.15-.351V9.664c0-.252 0-.603.051-.904l-3.314 8.285h-.05L7.76 9.412c-.05-.2-.1-.2-.15-.3v5.02c-.051.352 0 .653.15.955l1.356 1.807v.05H5.5v-.05l1.356-1.858c.15-.3.2-.652.15-.954V8.56c0-.251-.05-.553-.25-.753L5.851 6.55V6.5h3.515l2.912 6.478L14.84 6.5h3.415v.05l-.954 1.105c-.1.1-.15.251-.15.351v7.633c0 .1.05.251.15.301z"}}]}]})(props);
};
RiMediumLine.displayName = "RiMediumLine";
var RiMessengerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M7.764 19.225c.59-.26 1.25-.309 1.868-.139.77.21 1.565.316 2.368.314 4.585 0 8-3.287 8-7.7S16.585 4 12 4s-8 3.287-8 7.7c0 2.27.896 4.272 2.466 5.676a2.8 2.8 0 0 1 .942 2.006l.356-.157zM12 2c5.634 0 10 4.127 10 9.7 0 5.573-4.366 9.7-10 9.7a10.894 10.894 0 0 1-2.895-.384.8.8 0 0 0-.534.039l-1.984.876a.8.8 0 0 1-1.123-.707l-.055-1.78a.797.797 0 0 0-.268-.57C3.195 17.135 2 14.617 2 11.7 2 6.127 6.367 2 12 2zM5.995 14.537l2.937-4.66a1.5 1.5 0 0 1 2.17-.4l2.336 1.75a.6.6 0 0 0 .723 0l3.155-2.396c.421-.319.971.185.689.633l-2.937 4.66a1.5 1.5 0 0 1-2.17.4l-2.336-1.75a.6.6 0 0 0-.723 0l-3.155 2.395c-.421.319-.971-.185-.689-.633z"}}]}]})(props);
};
RiMessengerLine.displayName = "RiMessengerLine";
var RiMiniProgramLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-6a3.5 3.5 0 1 1-4.977-3.174 1 1 0 1 1 .845 1.813A1.5 1.5 0 1 0 11 14v-4a3.5 3.5 0 1 1 4.977 3.174 1 1 0 0 1-.845-1.813A1.5 1.5 0 1 0 13 10v4z"}}]}]})(props);
};
RiMiniProgramLine.displayName = "RiMiniProgramLine";
var RiNeteaseCloudMusicLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.421 11.375c-.294 1.028.012 2.064.784 2.653 1.061.81 2.565.3 2.874-.995.08-.337.103-.722.027-1.056-.23-1.001-.52-1.988-.792-2.996-1.33.154-2.543 1.172-2.893 2.394zm5.548-.287c.273 1.012.285 2.017-.127 3-1.128 2.69-4.721 3.14-6.573.826-1.302-1.627-1.28-3.961.06-5.734.78-1.032 1.804-1.707 3.048-2.054l.379-.104c-.084-.415-.188-.816-.243-1.224-.176-1.317.512-2.503 1.744-3.04 1.226-.535 2.708-.216 3.53.76.406.479.395 1.08-.025 1.464-.412.377-.996.346-1.435-.09-.247-.246-.51-.44-.877-.436-.525.006-.987.418-.945.937.037.468.173.93.3 1.386.022.078.216.135.338.153 1.334.197 2.504.731 3.472 1.676 2.558 2.493 2.861 6.531.672 9.44-1.529 2.032-3.61 3.168-6.127 3.409-4.621.44-8.664-2.53-9.7-7.058C2.515 10.255 4.84 5.831 8.795 4.25c.586-.234 1.143-.031 1.371.498.232.537-.019 1.086-.61 1.35-2.368 1.06-3.817 2.855-4.215 5.424-.533 3.433 1.656 6.776 5 7.72 2.723.77 5.658-.166 7.308-2.33 1.586-2.08 1.4-5.099-.427-6.873a3.979 3.979 0 0 0-1.823-1.013c.198.716.389 1.388.57 2.062z"}}]}]})(props);
};
RiNeteaseCloudMusicLine.displayName = "RiNeteaseCloudMusicLine";
var RiNetflixLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.984 17.208L16 2h2v20a7.593 7.593 0 0 0-2.02-.5L8 6.302V21.5a7.335 7.335 0 0 0-2 .5V2h2l7.984 15.208z"}}]}]})(props);
};
RiNetflixLine.displayName = "RiNetflixLine";
var RiOperaLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14.766 19.51a8.003 8.003 0 0 0 0-15.02C16.71 5.977 18 8.935 18 12s-1.289 6.024-3.234 7.51zM9.234 4.49a8.003 8.003 0 0 0 0 15.02C7.29 18.023 6 15.065 6 12s1.289-6.024 3.234-7.51zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-3.5c2 0 4-3.033 4-6.5s-2-6.5-4-6.5S8 8.533 8 12s2 6.5 4 6.5z"}}]}]})(props);
};
RiOperaLine.displayName = "RiOperaLine";
var RiPatreonLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM2 2h5v20H2V2zm2 2v16h1V4H4z"}}]}]})(props);
};
RiPatreonLine.displayName = "RiPatreonLine";
var RiPaypalLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8.495 20.667h1.551l.538-3.376a2.805 2.805 0 0 1 2.77-2.366h.5c2.677 0 4.06-.983 4.55-3.503.208-1.066.117-1.73-.171-2.102-1.207 3.054-3.79 4.16-6.962 4.16h-.884c-.384 0-.794.209-.852.58l-1.04 6.607zm-4.944-.294a.551.551 0 0 1-.544-.637L5.68 2.776A.92.92 0 0 1 6.59 2h6.424c2.212 0 3.942.467 4.899 1.558.87.99 1.123 2.084.871 3.692.36.191.668.425.916.706.818.933.978 2.26.668 3.85-.74 3.805-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.679l-.702 4.383a.804.804 0 0 1-.794.679H6.72a.483.483 0 0 1-.477-.558l.274-1.736H3.55zm6.836-8.894h.884c3.19 0 4.895-1.212 5.483-4.229.02-.101.037-.203.053-.309.166-1.06.05-1.553-.398-2.063-.465-.53-1.603-.878-3.396-.878h-5.5L5.246 18.373h1.561l.73-4.628.007.001a2.915 2.915 0 0 1 2.843-2.267z"}}]}]})(props);
};
RiPaypalLine.displayName = "RiPaypalLine";
var RiPinterestLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8.49 19.191c.024-.336.072-.671.144-1.001.063-.295.254-1.13.534-2.34l.007-.03.387-1.668c.079-.34.14-.604.181-.692a3.46 3.46 0 0 1-.284-1.423c0-1.337.756-2.373 1.736-2.373.36-.006.704.15.942.426.238.275.348.644.302.996 0 .453-.085.798-.453 2.035-.071.238-.12.404-.166.571-.051.188-.095.358-.132.522-.096.386-.008.797.237 1.106a1.2 1.2 0 0 0 1.006.456c1.492 0 2.6-1.985 2.6-4.548 0-1.97-1.29-3.274-3.432-3.274A3.878 3.878 0 0 0 9.2 9.1a4.13 4.13 0 0 0-1.195 2.961 2.553 2.553 0 0 0 .512 1.644c.181.14.25.383.175.59-.041.168-.14.552-.176.68a.41.41 0 0 1-.216.297.388.388 0 0 1-.355.002c-1.16-.479-1.796-1.778-1.796-3.44 0-2.985 2.491-5.584 6.192-5.584 3.135 0 5.481 2.329 5.481 5.14 0 3.532-1.932 6.104-4.69 6.104a2.508 2.508 0 0 1-2.046-.959l-.043.177-.207.852-.002.007c-.146.6-.248 1.017-.288 1.174-.106.355-.24.703-.4 1.04a8 8 0 1 0-1.656-.593zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"}}]}]})(props);
};
RiPinterestLine.displayName = "RiPinterestLine";
var RiPlaystationLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22.584 17.011c-.43.543-1.482.93-1.482.93l-7.833 2.817V18.68l5.764-2.057c.655-.234.755-.566.223-.74-.53-.175-1.491-.125-2.146.111l-3.84 1.354v-2.155l.22-.075s1.11-.394 2.671-.567c1.56-.172 3.472.024 4.972.593 1.69.535 1.88 1.323 1.451 1.866zm-8.57-3.537V8.162c0-.624-.114-1.198-.699-1.36-.447-.144-.725.272-.725.895V21l-3.584-1.139V4c1.524.283 3.744.953 4.937 1.355 3.035 1.043 4.064 2.342 4.064 5.267 0 2.851-1.758 3.932-3.992 2.852zm-11.583 4.99c-1.735-.49-2.024-1.51-1.233-2.097.731-.542 1.974-.95 1.974-.95l5.138-1.83v2.086l-3.697 1.325c-.653.234-.754.566-.223.74.531.175 1.493.125 2.147-.11l1.773-.644v1.865l-.353.06c-1.774.29-3.664.169-5.526-.445z"}}]}]})(props);
};
RiPlaystationLine.displayName = "RiPlaystationLine";
var RiProductHuntLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1.334-8a1.5 1.5 0 0 0 0-3H10.5v3h2.834zm0-5a3.5 3.5 0 0 1 0 7H10.5v3h-2V7h4.834z"}}]}]})(props);
};
RiProductHuntLine.displayName = "RiProductHuntLine";
var RiQqLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17.535 12.514l-.696-1.796c0-.021.01-.375.01-.558C16.848 7.088 15.446 4 12 4c-3.446 0-4.848 3.088-4.848 6.16 0 .183.009.537.01.558l-.696 1.796c-.19.515-.38 1.05-.517 1.51-.657 2.189-.444 3.095-.282 3.115.348.043 1.354-1.648 1.354-1.648 0 .98.488 2.258 1.542 3.18-.394.127-.878.32-1.188.557-.28.214-.245.431-.194.52.22.385 3.79.245 4.82.125 1.03.12 4.599.26 4.82-.126.05-.088.085-.305-.194-.519-.311-.237-.795-.43-1.19-.556 1.055-.923 1.542-2.202 1.542-3.181 0 0 1.007 1.691 1.355 1.648.162-.02.378-.928-.283-3.116-.14-.463-.325-.994-.516-1.509zm1.021 8.227c-.373.652-.833.892-1.438 1.057-.24.065-.498.108-.794.138-.44.045-.986.065-1.613.064a33.23 33.23 0 0 1-2.71-.116c-.692.065-1.785.114-2.71.116a16.07 16.07 0 0 1-1.614-.064 4.928 4.928 0 0 1-.793-.138c-.605-.164-1.065-.405-1.44-1.059a2.274 2.274 0 0 1-.239-1.652c-.592-.132-1.001-.483-1.279-.911a2.43 2.43 0 0 1-.309-.71 4.028 4.028 0 0 1-.116-1.106c.013-.785.187-1.762.532-2.912.14-.466.327-1.008.568-1.655l.553-1.43a15.496 15.496 0 0 1-.002-.203C5.152 5.605 7.588 2 12 2c4.413 0 6.848 3.605 6.848 8.16l-.001.203.553 1.43.01.026c.225.606.413 1.153.556 1.626.348 1.15.522 2.129.535 2.916.007.407-.03.776-.118 1.108-.066.246-.161.48-.31.708-.276.427-.684.776-1.277.91.13.554.055 1.14-.24 1.654z"}}]}]})(props);
};
RiQqLine.displayName = "RiQqLine";
var RiReactjsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 0 1-1.056 0zm-1.995-.125a20.678 20.678 0 0 1-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 0 1-1.462-1.796zm7.331-.368c-.717.16-1.483.284-2.285.368a20.678 20.678 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 0 0-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 0 0-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 0 0-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 0 1 1.056 0zm-4.156 7.198a24.884 24.884 0 0 1-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 0 0 3.392 0A22.897 22.897 0 0 0 15.392 12a22.897 22.897 0 0 0-1.696-2.938 22.897 22.897 0 0 0-3.392 0A22.897 22.897 0 0 0 8.608 12a22.897 22.897 0 0 0 1.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 24.884 24.884 0 0 1 .527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 0 1 .528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 0 0-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388c-.081-.25-.169-.504-.264-.76a24.884 24.884 0 0 1-.528.913c.27-.046.534-.097.791-.153z"}}]}]})(props);
};
RiReactjsLine.displayName = "RiReactjsLine";
var RiRedditLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11.102 7.815l.751-3.536a2 2 0 0 1 2.373-1.54l3.196.68a2 2 0 1 1-.416 1.956l-3.196-.68-.666 3.135c1.784.137 3.557.73 5.163 1.7a3.192 3.192 0 0 1 4.741 2.673v.021a3.192 3.192 0 0 1-1.207 2.55 2.855 2.855 0 0 1-.008.123c0 3.998-4.45 7.03-9.799 7.03-5.332 0-9.708-3.024-9.705-6.953a5.31 5.31 0 0 1-.01-.181 3.192 3.192 0 0 1 3.454-5.35 11.446 11.446 0 0 1 5.329-1.628zm9.286 5.526c.408-.203.664-.62.661-1.075a1.192 1.192 0 0 0-2.016-.806l-.585.56-.67-.455c-1.615-1.098-3.452-1.725-5.23-1.764h-1.006c-1.875.029-3.651.6-5.237 1.675l-.663.45-.584-.55a1.192 1.192 0 1 0-1.314 1.952l.633.29-.054.695c-.013.17-.013.339.003.584 0 2.71 3.356 5.03 7.708 5.03 4.371 0 7.799-2.336 7.802-5.106a3.31 3.31 0 0 0 0-.508l-.052-.672.604-.3zM7 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm-1.984 5.103c-1.397 0-2.767-.37-3.882-1.21a.424.424 0 0 1 .597-.597c.945.693 2.123.99 3.269.99s2.33-.275 3.284-.959a.439.439 0 0 1 .732.206.469.469 0 0 1-.119.423c-.684.797-2.484 1.147-3.881 1.147z"}}]}]})(props);
};
RiRedditLine.displayName = "RiRedditLine";
var RiRemixiconLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M6.364 6l8.784 9.663.72-.283c1.685-.661 2.864-2.156 3.092-3.896A6.502 6.502 0 0 1 12.077 6H6.363zM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947 0 2.891-1.822 5.364-4.4 6.377L20 21H3V4h11.111A4.515 4.515 0 0 0 14 5zm4.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM5 7.47V19h10.48L5 7.47z"}}]}]})(props);
};
RiRemixiconLine.displayName = "RiRemixiconLine";
var RiSafariLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17.812 6.503l-4.398 6.911-6.911 4.398A7.973 7.973 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37 1.414-1.414 1.37 1.37A7.96 7.96 0 0 0 19.938 13H18v-2h1.938a7.973 7.973 0 0 0-2.126-4.497zm-.315-.315A7.973 7.973 0 0 0 13 4.062V6h-2V4.062A7.96 7.96 0 0 0 7.094 5.68l1.37 1.37L7.05 8.464l-1.37-1.37A7.96 7.96 0 0 0 4.062 11H6v2H4.062a7.973 7.973 0 0 0 2.126 4.497l4.398-6.911 6.911-4.398zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"}}]}]})(props);
};
RiSafariLine.displayName = "RiSafariLine";
var RiSkypeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13.004 18.423a2 2 0 0 1 1.237.207 3.25 3.25 0 0 0 4.389-4.389 2 2 0 0 1-.207-1.237 6.5 6.5 0 0 0-7.427-7.427 2 2 0 0 1-1.237-.207A3.25 3.25 0 0 0 5.37 9.76a2 2 0 0 1 .207 1.237 6.5 6.5 0 0 0 7.427 7.427zM12 20.5a8.5 8.5 0 0 1-8.4-9.81 5.25 5.25 0 0 1 7.09-7.09 8.5 8.5 0 0 1 9.71 9.71 5.25 5.25 0 0 1-7.09 7.09c-.427.066-.865.1-1.31.1zm.053-3.5C9.25 17 8 15.62 8 14.586c0-.532.39-.902.928-.902 1.2 0 .887 1.725 3.125 1.725 1.143 0 1.776-.624 1.776-1.261 0-.384-.188-.808-.943-.996l-2.49-.623c-2.006-.504-2.37-1.592-2.37-2.612C8.026 7.797 10.018 7 11.89 7c1.72 0 3.756.956 3.756 2.228 0 .545-.48.863-1.012.863-1.023 0-.835-1.418-2.9-1.418-1.023 0-1.596.462-1.596 1.126 0 .663.803.876 1.502 1.035l1.836.409C15.49 11.695 16 12.876 16 13.989 16 15.713 14.675 17 12.015 17h.038z"}}]}]})(props);
};
RiSkypeLine.displayName = "RiSkypeLine";
var RiSlackLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.5 3A1.5 1.5 0 0 1 16 4.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 14.5 3zm-10 10H6v1.5A1.5 1.5 0 1 1 4.5 13zm8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5V18zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5a1.5 1.5 0 0 1 0 3H18V9.5A1.5 1.5 0 0 1 19.5 8zm-15 0h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5A1.5 1.5 0 0 1 11 4.5V6H9.5a1.5 1.5 0 0 1 0-3zm0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 9.5 13z"}}]}]})(props);
};
RiSlackLine.displayName = "RiSlackLine";
var RiSnapchatLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.396 10.58l.02-.249a32.392 32.392 0 0 0 .083-2.326c0-.87-.294-1.486-.914-2.063-.66-.614-1.459-.942-2.59-.942-1.137 0-1.958.335-2.51.888-.696.695-.958 1.218-.958 2.1 0 .521.061 1.994.096 2.618a2 2 0 0 1-.469 1.402c.055.098.105.204.153.317.3.771.198 1.543-.152 2.271-.392.818-.731 1.393-1.41 2.154a7.973 7.973 0 0 1-.642.643 1.999 1.999 0 0 1 .412.565 5.886 5.886 0 0 1 1.585.074c.81.146 1.324.434 2.194 1.061l.016.011.213.152c.619.44.877.546 1.473.546.609 0 .91-.121 1.523-.552l.207-.146c.876-.632 1.407-.928 2.231-1.076a6.664 6.664 0 0 1 1.559-.074 1.999 1.999 0 0 1 .417-.567 8.409 8.409 0 0 1-.616-.616 9.235 9.235 0 0 1-1.447-2.16c-.363-.749-.47-1.54-.137-2.321.04-.098.085-.19.132-.276a2 2 0 0 1-.469-1.435zm-10.315-.102c.419 0 .6.305 1.219.305.157 0 .26-.035.326-.066-.009-.156-.099-1.986-.099-2.729 0-1.688.72-2.69 1.543-3.514C8.893 3.65 10.175 3 11.996 3c1.82 0 3.066.653 3.952 1.478.886.825 1.551 1.93 1.551 3.528 0 1.555-.099 2.594-.108 2.716a.59.59 0 0 0 .279.065c.63 0 .63-.31 1.33-.31.685 0 .983.57.983.823 0 .621-.833.967-1.33 1.126-.369.117-.931.291-1.075.635-.074.174-.043.4.092.678.003.008 1.26 2.883 3.93 3.326.235.035.391.241.391.483 0 .332-.37.617-.726.782-.443.2-1.091.37-1.952.505-.043.078-.134.485-.235.887-.135.542-.801.366-.991.326A4.997 4.997 0 0 0 16.291 20c-.482.087-.913.378-1.395.726-.713.504-1.465 1.076-2.9 1.076-1.436 0-2.144-.572-2.857-1.076-.482-.348-.905-.637-1.396-.726-.898-.163-1.57.036-1.795.057-.226.02-.842.244-.996-.327-.045-.166-.191-.808-.235-.895-.856-.135-1.508-.313-1.952-.513-.365-.165-.726-.443-.726-.779 0-.235.158-.44.391-.482 2.644-.483 3.766-3.005 3.922-3.33.132-.276.161-.5.091-.679-.143-.343-.704-.513-1.073-.635-.105-.034-1.336-.373-1.336-1.117 0-.24.205-.573.582-.73a1.36 1.36 0 0 1 .465-.092z"}}]}]})(props);
};
RiSnapchatLine.displayName = "RiSnapchatLine";
var RiSoundcloudLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 10a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1zm3 1a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm3-4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm5-1a6 6 0 0 1 5.996 5.775l.003.26a3.5 3.5 0 0 1-.307 6.96L20.5 19h-3.501a1 1 0 0 1-.117-1.993L17 17h3.447l.138-.002a1.5 1.5 0 0 0 .267-2.957l-.135-.026-1.77-.252.053-1.787-.004-.176A4 4 0 0 0 15.2 8.005L15 8c-.268 0-.531.026-.788.077L14 8.126V18a1 1 0 0 1-.883.993L13 19a1 1 0 0 1-1-1l-.001-11.197A5.972 5.972 0 0 1 15 6zM1 12a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiSoundcloudLine.displayName = "RiSoundcloudLine";
var RiSpectrumLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11.388 2.001l1.811.005.844.014c7.161.164 7.938 1.512 7.957 9.667l-.006 1.512-.014.844c-.164 7.161-1.512 7.938-9.667 7.957l-1.512-.006-.888-.015c-6.853-.163-7.827-1.428-7.907-8.78L2 11.691l.006-.89.014-.865c.165-7.053 1.487-7.897 9.368-7.935zM14.12 4.01L10.882 4l-1.322.01c-5.489.082-5.544.82-5.559 7.403l.001 2.175.01 1.04c.089 4.982.793 5.343 6.4 5.369l3.454-.002.776-.009c5.108-.091 5.347-.837 5.358-6.877l-.003-2.743-.012-1.055c-.094-4.796-.785-5.25-5.865-5.303zM8.25 7A8.75 8.75 0 0 1 17 15.75v.583a.667.667 0 0 1-.667.667h-3.666a.667.667 0 0 1-.667-.667v-.583A3.75 3.75 0 0 0 8.25 12h-.583A.667.667 0 0 1 7 11.333V7.667C7 7.299 7.299 7 7.667 7h.583z"}}]}]})(props);
};
RiSpectrumLine.displayName = "RiSpectrumLine";
var RiSpotifyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.55 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 2c-4.395 0-8 3.605-8 8s3.605 8 8 8 8-3.605 8-8c0-4.414-3.573-8-8-8zm3.75 12.65c-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85-.2.3-.55.4-.85.2zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1s-.7.5-1.05.25zM6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75z"}}]}]})(props);
};
RiSpotifyLine.displayName = "RiSpotifyLine";
var RiStackOverflowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 20.002V15h2v7.002H4V15h2v5.002h12zM7.5 18v-2h9v2h-9zm.077-4.38l.347-1.97 8.864 1.563-.348 1.97-8.863-1.563zm1.634-5.504l1-1.732 7.794 4.5-1 1.732-7.794-4.5zm3.417-4.613l1.532-1.286 5.785 6.895-1.532 1.285-5.785-6.894z"}}]}]})(props);
};
RiStackOverflowLine.displayName = "RiStackOverflowLine";
var RiSwitchLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 3v18H7.6A4.6 4.6 0 0 1 3 16.4V7.6A4.6 4.6 0 0 1 7.6 3H12zm-2 2H7.6A2.6 2.6 0 0 0 5 7.6v8.8A2.6 2.6 0 0 0 7.6 19H10V5zm-2.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM14 3h2.4A4.6 4.6 0 0 1 21 7.6v8.8a4.6 4.6 0 0 1-4.6 4.6H14V3zm3 11.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z"}}]}]})(props);
};
RiSwitchLine.displayName = "RiSwitchLine";
var RiTaobaoLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17.172 14H14.5v1.375c.55-.221 1.153-.49 1.812-.81l-.082-.238.942-.327zm.828-.287l.12-.042c.641 1.851 1.034 3.012 1.185 3.5l-1.912.59c-.074-.24-.216-.672-.427-1.293-6.081 2.885-8.671 2.054-9.008-1.907l1.993-.17c.1 1.165.344 1.622.897 1.752.393.093.94.063 1.652-.104V14H9v-2h.513l-1.167-1.39c1.043-.876 1.858-1.83 2.448-2.864-.518.135-1.037.28-1.551.435a13.955 13.955 0 0 1-1.754 2.109l-1.4-1.428c1.272-1.248 2.333-2.91 3.176-4.994l1.854.75a21.71 21.71 0 0 1-.48 1.101c3.702-.936 7.275-1.317 9.138-.68 1.223.418 1.919 1.391 2.187 2.584.17.756.313 2.689.313 5.123 0 2.807-.056 3.77-.34 4.622-.297.89-.696 1.418-1.407 1.984-.657.523-1.553.763-2.645.823-.673.037-1.368.003-2.095-.08a19.614 19.614 0 0 1-.596-.075l.264-1.982a57.039 57.039 0 0 0 .556.07c.625.07 1.216.1 1.762.07.714-.04 1.245-.181 1.508-.39.426-.34.591-.558.756-1.054.186-.554.237-1.448.237-3.988 0-2.299-.133-4.102-.264-4.683-.13-.577-.41-.97-.883-1.132-1.207-.412-3.801-.194-6.652.417l.615.262c-.13.302-.273.6-.43.89H18v2h-3.5V12H18v1.713zM12.5 10.5h-1.208A13.685 13.685 0 0 1 9.798 12H12.5v-1.5zm-10.039-.438L3.54 8.377c1.062.679 2.935 2.427 3.338 3.161 1.239 2.26.197 4.176-3.122 7.997l-1.51-1.311c2.687-3.094 3.5-4.59 2.878-5.724-.214-.39-1.857-1.924-2.662-2.438zm2.68-2.479c-1.049 0-1.883-.762-1.888-1.693 0-.94.84-1.701 1.887-1.701 1.04 0 1.883.758 1.883 1.701 0 .935-.843 1.693-1.883 1.693z"}}]}]})(props);
};
RiTaobaoLine.displayName = "RiTaobaoLine";
var RiTelegramLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z"}}]}]})(props);
};
RiTelegramLine.displayName = "RiTelegramLine";
var RiTrelloLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5 5v14h14V5H5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 4h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm6 0h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiTrelloLine.displayName = "RiTrelloLine";
var RiTumblrLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 8c1.075 0 3.497-.673 3.497-4.5V2h1.5v6H18v2h-5.003v2.91C13 15.39 13 16.595 13 17c-.002 2.208 1.615 3.4 4.785 3.4V22h-2.242c-2.402.002-4.546-2.035-4.546-4.545V10H7V8h1z"}}]}]})(props);
};
RiTumblrLine.displayName = "RiTumblrLine";
var RiTwitchLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"}}]}]})(props);
};
RiTwitchLine.displayName = "RiTwitchLine";
var RiTwitterLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"}}]}]})(props);
};
RiTwitterLine.displayName = "RiTwitterLine";
var RiUbuntuLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.667 19.273l1.006-1.742a6.001 6.001 0 0 0 8.282-4.781h2.012A7.97 7.97 0 0 1 18.928 16a8 8 0 0 1-1.452 1.835 2.493 2.493 0 0 0-1.976.227 2.493 2.493 0 0 0-1.184 1.596 7.979 7.979 0 0 1-5.65-.385zm-1.3-.75a7.979 7.979 0 0 1-3.156-4.7C4.696 13.367 5 12.72 5 12c0-.72-.304-1.369-.791-1.825A8 8 0 0 1 5.072 8a7.97 7.97 0 0 1 2.295-2.524l1.006 1.742a6.001 6.001 0 0 0 0 9.563l-1.005 1.742zm1.3-13.796a8.007 8.007 0 0 1 5.648-.387c.152.65.562 1.238 1.185 1.598.623.36 1.337.42 1.976.227a8.007 8.007 0 0 1 2.49 5.085h-2.013A5.99 5.99 0 0 0 15 6.804a5.99 5.99 0 0 0-5.327-.335L8.667 4.727zM16 5.072a1.5 1.5 0 1 1 1.5-2.598A1.5 1.5 0 0 1 16 5.072zM4 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm12 6.928a1.5 1.5 0 1 1 1.5 2.598 1.5 1.5 0 0 1-1.5-2.598z"}}]}]})(props);
};
RiUbuntuLine.displayName = "RiUbuntuLine";
var RiVisaLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z"}}]}]})(props);
};
RiVisaLine.displayName = "RiVisaLine";
var RiVuejsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.316 3L12 18l8.684-15H23L12 22 1 3h2.316zm4.342 0L12 10.5 16.342 3h2.316L12 14.5 5.342 3h2.316z"}}]}]})(props);
};
RiVuejsLine.displayName = "RiVuejsLine";
var RiWechat2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.667 11.511a1.276 1.276 0 0 1-1.285-1.285c0-.718.567-1.286 1.285-1.286.717 0 1.285.568 1.285 1.286 0 .717-.568 1.285-1.285 1.285zm6.666 0a1.276 1.276 0 0 1-1.285-1.285c0-.718.568-1.286 1.285-1.286.718 0 1.285.568 1.285 1.286 0 .717-.567 1.285-1.285 1.285zm-8.51 7.704l.715-.436a4 4 0 0 1 2.705-.536c.212.033.386.059.52.076.406.054.82.081 1.237.081 4.42 0 7.9-3.022 7.9-6.6S16.42 5.2 12 5.2s-7.9 3.022-7.9 6.6c0 1.366.5 2.673 1.432 3.781.048.057.12.137.214.235a4 4 0 0 1 1.101 3.102l-.025.297zm-.63 2.727a1 1 0 0 1-1.527-.93l.188-2.26a2 2 0 0 0-.55-1.551A6.993 6.993 0 0 1 4 16.868C2.806 15.447 2.1 13.695 2.1 11.8c0-4.75 4.432-8.6 9.9-8.6s9.9 3.85 9.9 8.6-4.432 8.6-9.9 8.6c-.51 0-1.01-.033-1.499-.098a23.61 23.61 0 0 1-.569-.084 2 2 0 0 0-1.353.268l-2.387 1.456z"}}]}]})(props);
};
RiWechat2Line.displayName = "RiWechat2Line";
var RiWechatLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fillRule":"evenodd"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10 14.676v-.062c0-2.508 2.016-4.618 4.753-5.233C14.389 7.079 11.959 5.2 8.9 5.2 5.58 5.2 3 7.413 3 9.98c0 .969.36 1.9 1.04 2.698.032.038.083.094.152.165a3.568 3.568 0 0 1 1.002 2.238 3.612 3.612 0 0 1 2.363-.442c.166.026.302.046.405.06A7.254 7.254 0 0 0 10 14.675zm.457 1.951a9.209 9.209 0 0 1-2.753.055 19.056 19.056 0 0 1-.454-.067 1.612 1.612 0 0 0-1.08.212l-1.904 1.148a.806.806 0 0 1-.49.117.791.791 0 0 1-.729-.851l.15-1.781a1.565 1.565 0 0 0-.439-1.223 5.537 5.537 0 0 1-.241-.262C1.563 12.855 1 11.473 1 9.979 1 6.235 4.537 3.2 8.9 3.2c4.06 0 7.403 2.627 7.85 6.008 3.372.153 6.05 2.515 6.05 5.406 0 1.193-.456 2.296-1.229 3.19-.051.06-.116.13-.195.21a1.24 1.24 0 0 0-.356.976l.121 1.423a.635.635 0 0 1-.59.68.66.66 0 0 1-.397-.094l-1.543-.917a1.322 1.322 0 0 0-.874-.169c-.147.023-.27.04-.368.053-.316.04-.64.062-.969.062-2.694 0-4.998-1.408-5.943-3.401zm6.977 1.31a3.325 3.325 0 0 1 1.676.174 3.25 3.25 0 0 1 .841-1.502c.05-.05.087-.09.106-.112.489-.565.743-1.213.743-1.883 0-1.804-1.903-3.414-4.4-3.414-2.497 0-4.4 1.61-4.4 3.414s1.903 3.414 4.4 3.414c.241 0 .48-.016.714-.046.08-.01.188-.025.32-.046z"}}]}]})(props);
};
RiWechatLine.displayName = "RiWechatLine";
var RiWechatPayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.145 8.993l-9.799 5.608-.07.046a.646.646 0 0 1-.3.068.655.655 0 0 1-.58-.344l-.046-.092-1.83-3.95c-.024-.046-.024-.092-.024-.138 0-.184.139-.321.324-.321.07 0 .14.023.209.069l2.155 1.515c.162.092.348.161.556.161a.937.937 0 0 0 .348-.069l8.275-3.648C16.934 6.273 14.634 5.2 12 5.2c-4.42 0-7.9 3.022-7.9 6.6 0 1.366.5 2.673 1.432 3.781.048.057.12.137.214.235a4 4 0 0 1 1.101 3.102l-.025.297.716-.436a4 4 0 0 1 2.705-.536c.212.033.386.059.52.076.406.054.82.081 1.237.081 4.42 0 7.9-3.022 7.9-6.6 0-.996-.27-1.95-.755-2.807zM6.192 21.943a1 1 0 0 1-1.526-.932l.188-2.259a2 2 0 0 0-.55-1.551A6.993 6.993 0 0 1 4 16.868C2.806 15.447 2.1 13.695 2.1 11.8c0-4.75 4.432-8.6 9.9-8.6s9.9 3.85 9.9 8.6-4.432 8.6-9.9 8.6c-.51 0-1.01-.033-1.499-.098a23.61 23.61 0 0 1-.569-.084 2 2 0 0 0-1.353.268l-2.387 1.456z"}}]}]})(props);
};
RiWechatPayLine.displayName = "RiWechatPayLine";
var RiWeiboLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M20.194 14.197c0 3.362-4.53 6.424-9.926 6.424C5.318 20.62 1 18.189 1 14.534c0-1.947 1.18-4.087 3.24-6.088 2.832-2.746 6.229-4.033 7.858-2.448.498.482.723 1.122.719 1.858 1.975-.576 3.65-.404 4.483.752.449.623.532 1.38.326 2.207 1.511.61 2.568 1.77 2.568 3.382zm-4.44-2.07c-.386-.41-.4-.92-.198-1.41.208-.508.213-.812.12-.94-.264-.368-1.533-.363-3.194.311a2.043 2.043 0 0 1-.509.14c-.344.046-.671.001-.983-.265-.419-.359-.474-.855-.322-1.316.215-.67.18-1.076.037-1.215-.186-.18-.777-.191-1.659.143-1.069.405-2.298 1.224-3.414 2.306C3.925 11.54 3 13.218 3 14.534c0 2.242 3.276 4.087 7.268 4.087 4.42 0 7.926-2.37 7.926-4.424 0-.738-.637-1.339-1.673-1.652-.394-.113-.536-.171-.767-.417zm7.054-1.617a1 1 0 0 1-1.936-.502 4 4 0 0 0-4.693-4.924 1 1 0 1 1-.407-1.958 6 6 0 0 1 7.036 7.384z"}}]}]})(props);
};
RiWeiboLine.displayName = "RiWeiboLine";
var RiWhatsappLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z"}}]}]})(props);
};
RiWhatsappLine.displayName = "RiWhatsappLine";
var RiWindowsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 5H5v6h6V5zm2 0v6h6V5h-6zm6 8h-6v6h6v-6zm-8 6v-6H5v6h6zM3 3h18v18H3V3z"}}]}]})(props);
};
RiWindowsLine.displayName = "RiWindowsLine";
var RiXboxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.797 15.485c1.124-2.52 3.2-5.44 4.487-6.962-1.248-1.246-2.162-1.931-2.818-2.3A7.977 7.977 0 0 0 4 12c0 1.25.286 2.432.797 3.485zm4.051-10.84C10.448 5.05 12 5.959 12 5.959v-.005s1.552-.904 3.151-1.31A7.974 7.974 0 0 0 12 4c-1.12 0-2.185.23-3.152.645zm8.686 1.578c-.655.37-1.568 1.055-2.816 2.3 1.287 1.523 3.362 4.441 4.486 6.961A7.968 7.968 0 0 0 20 12c0-2.27-.946-4.32-2.466-5.777zm.408 11.133c-1.403-2.236-4.09-4.944-5.942-6.343-1.85 1.4-4.539 4.108-5.941 6.345A7.98 7.98 0 0 0 12 20a7.98 7.98 0 0 0 5.942-2.644zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"}}]}]})(props);
};
RiXboxLine.displayName = "RiXboxLine";
var RiXingLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20.444 3.5L13.81 14.99 17.857 22h-2.31l-4.045-7.009H11.5L18.134 3.5h2.31zM8.31 7l2.422 4.196-.002.001L7.67 16.5H5.361l3.06-5.305L6.002 7H8.31z"}}]}]})(props);
};
RiXingLine.displayName = "RiXingLine";
var RiYoutubeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"}}]}]})(props);
};
RiYoutubeLine.displayName = "RiYoutubeLine";
var RiZcoolLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8.26 8.26C5.838 8.803 4 11.208 4 13.935a5.903 5.903 0 0 0 11.703 1.098 2 2 0 0 1 1.129-1.448c.482-.222.91-.473 1.284-.743-.863-.603-1.186-1.862-.47-2.834a9.796 9.796 0 0 0 1.391-2.651 19.04 19.04 0 0 1-3.668 1.265c-1.261.303-2.392-.638-2.466-1.814-1.18.572-2.67 1.01-4.642 1.452zm10.996 2.934c1.166 0 1.917-.424 2.744-.587-.325 1.448-1.5 3.49-4.33 4.795A7.903 7.903 0 0 1 2 13.936C2 10.29 4.467 7.06 7.824 6.308 11.745 5.43 13.528 4.742 14.9 2c.689 1.333.689 2.892 0 4.677 2.816-.67 5.074-1.852 6.774-3.548 0 4.802-1.822 7.186-2.419 8.065zm-5.84 3.932c.584.145.584.832.584 1.02v1.022c0 .561-.342.773-.844.773H7.742c-.475-.087-.734-.346-.734-.778v-.95c0-.475.216-.82.432-1.08l3.152-3.369H7.526c-.302 0-.518-.216-.518-.604-.044-.735.086-1.9.647-2.16.087 0 .087.13.087.173-.087.173 0 .302.216.302h3.887c.863 0 1.381 0 1.684-.086.13-.043.216 0 .173.13-.087.302-.044.647-.044.95 0 .993 0 1.382-.777 2.159l-2.678 2.937 2.85-.002c.316 0 .364-.146.364-.437z"}}]}]})(props);
};
RiZcoolLine.displayName = "RiZcoolLine";
var RiZhihuLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.344 17.963l-1.688 1.074-2.131-3.35c-.44 1.402-1.172 2.665-2.139 3.825-.402.483-.82.918-1.301 1.375-.155.147-.775.717-.878.82l-1.414-1.414c.139-.139.787-.735.915-.856.43-.408.795-.79 1.142-1.206 1.266-1.518 2.03-3.21 2.137-5.231H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.857L2.486 8.143c1.395-.838 2.425-2.604 3.038-5.36l1.952.434c-.14.633-.303 1.227-.489 1.783H11.5v2H9v4h2.5v2H9.185l3.159 4.963zm3.838-.07L17.298 17H19V7h-4v10h.736l.446.893zM13 5h8v14h-3l-2.5 2-1-2H13V5z"}}]}]})(props);
};
RiZhihuLine.displayName = "RiZhihuLine";
var RiAnchorLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.05 11H7v2H4.062A8.004 8.004 0 0 0 11 19.938V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874v10.064A8.004 8.004 0 0 0 19.938 13H17v-2h4.95c.033.329.05.663.05 1 0 5.523-4.477 10-10 10S2 17.523 2 12c0-.337.017-.671.05-1zM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiAnchorLine.displayName = "RiAnchorLine";
var RiBarricadeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.493 19h11.014l-.667-3H7.16l-.667 3zm13.063 0H21v2H3v-2h1.444L7.826 3.783A1 1 0 0 1 8.802 3h6.396a1 1 0 0 1 .976.783L19.556 19zM7.604 14h8.792l-.89-4H8.494l-.889 4zm1.334-6h6.124l-.666-3H9.604l-.666 3z"}}]}]})(props);
};
RiBarricadeLine.displayName = "RiBarricadeLine";
var RiBikeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956L5.5 12zM5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm13-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"}}]}]})(props);
};
RiBikeLine.displayName = "RiBikeLine";
var RiBus2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 20H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zM5 5v6h14V5H5zm14 8H5v5h14v-5zM7.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiBus2Line.displayName = "RiBus2Line";
var RiBusLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 20H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm2-8V5H5v7h14zm0 2H5v4h14v-4zM6 15h4v2H6v-2zm8 0h4v2h-4v-2z"}}]}]})(props);
};
RiBusLine.displayName = "RiBusLine";
var RiBusWifiLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3v2H5v7h16v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h7zm7 11H5v4h14v-4zm-9 1v2H6v-2h4zm8 0v2h-4v-2h4zm.5-14a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.416a1.994 1.994 0 0 0-1.413-.584zm0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165.944.942a3.323 3.323 0 0 1 2.357-.977 3.32 3.32 0 0 1 2.201.83l.156.147.943-.943A4.652 4.652 0 0 0 18.5 3.5z"}}]}]})(props);
};
RiBusWifiLine.displayName = "RiBusWifiLine";
var RiCarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-7H4v5h16v-5zM4.176 11h15.648l-2.143-5H6.32l-2.143 5zM6.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiCarLine.displayName = "RiCarLine";
var RiCarWashingLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 21H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V12l2.417-4.029A2 2 0 0 1 6.132 7h11.736a2 2 0 0 1 1.715.971L22 12v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-7H4v5h16v-5zM4.332 12h15.336l-1.8-3H6.132l-1.8 3zM5.44 3.44L6.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zm5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zm5.5 0L17.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zM6.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiCarWashingLine.displayName = "RiCarWashingLine";
var RiChargingPile2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 0 1-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0v-7zm-8 8V5H5v14h7zm-3-8h3l-4 6v-4H5l4-6v4z"}}]}]})(props);
};
RiChargingPile2Line.displayName = "RiChargingPile2Line";
var RiChargingPileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 19h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A.997.997 0 0 1 22 9v9a3 3 0 0 1-6 0v-4h-2v5zm-9 0h7V5H5v14zm4-8h3l-4 6v-4H5l4-6v4z"}}]}]})(props);
};
RiChargingPileLine.displayName = "RiChargingPileLine";
var RiChinaRailwayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 20v-7H9v-3h6v3h-2v7h5v2H6v-2h5zM10 2.223V1h4v1.223a9.003 9.003 0 0 1 2.993 16.266l-1.11-1.664a7 7 0 1 0-7.767 0l-1.109 1.664A9.003 9.003 0 0 1 10 2.223z"}}]}]})(props);
};
RiChinaRailwayLine.displayName = "RiChinaRailwayLine";
var RiCompass2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.625 3.133l-1.5 1.5A7.98 7.98 0 0 0 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8a7.98 7.98 0 0 0-.633-3.125l1.5-1.5A9.951 9.951 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.668 0 3.241.41 4.625 1.133zm1.739 1.089l1.414 1.414L12 13.414 10.586 12l7.778-7.778z"}}]}]})(props);
};
RiCompass2Line.displayName = "RiCompass2Line";
var RiCompass3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.5-12.5L14 14l-6.5 2.5L10 10l6.5-2.5zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiCompass3Line.displayName = "RiCompass3Line";
var RiCompass4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.446-10.032l-5.478 5.478a4.02 4.02 0 0 1-1.414-1.414l5.478-5.478a4.02 4.02 0 0 1 1.414 1.414z"}}]}]})(props);
};
RiCompass4Line.displayName = "RiCompass4Line";
var RiCompassDiscoverLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8.5L16 8l-3.5 9.002L11 13l-4-1.5z"}}]}]})(props);
};
RiCompassDiscoverLine.displayName = "RiCompassDiscoverLine";
var RiCompassLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.5-11.5l-2 5-5 2 2-5 5-2z"}}]}]})(props);
};
RiCompassLine.displayName = "RiCompassLine";
var RiCupLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16 13V5H6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zM5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z"}}]}]})(props);
};
RiCupLine.displayName = "RiCupLine";
var RiDirectionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3.515L3.515 12 12 20.485 20.485 12 12 3.515zm.707-2.122l9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l9.9-9.9a1 1 0 0 1 1.414 0zM13 10V7.5l3.5 3.5-3.5 3.5V12h-3v3H8v-4a1 1 0 0 1 1-1h4z"}}]}]})(props);
};
RiDirectionLine.displayName = "RiDirectionLine";
var RiEBike2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16,1 C16.5522847,1 17,1.44771525 17,2 L17,3 L22,3 L22,9 L19.9813388,9 L22.7270773,16.5438545 C22.9032836,16.9948332 23,17.4856276 23,17.9990113 C23,20.2081503 21.209139,21.9990113 19,21.9990113 C17.1365166,21.9990113 15.5706587,20.7247255 15.1262721,19 L10.8739825,19 C10.4299397,20.7252272 8.86383943,22 7,22 C5.05550552,22 3.43507622,20.612512 3.0747418,18.7735658 C2.43596423,18.4396361 2,17.7707305 2,17 L2,7 C2,6.44771525 2.44771525,6 3,6 L10,6 C10.5522847,6 11,6.44771525 11,7 L11,12 C11,12.5522847 11.4477153,13 12,13 L14,13 C14.5522847,13 15,12.5522847 15,12 L15,3 L12,3 L12,1 L16,1 Z M7,16 C5.8954305,16 5,16.8954305 5,18 C5,19.1045695 5.8954305,20 7,20 C8.1045695,20 9,19.1045695 9,18 C9,16.8954305 8.1045695,16 7,16 Z M19,15.9990113 C17.8954305,15.9990113 17,16.8944418 17,17.9990113 C17,19.1035808 17.8954305,19.9990113 19,19.9990113 C20.1045695,19.9990113 21,19.1035808 21,17.9990113 C21,17.7586785 20.9576092,17.5282466 20.8798967,17.3147849 L20.8635387,17.2714329 C20.5725256,16.5266202 19.8478776,15.9990113 19,15.9990113 Z M17.8529833,9 L16.9999998,9 L16.9999998,12 C16.9999998,13.6568542 15.6568542,15 13.9999998,15 L11.9999998,15 C10.3431458,15 8.99999976,13.6568542 8.99999976,12 L3.99999976,12 L3.99999976,15.3541759 C4.73294422,14.523755 5.80530734,14 6.99999976,14 C8.86383943,14 10.4299397,15.2747728 10.8739825,17 L15.1257631,17 C15.569462,15.2742711 17.1358045,13.9990113 18.9999998,13.9990113 C19.2368134,13.9990113 19.4688203,14.0195905 19.6943299,14.0590581 L17.8529833,9 Z M8.99999976,8 L3.99999976,8 L3.99999976,10 L8.99999976,10 L8.99999976,8 Z M20,5 L17,5 L17,7 L20,7 L20,5 Z"}}]}]})(props);
};
RiEBike2Line.displayName = "RiEBike2Line";
var RiEBikeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.5 6.937A6.997 6.997 0 0 1 19 13v8h-4.17a3.001 3.001 0 0 1-5.66 0H5v-8a6.997 6.997 0 0 1 3.5-6.063A3.974 3.974 0 0 1 8.125 6H5V4h3.126a4.002 4.002 0 0 1 7.748 0H19v2h-3.126c-.085.33-.212.645-.373.937zm-1.453 1.5C13.448 8.795 12.748 9 12 9a3.981 3.981 0 0 1-2.047-.563A5.001 5.001 0 0 0 7 13v6h2v-4a3 3 0 0 1 6 0v4h2v-6a5.001 5.001 0 0 0-2.953-4.563zM12 14a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiEBikeLine.displayName = "RiEBikeLine";
var RiEarthLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"}}]}]})(props);
};
RiEarthLine.displayName = "RiEarthLine";
var RiFlightLandLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.254 10.47l-.37-8.382 1.933.518 2.81 9.035 5.261 1.41a1.5 1.5 0 1 1-.776 2.898L4.14 11.937l.776-2.898.242.065.914 3.35-2.627-.703a1 1 0 0 1-.74-.983l.09-5.403 1.449.388.914 3.351 5.096 1.366zM4 19h16v2H4v-2z"}}]}]})(props);
};
RiFlightLandLine.displayName = "RiFlightLandLine";
var RiFlightTakeoffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.478 11.632L5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445 5.097-1.366zM4 19h16v2H4v-2z"}}]}]})(props);
};
RiFlightTakeoffLine.displayName = "RiFlightTakeoffLine";
var RiFootprintLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 18h5.5v1.25a2.75 2.75 0 1 1-5.5 0V18zm4.058-4l.045-.132C8.87 11.762 9 11.37 9 11c0-.75-.203-1.643-.528-2.273C8.23 8.257 8.06 8.12 8 8.12 6.72 8.12 5.5 9.484 5.5 11c0 .959.075 1.773.227 2.758l.038.242h2.293zM8 6.12c2 0 3 2.88 3 4.88 0 1-.5 2-1 3.5L9.5 16H4c0-1-.5-2.5-.5-5S5.498 6.12 8 6.12zm12.054 7.978l-.217 1.231a2.75 2.75 0 0 1-5.417-.955l.218-1.23 5.416.954zm-1.05-4.246c.165-.5.301-.895.303-.9.202-.658.361-1.303.485-2.008.263-1.492-.702-3.047-1.962-3.27-.059-.01-.25.095-.57.515-.43.565-.784 1.41-.915 2.147-.058.33-.049.405.27 2.263.045.256.082.486.116.717l.02.138 2.254.398zm-.826-8.147c2.464.434 4.018 3.124 3.584 5.586-.434 2.463-1.187 3.853-1.36 4.838l-5.417-.955-.232-1.564c-.232-1.564-.55-2.636-.377-3.62.347-1.97 1.832-4.632 3.802-4.285z"}}]}]})(props);
};
RiFootprintLine.displayName = "RiFootprintLine";
var RiGasStationLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 19h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A.997.997 0 0 1 22 9v9a3 3 0 0 1-6 0v-4h-2v5zm-9 0h7v-6H5v6zM5 5v6h7V5H5z"}}]}]})(props);
};
RiGasStationLine.displayName = "RiGasStationLine";
var RiGlobeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 21h5v2H6v-2h5v-1.05a10.002 10.002 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.992-1.737A9.996 9.996 0 0 1 22 10c0 5.185-3.947 9.449-9 9.95V21zm-1-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"}}]}]})(props);
};
RiGlobeLine.displayName = "RiGlobeLine";
var RiGobletLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 19v-5.111L3 5V3h18v2l-8 8.889V19h5v2H6v-2h5zM7.49 7h9.02l1.8-2H5.69l1.8 2zm1.8 2L12 12.01 14.71 9H9.29z"}}]}]})(props);
};
RiGobletLine.displayName = "RiGobletLine";
var RiGuideLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4-5 4V7h-3a1 1 0 0 0-1 1zM5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiGuideLine.displayName = "RiGuideLine";
var RiHotelBedLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4zm-2 3v-3a2 2 0 0 0-2-2h-4v5h6zM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]}]})(props);
};
RiHotelBedLine.displayName = "RiHotelBedLine";
var RiLifebuoyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 15a4.987 4.987 0 0 1-1.828-.345l-2.236 2.237A7.963 7.963 0 0 0 12 20a7.963 7.963 0 0 0 4.064-1.108l-2.236-2.237A4.987 4.987 0 0 1 12 17zm-8-5c0 1.484.404 2.873 1.108 4.064l2.237-2.236A4.987 4.987 0 0 1 7 12c0-.645.122-1.261.345-1.828L5.108 7.936A7.963 7.963 0 0 0 4 12zm14.892-4.064l-2.237 2.236c.223.567.345 1.183.345 1.828s-.122 1.261-.345 1.828l2.237 2.236A7.963 7.963 0 0 0 20 12a7.963 7.963 0 0 0-1.108-4.064zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a7.963 7.963 0 0 0-4.064 1.108l2.236 2.237A4.987 4.987 0 0 1 12 7c.645 0 1.261.122 1.828.345l2.236-2.237A7.963 7.963 0 0 0 12 4z"}}]}]})(props);
};
RiLifebuoyLine.displayName = "RiLifebuoyLine";
var RiMap2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm14 14.395l4-1.714V5.033l-4 1.714v12.648zm-2-.131V6.736l-4-2v12.528l4 2zm-6-2.011V4.605L4 6.319v12.648l4-1.714z"}}]}]})(props);
};
RiMap2Line.displayName = "RiMap2Line";
var RiMapLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm12.935 2.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17z"}}]}]})(props);
};
RiMapLine.displayName = "RiMapLine";
var RiMapPin2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiMapPin2Line.displayName = "RiMapPin2Line";
var RiMapPin3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2v-4.055zM12 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"}}]}]})(props);
};
RiMapPin3Line.displayName = "RiMapPin3Line";
var RiMapPin4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2v-3.062zM12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-7 6h14v2H5v-2z"}}]}]})(props);
};
RiMapPin4Line.displayName = "RiMapPin4Line";
var RiMapPin5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 18.485l4.243-4.242a6 6 0 1 0-8.486 0L12 18.485zm5.657-2.828L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0zM5 22h14v2H5v-2z"}}]}]})(props);
};
RiMapPin5Line.displayName = "RiMapPin5Line";
var RiMapPinAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2h3z"}}]}]})(props);
};
RiMapPinAddLine.displayName = "RiMapPinAddLine";
var RiMapPinLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"}}]}]})(props);
};
RiMapPinLine.displayName = "RiMapPinLine";
var RiMapPinRangeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938v2.074c3.946.092 7 .723 7 1.488 0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488v-2.074zM12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiMapPinRangeLine.displayName = "RiMapPinRangeLine";
var RiMapPinTimeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM13 11h4v2h-6V6h2v5z"}}]}]})(props);
};
RiMapPinTimeLine.displayName = "RiMapPinTimeLine";
var RiMapPinUserLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.084 15.812a7 7 0 1 0-10.168 0A5.996 5.996 0 0 1 12 13a5.996 5.996 0 0 1 5.084 2.812zm-8.699 1.473L12 20.899l3.615-3.614a4 4 0 0 0-7.23 0zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]}]})(props);
};
RiMapPinUserLine.displayName = "RiMapPinUserLine";
var RiMotorbikeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 13.256V12H2v-2h6.365L11.2 8h3.491L13.6 5H11V3h4l1.092 3H20v3h-2.816l1.456 4.002a4.5 4.5 0 1 1-1.985.392L15.419 10h-.947l-1.582 5.87-.002-.001.002.006-2.925 1.064A4.5 4.5 0 1 1 4 13.256zm2-.229a4.5 4.5 0 0 1 3.281 2.033l1.957-.713L12.403 10h-.547L9 12H6v1.027zM5.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}}]}]})(props);
};
RiMotorbikeLine.displayName = "RiMotorbikeLine";
var RiNavigationLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.965 5.096l3.546 12.41 3.04-6.08 5.637-2.255L4.965 5.096zM2.899 2.3l18.806 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.26 2.911A.5.5 0 0 1 2.9 2.3z"}}]}]})(props);
};
RiNavigationLine.displayName = "RiNavigationLine";
var RiOilLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.07 7L6 11.606V20h12V7H9.07zM8 5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11l4-6zm5-4h5a1 1 0 0 1 1 1v2h-7V2a1 1 0 0 1 1-1zM8 12h2v6H8v-6z"}}]}]})(props);
};
RiOilLine.displayName = "RiOilLine";
var RiParkingBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm4 2h3.5a3.5 3.5 0 0 1 0 7H11v3H9V7zm2 2v3h1.5a1.5 1.5 0 0 0 0-3H11z"}}]}]})(props);
};
RiParkingBoxLine.displayName = "RiParkingBoxLine";
var RiParkingLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 3h7a6 6 0 1 1 0 12H8v6H6V3zm2 2v8h5a4 4 0 1 0 0-8H8z"}}]}]})(props);
};
RiParkingLine.displayName = "RiParkingLine";
var RiPinDistanceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.975 8.975a3.5 3.5 0 1 0-4.95 0L7.5 11.45l2.475-2.475zM7.5 14.278L3.61 10.39a5.5 5.5 0 1 1 7.78 0L7.5 14.28zM7.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 12.45l2.475-2.475a3.5 3.5 0 1 0-4.95 0L16.5 20.45zm3.89-1.06l-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0zM16.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiPinDistanceLine.displayName = "RiPinDistanceLine";
var RiPlaneLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0v5.447z"}}]}]})(props);
};
RiPlaneLine.displayName = "RiPlaneLine";
var RiPoliceCarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 13v5h16v-5H4zm1.618-2h12.764a1 1 0 0 0 .894-1.447L18 7H6L4.724 9.553A1 1 0 0 0 5.618 11zM22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.447-4.894A2 2 0 0 1 6.237 5H8V3h3v2h2V3h3v2h1.764a2 2 0 0 1 1.789 1.106L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5zM5 14c2.317 0 3.879.755 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1v-2zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736C15.12 14.754 16.682 14 19 14z"}}]}]})(props);
};
RiPoliceCarLine.displayName = "RiPoliceCarLine";
var RiPushpin2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3h12zM9 5v6.606L7.404 14h9.192L15 11.606V5H9z"}}]}]})(props);
};
RiPushpin2Line.displayName = "RiPushpin2Line";
var RiPushpinLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13.828 1.686l8.486 8.486-1.415 1.414-.707-.707-4.242 4.242-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.242 1.414-1.415L8.88 8.05l4.242-4.242-.707-.707 1.414-1.415zm.708 3.536l-4.671 4.67-2.822.565 6.5 6.5.564-2.822 4.671-4.67-4.242-4.243z"}}]}]})(props);
};
RiPushpinLine.displayName = "RiPushpinLine";
var RiRestaurant2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.268 12.146l-.854.854 7.071 7.071-1.414 1.414L12 14.415l-7.071 7.07-1.414-1.414 9.339-9.339c-.588-1.457.02-3.555 1.62-5.157 1.953-1.952 4.644-2.427 6.011-1.06s.892 4.058-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.621zM4.222 3.808l6.717 6.717-2.828 2.829-3.89-3.89a4 4 0 0 1 0-5.656zM18.01 9.11c1.258-1.257 1.517-2.726 1.061-3.182-.456-.456-1.925-.197-3.182 1.06-1.257 1.258-1.516 2.727-1.06 3.183.455.455 1.924.196 3.181-1.061z"}}]}]})(props);
};
RiRestaurant2Line.displayName = "RiRestaurant2Line";
var RiRestaurantLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"}}]}]})(props);
};
RiRestaurantLine.displayName = "RiRestaurantLine";
var RiRidingLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-7.477-8.695L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.969 6.969 0 0 0 3.917 1.975l-.01 2.015a8.962 8.962 0 0 1-5.321-2.575l-2.634 2.633zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiRidingLine.displayName = "RiRidingLine";
var RiRoadMapLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 6.143v12.824l5.065-2.17 6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V7l2-.857zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0zM12 12.657l2.828-2.829a4 4 0 1 0-5.656 0L12 12.657z"}}]}]})(props);
};
RiRoadMapLine.displayName = "RiRoadMapLine";
var RiRoadsterLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-2v-5H4v5h16zM5.477 11h13.046a1 1 0 0 0 .928-1.371L18 6H6L4.549 9.629A1 1 0 0 0 5.477 11zM5 14c2.317 0 3.879.755 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1v-2zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736C15.12 14.754 16.682 14 19 14z"}}]}]})(props);
};
RiRoadsterLine.displayName = "RiRoadsterLine";
var RiRocket2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.502 20A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20h2.26c.326.489.747.912 1.242 1.243.495-.33.916-.754 1.243-1.243h2.259zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM17.27 17L16 15.56V9c0-2.318-1.57-4.43-4-5.42C9.57 4.57 8 6.681 8 9v6.56L6.73 17h10.54zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiRocket2Line.displayName = "RiRocket2Line";
var RiRocketLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiRocketLine.displayName = "RiRocketLine";
var RiRouteLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 1 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5-4-5h3zm15-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiRouteLine.displayName = "RiRouteLine";
var RiRunLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.83 8.79L8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.402-2.547l-.697 3.956L15 16.17V23h-2v-5.898l-2.27-1.904-.727 4.127-6.894-1.215.348-1.97 4.924.868L9.83 8.79zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiRunLine.displayName = "RiRunLine";
var RiSailboatLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 18h18a.5.5 0 0 1 .4.8l-2.1 2.8a1 1 0 0 1-.8.4h-13a1 1 0 0 1-.8-.4l-2.1-2.8A.5.5 0 0 1 3 18zm4.161-4H13V6.702L7.161 14zM15 2.425V15a1 1 0 0 1-1 1H4.04a.5.5 0 0 1-.39-.812L14.11 2.113a.5.5 0 0 1 .89.312z"}}]}]})(props);
};
RiSailboatLine.displayName = "RiSailboatLine";
var RiShip2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74L19.637 18H19a6.01 6.01 0 0 1-1.535-.198L20.63 12H3.4l1.048 5.824A6.013 6.013 0 0 1 3 18h-.545l-1.24-6.821A1 1 0 0 1 2.197 10H3V5a1 1 0 0 1 1-1h1V1h4v3zm-4 6h11.392l-2.5-4H5v4zM3 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 11 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 19 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 11 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 3 22H1v-2h2z"}}]}]})(props);
};
RiShip2Line.displayName = "RiShip2Line";
var RiShipLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .682 1.2l-1.516 6.068a4.992 4.992 0 0 1-1.902-.272l1.25-5.352L12 10l-7.6 2.37 1.25 5.351a4.992 4.992 0 0 1-1.902.273l-1.516-6.068a1 1 0 0 1 .682-1.2L4 10.4zm2-.6L12 8l6 1.8V5H6v4.8zM4 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 12 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 20 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 12 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 4 22H2v-2h2z"}}]}]})(props);
};
RiShipLine.displayName = "RiShipLine";
var RiSignalTowerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.116 20.087A9.986 9.986 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.986 9.986 0 0 1-4.116 8.087l-1.015-1.739a8 8 0 1 0-9.738 0l-1.015 1.739zm2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0l-1.03 1.766zM11 13h2v9h-2v-9z"}}]}]})(props);
};
RiSignalTowerLine.displayName = "RiSignalTowerLine";
var RiSpaceShipLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zm6.698-1.123l1.157.066L12 19.527l1.265-2.53 1.157-.066a42.137 42.137 0 0 0 4.227-.454A33.913 33.913 0 0 0 12 4.09a33.913 33.913 0 0 0-6.649 12.387c1.395.222 2.805.374 4.227.454zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiSpaceShipLine.displayName = "RiSpaceShipLine";
var RiSteering2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM8 13l-3.938.001A8.004 8.004 0 0 0 11 19.938V16a3 3 0 0 1-3-3zm11.938.001L16 13a3 3 0 0 1-3 3l.001 3.938a8.004 8.004 0 0 0 6.937-6.937zM14 12h-4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1zm-2-8a8.001 8.001 0 0 0-7.938 7H8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h3.938A8.001 8.001 0 0 0 12 4z"}}]}]})(props);
};
RiSteering2Line.displayName = "RiSteering2Line";
var RiSteeringLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21.8 14.001a10.009 10.009 0 0 1-8.4 7.902v-2.025A8.01 8.01 0 0 0 19.748 14l2.052.001zm-17.548 0a8.01 8.01 0 0 0 6.247 5.858v2.03A10.01 10.01 0 0 1 2.2 14h2.052zM18 11v2h-3a2 2 0 0 0-1.995 1.85L13 15v3h-2v-3a2 2 0 0 0-1.85-1.995L9 13H6v-2h12zm-6-9c5.185 0 9.449 3.947 9.95 9h-2.012a8.001 8.001 0 0 0-15.876 0H2.049C2.551 5.947 6.815 2 12 2z"}}]}]})(props);
};
RiSteeringLine.displayName = "RiSteeringLine";
var RiSubwayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2h-1.8zM13 5v6h6V7a2 2 0 0 0-2-2h-4zm-2 0H7a2 2 0 0 0-2 2v4h6V5zm8 8H5v5h14v-5zM7.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiSubwayLine.displayName = "RiSubwayLine";
var RiSubwayWifiLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 18a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h6v8h8v7zm-2-5H5v5h14v-5zM7.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11 5H7a2 2 0 0 0-1.995 1.85L5 7v4h6V5zm7.5-4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.416a1.994 1.994 0 0 0-1.413-.584zm0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165.944.942a3.323 3.323 0 0 1 2.357-.977 3.32 3.32 0 0 1 2.201.83l.156.147.943-.943A4.652 4.652 0 0 0 18.5 3.5z"}}]}]})(props);
};
RiSubwayWifiLine.displayName = "RiSubwayWifiLine";
var RiTakeawayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16,1 C16.5522847,1 17,1.44771525 17,2 L17,2.999 L22,3 L22,9 L19.98,8.999 L22.7467496,16.595251 C22.9104689,17.0320314 23,17.5050658 23,17.9990113 C23,20.2081503 21.209139,21.9990113 19,21.9990113 C17.1367966,21.9990113 15.5711292,20.7251084 15.1264725,19.0007774 L10.8737865,19.0007613 C10.429479,20.7256022 8.86356525,22 7,22 C5.05513052,22 3.43445123,20.6119768 3.07453347,18.7725019 C2.43557576,18.4390399 2,17.770387 2,17 L2,4 C2,3.44771525 2.44771525,3 3,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,12 C11,12.5128358 11.3860402,12.9355072 11.8833789,12.9932723 L12,13 L14,13 C14.5128358,13 14.9355072,12.6139598 14.9932723,12.1166211 L15,12 L15,3 L12,3 L12,1 L16,1 Z M7,16 C5.8954305,16 5,16.8954305 5,18 C5,19.1045695 5.8954305,20 7,20 C8.1045695,20 9,19.1045695 9,18 C9,16.8954305 8.1045695,16 7,16 Z M19,15.9990113 C17.8954305,15.9990113 17,16.8944418 17,17.9990113 C17,19.1035808 17.8954305,19.9990113 19,19.9990113 C20.1045695,19.9990113 21,19.1035808 21,17.9990113 C21,16.8944418 20.1045695,15.9990113 19,15.9990113 Z M17.852,8.999 L17,8.999 L17,12 C17,13.6568542 15.6568542,15 14,15 L12,15 C10.6941178,15 9.58311485,14.1656226 9.17102423,13.0009007 L3.99994303,13 L3.99994303,15.3542402 C4.73288889,14.523782 5.80527652,14 7,14 C8.86392711,14 10.4300871,15.2748927 10.8740452,17.0002597 L15.1256964,17.0002597 C15.5693048,15.2743991 17.135711,13.9990113 19,13.9990113 C19.2372818,13.9990113 19.469738,14.019672 19.6956678,14.0592925 L17.852,8.999 Z M9,8 L4,8 L4,11 L9,11 L9,8 Z M20,5 L17,5 L17,7 L20,7 L20,5 Z M9,5 L4,5 L4,6 L9,6 L9,5 Z"}}]}]})(props);
};
RiTakeawayLine.displayName = "RiTakeawayLine";
var RiTaxiLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.447-4.894A2 2 0 0 1 6.237 5H9V3h6v2h2.764a2 2 0 0 1 1.789 1.106L22 11zm-2 2H4v5h16v-5zM4.236 11h15.528l-2-4H6.236l-2 4zM6.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiTaxiLine.displayName = "RiTaxiLine";
var RiTaxiWifiLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 3v4H6.236l-2.001 4H22v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.447-4.894A2 2 0 0 1 6.237 5H9V3h3zm8 10H4v5h16v-5zM6.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm1-13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.416a1.994 1.994 0 0 0-1.413-.584zm0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165.944.942a3.323 3.323 0 0 1 2.357-.977 3.32 3.32 0 0 1 2.201.83l.156.147.943-.943A4.652 4.652 0 0 0 18.5 3.5z"}}]}]})(props);
};
RiTaxiWifiLine.displayName = "RiTaxiWifiLine";
var RiTrafficLightLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 4V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h3c0 2.5-2.5 3.5-3 3.5V10h3c0 2.5-2.5 3.5-3 3.5V16h3c0 2.5-2.5 3.5-3 3.5V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5c-.5 0-3-1-3-3.5h3v-2.5c-.5 0-3-1-3-3.5h3V7.5c-.5 0-3-1-3-3.5h3zm5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiTrafficLightLine.displayName = "RiTrafficLightLine";
var RiTrainLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2h-1.8zM7 5a2 2 0 0 0-2 2v11h14V7a2 2 0 0 0-2-2H7zm5 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM6 7h12v4H6V7z"}}]}]})(props);
};
RiTrainLine.displayName = "RiTrainLine";
var RiTrainWifiLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.498 3a6.464 6.464 0 0 0-.479 2H7a2 2 0 0 0-1.995 1.85L5 7v11h14v-6.019a6.463 6.463 0 0 0 2-.48V18a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h5.498zM12 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm.174-6a6.51 6.51 0 0 0 2.862 4.001L6 11V7h6.174zM18.5 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.416a1.994 1.994 0 0 0-1.413-.584zm0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165.944.942a3.323 3.323 0 0 1 2.357-.977 3.32 3.32 0 0 1 2.201.83l.156.147.943-.943A4.652 4.652 0 0 0 18.5 3.5z"}}]}]})(props);
};
RiTrainWifiLine.displayName = "RiTrainWifiLine";
var RiTreasureMapLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"}}]}]})(props);
};
RiTreasureMapLine.displayName = "RiTreasureMapLine";
var RiTruckLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95V7zm2 6h4v-.285L18.992 10H17v3zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001zM7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"}}]}]})(props);
};
RiTruckLine.displayName = "RiTruckLine";
var RiWalkLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.617 8.712l3.205-2.328A1.995 1.995 0 0 1 12.065 6a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.402-2.547l-.697 3.955 2.061 1.73 2.223 6.108-1.88.684-2.04-5.604-3.39-2.845a2 2 0 0 1-.713-1.904l.509-2.885-.677.492-2.127 2.928-1.618-1.176L7.6 8.7l.017.012zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-2.972 13.181l-3.214 3.83-1.532-1.285 2.976-3.546.746-2.18 1.791 1.5-.767 1.681z"}}]}]})(props);
};
RiWalkLine.displayName = "RiWalkLine";
var Ri4KLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8.5 10.5h-1V15H9v-1.5H6V9h1.5v3H9V9h1.5v3h1v1.5zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3L18 15z"}}]}]})(props);
};
Ri4KLine.displayName = "Ri4KLine";
var RiAlbumLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"}}]}]})(props);
};
RiAlbumLine.displayName = "RiAlbumLine";
var RiAspectRatioLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zm-7 12v-2h3v-3h2v5h-5zM11 7v2H8v3H6V7h5z"}}]}]})(props);
};
RiAspectRatioLine.displayName = "RiAspectRatioLine";
var RiBroadcastLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.929 2.929l1.414 1.414A7.975 7.975 0 0 0 4 10c0 2.21.895 4.21 2.343 5.657L4.93 17.07A9.969 9.969 0 0 1 2 10a9.969 9.969 0 0 1 2.929-7.071zm14.142 0A9.969 9.969 0 0 1 22 10a9.969 9.969 0 0 1-2.929 7.071l-1.414-1.414A7.975 7.975 0 0 0 20 10c0-2.21-.895-4.21-2.343-5.657L19.07 2.93zM7.757 5.757l1.415 1.415A3.987 3.987 0 0 0 8 10c0 1.105.448 2.105 1.172 2.828l-1.415 1.415A5.981 5.981 0 0 1 6 10c0-1.657.672-3.157 1.757-4.243zm8.486 0A5.981 5.981 0 0 1 18 10a5.981 5.981 0 0 1-1.757 4.243l-1.415-1.415A3.987 3.987 0 0 0 16 10a3.987 3.987 0 0 0-1.172-2.828l1.415-1.415zM12 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-1 2h2v8h-2v-8z"}}]}]})(props);
};
RiBroadcastLine.displayName = "RiBroadcastLine";
var RiCamera2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm5-11h2v2h-2V6z"}}]}]})(props);
};
RiCamera2Line.displayName = "RiCamera2Line";
var RiCamera3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z"}}]}]})(props);
};
RiCamera3Line.displayName = "RiCamera3Line";
var RiCameraLensLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.858 19.71L12 16H5.07a8.018 8.018 0 0 0 4.788 3.71zM4.252 14h4.284L5.07 7.999A7.963 7.963 0 0 0 4 12c0 .69.088 1.36.252 2zm2.143-7.708L8.535 10 12 4a7.974 7.974 0 0 0-5.605 2.292zm7.747-2.002L12 8h6.93a8.018 8.018 0 0 0-4.788-3.71zM19.748 10h-4.284l3.465 6.001A7.963 7.963 0 0 0 20 12c0-.69-.088-1.36-.252-2zm-2.143 7.708L15.465 14 12 20a7.974 7.974 0 0 0 5.605-2.292zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.155-12h-2.31l-1.154 2 1.154 2h2.31l1.154-2-1.154-2z"}}]}]})(props);
};
RiCameraLensLine.displayName = "RiCameraLensLine";
var RiCameraLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}}]}]})(props);
};
RiCameraLine.displayName = "RiCameraLine";
var RiCameraOffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414L19.586 21zm-14-14H4v12h13.586l-2.18-2.18A5.5 5.5 0 0 1 7.68 9.094L5.586 7zm3.524 3.525a3.5 3.5 0 0 0 4.865 4.865L9.11 10.525zM22 17.785l-2-2V7h-3.828l-2-2H9.828l-.307.307-1.414-1.414L9 3h6l2 2h4a1 1 0 0 1 1 1v11.786zM11.263 7.05a5.5 5.5 0 0 1 6.188 6.188l-2.338-2.338a3.515 3.515 0 0 0-1.512-1.512l-2.338-2.338z"}}]}]})(props);
};
RiCameraOffLine.displayName = "RiCameraOffLine";
var RiCameraSwitchLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm.64 4.53a5.5 5.5 0 0 1 6.187 8.92L13.75 12.6h1.749l.001-.1a3.5 3.5 0 0 0-4.928-3.196L9.64 7.53zm4.677 9.96a5.5 5.5 0 0 1-6.18-8.905L10.25 12.5H8.5a3.5 3.5 0 0 0 4.886 3.215l.931 1.774z"}}]}]})(props);
};
RiCameraSwitchLine.displayName = "RiCameraSwitchLine";
var RiClapperboardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.998 7l2.31-4h3.69l-2.31 4h-3.69zm6 0l2.31-4h3.69l-2.31 4h-3.69zm6 0l2.31-4h.7c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h3.006L4 6.46V19h16V7h-2.002z"}}]}]})(props);
};
RiClapperboardLine.displayName = "RiClapperboardLine";
var RiDiscLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 4.582V12a3 3 0 1 1-2-2.83V2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 3-15.418z"}}]}]})(props);
};
RiDiscLine.displayName = "RiDiscLine";
var RiDvLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.608 3H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7v-2h6V5h-6.255A6.968 6.968 0 0 1 15 9a6.992 6.992 0 0 1-3 5.745V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6.255A7 7 0 1 1 11.608 3zM6 13.584V20h4v-6.416a5.001 5.001 0 1 0-4 0zM8 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9-3h2v2h-2V7zM7 17h2v2H7v-2z"}}]}]})(props);
};
RiDvLine.displayName = "RiDvLine";
var RiDvdLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h3l-5 7v-5H8l5-7v5z"}}]}]})(props);
};
RiDvdLine.displayName = "RiDvdLine";
var RiEjectLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.737 13h8.526L12 6.606 7.737 13zm4.679-9.376l7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0zM5 17h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"}}]}]})(props);
};
RiEjectLine.displayName = "RiEjectLine";
var RiEqualizerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17zM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiEqualizerLine.displayName = "RiEqualizerLine";
var RiFilmLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 5v14h8V5H8zM4 5v2h2V5H4zm14 0v2h2V5h-2zM4 9v2h2V9H4zm14 0v2h2V9h-2zM4 13v2h2v-2H4zm14 0v2h2v-2h-2zM4 17v2h2v-2H4zm14 0v2h2v-2h-2z"}}]}]})(props);
};
RiFilmLine.displayName = "RiFilmLine";
var RiFullscreenExitLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"}}]}]})(props);
};
RiFullscreenExitLine.displayName = "RiFullscreenExitLine";
var RiFullscreenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"}}]}]})(props);
};
RiFullscreenLine.displayName = "RiFullscreenLine";
var RiGalleryLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 13c-1.678 0-3.249.46-4.593 1.259A14.984 14.984 0 0 1 18.147 19H20v-6zm-3.996 6C14.044 14.302 9.408 11 4 11v8h12.004zM4 9c3.83 0 7.323 1.435 9.974 3.796A10.949 10.949 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v4zm14-8v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiGalleryLine.displayName = "RiGalleryLine";
var RiGalleryUploadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 1v4H4v14h16V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2zm4 7l4 4h-3v4h-2v-4H8l4-4zm6-7v4h-8V3h6V1h2z"}}]}]})(props);
};
RiGalleryUploadLine.displayName = "RiGalleryUploadLine";
var RiHdLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.5 8.25h2V9H11v6H9.5v-2.25h-2V15H6V9h1.5v2.25zm7-.75v3H16a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-1.5zM13 9h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3V9z"}}]}]})(props);
};
RiHdLine.displayName = "RiHdLine";
var RiHeadphoneLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 4a8 8 0 0 0-8 8h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 0 0-8-8zM4 14v5h3v-5H4zm13 0v5h3v-5h-3z"}}]}]})(props);
};
RiHeadphoneLine.displayName = "RiHeadphoneLine";
var RiHqLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.5 8.25h2V9H11v6H9.5v-2.25h-2V15H6V9h1.5v2.25zM16.25 15v1.5h-1.5V15H14a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.75zm-1.75-4.5v3h2v-3h-2z"}}]}]})(props);
};
RiHqLine.displayName = "RiHqLine";
var RiImage2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zm0 2.829V19h3.1l2.986-2.985L7 11.929l-2 2zM10.929 19H19v-2.071l-3-3L10.929 19zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiImage2Line.displayName = "RiImage2Line";
var RiImageAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"}}]}]})(props);
};
RiImageAddLine.displayName = "RiImageAddLine";
var RiImageLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiImageLine.displayName = "RiImageLine";
var RiLandscapeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.27 12.216L15 6l8 15H2L9 8l2.27 4.216zm1.12 2.022L14.987 19h4.68l-4.77-8.942-2.507 4.18zM5.348 19h7.304L9 12.219 5.348 19zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"}}]}]})(props);
};
RiLandscapeLine.displayName = "RiLandscapeLine";
var RiLiveLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 0 1 .215.062l4.355 2.772a.4.4 0 0 1 0 .674L7.615 15.11A.4.4 0 0 1 7 14.77V9.23c0-.221.18-.4.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z"}}]}]})(props);
};
RiLiveLine.displayName = "RiLiveLine";
var RiMic2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM2.192 13.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.393C20.896 18.545 16.85 22 12 22s-8.896-3.455-9.808-8.038z"}}]}]})(props);
};
RiMic2Line.displayName = "RiMic2Line";
var RiMicLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"}}]}]})(props);
};
RiMicLine.displayName = "RiMicLine";
var RiMicOffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.425 17.839A8.941 8.941 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11H5.07a7.002 7.002 0 0 0 9.87 5.354l-1.551-1.55A5 5 0 0 1 7 10V8.414L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-4.767-4.768zm-7.392-7.392l2.52 2.52a3.002 3.002 0 0 1-2.52-2.52zm10.342 4.713l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16zm-2.91-2.909l-1.548-1.548c.054-.226.083-.46.083-.703V6a3 3 0 0 0-5.818-1.032L7.686 3.471A5 5 0 0 1 17 6v4a4.98 4.98 0 0 1-.534 2.251z"}}]}]})(props);
};
RiMicOffLine.displayName = "RiMicOffLine";
var RiMovie2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiMovie2Line.displayName = "RiMovie2Line";
var RiMovieLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm6.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"}}]}]})(props);
};
RiMovieLine.displayName = "RiMovieLine";
var RiMusic2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 3v14a4 4 0 1 1-2-3.465V5H9v12a4 4 0 1 1-2-3.465V3h13zM5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiMusic2Line.displayName = "RiMusic2Line";
var RiMusicLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 13.535V3h8v2h-6v12a4 4 0 1 1-2-3.465zM10 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiMusicLine.displayName = "RiMusicLine";
var RiMvLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm8 7.17V6h5v2h-3v7a3 3 0 1 1-2-2.83z"}}]}]})(props);
};
RiMvLine.displayName = "RiMvLine";
var RiNotification2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm4.5 3h5a2.5 2.5 0 1 1-5 0z"}}]}]})(props);
};
RiNotification2Line.displayName = "RiNotification2Line";
var RiNotification3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"}}]}]})(props);
};
RiNotification3Line.displayName = "RiNotification3Line";
var RiNotification4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"}}]}]})(props);
};
RiNotification4Line.displayName = "RiNotification4Line";
var RiNotificationLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"}}]}]})(props);
};
RiNotificationLine.displayName = "RiNotificationLine";
var RiNotificationOffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.324-2.584.899-3.687L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414L18.586 20zM6.408 7.822A5.985 5.985 0 0 0 6 10v8h10.586L6.408 7.822zM20 15.786l-2-2V10a6 6 0 0 0-8.99-5.203L7.56 3.345A8 8 0 0 1 20 10v5.786zM9.5 21h5a2.5 2.5 0 1 1-5 0z"}}]}]})(props);
};
RiNotificationOffLine.displayName = "RiNotificationOffLine";
var RiOrderPlayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 4V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H2V4h15zM2 18h20v2H2v-2zm0-7h20v2H2v-2z"}}]}]})(props);
};
RiOrderPlayLine.displayName = "RiOrderPlayLine";
var RiPauseCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 9h2v6H9V9zm4 0h2v6h-2V9z"}}]}]})(props);
};
RiPauseCircleLine.displayName = "RiPauseCircleLine";
var RiPauseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 5h2v14H6V5zm10 0h2v14h-2V5z"}}]}]})(props);
};
RiPauseLine.displayName = "RiPauseLine";
var RiPauseMiniLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7zM7 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7z"}}]}]})(props);
};
RiPauseMiniLine.displayName = "RiPauseMiniLine";
var RiPhoneCameraLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.803 4a5.96 5.96 0 0 0-.72 2H3v12h18v-5.083a5.96 5.96 0 0 0 2-.72V19c0 .553-.44 1.001-1.002 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1h12.8zM20 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-2 2h2v3h-2v-3z"}}]}]})(props);
};
RiPhoneCameraLine.displayName = "RiPhoneCameraLine";
var RiPictureInPicture2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043-2.25-2.25 1.414-1.414z"}}]}]})(props);
};
RiPictureInPicture2Line.displayName = "RiPictureInPicture2Line";
var RiPictureInPictureExitLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4zm-8.5-8L9.457 9.043l2.25 2.25-1.414 1.414-2.25-2.25L6 12.5V7h5.5z"}}]}]})(props);
};
RiPictureInPictureExitLine.displayName = "RiPictureInPictureExitLine";
var RiPictureInPictureLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4z"}}]}]})(props);
};
RiPictureInPictureLine.displayName = "RiPictureInPictureLine";
var RiPlayCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"}}]}]})(props);
};
RiPlayCircleLine.displayName = "RiPlayCircleLine";
var RiPlayLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.394 12L10 7.737v8.526L16.394 12zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"}}]}]})(props);
};
RiPlayLine.displayName = "RiPlayLine";
var RiPlayListAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 18h10v2H2v-2zm0-7h20v2H2v-2zm0-7h20v2H2V4zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"}}]}]})(props);
};
RiPlayListAddLine.displayName = "RiPlayListAddLine";
var RiPlayListLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83zM18 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiPlayListLine.displayName = "RiPlayListLine";
var RiPlayMiniLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M9 8.482v7.036L15.03 12 9 8.482zM7.752 5.44l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.128V5.871a.5.5 0 0 1 .752-.432z"}}]}]})(props);
};
RiPlayMiniLine.displayName = "RiPlayMiniLine";
var RiPolaroid2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 15V5H5v10h14zM3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM6 6h2v2H6V6zm0 11v2h12v-2H6z"}}]}]})(props);
};
RiPolaroid2Line.displayName = "RiPolaroid2Line";
var RiPolaroidLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 6h-2V5H5v14h14v-1h2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2zM6 6h2v3H6V6zm9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiPolaroidLine.displayName = "RiPolaroidLine";
var RiRadio2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6zM4 5v14h16V5H4zm5 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5-6h4v2h-4V9zm0 4h4v2h-4v-2z"}}]}]})(props);
};
RiRadio2Line.displayName = "RiRadio2Line";
var RiRadioLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 10V8h-2v2H5V6h14v4h-2zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6zM4 5v14h16V5H4zm4 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]}]})(props);
};
RiRadioLine.displayName = "RiRadioLine";
var RiRecordCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]}]})(props);
};
RiRecordCircleLine.displayName = "RiRecordCircleLine";
var RiRepeat2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"}}]}]})(props);
};
RiRepeat2Line.displayName = "RiRepeat2Line";
var RiRepeatLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4-5 4v-3z"}}]}]})(props);
};
RiRepeatLine.displayName = "RiRepeatLine";
var RiRepeatOneLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-17.932a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10V2.068zM11 8h2v8h-2v-6H9V9l2-1z"}}]}]})(props);
};
RiRepeatOneLine.displayName = "RiRepeatOneLine";
var RiRewindLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 10.667l9.223-6.149a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L12 13.333v5.733a.5.5 0 0 1-.777.416L.624 12.416a.5.5 0 0 1 0-.832l10.599-7.066a.5.5 0 0 1 .777.416v5.733zm-2 5.596V7.737L3.606 12 10 16.263zm10 0V7.737L13.606 12 20 16.263z"}}]}]})(props);
};
RiRewindLine.displayName = "RiRewindLine";
var RiRewindMiniLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 9.86L5.968 12 9 14.14V9.86zm1.908 7.463a.5.5 0 0 1-.696.12l-7.133-5.035a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.092.288zM18 14.14V9.86L14.968 12 18 14.14zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409l-7.133-5.036z"}}]}]})(props);
};
RiRewindMiniLine.displayName = "RiRewindMiniLine";
var RiRhythmLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 9h2v12H2V9zm6-6h2v18H8V3zm6 9h2v9h-2v-9zm6-6h2v15h-2V6z"}}]}]})(props);
};
RiRhythmLine.displayName = "RiRhythmLine";
var RiShuffleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 17.883V16l5 3-5 3v-2.09a9 9 0 0 1-6.997-5.365L11 14.54l-.003.006A9 9 0 0 1 2.725 20H2v-2h.725a7 7 0 0 0 6.434-4.243L9.912 12l-.753-1.757A7 7 0 0 0 2.725 6H2V4h.725a9 9 0 0 1 8.272 5.455L11 9.46l.003-.006A9 9 0 0 1 18 4.09V2l5 3-5 3V6.117a7 7 0 0 0-5.159 4.126L12.088 12l.753 1.757A7 7 0 0 0 18 17.883z"}}]}]})(props);
};
RiShuffleLine.displayName = "RiShuffleLine";
var RiSkipBackLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 11.333l10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 0 1-2 0V5a1 1 0 1 1 2 0v6.333zm9 4.93V7.737L10.606 12 17 16.263z"}}]}]})(props);
};
RiSkipBackLine.displayName = "RiSkipBackLine";
var RiSkipBackMiniLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 6a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1zm8 8.14V9.86L11.968 12 15 14.14zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409l-7.133-5.036z"}}]}]})(props);
};
RiSkipBackMiniLine.displayName = "RiSkipBackMiniLine";
var RiSkipForwardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16 12.667L5.777 19.482A.5.5 0 0 1 5 19.066V4.934a.5.5 0 0 1 .777-.416L16 11.333V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6.333zm-9-4.93v8.526L13.394 12 7 7.737z"}}]}]})(props);
};
RiSkipForwardLine.displayName = "RiSkipForwardLine";
var RiSkipForwardMiniLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.032 12L9 9.86v4.28L12.032 12zM7.5 17.535a.5.5 0 0 1-.5-.5V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.288.091zM16 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7z"}}]}]})(props);
};
RiSkipForwardMiniLine.displayName = "RiSkipForwardMiniLine";
var RiSoundModuleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 18v3h-2v-3h-2v-2h6v2h-2zM5 18v3H3v-3H1v-2h6v2H5zm6-12V3h2v3h2v2H9V6h2zm0 4h2v11h-2V10zm-8 4V3h2v11H3zm16 0V3h2v11h-2z"}}]}]})(props);
};
RiSoundModuleLine.displayName = "RiSoundModuleLine";
var RiSpeaker2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 5v14h14V5H5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiSpeaker2Line.displayName = "RiSpeaker2Line";
var RiSpeaker3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 5v14h14V5H5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]}]})(props);
};
RiSpeaker3Line.displayName = "RiSpeaker3Line";
var RiSpeakerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 4v16h14V4H5zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiSpeakerLine.displayName = "RiSpeakerLine";
var RiSpeedLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 13.333l-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416v-5.733zM10.394 12L4 7.737v8.526L10.394 12zM14 7.737v8.526L20.394 12 14 7.737z"}}]}]})(props);
};
RiSpeedLine.displayName = "RiSpeedLine";
var RiSpeedMiniLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.032 12L6 9.86v4.28L9.032 12zm-4.244 5.444A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM15 14.14L18.032 12 15 9.86v4.28zm-2-7.175a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.788-.409V6.965z"}}]}]})(props);
};
RiSpeedMiniLine.displayName = "RiSpeedMiniLine";
var RiStopCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 9h6v6H9V9z"}}]}]})(props);
};
RiStopCircleLine.displayName = "RiStopCircleLine";
var RiStopLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 7v10h10V7H7zM6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"}}]}]})(props);
};
RiStopLine.displayName = "RiStopLine";
var RiStopMiniLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 8v8h8V8H8zM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7z"}}]}]})(props);
};
RiStopMiniLine.displayName = "RiStopMiniLine";
var RiSurroundSoundLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.05 4.121l1.414 1.415A4.984 4.984 0 0 0 7 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.978 6.978 0 0 1 5 12.07c0-1.933.784-3.683 2.05-4.95zm9.9 0a6.978 6.978 0 0 1 2.05 4.95 6.978 6.978 0 0 1-2.05 4.95l-1.414-1.414A4.984 4.984 0 0 0 17 12.07c0-1.38-.56-2.63-1.464-3.535L16.95 7.12zM12 13.071a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]}]})(props);
};
RiSurroundSoundLine.displayName = "RiSurroundSoundLine";
var RiTapeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.83 13h2.34A3 3 0 1 1 16 15H8a3 3 0 1 1 2.83-2zM4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiTapeLine.displayName = "RiTapeLine";
var RiVideoLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM5 5v14h14V5H5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"}}]}]})(props);
};
RiVideoLine.displayName = "RiVideoLine";
var RiVidicon2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 6V4H5V2h10v4h1a1 1 0 0 1 1 1v2.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h11zm2 2H3v10h12V8zm2 4.359l4 2.8V8.84l-4 2.8v.718zM5 10h2v2H5v-2z"}}]}]})(props);
};
RiVidicon2Line.displayName = "RiVidicon2Line";
var RiVidiconLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4.2zm0 3.159l4 2.8V8.84l-4 2.8v.718zM3 6v12h12V6H3zm2 2h2v2H5V8z"}}]}]})(props);
};
RiVidiconLine.displayName = "RiVidiconLine";
var RiVoiceprintLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 7h2v10H5V7zm-4 3h2v4H1v-4zm8-8h2v18H9V2zm4 2h2v18h-2V4zm4 3h2v10h-2V7zm4 3h2v4h-2v-4z"}}]}]})(props);
};
RiVoiceprintLine.displayName = "RiVoiceprintLine";
var RiVolumeDownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 7.22L9.603 10H6v4h3.603L13 16.78V7.22zM8.889 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L8.89 16zm9.974.591l-1.422-1.422A3.993 3.993 0 0 0 19 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 21 12c0 1.842-.83 3.49-2.137 4.591z"}}]}]})(props);
};
RiVolumeDownLine.displayName = "RiVolumeDownLine";
var RiVolumeMuteLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 7.22L6.603 10H3v4h3.603L10 16.78V7.22zM5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm14.525-4l3.536 3.536-1.414 1.414L19 13.414l-3.536 3.536-1.414-1.414L17.586 12 14.05 8.464l1.414-1.414L19 10.586l3.536-3.536 1.414 1.414L20.414 12z"}}]}]})(props);
};
RiVolumeMuteLine.displayName = "RiVolumeMuteLine";
var RiVolumeOffVibrateLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.39 3.161l1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.889zM13 19.945a.5.5 0 0 1-.817.387L6.89 15.999 3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1l2.584-.002-3.776-3.776 1.414-1.414L13 12.586v7.359zM7.584 9.998L4 10V14l3.603-.001L11 16.779v-3.365L7.584 9.998zm5.303-6.26a.5.5 0 0 1 .113.317v5.702l-2-2V7.22l-.296.241-1.421-1.42 2.9-2.373a.5.5 0 0 1 .704.07z"}}]}]})(props);
};
RiVolumeOffVibrateLine.displayName = "RiVolumeOffVibrateLine";
var RiVolumeUpLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 7.22L6.603 10H3v4h3.603L10 16.78V7.22zM5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"}}]}]})(props);
};
RiVolumeUpLine.displayName = "RiVolumeUpLine";
var RiVolumeVibrateLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19.39 3.161l1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.889zm-6.503.578a.5.5 0 0 1 .113.316v15.89a.5.5 0 0 1-.817.387L6.89 15.999 3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .704.07zM11 7.22L7.603 9.999H4V14l3.603-.001L11 16.779V7.22z"}}]}]})(props);
};
RiVolumeVibrateLine.displayName = "RiVolumeVibrateLine";
var RiWebcamLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 21v-1.07A7.002 7.002 0 0 1 5 13V8a7 7 0 1 1 14 0v5a7.002 7.002 0 0 1-6 6.93V21h4v2H7v-2h4zm1-18a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]}]})(props);
};
RiWebcamLine.displayName = "RiWebcamLine";
var RiBasketballLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z"}}]}]})(props);
};
RiBasketballLine.displayName = "RiBasketballLine";
var RiBellLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14.121 9.879c4.296 4.295 6.829 8.728 5.657 9.9-.475.474-1.486.34-2.807-.273a9.008 9.008 0 0 1-10.59-.474l-.038.04-1.414-1.415.038-.04A9.006 9.006 0 0 1 4.495 7.03c-.614-1.322-.748-2.333-.273-2.808 1.128-1.128 5.277 1.177 9.417 5.182l.482.475zm-1.414 1.414C10.823 9.409 8.87 7.842 7.236 6.87l-.186.18a7.002 7.002 0 0 0-.657 9.142l1.846-1.846a2 2 0 1 1 1.416 1.415l-1.848 1.846a7.002 7.002 0 0 0 9.143-.657l.179-.188-.053-.089c-.976-1.615-2.52-3.53-4.369-5.38zm7.071-7.071a2 2 0 0 1-.164 2.976 9.015 9.015 0 0 1 .662 8.345 21.168 21.168 0 0 0-1.386-2.306 6.99 6.99 0 0 0-1.94-6.187 6.992 6.992 0 0 0-6.187-1.94 21.092 21.092 0 0 0-2.306-1.386 9.016 9.016 0 0 1 8.347.663 2 2 0 0 1 2.974-.165z"}}]}]})(props);
};
RiBellLine.displayName = "RiBellLine";
var RiBilliardsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 1.75a2.5 2.5 0 0 0-1.88 4.147c-.565.457-.92 1.118-.92 1.853 0 1.38 1.254 2.5 2.8 2.5 1.546 0 2.8-1.12 2.8-2.5 0-.735-.355-1.396-.92-1.852A2.5 2.5 0 0 0 12 7.75zm0 5c.753 0 1.3.488 1.3 1s-.547 1-1.3 1-1.3-.488-1.3-1 .547-1 1.3-1zm0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]}]})(props);
};
RiBilliardsLine.displayName = "RiBilliardsLine";
var RiBoxingLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16.5 2A5.5 5.5 0 0 1 22 7.5V10c0 .888-.386 1.686-1 2.235V17a3.001 3.001 0 0 1-2 2.829V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.17A3.001 3.001 0 0 1 3 17V6a4 4 0 0 1 4-4h9.5zm-7 9H5v6a1 1 0 0 0 .883.993L6 18h12a1 1 0 0 0 .993-.883L19 17v-4h-6.036A3.5 3.5 0 0 1 9.5 16H6v-2h3.5a1.5 1.5 0 0 0 1.493-1.356L11 12.5a1.5 1.5 0 0 0-1.356-1.493L9.5 11zm7-7H7a2 2 0 0 0-1.995 1.85L5 6v3h4.5a3.5 3.5 0 0 1 3.163 2H19a1 1 0 0 0 .993-.883L20 10V7.5a3.5 3.5 0 0 0-3.308-3.495L16.5 4z"}}]}]})(props);
};
RiBoxingLine.displayName = "RiBoxingLine";
var RiCake2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 0 1 2.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.36a4.025 4.025 0 0 1-.972-2.182l-.022-.253L2 14v-1a3 3 0 0 1 2.824-2.995L5 10l1-.001V6h2zm1.002 10.641l-.054.063a3.994 3.994 0 0 1-2.514 1.273l-.23.018L6 18c-.345 0-.68-.044-1-.126V20h14v-2.126a4.007 4.007 0 0 1-3.744-.963l-.15-.15-.106-.117-.107.118a3.99 3.99 0 0 1-2.451 1.214l-.242.02L12 18a3.977 3.977 0 0 1-2.797-1.144l-.15-.157-.051-.058zM19 12H5a1 1 0 0 0-.993.883L4 13v.971l.003.147A2 2 0 0 0 6 16a1.999 1.999 0 0 0 1.98-1.7l.015-.153.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134.004.147a2 2 0 0 0 3.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.012.282a2 2 0 0 0 3.99 0L20 14v-1a1 1 0 0 0-.883-.993L19 12zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 0 1-2.898-.776C5.85 2.002 7 2.5 7 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C10.85 2.002 12 2.5 12 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C15.85 2.002 17 2.5 17 1z"}}]}]})(props);
};
RiCake2Line.displayName = "RiCake2Line";
var RiCake3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.5 2a3.5 3.5 0 0 1 3.437 4.163l-.015.066a4.502 4.502 0 0 1 .303 8.428l-1.086 6.507a1 1 0 0 1-.986.836H6.847a1 1 0 0 1-.986-.836l-1.029-6.17a3 3 0 0 1-.829-5.824L4 9a6 6 0 0 1 8.574-5.421A3.496 3.496 0 0 1 15.5 2zM9 15H6.86l.834 5H9v-5zm4 0h-2v5h2v-5zm4.139 0H15v5h1.305l.834-5zM10 5C7.858 5 6.109 6.684 6.005 8.767L6 8.964l.003.17a2 2 0 0 1-1.186 1.863l-.15.059A1.001 1.001 0 0 0 5 13h12.5a2.5 2.5 0 1 0-.956-4.81l-.175.081a2 2 0 0 1-2.663-.804l-.07-.137A4 4 0 0 0 10 5zm5.5-1a1.5 1.5 0 0 0-1.287.729 6.006 6.006 0 0 1 1.24 1.764c.444-.228.93-.384 1.446-.453A1.5 1.5 0 0 0 15.5 4z"}}]}]})(props);
};
RiCake3Line.displayName = "RiCake3Line";
var RiCakeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7h2zm6 6H5v7h14v-7zM13.83.402A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098l1.732-1z"}}]}]})(props);
};
RiCakeLine.displayName = "RiCakeLine";
var RiCharacterRecognitionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"}}]}]})(props);
};
RiCharacterRecognitionLine.displayName = "RiCharacterRecognitionLine";
var RiDoorLockBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 7.792a2.5 2.5 0 1 1 2 0V16h-2v-3.208z"}}]}]})(props);
};
RiDoorLockBoxLine.displayName = "RiDoorLockBoxLine";
var RiDoorLockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.208a2.5 2.5 0 1 1 2 0V16h-2v-3.208z"}}]}]})(props);
};
RiDoorLockLine.displayName = "RiDoorLockLine";
var RiFireLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z"}}]}]})(props);
};
RiFireLine.displayName = "RiFireLine";
var RiFlaskLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16 2v2h-1v3.243a8 8 0 0 0 .736 3.352l4.282 9.276A1.5 1.5 0 0 1 18.656 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.282-9.276A8 8 0 0 0 9 7.243V4H8V2h8zm-2.612 8.001h-2.776a10 10 0 0 1-.374 1.071l-.158.361L6.125 20h11.749l-3.954-8.567a10 10 0 0 1-.532-1.432zM11 7.243a10 10 0 0 1-.029.758h2.058a10 10 0 0 1-.021-.364L13 7.243V4h-2v3.243z"}}]}]})(props);
};
RiFlaskLine.displayName = "RiFlaskLine";
var RiFootballLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.67 14h-3.34l-1.38 1.897.554 1.706A7.993 7.993 0 0 0 12 20c.871 0 1.71-.14 2.496-.397l.553-1.706L13.669 16zm-8.376-5.128l-1.292.937L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82-1.028-3.17-2.393-.778zm13.412 0l-2.393.778-1.028 3.17 1.322 1.82h1.91A7.964 7.964 0 0 0 20 12l-.003-.19-1.291-.938zM12 9.536l-2.344 1.702.896 2.762h2.895l.896-2.762L12 9.536zm2.291-5.203L13 5.273V7.79l2.694 1.957 2.239-.727.554-1.703a8.014 8.014 0 0 0-4.196-2.984zm-4.583 0a8.014 8.014 0 0 0-4.195 2.985l.554 1.702 2.239.727L11 7.79V5.273l-1.292-.94z"}}]}]})(props);
};
RiFootballLine.displayName = "RiFootballLine";
var RiGameLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 2a8 8 0 1 0 4.697 14.477l.208-.157-6.32-6.32 6.32-6.321-.208-.156a7.964 7.964 0 0 0-4.394-1.517L12 4zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"}}]}]})(props);
};
RiGameLine.displayName = "RiGameLine";
var RiHandbagLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7zm7.147 9H4.852l-.693 9H19.84l-.693-9zM14 13v2h-4v-2h4zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995L12 4z"}}]}]})(props);
};
RiHandbagLine.displayName = "RiHandbagLine";
var RiHeartsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10.817 4.454l.183.175a6 6 0 0 1 10.01 5.898 3.5 3.5 0 0 1 1.292 5.77L17.001 21.6l-3-3-3 3-8.485-8.485a6 6 0 0 1 8.302-8.661zm1.757 1.439l-.16.15L11.03 7.43 9.454 5.918l-.157-.137a4.001 4.001 0 0 0-5.208.11l-.16.153a4 4 0 0 0-.151 5.497l.15.16L11 18.77l1.585-1.586-.888-.888a3.5 3.5 0 1 1 4.95-4.95L17 11.7l.354-.353c.45-.45.994-.753 1.568-.906a4 4 0 0 0-.7-4.238l-.15-.16a4 4 0 0 0-5.498-.15zm.537 6.868a1.5 1.5 0 0 0-.103 2.008l.103.113 3.888 3.889 3.89-3.889a1.5 1.5 0 0 0 .103-2.007l-.103-.114a1.5 1.5 0 0 0-2.01-.101l-.113.103-1.768 1.763-1.766-1.765a1.5 1.5 0 0 0-2.121 0z"}}]}]})(props);
};
RiHeartsLine.displayName = "RiHeartsLine";
var RiKey2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708zm-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z"}}]}]})(props);
};
RiKey2Line.displayName = "RiKey2Line";
var RiKeyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12.917 13A6.002 6.002 0 0 1 1 12a6 6 0 0 1 11.917-1H23v2h-2v4h-2v-4h-2v4h-2v-4h-2.083zM7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}}]}]})(props);
};
RiKeyLine.displayName = "RiKeyLine";
var RiKnifeBloodLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M4.342 1.408L22.373 19.44a1.5 1.5 0 0 1-2.121 2.122l-4.596-4.597L12.12 20.5 8 16.38V19a1 1 0 0 1-2 0v-4a1 1 0 0 0-1.993-.117L4 15v1a1 1 0 0 1-2 0V7.214a7.976 7.976 0 0 1 2.168-5.627l.174-.179zm.241 3.07l-.051.11a5.993 5.993 0 0 0-.522 2.103L4 7l-.001.12a5.984 5.984 0 0 0 1.58 4.003l.177.185 6.363 6.363 2.829-2.828L4.583 4.478z"}}]}]})(props);
};
RiKnifeBloodLine.displayName = "RiKnifeBloodLine";
var RiKnifeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M4.342 1.408L22.373 19.44a1.5 1.5 0 0 1-2.121 2.122l-4.596-4.597L12.12 20.5l-7.778-7.778a8 8 0 0 1-.174-11.135l.174-.179zm.241 3.07l-.051.11a6.005 6.005 0 0 0 1.047 6.535l.177.185 6.363 6.363 2.829-2.828L4.583 4.478z"}}]}]})(props);
};
RiKnifeLine.displayName = "RiKnifeLine";
var RiLightbulbFlashLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.973 18h4.054c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM14 20h-4v1h4v-1zm-8.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15zM13 10.004h2.5l-4.5 6v-4H8.5L13 6v4.005z"}}]}]})(props);
};
RiLightbulbFlashLine.displayName = "RiLightbulbFlashLine";
var RiLightbulbLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15z"}}]}]})(props);
};
RiLightbulbLine.displayName = "RiLightbulbLine";
var RiOutlet2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v4h-2V7zm3 5h2v4h-2v-4zm-6 0h2v4H8v-4z"}}]}]})(props);
};
RiOutlet2Line.displayName = "RiOutlet2Line";
var RiOutletLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm2-10h2v4h-2v-4zm-6 0h2v4H8v-4z"}}]}]})(props);
};
RiOutletLine.displayName = "RiOutletLine";
var RiPingPongLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11.5 2a9.5 9.5 0 0 1 9.5 9.5 9.46 9.46 0 0 1-1.003 4.254l2.463 2.464a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.414 0l-2.464-2.463A9.46 9.46 0 0 1 11.5 21a9.5 9.5 0 0 1 0-19zm5.303 13.388l-1.414 1.414 3.536 3.535 1.414-1.414-3.536-3.535zm1.864-6.105l-9.384 9.384c.7.216 1.445.333 2.217.333a7.48 7.48 0 0 0 2.74-.516l-.972-.974a1 1 0 0 1 0-1.414l2.828-2.828a1 1 0 0 1 1.414 0l.974.972A7.48 7.48 0 0 0 19 11.5c0-.772-.117-1.516-.333-2.217zM11.5 4a7.5 7.5 0 0 0-4.136 13.757L17.757 7.364A7.493 7.493 0 0 0 11.5 4z"}}]}]})(props);
};
RiPingPongLine.displayName = "RiPingPongLine";
var RiPlug2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h2V2h2v4h6V2h2v4h2a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4h-3zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2zm10-8H6v1h12V8zm-6 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM11 2h2v3h-2V2z"}}]}]})(props);
};
RiPlug2Line.displayName = "RiPlug2Line";
var RiPlugLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h3V2h2v4h4V2h2v4h3a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4h-3zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2zm10-8H6v1h12V8zm-6 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]}]})(props);
};
RiPlugLine.displayName = "RiPlugLine";
var RiReservedLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-7zm-8-2h14V5H5v8zm3-5h8v2H8V8z"}}]}]})(props);
};
RiReservedLine.displayName = "RiReservedLine";
var RiShirtLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 20h6v-4h-4v-2h4V6h-2v5l-4-1.6V20zm-2 0V9.4L7 11V6H5v14h6zM7 4V3h10v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm5 4l3.5-3h-7L12 8z"}}]}]})(props);
};
RiShirtLine.displayName = "RiShirtLine";
var RiSwordLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17.457 3L21 3.003l.002 3.523-5.467 5.466 2.828 2.829 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415-2.829-2.828-2.828 2.828 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 2.827-2.828-5.46-5.46L3 3l3.546.003 5.453 5.454L17.457 3zm-7.58 10.406L7.05 16.234l.708.707 2.827-2.828-.707-.707zm9.124-8.405h-.717l-4.87 4.869.706.707 4.881-4.879v-.697zm-14 0v.7l11.241 11.241.707-.707L5.716 5.002l-.715-.001z"}}]}]})(props);
};
RiSwordLine.displayName = "RiSwordLine";
var RiTShirt2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M9 3a3 3 0 0 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.001L19 20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1l-.001-8.001L3 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm11 1.999h-3.417l-.017.041a5.002 5.002 0 0 1-4.35 2.955L12 8a5.001 5.001 0 0 1-4.566-2.96L7.416 5H4v5l2.999-.001V19H17l-.001-9L20 9.999v-5z"}}]}]})(props);
};
RiTShirt2Line.displayName = "RiTShirt2Line";
var RiTShirtAirLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12.707 17.793C13.534 18.62 14.295 19 15 19c.378 0 .68-.067 1.237-.276l.392-.152C17.679 18.15 18.209 18 19 18c1.214 0 2.379.545 3.486 1.58l.221.213-1.414 1.414C20.466 20.38 19.705 20 19 20c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572-1.214 0-2.379-.545-3.486-1.58l-.221-.213 1.414-1.414zM9 3a3 3 0 0 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4.002v-2L20 9.999v-5h-3.417l-.017.041a5.002 5.002 0 0 1-4.35 2.955L12 8a5.001 5.001 0 0 1-4.566-2.96L7.416 5H4v5l2.999-.001V19H10v2H6a1 1 0 0 1-1-1l-.001-8.001L3 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm3.707 10.793C13.534 14.62 14.295 15 15 15c.378 0 .68-.067 1.237-.276l.392-.152C17.679 14.15 18.209 14 19 14c1.214 0 2.379.545 3.486 1.58l.221.213-1.414 1.414C20.466 16.38 19.705 16 19 16c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572-1.214 0-2.379-.545-3.486-1.58l-.221-.213 1.414-1.414z"}}]}]})(props);
};
RiTShirtAirLine.displayName = "RiTShirtAirLine";
var RiTShirtLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14.515 5l2.606-2.607a1 1 0 0 1 1.415 0l4.242 4.243a1 1 0 0 1 0 1.414L19 11.828V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9.172L1.222 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.415 0L9.485 5h5.03zm.828 2H8.657L6.172 4.515 3.343 7.343 7 11v9h10v-9l3.657-3.657-2.829-2.828L15.343 7z"}}]}]})(props);
};
RiTShirtLine.displayName = "RiTShirtLine";
var RiUmbrellaLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 1 0 4 0v-1h2v1a4 4 0 1 1-8 0v-6H2v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 0 1 2 0v.05zM19.938 11a8.001 8.001 0 0 0-15.876 0h15.876z"}}]}]})(props);
};
RiUmbrellaLine.displayName = "RiUmbrellaLine";
var RiVoiceRecognitionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8-9v12h-2V6h2zM9 9v6H7V9h2zm8 0v6h-2V9h2zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"}}]}]})(props);
};
RiVoiceRecognitionLine.displayName = "RiVoiceRecognitionLine";
var RiAddBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"}}]}]})(props);
};
RiAddBoxLine.displayName = "RiAddBoxLine";
var RiAddCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"}}]}]})(props);
};
RiAddCircleLine.displayName = "RiAddCircleLine";
var RiAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"}}]}]})(props);
};
RiAddLine.displayName = "RiAddLine";
var RiAlarmLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm1-7h3v2h-5V8h2v5zM1.747 6.282l3.535-3.535 1.415 1.414L3.16 7.697 1.747 6.282zm16.97-3.535l3.536 3.535-1.414 1.415-3.536-3.536 1.415-1.414z"}}]}]})(props);
};
RiAlarmLine.displayName = "RiAlarmLine";
var RiAlarmWarningLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2h1zm2 0h12v-6a6 6 0 1 0-12 0v6zm5-18h2v3h-2V2zm8.778 2.808l1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222zM7 14a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3H7z"}}]}]})(props);
};
RiAlarmWarningLine.displayName = "RiAlarmWarningLine";
var RiAlertLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"}}]}]})(props);
};
RiAlertLine.displayName = "RiAlertLine";
var RiApps2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.5 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zM6.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm10-10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}}]}]})(props);
};
RiApps2Line.displayName = "RiApps2Line";
var RiAppsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zM9 9V6.75A2.25 2.25 0 1 0 6.75 9H9zm-2.25 4H11v4.25A4.25 4.25 0 1 1 6.75 13zm0 2A2.25 2.25 0 1 0 9 17.25V15H6.75zm10.5-12.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zm0 6.5A2.25 2.25 0 1 0 15 6.75V9h2.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13zm2 2v2.25A2.25 2.25 0 1 0 17.25 15H15z"}}]}]})(props);
};
RiAppsLine.displayName = "RiAppsLine";
var RiArrowDownCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8h3l-4 4-4-4h3V8h2v4z"}}]}]})(props);
};
RiArrowDownCircleLine.displayName = "RiArrowDownCircleLine";
var RiArrowDownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"}}]}]})(props);
};
RiArrowDownLine.displayName = "RiArrowDownLine";
var RiArrowDownSLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"}}]}]})(props);
};
RiArrowDownSLine.displayName = "RiArrowDownSLine";
var RiArrowDropDownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"}}]}]})(props);
};
RiArrowDropDownLine.displayName = "RiArrowDropDownLine";
var RiArrowDropLeftLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"}}]}]})(props);
};
RiArrowDropLeftLine.displayName = "RiArrowDropLeftLine";
var RiArrowDropRightLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"}}]}]})(props);
};
RiArrowDropRightLine.displayName = "RiArrowDropRightLine";
var RiArrowDropUpLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"}}]}]})(props);
};
RiArrowDropUpLine.displayName = "RiArrowDropUpLine";
var RiArrowGoBackLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"}}]}]})(props);
};
RiArrowGoBackLine.displayName = "RiArrowGoBackLine";
var RiArrowGoForwardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.172 7H11a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h7.172l-2.536-2.536L17.05 1.05 22 6l-4.95 4.95-1.414-1.414L18.172 7z"}}]}]})(props);
};
RiArrowGoForwardLine.displayName = "RiArrowGoForwardLine";
var RiArrowLeftCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-9h4v2h-4v3l-4-4 4-4v3z"}}]}]})(props);
};
RiArrowLeftCircleLine.displayName = "RiArrowLeftCircleLine";
var RiArrowLeftDownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 13.59l8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z"}}]}]})(props);
};
RiArrowLeftDownLine.displayName = "RiArrowLeftDownLine";
var RiArrowLeftLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"}}]}]})(props);
};
RiArrowLeftLine.displayName = "RiArrowLeftLine";
var RiArrowLeftRightLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"}}]}]})(props);
};
RiArrowLeftRightLine.displayName = "RiArrowLeftRightLine";
var RiArrowLeftSLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}}]}]})(props);
};
RiArrowLeftSLine.displayName = "RiArrowLeftSLine";
var RiArrowLeftUpLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.414 8l8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2z"}}]}]})(props);
};
RiArrowLeftUpLine.displayName = "RiArrowLeftUpLine";
var RiArrowRightCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 11V8l4 4-4 4v-3H8v-2h4zm0-9c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8z"}}]}]})(props);
};
RiArrowRightCircleLine.displayName = "RiArrowRightCircleLine";
var RiArrowRightDownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.59 16.004L5.982 7.397l1.414-1.414 8.607 8.606V7.004h2v11h-11v-2z"}}]}]})(props);
};
RiArrowRightDownLine.displayName = "RiArrowRightDownLine";
var RiArrowRightLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"}}]}]})(props);
};
RiArrowRightLine.displayName = "RiArrowRightLine";
var RiArrowRightSLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"}}]}]})(props);
};
RiArrowRightSLine.displayName = "RiArrowRightSLine";
var RiArrowRightUpLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"}}]}]})(props);
};
RiArrowRightUpLine.displayName = "RiArrowRightUpLine";
var RiArrowUpCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8v4h-2v-4H8l4-4 4 4h-3z"}}]}]})(props);
};
RiArrowUpCircleLine.displayName = "RiArrowUpCircleLine";
var RiArrowUpDownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z"}}]}]})(props);
};
RiArrowUpDownLine.displayName = "RiArrowUpDownLine";
var RiArrowUpLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"}}]}]})(props);
};
RiArrowUpLine.displayName = "RiArrowUpLine";
var RiArrowUpSLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"}}]}]})(props);
};
RiArrowUpSLine.displayName = "RiArrowUpSLine";
var RiBarcodeBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 4h3v10H6V7zm4 0h2v10h-2V7zm3 0h1v10h-1V7zm2 0h3v10h-3V7z"}}]}]})(props);
};
RiBarcodeBoxLine.displayName = "RiBarcodeBoxLine";
var RiBarcodeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 4h2v16H2V4zm4 0h1v16H6V4zm2 0h2v16H8V4zm3 0h2v16h-2V4zm3 0h2v16h-2V4zm3 0h1v16h-1V4zm2 0h3v16h-3V4z"}}]}]})(props);
};
RiBarcodeLine.displayName = "RiBarcodeLine";
var RiBaseStationLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 13l6 9H6l6-9zm0 3.6L9.74 20h4.52L12 16.6zm-1.06-6.04a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12zM5.281 2.783l1.415 1.415a7.5 7.5 0 0 0 0 10.606l-1.415 1.415a9.5 9.5 0 0 1 0-13.436zm13.436 0a9.5 9.5 0 0 1 0 13.436l-1.415-1.415a7.5 7.5 0 0 0 0-10.606l1.415-1.415zM8.11 5.611l1.414 1.414a3.5 3.5 0 0 0 0 4.95l-1.414 1.414a5.5 5.5 0 0 1 0-7.778zm7.778 0a5.5 5.5 0 0 1 0 7.778l-1.414-1.414a3.5 3.5 0 0 0 0-4.95l1.414-1.414z"}}]}]})(props);
};
RiBaseStationLine.displayName = "RiBaseStationLine";
var RiBluetoothConnectLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.341 12.03l4.343 4.343-5.656 5.656h-2v-6.686l-4.364 4.364-1.415-1.414 5.779-5.778v-.97L5.249 5.765l1.415-1.414 4.364 4.364V2.029h2l5.656 5.657-4.343 4.343zm-1.313 1.514v5.657l2.828-2.828-2.828-2.829zm0-3.03l2.828-2.828-2.828-2.828v5.657zM19.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-13 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiBluetoothConnectLine.displayName = "RiBluetoothConnectLine";
var RiBluetoothLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.341 12.03l4.343 4.343-5.656 5.656h-2v-6.686l-4.364 4.364-1.415-1.414 5.779-5.778v-.97L5.249 5.765l1.415-1.414 4.364 4.364V2.029h2l5.656 5.657-4.343 4.343zm-1.313 1.514v5.657l2.828-2.828-2.828-2.829zm0-3.03l2.828-2.828-2.828-2.828v5.657z"}}]}]})(props);
};
RiBluetoothLine.displayName = "RiBluetoothLine";
var RiCheckDoubleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11.602 13.76l1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88-6.364-6.364 1.414-1.414 2.125 2.125 1.413 1.412zm.002-2.828l4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951z"}}]}]})(props);
};
RiCheckDoubleLine.displayName = "RiCheckDoubleLine";
var RiCheckLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"}}]}]})(props);
};
RiCheckLine.displayName = "RiCheckLine";
var RiCheckboxBlankCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"}}]}]})(props);
};
RiCheckboxBlankCircleLine.displayName = "RiCheckboxBlankCircleLine";
var RiCheckboxBlankLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5z"}}]}]})(props);
};
RiCheckboxBlankLine.displayName = "RiCheckboxBlankLine";
var RiCheckboxCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"}}]}]})(props);
};
RiCheckboxCircleLine.displayName = "RiCheckboxCircleLine";
var RiCheckboxIndeterminateLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 6h10v2H7v-2z"}}]}]})(props);
};
RiCheckboxIndeterminateLine.displayName = "RiCheckboxIndeterminateLine";
var RiCheckboxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6.003 11L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"}}]}]})(props);
};
RiCheckboxLine.displayName = "RiCheckboxLine";
var RiCheckboxMultipleBlankLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"}}]}]})(props);
};
RiCheckboxMultipleBlankLine.displayName = "RiCheckboxMultipleBlankLine";
var RiCheckboxMultipleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zm6 2H4.003L4 20h11V9zm-6.497 9l-3.536-3.536 1.414-1.414 2.122 2.122 4.242-4.243 1.414 1.414L8.503 18z"}}]}]})(props);
};
RiCheckboxMultipleLine.displayName = "RiCheckboxMultipleLine";
var RiCloseCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"}}]}]})(props);
};
RiCloseCircleLine.displayName = "RiCloseCircleLine";
var RiCloseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"}}]}]})(props);
};
RiCloseLine.displayName = "RiCloseLine";
var RiDashboardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"}}]}]})(props);
};
RiDashboardLine.displayName = "RiDashboardLine";
var RiDeleteBack2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zm.535 2l-4.666 7 4.666 7H20V5H7.07zM13 10.586l2.828-2.829 1.415 1.415L14.414 12l2.829 2.828-1.415 1.415L13 13.414l-2.828 2.829-1.415-1.415L11.586 12 8.757 9.172l1.415-1.415L13 10.586z"}}]}]})(props);
};
RiDeleteBack2Line.displayName = "RiDeleteBack2Line";
var RiDeleteBackLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zm.535 2l-4.666 7 4.666 7H20V5H7.07zM16 11v2H9v-2h7z"}}]}]})(props);
};
RiDeleteBackLine.displayName = "RiDeleteBackLine";
var RiDeleteBin2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"}}]}]})(props);
};
RiDeleteBin2Line.displayName = "RiDeleteBin2Line";
var RiDeleteBin3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7H2V5h20v2h-2zM6 7v13h12V7H6zm5 2h2v2h-2V9zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2zM7 2h10v2H7V2z"}}]}]})(props);
};
RiDeleteBin3Line.displayName = "RiDeleteBin3Line";
var RiDeleteBin4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zM6 7v13h12V7H6zm1-5h10v2H7V2zm4 8h2v7h-2v-7z"}}]}]})(props);
};
RiDeleteBin4Line.displayName = "RiDeleteBin4Line";
var RiDeleteBin5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"}}]}]})(props);
};
RiDeleteBin5Line.displayName = "RiDeleteBin5Line";
var RiDeleteBin6Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"}}]}]})(props);
};
RiDeleteBin6Line.displayName = "RiDeleteBin6Line";
var RiDeleteBin7Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z"}}]}]})(props);
};
RiDeleteBin7Line.displayName = "RiDeleteBin7Line";
var RiDeleteBinLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"}}]}]})(props);
};
RiDeleteBinLine.displayName = "RiDeleteBinLine";
var RiDivideLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 11h14v2H5v-2zm7-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiDivideLine.displayName = "RiDivideLine";
var RiDownload2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 10h5l-6 6-6-6h5V3h2v7zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7z"}}]}]})(props);
};
RiDownload2Line.displayName = "RiDownload2Line";
var RiDownloadCloud2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 13v5.585l1.828-1.828 1.415 1.415L12 22.414l-4.243-4.242 1.415-1.415L11 18.585V13h2zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z"}}]}]})(props);
};
RiDownloadCloud2Line.displayName = "RiDownloadCloud2Line";
var RiDownloadCloudLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"}}]}]})(props);
};
RiDownloadCloudLine.displayName = "RiDownloadCloudLine";
var RiDownloadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"}}]}]})(props);
};
RiDownloadLine.displayName = "RiDownloadLine";
var RiErrorWarningLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"}}]}]})(props);
};
RiErrorWarningLine.displayName = "RiErrorWarningLine";
var RiExternalLinkLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"}}]}]})(props);
};
RiExternalLinkLine.displayName = "RiExternalLinkLine";
var RiEye2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a5 5 0 1 1-4.78 3.527A2.499 2.499 0 0 0 12 9.5a2.5 2.5 0 0 0-1.473-2.28c.466-.143.96-.22 1.473-.22z"}}]}]})(props);
};
RiEye2Line.displayName = "RiEye2Line";
var RiEyeCloseLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.342 18.782l-1.931-.518.787-2.939a10.988 10.988 0 0 1-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 0 1-2.371-5.07l1.968-.359C3.903 10.812 7.579 14 12 14c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.957 10.957 0 0 1-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.072 11.072 0 0 1-3.74 0l-.788 2.94z"}}]}]})(props);
};
RiEyeCloseLine.displayName = "RiEyeCloseLine";
var RiEyeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}}]}]})(props);
};
RiEyeLine.displayName = "RiEyeLine";
var RiEyeOffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z"}}]}]})(props);
};
RiEyeOffLine.displayName = "RiEyeOffLine";
var RiFilter2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5L12 13.394 17.596 5H6.404z"}}]}]})(props);
};
RiFilter2Line.displayName = "RiFilter2Line";
var RiFilter3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}}]}]})(props);
};
RiFilter3Line.displayName = "RiFilter3Line";
var RiFilterLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M9 13.5L4 6H3V4h18v2h-1l-5 7.5V22H9v-8.5zM6.404 6L11 12.894V20h2v-7.106L17.596 6H6.404z"}}]}]})(props);
};
RiFilterLine.displayName = "RiFilterLine";
var RiFindReplaceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.033 16.618l4.28 4.281-1.414 1.415-4.28-4.281A8.963 8.963 0 0 1 11 20a8.998 8.998 0 0 1-8.065-5H9l-1.304 2.173A6.972 6.972 0 0 0 11 18a6.977 6.977 0 0 0 4.875-1.975l.15-.15A6.977 6.977 0 0 0 18 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.963 8.963 0 0 1-1.967 5.618zM19.065 7H13l1.304-2.173A6.972 6.972 0 0 0 11 4c-3.868 0-7 3.132-7 7 0 .695.101 1.366.29 2H2.223A9.038 9.038 0 0 1 2 11c0-4.973 4.027-9 9-9a8.998 8.998 0 0 1 8.065 5z"}}]}]})(props);
};
RiFindReplaceLine.displayName = "RiFindReplaceLine";
var RiFingerprint2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 1a9 9 0 0 1 9 9v4a9 9 0 0 1-12.092 8.455c.128-.177.251-.357.369-.542l.17-.28a10.918 10.918 0 0 0 1.55-5.345L11 16V9h2v7a12.96 12.96 0 0 1-.997 5.001 7.026 7.026 0 0 0 2.27-.378c.442-1.361.693-2.808.724-4.31L15 16v-3.001h2V16c0 1.088-.102 2.153-.298 3.185a6.978 6.978 0 0 0 2.294-4.944L19 14v-4A7 7 0 0 0 7.808 4.394L6.383 2.968A8.962 8.962 0 0 1 12 1zm-5 9a5 5 0 1 1 10 0v1h-2v-1a3 3 0 0 0-5.995-.176L9 10v6c0 1.567-.4 3.04-1.104 4.323l-.024.04c-.23.414-.491.808-.782 1.179a9.03 9.03 0 0 1-1.237-.97l-.309-.3A8.97 8.97 0 0 1 3 14v-4c0-2.125.736-4.078 1.968-5.617l1.426 1.425a6.966 6.966 0 0 0-1.39 3.951L5 10v4c0 1.675.588 3.212 1.57 4.417a6.91 6.91 0 0 0 .426-2.176L7 16v-6z"}}]}]})(props);
};
RiFingerprint2Line.displayName = "RiFingerprint2Line";
var RiFingerprintLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 13v1c0 2.77-.664 5.445-1.915 7.846l-.227.42-1.747-.974c1.16-2.08 1.81-4.41 1.882-6.836L15 14v-1h2zm-6-3h2v4l-.005.379a12.941 12.941 0 0 1-2.691 7.549l-.231.29-1.55-1.264a10.944 10.944 0 0 0 2.471-6.588L11 14v-4zm1-4a5 5 0 0 1 5 5h-2a3 3 0 0 0-6 0v3c0 2.235-.82 4.344-2.271 5.977l-.212.23-1.448-1.38a6.969 6.969 0 0 0 1.925-4.524L7 14v-3a5 5 0 0 1 5-5zm0-4a9 9 0 0 1 9 9v3c0 1.698-.202 3.37-.597 4.99l-.139.539-1.93-.526c.392-1.437.613-2.922.658-4.435L19 14v-3A7 7 0 0 0 7.808 5.394L6.383 3.968A8.962 8.962 0 0 1 12 2zM4.968 5.383l1.426 1.425a6.966 6.966 0 0 0-1.39 3.951L5 11 5.004 13c0 1.12-.264 2.203-.762 3.177l-.156.29-1.737-.992c.38-.665.602-1.407.646-2.183L3.004 13v-2a8.94 8.94 0 0 1 1.964-5.617z"}}]}]})(props);
};
RiFingerprintLine.displayName = "RiFingerprintLine";
var RiForbid2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.891-11.477l-8.368 8.368a6.04 6.04 0 0 1-1.414-1.414l8.368-8.368a6.04 6.04 0 0 1 1.414 1.414z"}}]}]})(props);
};
RiForbid2Line.displayName = "RiForbid2Line";
var RiForbidLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM8.523 7.109l8.368 8.368a6.04 6.04 0 0 1-1.414 1.414L7.109 8.523A6.04 6.04 0 0 1 8.523 7.11z"}}]}]})(props);
};
RiForbidLine.displayName = "RiForbidLine";
var RiFunctionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8zm2-8v4h4V5h-4zm0 10v4h4v-4h-4zM5 5v4h4V5H5zm0 10v4h4v-4H5z"}}]}]})(props);
};
RiFunctionLine.displayName = "RiFunctionLine";
var RiGpsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.132 20.737A9.997 9.997 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.997 9.997 0 0 1-5.132 8.737l-.896-1.791a8 8 0 1 0-7.945 0l-.895 1.791zm1.792-3.584a6 6 0 1 1 6.151 0l-.898-1.797a4 4 0 1 0-4.354 0l-.899 1.797zM12 16l3 6H9l3-6z"}}]}]})(props);
};
RiGpsLine.displayName = "RiGpsLine";
var RiHeart2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0 1 12 3.64a6.5 6.5 0 0 1 9.179 9.154zM4.575 5.383a4.5 4.5 0 0 0 0 6.364L12 19.172l7.425-7.425a4.5 4.5 0 0 0-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 0 0-5.99.334z"}}]}]})(props);
};
RiHeart2Line.displayName = "RiHeart2Line";
var RiHeartAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M20.839 3.969a6.5 6.5 0 0 1 .34 8.826l.013.013-.354.353-1.414-1.415.121-.12.116-.134a4.5 4.5 0 0 0-.075-5.94l-.161-.169a4.5 4.5 0 0 0-5.936-.377l-.18.148L12 6.284l-1.307-1.13a4.5 4.5 0 0 0-6.502 6.157l.147.18.114.134 8.961 8.961L12 22l-9.192-9.192.013-.013a6.5 6.5 0 0 1 9.18-9.154 6.499 6.499 0 0 1 8.838.328zM19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2z"}}]}]})(props);
};
RiHeartAddLine.displayName = "RiHeartAddLine";
var RiHeartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22l-9.192-9.192c-2.18-2.568-2.066-6.42.353-8.84A6.5 6.5 0 0 1 12 3.64a6.5 6.5 0 0 1 9.179 9.154L12 22zm7.662-10.509a4.5 4.5 0 0 0-6.355-6.337L12 6.282l-1.307-1.128a4.5 4.5 0 0 0-6.355 6.337l.114.132L12 19.172l7.548-7.549.114-.132z"}}]}]})(props);
};
RiHeartLine.displayName = "RiHeartLine";
var RiIndeterminateCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-9h10v2H7v-2z"}}]}]})(props);
};
RiIndeterminateCircleLine.displayName = "RiIndeterminateCircleLine";
var RiInformationLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"}}]}]})(props);
};
RiInformationLine.displayName = "RiInformationLine";
var RiListSettingsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 18h7v2H2v-2zm0-7h9v2H2v-2zm0-7h20v2H2V4zm18.674 9.025l1.156-.391 1 1.732-.916.805a4.017 4.017 0 0 1 0 1.658l.916.805-1 1.732-1.156-.391c-.41.37-.898.655-1.435.83L19 21h-2l-.24-1.196a3.996 3.996 0 0 1-1.434-.83l-1.156.392-1-1.732.916-.805a4.017 4.017 0 0 1 0-1.658l-.916-.805 1-1.732 1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196c.536.174 1.024.46 1.434.83zM18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiListSettingsLine.displayName = "RiListSettingsLine";
var RiLoader2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0L4.93 6.344a1 1 0 0 1 1.414-1.415L8.464 7.05a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z"}}]}]})(props);
};
RiLoader2Line.displayName = "RiLoader2Line";
var RiLoader3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0zm0-2a9.001 9.001 0 0 1 17.89 0H18.93a7.002 7.002 0 0 0-13.858 0H3.055z"}}]}]})(props);
};
RiLoader3Line.displayName = "RiLoader3Line";
var RiLoader4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"}}]}]})(props);
};
RiLoader4Line.displayName = "RiLoader4Line";
var RiLoader5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"}}]}]})(props);
};
RiLoader5Line.displayName = "RiLoader5Line";
var RiLoaderLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm8.66-10a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 7zM7.67 14.5a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366zM20.66 17a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 0 1 1-1.732l2.598 1.5A1 1 0 0 1 20.66 17zM7.67 9.5a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 7.67 9.5z"}}]}]})(props);
};
RiLoaderLine.displayName = "RiLoaderLine";
var RiLock2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268zM8 8h8V7a4 4 0 1 0-8 0v1z"}}]}]})(props);
};
RiLock2Line.displayName = "RiLock2Line";
var RiLockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z"}}]}]})(props);
};
RiLockLine.displayName = "RiLockLine";
var RiLockPasswordLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"}}]}]})(props);
};
RiLockPasswordLine.displayName = "RiLockPasswordLine";
var RiLockUnlockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 10h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 13.262-3.131l-1.789.894A5 5 0 0 0 7 9v1zm-2 2v8h14v-8H5zm5 3h4v2h-4v-2z"}}]}]})(props);
};
RiLockUnlockLine.displayName = "RiLockUnlockLine";
var RiLoginBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"}}]}]})(props);
};
RiLoginBoxLine.displayName = "RiLoginBoxLine";
var RiLoginCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"}}]}]})(props);
};
RiLoginCircleLine.displayName = "RiLoginCircleLine";
var RiLogoutBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"}}]}]})(props);
};
RiLogoutBoxLine.displayName = "RiLogoutBoxLine";
var RiLogoutBoxRLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"}}]}]})(props);
};
RiLogoutBoxRLine.displayName = "RiLogoutBoxRLine";
var RiLogoutCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 1 0 0-12H4A9.985 9.985 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4z"}}]}]})(props);
};
RiLogoutCircleLine.displayName = "RiLogoutCircleLine";
var RiLogoutCircleRLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"}}]}]})(props);
};
RiLogoutCircleRLine.displayName = "RiLogoutCircleRLine";
var RiMenu2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"}}]}]})(props);
};
RiMenu2Line.displayName = "RiMenu2Line";
var RiMenu3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"}}]}]})(props);
};
RiMenu3Line.displayName = "RiMenu3Line";
var RiMenu4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"}}]}]})(props);
};
RiMenu4Line.displayName = "RiMenu4Line";
var RiMenu5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"}}]}]})(props);
};
RiMenu5Line.displayName = "RiMenu5Line";
var RiMenuAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z"}}]}]})(props);
};
RiMenuAddLine.displayName = "RiMenuAddLine";
var RiMenuLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"}}]}]})(props);
};
RiMenuLine.displayName = "RiMenuLine";
var RiMore2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3zm0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18zm0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"}}]}]})(props);
};
RiMore2Line.displayName = "RiMore2Line";
var RiMoreLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"}}]}]})(props);
};
RiMoreLine.displayName = "RiMoreLine";
var RiNotificationBadgeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13.341 4A5.99 5.99 0 0 0 13 6H5v14h14v-8a5.99 5.99 0 0 0 2-.341V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9.341zM19 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"}}]}]})(props);
};
RiNotificationBadgeLine.displayName = "RiNotificationBadgeLine";
var RiQrCodeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1h1zm5 4h-4v-2h2v-2h2v4zM3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zM6 6h2v2H6V6zm0 10h2v2H6v-2zM16 6h2v2h-2V6z"}}]}]})(props);
};
RiQrCodeLine.displayName = "RiQrCodeLine";
var RiQrScan2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 3h6v5h-2V5h-4V3zM9 3v2H5v3H3V3h6zm6 18v-2h4v-3h2v5h-6zm-6 0H3v-5h2v3h4v2zM3 11h18v2H3v-2z"}}]}]})(props);
};
RiQrScan2Line.displayName = "RiQrScan2Line";
var RiQrScanLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M21 16v5H3v-5h2v3h14v-3h2zM3 11h18v2H3v-2zm18-3h-2V5H5v3H3V3h18v5z"}}]}]})(props);
};
RiQrScanLine.displayName = "RiQrScanLine";
var RiQuestionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"}}]}]})(props);
};
RiQuestionLine.displayName = "RiQuestionLine";
var RiRadioButtonLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"}}]}]})(props);
};
RiRadioButtonLine.displayName = "RiRadioButtonLine";
var RiRefreshLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"}}]}]})(props);
};
RiRefreshLine.displayName = "RiRefreshLine";
var RiRestartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"}}]}]})(props);
};
RiRestartLine.displayName = "RiRestartLine";
var RiRotateLockLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 1 0-2.46 5.772l.998 1.795A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 5a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3zm2 6h-4v1h4v-1zm-2-4a1 1 0 0 0-.993.883L11 10v1h2v-1a1 1 0 0 0-.883-.993L12 9z"}}]}]})(props);
};
RiRotateLockLine.displayName = "RiRotateLockLine";
var RiRssLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 17a4 4 0 0 1 4 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z"}}]}]})(props);
};
RiRssLine.displayName = "RiRssLine";
var RiScan2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.671 4.257L13.414 12 12 13.414 8.554 9.968a4 4 0 1 0 3.697-1.96l-1.805-1.805a6 6 0 1 1-3.337 2.32L5.68 7.094a8 8 0 1 0 3.196-2.461L7.374 3.132A9.957 9.957 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.671-7.743z"}}]}]})(props);
};
RiScan2Line.displayName = "RiScan2Line";
var RiScanLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5.671 4.257L13.414 12 12 13.414l-6.32-6.32a8 8 0 1 0 3.706-2.658L7.85 2.9A9.963 9.963 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.671-7.743z"}}]}]})(props);
};
RiScanLine.displayName = "RiScanLine";
var RiSearch2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"}}]}]})(props);
};
RiSearch2Line.displayName = "RiSearch2Line";
var RiSearchEyeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zm-3.847-8.699a2 2 0 1 0 2.646 2.646 4 4 0 1 1-2.646-2.646z"}}]}]})(props);
};
RiSearchEyeLine.displayName = "RiSearchEyeLine";
var RiSearchLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"}}]}]})(props);
};
RiSearchLine.displayName = "RiSearchLine";
var RiSettings2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiSettings2Line.displayName = "RiSettings2Line";
var RiSettings3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiSettings3Line.displayName = "RiSettings3Line";
var RiSettings4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 12c0-.865.11-1.703.316-2.504A3 3 0 0 0 4.99 4.867a9.99 9.99 0 0 1 4.335-2.505 3 3 0 0 0 5.348 0 9.99 9.99 0 0 1 4.335 2.505 3 3 0 0 0 2.675 4.63c.206.8.316 1.638.316 2.503 0 .865-.11 1.703-.316 2.504a3 3 0 0 0-2.675 4.629 9.99 9.99 0 0 1-4.335 2.505 3 3 0 0 0-5.348 0 9.99 9.99 0 0 1-4.335-2.505 3 3 0 0 0-2.675-4.63C2.11 13.704 2 12.866 2 12zm4.804 3c.63 1.091.81 2.346.564 3.524.408.29.842.541 1.297.75A4.993 4.993 0 0 1 12 18c1.26 0 2.438.471 3.335 1.274.455-.209.889-.46 1.297-.75A4.993 4.993 0 0 1 17.196 15a4.993 4.993 0 0 1 2.77-2.25 8.126 8.126 0 0 0 0-1.5A4.993 4.993 0 0 1 17.195 9a4.993 4.993 0 0 1-.564-3.524 7.989 7.989 0 0 0-1.297-.75A4.993 4.993 0 0 1 12 6a4.993 4.993 0 0 1-3.335-1.274 7.99 7.99 0 0 0-1.297.75A4.993 4.993 0 0 1 6.804 9a4.993 4.993 0 0 1-2.77 2.25 8.126 8.126 0 0 0 0 1.5A4.993 4.993 0 0 1 6.805 15zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiSettings4Line.displayName = "RiSettings4Line";
var RiSettings5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.213 14.06a9.945 9.945 0 0 1 0-4.12c1.11.13 2.08-.237 2.396-1.001.317-.765-.108-1.71-.986-2.403a9.945 9.945 0 0 1 2.913-2.913c.692.877 1.638 1.303 2.403.986.765-.317 1.132-1.286 1.001-2.396a9.945 9.945 0 0 1 4.12 0c-.13 1.11.237 2.08 1.001 2.396.765.317 1.71-.108 2.403-.986a9.945 9.945 0 0 1 2.913 2.913c-.877.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.945 9.945 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.001-.317.765.108 1.71.986 2.403a9.945 9.945 0 0 1-2.913 2.913c-.692-.877-1.638-1.303-2.403-.986-.765.317-1.132 1.286-1.001 2.396a9.945 9.945 0 0 1-4.12 0c.13-1.11-.237-2.08-1.001-2.396-.765-.317-1.71.108-2.403.986a9.945 9.945 0 0 1-2.913-2.913c.877-.692 1.303-1.638.986-2.403-.317-.765-1.286-1.132-2.396-1.001zM4 12.21c1.1.305 2.007 1.002 2.457 2.086.449 1.085.3 2.22-.262 3.212.096.102.195.201.297.297.993-.562 2.127-.71 3.212-.262 1.084.45 1.781 1.357 2.086 2.457.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.086-2.457 1.085-.449 2.22-.3 3.212.262.102-.096.201-.195.297-.297-.562-.993-.71-2.127-.262-3.212.45-1.084 1.357-1.781 2.457-2.086.004-.14.004-.28 0-.42-1.1-.305-2.007-1.002-2.457-2.086-.449-1.085-.3-2.22.262-3.212a7.935 7.935 0 0 0-.297-.297c-.993.562-2.127.71-3.212.262C13.212 6.007 12.515 5.1 12.21 4a7.935 7.935 0 0 0-.42 0c-.305 1.1-1.002 2.007-2.086 2.457-1.085.449-2.22.3-3.212-.262-.102.096-.201.195-.297.297.562.993.71 2.127.262 3.212C6.007 10.788 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]}]})(props);
};
RiSettings5Line.displayName = "RiSettings5Line";
var RiSettings6Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.5 2.474L23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zm-1.155 2h-8.69L3.309 12l4.346 7.526h8.69L20.691 12l-4.346-7.526zM8.634 8.17l1.732-1 5 8.66-1.732 1-5-8.66z"}}]}]})(props);
};
RiSettings6Line.displayName = "RiSettings6Line";
var RiSettingsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiSettingsLine.displayName = "RiSettingsLine";
var RiShareBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"}}]}]})(props);
};
RiShareBoxLine.displayName = "RiShareBoxLine";
var RiShareCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8.001 8.001 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95zm9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2V5.414z"}}]}]})(props);
};
RiShareCircleLine.displayName = "RiShareCircleLine";
var RiShareForward2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2v5zM16.172 7l-3.95-3.95 1.414-1.414L20 8l-6.364 6.364-1.414-1.414L16.172 9H5V7h11.172z"}}]}]})(props);
};
RiShareForward2Line.displayName = "RiShareForward2Line";
var RiShareForwardBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9 3v2H4v14h16v-9h2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm9.95 2L16 2.05 17.414.636l5.34 5.34A.6.6 0 0 1 22.33 7H14a2 2 0 0 0-2 2v6h-2V9a4 4 0 0 1 4-4h4.95z"}}]}]})(props);
};
RiShareForwardBoxLine.displayName = "RiShareForwardBoxLine";
var RiShareForwardLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"}}]}]})(props);
};
RiShareForwardLine.displayName = "RiShareForwardLine";
var RiShareLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiShareLine.displayName = "RiShareLine";
var RiShieldCrossLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2h3z"}}]}]})(props);
};
RiShieldCrossLine.displayName = "RiShieldCrossLine";
var RiShieldFlashLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM13 10h3l-5 7v-5H8l5-7v5z"}}]}]})(props);
};
RiShieldFlashLine.displayName = "RiShieldFlashLine";
var RiShieldKeyholeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976L12 1zm0 2.049L5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM12 7a2 2 0 0 1 1.001 3.732L13 15h-2v-4.268A2 2 0 0 1 12 7z"}}]}]})(props);
};
RiShieldKeyholeLine.displayName = "RiShieldKeyholeLine";
var RiShieldLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604z"}}]}]})(props);
};
RiShieldLine.displayName = "RiShieldLine";
var RiShieldStarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272L12 13.5z"}}]}]})(props);
};
RiShieldStarLine.displayName = "RiShieldStarLine";
var RiShieldUserLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-4.473 5a4.5 4.5 0 0 1 8.946 0H7.527z"}}]}]})(props);
};
RiShieldUserLine.displayName = "RiShieldUserLine";
var RiShutDownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.988 9.988 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 0 1 4.265-8.193zM11 12V2h2v10h-2z"}}]}]})(props);
};
RiShutDownLine.displayName = "RiShutDownLine";
var RiSideBarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 2H4v14h4V5zm2 0v14h10V5H10z"}}]}]})(props);
};
RiSideBarLine.displayName = "RiSideBarLine";
var RiSpam2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.936 2.5L21.5 8.067v7.87L15.936 21.5h-7.87L2.5 15.936v-7.87L8.066 2.5h7.87zm-.829 2H8.894L4.501 8.895v6.213l4.393 4.394h6.213l4.394-4.394V8.894l-4.394-4.393zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z"}}]}]})(props);
};
RiSpam2Line.displayName = "RiSpam2Line";
var RiSpam3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M15.936 2.5L21.5 8.067v7.87L15.936 21.5h-7.87L2.5 15.936v-7.87L8.066 2.5h7.87zm-.829 2H8.894L4.501 8.895v6.213l4.393 4.394h6.213l4.394-4.394V8.894l-4.394-4.393zM8 11h8v2H8v-2z"}}]}]})(props);
};
RiSpam3Line.displayName = "RiSpam3Line";
var RiSpamLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5h11zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5-4.342-7.5zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z"}}]}]})(props);
};
RiSpamLine.displayName = "RiSpamLine";
var RiStarHalfLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"}}]}]})(props);
};
RiStarHalfLine.displayName = "RiStarHalfLine";
var RiStarHalfSLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 14.656l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"}}]}]})(props);
};
RiStarHalfSLine.displayName = "RiStarHalfSLine";
var RiStarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"}}]}]})(props);
};
RiStarLine.displayName = "RiStarLine";
var RiStarSLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z"}}]}]})(props);
};
RiStarSLine.displayName = "RiStarSLine";
var RiSubtractLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 11h14v2H5z"}}]}]})(props);
};
RiSubtractLine.displayName = "RiSubtractLine";
var RiThumbDownLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H22a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3.482a1 1 0 0 0-.817.423l-5.453 7.726a.5.5 0 0 1-.632.159L9.802 22.4a2.5 2.5 0 0 1-1.305-2.853L9.4 16zm7.6-2.588V5H5.84L3 11.896V14h6.4a2 2 0 0 1 1.938 2.493l-.903 3.548a.5.5 0 0 0 .261.571l.661.33 4.71-6.672c.25-.354.57-.644.933-.858zM19 13h2V5h-2v8z"}}]}]})(props);
};
RiThumbDownLine.displayName = "RiThumbDownLine";
var RiThumbUpLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"}}]}]})(props);
};
RiThumbUpLine.displayName = "RiThumbUpLine";
var RiTimeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"}}]}]})(props);
};
RiTimeLine.displayName = "RiTimeLine";
var RiTimer2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm3.536-12.95l1.414 1.414-4.95 4.95L10.586 12l4.95-4.95z"}}]}]})(props);
};
RiTimer2Line.displayName = "RiTimer2Line";
var RiTimerFlashLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.382 5.968A8.962 8.962 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-14.064 0L3.515 5.93l1.414-1.414 1.453 1.453zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm1-8h3l-5 6.5V14H8l5-6.505V12zM8 1h8v2H8V1z"}}]}]})(props);
};
RiTimerFlashLine.displayName = "RiTimerFlashLine";
var RiTimerLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z"}}]}]})(props);
};
RiTimerLine.displayName = "RiTimerLine";
var RiToggleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 7a5 5 0 1 0 0 10h8a5 5 0 0 0 0-10H8zm0-2h8a7 7 0 0 1 0 14H8A7 7 0 0 1 8 5zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}}]}]})(props);
};
RiToggleLine.displayName = "RiToggleLine";
var RiUpload2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z"}}]}]})(props);
};
RiUpload2Line.displayName = "RiUpload2Line";
var RiUploadCloud2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z"}}]}]})(props);
};
RiUploadCloud2Line.displayName = "RiUploadCloud2Line";
var RiUploadCloudLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 13v4h-2v-4H8l4-5 4 5h-3z"}}]}]})(props);
};
RiUploadCloudLine.displayName = "RiUploadCloudLine";
var RiUploadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"}}]}]})(props);
};
RiUploadLine.displayName = "RiUploadLine";
var RiWifiLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M.69 6.997A17.925 17.925 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.933 15.933 0 0 0 12 5C8.191 5 4.694 6.33 1.946 8.553L.69 6.997zm3.141 3.89A12.946 12.946 0 0 1 12 8c3.094 0 5.936 1.081 8.169 2.886l-1.257 1.556A10.954 10.954 0 0 0 12 10c-2.618 0-5.023.915-6.912 2.442l-1.257-1.556zm3.142 3.89A7.967 7.967 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.975 5.975 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332l-1.257-1.556zm3.142 3.89A2.987 2.987 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334z"}}]}]})(props);
};
RiWifiLine.displayName = "RiWifiLine";
var RiWifiOffLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A2.987 2.987 0 0 1 12 18zM2.808 1.393l17.677 17.678-1.414 1.414-5.18-5.18A5.994 5.994 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332l-1.256-1.556a7.963 7.963 0 0 1 4.622-1.766L9 10.414a10.969 10.969 0 0 0-3.912 2.029L3.83 10.887A12.984 12.984 0 0 1 7.416 8.83L5.132 6.545a16.009 16.009 0 0 0-3.185 2.007L.689 6.997c.915-.74 1.903-1.391 2.952-1.942L1.393 2.808l1.415-1.415zM14.5 10.285l-2.284-2.283L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.258 1.556a10.96 10.96 0 0 0-4.412-2.158zM12 3c4.285 0 8.22 1.497 11.31 3.997l-1.257 1.555A15.933 15.933 0 0 0 12 5c-.878 0-1.74.07-2.58.207L7.725 3.51C9.094 3.177 10.527 3 12 3z"}}]}]})(props);
};
RiWifiOffLine.displayName = "RiWifiOffLine";
var RiZoomInLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3z"}}]}]})(props);
};
RiZoomInLine.displayName = "RiZoomInLine";
var RiZoomOutLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM7 10h8v2H7v-2z"}}]}]})(props);
};
RiZoomOutLine.displayName = "RiZoomOutLine";
var RiAccountBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995zM5 5v14h14V5H5zm2.972 13.18a9.983 9.983 0 0 1-1.751-.978A6.994 6.994 0 0 1 12.102 14c2.4 0 4.517 1.207 5.778 3.047a9.995 9.995 0 0 1-1.724 1.025A4.993 4.993 0 0 0 12.102 16c-1.715 0-3.23.864-4.13 2.18zM12 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}}]}]})(props);
};
RiAccountBoxLine.displayName = "RiAccountBoxLine";
var RiAccountCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiAccountCircleLine.displayName = "RiAccountCircleLine";
var RiAccountPinBoxLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 21l-2 2-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H14zm5-2V5H5v14h5.828L12 20.172 13.172 19H19zm-11.028-.82a9.983 9.983 0 0 1-1.751-.978A6.994 6.994 0 0 1 12.102 14c2.4 0 4.517 1.207 5.778 3.047a9.995 9.995 0 0 1-1.724 1.025A4.993 4.993 0 0 0 12.102 16c-1.715 0-3.23.864-4.13 2.18zM12 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}}]}]})(props);
};
RiAccountPinBoxLine.displayName = "RiAccountPinBoxLine";
var RiAccountPinCircleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.745 21.745C5.308 20.722 2 16.747 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.747-3.308 8.722-7.745 9.745L12 24l-2.255-2.255zm-2.733-3.488a7.953 7.953 0 0 0 3.182 1.539l.56.129L12 21.172l1.247-1.247.56-.13a7.956 7.956 0 0 0 3.36-1.686A6.979 6.979 0 0 0 12.16 16c-2.036 0-3.87.87-5.148 2.257zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiAccountPinCircleLine.displayName = "RiAccountPinCircleLine";
var RiAdminLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"}}]}]})(props);
};
RiAdminLine.displayName = "RiAdminLine";
var RiAliensLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2zm0 2a6.5 6.5 0 0 0-6.5 6.5c0 4.794 4.165 10 6.5 10s6.5-5.206 6.5-10A6.5 6.5 0 0 0 12 4zm5.5 7c.16 0 .319.008.475.025a4.5 4.5 0 0 1-4.95 4.95A4.5 4.5 0 0 1 17.5 11zm-11 0a4.5 4.5 0 0 1 4.475 4.975 4.5 4.5 0 0 1-4.95-4.95C6.18 11.008 6.34 11 6.5 11z"}}]}]})(props);
};
RiAliensLine.displayName = "RiAliensLine";
var RiBearSmileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"}}]}]})(props);
};
RiBearSmileLine.displayName = "RiBearSmileLine";
var RiBodyScanLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 16v4h4v2H2v-6h2zm18 0v6h-6v-2h4v-4h2zM7.5 7a4.502 4.502 0 0 0 3.5 4.389V17h2l.001-5.612A4.502 4.502 0 0 0 16.5 7h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7h2zM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8 2v2l-4-.001V8H2V2h6zm14 0v6h-2V4h-4V2h6z"}}]}]})(props);
};
RiBodyScanLine.displayName = "RiBodyScanLine";
var RiContactsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"}}]}]})(props);
};
RiContactsLine.displayName = "RiContactsLine";
var RiCriminalLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2a9 9 0 0 1 6.894 14.786c1.255.83 2.033 1.89 2.101 3.049L21 20l-9 2-9-2 .005-.165c.067-1.16.846-2.22 2.1-3.05A8.965 8.965 0 0 1 3 11a9 9 0 0 1 9-9zm0 2a7 7 0 0 0-7 7c0 1.567.514 3.05 1.445 4.261l.192.239 1.443 1.717-1.962 1.299-.137.097L12 19.951l6.018-1.338-.049-.036-.178-.123-1.871-1.237 1.443-1.718A6.963 6.963 0 0 0 19 11a7 7 0 0 0-7-7zm0 9c1.38 0 2.5.672 2.5 1.5S13.38 16 12 16s-2.5-.672-2.5-1.5S10.62 13 12 13zM9 8c1.105 0 2 .672 2 1.5S10.105 11 9 11s-2-.672-2-1.5S7.895 8 9 8zm6 0c1.105 0 2 .672 2 1.5s-.895 1.5-2 1.5-2-.672-2-1.5.895-1.5 2-1.5z"}}]}]})(props);
};
RiCriminalLine.displayName = "RiCriminalLine";
var RiEmotion2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4-7h8a4 4 0 1 1-8 0z"}}]}]})(props);
};
RiEmotion2Line.displayName = "RiEmotion2Line";
var RiEmotionHappyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0zm1-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiEmotionHappyLine.displayName = "RiEmotionHappyLine";
var RiEmotionLaughLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z"}}]}]})(props);
};
RiEmotionLaughLine.displayName = "RiEmotionLaughLine";
var RiEmotionLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4-7h8a4 4 0 1 1-8 0zm0-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiEmotionLine.displayName = "RiEmotionLine";
var RiEmotionNormalLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4-6h8v2H8v-2zm0-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiEmotionNormalLine.displayName = "RiEmotionNormalLine";
var RiEmotionSadLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"}}]}]})(props);
};
RiEmotionSadLine.displayName = "RiEmotionSadLine";
var RiEmotionUnhappyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-3a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0H7zm1-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiEmotionUnhappyLine.displayName = "RiEmotionUnhappyLine";
var RiGenderlessLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 7.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934V1h2v6.066zM12 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"}}]}]})(props);
};
RiGenderlessLine.displayName = "RiGenderlessLine";
var RiGhost2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c3.5 0 6 3 7 6 3 1 4 3.73 4 6l-2.775.793a1 1 0 0 0-.725.961v1.496A1.75 1.75 0 0 1 17.75 19h-.596a2 2 0 0 0-1.668.896C14.558 21.3 13.396 22 12 22c-1.396 0-2.558-.701-3.486-2.104A2 2 0 0 0 6.846 19H6.25a1.75 1.75 0 0 1-1.75-1.75v-1.496a1 1 0 0 0-.725-.961L1 14c0-2.266 1-5 4-6 1-3 3.5-6 7-6zm0 2C9.89 4 7.935 5.788 6.989 8.371l-.092.261-.316.95-.949.315c-1.255.419-2.067 1.341-2.424 2.56l-.023.086 1.14.327a3 3 0 0 1 2.17 2.703l.005.181V17h.346a4 4 0 0 1 3.2 1.6l.136.192C10.758 19.663 11.316 20 12 20c.638 0 1.167-.293 1.703-1.04l.115-.168a4 4 0 0 1 3.1-1.785l.236-.007h.346v-1.246a3 3 0 0 1 2.003-2.83l.173-.054 1.139-.327-.023-.087c-.337-1.151-1.08-2.037-2.22-2.484l-.204-.075-.95-.316-.315-.949C16.195 5.91 14.18 4 12 4zm0 8c.828 0 1.5 1.12 1.5 2.5S12.828 17 12 17s-1.5-1.12-1.5-2.5.672-2.5 1.5-2.5zM9.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"}}]}]})(props);
};
RiGhost2Line.displayName = "RiGhost2Line";
var RiGhostLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976 2.999 2.999 0 0 1-5.223 0 3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9zm0 2a7 7 0 0 0-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 0 0 2.645.88l.088-.116a2 2 0 0 1 3.393.142.999.999 0 0 0 1.74.003 2 2 0 0 1 3.296-.278l.097.13a1.5 1.5 0 0 0 2.733-.701L19 18.5V11a7 7 0 0 0-7-7zm0 8c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5-2-1.12-2-2.5.895-2.5 2-2.5zM9.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"}}]}]})(props);
};
RiGhostLine.displayName = "RiGhostLine";
var RiGhostSmileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976 2.999 2.999 0 0 1-5.223 0 3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9zm0 2a7 7 0 0 0-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 0 0 2.645.88l.088-.116a2 2 0 0 1 3.393.142.999.999 0 0 0 1.74.003 2 2 0 0 1 3.296-.278l.097.13a1.5 1.5 0 0 0 2.733-.701L19 18.5V11a7 7 0 0 0-7-7zm4 9a4 4 0 0 1-7.995.2L8 13h2a2 2 0 1 0 4 0h2zm-4-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"}}]}]})(props);
};
RiGhostSmileLine.displayName = "RiGhostSmileLine";
var RiGroup2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.55 11.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zm.45 8.248V16.4c0-.488.144-.937.404-1.338a6.473 6.473 0 0 0-5.033 1.417A8.012 8.012 0 0 0 10 19.749zM4.453 14.66A8.462 8.462 0 0 1 9.5 13c1.043 0 2.043.188 2.967.532.878-.343 1.925-.532 3.033-.532 1.66 0 3.185.424 4.206 1.156a8 8 0 1 0-15.253.504zm14.426 1.426C18.486 15.553 17.171 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 0 0 6.88-3.914zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiGroup2Line.displayName = "RiGroup2Line";
var RiGroupLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"}}]}]})(props);
};
RiGroupLine.displayName = "RiGroupLine";
var RiMenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.05 8.537L18.585 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414zM10.5 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"}}]}]})(props);
};
RiMenLine.displayName = "RiMenLine";
var RiMickeyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M18.5 2a4.5 4.5 0 0 1 .883 8.913l.011.027a8 8 0 0 1-7.145 11.056L12 22a8 8 0 0 1-7.382-11.088A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254l.073-.019A8.018 8.018 0 0 1 12 6l.25.004a8 8 0 0 1 1.756.25A4.5 4.5 0 0 1 18.5 2zM12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM5.5 4a2.5 2.5 0 0 0 0 5l.164-.005.103-.01A8.044 8.044 0 0 1 7.594 7.32l.33-.206A2.5 2.5 0 0 0 5.5 4zm13 0a2.5 2.5 0 0 0-2.466 2.916l.043.2.028.016a8.04 8.04 0 0 1 2.128 1.852A2.5 2.5 0 1 0 18.5 4z"}}]}]})(props);
};
RiMickeyLine.displayName = "RiMickeyLine";
var RiOpenArmLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M18 17v5h-2v-5c0-4.451 2.644-8.285 6.447-10.016l.828 1.82A9.002 9.002 0 0 0 18 17zM8 17v5H6v-5A9.002 9.002 0 0 0 .725 8.805l.828-1.821A11.002 11.002 0 0 1 8 17zm4-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]}]})(props);
};
RiOpenArmLine.displayName = "RiOpenArmLine";
var RiParentLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm2.5 6v-.5a2.5 2.5 0 1 0-5 0v.5h-2v-.5a4.5 4.5 0 1 1 9 0v.5h-2zm-10 0v-4a3 3 0 0 0-6 0v4H2v-4a5 5 0 0 1 10 0v4h-2z"}}]}]})(props);
};
RiParentLine.displayName = "RiParentLine";
var RiRobotLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 4.055c4.5.497 8 4.312 8 8.945v9H3v-9c0-4.633 3.5-8.448 8-8.945V1h2v3.055zM19 20v-7a7 7 0 0 0-14 0v7h14zm-7-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]}]})(props);
};
RiRobotLine.displayName = "RiRobotLine";
var RiSkull2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23a2.5 2.5 0 0 0 .044-.33L15 22.5V22a2 2 0 0 0-1.85-1.995L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5c0 .171.017.339.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-7.996 7.75L4 12v3.764l4 2v1.591l.075-.084a3.992 3.992 0 0 1 2.723-1.266L11 18l2.073.001.223.01c.999.074 1.89.51 2.55 1.177l.154.167v-1.591l4-2V12a8 8 0 0 0-8-8zm-4 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"}}]}]})(props);
};
RiSkull2Line.displayName = "RiSkull2Line";
var RiSkullLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 12a8 8 0 1 0-16 0v4h3a1 1 0 0 1 1 1v3h8v-3a1 1 0 0 1 1-1h3v-4zm-2 6v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5a1 1 0 0 1-1 1h-3zM7.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]}]})(props);
};
RiSkullLine.displayName = "RiSkullLine";
var RiSpyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4h8zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2z"}}]}]})(props);
};
RiSpyLine.displayName = "RiSpyLine";
var RiStarSmileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zm0 3.544L9.022 8.402 3.957 9.887l3.225 4.178-.153 5.275L12 17.566l4.97 1.774-.152-5.275 3.224-4.178-5.064-1.485L12 4.044zM10 12a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"}}]}]})(props);
};
RiStarSmileLine.displayName = "RiStarSmileLine";
var RiTeamLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"}}]}]})(props);
};
RiTeamLine.displayName = "RiTeamLine";
var RiTravestiLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8.95 8.537A7.5 7.5 0 1 1 7.537 9.95L4.662 7.075 2.186 9.55.772 8.136l6.364-6.364L8.55 3.186 6.075 5.661l2.876 2.876zM13.5 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"}}]}]})(props);
};
RiTravestiLine.displayName = "RiTravestiLine";
var RiUser2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 22a8 8 0 1 1 16 0H4zm9-5.917V20h4.659A6.009 6.009 0 0 0 13 16.083zM11 20v-3.917A6.009 6.009 0 0 0 6.341 20H11zm1-7c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"}}]}]})(props);
};
RiUser2Line.displayName = "RiUser2Line";
var RiUser3Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}}]}]})(props);
};
RiUser3Line.displayName = "RiUser3Line";
var RiUser4Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 20h14v2H5v-2zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"}}]}]})(props);
};
RiUser4Line.displayName = "RiUser4Line";
var RiUser5Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7l2.083-4.761zm6.735-.693l1.332-.941a6 6 0 1 0-6.913 0l1.331.941L8.058 20h7.884l-1.817-4.154zM8.119 10.97l1.94-.485a2 2 0 0 0 3.882 0l1.94.485a4.002 4.002 0 0 1-7.762 0z"}}]}]})(props);
};
RiUser5Line.displayName = "RiUser5Line";
var RiUser6Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-4.783 4.995L12 15a5 5 0 0 1-5-5V7a5 5 0 0 1 4.783-4.995L12 2zm0 2a3 3 0 0 0-2.995 2.824L9 7v3a3 3 0 0 0 5.995.176L15 10V7a3 3 0 0 0-3-3z"}}]}]})(props);
};
RiUser6Line.displayName = "RiUser6Line";
var RiUserAddLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"}}]}]})(props);
};
RiUserAddLine.displayName = "RiUserAddLine";
var RiUserFollowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z"}}]}]})(props);
};
RiUserFollowLine.displayName = "RiUserFollowLine";
var RiUserHeartLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M17.841 15.659l.176.177.178-.177a2.25 2.25 0 0 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 0 1 3.182-3.182zM12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996L12 14zm0-13c3.315 0 6 2.685 6 6a5.998 5.998 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a5.998 5.998 0 0 1 5.775-5.996L12 1zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}}]}]})(props);
};
RiUserHeartLine.displayName = "RiUserHeartLine";
var RiUserLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"}}]}]})(props);
};
RiUserLine.displayName = "RiUserLine";
var RiUserLocationLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.828 10.071L18 24l-2.828-2.929c-1.563-1.618-1.563-4.24 0-5.858a3.904 3.904 0 0 1 5.656 0c1.563 1.618 1.563 4.24 0 5.858zm-1.438-1.39c.813-.842.813-2.236 0-3.078a1.904 1.904 0 0 0-2.78 0c-.813.842-.813 2.236 0 3.079L18 21.12l1.39-1.44z"}}]}]})(props);
};
RiUserLocationLine.displayName = "RiUserLocationLine";
var RiUserReceived2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8 6h3v2h-3v3.5L15 18l5-4.5V17z"}}]}]})(props);
};
RiUserReceived2Line.displayName = "RiUserReceived2Line";
var RiUserReceivedLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7.418 6h3.586v2h-3.586l1.829 1.828-1.414 1.415L15.59 18l4.243-4.243 1.414 1.415L19.418 17z"}}]}]})(props);
};
RiUserReceivedLine.displayName = "RiUserReceivedLine";
var RiUserSearchLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9.446 9.032l1.504 1.504-1.414 1.414-1.504-1.504a4 4 0 1 1 1.414-1.414zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiUserSearchLine.displayName = "RiUserSearchLine";
var RiUserSettingsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm2.595 7.812a3.51 3.51 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573-1 1.732-.992-.573a3.496 3.496 0 0 1-1.405.812V22.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573-1-1.732.992-.572zM18 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}}]}]})(props);
};
RiUserSettingsLine.displayName = "RiUserSettingsLine";
var RiUserShared2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3.5l5 4.5-5 4.5V19h-3v-2h3z"}}]}]})(props);
};
RiUserShared2Line.displayName = "RiUserShared2Line";
var RiUserSharedLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.586 6l-1.829-1.828 1.415-1.415L22.414 18l-4.242 4.243-1.415-1.415L18.586 19H15v-2h3.586z"}}]}]})(props);
};
RiUserSharedLine.displayName = "RiUserSharedLine";
var RiUserSmileLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"}}]}]})(props);
};
RiUserSmileLine.displayName = "RiUserSmileLine";
var RiUserStarLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 10.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272L18 21.5z"}}]}]})(props);
};
RiUserStarLine.displayName = "RiUserStarLine";
var RiUserUnfollowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7 6.586l2.121-2.122 1.415 1.415L20.414 19l2.122 2.121-1.415 1.415L19 20.414l-2.121 2.122-1.415-1.415L17.586 19l-2.122-2.121 1.415-1.415L19 17.586z"}}]}]})(props);
};
RiUserUnfollowLine.displayName = "RiUserUnfollowLine";
var RiUserVoiceLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M1 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H1zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM21.548.784A13.942 13.942 0 0 1 23 7c0 2.233-.523 4.344-1.452 6.216l-1.645-1.196A11.955 11.955 0 0 0 21 7c0-1.792-.393-3.493-1.097-5.02L21.548.784zm-3.302 2.4A9.97 9.97 0 0 1 19 7a9.97 9.97 0 0 1-.754 3.816l-1.677-1.22A7.99 7.99 0 0 0 17 7a7.99 7.99 0 0 0-.43-2.596l1.676-1.22z"}}]}]})(props);
};
RiUserVoiceLine.displayName = "RiUserVoiceLine";
var RiWomenLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5v-2.066zM12 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"}}]}]})(props);
};
RiWomenLine.displayName = "RiWomenLine";
var RiBlazeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 9c.667 1.06 1 2.394 1 4 0 3-3.5 4-5 9-.667-.575-1-1.408-1-2.5 0-3.482 5-5.29 5-10.5zm-4.5-4a8.31 8.31 0 0 1 1 4c0 5-6 6-4 13C9.833 20.84 9 19.173 9 17c0-3.325 5.5-6 5.5-12zM10 1c.667 1.333 1 2.833 1 4.5 0 6-9 7.5-3 16.5-2.5-.5-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1z"}}]}]})(props);
};
RiBlazeLine.displayName = "RiBlazeLine";
var RiCelsiusLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4.5 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM22 10h-2a4 4 0 1 0-8 0v5a4 4 0 1 0 8 0h2a6 6 0 1 1-12 0v-5a6 6 0 1 1 12 0z"}}]}]})(props);
};
RiCelsiusLine.displayName = "RiCelsiusLine";
var RiCloudWindyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14 18v-2h3.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-12 0v.007H1V10a8 8 0 0 1 15.458-2.901A5.5 5.5 0 1 1 17.5 18H14zm-8 2h10v2H6v-2zm0-8h8v2H6v-2zm-4 4h10v2H2v-2z"}}]}]})(props);
};
RiCloudWindyLine.displayName = "RiCloudWindyLine";
var RiCloudy2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zM7 19h10a4 4 0 1 0-.426-7.978 5 5 0 1 0-9.148 0A4 4 0 1 0 7 19z"}}]}]})(props);
};
RiCloudy2Line.displayName = "RiCloudy2Line";
var RiCloudyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.5 6a6.5 6.5 0 0 0 0 13h7a4.5 4.5 0 1 0-.957-8.898A6.502 6.502 0 0 0 9.5 6zm7 15h-7a8.5 8.5 0 1 1 7.215-12.997A6.5 6.5 0 0 1 16.5 21z"}}]}]})(props);
};
RiCloudyLine.displayName = "RiCloudyLine";
var RiDrizzleLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001zm-8-2h2v4H9v-4zm4 3h2v4h-2v-4z"}}]}]})(props);
};
RiDrizzleLine.displayName = "RiDrizzleLine";
var RiEarthquakeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M5 21a1 1 0 0 1-.993-.883L4 20v-9H1l10.327-9.388a1 1 0 0 1 1.246-.08l.1.08L23 11h-3v9a1 1 0 0 1-.883.993L19 21H5zm7-17.298L6 9.156V19h4.357l1.393-1.5L8 14l5-3-2.5-2 3-3-.5 3 2.5 2-4 3 3.5 3-1.25 2H18V9.157l-6-5.455z"}}]}]})(props);
};
RiEarthquakeLine.displayName = "RiEarthquakeLine";
var RiFahrenheitLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 12h7v2h-7v7h-2V8a4 4 0 0 1 4-4h7v2h-7a2 2 0 0 0-2 2v4zm-7.5-2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}}]}]})(props);
};
RiFahrenheitLine.displayName = "RiFahrenheitLine";
var RiFlashlightLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z"}}]}]})(props);
};
RiFlashlightLine.displayName = "RiFlashlightLine";
var RiFloodLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16 17.472A5.978 5.978 0 0 0 20 19h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.96 7.96 0 0 1 12 21a7.963 7.963 0 0 1-4-1.07A7.96 7.96 0 0 1 4 21H2v-2h2c1.537 0 2.94-.578 4-1.528A5.978 5.978 0 0 0 12 19c1.537 0 2.94-.578 4-1.528zm-3.427-15.94l.1.08L23 11h-3v6a5.99 5.99 0 0 1-2-.341V9.157l-6-5.455-6 5.454.001 7.502a5.978 5.978 0 0 1-1.702.335L4 17v-6H1l10.327-9.388a1 1 0 0 1 1.246-.08z"}}]}]})(props);
};
RiFloodLine.displayName = "RiFloodLine";
var RiFoggyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M1.584 13.007a8 8 0 0 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908h-2.013A3.5 3.5 0 0 0 15 10.05V10a6 6 0 1 0-11.193 3.007H1.584zM4 19h17v2H4v-2zm-2-4h21v2H2v-2z"}}]}]})(props);
};
RiFoggyLine.displayName = "RiFoggyLine";
var RiHailLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 17.418A8.003 8.003 0 0 1 9 2a8.003 8.003 0 0 1 7.458 5.099A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-9 5.197v2.221zM10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(props);
};
RiHailLine.displayName = "RiHailLine";
var RiHaze2Line = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM17 7a5 5 0 0 1 0 10c-1.844 0-3.51-1.04-5-3.122C10.51 15.96 8.844 17 7 17A5 5 0 0 1 7 7c1.844 0 3.51 1.04 5 3.122C13.49 8.04 15.156 7 17 7zM7 9a3 3 0 0 0 0 6c1.254 0 2.51-.875 3.759-2.854l.089-.147-.09-.145c-1.197-1.896-2.4-2.78-3.601-2.85L7 9zm10 0c-1.254 0-2.51.875-3.759 2.854l-.09.146.09.146c1.198 1.896 2.4 2.78 3.602 2.85L17 15a3 3 0 0 0 0-6zm-5-7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"}}]}]})(props);
};
RiHaze2Line.displayName = "RiHaze2Line";
var RiHazeLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.083 13a6 6 0 1 1 11.834 0h-2.043a4 4 0 1 0-7.748 0H6.083zM2 15h10v2H2v-2zm12 0h8v2h-8v-2zm2 4h4v2h-4v-2zM4 19h10v2H4v-2zm7-18h2v3h-2V1zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM19.07 3.515l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"}}]}]})(props);
};
RiHazeLine.displayName = "RiHazeLine";
var RiHeavyShowersLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472v2.458zM7 14h2v6H7v-6zm8 0h2v6h-2v-6zm-4 3h2v6h-2v-6z"}}]}]})(props);
};
RiHeavyShowersLine.displayName = "RiHeavyShowersLine";
var RiMeteorLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77L21 1zm-2 3.122l-7 3.224v-2.43L8.597 6.881a6.997 6.997 0 0 0-3.592 5.845L5 13a7 7 0 0 0 13.996.24L19 13V4.122zM12 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"}}]}]})(props);
};
RiMeteorLine.displayName = "RiMeteorLine";
var RiMistLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 4h4v2H4V4zm12 15h4v2h-4v-2zM2 9h5v2H2V9zm7 0h3v2H9V9zm5 0h6v2h-6V9zM4 14h6v2H4v-2zm8 0h3v2h-3v-2zm5 0h5v2h-5v-2zM10 4h12v2H10V4zM2 19h12v2H2v-2z"}}]}]})(props);
};
RiMistLine.displayName = "RiMistLine";
var RiMoonClearLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8 8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"}}]}]})(props);
};
RiMoonClearLine.displayName = "RiMoonClearLine";
var RiMoonCloudyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8.67 5.007a7 7 0 0 1 7.55-3.901 4.5 4.5 0 0 0 5.674 5.674c.07.396.106.804.106 1.22a6.969 6.969 0 0 1-.865 3.373A5.5 5.5 0 0 1 17.5 21H9a8 8 0 0 1-.33-15.993zm2.177.207a8.016 8.016 0 0 1 5.61 4.885 5.529 5.529 0 0 1 2.96.245c.226-.425.393-.885.488-1.37a6.502 6.502 0 0 1-5.878-5.88 5.003 5.003 0 0 0-3.18 2.12zM17.5 19a3.5 3.5 0 1 0-2.5-5.95V13a6 6 0 1 0-6 6h8.5z"}}]}]})(props);
};
RiMoonCloudyLine.displayName = "RiMoonCloudyLine";
var RiMoonFoggyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M16 20.334v-2.199a7.522 7.522 0 0 0 3.623-4.281 9 9 0 0 1-10.622-8.99A7.518 7.518 0 0 0 5.151 10H3.117a9.505 9.505 0 0 1 8.538-7.963 7 7 0 0 0 10.316 8.728A9.503 9.503 0 0 1 16 20.335zM7 20h7v2H7v-2zm-3-8h6v2H4v-2zm-2 4h10v2H2v-2z"}}]}]})(props);
};
RiMoonFoggyLine.displayName = "RiMoonFoggyLine";
var RiMoonLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"}}]}]})(props);
};
RiMoonLine.displayName = "RiMoonLine";
var RiRainbowLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 4c6.075 0 11 4.925 11 11v5h-2v-5a9 9 0 0 0-8.735-8.996L12 6a9 9 0 0 0-8.996 8.735L3 15v5H1v-5C1 8.925 5.925 4 12 4zm0 4a7 7 0 0 1 7 7v5h-2v-5a5 5 0 0 0-4.783-4.995L12 10a5 5 0 0 0-4.995 4.783L7 15v5H5v-5a7 7 0 0 1 7-7zm0 4a3 3 0 0 1 3 3v5h-2v-5a1 1 0 0 0-.883-.993L12 14a1 1 0 0 0-.993.883L11 15v5H9v-5a3 3 0 0 1 3-3z"}}]}]})(props);
};
RiRainbowLine.displayName = "RiRainbowLine";
var RiRainyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a7.998 7.998 0 0 1 6.98 4.087A6 6 0 1 1 17 18h-1zm-5.768.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z"}}]}]})(props);
};
RiRainyLine.displayName = "RiRainyLine";
var RiShowersLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472v2.458zM7 16h2v4H7v-4zm8 0h2v4h-2v-4zm-4 3h2v4h-2v-4z"}}]}]})(props);
};
RiShowersLine.displayName = "RiShowersLine";
var RiSnowyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13 16.268l1.964-1.134 1 1.732L14 18l1.964 1.134-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134-1-1.732L10 18l-1.964-1.134 1-1.732L11 16.268V14h2v2.268zM17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001z"}}]}]})(props);
};
RiSnowyLine.displayName = "RiSnowyLine";
var RiSunCloudyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M9.984 5.06a6.5 6.5 0 1 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21L9 20.999a8 8 0 1 1 .984-15.94zm2.071.544a8.026 8.026 0 0 1 4.403 4.495 5.529 5.529 0 0 1 3.12.307 4.5 4.5 0 0 0-7.522-4.802zM17.5 19a3.5 3.5 0 1 0-2.5-5.95V13a6 6 0 1 0-6 6h8.5z"}}]}]})(props);
};
RiSunCloudyLine.displayName = "RiSunCloudyLine";
var RiSunFoggyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 12h2v2H4v-2h2a6 6 0 1 1 6 6v-2a4 4 0 1 0-4-4zm-2 8h9v2H6v-2zm-4-4h8v2H2v-2zm9-15h2v3h-2V1zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3z"}}]}]})(props);
};
RiSunFoggyLine.displayName = "RiSunFoggyLine";
var RiSunLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"}}]}]})(props);
};
RiSunLine.displayName = "RiSunLine";
var RiTempColdLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zM8 16h8a4 4 0 1 1-8 0z"}}]}]})(props);
};
RiTempColdLine.displayName = "RiTempColdLine";
var RiTempHotLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(props);
};
RiTempHotLine.displayName = "RiTempHotLine";
var RiThunderstormsLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001zm-4-1.995h3l-5 6.5v-4.5H8l5-6.505v4.505z"}}]}]})(props);
};
RiThunderstormsLine.displayName = "RiThunderstormsLine";
var RiTornadoLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 3h20v2H2V3zm2 4h16v2H4V7zm4 4h14v2H8v-2zm2 4h8v2h-8v-2zm-2 4h6v2H8v-2z"}}]}]})(props);
};
RiTornadoLine.displayName = "RiTornadoLine";
var RiTyphoonLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.654 1.7l-2.782 2.533a9.137 9.137 0 0 1 3.49 1.973c3.512 3.2 3.512 8.388 0 11.588-2.592 2.36-6.598 3.862-12.016 4.506l2.782-2.533a9.137 9.137 0 0 1-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588C8.23 3.846 12.237 2.344 17.655 1.7zM12 6c-3.866 0-7 2.686-7 6s3.134 6 7 6 7-2.686 7-6-3.134-6-7-6zm0 2.3c2.21 0 4 1.657 4 3.7s-1.79 3.7-4 3.7-4-1.657-4-3.7 1.79-3.7 4-3.7zm0 2c-1.138 0-2 .797-2 1.7 0 .903.862 1.7 2 1.7s2-.797 2-1.7c0-.903-.862-1.7-2-1.7z"}}]}]})(props);
};
RiTyphoonLine.displayName = "RiTyphoonLine";
var RiWindyLine = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17zM5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 0 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5 3.5 3.5 0 0 1 13.5 9H5a1 1 0 1 0 0 2z"}}]}]})(props);
};
RiWindyLine.displayName = "RiWindyLine";


/***/ })

})
//# sourceMappingURL=dropdownExample.js.eb5de621ccd5a2380309.hot-update.js.map