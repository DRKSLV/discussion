webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: PostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostForm", function() { return PostForm; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/postForm.module.sass */ "./style/postForm.module.sass");
/* harmony import */ var _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\PostForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PostForm(props) {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_2__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var activeUser = id.users[id.active];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      text = _useState2[0],
      setText = _useState2[1];

  function change(evt) {
    switch (evt.target.name) {
      case "title":
        return setTitle(evt.target.value);

      case "text":
        return setText(evt.target.value);
    }
  }

  function submit(evt) {
    console.log("Title:", title);
    console.log("Text:", text);
    evt.preventDefault();
  }

  return __jsx("form", {
    onSubmit: submit,
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.postForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    value: title,
    onChange: change,
    name: "title",
    placeholder: "The post's title",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("textarea", {
    name: "text",
    value: text,
    onChange: change,
    placeholder: "Go ahead, unleash your creative Genius!",
    rows: "4",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.postButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "submit",
    value: "Post",
    "data-known": !Boolean(activeUser),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 47
    }
  })), "as", __jsx("span", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.author,
    "data-known": Boolean(activeUser),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, activeUser ? activeUser.username : "<UNKNOWN>")));
}

/***/ })

})
//# sourceMappingURL=index.js.50c578aaf543bb6b0d34.hot-update.js.map