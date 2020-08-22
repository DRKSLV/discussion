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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res/svg/commentIcon.svg */ "./res/svg/commentIcon.svg");
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Timestamp */ "./components/Timestamp.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentSection */ "./components/CommentSection.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/document.module.sass */ "./style/document.module.sass");
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_document_module_sass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/markdown */ "./helpers/markdown.js");
/* harmony import */ var _layout_ContextMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/ContextMenu */ "./components/layout/ContextMenu.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 //markdown styling



var md = Object(_helpers_markdown__WEBPACK_IMPORTED_MODULE_9__["default"])({
  anchor: false,
  embeds: false,
  supressHeadings: true
});


var Post = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
  var p = props.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentsOpen = _useState[0],
      setCommentsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1]; //----show a context menu on rightclick


  var contextMenu = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_10__["MenuData"]);

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_11__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  function context(evt) {
    contextMenu.openMenu(evt.pageX, evt.pageY, [__jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
      text: "Edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
      text: "E",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
      text: "Delete",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    })]);
    evt.preventDefault();
  } //----Expand when clicked


  var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setCollapsed(!commentsOpen && bodyRef.current.clientHeight > 350);
  }, [bodyRef, commentsOpen]);
  var expandTime;

  if (bodyRef.current) {
    expandTime = 0.71428571429 * bodyRef.current.clientHeight - 350;
  }

  return __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.postWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.post,
    onClick: function onClick() {
      return setCommentsOpen(!commentsOpen);
    },
    onContextMenu: context,
    "data-expanded": commentsOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_3__["Vote"], {
    up: p.entity.upvotes,
    down: p.entity.downvotes,
    id: p.entity.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.comments,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, (p.entity.comment.rgt - p.entity.comment.lft - 1) / 2, __jsx(_res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, p.title), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.author,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, "posted by ", p.author ? p.author.username : "❌DELETED❌"))), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.body,
    style: {
      maxHeight: !commentsOpen ? "350px" : bodyRef.current.clientHeight + 10,
      "--expandtime": expandTime + "ms",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: md(p.text)
    },
    className: _style_document_module_sass__WEBPACK_IMPORTED_MODULE_8___default.a.mdPost,
    ref: bodyRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }), collapsed && __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.expandDialogWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 39
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.expandDialog,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 78
    }
  }, "Click to Expand"))), __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], {
    time: p.createdAt,
    edit: p.updatedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }))), __jsx(_CommentSection__WEBPACK_IMPORTED_MODULE_6__["CommentSection"], {
    id: p.entity.id,
    open: commentsOpen,
    key: "cs" + p.entity.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.1b2c40218ce7293e7672.hot-update.js.map