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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timestamp */ "./components/Timestamp.js");
/* harmony import */ var _threadindent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./threadindent */ "./components/threadindent.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Comment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Comment(props) {
  var c = props.comment;
  var indents = [];

  for (var i = 0; i < c.level; i++) {
    indents.push(__jsx(_threadindent__WEBPACK_IMPORTED_MODULE_3__["Threadindent"], {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 22
      }
    }));
  }

  console.log(c);

  if (!c.author && c.text === "~d~") {
    return __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.commentWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.indents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, indents), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.comment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.indentVote,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx(_threadindent__WEBPACK_IMPORTED_MODULE_3__["Threadindent"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.author,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_2__["Timestamp"], {
      time: c.createdAt,
      edit: c.updatedAt,
      compact: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, "COMMENT \u274CDELETED\u274C")))));
  }

  return __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.commentWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.indents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, indents), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.comment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.indentVote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_1__["Vote"], {
    up: c.entity.upvotes,
    down: c.entity.downvotes,
    small: true,
    id: c.entity.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx(_threadindent__WEBPACK_IMPORTED_MODULE_3__["Threadindent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "posted by ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 39
    }
  }, c.author ? c.author.username : "❌DELETED❌"), " ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 97
    }
  }, "\xB7"), " ", __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_2__["Timestamp"], {
    time: c.createdAt,
    edit: c.updatedAt,
    compact: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 106
    }
  }))), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, c.text)))));
}

/***/ })

})
//# sourceMappingURL=index.js.6b850421263231efbb2e.hot-update.js.map