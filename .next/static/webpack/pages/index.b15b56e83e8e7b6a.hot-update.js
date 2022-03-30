"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/body/Deposits.jsx":
/*!**************************************!*\
  !*** ./components/body/Deposits.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DepositInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_avaxape_avaxapeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/avaxape/avaxapeContext */ \"./context/avaxape/avaxapeContext.js\");\n/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _context_auth_authReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/auth/authReducer */ \"./context/auth/authReducer.js\");\n/* harmony import */ var _Deposits_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Deposits.module.scss */ \"./components/body/Deposits.module.scss\");\n/* harmony import */ var _Deposits_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Deposits_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction DepositInfo() {\n    var _this = this;\n    _s();\n    var ref = (0,_context_avaxape_avaxapeContext__WEBPACK_IMPORTED_MODULE_2__.useAvaxApeContext)(), getUserAmountOfDeposits = ref.getUserAmountOfDeposits, getUserDepositInfo = ref.getUserDepositInfo;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        data: [],\n        count: null,\n        countDown: null,\n        ready: null\n    }), deposits = ref1[0], setDeposits = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var onDepositInfoSuccess = function(info) {\n            setDeposits(function(prevState) {\n                return _objectSpread({}, prevState, {\n                    ready: 2\n                });\n            });\n            console.log(deposits.data);\n        };\n        var onDepositCountSuccess = function(Count) {\n            if (!deposits.count) {\n                setDeposits({\n                    ready: 1,\n                    count: Count.toNumber(),\n                    countDown: Count.toNumber(),\n                    data: []\n                });\n            } else if (deposits.ready == 1) {\n                console.log(2);\n                for(var i = 0; i < deposits.count - 1; i++){\n                    getUserDepositInfo({\n                        idx: i,\n                        onSuccess: deposits.data.push()\n                    });\n                }\n                getUserDepositInfo({\n                    idx: deposits.count - 1,\n                    onSuccess: onDepositInfoSuccess\n                });\n            }\n        };\n        getUserAmountOfDeposits({\n            onSuccess: onDepositCountSuccess\n        });\n    });\n    var renderDepositsAmount = function() {\n        if (!deposits.ready) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 62,\n                columnNumber: 20\n            }, _this));\n        }\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: deposits.count.toString()\n        }, void 0, false, {\n            fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n            lineNumber: 64,\n            columnNumber: 17\n        }, _this));\n    };\n    var renderDepositInfo = function() {\n        var _this1 = _this;\n        if (deposits.ready != 2) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 70,\n                columnNumber: 20\n            }, _this));\n        }\n        return deposits.data.map(function(deposit) {\n            var plan = deposit.plan, percent = deposit.percent, amount = deposit.amount, profit = deposit.profit, start = deposit.start, finish = deposit.finish;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: plan.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: percent.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: profit.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: start.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: finish.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: amount.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 75,\n                columnNumber: 17\n            }, _this1));\n        });\n    };\n    var renderTableHeader = function() {\n        var _this2 = _this;\n        var header = [\n            \"Plan\",\n            \"Percent\",\n            \"Profit\",\n            \"Start\",\n            \"Finish\",\n            \"Amount\"\n        ];\n        return header.map(function(key) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: key\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 91,\n                columnNumber: 20\n            }, _this2));\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Deposits_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),\n        children: [\n            renderDepositsAmount(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Deposits\"\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: renderTableHeader()\n                        }, void 0, false, {\n                            fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this),\n                        renderDepositInfo()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, this));\n};\n_s(DepositInfo, \"dV1qR2HyixjG9Jz5q7C5ebhvXF4=\", false, function() {\n    return [\n        _context_avaxape_avaxapeContext__WEBPACK_IMPORTED_MODULE_2__.useAvaxApeContext\n    ];\n});\n_c = DepositInfo;\nvar _c;\n$RefreshReg$(_c, \"DepositInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUVELE1BQU0sNkVBQ0RFLENBQUc7UUFBQ0MsU0FBUyxFQUFFekMsbUVBQVc7O1lBQ3RCc0Isb0JBQW9CO3dGQUNwQnFCLENBQUU7MEJBQUMsQ0FBUTs7Ozs7O3dGQUNYQyxDQUFLO3NHQUNEQyxDQUFLOztvR0FDRFgsQ0FBRTtzQ0FBRUUsaUJBQWlCOzs7Ozs7d0JBQ3JCWCxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QyxDQUFDO0dBaEd1QnhCLFdBQVc7O1FBRXlCSiw4RUFBaUI7OztLQUZyREksV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvZHkvRGVwb3NpdHMuanN4P2QyZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlQXZheEFwZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2F2YXhhcGUvYXZheGFwZUNvbnRleHQnXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCdcbmltcG9ydCB7IEFDQ09VTlRTX0ZFVENIRUQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EZXBvc2l0cy5tb2R1bGUuc2NzcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXBvc2l0SW5mbygpIHtcblxuICAgIGNvbnN0IHsgZ2V0VXNlckFtb3VudE9mRGVwb3NpdHMsIGdldFVzZXJEZXBvc2l0SW5mbyB9ID0gdXNlQXZheEFwZUNvbnRleHQoKVxuXG5cblxuICAgIGNvbnN0IFtkZXBvc2l0cywgc2V0RGVwb3NpdHNdID0gdXNlU3RhdGUoe1xuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgY291bnQ6IG51bGwsXG4gICAgICAgIGNvdW50RG93bjogbnVsbCxcbiAgICAgICAgcmVhZHk6IG51bGxcbiAgICB9KVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvbkRlcG9zaXRJbmZvU3VjY2VzcyA9ICgoaW5mbykgPT4ge1xuXG4gICAgICAgICAgICAgICAgc2V0RGVwb3NpdHMoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICAgICAgICByZWFkeTogMixcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkZXBvc2l0cy5kYXRhKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG5cbiAgICAgICAgY29uc3Qgb25EZXBvc2l0Q291bnRTdWNjZXNzID0gKChDb3VudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkZXBvc2l0cy5jb3VudCl7XG4gICAgICAgICAgICAgICAgc2V0RGVwb3NpdHMoe1xuICAgICAgICAgICAgICAgICAgICByZWFkeTogMSxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IENvdW50LnRvTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgICAgIGNvdW50RG93bjogQ291bnQudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZXBvc2l0cy5yZWFkeSA9PSAxKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygyKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpPCBkZXBvc2l0cy5jb3VudCAtIDE7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGdldFVzZXJEZXBvc2l0SW5mbyh7IGlkeDogaSwgb25TdWNjZXNzOiBkZXBvc2l0cy5kYXRhLnB1c2goKX0pfVxuICAgICAgICAgICAgICAgIGdldFVzZXJEZXBvc2l0SW5mbyh7aWR4OiBkZXBvc2l0cy5jb3VudCAtMSwgb25TdWNjZXNzOiBvbkRlcG9zaXRJbmZvU3VjY2Vzc30pfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgZ2V0VXNlckFtb3VudE9mRGVwb3NpdHMoeyBvblN1Y2Nlc3M6IG9uRGVwb3NpdENvdW50U3VjY2VzcyB9KVxuXG4gICAgfSlcblxuXG4gICAgY29uc3QgcmVuZGVyRGVwb3NpdHNBbW91bnQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZGVwb3NpdHMucmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiA8cD4tPC9wPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPHA+e2RlcG9zaXRzLmNvdW50LnRvU3RyaW5nKCl9PC9wPilcbiAgICB9XG5cblxuICAgIGNvbnN0IHJlbmRlckRlcG9zaXRJbmZvID0gKCkgPT4ge1xuICAgICAgICBpZiAoZGVwb3NpdHMucmVhZHkgIT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIDxwPi08L3A+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlcG9zaXRzLmRhdGEubWFwKChkZXBvc2l0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBsYW4sIHBlcmNlbnQsIGFtb3VudCwgcHJvZml0LCBzdGFydCwgZmluaXNoIH0gPSBkZXBvc2l0XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntwbGFuLnRvU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntwZXJjZW50LnRvU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9maXQudG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YXJ0LnRvU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntmaW5pc2gudG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Ftb3VudC50b1N0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgaGVhZGVyID0gW1wiUGxhblwiLCBcIlBlcmNlbnRcIiwgXCJQcm9maXRcIiwgXCJTdGFydFwiLCBcIkZpbmlzaFwiLCBcIkFtb3VudFwiXVxuICAgICAgICByZXR1cm4gaGVhZGVyLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHRoPntrZXl9PC90aD5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAge3JlbmRlckRlcG9zaXRzQW1vdW50KCl9XG4gICAgICAgICAgICA8aDQ+RGVwb3NpdHM8L2g0PlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPntyZW5kZXJUYWJsZUhlYWRlcigpfTwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJEZXBvc2l0SW5mbygpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VBdmF4QXBlQ29udGV4dCIsInVzZUF1dGhDb250ZXh0IiwiQUNDT1VOVFNfRkVUQ0hFRCIsInN0eWxlcyIsIkRlcG9zaXRJbmZvIiwiZ2V0VXNlckFtb3VudE9mRGVwb3NpdHMiLCJnZXRVc2VyRGVwb3NpdEluZm8iLCJkYXRhIiwiY291bnQiLCJjb3VudERvd24iLCJyZWFkeSIsImRlcG9zaXRzIiwic2V0RGVwb3NpdHMiLCJvbkRlcG9zaXRJbmZvU3VjY2VzcyIsImluZm8iLCJwcmV2U3RhdGUiLCJjb25zb2xlIiwibG9nIiwib25EZXBvc2l0Q291bnRTdWNjZXNzIiwiQ291bnQiLCJ0b051bWJlciIsImkiLCJpZHgiLCJvblN1Y2Nlc3MiLCJwdXNoIiwicmVuZGVyRGVwb3NpdHNBbW91bnQiLCJwIiwidG9TdHJpbmciLCJyZW5kZXJEZXBvc2l0SW5mbyIsIm1hcCIsImRlcG9zaXQiLCJwbGFuIiwicGVyY2VudCIsImFtb3VudCIsInByb2ZpdCIsInN0YXJ0IiwiZmluaXNoIiwidHIiLCJ0ZCIsInJlbmRlclRhYmxlSGVhZGVyIiwiaGVhZGVyIiwia2V5IiwidGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaDQiLCJ0YWJsZSIsInRib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/body/Deposits.jsx\n");

/***/ })

});