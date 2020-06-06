webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/svg/commentIcon.svg */ "./res/svg/commentIcon.svg");
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timestamp */ "./components/Timestamp.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CommentSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentSection */ "./components/CommentSection.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Post(props) {
  var p = props.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentsOpen = _useState[0],
      setCommentsOpen = _useState[1];

  return __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.postWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.post,
    onClick: function onClick() {
      return setCommentsOpen(!commentsOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_2__["Vote"], {
    up: p.entity.upvotes,
    down: p.entity.downvotes,
    id: p.entity.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.comments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, (p.entity.comment.rgt - p.entity.comment.lft - 1) / 2, __jsx(_res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, p.title), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, "posted by ", p.author ? p.author.username : "❌DELETED❌"))), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, p.text)), __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], {
    time: p.createdAt,
    edit: p.updatedAt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))), __jsx(_CommentSection__WEBPACK_IMPORTED_MODULE_5__["CommentSection"], {
    id: p.entity.id,
    open: commentsOpen,
    key: "cs" + p.entity.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.f2b2904f3067c7908d1c.hot-update.js.map