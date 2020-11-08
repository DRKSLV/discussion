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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ "./hooks/identity.js");





var emptyObj = {};
var currentConfig = {};
function usePostIds(rerender) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyObj;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_constants__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/post?deleted=".concat(config.del || "exclude", "&limit=").concat(config.lim || 10, "&offset=").concat(config.off || 0, "&order=").concat(config.order || "time", "&orderDir=").concat(config.oDir || "DESC")).then(function (res) {
      setPosts(res.data);
    })["catch"]();
  }, [rerender, config]);
  return [posts];
}
function usePosts(ids) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      postArray = _useState2[0],
      setPostArray = _useState2[1];

  var _useIdentity = Object(_identity__WEBPACK_IMPORTED_MODULE_4__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var prev = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  prev.current = {
    ac: -1,
    ids: ids
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("ids", ids);
    console.log("ACTIVE_> ", id.active);
    console.log(JSON.stringify(prev.current.ids));
    console.log(JSON.stringify(ids));

    if (id.active === prev.current.ac && JSON.stringify(prev.current.ids) === JSON.stringify(ids)) {
      console.log("DENIED");
      return;
    }

    prev.current = {
      ac: id.active,
      ids: ids
    };
    console.log("lmao");
    var ax = axios__WEBPACK_IMPORTED_MODULE_2___default.a;
    if (id.users[id.active]) ax = axios;
    var promises = ids.map(function (id) {
      //FEtch
      return ax.get(_constants__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/post/" + id);
    });
    Promise.all(promises).then(function (e) {
      setPostArray(e.map(function (res) {
        return res.data;
      }));
    })["catch"](function (e) {
      console.log(e);
      setPostArray(["ohjemine"]);
    });
  }, [ids, id, axios, prev]); //console.log(configChange);

  console.log(postArray);
  return postArray;
}

/***/ })

})
//# sourceMappingURL=index.js.748b8e26d4892b267c7b.hot-update.js.map