(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1853:
/***/ ((module) => {

// Exports
module.exports = {
	"formSubmit": "ErrorBoundary_formSubmit__KafR_",
	"formInput": "ErrorBoundary_formInput__TO5p4",
	"formInpDiv": "ErrorBoundary_formInpDiv__LVVdL",
	"formNotification": "ErrorBoundary_formNotification__FyqpD",
	"formInpRow": "ErrorBoundary_formInpRow__RRf7Q",
	"optionCard": "ErrorBoundary_optionCard__aXQhJ",
	"Selected": "ErrorBoundary_Selected__nqzVt",
	"SelectedLocked": "ErrorBoundary_SelectedLocked__sl3wz",
	"cardFooter": "ErrorBoundary_cardFooter__B_ZBy",
	"innerCard": "ErrorBoundary_innerCard__JnSl6",
	"optionCards": "ErrorBoundary_optionCards__0IFdN",
	"card": "ErrorBoundary_card__HO_Kj",
	"cardLocked": "ErrorBoundary_cardLocked__QnFmR",
	"counter": "ErrorBoundary_counter__5x3xZ",
	"data": "ErrorBoundary_data__lrUX6",
	"boundary": "ErrorBoundary_boundary__DC7VM",
	"boundaryButton": "ErrorBoundary_boundaryButton__yeC1n"
};


/***/ }),

/***/ 5079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/button/Button.jsx
var Button = __webpack_require__(4241);
// EXTERNAL MODULE: ./components/error/Error.jsx
var Error = __webpack_require__(7435);
;// CONCATENATED MODULE: ./utilities/injectAvalancheNetwork.js
const AVALANCHE_MAINNET_PARAMS = {
    chainId: '0xA86A',
    chainName: 'Avalanche Mainnet C-Chain',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18
    },
    rpcUrls: [
        'https://api.avax.network/ext/bc/C/rpc'
    ],
    blockExplorerUrls: [
        'https://snowtrace.io/'
    ]
};
const AVALANCHE_TESTNET_PARAMS = {
    chainId: '0xA869',
    chainName: 'Avalanche Testnet C-Chain',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18
    },
    rpcUrls: [
        'https://api.avax-test.network/ext/bc/C/rpc'
    ],
    blockExplorerUrls: [
        'https://testnet.snowtrace.io/'
    ]
};
const AVALANCHE_LOCAL_PARAMS = {
    chainId: '0xA868',
    chainName: 'Avalanche Local C-Chain',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18
    },
    rpcUrls: [
        'https://localhost:9650/ext/bc/C/rpc'
    ],
    blockExplorerUrls: [
        'https://testnet.snowtrace.io/'
    ]
};
function addAvalancheNetwork(network) {
    window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
            network === 'main' ? AVALANCHE_MAINNET_PARAMS : network === 'test' ? AVALANCHE_TESTNET_PARAMS : AVALANCHE_LOCAL_PARAMS, 
        ]
    }).catch((error)=>{
        console.log(error);
    });
};

// EXTERNAL MODULE: ./components/error-boundary/ErrorBoundary.module.scss
var ErrorBoundary_module = __webpack_require__(1853);
var ErrorBoundary_module_default = /*#__PURE__*/__webpack_require__.n(ErrorBoundary_module);
;// CONCATENATED MODULE: ./components/error-boundary/ErrorBoundary.jsx






class ErrorBoundary extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }
    renderConnectButtons() {
        const networks = [
            'local',
            'test',
            'main'
        ];
        return networks.map((network)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                onClick: ()=>addAvalancheNetwork(network)
                ,
                extraClassnames: (ErrorBoundary_module_default()).boundaryButton,
                children: [
                    "Connect to Avalanche ",
                    network,
                    " network"
                ]
            }, network)
        );
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ErrorBoundary_module_default()).boundary,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Error/* default */.Z, {}),
                    this.renderConnectButtons()
                ]
            }));
        }
        return this.props.children;
    }
};

// EXTERNAL MODULE: ./context/auth/authContext.js + 2 modules
var authContext = __webpack_require__(5199);
// EXTERNAL MODULE: ./context/avaxape/avaxapeContext.js + 1 modules
var avaxapeContext = __webpack_require__(4236);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ErrorBoundary, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(authContext/* AuthProvider */.H, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(avaxapeContext/* AvaxApeProvider */.q, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1982:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ 2522:
/***/ ((module) => {

"use strict";
module.exports = require("ethers/lib/utils");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [378], () => (__webpack_exec__(5079)));
module.exports = __webpack_exports__;

})();