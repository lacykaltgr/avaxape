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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AvaxApeProvider\": function() { return /* binding */ AvaxApeProvider; },\n/* harmony export */   \"useAvaxApeContext\": function() { return /* binding */ useAvaxApeContext; }\n/* harmony export */ });\n/* harmony import */ var _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../artifacts/contracts/newContract.sol/AVAXAPE.json */ \"./artifacts/contracts/newContract.sol/AVAXAPE.json\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/lib/utils */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar AvaxApeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AvaxApeProvider = function(param1) {\n    var children = param1.children;\n    _s();\n    var authState = (0,_auth_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)().authState;\n    // Create a state variable to hold an instance of the AvaxApe contract\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), contractInterface = ref[0], setContractInterface = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // If user is connected to site via MetaMask\n        if (authState.data.length) {\n            // Get the current provider (defaults to the currently selected network)\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n            // Get the signer (defaults to the currently selected account)\n            var signer = provider.getSigner();\n            // This address will be different for every network\n            var contractAddress = \"0xCD85bAf973F7A720f96Df606C9468347B8BeB3ce\";\n            // Initialise the contract instance\n            console.log(_artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            var contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, _artifacts_contracts_newContract_sol_AVAXAPE_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            // Store this instance in the state\n            setContractInterface(contract);\n        }\n    }, [\n        authState.data\n    ]);\n    var invest = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var messageData, onSuccess, onError, value, plan, overrides, tx;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        messageData = param.messageData, onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.prev = 1;\n                        value = messageData.value;\n                        plan = messageData.plan;\n                        overrides = {};\n                        overrides.value = (0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__.parseEther)(value);\n                        overrides.gasLimit = 2200000;\n                        _ctx.next = 9;\n                        return contractInterface.invest(\"0x89CC6846fd8199Fb077718A89eB3785a13243470\", 1, overrides);\n                    case 9:\n                        tx = _ctx.sent;\n                        _ctx.next = 12;\n                        return tx.wait();\n                    case 12:\n                        if (onSuccess && typeof onSuccess === 'function') onSuccess(tx);\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (onError && typeof onError === 'function') onError(_ctx.t0);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    15\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var withdraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var onSuccess, onError, tx;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return contractInterface.withdraw();\n                    case 4:\n                        tx = _ctx.sent;\n                        _ctx.next = 7;\n                        return tx.wait();\n                    case 7:\n                        if (onSuccess && typeof onSuccess == 'function') onSuccess(tx);\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (onError && typeof onError == 'function') onError(_ctx.t0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var getPlanInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var planNumber, onSuccess, onError, result;\n            return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        planNumber = param.planNumber, onSuccess = param.onSuccess, onError = param.onError;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return contractInterface.getPlanInfo(planNumber);\n                    case 4:\n                        result = _ctx.sent;\n                        if (onSuccess && typeof onSuccess == 'function') onSuccess(result);\n                        return _ctx.abrupt(\"return\", result);\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (onError && typeof onError == 'function') onError(_ctx.t0);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    9\n                ]\n            ]);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        contractInterface\n    ]);\n    var getContractBalance = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var result;\n        return _home_laszlofreund_blockthatchain_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return contractInterface.getContractBalance();\n                case 2:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        contractInterface\n    ]);\n    /*\n  const getNumOfMessages = useCallback(\n    async ({ onSuccess, onError }) => {\n      try {\n        const tx = await contractInterface.getNumOfMessages()\n        const numOfMessages = tx.toNumber()\n\n        if (onSuccess && typeof onSuccess === 'function')\n          onSuccess(numOfMessages)\n      } catch (error) {\n        if (onError && typeof onError === 'function') onError(error)\n      }\n    },\n    [contractInterface]\n  )\n  */ var contextData = {\n        contractInterface: contractInterface,\n        invest: invest,\n        withdraw: withdraw,\n        getPlanInfo: getPlanInfo,\n        getContractBalance: getContractBalance\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvaxApeContext.Provider, {\n        value: contextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/laszlofreund/blockthatchain/project/context/avaxape/avaxapeContext.js\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, _this));\n};\n_s(AvaxApeProvider, \"fc/is/LmHrDDIliCHsMaJvvAw8Y=\", false, function() {\n    return [\n        _auth_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext\n    ];\n});\n_c = AvaxApeProvider;\nvar useAvaxApeContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AvaxApeContext);\n};\n_s1(useAvaxApeContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AvaxApeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNnQyxXQUFXLEdBQUcsQ0FBQztRQUNuQmhDLGlCQUFpQixFQUFqQkEsaUJBQWlCO1FBQ2pCaUIsTUFBTSxFQUFOQSxNQUFNO1FBQ05VLFFBQVEsRUFBUkEsUUFBUTtRQUNSQyxXQUFXLEVBQVhBLFdBQVc7UUFDWEcsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFFcEIsQ0FBQztJQUlELE1BQU0sNkVBQ0huQyxjQUFjLENBQUNxQyxRQUFRO1FBQUNaLEtBQUssRUFBRVcsV0FBVztrQkFDeENsQyxRQUFROzs7Ozs7QUFHZixDQUFDO0dBN0lZRCxlQUFlOztRQUNKSiw2REFBYzs7O0tBRHpCSSxlQUFlO0FBK0lyQixHQUFLLENBQUNxQyxpQkFBaUIsR0FBRyxRQUFRLEdBQUYvQyxDQUFDOztJQUFEQSxNQUFNLENBQU5BLGlEQUFVLENBQUNTLGNBQWM7QUFBQSxDQUFDO0lBQXBEc0MsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvYXZheGFwZS9hdmF4YXBlQ29udGV4dC5qcz85NmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJpZ051bWJlciwgZXRoZXJzLCB1dGlscyB9IGZyb20gJ2V0aGVycydcblxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tICcuLi9hdXRoL2F1dGhDb250ZXh0J1xuaW1wb3J0IEFWQVhBUEUgZnJvbSAnLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9uZXdDb250cmFjdC5zb2wvQVZBWEFQRS5qc29uJ1xuXG5pbXBvcnQgeyBwYXJzZUV0aGVyIH0gZnJvbSAnZXRoZXJzL2xpYi91dGlscydcblxuY29uc3QgQXZheEFwZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IEF2YXhBcGVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBhdXRoU3RhdGUgfSA9IHVzZUF1dGhDb250ZXh0KClcbiAgLy8gQ3JlYXRlIGEgc3RhdGUgdmFyaWFibGUgdG8gaG9sZCBhbiBpbnN0YW5jZSBvZiB0aGUgQXZheEFwZSBjb250cmFjdFxuICBjb25zdCBbY29udHJhY3RJbnRlcmZhY2UsIHNldENvbnRyYWN0SW50ZXJmYWNlXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIElmIHVzZXIgaXMgY29ubmVjdGVkIHRvIHNpdGUgdmlhIE1ldGFNYXNrXG4gICAgaWYgKGF1dGhTdGF0ZS5kYXRhLmxlbmd0aCkge1xuICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHByb3ZpZGVyIChkZWZhdWx0cyB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG5ldHdvcmspXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pXG5cbiAgICAgIC8vIEdldCB0aGUgc2lnbmVyIChkZWZhdWx0cyB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGFjY291bnQpXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAvLyBUaGlzIGFkZHJlc3Mgd2lsbCBiZSBkaWZmZXJlbnQgZm9yIGV2ZXJ5IG5ldHdvcmtcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhDRDg1YkFmOTczRjdBNzIwZjk2RGY2MDZDOTQ2ODM0N0I4QmVCM2NlXCJcbiAgICAgIC8vIEluaXRpYWxpc2UgdGhlIGNvbnRyYWN0IGluc3RhbmNlXG5cbiAgICAgIGNvbnNvbGUubG9nKEFWQVhBUEUuYWJpLCBzaWduZXIpXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgQVZBWEFQRS5hYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKVxuXG5cbiAgICAgIC8vIFN0b3JlIHRoaXMgaW5zdGFuY2UgaW4gdGhlIHN0YXRlXG4gICAgICBzZXRDb250cmFjdEludGVyZmFjZShjb250cmFjdClcblxuICAgIH1cbiAgfSwgW2F1dGhTdGF0ZS5kYXRhXSlcblxuXG4gIGNvbnN0IGludmVzdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh7IG1lc3NhZ2VEYXRhLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuXG4gICAgICB0cnkge1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IG1lc3NhZ2VEYXRhLnZhbHVlXG4gICAgICBjb25zdCBwbGFuID0gbWVzc2FnZURhdGEucGxhblxuICAgICAgY29uc3Qgb3ZlcnJpZGVzID0ge31cblxuICAgICAgb3ZlcnJpZGVzLnZhbHVlID0gcGFyc2VFdGhlcih2YWx1ZSlcblxuICAgICAgb3ZlcnJpZGVzLmdhc0xpbWl0ID0gMjIwMDAwMFxuICAgICAgXG5cbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3RJbnRlcmZhY2UuaW52ZXN0KFxuICAgICAgXCIweDg5Q0M2ODQ2ZmQ4MTk5RmIwNzc3MThBODllQjM3ODVhMTMyNDM0NzBcIixcbiAgICAgICAxLFxuICAgICAgIG92ZXJyaWRlcyxcbiAgICAgIClcblxuICAgICAgICAvLyBXZSBoYXZlIHRvIHdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZCBhbmQgYWRkZWQgdG8gYSBibG9ja1xuICAgICAgICBhd2FpdCB0eC53YWl0KClcbiAgICAgICAgICBcbiAgICAgICAgaWYgKG9uU3VjY2VzcyAmJiB0eXBlb2Ygb25TdWNjZXNzID09PSAnZnVuY3Rpb24nKSBvblN1Y2Nlc3ModHgpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAob25FcnJvciAmJiB0eXBlb2Ygb25FcnJvciA9PT0gJ2Z1bmN0aW9uJykgb25FcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb250cmFjdEludGVyZmFjZV1cbiAgKVxuXG5cbiAgY29uc3Qgd2l0aGRyYXcgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoe29uU3VjY2Vzcywgb25FcnJvcn0pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3RJbnRlcmZhY2Uud2l0aGRyYXcoKVxuXG4gICAgICAgIGF3YWl0IHR4LndhaXQoKVxuXG4gICAgICAgIGlmKG9uU3VjY2VzcyAmJiB0eXBlb2Ygb25TdWNjZXNzID09ICdmdW5jdGlvbicpIG9uU3VjY2Vzcyh0eClcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnJvcil7XG4gICAgICAgIGlmIChvbkVycm9yICYmIHR5cGVvZiBvbkVycm9yID09ICdmdW5jdGlvbicpIG9uRXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfSxcbiAgICBbY29udHJhY3RJbnRlcmZhY2VdIFxuICApXG5cblxuICBjb25zdCBnZXRQbGFuSW5mbyA9IHVzZUNhbGxiYWNrKFxuICAgICBhc3luYyAoe3BsYW5OdW1iZXIsIG9uU3VjY2Vzcywgb25FcnJvcn0pICA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdEludGVyZmFjZS5nZXRQbGFuSW5mbyhwbGFuTnVtYmVyKVxuXG4gICAgICAgIGlmKG9uU3VjY2VzcyAmJiB0eXBlb2Ygb25TdWNjZXNzID09ICdmdW5jdGlvbicpIG9uU3VjY2VzcyhyZXN1bHQpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICBpZiAob25FcnJvciAmJiB0eXBlb2Ygb25FcnJvciA9PSAnZnVuY3Rpb24nKSBvbkVycm9yKGVycm9yKVxuICAgICAgfVxuICB9LCBbY29udHJhY3RJbnRlcmZhY2VdKVxuXG5cbiAgY29uc3QgZ2V0Q29udHJhY3RCYWxhbmNlID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKCkgID0+IHtcbiAgICAgXG4gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0SW50ZXJmYWNlLmdldENvbnRyYWN0QmFsYW5jZSgpXG5cbiAgICAgcmV0dXJuIHJlc3VsdFxuIH0sIFtjb250cmFjdEludGVyZmFjZV0pXG5cbiAgLypcbiAgY29uc3QgZ2V0TnVtT2ZNZXNzYWdlcyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh7IG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0SW50ZXJmYWNlLmdldE51bU9mTWVzc2FnZXMoKVxuICAgICAgICBjb25zdCBudW1PZk1lc3NhZ2VzID0gdHgudG9OdW1iZXIoKVxuXG4gICAgICAgIGlmIChvblN1Y2Nlc3MgJiYgdHlwZW9mIG9uU3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICBvblN1Y2Nlc3MobnVtT2ZNZXNzYWdlcylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChvbkVycm9yICYmIHR5cGVvZiBvbkVycm9yID09PSAnZnVuY3Rpb24nKSBvbkVycm9yKGVycm9yKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NvbnRyYWN0SW50ZXJmYWNlXVxuICApXG4gICovXG5cbiAgXG5cblxuICBjb25zdCBjb250ZXh0RGF0YSA9IHtcbiAgICBjb250cmFjdEludGVyZmFjZSxcbiAgICBpbnZlc3QsXG4gICAgd2l0aGRyYXcsXG4gICAgZ2V0UGxhbkluZm8sXG4gICAgZ2V0Q29udHJhY3RCYWxhbmNlXG4gICAgXG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8QXZheEFwZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHREYXRhfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F2YXhBcGVDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdmF4QXBlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQXZheEFwZUNvbnRleHQpXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmlnTnVtYmVyIiwiZXRoZXJzIiwidXRpbHMiLCJ1c2VBdXRoQ29udGV4dCIsIkFWQVhBUEUiLCJwYXJzZUV0aGVyIiwiQXZheEFwZUNvbnRleHQiLCJBdmF4QXBlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGhTdGF0ZSIsImNvbnRyYWN0SW50ZXJmYWNlIiwic2V0Q29udHJhY3RJbnRlcmZhY2UiLCJkYXRhIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJhYmkiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiaW52ZXN0IiwibWVzc2FnZURhdGEiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwidmFsdWUiLCJwbGFuIiwib3ZlcnJpZGVzIiwidHgiLCJnYXNMaW1pdCIsIndhaXQiLCJ3aXRoZHJhdyIsImdldFBsYW5JbmZvIiwicGxhbk51bWJlciIsInJlc3VsdCIsImdldENvbnRyYWN0QmFsYW5jZSIsImNvbnRleHREYXRhIiwiUHJvdmlkZXIiLCJ1c2VBdmF4QXBlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/avaxape/avaxapeContext.js\n");

/***/ })

});