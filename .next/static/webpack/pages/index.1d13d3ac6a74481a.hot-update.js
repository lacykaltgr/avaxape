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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_HeaderInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/HeaderInfo */ \"./components/header/HeaderInfo.jsx\");\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/Header */ \"./components/header/Header.jsx\");\n/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/Footer */ \"./components/footer/Footer.jsx\");\n/* harmony import */ var _error_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/Error */ \"./components/error/Error.jsx\");\n/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _context_auth_authReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/auth/authReducer */ \"./context/auth/authReducer.js\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout.module.scss */ \"./components/layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var children = param.children, pageImage = param.pageImage, pageTitle = param.pageTitle, pageDescription = param.pageDescription;\n    _s();\n    var imageUrl = pageImage || '';\n    var authState = (0,_context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__.useAuthContext)().authState;\n    var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, function(child) {\n        // Checking isValidElement is the safe way and avoids a typescript\n        // error too.\n        if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {\n            return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child));\n        }\n        return child;\n    });\n    var hasAccountError = authState.status === _context_auth_authReducer__WEBPACK_IMPORTED_MODULE_8__.ACCOUNTS_ERROR || authState.error;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().layout),\n        style: {\n            backgroundImage: \"url(\" + \"\".concat(__webpack_require__(/*! ../../logo/ape.jpg */ \"./logo/ape.jpg?d63e\")) + \")\",\n            width: \"100%\",\n            height: \"2000px\",\n            backgroundRepeat: \"round\",\n            backgroundAttachment: \"fixed\",\n            backgroundSize: \"cover\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: pageTitle\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: pageDescription\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: imageUrl\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"og:title\",\n                        content: pageTitle\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"og:description\",\n                        content: pageDescription\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"summary_large_image\"\n                    }, void 0, false, {\n                        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_HeaderInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().layoutMain),\n                children: hasAccountError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error_Error__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 28\n                }, this) : childrenWithProps\n            }, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/laszlofreund/blockthatchain/project/components/layout/Layout.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n};\n_s(Layout, \"YpfvCkZp7t0D1tW3rNPWNRMNbC4=\", false, function() {\n    return [\n        _context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__.useAuthContext\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNpQjtBQUNSO0FBQ0E7QUFDSDtBQUU2QjtBQUNBO0FBRXRCOztBQUUxQixRQUFRLENBQUNTLE1BQU0sQ0FBQyxLQUs5QixFQUFFLENBQUM7UUFKRkMsUUFBUSxHQURxQixLQUs5QixDQUpDQSxRQUFRLEVBQ1JDLFNBQVMsR0FGb0IsS0FLOUIsQ0FIQ0EsU0FBUyxFQUNUQyxTQUFTLEdBSG9CLEtBSzlCLENBRkNBLFNBQVMsRUFDVEMsZUFBZSxHQUpjLEtBSzlCLENBRENBLGVBQWU7O0lBRWYsR0FBSyxDQUFDQyxRQUFRLEdBQUdILFNBQVMsSUFBSSxDQUFFO0lBQ2hDLEdBQUssQ0FBR0ksU0FBUyxHQUFLVCx5RUFBYyxHQUE1QlMsU0FBUztJQUVqQixHQUFLLENBQUNDLGlCQUFpQixHQUFHaEIseURBQWtCLENBQUNVLFFBQVEsRUFBRSxRQUFRLENBQVBTLEtBQUssRUFBSyxDQUFDO1FBQ2pFLEVBQWtFO1FBQ2xFLEVBQWE7UUFDYixFQUFFLGdCQUFFbkIsMkRBQW9CLENBQUNtQixLQUFLLEdBQUcsQ0FBQztZQUNoQyxNQUFNLGVBQUNuQix5REFBa0IsQ0FBQ21CLEtBQUs7UUFDakMsQ0FBQztRQUNELE1BQU0sQ0FBQ0EsS0FBSztJQUNkLENBQUM7SUFFRCxHQUFLLENBQUNHLGVBQWUsR0FBR1AsU0FBUyxDQUFDUSxNQUFNLEtBQUtoQixxRUFBYyxJQUFJUSxTQUFTLENBQUNTLEtBQUs7SUFFOUUsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVsQixtRUFBYTtRQUFFb0IsS0FBSyxFQUFFLENBQUNDO1lBQUFBLGVBQWUsRUFBRSxDQUFNLFFBQUksR0FBZ0MsT0FBOUJDLG1CQUFPLENBQUMsK0NBQW9CLEtBQU0sQ0FBRztZQUFHQyxLQUFLLEVBQUUsQ0FBTTtZQUN6SEMsTUFBTSxFQUFFLENBQVE7WUFDaEJDLGdCQUFnQixFQUFFLENBQU87WUFDekJDLG9CQUFvQixFQUFFLENBQU87WUFDN0JDLGNBQWMsRUFBRSxDQUFPO1FBQUEsQ0FBQzs7d0ZBQ3JCbEMsa0RBQUk7O2dHQUNGbUMsQ0FBSztrQ0FBRXhCLFNBQVM7Ozs7OztnR0FDaEJ5QixDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ0MsT0FBTyxFQUFFMUIsZUFBZTs7Ozs7O2dHQUNoRHdCLENBQUk7d0JBQUNHLFFBQVEsRUFBQyxDQUFVO3dCQUFDRCxPQUFPLEVBQUV6QixRQUFROzs7Ozs7Z0dBQzFDdUIsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBRTNCLFNBQVM7Ozs7OztnR0FDdkN5QixDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBZ0I7d0JBQUNDLE9BQU8sRUFBRTFCLGVBQWU7Ozs7OztnR0FDbkR3QixDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzt3QkFBQ0MsT0FBTyxFQUFDLENBQXFCOzs7Ozs7Ozs7Ozs7d0ZBRXhEckMsMERBQVU7Ozs7O3dGQUNWQyxzREFBTTs7Ozs7d0ZBRU5zQyxDQUFJO2dCQUFDZixTQUFTLEVBQUVsQix1RUFBaUI7MEJBQy9CYyxlQUFlLCtFQUFJakIsb0RBQUs7Ozs7MkJBQU1XLGlCQUFpQjs7Ozs7O3dGQUlqRFosc0RBQU07Ozs7Ozs7Ozs7O0FBR2IsQ0FBQztHQTdDdUJLLE1BQU07O1FBT05ILHFFQUFjOzs7S0FQZEcsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanN4PzJkNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlckluZm8gZnJvbSAnLi4vaGVhZGVyL0hlYWRlckluZm8nXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9Gb290ZXInXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vZXJyb3IvRXJyb3InXG5cbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0J1xuaW1wb3J0IHsgQUNDT1VOVFNfRVJST1IgfSBmcm9tICcuLi8uLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XG4gIGNoaWxkcmVuLFxuICBwYWdlSW1hZ2UsXG4gIHBhZ2VUaXRsZSxcbiAgcGFnZURlc2NyaXB0aW9uLFxufSkge1xuICBjb25zdCBpbWFnZVVybCA9IHBhZ2VJbWFnZSB8fCAnJ1xuICBjb25zdCB7IGF1dGhTdGF0ZSB9ID0gdXNlQXV0aENvbnRleHQoKVxuXG4gIGNvbnN0IGNoaWxkcmVuV2l0aFByb3BzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAvLyBDaGVja2luZyBpc1ZhbGlkRWxlbWVudCBpcyB0aGUgc2FmZSB3YXkgYW5kIGF2b2lkcyBhIHR5cGVzY3JpcHRcbiAgICAvLyBlcnJvciB0b28uXG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZClcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkXG4gIH0pXG5cbiAgY29uc3QgaGFzQWNjb3VudEVycm9yID0gYXV0aFN0YXRlLnN0YXR1cyA9PT0gQUNDT1VOVFNfRVJST1IgfHwgYXV0aFN0YXRlLmVycm9yXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dH0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uLy4uL2xvZ28vYXBlLmpwZ1wiKX1gICsgXCIpXCIgLCB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjIwMDBweFwiLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwicm91bmRcIixcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogXCJmaXhlZFwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJ9fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3BhZ2VUaXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwYWdlRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZVVybH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwYWdlRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVySW5mbyAvPlxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRNYWlufT5cbiAgICAgICAge2hhc0FjY291bnRFcnJvciA/IDxFcnJvciAvPiA6IGNoaWxkcmVuV2l0aFByb3BzfVxuICAgICAgPC9tYWluPlxuICAgICAgXG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkhlYWRlckluZm8iLCJIZWFkZXIiLCJGb290ZXIiLCJFcnJvciIsInVzZUF1dGhDb250ZXh0IiwiQUNDT1VOVFNfRVJST1IiLCJzdHlsZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInBhZ2VJbWFnZSIsInBhZ2VUaXRsZSIsInBhZ2VEZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiYXV0aFN0YXRlIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJoYXNBY2NvdW50RXJyb3IiLCJzdGF0dXMiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImxheW91dCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicmVxdWlyZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFNpemUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwibWFpbiIsImxheW91dE1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.jsx\n");

/***/ })

});