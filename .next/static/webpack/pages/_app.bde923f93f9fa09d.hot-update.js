"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/avaxape/avaxapeContext.js":
/*!*******************************************!*\
  !*** ./context/avaxape/avaxapeContext.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AvaxApeProvider\": function() { return /* binding */ AvaxApeProvider; },\n/* harmony export */   \"useAvaxApeContext\": function() { return /* binding */ useAvaxApeContext; }\n/* harmony export */ });\n/* harmony import */ var _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../artifacts/contracts/newContract.sol/AVAXAPE.json */ \"./artifacts/contracts/newContract.sol/AVAXAPE.json\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar AvaxApeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AvaxApeProvider = function(param1) {\n    var children = param1.children;\n    _s();\n    var authState = (0,_auth_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)().authState;\n    // Create a state variable to hold an instance of the AvaxApe contract\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), contractInterface = ref[0], setContractInterface = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // If user is connected to site via MetaMask\n        if (authState.data.length) {\n            // Get the current provider (defaults to the currently selected network)\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n            // Get the signer (defaults to the currently selected account)\n            var signer = provider.getSigner();\n            // This address will be different for every network\n            var contractAddress = \"0x55a4eDd8A2c051079b426E9fbdEe285368824a89\";\n            // Initialise the contract instance\n            console.log(_artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            var contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            // Store this instance in the state\n            setContractInterface(contract);\n        }\n    }, [\n        authState.data\n    ]);\n    var invest = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var messageData, onSuccess, onError, value, overrides, tx;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        messageData = param.messageData, onSuccess = param.onSuccess, onError = param.onError;\n                        value = messageData;\n                        overrides = {};\n                        // If user is sending some AVAX\n                        if (value) {\n                            overrides.value = ethers__WEBPACK_IMPORTED_MODULE_6__.utils.parseEther(\"1.2\");\n                        }\n                        _ctx.next = 6;\n                        return contractInterface.invest(\"0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC\", 1, overrides);\n                    case 6:\n                        tx = _ctx.sent;\n                        _ctx.prev = 7;\n                        _ctx.next = 10;\n                        return tx.wait();\n                    case 10:\n                        if (onSuccess && typeof onSuccess === 'function') onSuccess(tx);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](7);\n                        if (onError && typeof onError === 'function') onError(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    7,\n                    13\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var withdraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var onSuccess, onError, tx;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return contractInterface.withdraw();\n                    case 4:\n                        tx = _ctx.sent;\n                        _ctx.next = 7;\n                        return tx.wait();\n                    case 7:\n                        if (onSuccess && typeof onSuccess == 'function') onSuccess(tx);\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (onError && typeof onError == 'function') onError(_ctx.t0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var getPlanInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var onSuccess, onError, result;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.next = 3;\n                        return contractInterface.getPlanInfo(1);\n                    case 3:\n                        result = _ctx.sent;\n                        return _ctx.abrupt(\"return\", result);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    /*\n  const getNumOfMessages = useCallback(\n    async ({ onSuccess, onError }) => {\n      try {\n        const tx = await contractInterface.getNumOfMessages()\n        const numOfMessages = tx.toNumber()\n\n        if (onSuccess && typeof onSuccess === 'function')\n          onSuccess(numOfMessages)\n      } catch (error) {\n        if (onError && typeof onError === 'function') onError(error)\n      }\n    },\n    [contractInterface]\n  )\n  */ var contextData = {\n        contractInterface: contractInterface,\n        invest: invest,\n        withdraw: withdraw,\n        getPlanInfo: getPlanInfo\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvaxApeContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/laszlofreund/blockthatchain/project/context/avaxape/avaxapeContext.js\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, _this));\n};\n_s(AvaxApeProvider, \"k9/IRspFKkS2CSSB+L6xlCa3Wxs=\", false, function() {\n    return [\n        _auth_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext\n    ];\n});\n_c = AvaxApeProvider;\nvar useAvaxApeContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AvaxApeContext);\n};\n_s1(useAvaxApeContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AvaxApeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F2YXhhcGUvYXZheGFwZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWM7QUFDbUM7QUFFRztBQUN3QjtBQUVyRDtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsR0FBSyxDQUFDWSxjQUFjLGlCQUFHWixvREFBYTtBQUU3QixHQUFLLENBQUNhLGVBQWUsR0FBRyxRQUFRLFNBQVUsQ0FBQztRQUFoQkMsUUFBUSxVQUFSQSxRQUFROztJQUN4QyxHQUFLLENBQUdDLFNBQVMsR0FBS1AsaUVBQWMsR0FBNUJPLFNBQVM7SUFDakIsRUFBc0U7SUFDdEUsR0FBSyxDQUE2Q1gsR0FBVSxHQUFWQSwrQ0FBUSxJQUFuRFksaUJBQWlCLEdBQTBCWixHQUFVLEtBQWxDYSxvQkFBb0IsR0FBSWIsR0FBVTtJQUU1REQsZ0RBQVMsQ0FBQyxRQUFRLEdBQUQsQ0FBQztRQUNoQixFQUE0QztRQUM1QyxFQUFFLEVBQUVZLFNBQVMsQ0FBQ0csSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztZQUMxQixFQUF3RTtZQUN4RSxHQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNkLGlFQUE2QixDQUFDaUIsTUFBTSxDQUFDQyxRQUFRO1lBRWxFLEVBQThEO1lBQzlELEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxRQUFRLENBQUNNLFNBQVM7WUFFakMsRUFBbUQ7WUFDbkQsR0FBSyxDQUFDQyxlQUFlLEdBQUcsQ0FBNEM7WUFDcEUsRUFBbUM7WUFFbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcEIsa0ZBQVcsRUFBRWdCLE1BQU07WUFDL0IsR0FBSyxDQUFDTSxRQUFRLEdBQUcsR0FBRyxDQUFDekIsbURBQWUsQ0FDbENxQixlQUFlLEVBQ2ZsQixrRkFBVyxFQUNYZ0IsTUFBTTtZQUlSLEVBQW1DO1lBQ25DUixvQkFBb0IsQ0FBQ2MsUUFBUTtRQUUvQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNoQjtRQUFBQSxTQUFTLENBQUNHLElBQUk7SUFBQSxDQUFDO0lBRW5CLEdBQUssQ0FBQ2UsTUFBTSxHQUFHaEMsa0RBQVc7MExBQ3hCLFFBQVEsZ0JBQXVDLENBQUM7Z0JBQXZDaUMsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFFaENDLEtBQUssRUFDTEMsU0FBUyxFQVNUQyxFQUFFOzs7O3dCQVpETCxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLE9BQU8sU0FBUEEsT0FBTzt3QkFFaENDLEtBQUssR0FBR0gsV0FBVzt3QkFDbkJJLFNBQVMsR0FBRyxDQUFDLENBQUM7d0JBR3BCLEVBQStCO3dCQUMvQixFQUFFLEVBQUVELEtBQUssRUFBRSxDQUFDOzRCQUNWQyxTQUFTLENBQUNELEtBQUssR0FBRzlCLG9EQUFnQixDQUFDLENBQUs7d0JBQzFDLENBQUM7OytCQUdnQlMsaUJBQWlCLENBQUNpQixNQUFNLENBQ3pDLENBQTRDLDZDQUMzQyxDQUFDLEVBQ0RLLFNBQVM7O3dCQUhKQyxFQUFFOzs7K0JBU0FBLEVBQUUsQ0FBQ0MsSUFBSTs7d0JBRWIsRUFBRSxFQUFFTCxTQUFTLElBQUksTUFBTSxDQUFDQSxTQUFTLEtBQUssQ0FBVSxXQUFFQSxTQUFTLENBQUNJLEVBQUU7Ozs7Ozt3QkFFOUQsRUFBRSxFQUFFSCxPQUFPLElBQUksTUFBTSxDQUFDQSxPQUFPLEtBQUssQ0FBVSxXQUFFQSxPQUFPOzs7Ozs7Ozs7OztRQUV6RCxDQUFDOzs7O1NBQ0QsQ0FBQ3BCO1FBQUFBLGlCQUFpQjtJQUFBLENBQUM7SUFJckIsR0FBSyxDQUFDeUIsUUFBUSxHQUFHeEMsa0RBQVc7MExBQzFCLFFBQVFrQyxnQkFBd0IsQ0FBQztnQkFBekJBLFNBQVMsRUFBRUMsT0FBTyxFQUVoQkcsRUFBRTs7Ozt3QkFGSkosU0FBUyxTQUFUQSxTQUFTLEVBQUVDLE9BQU8sU0FBUEEsT0FBTzs7OytCQUVMcEIsaUJBQWlCLENBQUN5QixRQUFROzt3QkFBckNGLEVBQUU7OytCQUVGQSxFQUFFLENBQUNDLElBQUk7O3dCQUViLEVBQUUsRUFBQ0wsU0FBUyxJQUFJLE1BQU0sQ0FBQ0EsU0FBUyxJQUFJLENBQVUsV0FBRUEsU0FBUyxDQUFDSSxFQUFFOzs7Ozs7d0JBRzVELEVBQUUsRUFBRUgsT0FBTyxJQUFJLE1BQU0sQ0FBQ0EsT0FBTyxJQUFJLENBQVUsV0FBRUEsT0FBTzs7Ozs7Ozs7Ozs7UUFFeEQsQ0FBQzs7OztTQUNELENBQUNwQjtRQUFBQSxpQkFBaUI7SUFBQSxDQUFDO0lBSXJCLEdBQUssQ0FBQzBCLFdBQVcsR0FBR3pDLGtEQUFXOzBMQUM1QixRQUFRa0MsZ0JBQXlCLENBQUM7Z0JBQTFCQSxTQUFTLEVBQUVDLE9BQU8sRUFFbkJPLE1BQU07Ozs7d0JBRkxSLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxPQUFPLFNBQVBBLE9BQU87OytCQUVKcEIsaUJBQWlCLENBQUMwQixXQUFXLENBQUMsQ0FBQzs7d0JBQTlDQyxNQUFNO3FEQUVMQSxNQUFNOzs7Ozs7UUFDakIsQ0FBQzs7OztTQUFFLENBQUMzQjtRQUFBQSxpQkFBaUI7SUFBQSxDQUFDO0lBSXRCLEVBZUU7Ozs7Ozs7Ozs7Ozs7OztFQUFBLEdBS0YsR0FBSyxDQUFDNEIsV0FBVyxHQUFHLENBQUM7UUFDbkI1QixpQkFBaUIsRUFBakJBLGlCQUFpQjtRQUNqQmlCLE1BQU0sRUFBTkEsTUFBTTtRQUNOUSxRQUFRLEVBQVJBLFFBQVE7UUFDUkMsV0FBVyxFQUFYQSxXQUFXO0lBQ2IsQ0FBQztJQUVELE1BQU0sNkVBQ0g5QixjQUFjLENBQUNpQyxRQUFRO1FBQUNSLEtBQUssRUFBRU8sV0FBVztrQkFDeEM5QixRQUFROzs7Ozs7QUFHZixDQUFDO0dBNUhZRCxlQUFlOztRQUNKTCw2REFBYzs7O0tBRHpCSyxlQUFlO0FBOEhyQixHQUFLLENBQUNpQyxpQkFBaUIsR0FBRyxRQUFRLEdBQUY1QyxDQUFDOztJQUFEQSxNQUFNLENBQU5BLGlEQUFVLENBQUNVLGNBQWM7QUFBQSxDQUFDO0lBQXBEa0MsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvYXZheGFwZS9hdmF4YXBlQ29udGV4dC5qcz85NmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJpZ051bWJlciwgZXRoZXJzLCB1dGlscyB9IGZyb20gJ2V0aGVycydcblxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tICcuLi9hdXRoL2F1dGhDb250ZXh0J1xuaW1wb3J0IEFWQVhBUEUgZnJvbSAnLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9uZXdDb250cmFjdC5zb2wvQVZBWEFQRS5qc29uJ1xuXG5pbXBvcnQgd2ViMyBmcm9tICd3ZWIzJ1xuaW1wb3J0IHsgcGFyc2VFdGhlciB9IGZyb20gJ2V0aGVycy9saWIvdXRpbHMnXG5cbmNvbnN0IEF2YXhBcGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBjb25zdCBBdmF4QXBlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgYXV0aFN0YXRlIH0gPSB1c2VBdXRoQ29udGV4dCgpXG4gIC8vIENyZWF0ZSBhIHN0YXRlIHZhcmlhYmxlIHRvIGhvbGQgYW4gaW5zdGFuY2Ugb2YgdGhlIEF2YXhBcGUgY29udHJhY3RcbiAgY29uc3QgW2NvbnRyYWN0SW50ZXJmYWNlLCBzZXRDb250cmFjdEludGVyZmFjZV0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+ICB7XG4gICAgLy8gSWYgdXNlciBpcyBjb25uZWN0ZWQgdG8gc2l0ZSB2aWEgTWV0YU1hc2tcbiAgICBpZiAoYXV0aFN0YXRlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcHJvdmlkZXIgKGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbmV0d29yaylcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSlcblxuICAgICAgLy8gR2V0IHRoZSBzaWduZXIgKGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgYWNjb3VudClcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG5cbiAgICAgIC8vIFRoaXMgYWRkcmVzcyB3aWxsIGJlIGRpZmZlcmVudCBmb3IgZXZlcnkgbmV0d29ya1xuICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDU1YTRlRGQ4QTJjMDUxMDc5YjQyNkU5ZmJkRWUyODUzNjg4MjRhODlcIlxuICAgICAgLy8gSW5pdGlhbGlzZSB0aGUgY29udHJhY3QgaW5zdGFuY2VcblxuICAgICAgY29uc29sZS5sb2coQVZBWEFQRS5hYmksIHNpZ25lcilcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgICBBVkFYQVBFLmFiaSxcbiAgICAgICAgc2lnbmVyXG4gICAgICApXG5cblxuICAgICAgLy8gU3RvcmUgdGhpcyBpbnN0YW5jZSBpbiB0aGUgc3RhdGVcbiAgICAgIHNldENvbnRyYWN0SW50ZXJmYWNlKGNvbnRyYWN0KVxuXG4gICAgfVxuICB9LCBbYXV0aFN0YXRlLmRhdGFdKVxuXG4gIGNvbnN0IGludmVzdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh7IG1lc3NhZ2VEYXRhLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IG1lc3NhZ2VEYXRhXG4gICAgICBjb25zdCBvdmVycmlkZXMgPSB7fVxuXG4gICAgICBcbiAgICAgIC8vIElmIHVzZXIgaXMgc2VuZGluZyBzb21lIEFWQVhcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBvdmVycmlkZXMudmFsdWUgPSB1dGlscy5wYXJzZUV0aGVyKFwiMS4yXCIpXG4gICAgICB9XG4gICAgICBcblxuICAgICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdEludGVyZmFjZS5pbnZlc3QoXG4gICAgICBcIjB4OGRiOTdDN2NFY0UyNDljMmI5OGJEQzAyMjZDYzRDMkE1N0JGNTJGQ1wiLFxuICAgICAgIDEsXG4gICAgICAgb3ZlcnJpZGVzICBcbiAgICAgIClcblxuICAgICAgdHJ5IHtcblxuICAgICAgICAvLyBXZSBoYXZlIHRvIHdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZCBhbmQgYWRkZWQgdG8gYSBibG9ja1xuICAgICAgICBhd2FpdCB0eC53YWl0KClcbiAgICAgICAgICBcbiAgICAgICAgaWYgKG9uU3VjY2VzcyAmJiB0eXBlb2Ygb25TdWNjZXNzID09PSAnZnVuY3Rpb24nKSBvblN1Y2Nlc3ModHgpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAob25FcnJvciAmJiB0eXBlb2Ygb25FcnJvciA9PT0gJ2Z1bmN0aW9uJykgb25FcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb250cmFjdEludGVyZmFjZV1cbiAgKVxuXG5cbiAgY29uc3Qgd2l0aGRyYXcgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoe29uU3VjY2Vzcywgb25FcnJvcn0pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3RJbnRlcmZhY2Uud2l0aGRyYXcoKVxuXG4gICAgICAgIGF3YWl0IHR4LndhaXQoKVxuXG4gICAgICAgIGlmKG9uU3VjY2VzcyAmJiB0eXBlb2Ygb25TdWNjZXNzID09ICdmdW5jdGlvbicpIG9uU3VjY2Vzcyh0eClcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnJvcil7XG4gICAgICAgIGlmIChvbkVycm9yICYmIHR5cGVvZiBvbkVycm9yID09ICdmdW5jdGlvbicpIG9uRXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfSxcbiAgICBbY29udHJhY3RJbnRlcmZhY2VdIFxuICApXG5cblxuICBjb25zdCBnZXRQbGFuSW5mbyA9IHVzZUNhbGxiYWNrKFxuICAgICBhc3luYyAoe29uU3VjY2Vzcywgb25FcnJvcn0pICA9PiB7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0SW50ZXJmYWNlLmdldFBsYW5JbmZvKDEpXG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgfSwgW2NvbnRyYWN0SW50ZXJmYWNlXSlcbiAgXG5cblxuICAvKlxuICBjb25zdCBnZXROdW1PZk1lc3NhZ2VzID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHsgb25TdWNjZXNzLCBvbkVycm9yIH0pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3RJbnRlcmZhY2UuZ2V0TnVtT2ZNZXNzYWdlcygpXG4gICAgICAgIGNvbnN0IG51bU9mTWVzc2FnZXMgPSB0eC50b051bWJlcigpXG5cbiAgICAgICAgaWYgKG9uU3VjY2VzcyAmJiB0eXBlb2Ygb25TdWNjZXNzID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgIG9uU3VjY2VzcyhudW1PZk1lc3NhZ2VzKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKG9uRXJyb3IgJiYgdHlwZW9mIG9uRXJyb3IgPT09ICdmdW5jdGlvbicpIG9uRXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfSxcbiAgICBbY29udHJhY3RJbnRlcmZhY2VdXG4gIClcbiAgKi9cblxuXG5cblxuICBjb25zdCBjb250ZXh0RGF0YSA9IHtcbiAgICBjb250cmFjdEludGVyZmFjZSxcbiAgICBpbnZlc3QsXG4gICAgd2l0aGRyYXcsXG4gICAgZ2V0UGxhbkluZm8sXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdmF4QXBlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dERhdGF9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXZheEFwZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF2YXhBcGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChBdmF4QXBlQ29udGV4dClcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCaWdOdW1iZXIiLCJldGhlcnMiLCJ1dGlscyIsInVzZUF1dGhDb250ZXh0IiwiQVZBWEFQRSIsIndlYjMiLCJwYXJzZUV0aGVyIiwiQXZheEFwZUNvbnRleHQiLCJBdmF4QXBlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGhTdGF0ZSIsImNvbnRyYWN0SW50ZXJmYWNlIiwic2V0Q29udHJhY3RJbnRlcmZhY2UiLCJkYXRhIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJhYmkiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiaW52ZXN0IiwibWVzc2FnZURhdGEiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwidmFsdWUiLCJvdmVycmlkZXMiLCJ0eCIsIndhaXQiLCJ3aXRoZHJhdyIsImdldFBsYW5JbmZvIiwicmVzdWx0IiwiY29udGV4dERhdGEiLCJQcm92aWRlciIsInVzZUF2YXhBcGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/avaxape/avaxapeContext.js\n");

/***/ })

});