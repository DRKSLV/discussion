webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timestamp */ "./components/Timestamp.js");
/* harmony import */ var _threadindent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./threadindent */ "./components/threadindent.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\node\\drkslv\\components\\Comment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Comment(props) {
  var c = props.comment;
  var indents = [];

  for (var i = 0; i < c.level; i++) {
    indents.push(__jsx(_threadindent__WEBPACK_IMPORTED_MODULE_4__["Threadindent"], {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 22
      }
    }));
  }

  console.log(c);

  function context(evt) {
    if (deletion || editing) return false;
    evt.preventDefault();
    var menu = [__jsx(ConfirmMenuItem, {
      text: "Copy markdown",
      leftIcon: __jsx(FaCopy, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 61
        }
      }),
      onClick: function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.clipboard.writeText(c.text));

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
        lineNumber: 23,
        columnNumber: 13
      }
    })];
    if (typeof id.active !== "number" || !id.users[id.active]) return contextMenu.openMenu(evt.pageX, evt.pageY, menu);
    if (p.author && id.users[id.active].username === p.author.username) menu.push(__jsx(DropdownItem, {
      text: "Edit",
      onClick: edit,
      leftIcon: __jsx(MdEdit, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 68
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }));
    if (p.author && id.users[id.active].username === p.author.username || id.users[id.active].moderator) menu.push(__jsx(DropdownItem, {
      text: "Delete",
      onClick: deleteModal,
      warn: true,
      leftIcon: __jsx(FaBan, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 95
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 23
      }
    }));

    if (id.users[id.active].moderator) {
      var l = p.entity.comments_locked;
      var h = p.entity.comments_hidden;
      menu.push(__jsx(DropdownItem, {
        text: "Comments",
        warn: true,
        leftIcon: __jsx(FaCommentDots, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 69
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, __jsx(DropdownItem, {
        text: !l ? "Lock" : "Unlock",
        leftIcon: !l ? __jsx(FaLock, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 80
          }
        }) : __jsx(FaLockOpen, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 93
          }
        }),
        warn: true,
        onClick: function onClick() {
          return entity(!l);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      }), __jsx(DropdownItem, {
        text: !h ? "Hide" : "Show",
        leftIcon: !h ? __jsx(FaEyeSlash, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 78
          }
        }) : __jsx(FaEye, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 95
          }
        }),
        warn: true,
        onClick: function onClick() {
          return entity(undefined, !h);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      })));
    }

    contextMenu.openMenu(evt.pageX, evt.pageY, menu);
  }

  if (!c.author && c.text === "~d~" || c.text === "~r~") {
    return __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.commentWrap,
      onContextMenu: context,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.indents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, indents), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.comment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.indentVote,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, __jsx(_threadindent__WEBPACK_IMPORTED_MODULE_4__["Threadindent"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.author,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], {
      time: c.createdAt,
      edit: c.updatedAt,
      compact: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        color: "grey"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, "COMMENT ", c.text === "~d~" ? "❌DELETED❌" : "🔥REMOVED🔥")))));
  }

  return __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.commentWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.indents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, indents), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.comment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.indentVote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_2__["Vote"], {
    up: c.entity.upvotes,
    down: c.entity.downvotes,
    small: true,
    id: c.entity.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }), __jsx(_threadindent__WEBPACK_IMPORTED_MODULE_4__["Threadindent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, "posted by ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 39
    }
  }, c.author ? c.author.username : "❌DELETED❌"), " ", __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], {
    time: c.createdAt,
    edit: c.updatedAt,
    compact: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 97
    }
  }))), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, c.text)))));
}

/***/ })

})
//# sourceMappingURL=index.js.3d97b60413d987f302bf.hot-update.js.map