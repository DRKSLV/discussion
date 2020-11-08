webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Vote.js":
/*!****************************!*\
  !*** ./components/Vote.js ***!
  \****************************/
/*! exports provided: Vote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vote", function() { return Vote; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_svg_upvote5_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res/svg/upvote5.svg */ "./res/svg/upvote5.svg");
/* harmony import */ var _res_svg_downvote5_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../res/svg/downvote5.svg */ "./res/svg/downvote5.svg");
/* harmony import */ var _threadindent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./threadindent */ "./components/threadindent.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Vote.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import axios from "axios";







function Vote(props) {
  //Props
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.up - props.down),
      voteCount = _useState[0],
      setVoteCount = _useState[1];

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_6__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var initial = 0;

  if (props.my) {
    initial = props.my === true ? 1 : -1;
  } //Hooks


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initial),
      vote = _useState2[0],
      setVote = _useState2[1];

  console.log(vote);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setVote(initial);
  }, [initial]); //Api

  function request(val) {
    console.log("vote commited");
    var lol = "true";
    if (val === 0) lol = "null";
    if (val === -1) lol = "false";
    axios.post("/entity/".concat(props.id, "/vote"), {
      value: lol
    }).then(function (response) {
      setVoteCount(parseVotes(response.data));
    })["catch"](function (error) {
      console.log(error); //console.log(error.response.data);
    });
  } //events


  function click(val) {
    console.log("clicked");

    if (props.dummy) {
      return;
    }

    request(val);
    setVote(function (prev) {
      return prev !== val ? val : 0;
    });
  }

  function parseVotes(votes) {
    if (props.dummy) {
      return 0;
    }

    return votes[0] ? (votes[0].upvotes || 0) - (votes[0].downvotes || 0) : 0; // votes - downvotes
  }

  return __jsx("div", {
    className: props.small ? _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.voteSmall : _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.vote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_res_svg_upvote5_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick(e) {
      click(1);
      e.stopPropagation();
    },
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.upvote,
    "data-active": vote === 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 18
    }
  }, props.dummy ? "N/A" : voteCount)), __jsx(_res_svg_upvote5_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick(e) {
      click(-1);
      e.stopPropagation();
    },
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.downvote,
    "data-active": vote === -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }));
} // stroke="#ff004f"
//fill="#f60" stroke="rgb(31, 152, 229)"
// fill="#f60"

/***/ })

})
//# sourceMappingURL=index.js.85532c007e1cfe8e0da7.hot-update.js.map