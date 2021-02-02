webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timestamp */ "./components/Timestamp.js");
/* harmony import */ var _threadindent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./threadindent */ "./components/threadindent.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Comment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Comment(props) {
  var c = props.comment;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      deletion = _useState4[0],
      setDeletion = _useState4[1];

  var indents = [];

  for (var i = 0; i < c.level; i++) {
    indents.push(__jsx(_threadindent__WEBPACK_IMPORTED_MODULE_4__["Threadindent"], {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 22
      }
    }));
  }

  console.log(c);

  function context(evt) {}

  if (!c.author && c.text === "~d~" || c.text === "~r~") {
    return __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.commentWrap,
      onContextMenu: context,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.indents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, indents), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.comment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.indentVote,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx(_threadindent__WEBPACK_IMPORTED_MODULE_4__["Threadindent"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.author,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], {
      time: c.createdAt,
      edit: c.updatedAt,
      compact: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        color: "grey"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, "COMMENT ", c.text === "~d~" ? "❌DELETED❌" : "🔥REMOVED🔥")))));
  }

  return __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.commentWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.indents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, indents), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.comment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.indentVote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_2__["Vote"], {
    up: c.entity.upvotes,
    down: c.entity.downvotes,
    small: true,
    id: c.entity.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx(_threadindent__WEBPACK_IMPORTED_MODULE_4__["Threadindent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, "posted by ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 39
    }
  }, c.author ? c.author.username : "❌DELETED❌"), " ", __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], {
    time: c.createdAt,
    edit: c.updatedAt,
    compact: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 97
    }
  }))), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, c.text)))));
}

/***/ })

})
//# sourceMappingURL=index.js.91c6d698c28b3758d620.hot-update.js.map