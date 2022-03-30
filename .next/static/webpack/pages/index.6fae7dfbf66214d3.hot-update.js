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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DepositInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_avaxape_avaxapeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/avaxape/avaxapeContext */ \"./context/avaxape/avaxapeContext.js\");\n/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _context_auth_authReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/auth/authReducer */ \"./context/auth/authReducer.js\");\n/* harmony import */ var _Deposits_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Deposits.module.scss */ \"./components/body/Deposits.module.scss\");\n/* harmony import */ var _Deposits_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Deposits_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction DepositInfo() {\n    var _this = this;\n    _s();\n    var ref = (0,_context_avaxape_avaxapeContext__WEBPACK_IMPORTED_MODULE_2__.useAvaxApeContext)(), getUserAmountOfDeposits = ref.getUserAmountOfDeposits, getUserDepositInfo = ref.getUserDepositInfo;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        data: null,\n        count: null,\n        countDown: null,\n        ready: null\n    }), deposits = ref1[0], setDeposits = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var onDepositInfoSuccess = function(info) {\n            setDeposits(function(prevState) {\n                return _objectSpread({}, prevState, {\n                    ready: 2\n                });\n            });\n            console.log(\"cso\");\n        };\n        var onDepositCountSuccess = function(Count) {\n            if (!deposits.count) setDeposits({\n                ready: 1,\n                count: Count.toNumber(),\n                countDown: Count.toNumber(),\n                data: []\n            });\n            else if (deposits.data.lenght == 0) for(var i = 0; i < deposits.count - 1; i++)getUserDepositInfo({\n                idx: i,\n                onSuccess: deposits.data.push()\n            });\n            getUserDepositInfo({\n                idx: deposits.count - 1,\n                onSuccess: onDepositInfoSuccess\n            });\n        };\n        getUserAmountOfDeposits({\n            onSuccess: onDepositCountSuccess\n        });\n    }, [\n        getUserAmountOfDeposits\n    ]);\n    var renderDepositsAmount = function() {\n        if (!deposits.ready) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 58,\n                columnNumber: 20\n            }, _this));\n        }\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: deposits.count.toString()\n        }, void 0, false, {\n            fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n            lineNumber: 60,\n            columnNumber: 17\n        }, _this));\n    };\n    var renderDepositInfo = function() {\n        var _this1 = _this;\n        if (deposits.ready != 2) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 66,\n                columnNumber: 20\n            }, _this));\n        }\n        return deposits.data.map(function(deposit) {\n            var plan = deposit.plan, percent = deposit.percent, amount = deposit.amount, profit = deposit.profit, start = deposit.start, finish = deposit.finish;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: plan.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: percent.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: profit.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: start.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: finish.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: amount.toString()\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, _this1));\n        });\n    };\n    var renderTableHeader = function() {\n        var _this2 = _this;\n        var header = [\n            \"Plan\",\n            \"Percent\",\n            \"Profit\",\n            \"Start\",\n            \"Finish\",\n            \"Amount\"\n        ];\n        return header.map(function(key) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: key\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 87,\n                columnNumber: 20\n            }, _this2));\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Deposits_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),\n        children: [\n            renderDepositsAmount(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Deposits\"\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: renderTableHeader()\n                        }, void 0, false, {\n                            fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, this),\n                        renderDepositInfo()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/laszlofreund/blockthatchain/project/components/body/Deposits.jsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this));\n};\n_s(DepositInfo, \"E9eL/G01W1+64837ELqbSrqTfYg=\", false, function() {\n    return [\n        _context_avaxape_avaxapeContext__WEBPACK_IMPORTED_MODULE_2__.useAvaxApeContext\n    ];\n});\n_c = DepositInfo;\nvar _c;\n$RefreshReg$(_c, \"DepositInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvZHkvRGVwb3NpdHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2M7QUFFMEI7QUFDVDtBQUNFO0FBRXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHNUIsUUFBUSxDQUFDTyxXQUFXLEdBQUcsQ0FBQzs7O0lBRW5DLEdBQUssQ0FBbURKLEdBQW1CLEdBQW5CQSxrRkFBaUIsSUFBakVLLHVCQUF1QixHQUF5QkwsR0FBbUIsQ0FBbkVLLHVCQUF1QixFQUFFQyxrQkFBa0IsR0FBS04sR0FBbUIsQ0FBMUNNLGtCQUFrQjtJQUluRCxHQUFLLENBQTJCVCxJQUs5QixHQUw4QkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ3RDVSxJQUFJLEVBQUUsSUFBSTtRQUNWQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxTQUFTLEVBQUUsSUFBSTtRQUNmQyxLQUFLLEVBQUUsSUFBSTtJQUNmLENBQUMsR0FMTUMsUUFBUSxHQUFpQmQsSUFLOUIsS0FMZWUsV0FBVyxHQUFJZixJQUs5QjtJQUdGQyxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEdBQUssQ0FBQ2Usb0JBQW9CLEdBQUksUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztZQUVqQ0YsV0FBVyxDQUFDLFFBQVEsQ0FBUEcsU0FBUztnQkFBSyxNQUN4QyxtQkFBb0JBLFNBQVM7b0JBQ1pMLEtBQUssRUFBRSxDQUFDOzs7WUFFWk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBSztRQUVyQixDQUFDO1FBRUwsR0FBSyxDQUFDQyxxQkFBcUIsR0FBSSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1lBQ3ZDLEVBQUUsR0FBR1IsUUFBUSxDQUFDSCxLQUFLLEVBQ2ZJLFdBQVcsQ0FBQyxDQUFDO2dCQUNURixLQUFLLEVBQUUsQ0FBQztnQkFDUkYsS0FBSyxFQUFFVyxLQUFLLENBQUNDLFFBQVE7Z0JBQ3JCWCxTQUFTLEVBQUVVLEtBQUssQ0FBQ0MsUUFBUTtnQkFDekJiLElBQUksRUFBRSxDQUFDLENBQUM7WUFDWixDQUFDO2lCQUNBLEVBQUUsRUFBRUksUUFBUSxDQUFDSixJQUFJLENBQUNjLE1BQU0sSUFBSSxDQUFDLEVBQzlCLEdBQUcsQ0FBRSxHQUFHLENBQUNDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRVgsUUFBUSxDQUFDSCxLQUFLLEdBQUcsQ0FBQyxFQUFFYyxDQUFDLEdBQ3BDaEIsa0JBQWtCLENBQUMsQ0FBQztnQkFBQ2lCLEdBQUcsRUFBRUQsQ0FBQztnQkFBRUUsU0FBUyxFQUFFYixRQUFRLENBQUNKLElBQUksQ0FBQ2tCLElBQUk7WUFBRSxDQUFDO1lBQ2pFbkIsa0JBQWtCLENBQUMsQ0FBQ2lCO2dCQUFBQSxHQUFHLEVBQUVaLFFBQVEsQ0FBQ0gsS0FBSyxHQUFFLENBQUM7Z0JBQUVnQixTQUFTLEVBQUVYLG9CQUFvQjtZQUFBLENBQUM7UUFDcEYsQ0FBQztRQUdEUix1QkFBdUIsQ0FBQyxDQUFDO1lBQUNtQixTQUFTLEVBQUVOLHFCQUFxQjtRQUFDLENBQUM7SUFFaEUsQ0FBQyxFQUFFLENBQUNiO1FBQUFBLHVCQUF1QjtJQUFBLENBQUM7SUFHNUIsR0FBSyxDQUFDcUIsb0JBQW9CLEdBQUcsUUFDakMsR0FEdUMsQ0FBQztRQUNoQyxFQUFFLEdBQUdmLFFBQVEsQ0FBQ0QsS0FBSyxFQUFFLENBQUM7WUFDbEIsTUFBTSw2RUFBRWlCLENBQUM7MEJBQUMsQ0FBQzs7Ozs7O1FBQ2YsQ0FBQztRQUNELE1BQU0sNkVBQUdBLENBQUM7c0JBQUVoQixRQUFRLENBQUNILEtBQUssQ0FBQ29CLFFBQVE7Ozs7OztJQUN2QyxDQUFDO0lBR0QsR0FBSyxDQUFDQyxpQkFBaUIsR0FBRyxRQUM5QixHQURvQyxDQUFDOztRQUM3QixFQUFFLEVBQUVsQixRQUFRLENBQUNELEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN0QixNQUFNLDZFQUFFaUIsQ0FBQzswQkFBQyxDQUFDOzs7Ozs7UUFDZixDQUFDO1FBQ0QsTUFBTSxDQUFDaEIsUUFBUSxDQUFDSixJQUFJLENBQUN1QixHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQztZQUNuQyxHQUFLLENBQUdDLElBQUksR0FBNkNELE9BQU8sQ0FBeERDLElBQUksRUFBRUMsT0FBTyxHQUFvQ0YsT0FBTyxDQUFsREUsT0FBTyxFQUFFQyxNQUFNLEdBQTRCSCxPQUFPLENBQXpDRyxNQUFNLEVBQUVDLE1BQU0sR0FBb0JKLE9BQU8sQ0FBakNJLE1BQU0sRUFBRUMsS0FBSyxHQUFhTCxPQUFPLENBQXpCSyxLQUFLLEVBQUVDLE1BQU0sR0FBS04sT0FBTyxDQUFsQk0sTUFBTTtZQUNwRCxNQUFNLDZFQUNEQyxDQUFFOztnR0FDRUMsQ0FBRTtrQ0FBRVAsSUFBSSxDQUFDSixRQUFROzs7Ozs7Z0dBQ2pCVyxDQUFFO2tDQUFFTixPQUFPLENBQUNMLFFBQVE7Ozs7OztnR0FDcEJXLENBQUU7a0NBQUVKLE1BQU0sQ0FBQ1AsUUFBUTs7Ozs7O2dHQUNuQlcsQ0FBRTtrQ0FBRUgsS0FBSyxDQUFDUixRQUFROzs7Ozs7Z0dBQ2xCVyxDQUFFO2tDQUFFRixNQUFNLENBQUNULFFBQVE7Ozs7OztnR0FDbkJXLENBQUU7a0NBQUVMLE1BQU0sQ0FBQ04sUUFBUTs7Ozs7Ozs7Ozs7O1FBR2hDLENBQUM7SUFFTCxDQUFDO0lBRUQsR0FBSyxDQUFDWSxpQkFBaUIsR0FBRyxRQUM5QixHQURvQyxDQUFDOztRQUM3QixHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDO1lBQUEsQ0FBTTtZQUFFLENBQVM7WUFBRSxDQUFRO1lBQUUsQ0FBTztZQUFFLENBQVE7WUFBRSxDQUFRO1FBQUEsQ0FBQztRQUN2RSxNQUFNLENBQUNBLE1BQU0sQ0FBQ1gsR0FBRyxDQUFDLFFBQVEsQ0FBUFksR0FBRyxFQUFLLENBQUM7WUFDeEIsTUFBTSw2RUFBRUMsQ0FBRTswQkFBRUQsR0FBRzs7Ozs7O1FBQ25CLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSw2RUFDREUsQ0FBRztRQUFDQyxTQUFTLEVBQUUxQyxtRUFBVzs7WUFDdEJ1QixvQkFBb0I7d0ZBQ3BCcUIsQ0FBRTswQkFBQyxDQUFROzs7Ozs7d0ZBQ1hDLENBQUs7c0dBQ0RDLENBQUs7O29HQUNEWCxDQUFFO3NDQUFFRSxpQkFBaUI7Ozs7Ozt3QkFDckJYLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RDLENBQUM7R0E1RnVCekIsV0FBVzs7UUFFeUJKLDhFQUFpQjs7O0tBRnJESSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9keS9EZXBvc2l0cy5qc3g/ZDJmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VBdmF4QXBlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvYXZheGFwZS9hdmF4YXBlQ29udGV4dCdcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0J1xuaW1wb3J0IHsgQUNDT1VOVFNfRkVUQ0hFRCB9IGZyb20gJy4uLy4uL2NvbnRleHQvYXV0aC9hdXRoUmVkdWNlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RlcG9zaXRzLm1vZHVsZS5zY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcG9zaXRJbmZvKCkge1xuXG4gICAgY29uc3QgeyBnZXRVc2VyQW1vdW50T2ZEZXBvc2l0cywgZ2V0VXNlckRlcG9zaXRJbmZvIH0gPSB1c2VBdmF4QXBlQ29udGV4dCgpXG5cblxuXG4gICAgY29uc3QgW2RlcG9zaXRzLCBzZXREZXBvc2l0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIGNvdW50OiBudWxsLFxuICAgICAgICBjb3VudERvd246IG51bGwsXG4gICAgICAgIHJlYWR5OiBudWxsXG4gICAgfSlcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb25EZXBvc2l0SW5mb1N1Y2Nlc3MgPSAoKGluZm8pID0+IHtcblxuICAgICAgICAgICAgICAgIHNldERlcG9zaXRzKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZHk6IDIsXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjc29cIilcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbkRlcG9zaXRDb3VudFN1Y2Nlc3MgPSAoKENvdW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRlcG9zaXRzLmNvdW50KVxuICAgICAgICAgICAgICAgIHNldERlcG9zaXRzKHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBDb3VudC50b051bWJlcigpLFxuICAgICAgICAgICAgICAgICAgICBjb3VudERvd246IENvdW50LnRvTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGVsc2UgaWYgKGRlcG9zaXRzLmRhdGEubGVuZ2h0ID09IDApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGk8IGRlcG9zaXRzLmNvdW50IC0gMTsgaSsrKVxuICAgICAgICAgICAgICAgICAgICBnZXRVc2VyRGVwb3NpdEluZm8oeyBpZHg6IGksIG9uU3VjY2VzczogZGVwb3NpdHMuZGF0YS5wdXNoKCl9KVxuICAgICAgICAgICAgICAgIGdldFVzZXJEZXBvc2l0SW5mbyh7aWR4OiBkZXBvc2l0cy5jb3VudCAtMSwgb25TdWNjZXNzOiBvbkRlcG9zaXRJbmZvU3VjY2Vzc30pXG4gICAgICAgIH0pXG5cblxuICAgICAgICBnZXRVc2VyQW1vdW50T2ZEZXBvc2l0cyh7IG9uU3VjY2Vzczogb25EZXBvc2l0Q291bnRTdWNjZXNzIH0pXG5cbiAgICB9LCBbZ2V0VXNlckFtb3VudE9mRGVwb3NpdHNdKVxuXG5cbiAgICBjb25zdCByZW5kZXJEZXBvc2l0c0Ftb3VudCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFkZXBvc2l0cy5yZWFkeSkge1xuICAgICAgICAgICAgcmV0dXJuIDxwPi08L3A+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8cD57ZGVwb3NpdHMuY291bnQudG9TdHJpbmcoKX08L3A+KVxuICAgIH1cblxuXG4gICAgY29uc3QgcmVuZGVyRGVwb3NpdEluZm8gPSAoKSA9PiB7XG4gICAgICAgIGlmIChkZXBvc2l0cy5yZWFkeSAhPSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gPHA+LTwvcD5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVwb3NpdHMuZGF0YS5tYXAoKGRlcG9zaXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGxhbiwgcGVyY2VudCwgYW1vdW50LCBwcm9maXQsIHN0YXJ0LCBmaW5pc2ggfSA9IGRlcG9zaXRcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYW4udG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3BlcmNlbnQudG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2ZpdC50b1N0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhcnQudG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZpbmlzaC50b1N0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57YW1vdW50LnRvU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBbXCJQbGFuXCIsIFwiUGVyY2VudFwiLCBcIlByb2ZpdFwiLCBcIlN0YXJ0XCIsIFwiRmluaXNoXCIsIFwiQW1vdW50XCJdXG4gICAgICAgIHJldHVybiBoZWFkZXIubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8dGg+e2tleX08L3RoPlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICB7cmVuZGVyRGVwb3NpdHNBbW91bnQoKX1cbiAgICAgICAgICAgIDxoND5EZXBvc2l0czwvaDQ+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+e3JlbmRlclRhYmxlSGVhZGVyKCl9PC90cj5cbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckRlcG9zaXRJbmZvKCl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZUF2YXhBcGVDb250ZXh0IiwidXNlQXV0aENvbnRleHQiLCJBQ0NPVU5UU19GRVRDSEVEIiwic3R5bGVzIiwiRGVwb3NpdEluZm8iLCJnZXRVc2VyQW1vdW50T2ZEZXBvc2l0cyIsImdldFVzZXJEZXBvc2l0SW5mbyIsImRhdGEiLCJjb3VudCIsImNvdW50RG93biIsInJlYWR5IiwiZGVwb3NpdHMiLCJzZXREZXBvc2l0cyIsIm9uRGVwb3NpdEluZm9TdWNjZXNzIiwiaW5mbyIsInByZXZTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkRlcG9zaXRDb3VudFN1Y2Nlc3MiLCJDb3VudCIsInRvTnVtYmVyIiwibGVuZ2h0IiwiaSIsImlkeCIsIm9uU3VjY2VzcyIsInB1c2giLCJyZW5kZXJEZXBvc2l0c0Ftb3VudCIsInAiLCJ0b1N0cmluZyIsInJlbmRlckRlcG9zaXRJbmZvIiwibWFwIiwiZGVwb3NpdCIsInBsYW4iLCJwZXJjZW50IiwiYW1vdW50IiwicHJvZml0Iiwic3RhcnQiLCJmaW5pc2giLCJ0ciIsInRkIiwicmVuZGVyVGFibGVIZWFkZXIiLCJoZWFkZXIiLCJrZXkiLCJ0aCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJoNCIsInRhYmxlIiwidGJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/body/Deposits.jsx\n");

/***/ })

});