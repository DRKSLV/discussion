webpackHotUpdate("static\\development\\pages\\embed\\post.js",{

/***/ "./pages/embed/post.js":
/*!*****************************!*\
  !*** ./pages/embed/post.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/Container */ "./components/layout/Container.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PostList */ "./components/PostList.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _components_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/ContextMenu */ "./components/layout/ContextMenu.js");
/* harmony import */ var _components_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_posts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/posts */ "./hooks/posts.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Post */ "./components/Post.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\pages\\embed\\post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var array = [];
function Home() {
  var postObj = __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }
  }, "\uD83D\uDD04 loading ...");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      parsed = _useState[0],
      setParsed = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("setting parsed");
    var localParse = Object(querystring__WEBPACK_IMPORTED_MODULE_7__["parse"])(location.search.substr(1));
    setParsed(localParse);
    if (localParse.id) array.push(localParse.id);
  }, []);
  var posts = Object(_hooks_posts__WEBPACK_IMPORTED_MODULE_8__["usePosts"])(array);

  if (!parsed || !parsed.id) {
    if (parsed && !parsed.id) postObj = __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 23
      }
    }, "\u26A0 please specify ?id=POST_ID_HERE");
  } else {
    if (posts[0]) {
      if (posts[0] === "ohjemine") postObj = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 53
        }
      }, "Error"), __jsx("p", {
        style: {
          color: "rgb(255, 0, 143)"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 67
        }
      }, "Sowwy >_<"));else postObj = __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_9__["Post"], {
        post: posts[0],
        embed: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 27
        }
      });
    }

    if (posts[0] === null) postObj = __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 40
      }
    }, "\u26D4 post doesn't exist");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Civil Discussion")), __jsx(_hooks_identity__WEBPACK_IMPORTED_MODULE_4__["IdentityProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_components_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_5__["ContextMenu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.postEmbed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, postObj), __jsx("a", {
    href: "https://drkslv.github.io/discussion",
    target: "_blank",
    style: {
      position: "absolute",
      bottom: "0px",
      right: "0px",
      display: "block",
      textDecoration: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx(_components_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_6__["EyeOfJudgement"], {
    size: 40,
    grow: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }))))));
}

/***/ })

})
//# sourceMappingURL=post.js.1c492b55c395496b13c1.hot-update.js.map