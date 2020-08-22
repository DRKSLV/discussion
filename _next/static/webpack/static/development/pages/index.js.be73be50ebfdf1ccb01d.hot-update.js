webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./hooks/posts.js":
/*!************************!*\
  !*** ./hooks/posts.js ***!
  \************************/
/*! exports provided: usePostIds, usePosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostIds", function() { return usePostIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePosts", function() { return usePosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants/index.js");



function usePostIds(rerender) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_constants__WEBPACK_IMPORTED_MODULE_2__["apiUrl"] + "/post").then(function (res) {
      setPosts(res.data);
    })["catch"]();
  }, [rerender]);
  return posts;
}
function usePosts(ids) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      postArray = _useState2[0],
      setPostArray = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var promises = ids.map(function (id) {
      //FEtch
      return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_constants__WEBPACK_IMPORTED_MODULE_2__["apiUrl"] + "/post/" + id);
    });
    Promise.all(promises).then(function (e) {
      setPostArray(e.map(function (res) {
        return res.data;
      }));
    })["catch"]();
  }, [ids]);
  return postArray;
}

/***/ })

})
//# sourceMappingURL=index.js.be73be50ebfdf1ccb01d.hot-update.js.map