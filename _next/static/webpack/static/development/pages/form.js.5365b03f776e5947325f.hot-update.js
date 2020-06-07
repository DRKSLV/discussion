webpackHotUpdate("static\\development\\pages\\form.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/dropdown.module.sass":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style/dropdown.module.sass ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".dropdown_dropdown__1-fOa {\n  position: absolute;\n  top: 97.25%;\n  right: 0;\n  background-color: #262626;\n  border-radius: 15px;\n  width: 300px;\n  overflow: hidden;\n  list-style: none;\n  color: white;\n  transition: height 300ms ease;\n  border: 2px solid white;\n  z-index: 3;\n}\n\n@media screen and (max-width: 600) {\n  .dropdown_dropdown__1-fOa {\n    overflow-y: scroll;\n    width: 1vw;\n    height: 100%;\n  }\n}\n.dropdown_menu__3yNpB {\n  list-style: none;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.dropdown_item__1QcUq {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  margin: 0.5rem;\n  border-radius: 1rem;\n  -webkit-filter: none;\n          filter: none;\n  transition: all 200ms ease-in-out;\n}\n.dropdown_item__1QcUq:hover {\n  background-color: #3a3a3a;\n}\n.dropdown_item__1QcUq .dropdown_itemText__334Be {\n  padding: 1rem;\n  flex: 1 1;\n}\n\n.dropdown_rightIcon__2Ugmm, .dropdown_leftIcon__Orx1g {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 5px;\n  transition: all 200ms ease-in-out;\n}\n.dropdown_rightIcon__2Ugmm svg, .dropdown_leftIcon__Orx1g svg {\n  width: 40%;\n  height: auto;\n  color: white;\n}\n.dropdown_rightIcon__2Ugmm svg[data-error=true], .dropdown_leftIcon__Orx1g svg[data-error=true] {\n  color: #ff3434;\n}\n\n.dropdown_leftIcon__Orx1g {\n  border-radius: 50%;\n  background-color: #535353;\n  float: left;\n}", "",{"version":3,"sources":["dropdown.module.sass"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,6BAAA;EAEA,uBAAA;EACA,UAAA;AAAJ;;AAEA;EACI;IACI,kBAAA;IACA,UAAA;IACA,YAAA;EACN;AACF;AACA;EACI,gBAAA;EACA,WAAA;EACA,UAAA;EACA,SAAA;AACJ;;AACA;EACI,aAAA;EACA,mBAAA;EAEA,qBAAA;EACA,cAAA;EACA,mBAAA;EACA,oBAAA;UAAA,YAAA;EACA,iCAAA;AACJ;AACI;EACI,yBAAA;AACR;AACI;EACI,aAAA;EACA,SAAA;AACR;;AACA;EACI,WAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,iCAAA;AACJ;AACI;EACI,UAAA;EACA,YAAA;EACA,YAAA;AACR;AAAQ;EACI,cAAA;AAEZ;;AAAA;EAEI,kBAAA;EACA,yBAAA;EACA,WAAA;AAEJ","file":"dropdown.module.sass","sourcesContent":[".dropdown\r\n    position: absolute\r\n    top: 97.25%\r\n    right: 0\r\n    background-color: #262626\r\n    border-radius: 15px\r\n    width: 300px\r\n    overflow: hidden\r\n    list-style: none\r\n    color: white\r\n    transition: height 300ms ease\r\n\r\n    border: 2px solid white\r\n    z-index: 3\r\n\r\n@media screen and (max-width: 600)\r\n    .dropdown\r\n        overflow-y: scroll\r\n        width: 1vw\r\n        height: 100%\r\n\r\n    \r\n.menu\r\n    list-style: none\r\n    width: 100%\r\n    padding: 0\r\n    margin: 0\r\n\r\n.item\r\n    display: flex\r\n    align-items: center\r\n\r\n    text-decoration: none\r\n    margin: .5rem\r\n    border-radius: 1rem\r\n    filter: none\r\n    transition: all 200ms ease-in-out\r\n\r\n    &:hover\r\n        background-color: #3a3a3a\r\n\r\n    .itemText\r\n        padding: 1rem\r\n        flex: 1\r\n\r\n.rightIcon\r\n    width: 40px\r\n    height: 40px\r\n\r\n    display: flex\r\n    align-items: center\r\n    justify-content: center\r\n    margin: 0 5px\r\n    transition: all 200ms ease-in-out\r\n\r\n    svg\r\n        width: 40%\r\n        height: auto\r\n        color: white\r\n        &[data-error=true]\r\n            color: #ff3434\r\n\r\n.leftIcon\r\n    @extend .rightIcon\r\n    border-radius: 50%\r\n    background-color: #535353\r\n    float: left\r\n\r\n\r\n\r\n    "]}]);
// Exports
exports.locals = {
	"dropdown": "dropdown_dropdown__1-fOa",
	"menu": "dropdown_menu__3yNpB",
	"item": "dropdown_item__1QcUq",
	"itemText": "dropdown_itemText__334Be",
	"rightIcon": "dropdown_rightIcon__2Ugmm",
	"leftIcon": "dropdown_leftIcon__Orx1g"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=form.js.5365b03f776e5947325f.hot-update.js.map