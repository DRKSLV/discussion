webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CommentSection.js":
/*!**************************************!*\
  !*** ./components/CommentSection.js ***!
  \**************************************/
/*! exports provided: CommentSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentSection", function() { return CommentSection; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/comments */ "./hooks/comments.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/commentSection.module.sass */ "./style/commentSection.module.sass");
/* harmony import */ var _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\CommentSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function CommentSection(props) {
  var _this = this;

  //load comments
  var comIds = Object(_hooks_comments__WEBPACK_IMPORTED_MODULE_2__["useCommentIds"])(props.open, props.id);
  var comments = Object(_hooks_comments__WEBPACK_IMPORTED_MODULE_2__["useComments"])(comIds);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      height = _useState[0],
      setHeight = _useState[1]; //required by css switch transition


  var animKey = undefined;
  var comObjects = comments.map(function (comment) {
    //comments not yet loaded
    if (comment === "not epic") {
      animKey = "wait";
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 20
        }
      }, "Loading...");
    } //COMMENTS!


    animKey = "cs";
    return __jsx(_Comment__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
      key: comment.entityId,
      comment: comment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    });
  }); //no comments :(

  if (!comments[0]) {
    animKey = "no";
    comObjects = [__jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 23
      }
    }, "There are no Comments")];
  }

  if (!props.open) {
    animKey = "hurensohn nein";
    comObjects = [__jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)];
  }

  function calculateHeight(el, appear) {
    var h = el.firstChild.offsetHeight;
    console.log(h);
    setHeight(h);
  }

  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["SwitchTransition"], {
    mode: "out-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["CSSTransition"], {
    timeout: 1000,
    classNames: _objectSpread({}, _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a),
    component: "div",
    onEnter: calculateHeight,
    key: animKey,
    style: {
      "--height": height
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.commentSectionWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, props.open ? __jsx("div", {
    className: _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.commentSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 38
    }
  }, comObjects) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null))));
}

/***/ })

})
//# sourceMappingURL=index.js.5d96e4e813b3ffaabb82.hot-update.js.map