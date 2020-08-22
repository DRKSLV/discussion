webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: PostList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostList", function() { return PostList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/posts */ "./hooks/posts.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./components/Post.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\PostList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PostList(props) {
  var _this = this;

  var postIds = Object(_hooks_posts__WEBPACK_IMPORTED_MODULE_1__["usePostIds"])(props.rerender);
  var posts = Object(_hooks_posts__WEBPACK_IMPORTED_MODULE_1__["usePosts"])(postIds);
  var refs = {};
  var postObjects = posts.map(function (post) {
    return __jsx(_Post__WEBPACK_IMPORTED_MODULE_2__["Post"], {
      key: post.entity.id,
      post: post,
      ref: function ref(_ref) {
        return refs[post.entityId];
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (refs[props.rerender]) {
      refs[props.rerender].scrollTo({
        top: 50,
        left: 500,
        behavior: 'smooth'
      });
    }
  }, [postIds]); // <button onClick={() => {window.supersecrettrashusers()}}>Accs</button>

  return __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.postList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, postObjects);
}

/***/ })

})
//# sourceMappingURL=index.js.49cf3f3d92a4289f1abc.hot-update.js.map