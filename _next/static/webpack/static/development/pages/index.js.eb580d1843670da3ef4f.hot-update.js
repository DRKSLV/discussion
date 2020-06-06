webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: PostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostForm", function() { return PostForm; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/postForm.module.sass */ "./style/postForm.module.sass");
/* harmony import */ var _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\PostForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PostForm(props) {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_2__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var activeUser = id.users[id.active];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      text = _useState2[0],
      setText = _useState2[1];

  function change(evt) {
    switch (evt.target.name) {
      case "title":
        return setTitle(evt.target.value);

      case "text":
        return setText(evt.target.value);
    }
  }

  function submit(evt) {
    console.log("Title:", title);
    console.log("Text:", text);
    evt.preventDefault();
  }

  return __jsx("form", {
    onSubmit: submit,
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.postForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    value: title,
    onChange: change,
    name: "title",
    placeholder: "The post's title",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("textarea", {
    name: "text",
    value: text,
    onChange: change,
    placeholder: "Go ahead, unleash your creative Genius!",
    rows: "4",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "submit",
    value: "Post",
    "data-known": !Boolean(activeUser),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "as", __jsx("span", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.author,
    "data-known": !Boolean(activeUser),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, activeUser ? activeUser.username : "<UNKNOWN>")));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/form.module.sass":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/postForm.module.sass":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style/postForm.module.sass ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".postForm_form__Oczvn {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n}\n.postForm_form__Oczvn button, .postForm_form__Oczvn input, .postForm_form__Oczvn textarea, .postForm_form__Oczvn select {\n  box-sizing: border-box;\n  max-width: 100%;\n  width: 100%;\n  border: 2px solid #535353;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #262626;\n  color: white;\n  font-size: inherit;\n}\n.postForm_form__Oczvn select {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  background: url(\"/res/img/dropdownarrow.svg\") no-repeat right #262626;\n  background-size: 20px;\n  background-position: calc(100% - 10px);\n  padding-right: 20px;\n}\n.postForm_form__Oczvn textarea {\n  resize: vertical;\n  rows: 10;\n}\n.postForm_form__Oczvn textarea, .postForm_form__Oczvn input[type=date], .postForm_form__Oczvn input[type=time] {\n  font-family: inherit;\n}\n.postForm_form__Oczvn input[type=checkbox] {\n  -webkit-appearance: none;\n  border-radius: 20px;\n  height: 20px;\n  width: 20px;\n}\n.postForm_form__Oczvn input[type=checkbox][required] {\n  background-color: #c71717;\n}\n.postForm_form__Oczvn input[type=checkbox]:checked {\n  background-color: #32d600;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);\n}\n.postForm_form__Oczvn input[type=checkbox]:active, .postForm_form__Oczvn input[type=checkbox]:checked:active {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n}\n.postForm_form__Oczvn input[type=submit], .postForm_form__Oczvn button {\n  width: 100%;\n}\n.postForm_postForm__eQJ-A {\n  flex-flow: row wrap;\n  margin-bottom: 30px;\n}\n\n.postForm_title__3evoo {\n  font-weight: bold;\n}\n\n.postForm_author__31Fn5 {\n  align-self: flex-end;\n  margin-left: 10px;\n}\n.postForm_author__31Fn5 a, .postForm_author__31Fn5 a:visited {\n  text-decoration: none;\n  margin-left: 10px;\n}\n.postForm_author__31Fn5[data-known=true] {\n  color: #32d600;\n  font-weight: bold;\n}\n.postForm_author__31Fn5[data-known=false] {\n  color: #ad0000;\n  font-style: italic;\n}", "",{"version":3,"sources":["form.module.sass","postForm.module.sass"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,iBAAA;EACA,WAAA;ACCJ;ADCI;EACI,sBAAA;EACA,eAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;EAEA,YAAA;EAEA,yBAAA;EACA,YAAA;EAEA,kBAAA;ACFR;ADII;EACI,qBAAA;OAAA,gBAAA;EACA,wBAAA;EACA,qEAAA;EACA,qBAAA;EACA,sCAAA;EACA,mBAAA;ACFR;ADII;EACI,gBAAA;EACA,QAAA;ACFR;ADII;EACI,oBAAA;ACFR;ADII;EACI,wBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;ACFR;ADIQ;EACI,yBAAA;ACFZ;ADGQ;EACI,yBAAA;EACA,yIAAA;ACDZ;ADGQ;EACI,+EAAA;ACDZ;ADGI;EACI,WAAA;ACDR;AA/CA;EACI,mBAAA;EACA,mBAAA;AAiDJ;;AA/CA;EACI,iBAAA;AAkDJ;;AAhDA;EACI,oBAAA;EACA,iBAAA;AAmDJ;AAlDI;EACI,qBAAA;EACA,iBAAA;AAoDR;AAlDI;EACI,cAAA;EACA,iBAAA;AAoDR;AAlDI;EACI,cAAA;EACA,kBAAA;AAoDR","file":"postForm.module.sass","sourcesContent":[".form \r\n    display: flex\r\n    flex-flow: column\r\n    width: 100%\r\n\r\n    button, input, textarea, select\r\n        box-sizing: border-box\r\n        max-width: 100%\r\n        width: 100%\r\n        border: 2px solid #535353\r\n        border-radius: 10px\r\n        \r\n        padding: 5px\r\n\r\n        background-color: #262626\r\n        color: white\r\n        \r\n        font-size: inherit         \r\n\r\n    select\r\n        appearance: none\r\n        -webkit-appearance: none\r\n        background: url(\"/res/img/dropdownarrow.svg\") no-repeat right #262626\r\n        background-size: 20px\r\n        background-position: calc(100% - 10px)\r\n        padding-right: 20px\r\n\r\n    textarea \r\n        resize: vertical\r\n        rows: 10\r\n\r\n    textarea, input[type=\"date\"], input[type=\"time\"]\r\n        font-family: inherit\r\n    \r\n    input[type=\"checkbox\"]\r\n        -webkit-appearance: none\r\n        border-radius: 20px\r\n        height: 20px\r\n        width: 20px\r\n\r\n        &[required]\r\n            background-color: #c71717\r\n        &:checked \r\n            background-color: rgb(50, 214, 0)\r\n            box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1)\r\n        \r\n        &:active, &:checked:active \r\n            box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1)\r\n\r\n    input[type=\"submit\"], button\r\n        width: 100%\r\n\r\n        background\r\n        //box-shadow: inset 0 0 black\r\n        //transition: box-shadow 500ms\r\n\r\n        &:hover\r\n            \r\n            //box-shadow: inset 0 0 1em yellow \r\n            ",".form {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n}\n.form button, .form input, .form textarea, .form select {\n  box-sizing: border-box;\n  max-width: 100%;\n  width: 100%;\n  border: 2px solid #535353;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #262626;\n  color: white;\n  font-size: inherit;\n}\n.form select {\n  appearance: none;\n  -webkit-appearance: none;\n  background: url(\"/res/img/dropdownarrow.svg\") no-repeat right #262626;\n  background-size: 20px;\n  background-position: calc(100% - 10px);\n  padding-right: 20px;\n}\n.form textarea {\n  resize: vertical;\n  rows: 10;\n}\n.form textarea, .form input[type=date], .form input[type=time] {\n  font-family: inherit;\n}\n.form input[type=checkbox] {\n  -webkit-appearance: none;\n  border-radius: 20px;\n  height: 20px;\n  width: 20px;\n}\n.form input[type=checkbox][required] {\n  background-color: #c71717;\n}\n.form input[type=checkbox]:checked {\n  background-color: #32d600;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);\n}\n.form input[type=checkbox]:active, .form input[type=checkbox]:checked:active {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n}\n.form input[type=submit], .form button {\n  width: 100%;\n}\n.postForm {\n  flex-flow: row wrap;\n  margin-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.author {\n  align-self: flex-end;\n  margin-left: 10px;\n}\n.author a, .author a:visited {\n  text-decoration: none;\n  margin-left: 10px;\n}\n.author[data-known=true] {\n  color: #32d600;\n  font-weight: bold;\n}\n.author[data-known=false] {\n  color: #ad0000;\n  font-style: italic;\n}"]}]);
// Exports
exports.locals = {
	"form": "postForm_form__Oczvn",
	"postForm": "postForm_postForm__eQJ-A",
	"title": "postForm_title__3evoo",
	"author": "postForm_author__31Fn5"
};
module.exports = exports;


/***/ }),

/***/ "./style/form.module.sass":
false,

/***/ "./style/postForm.module.sass":
/*!************************************!*\
  !*** ./style/postForm.module.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./postForm.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/postForm.module.sass");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./postForm.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/postForm.module.sass",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./postForm.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/postForm.module.sass");

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
//# sourceMappingURL=index.js.eb580d1843670da3ef4f.hot-update.js.map