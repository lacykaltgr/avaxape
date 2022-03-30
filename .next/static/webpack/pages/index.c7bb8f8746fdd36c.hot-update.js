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

/***/ "./components/layout/Layout.jsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_HeaderInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/HeaderInfo */ \"./components/header/HeaderInfo.jsx\");\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/Header */ \"./components/header/Header.jsx\");\n/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/Footer */ \"./components/footer/Footer.jsx\");\n/* harmony import */ var _error_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/Error */ \"./components/error/Error.jsx\");\n/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _context_auth_authReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/auth/authReducer */ \"./context/auth/authReducer.js\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout.module.scss */ \"./components/layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var children = param.children, pageImage = param.pageImage, pageTitle = param.pageTitle, pageDescription = param.pageDescription;\n    _s();\n    var imageUrl = pageImage || '';\n    var authState = (0,_context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__.useAuthContext)().authState;\n    var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, function(child) {\n        // Checking isValidElement is the safe way and avoids a typescript\n        // error too.\n        if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {\n            return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child));\n        }\n        return child;\n    });\n    var hasAccountError = authState.status === _context_auth_authReducer__WEBPACK_IMPORTED_MODULE_8__.ACCOUNTS_ERROR || authState.error;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().layout),\n        style: {\n            backgroundImage: \"url(\" + \"\".concat(__webpack_require__(/*! ../../logo/ape.jpg */ \"./logo/ape.jpg?d63e\")) + \")\",\n            width: \"100%\",\n            height: \"100%\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: pageTitle\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: pageDescription\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: imageUrl\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"og:title\",\n                        content: pageTitle\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"og:description\",\n                        content: pageDescription\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"summary_large_image\"\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_HeaderInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().layoutMain),\n                children: hasAccountError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error_Error__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 28\n                }, this) : childrenWithProps\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n};\n_s(Layout, \"YpfvCkZp7t0D1tW3rNPWNRMNbC4=\", false, function() {\n    return [\n        _context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__.useAuthContext\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNpQjtBQUNSO0FBQ0E7QUFDSDtBQUU2QjtBQUNBO0FBRXRCOztBQUUxQixRQUFRLENBQUNTLE1BQU0sQ0FBQyxLQUs5QixFQUFFLENBQUM7UUFKRkMsUUFBUSxHQURxQixLQUs5QixDQUpDQSxRQUFRLEVBQ1JDLFNBQVMsR0FGb0IsS0FLOUIsQ0FIQ0EsU0FBUyxFQUNUQyxTQUFTLEdBSG9CLEtBSzlCLENBRkNBLFNBQVMsRUFDVEMsZUFBZSxHQUpjLEtBSzlCLENBRENBLGVBQWU7O0lBRWYsR0FBSyxDQUFDQyxRQUFRLEdBQUdILFNBQVMsSUFBSSxDQUFFO0lBQ2hDLEdBQUssQ0FBR0ksU0FBUyxHQUFLVCx5RUFBYyxHQUE1QlMsU0FBUztJQUVqQixHQUFLLENBQUNDLGlCQUFpQixHQUFHaEIseURBQWtCLENBQUNVLFFBQVEsRUFBRSxRQUFRLENBQVBTLEtBQUssRUFBSyxDQUFDO1FBQ2pFLEVBQWtFO1FBQ2xFLEVBQWE7UUFDYixFQUFFLGdCQUFFbkIsMkRBQW9CLENBQUNtQixLQUFLLEdBQUcsQ0FBQztZQUNoQyxNQUFNLGVBQUNuQix5REFBa0IsQ0FBQ21CLEtBQUs7UUFDakMsQ0FBQztRQUNELE1BQU0sQ0FBQ0EsS0FBSztJQUNkLENBQUM7SUFFRCxHQUFLLENBQUNHLGVBQWUsR0FBR1AsU0FBUyxDQUFDUSxNQUFNLEtBQUtoQixxRUFBYyxJQUFJUSxTQUFTLENBQUNTLEtBQUs7SUFFOUUsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVsQixtRUFBYTtRQUFFb0IsS0FBSyxFQUFFLENBQUNDO1lBQUFBLGVBQWUsRUFBRSxDQUFNLFFBQUksR0FBZ0MsT0FBOUJDLG1CQUFPLENBQUMsK0NBQW9CLEtBQU0sQ0FBRztZQUFHQyxLQUFLLEVBQUUsQ0FBTTtZQUN6SEMsTUFBTSxFQUFFLENBQU07WUFDZEMsZ0JBQWdCLEVBQUUsQ0FBVztZQUM3QkMsY0FBYyxFQUFFLENBQU87UUFBQSxDQUFDOzt3RkFDckJqQyxrREFBSTs7Z0dBQ0ZrQyxDQUFLO2tDQUFFdkIsU0FBUzs7Ozs7O2dHQUNoQndCLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUV6QixlQUFlOzs7Ozs7Z0dBQ2hEdUIsQ0FBSTt3QkFBQ0csUUFBUSxFQUFDLENBQVU7d0JBQUNELE9BQU8sRUFBRXhCLFFBQVE7Ozs7OztnR0FDMUNzQixDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFFMUIsU0FBUzs7Ozs7O2dHQUN2Q3dCLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFnQjt3QkFBQ0MsT0FBTyxFQUFFekIsZUFBZTs7Ozs7O2dHQUNuRHVCLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFjO3dCQUFDQyxPQUFPLEVBQUMsQ0FBcUI7Ozs7Ozs7Ozs7Ozt3RkFFeERwQywwREFBVTs7Ozs7d0ZBQ1ZDLHNEQUFNOzs7Ozt3RkFFTnFDLENBQUk7Z0JBQUNkLFNBQVMsRUFBRWxCLHVFQUFpQjswQkFDL0JjLGVBQWUsK0VBQUlqQixvREFBSzs7OzsyQkFBTVcsaUJBQWlCOzs7Ozs7d0ZBSWpEWixzREFBTTs7Ozs7Ozs7Ozs7QUFHYixDQUFDO0dBNUN1QkssTUFBTTs7UUFPTkgscUVBQWM7OztLQVBkRyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qc3g/MmQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVySW5mbyBmcm9tICcuLi9oZWFkZXIvSGVhZGVySW5mbydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL0Zvb3RlcidcbmltcG9ydCBFcnJvciBmcm9tICcuLi9lcnJvci9FcnJvcidcblxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnXG5pbXBvcnQgeyBBQ0NPVU5UU19FUlJPUiB9IGZyb20gJy4uLy4uL2NvbnRleHQvYXV0aC9hdXRoUmVkdWNlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcbiAgY2hpbGRyZW4sXG4gIHBhZ2VJbWFnZSxcbiAgcGFnZVRpdGxlLFxuICBwYWdlRGVzY3JpcHRpb24sXG59KSB7XG4gIGNvbnN0IGltYWdlVXJsID0gcGFnZUltYWdlIHx8ICcnXG4gIGNvbnN0IHsgYXV0aFN0YXRlIH0gPSB1c2VBdXRoQ29udGV4dCgpXG5cbiAgY29uc3QgY2hpbGRyZW5XaXRoUHJvcHMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgIC8vIENoZWNraW5nIGlzVmFsaWRFbGVtZW50IGlzIHRoZSBzYWZlIHdheSBhbmQgYXZvaWRzIGEgdHlwZXNjcmlwdFxuICAgIC8vIGVycm9yIHRvby5cbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkKVxuICAgIH1cbiAgICByZXR1cm4gY2hpbGRcbiAgfSlcblxuICBjb25zdCBoYXNBY2NvdW50RXJyb3IgPSBhdXRoU3RhdGUuc3RhdHVzID09PSBBQ0NPVU5UU19FUlJPUiB8fCBhdXRoU3RhdGUuZXJyb3JcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vLi4vbG9nby9hcGUuanBnXCIpfWAgKyBcIilcIiAsIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIn19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2VEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlVXJsfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2VEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXJJbmZvIC8+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmxheW91dE1haW59PlxuICAgICAgICB7aGFzQWNjb3VudEVycm9yID8gPEVycm9yIC8+IDogY2hpbGRyZW5XaXRoUHJvcHN9XG4gICAgICA8L21haW4+XG4gICAgICBcblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiSGVhZGVySW5mbyIsIkhlYWRlciIsIkZvb3RlciIsIkVycm9yIiwidXNlQXV0aENvbnRleHQiLCJBQ0NPVU5UU19FUlJPUiIsInN0eWxlcyIsIkxheW91dCIsImNoaWxkcmVuIiwicGFnZUltYWdlIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJhdXRoU3RhdGUiLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsImhhc0FjY291bnRFcnJvciIsInN0YXR1cyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibGF5b3V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXF1aXJlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwibWFpbiIsImxheW91dE1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.jsx\n");

/***/ })

});