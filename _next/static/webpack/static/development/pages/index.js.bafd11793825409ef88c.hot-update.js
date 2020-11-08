webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../res/svg/commentIcon.svg */ "./res/svg/commentIcon.svg");
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Timestamp */ "./components/Timestamp.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CommentSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentSection */ "./components/CommentSection.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/document.module.sass */ "./style/document.module.sass");
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_document_module_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/markdown */ "./helpers/markdown.js");
/* harmony import */ var _layout_ContextMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/ContextMenu */ "./components/layout/ContextMenu.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _ConfirmMenuItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ConfirmMenuItem */ "./components/ConfirmMenuItem.js");
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PostForm */ "./components/PostForm.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






 //markdown styling



var md = Object(_helpers_markdown__WEBPACK_IMPORTED_MODULE_10__["default"])({
  anchor: false,
  embeds: true,
  supressHeadings: true
});







console.log(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.postScronch);
var Post = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
  console.log(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.wrong);
  var p = props.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      commentsOpen = _useState[0],
      setCommentsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      deletion = _useState3[0],
      setDeletion = _useState3[1]; //----show a context menu on rightclick


  var contextMenu = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_11__["MenuData"]);

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_12__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var embed = props.embed;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      editing = _useState4[0],
      setEditing = _useState4[1];

  var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  function context(evt) {
    if (deletion || editing) return false;
    evt.preventDefault();
    var menu = [__jsx(_ConfirmMenuItem__WEBPACK_IMPORTED_MODULE_16__["ConfirmMenuItem"], {
      text: "Embed",
      leftIcon: __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_14__["ImEmbed"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 53
        }
      }),
      onClick: function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.clipboard.writeText("<iframe src=\"https://drkslv.github.io/discussion/embed/post?id=".concat(p.entity.id, "\" width=\"700px\" height=\"500px\" frameborder=\"0\"></iframe>")));

              case 3:
                return _context.abrupt("return", true);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, [[0, 6]], Promise);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    })];
    if (typeof id.active !== "number" || !id.users[id.active]) return contextMenu.openMenu(evt.pageX, evt.pageY, menu);
    if (p.author && id.users[id.active].username === p.author.username) menu.push(__jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      text: "Edit",
      onClick: edit,
      leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_15__["MdEdit"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 64
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }));
    if (p.author && id.users[id.active].username === p.author.username || id.users[id.active].moderator) menu.push(__jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      text: "Delete",
      onClick: deleteP,
      warn: true,
      leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaBan"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 91
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 23
      }
    }));

    if (id.users[id.active].moderator) {
      var l = p.entity.comments_locked;
      var h = p.entity.comments_hidden;
      menu.push(__jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        text: "Comments",
        warn: true,
        leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaCommentDots"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 69
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        text: !l ? "Lock" : "Unlock",
        leftIcon: !l ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaLock"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 74
          }
        }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaLockOpen"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 84
          }
        }),
        warn: true,
        onClick: function onClick() {
          return entity(!l);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        text: !h ? "Hide" : "Show",
        leftIcon: !h ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaEyeSlash"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 72
          }
        }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaEye"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 86
          }
        }),
        warn: true,
        onClick: function onClick() {
          return entity(undefined, !h);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      })));
    }

    contextMenu.openMenu(evt.pageX, evt.pageY, menu);
  }

  function entity(lock, hide) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function entity$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            axios.put("/entity/".concat(p.entity.id), {
              comments_locked: typeof lock === "boolean" ? String(lock) : undefined,
              comments_hidden: typeof hide === "boolean" ? String(hide) : undefined
            }).then(function () {
              contextMenu.removeMenu();
              setCommentsOpen(false);
              props.rerenderFunc(p.entity.id);
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function edit() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function edit$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("edit post");
            contextMenu.removeMenu();
            setEditing(true);
            scrollFetch();

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function deleteP() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteP$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            axios["delete"]("/post/".concat(p.entity.id)).then(function _callee2() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log("scronch post");
                      contextMenu.removeMenu();
                      setCommentsOpen(false);
                      setDeletion(true);
                      scrollFetch();
                      _context4.next = 7;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(later(2000));

                    case 7:
                      props.rerenderFunc();

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, null, null, null, Promise);
            })["catch"](function () {
              contextMenu.removeMenu();
            });

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function scrollFetch() {
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = bodyRef.current.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;

    if (bodyRef.current.clientHeight > 350 && commentsOpen && offset < window.scrollY && !embed) {
      bodyRef.current.scrollIntoView();
      window.scrollBy(0, -120);
    }
  }

  function onEdit(text, cancel) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onEdit$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!cancel) {
              _context6.next = 2;
              break;
            }

            return _context6.abrupt("return", setEditing(false));

          case 2:
            _context6.prev = 2;
            res = axios.put("/post/".concat(p.entity.id), {
              text: text
            });
            _context6.next = 9;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](2);
            return _context6.abrupt("return", false);

          case 9:
            setEditing(false);
            props.rerenderFunc(p.entity.id);
            return _context6.abrupt("return", true);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[2, 6]], Promise);
  } //----Expand when clicked


  var myVote = null;
  var votes = p.entity.votes;
  if (votes && votes[0]) myVote = votes[0].positive;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setCollapsed(!commentsOpen && !editing && bodyRef.current.clientHeight > 350);
  }, [bodyRef, commentsOpen]);
  var expandTime;

  if (bodyRef.current) {
    expandTime = 0.71428571429 * bodyRef.current.clientHeight - 350;
  }

  return __jsx("div", {
    className: "".concat(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.postWrapper, " ").concat(deletion && !(commentsOpen && bodyRef.current.clientHeight > 350) && _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.postScronch),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "".concat(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.post),
    onClick: function onClick() {
      if (!deletion && !editing) setCommentsOpen(!commentsOpen);
      if (!editing) scrollFetch();
    },
    onContextMenu: context,
    "data-expanded": commentsOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, !editing ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_4__["Vote"], {
    up: p.entity.upvotes,
    down: p.entity.downvotes,
    id: p.entity.id,
    my: myVote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 32
    }
  }), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.content,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.comments,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }, !p.entity.comments_hidden ? (p.entity.comment.rgt - p.entity.comment.lft - 1) / 2 : "Disabled", __jsx(_res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 29
    }
  }, p.title), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.author,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 29
    }
  }, "posted by ", p.author ? p.author.username : "❌DELETED❌"))), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.body,
    style: {
      maxHeight: !commentsOpen ? "350px" : bodyRef.current.clientHeight + 10,
      "--expandtime": expandTime + "ms",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: md(p.text)
    },
    className: _style_document_module_sass__WEBPACK_IMPORTED_MODULE_9___default.a.mdPost,
    ref: bodyRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }), collapsed && __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.expandDialogWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 39
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.expandDialog,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 78
    }
  }, "Click to Expand"))), __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], {
    time: p.createdAt,
    edit: p.updatedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }))) : __jsx(_PostForm__WEBPACK_IMPORTED_MODULE_17__["PostForm"], {
    title: p.title,
    text: p.text,
    edit: true,
    onEdit: onEdit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 20
    }
  })), !p.entity.comments_hidden ? __jsx(_CommentSection__WEBPACK_IMPORTED_MODULE_7__["CommentSection"], {
    id: p.entity.id,
    open: commentsOpen,
    key: "cs" + p.entity.id,
    entity: p.entity,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 41
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null));
});

function later(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

/***/ })

})
//# sourceMappingURL=index.js.bafd11793825409ef88c.hot-update.js.map