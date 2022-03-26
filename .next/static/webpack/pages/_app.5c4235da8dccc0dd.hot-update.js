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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AvaxApeProvider\": function() { return /* binding */ AvaxApeProvider; },\n/* harmony export */   \"useAvaxApeContext\": function() { return /* binding */ useAvaxApeContext; }\n/* harmony export */ });\n/* harmony import */ var _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../artifacts/contracts/newContract.sol/AVAXAPE.json */ \"./artifacts/contracts/newContract.sol/AVAXAPE.json\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar AvaxApeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AvaxApeProvider = function(param1) {\n    var children = param1.children;\n    _s();\n    var authState = (0,_auth_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)().authState;\n    // Create a state variable to hold an instance of the AvaxApe contract\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), contractInterface = ref[0], setContractInterface = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // If user is connected to site via MetaMask\n        if (authState.data.length) {\n            // Get the current provider (defaults to the currently selected network)\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n            // Get the signer (defaults to the currently selected account)\n            var signer = provider.getSigner();\n            // This address will be different for every network\n            var contractAddress = \"0x12e442373A3dA35A2CB58c14Ef5eD12aD182CD54\";\n            // Initialise the contract instance\n            console.log(_artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            var contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            // Store this instance in the state\n            setContractInterface(contract);\n        }\n    }, [\n        authState.data\n    ]);\n    var invest = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var messageData, onSuccess, onError, value, overrides, tx;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        messageData = param.messageData, onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.prev = 1;\n                        value = messageData;\n                        overrides = {};\n                        // If user is sending some AVAX\n                        if (value) {\n                            overrides.value = ethers__WEBPACK_IMPORTED_MODULE_6__.utils.parseEther(\"2\");\n                        }\n                        console.log(overrides.value);\n                        overrides.gasLimit = 220000;\n                        _ctx.next = 9;\n                        return contractInterface.invest(\"0x9632a79656af553F58738B0FB750320158495942\", 1, overrides);\n                    case 9:\n                        tx = _ctx.sent;\n                        _ctx.next = 12;\n                        return tx.wait();\n                    case 12:\n                        if (onSuccess && typeof onSuccess === 'function') onSuccess(tx);\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (onError && typeof onError === 'function') onError(_ctx.t0);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    15\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var withdraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var onSuccess, onError, tx;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return contractInterface.withdraw();\n                    case 4:\n                        tx = _ctx.sent;\n                        _ctx.next = 7;\n                        return tx.wait();\n                    case 7:\n                        if (onSuccess && typeof onSuccess == 'function') onSuccess(tx);\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (onError && typeof onError == 'function') onError(_ctx.t0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var getPlanInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var onSuccess, onError, result;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.next = 3;\n                        return contractInterface.getPlanInfo(1);\n                    case 3:\n                        result = _ctx.sent;\n                        return _ctx.abrupt(\"return\", result);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    /*\n  const getNumOfMessages = useCallback(\n    async ({ onSuccess, onError }) => {\n      try {\n        const tx = await contractInterface.getNumOfMessages()\n        const numOfMessages = tx.toNumber()\n\n        if (onSuccess && typeof onSuccess === 'function')\n          onSuccess(numOfMessages)\n      } catch (error) {\n        if (onError && typeof onError === 'function') onError(error)\n      }\n    },\n    [contractInterface]\n  )\n  */ var contextData = {\n        contractInterface: contractInterface,\n        invest: invest,\n        withdraw: withdraw,\n        getPlanInfo: getPlanInfo,\n        getContractBalance: getContractBalance\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvaxApeContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/laszlofreund/blockthatchain/project/context/avaxape/avaxapeContext.js\",\n        lineNumber: 145,\n        columnNumber: 5\n    }, _this));\n};\n_s(AvaxApeProvider, \"k9/IRspFKkS2CSSB+L6xlCa3Wxs=\", false, function() {\n    return [\n        _auth_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext\n    ];\n});\n_c = AvaxApeProvider;\nvar useAvaxApeContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AvaxApeContext);\n};\n_s1(useAvaxApeContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AvaxApeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsUUFBUSxHQUFGOUMsQ0FBQzs7SUFBREEsTUFBTSxDQUFOQSxpREFBVSxDQUFDVSxjQUFjO0FBQUEsQ0FBQztJQUFwRG9DLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2F2YXhhcGUvYXZheGFwZUNvbnRleHQuanM/OTZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCaWdOdW1iZXIsIGV0aGVycywgdXRpbHMgfSBmcm9tICdldGhlcnMnXG5cbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSAnLi4vYXV0aC9hdXRoQ29udGV4dCdcbmltcG9ydCBBVkFYQVBFIGZyb20gJy4uLy4uL2FydGlmYWN0cy9jb250cmFjdHMvbmV3Q29udHJhY3Quc29sL0FWQVhBUEUuanNvbidcblxuaW1wb3J0IHdlYjMgZnJvbSAnd2ViMydcbmltcG9ydCB7IHBhcnNlRXRoZXIgfSBmcm9tICdldGhlcnMvbGliL3V0aWxzJ1xuXG5jb25zdCBBdmF4QXBlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgY29uc3QgQXZheEFwZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGF1dGhTdGF0ZSB9ID0gdXNlQXV0aENvbnRleHQoKVxuICAvLyBDcmVhdGUgYSBzdGF0ZSB2YXJpYWJsZSB0byBob2xkIGFuIGluc3RhbmNlIG9mIHRoZSBBdmF4QXBlIGNvbnRyYWN0XG4gIGNvbnN0IFtjb250cmFjdEludGVyZmFjZSwgc2V0Q29udHJhY3RJbnRlcmZhY2VdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiAge1xuICAgIC8vIElmIHVzZXIgaXMgY29ubmVjdGVkIHRvIHNpdGUgdmlhIE1ldGFNYXNrXG4gICAgaWYgKGF1dGhTdGF0ZS5kYXRhLmxlbmd0aCkge1xuICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHByb3ZpZGVyIChkZWZhdWx0cyB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG5ldHdvcmspXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pXG5cbiAgICAgIC8vIEdldCB0aGUgc2lnbmVyIChkZWZhdWx0cyB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGFjY291bnQpXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAvLyBUaGlzIGFkZHJlc3Mgd2lsbCBiZSBkaWZmZXJlbnQgZm9yIGV2ZXJ5IG5ldHdvcmtcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHgxMmU0NDIzNzNBM2RBMzVBMkNCNThjMTRFZjVlRDEyYUQxODJDRDU0XCJcbiAgICAgIC8vIEluaXRpYWxpc2UgdGhlIGNvbnRyYWN0IGluc3RhbmNlXG5cbiAgICAgIGNvbnNvbGUubG9nKEFWQVhBUEUuYWJpLCBzaWduZXIpXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgQVZBWEFQRS5hYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKVxuXG5cbiAgICAgIC8vIFN0b3JlIHRoaXMgaW5zdGFuY2UgaW4gdGhlIHN0YXRlXG4gICAgICBzZXRDb250cmFjdEludGVyZmFjZShjb250cmFjdClcblxuICAgIH1cbiAgfSwgW2F1dGhTdGF0ZS5kYXRhXSlcblxuICBjb25zdCBpbnZlc3QgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoeyBtZXNzYWdlRGF0YSwgb25TdWNjZXNzLCBvbkVycm9yIH0pID0+IHtcblxuICAgICAgXG5cbiAgICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gbWVzc2FnZURhdGFcbiAgICAgIGNvbnN0IG92ZXJyaWRlcyA9IHt9XG5cbiAgICAgIFxuICAgICAgLy8gSWYgdXNlciBpcyBzZW5kaW5nIHNvbWUgQVZBWFxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIG92ZXJyaWRlcy52YWx1ZSA9IHV0aWxzLnBhcnNlRXRoZXIoXCIyXCIpXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKG92ZXJyaWRlcy52YWx1ZSlcblxuICAgICAgb3ZlcnJpZGVzLmdhc0xpbWl0ID0gMjIwMDAwXG4gICAgICBcblxuICAgICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdEludGVyZmFjZS5pbnZlc3QoXG4gICAgICBcIjB4OTYzMmE3OTY1NmFmNTUzRjU4NzM4QjBGQjc1MDMyMDE1ODQ5NTk0MlwiLFxuICAgICAgIDEsXG4gICAgICAgb3ZlcnJpZGVzLFxuICAgICAgKVxuXG4gICAgICAgIC8vIFdlIGhhdmUgdG8gd2FpdCBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIGJlIG1pbmVkIGFuZCBhZGRlZCB0byBhIGJsb2NrXG4gICAgICAgIGF3YWl0IHR4LndhaXQoKVxuICAgICAgICAgIFxuICAgICAgICBpZiAob25TdWNjZXNzICYmIHR5cGVvZiBvblN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIG9uU3VjY2Vzcyh0eClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChvbkVycm9yICYmIHR5cGVvZiBvbkVycm9yID09PSAnZnVuY3Rpb24nKSBvbkVycm9yKGVycm9yKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NvbnRyYWN0SW50ZXJmYWNlXVxuICApXG5cblxuICBjb25zdCB3aXRoZHJhdyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh7b25TdWNjZXNzLCBvbkVycm9yfSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdEludGVyZmFjZS53aXRoZHJhdygpXG5cbiAgICAgICAgYXdhaXQgdHgud2FpdCgpXG5cbiAgICAgICAgaWYob25TdWNjZXNzICYmIHR5cGVvZiBvblN1Y2Nlc3MgPT0gJ2Z1bmN0aW9uJykgb25TdWNjZXNzKHR4KVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgaWYgKG9uRXJyb3IgJiYgdHlwZW9mIG9uRXJyb3IgPT0gJ2Z1bmN0aW9uJykgb25FcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb250cmFjdEludGVyZmFjZV0gXG4gIClcblxuXG4gIGNvbnN0IGdldFBsYW5JbmZvID0gdXNlQ2FsbGJhY2soXG4gICAgIGFzeW5jICh7b25TdWNjZXNzLCBvbkVycm9yfSkgID0+IHtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RJbnRlcmZhY2UuZ2V0UGxhbkluZm8oMSlcblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICB9LCBbY29udHJhY3RJbnRlcmZhY2VdKVxuICBcblxuXG4gIC8qXG4gIGNvbnN0IGdldE51bU9mTWVzc2FnZXMgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoeyBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdEludGVyZmFjZS5nZXROdW1PZk1lc3NhZ2VzKClcbiAgICAgICAgY29uc3QgbnVtT2ZNZXNzYWdlcyA9IHR4LnRvTnVtYmVyKClcblxuICAgICAgICBpZiAob25TdWNjZXNzICYmIHR5cGVvZiBvblN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgb25TdWNjZXNzKG51bU9mTWVzc2FnZXMpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAob25FcnJvciAmJiB0eXBlb2Ygb25FcnJvciA9PT0gJ2Z1bmN0aW9uJykgb25FcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb250cmFjdEludGVyZmFjZV1cbiAgKVxuICAqL1xuXG5cblxuXG4gIGNvbnN0IGNvbnRleHREYXRhID0ge1xuICAgIGNvbnRyYWN0SW50ZXJmYWNlLFxuICAgIGludmVzdCxcbiAgICB3aXRoZHJhdyxcbiAgICBnZXRQbGFuSW5mbyxcbiAgICBnZXRDb250cmFjdEJhbGFuY2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF2YXhBcGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0RGF0YX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdmF4QXBlQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlQXZheEFwZUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KEF2YXhBcGVDb250ZXh0KVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJpZ051bWJlciIsImV0aGVycyIsInV0aWxzIiwidXNlQXV0aENvbnRleHQiLCJBVkFYQVBFIiwid2ViMyIsInBhcnNlRXRoZXIiLCJBdmF4QXBlQ29udGV4dCIsIkF2YXhBcGVQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aFN0YXRlIiwiY29udHJhY3RJbnRlcmZhY2UiLCJzZXRDb250cmFjdEludGVyZmFjZSIsImRhdGEiLCJsZW5ndGgiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3RBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImFiaSIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJpbnZlc3QiLCJtZXNzYWdlRGF0YSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJ2YWx1ZSIsIm92ZXJyaWRlcyIsInR4IiwiZ2FzTGltaXQiLCJ3YWl0Iiwid2l0aGRyYXciLCJnZXRQbGFuSW5mbyIsInJlc3VsdCIsImNvbnRleHREYXRhIiwiZ2V0Q29udHJhY3RCYWxhbmNlIiwiUHJvdmlkZXIiLCJ1c2VBdmF4QXBlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/avaxape/avaxapeContext.js\n");

/***/ })

});