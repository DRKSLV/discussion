webpackHotUpdate("static\\development\\pages\\markdown.js",{

/***/ "./components/layout/Document.js":
/*!***************************************!*\
  !*** ./components/layout/Document.js ***!
  \***************************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/document.module.sass */ "./style/document.module.sass");
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_document_module_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_it_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it-highlightjs */ "./node_modules/markdown-it-highlightjs/index.js");
/* harmony import */ var markdown_it_highlightjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it_highlightjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-it-footnote */ "./node_modules/markdown-it-footnote/index.js");
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_it_footnote__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! markdown-it-container */ "./node_modules/markdown-it-container/index.js");
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown_it_container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var markdown_it_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! markdown-it-anchor */ "./node_modules/markdown-it-anchor/dist/markdownItAnchor.mjs");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\layout\\Document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var markdown = markdown_it__WEBPACK_IMPORTED_MODULE_2___default()({
  linkify: true,
  typographer: true
}).use(markdown_it_highlightjs__WEBPACK_IMPORTED_MODULE_3___default.a, {}).use(markdown_it_footnote__WEBPACK_IMPORTED_MODULE_4___default.a).use(markdown_it_anchor__WEBPACK_IMPORTED_MODULE_6__["default"], {
  permalink: true,
  level: [1, 2, 3],
  permalinkClass: _style_document_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.anchor
}).use(markdown_it_container__WEBPACK_IMPORTED_MODULE_5___default.a, "triggered", {
  render: function render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return "<div class=\"".concat(_style_document_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.triggered, "\">\n");
    } else {
      // closing tag
      return '</div>\n';
    }
  }
}).use(markdown_it_container__WEBPACK_IMPORTED_MODULE_5___default.a, "spoiler", {
  render: function render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return "<span class=\"".concat(_style_document_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.spoiler2, "\">\n");
    } else {
      // closing tag
      return '</span>\n';
    }
  }
});
;
function Document(props) {
  var src = (Array.isArray(props.children) ? props.children[0] : props.children) || "";
  var render = {
    __html: markdown.render(src)
  };
  return __jsx("div", {
    className: _style_document_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.document + " " + _style_document_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.markdownModest,
    dangerouslySetInnerHTML: render,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  });
}

/***/ })

})
//# sourceMappingURL=markdown.js.8a9dde873c527a0cb683.hot-update.js.map