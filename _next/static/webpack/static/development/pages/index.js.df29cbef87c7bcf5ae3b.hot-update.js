webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/post.module.sass":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style/post.module.sass ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".post_card__2hKeS, .post_postForm__2hpth, .post_animCard__2Fp_O, .post_post__3HKSh {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  background: #353535;\n  color: #fff;\n  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  transition: all 250ms ease-in-out;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.post_animCard__2Fp_O, .post_post__3HKSh {\n  -webkit-animation: post_cardEntrance__3NjVZ 700ms ease-out;\n          animation: post_cardEntrance__3NjVZ 700ms ease-out;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n  will-change: transform;\n}\n\n.post_animCard__2Fp_O[data-expanded=false]:hover, [data-expanded=false].post_post__3HKSh:hover {\n  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;\n  transform: translateY(-3px) scale(1.01);\n  /*border-radius: 30px*/\n  /*filter: brightness(105%)*/\n}\n\n.post_animCard__2Fp_O[data-expanded=true], [data-expanded=true].post_post__3HKSh {\n  background: #333333;\n  transform: translateY(-3px);\n  transition: none;\n}\n\n.post_entering__23CCS {\n  -webkit-animation: post_cardboardEntrance__XT7Sn 300ms ease-out;\n          animation: post_cardboardEntrance__XT7Sn 300ms ease-out;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n\n@media screen and (max-width: 600px) {\n  .post_animCard__2Fp_O[data-expanded=false]:hover, [data-expanded=false].post_post__3HKSh:hover {\n    transform: translateY(-3px) scale(1.01);\n  }\n}\n@-webkit-keyframes post_cardboardEntrance__XT7Sn {\n  from {\n    opacity: 0;\n    transform: scaleY(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@keyframes post_cardboardEntrance__XT7Sn {\n  from {\n    opacity: 0;\n    transform: scaleY(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@-webkit-keyframes post_cardEntrance__3NjVZ {\n  from {\n    opacity: 0;\n    transform: scale(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n@keyframes post_cardEntrance__3NjVZ {\n  from {\n    opacity: 0;\n    transform: scale(0.3);\n    -webkit-filter: hue-rotate(180deg);\n            filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n    -webkit-filter: hue-rotate(0deg);\n            filter: hue-rotate(0deg);\n  }\n}\n.post_body__2sPi7 {\n  transition: max-height var(--expandtime, 500ms);\n  overflow: hidden;\n}\n.post_body__2sPi7 > p {\n  margin: 0rem;\n}\n.post_body__2sPi7 p {\n  margin-top: 0;\n}\n\n.post_postT__4aoKO .post_content__1G1Ie, .post_postForm__2hpth .post_content__1G1Ie, .post_post__3HKSh .post_content__1G1Ie {\n  flex: 1 1;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_title__4CteQ, .post_postForm__2hpth .post_content__1G1Ie .post_title__4CteQ, .post_post__3HKSh .post_content__1G1Ie .post_title__4CteQ {\n  font-size: 1.5em;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_body__2sPi7, .post_postForm__2hpth .post_content__1G1Ie .post_body__2sPi7, .post_post__3HKSh .post_content__1G1Ie .post_body__2sPi7 {\n  font-size: 1em;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_body__2sPi7 p, .post_postForm__2hpth .post_content__1G1Ie .post_body__2sPi7 p, .post_post__3HKSh .post_content__1G1Ie .post_body__2sPi7 p {\n  margin-bottom: 10px;\n}\n.post_postT__4aoKO .post_content__1G1Ie p, .post_postForm__2hpth .post_content__1G1Ie p, .post_post__3HKSh .post_content__1G1Ie p {\n  margin: 0;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_author__3gKZp, .post_postForm__2hpth .post_content__1G1Ie .post_author__3gKZp, .post_post__3HKSh .post_content__1G1Ie .post_author__3gKZp {\n  color: #888;\n  display: block;\n  margin-top: 0rem;\n  margin-bottom: 0.75rem;\n  font-size: 0.48em;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_comments__ZzTEU, .post_postForm__2hpth .post_content__1G1Ie .post_comments__ZzTEU, .post_post__3HKSh .post_content__1G1Ie .post_comments__ZzTEU {\n  float: right;\n  padding: 10px;\n  margin-right: 5px;\n  color: #888;\n  font-size: 1rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.post_postT__4aoKO .post_content__1G1Ie .post_comments__ZzTEU svg, .post_postForm__2hpth .post_content__1G1Ie .post_comments__ZzTEU svg, .post_post__3HKSh .post_content__1G1Ie .post_comments__ZzTEU svg {\n  margin-left: 5px;\n  width: 25px;\n  height: 25px;\n}\n\n.post_postWrapper__1jJJG {\n  margin-bottom: 1em;\n}\n\n.post_postList__3iez6 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 0% 10%;\n}\n\n.post_comment__did10 {\n  position: relative;\n  margin-top: 0.5rem;\n  flex: 1 1;\n  max-width: 100%;\n}\n.post_comment__did10 .post_content__1G1Ie {\n  margin-bottom: 1rem;\n}\n.post_comment__did10 .post_content__1G1Ie .post_title__4CteQ {\n  font-size: 1.5em;\n}\n.post_comment__did10 .post_content__1G1Ie .post_body__2sPi7 {\n  font-size: 1em;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.post_comment__did10 .post_content__1G1Ie p {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  margin: 0rem;\n}\n.post_comment__did10 .post_content__1G1Ie .post_author__3gKZp {\n  color: #888;\n  display: block;\n  margin-top: 0rem;\n  margin-bottom: 0.25rem;\n  font-size: 0.75em;\n}\n.post_comment__did10 .post_content__1G1Ie .post_author__3gKZp .post_timestamp__1o7Bq {\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.post_commentWrap__Cef8r {\n  display: flex;\n  max-width: 100%;\n}\n.post_commentWrap__Cef8r .post_indents__79RwN {\n  display: block;\n  white-space: nowrap;\n}\n\n.post_threadindent__1Cfcl {\n  display: inline-block;\n  width: 5px;\n  height: 110%;\n  flex: 1 1;\n  position: relative;\n  top: 5%;\n  margin: 0px 0.5555em;\n  border-radius: 5px;\n  background-color: #353535;\n}\n\n.post_indentVote__N7vcj {\n  height: 106%;\n  position: relative;\n  top: 5%;\n  float: left;\n  display: flex;\n  flex-direction: column;\n}\n.post_indentVote__N7vcj .post_threadindent__1Cfcl {\n  flex: 1 1;\n}\n\n.post_vote__2IS4Y, .post_voteSmall__12ULw {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  font-size: 1rem;\n  color: #888;\n  margin: 20px;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n.post_vote__2IS4Y svg, .post_voteSmall__12ULw svg {\n  width: 25px;\n  height: auto;\n  transition: all 250ms ease-in-out;\n}\n.post_vote__2IS4Y svg::-moz-selection, .post_voteSmall__12ULw svg::-moz-selection {\n  background-color: rgba(0, 255, 255, 0);\n}\n.post_vote__2IS4Y svg::selection, .post_voteSmall__12ULw svg::selection {\n  background-color: rgba(0, 255, 255, 0);\n}\n.post_vote__2IS4Y .post_upvote__gzCG1, .post_voteSmall__12ULw .post_upvote__gzCG1 {\n  color: #848484;\n}\n.post_vote__2IS4Y .post_upvote__gzCG1:hover, .post_voteSmall__12ULw .post_upvote__gzCG1:hover {\n  transform: translateY(-0.5rem);\n}\n.post_vote__2IS4Y .post_upvote__gzCG1[data-active=true], .post_voteSmall__12ULw .post_upvote__gzCG1[data-active=true], .post_vote__2IS4Y .post_upvote__gzCG1:hover, .post_voteSmall__12ULw .post_upvote__gzCG1:hover {\n  color: #ff004f;\n}\n.post_vote__2IS4Y .post_downvote__1deOJ, .post_voteSmall__12ULw .post_downvote__1deOJ {\n  color: #848484;\n  transform: rotate(180deg);\n}\n.post_vote__2IS4Y .post_downvote__1deOJ:hover, .post_voteSmall__12ULw .post_downvote__1deOJ:hover {\n  transform: rotate(180deg) translateY(-0.5rem);\n}\n.post_vote__2IS4Y .post_downvote__1deOJ[data-active=true], .post_voteSmall__12ULw .post_downvote__1deOJ[data-active=true], .post_vote__2IS4Y .post_downvote__1deOJ:hover, .post_voteSmall__12ULw .post_downvote__1deOJ:hover {\n  color: #1f98e5;\n}\n\n.post_voteSmall__12ULw {\n  margin: 0.2777em;\n  margin-right: 15px;\n  align-self: stretch;\n}\n.post_voteSmall__12ULw div {\n  max-width: 1rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-align: center;\n}\n.post_voteSmall__12ULw span {\n  display: inline;\n  text-align: center;\n  position: relative;\n}\n.post_voteSmall__12ULw svg {\n  width: 15px;\n  height: auto;\n  flex-shrink: 0;\n}\n.post_voteSmall__12ULw .post_upvote__gzCG1:hover {\n  transform: translateY(-0.25rem);\n}\n.post_voteSmall__12ULw .post_downvote__1deOJ:hover {\n  transform: rotate(180deg) translateY(-0.25rem);\n}\n.post_voteSmall__12ULw .post_threadindent__1Cfcl {\n  display: inline-block;\n  float: none;\n  flex: 1 1;\n}\n\n.post_timestamp__1o7Bq {\n  color: #888;\n  margin-top: 0rem;\n  font-size: 0.75em;\n}\n\n.post_expandDialog__32EtC {\n  position: absolute;\n  bottom: 2em;\n  border-radius: 1em;\n  padding: 0.5em;\n  background-color: #848484e8;\n  color: white;\n  text-align: center;\n  margin: 0 2%;\n}\n\n@media screen and (max-width: 600px) {\n  .post_postList__3iez6 {\n    padding: 0% 1.5%;\n    font-size: 14px;\n  }\n}", "",{"version":3,"sources":["style.module.sass","post.module.sass"],"names":[],"mappings":"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","file":"post.module.sass","sourcesContent":[".card \r\n    display: flex\r\n    flex-direction: row\r\n    justify-content: center\r\n    align-items: flex-start\r\n    background: #353535\r\n    color: #fff\r\n    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem\r\n    height: 100%\r\n    width: 100%\r\n    border-radius: 4px\r\n    transition: all 250ms ease-in-out\r\n    overflow: hidden\r\n\r\n    background-size: cover\r\n    background-position: center\r\n    background-repeat: no-repeat\r\n\r\n.animCard\r\n    @extend .card\r\n    animation: cardEntrance 700ms ease-out\r\n    animation-fill-mode: backwards\r\n    will-change: transform\r\n\r\n.animCard[data-expanded=false]:hover \r\n    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em\r\n    transform: translateY(-3px) scale(1.01)\r\n    /*border-radius: 30px*/\r\n    /*filter: brightness(105%)*/\r\n\r\n.animCard[data-expanded=true]\r\n    background: #333333\r\n    transform: translateY(-3px)\r\n    transition: none\r\n\r\n.entering\r\n    animation: cardboardEntrance 300ms ease-out\r\n    animation-fill-mode: backwards    \r\n\r\n@media screen and (max-width: 600px) \r\n    .animCard[data-expanded=false]:hover \r\n        transform: translateY(-3px) scale(1.01)\r\n \r\n@keyframes cardboardEntrance \r\n    from \r\n        opacity: 0\r\n        transform: scaleY(0.3)\r\n        filter: hue-rotate(180deg)\r\n  \r\n    to \r\n        opacity: 1\r\n        transform: scaleY(1)\r\n        filter: hue-rotate(0deg)\r\n\r\n@keyframes cardEntrance \r\n    from \r\n        opacity: 0\r\n        transform: scale(0.3)\r\n        filter: hue-rotate(180deg)\r\n  \r\n    to \r\n        opacity: 1\r\n        transform: scale(1)\r\n        filter: hue-rotate(0deg)",".card, .postForm, .animCard, .post {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  background: #353535;\n  color: #fff;\n  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  transition: all 250ms ease-in-out;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.animCard, .post {\n  animation: cardEntrance 700ms ease-out;\n  animation-fill-mode: backwards;\n  will-change: transform;\n}\n\n.animCard[data-expanded=false]:hover, [data-expanded=false].post:hover {\n  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;\n  transform: translateY(-3px) scale(1.01);\n  /*border-radius: 30px*/\n  /*filter: brightness(105%)*/\n}\n\n.animCard[data-expanded=true], [data-expanded=true].post {\n  background: #333333;\n  transform: translateY(-3px);\n  transition: none;\n}\n\n.entering {\n  animation: cardboardEntrance 300ms ease-out;\n  animation-fill-mode: backwards;\n}\n\n@media screen and (max-width: 600px) {\n  .animCard[data-expanded=false]:hover, [data-expanded=false].post:hover {\n    transform: translateY(-3px) scale(1.01);\n  }\n}\n@keyframes cardboardEntrance {\n  from {\n    opacity: 0;\n    transform: scaleY(0.3);\n    filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scaleY(1);\n    filter: hue-rotate(0deg);\n  }\n}\n@keyframes cardEntrance {\n  from {\n    opacity: 0;\n    transform: scale(0.3);\n    filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n    filter: hue-rotate(0deg);\n  }\n}\n.body {\n  transition: max-height var(--expandtime, 500ms);\n  overflow: hidden;\n}\n.body > p {\n  margin: 0rem;\n}\n.body p {\n  margin-top: 0;\n}\n\n.postT .content, .postForm .content, .post .content {\n  flex: 1;\n}\n.postT .content .title, .postForm .content .title, .post .content .title {\n  font-size: 1.5em;\n}\n.postT .content .body, .postForm .content .body, .post .content .body {\n  font-size: 1em;\n}\n.postT .content .body p, .postForm .content .body p, .post .content .body p {\n  margin-bottom: 10px;\n}\n.postT .content p, .postForm .content p, .post .content p {\n  margin: 0;\n}\n.postT .content .author, .postForm .content .author, .post .content .author {\n  color: #888;\n  display: block;\n  margin-top: 0rem;\n  margin-bottom: 0.75rem;\n  font-size: 0.48em;\n}\n.postT .content .comments, .postForm .content .comments, .post .content .comments {\n  float: right;\n  padding: 10px;\n  margin-right: 5px;\n  color: #888;\n  font-size: 1rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.postT .content .comments svg, .postForm .content .comments svg, .post .content .comments svg {\n  margin-left: 5px;\n  width: 25px;\n  height: 25px;\n}\n\n.postWrapper {\n  margin-bottom: 1em;\n}\n\n.postList {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 0% 10%;\n}\n\n.comment {\n  position: relative;\n  margin-top: 0.5rem;\n  flex: 1;\n  max-width: 100%;\n}\n.comment .content {\n  margin-bottom: 1rem;\n}\n.comment .content .title {\n  font-size: 1.5em;\n}\n.comment .content .body {\n  font-size: 1em;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.comment .content p {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  margin: 0rem;\n}\n.comment .content .author {\n  color: #888;\n  display: block;\n  margin-top: 0rem;\n  margin-bottom: 0.25rem;\n  font-size: 0.75em;\n}\n.comment .content .author .timestamp {\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.commentWrap {\n  display: flex;\n  max-width: 100%;\n}\n.commentWrap .indents {\n  display: block;\n  white-space: nowrap;\n}\n\n.threadindent {\n  display: inline-block;\n  width: 5px;\n  height: 110%;\n  flex: 1;\n  position: relative;\n  top: 5%;\n  margin: 0px 0.5555em;\n  border-radius: 5px;\n  background-color: #353535;\n}\n\n.indentVote {\n  height: 106%;\n  position: relative;\n  top: 5%;\n  float: left;\n  display: flex;\n  flex-direction: column;\n}\n.indentVote .threadindent {\n  flex: 1;\n}\n\n.vote, .voteSmall {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  font-size: 1rem;\n  color: #888;\n  margin: 20px;\n  height: max-content;\n}\n.vote svg, .voteSmall svg {\n  width: 25px;\n  height: auto;\n  transition: all 250ms ease-in-out;\n}\n.vote svg::selection, .voteSmall svg::selection {\n  background-color: rgba(0, 255, 255, 0);\n}\n.vote .upvote, .voteSmall .upvote {\n  color: #848484;\n}\n.vote .upvote:hover, .voteSmall .upvote:hover {\n  transform: translateY(-0.5rem);\n}\n.vote .upvote[data-active=true], .voteSmall .upvote[data-active=true], .vote .upvote:hover, .voteSmall .upvote:hover {\n  color: #ff004f;\n}\n.vote .downvote, .voteSmall .downvote {\n  color: #848484;\n  transform: rotate(180deg);\n}\n.vote .downvote:hover, .voteSmall .downvote:hover {\n  transform: rotate(180deg) translateY(-0.5rem);\n}\n.vote .downvote[data-active=true], .voteSmall .downvote[data-active=true], .vote .downvote:hover, .voteSmall .downvote:hover {\n  color: #1f98e5;\n}\n\n.voteSmall {\n  margin: 0.2777em;\n  margin-right: 15px;\n  align-self: stretch;\n}\n.voteSmall div {\n  max-width: 1rem;\n  height: fit-content;\n  text-align: center;\n}\n.voteSmall span {\n  display: inline;\n  text-align: center;\n  position: relative;\n}\n.voteSmall svg {\n  width: 15px;\n  height: auto;\n  flex-shrink: 0;\n}\n.voteSmall .upvote:hover {\n  transform: translateY(-0.25rem);\n}\n.voteSmall .downvote:hover {\n  transform: rotate(180deg) translateY(-0.25rem);\n}\n.voteSmall .threadindent {\n  display: inline-block;\n  float: none;\n  flex: 1;\n}\n\n.timestamp {\n  color: #888;\n  margin-top: 0rem;\n  font-size: 0.75em;\n}\n\n.expandDialog {\n  position: absolute;\n  bottom: 2em;\n  border-radius: 1em;\n  padding: 0.5em;\n  background-color: #848484e8;\n  color: white;\n  text-align: center;\n  margin: 0 2%;\n}\n\n@media screen and (max-width: 600px) {\n  .postList {\n    padding: 0% 1.5%;\n    font-size: 14px;\n  }\n}"]}]);
// Exports
exports.locals = {
	"card": "post_card__2hKeS",
	"postForm": "post_postForm__2hpth",
	"animCard": "post_animCard__2Fp_O",
	"post": "post_post__3HKSh",
	"cardEntrance": "post_cardEntrance__3NjVZ",
	"entering": "post_entering__23CCS",
	"cardboardEntrance": "post_cardboardEntrance__XT7Sn",
	"body": "post_body__2sPi7",
	"postT": "post_postT__4aoKO",
	"content": "post_content__1G1Ie",
	"title": "post_title__4CteQ",
	"author": "post_author__3gKZp",
	"comments": "post_comments__ZzTEU",
	"postWrapper": "post_postWrapper__1jJJG",
	"postList": "post_postList__3iez6",
	"comment": "post_comment__did10",
	"timestamp": "post_timestamp__1o7Bq",
	"commentWrap": "post_commentWrap__Cef8r",
	"indents": "post_indents__79RwN",
	"threadindent": "post_threadindent__1Cfcl",
	"indentVote": "post_indentVote__N7vcj",
	"vote": "post_vote__2IS4Y",
	"voteSmall": "post_voteSmall__12ULw",
	"upvote": "post_upvote__gzCG1",
	"downvote": "post_downvote__1deOJ",
	"expandDialog": "post_expandDialog__32EtC"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=index.js.df29cbef87c7bcf5ae3b.hot-update.js.map