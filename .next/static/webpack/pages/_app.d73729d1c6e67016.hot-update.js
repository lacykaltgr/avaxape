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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AvaxApeProvider\": function() { return /* binding */ AvaxApeProvider; },\n/* harmony export */   \"useAvaxApeContext\": function() { return /* binding */ useAvaxApeContext; }\n/* harmony export */ });\n/* harmony import */ var _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../artifacts/contracts/newContract.sol/AVAXAPE.json */ \"./artifacts/contracts/newContract.sol/AVAXAPE.json\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar AvaxApeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AvaxApeProvider = function(param1) {\n    var children = param1.children;\n    _s();\n    var authState = (0,_auth_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)().authState;\n    // Create a state variable to hold an instance of the AvaxApe contract\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), contractInterface = ref[0], setContractInterface = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // If user is connected to site via MetaMask\n        if (authState.data.length) {\n            // Get the current provider (defaults to the currently selected network)\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n            // Get the signer (defaults to the currently selected account)\n            var signer = provider.getSigner();\n            // This address will be different for every network\n            var contractAddress = \"0x55a4eDd8A2c051079b426E9fbdEe285368824a89\";\n            // Initialise the contract instance\n            console.log(_artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            var contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            // Store this instance in the state\n            setContractInterface(contract);\n        }\n    }, [\n        authState.data\n    ]);\n    var invest = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var messageData, onSuccess, onError, value, overrides, tx;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        messageData = param.messageData, onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.prev = 1;\n                        value = messageData;\n                        overrides = {};\n                        // If user is sending some AVAX\n                        if (value) {\n                            overrides.value = ethers__WEBPACK_IMPORTED_MODULE_6__.utils.parseEther(\"12\");\n                        }\n                        overrides.gasLimit = 22000;\n                        _ctx.next = 8;\n                        return contractInterface.invest(\"0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC\", 1, overrides);\n                    case 8:\n                        tx = _ctx.sent;\n                        _ctx.next = 11;\n                        return tx.wait();\n                    case 11:\n                        if (onSuccess && typeof onSuccess === 'function') onSuccess(tx);\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (onError && typeof onError === 'function') onError(_ctx.t0);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var withdraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var onSuccess, onError, tx;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return contractInterface.withdraw();\n                    case 4:\n                        tx = _ctx.sent;\n                        _ctx.next = 7;\n                        return tx.wait();\n                    case 7:\n                        if (onSuccess && typeof onSuccess == 'function') onSuccess(tx);\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (onError && typeof onError == 'function') onError(_ctx.t0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var getPlanInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var onSuccess, onError, result;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.next = 3;\n                        return contractInterface.getPlanInfo(1);\n                    case 3:\n                        result = _ctx.sent;\n                        return _ctx.abrupt(\"return\", result);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    /*\n  const getNumOfMessages = useCallback(\n    async ({ onSuccess, onError }) => {\n      try {\n        const tx = await contractInterface.getNumOfMessages()\n        const numOfMessages = tx.toNumber()\n\n        if (onSuccess && typeof onSuccess === 'function')\n          onSuccess(numOfMessages)\n      } catch (error) {\n        if (onError && typeof onError === 'function') onError(error)\n      }\n    },\n    [contractInterface]\n  )\n  */ var contextData = {\n        contractInterface: contractInterface,\n        invest: invest,\n        withdraw: withdraw,\n        getPlanInfo: getPlanInfo\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvaxApeContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/laszlofreund/blockthatchain/project/context/avaxape/avaxapeContext.js\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, _this));\n};\n_s(AvaxApeProvider, \"k9/IRspFKkS2CSSB+L6xlCa3Wxs=\", false, function() {\n    return [\n        _auth_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext\n    ];\n});\n_c = AvaxApeProvider;\nvar useAvaxApeContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AvaxApeContext);\n};\n_s1(useAvaxApeContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AvaxApeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdmF4YXBlL2F2YXhhcGVDb250ZXh0LmpzPzk2YWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCxcbiAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBldGhlcnMsIHV0aWxzIH0gZnJvbSAnZXRoZXJzJ1xuXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gJy4uL2F1dGgvYXV0aENvbnRleHQnXG5pbXBvcnQgQVZBWEFQRSBmcm9tICcuLi8uLi9hcnRpZmFjdHMvY29udHJhY3RzL25ld0NvbnRyYWN0LnNvbC9BVkFYQVBFLmpzb24nXG5cbmltcG9ydCB3ZWIzIGZyb20gJ3dlYjMnXG5pbXBvcnQgeyBwYXJzZUV0aGVyIH0gZnJvbSAnZXRoZXJzL2xpYi91dGlscydcblxuY29uc3QgQXZheEFwZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IEF2YXhBcGVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBhdXRoU3RhdGUgfSA9IHVzZUF1dGhDb250ZXh0KClcbiAgLy8gQ3JlYXRlIGEgc3RhdGUgdmFyaWFibGUgdG8gaG9sZCBhbiBpbnN0YW5jZSBvZiB0aGUgQXZheEFwZSBjb250cmFjdFxuICBjb25zdCBbY29udHJhY3RJbnRlcmZhY2UsIHNldENvbnRyYWN0SW50ZXJmYWNlXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4gIHtcbiAgICAvLyBJZiB1c2VyIGlzIGNvbm5lY3RlZCB0byBzaXRlIHZpYSBNZXRhTWFza1xuICAgIGlmIChhdXRoU3RhdGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCBwcm92aWRlciAoZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBuZXR3b3JrKVxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxuXG4gICAgICAvLyBHZXQgdGhlIHNpZ25lciAoZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBhY2NvdW50KVxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcblxuICAgICAgLy8gVGhpcyBhZGRyZXNzIHdpbGwgYmUgZGlmZmVyZW50IGZvciBldmVyeSBuZXR3b3JrXG4gICAgICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4NTVhNGVEZDhBMmMwNTEwNzliNDI2RTlmYmRFZTI4NTM2ODgyNGE4OVwiXG4gICAgICAvLyBJbml0aWFsaXNlIHRoZSBjb250cmFjdCBpbnN0YW5jZVxuXG4gICAgICBjb25zb2xlLmxvZyhBVkFYQVBFLmFiaSwgc2lnbmVyKVxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgIEFWQVhBUEUuYWJpLFxuICAgICAgICBzaWduZXJcbiAgICAgIClcblxuXG4gICAgICAvLyBTdG9yZSB0aGlzIGluc3RhbmNlIGluIHRoZSBzdGF0ZVxuICAgICAgc2V0Q29udHJhY3RJbnRlcmZhY2UoY29udHJhY3QpXG5cbiAgICB9XG4gIH0sIFthdXRoU3RhdGUuZGF0YV0pXG5cbiAgY29uc3QgaW52ZXN0ID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHsgbWVzc2FnZURhdGEsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG5cbiAgICAgIFxuXG4gICAgICB0cnkge1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IG1lc3NhZ2VEYXRhXG4gICAgICBjb25zdCBvdmVycmlkZXMgPSB7fVxuXG4gICAgICBcbiAgICAgIC8vIElmIHVzZXIgaXMgc2VuZGluZyBzb21lIEFWQVhcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBvdmVycmlkZXMudmFsdWUgPSB1dGlscy5wYXJzZUV0aGVyKFwiMTJcIilcbiAgICAgIH1cblxuICAgICAgb3ZlcnJpZGVzLmdhc0xpbWl0ID0gMjIwMDBcbiAgICAgIFxuXG4gICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0SW50ZXJmYWNlLmludmVzdChcbiAgICAgIFwiMHg4ZGI5N0M3Y0VjRTI0OWMyYjk4YkRDMDIyNkNjNEMyQTU3QkY1MkZDXCIsXG4gICAgICAgMSxcbiAgICAgICBvdmVycmlkZXMsXG4gICAgICApXG5cbiAgICAgICAgLy8gV2UgaGF2ZSB0byB3YWl0IGZvciB0aGUgdHJhbnNhY3Rpb24gdG8gYmUgbWluZWQgYW5kIGFkZGVkIHRvIGEgYmxvY2tcbiAgICAgICAgYXdhaXQgdHgud2FpdCgpXG4gICAgICAgICAgXG4gICAgICAgIGlmIChvblN1Y2Nlc3MgJiYgdHlwZW9mIG9uU3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykgb25TdWNjZXNzKHR4KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKG9uRXJyb3IgJiYgdHlwZW9mIG9uRXJyb3IgPT09ICdmdW5jdGlvbicpIG9uRXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfSxcbiAgICBbY29udHJhY3RJbnRlcmZhY2VdXG4gIClcblxuXG4gIGNvbnN0IHdpdGhkcmF3ID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHtvblN1Y2Nlc3MsIG9uRXJyb3J9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0SW50ZXJmYWNlLndpdGhkcmF3KClcblxuICAgICAgICBhd2FpdCB0eC53YWl0KClcblxuICAgICAgICBpZihvblN1Y2Nlc3MgJiYgdHlwZW9mIG9uU3VjY2VzcyA9PSAnZnVuY3Rpb24nKSBvblN1Y2Nlc3ModHgpXG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICBpZiAob25FcnJvciAmJiB0eXBlb2Ygb25FcnJvciA9PSAnZnVuY3Rpb24nKSBvbkVycm9yKGVycm9yKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NvbnRyYWN0SW50ZXJmYWNlXSBcbiAgKVxuXG5cbiAgY29uc3QgZ2V0UGxhbkluZm8gPSB1c2VDYWxsYmFjayhcbiAgICAgYXN5bmMgKHtvblN1Y2Nlc3MsIG9uRXJyb3J9KSAgPT4ge1xuICAgICAgXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdEludGVyZmFjZS5nZXRQbGFuSW5mbygxKVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtjb250cmFjdEludGVyZmFjZV0pXG4gIFxuXG5cbiAgLypcbiAgY29uc3QgZ2V0TnVtT2ZNZXNzYWdlcyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh7IG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0SW50ZXJmYWNlLmdldE51bU9mTWVzc2FnZXMoKVxuICAgICAgICBjb25zdCBudW1PZk1lc3NhZ2VzID0gdHgudG9OdW1iZXIoKVxuXG4gICAgICAgIGlmIChvblN1Y2Nlc3MgJiYgdHlwZW9mIG9uU3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICBvblN1Y2Nlc3MobnVtT2ZNZXNzYWdlcylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChvbkVycm9yICYmIHR5cGVvZiBvbkVycm9yID09PSAnZnVuY3Rpb24nKSBvbkVycm9yKGVycm9yKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NvbnRyYWN0SW50ZXJmYWNlXVxuICApXG4gICovXG5cblxuXG5cbiAgY29uc3QgY29udGV4dERhdGEgPSB7XG4gICAgY29udHJhY3RJbnRlcmZhY2UsXG4gICAgaW52ZXN0LFxuICAgIHdpdGhkcmF3LFxuICAgIGdldFBsYW5JbmZvLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXZheEFwZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHREYXRhfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F2YXhBcGVDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdmF4QXBlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQXZheEFwZUNvbnRleHQpXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmlnTnVtYmVyIiwiZXRoZXJzIiwidXRpbHMiLCJ1c2VBdXRoQ29udGV4dCIsIkFWQVhBUEUiLCJ3ZWIzIiwicGFyc2VFdGhlciIsIkF2YXhBcGVDb250ZXh0IiwiQXZheEFwZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoU3RhdGUiLCJjb250cmFjdEludGVyZmFjZSIsInNldENvbnRyYWN0SW50ZXJmYWNlIiwiZGF0YSIsImxlbmd0aCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdEFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiYWJpIiwiY29udHJhY3QiLCJDb250cmFjdCIsImludmVzdCIsIm1lc3NhZ2VEYXRhIiwib25TdWNjZXNzIiwib25FcnJvciIsInZhbHVlIiwib3ZlcnJpZGVzIiwidHgiLCJnYXNMaW1pdCIsIndhaXQiLCJ3aXRoZHJhdyIsImdldFBsYW5JbmZvIiwicmVzdWx0IiwiY29udGV4dERhdGEiLCJQcm92aWRlciIsInVzZUF2YXhBcGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/avaxape/avaxapeContext.js\n");

/***/ })

});