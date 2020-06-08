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
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/document.module.sass */ "./style/document.module.sass");
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_document_module_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/markdown */ "./helpers/markdown.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 //markdown styling



var md = Object(_helpers_markdown__WEBPACK_IMPORTED_MODULE_7__["default"])({
  anchor: false,
  embeds: true,
  supressHeadings: true
});
function Post(props) {
  var p = props.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentsOpen = _useState[0],
      setCommentsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); //console.log(bodyRef.current.clientHeight);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCollapsed(!commentsOpen && bodyRef.current.clientHeight > 350);
  }, [bodyRef, commentsOpen]);
  var expandTime;

  if (bodyRef.current) {
    expandTime = 0.71428571429 * bodyRef.current.clientHeight - 350;
  }

  return __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.postWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.post,
    onClick: function onClick() {
      return setCommentsOpen(!commentsOpen);
    },
    "data-expanded": commentsOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_2__["Vote"], {
    up: p.entity.upvotes,
    down: p.entity.downvotes,
    id: p.entity.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.comments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, (p.entity.comment.rgt - p.entity.comment.lft - 1) / 2, __jsx(_res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, p.title), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, "posted by ", p.author ? p.author.username : "❌DELETED❌"))), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.body,
    style: {
      maxHeight: !commentsOpen ? "350px" : bodyRef.current.clientHeight + 10,
      "--expandtime": expandTime + "ms",
      overflow: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: md(p.text)
    },
    className: _style_document_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.mdPost,
    ref: bodyRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }), collapsed && __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.expandDialog,
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 39
    }
  }, "Click to Expand")), __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], {
    time: p.createdAt,
    edit: p.updatedAt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }))), __jsx(_CommentSection__WEBPACK_IMPORTED_MODULE_5__["CommentSection"], {
    id: p.entity.id,
    open: commentsOpen,
    key: "cs" + p.entity.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.01fa87c8dc1a38cc8acb.hot-update.js.map