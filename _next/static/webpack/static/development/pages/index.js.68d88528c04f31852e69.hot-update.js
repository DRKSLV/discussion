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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/postForm.module.sass */ "./style/postForm.module.sass");
/* harmony import */ var _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\PostForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function PostForm(props) {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var activeUser = id.users[id.active];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  console.log(loading);

  function change(evt) {
    switch (evt.target.name) {
      case "title":
        return setTitle(evt.target.value);

      case "text":
        return setText(evt.target.value);
    }
  }

  function submit(evt) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            evt.preventDefault();
            setLoading(true);
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(later(1000));

          case 4:
            console.log("Title:", title);
            console.log("Text:", text); //Submit Form

            if (title.length >= 1 && title.length <= 150) {
              axios.post("/post/", {
                title: title,
                text: text
              }).then(function (response) {
                props.close(); //show post 

                props.rerender(response.data.entityId);
                setLoading(false);
              })["catch"](function (error) {
                console.log(error); //console.log(error.response.data);

                props.rerender();
                setLoading(false);
              });
            } else {
              setLoading(false);
              props.rerender();
              props.close();
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("form", {
    onSubmit: submit,
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.postForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.titleCounter,
    "data-invalid": title.length < 1 || title.length > 150,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    value: title,
    onChange: change,
    name: "title",
    placeholder: "The post's title",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, title.length, "/150")), __jsx("textarea", {
    name: "text",
    value: text,
    onChange: change,
    placeholder: "Go ahead, unleash your creative Genius!",
    rows: "4",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.postButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "submit",
    value: "Post!",
    "data-known": !Boolean(activeUser),
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 47
    }
  }, "Post!")), __jsx("div", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "as", __jsx("span", {
    "data-known": Boolean(activeUser),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, activeUser ? activeUser.username : "<UNKNOWN>"))));
}

function later(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

/***/ })

})
//# sourceMappingURL=index.js.68d88528c04f31852e69.hot-update.js.map