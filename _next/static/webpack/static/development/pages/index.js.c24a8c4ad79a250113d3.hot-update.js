webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AccountPicker.js":
/*!*************************************!*\
  !*** ./components/AccountPicker.js ***!
  \*************************************/
/*! exports provided: AccountPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPicker", function() { return AccountPicker; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _layout_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/Modal */ "./components/layout/Modal.js");
/* harmony import */ var _style_form_module_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/form.module.sass */ "./style/form.module.sass");
/* harmony import */ var _style_form_module_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_form_module_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_style_module_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/style.module.sass */ "./style/style.module.sass");
/* harmony import */ var _style_style_module_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_style_module_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\AccountPicker.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function AccountPicker() {
  var _this = this;

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_2__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function _onClick(idx) {
    if (id.active === idx) return id.setActive(null);
    if (id.users[idx].error) return;
    id.setActive(idx);
  }

  function icon(idx) {
    if (id.users[idx].error) {
      switch (id.users[idx].error.icon) {
        case "bolt":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaBolt"], {
            "data-error": true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 28
            }
          });

        case "time":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaClock"], {
            "data-error": true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 28
            }
          });

        case "death":
          return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaSkull"], {
            "data-error": true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 28
            }
          });
      }
    } else if (idx === id.active) {
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaCheck"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 20
        }
      });
    }
  }

  function addAccountClick(evt) {
    modalRef.current.toggleModal();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, id.users.map(function (user, idx) {
    return __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
      text: user.username,
      rightIcon: icon(idx),
      key: idx,
      onClick: function onClick() {
        return _onClick(idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    });
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 33
      }
    }),
    text: "Add Acount",
    onClick: addAccountClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_layout_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    ref: modalRef,
    className: _style_form_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.accountFormWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_8__["EyeOnMount"], {
    size: 150,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Login"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Ok listen i am working on this", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 46
    }
  }), " Give me a break"), __jsx("p", {
    style: {
      fontSize: "2em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Did you see how cool the eye moved? ", __jsx("span", {
    className: _style_style_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.fabulous,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 78
    }
  }, "Fabulous!"))));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/style.module.sass":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style/style.module.sass ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".style_card__2fVTx, .style_animCard__3fHY9 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  background: #353535;\n  color: #fff;\n  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  transition: all 250ms ease-in-out;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.style_animCard__3fHY9 {\n  -webkit-animation: style_cardEntrance__3q-tY 700ms ease-out;\n          animation: style_cardEntrance__3q-tY 700ms ease-out;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n  will-change: transform;\n}\n\n.style_animCard__3fHY9[data-expanded=false]:hover {\n  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;\n  transform: translateY(-3px) scale(1.01);\n  /*border-radius: 30px*/\n  /*filter: brightness(105%)*/\n}\n\n.style_animCard__3fHY9[data-expanded=true] {\n  background: #333333;\n  transform: translateY(-3px);\n  transition: none;\n}\n\n.style_entering__lX-Wh {\n  -webkit-animation: style_cardboardEntrance__1ibDH 300ms ease-out;\n          animation: style_cardboardEntrance__1ibDH 300ms ease-out;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n\n@media screen and (max-width: 600px) {\n  .style_animCard__3fHY9[data-expanded=false]:hover {\n    transform: translateY(-3px) scale(1.01);\n  }\n}\n@-webkit-keyframes style_cardboardEntrance__1ibDH {\n  from {\n    opacity: 0;\n    transform: scaleY(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@keyframes style_cardboardEntrance__1ibDH {\n  from {\n    opacity: 0;\n    transform: scaleY(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@-webkit-keyframes style_cardEntrance__3q-tY {\n  from {\n    opacity: 0;\n    transform: scale(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@keyframes style_cardEntrance__3q-tY {\n  from {\n    opacity: 0;\n    transform: scale(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n.style_fabulous__takSU {\n  font-weight: bolder;\n  align-self: center;\n  line-height: 1.3em;\n  background-image: linear-gradient(135deg, #ff00fe, #00f3ff);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: #00000000;\n}", "",{"version":3,"sources":["style.module.sass"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,6FAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,gBAAA;EAEA,sBAAA;EACA,2BAAA;EACA,4BAAA;AAAJ;;AAEA;EAEI,2DAAA;UAAA,mDAAA;EACA,sCAAA;UAAA,8BAAA;EACA,sBAAA;AAAJ;;AAEA;EACI,0FAAA;EACA,uCAAA;EACA,sBAAA;EACA,2BAAA;AACJ;;AACA;EACI,mBAAA;EACA,2BAAA;EACA,gBAAA;AAEJ;;AAAA;EACI,gEAAA;UAAA,wDAAA;EACA,sCAAA;UAAA,8BAAA;AAGJ;;AADA;EACI;IACI,uCAAA;EAIN;AACF;AAHA;EACI;IACI,UAAA;IACA,sBAAA;IACA,kCAAA;YAAA,0BAAA;EAKN;EAHE;IACI,UAAA;IACA,oBAAA;IACA,gCAAA;YAAA,wBAAA;EAKN;AACF;AAfA;EACI;IACI,UAAA;IACA,sBAAA;IACA,kCAAA;YAAA,0BAAA;EAKN;EAHE;IACI,UAAA;IACA,oBAAA;IACA,gCAAA;YAAA,wBAAA;EAKN;AACF;AAJA;EACI;IACI,UAAA;IACA,qBAAA;IACA,kCAAA;YAAA,0BAAA;EAMN;EAJE;IACI,UAAA;IACA,mBAAA;IACA,gCAAA;YAAA,wBAAA;EAMN;AACF;AAhBA;EACI;IACI,UAAA;IACA,qBAAA;IACA,kCAAA;YAAA,0BAAA;EAMN;EAJE;IACI,UAAA;IACA,mBAAA;IACA,gCAAA;YAAA,wBAAA;EAMN;AACF;AALA;EACI,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,2DAAA;EACA,6BAAA;UAAA,qBAAA;EACA,oCAAA;EACA,gBAAA;AAOJ","file":"style.module.sass","sourcesContent":[".card \r\n    display: flex\r\n    flex-direction: row\r\n    justify-content: center\r\n    align-items: flex-start\r\n    background: #353535\r\n    color: #fff\r\n    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem\r\n    height: 100%\r\n    width: 100%\r\n    border-radius: 4px\r\n    transition: all 250ms ease-in-out\r\n    overflow: hidden\r\n\r\n    background-size: cover\r\n    background-position: center\r\n    background-repeat: no-repeat\r\n\r\n.animCard\r\n    @extend .card\r\n    animation: cardEntrance 700ms ease-out\r\n    animation-fill-mode: backwards\r\n    will-change: transform\r\n\r\n.animCard[data-expanded=false]:hover \r\n    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em\r\n    transform: translateY(-3px) scale(1.01)\r\n    /*border-radius: 30px*/\r\n    /*filter: brightness(105%)*/\r\n\r\n.animCard[data-expanded=true]\r\n    background: #333333\r\n    transform: translateY(-3px)\r\n    transition: none\r\n\r\n.entering\r\n    animation: cardboardEntrance 300ms ease-out\r\n    animation-fill-mode: backwards    \r\n\r\n@media screen and (max-width: 600px) \r\n    .animCard[data-expanded=false]:hover \r\n        transform: translateY(-3px) scale(1.01)\r\n \r\n@keyframes cardboardEntrance \r\n    from \r\n        opacity: 0\r\n        transform: scaleY(0.3)\r\n        filter: hue-rotate(180deg)\r\n  \r\n    to \r\n        opacity: 1\r\n        transform: scaleY(1)\r\n        filter: hue-rotate(0deg)\r\n\r\n@keyframes cardEntrance \r\n    from \r\n        opacity: 0\r\n        transform: scale(0.3)\r\n        filter: hue-rotate(180deg)\r\n  \r\n    to \r\n        opacity: 1\r\n        transform: scale(1)\r\n        filter: hue-rotate(0deg)\r\n\r\n.fabulous\r\n    font-weight: bolder\r\n    align-self: center\r\n    line-height: 1.3em\r\n    background-image: linear-gradient(135deg,#ff00fe, #00f3ff)\r\n    background-clip: text\r\n    -webkit-text-fill-color: transparent\r\n    color: #00000000"]}]);
// Exports
exports.locals = {
	"card": "style_card__2fVTx",
	"animCard": "style_animCard__3fHY9",
	"cardEntrance": "style_cardEntrance__3q-tY",
	"entering": "style_entering__lX-Wh",
	"cardboardEntrance": "style_cardboardEntrance__1ibDH",
	"fabulous": "style_fabulous__takSU"
};
module.exports = exports;


/***/ }),

/***/ "./style/style.module.sass":
/*!*********************************!*\
  !*** ./style/style.module.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/style.module.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/style.module.sass",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/style.module.sass");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              if (!isEqualLocals(oldLocals, newContent.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = newContent.locals;

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=index.js.c24a8c4ad79a250113d3.hot-update.js.map