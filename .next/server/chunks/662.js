exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 5854:
/***/ ((module) => {

// Exports
module.exports = {
	"formSubmit": "Button_formSubmit__H6jwY",
	"formSubmitLocked": "Button_formSubmitLocked__1IG5k",
	"formInput": "Button_formInput__s_2s5",
	"formInputLocked": "Button_formInputLocked__vnMEK",
	"formInpDiv": "Button_formInpDiv__MRWdj",
	"formNotification": "Button_formNotification__jwVda",
	"formInpRow": "Button_formInpRow__E6GFl",
	"optionCard": "Button_optionCard__JwjnU",
	"Selected": "Button_Selected__f6_vF",
	"SelectedLocked": "Button_SelectedLocked__YYlTa",
	"cardFooter": "Button_cardFooter__BfgLu",
	"innerCard": "Button_innerCard__MsE2M",
	"optionCards": "Button_optionCards__HjCdt",
	"card": "Button_card__iIrch",
	"cardLocked": "Button_cardLocked__93WW_",
	"counter": "Button_counter__RwIuc",
	"data": "Button_data__6lKks",
	"button": "Button_button__C3lOm",
	"buttonActive": "Button_buttonActive__fB9HM"
};


/***/ }),

/***/ 7120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5854);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Button({ children , handleClick , isActive , extraClassnames , ...rest }) {
    const className = `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().button)} ${isActive ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().buttonActive) : ""} ${extraClassnames ? extraClassnames : ""}`.trim();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        type: "button",
        onClick: handleClick,
        ...rest,
        children: children
    });
};


/***/ }),

/***/ 6973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ AuthProvider),
  "E": () => (/* binding */ useAuthContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./utilities/dispatchLogger.js
/* eslint-disable no-console */ const PROD_ENVS = [
    ""
];
/**
 * This util logs all dispatch calls to the console
 * on non-production environment.
 *
 * This is useful for debugging what actions are being
 * made and what data is being passed around.
 *
 * @param {function} dispatch
 * @returns {void}
 */ function dispatchLogger(dispatch) {
    return (action)=>{
        if (!PROD_ENVS.includes(window.location.href)) {
            console.log(action);
        }
        dispatch(action);
    };
}
/* harmony default export */ const utilities_dispatchLogger = (dispatchLogger);

// EXTERNAL MODULE: ./context/auth/authReducer.js
var authReducer = __webpack_require__(5125);
;// CONCATENATED MODULE: ./context/auth/authActions.js

const errorStatuses = {
    NO_ETHEREUM_FOUND: "NO_ETHEREUM_FOUND",
    NO_ACCOUNTS_FOUND: "NO_ACCOUNTS_FOUND",
    UNAUTHORIZED: "UNAUTHORIZED"
};
const handleAccount = async ({ dispatch , accounts , isChanged  })=>{
    try {
        if (accounts.length === 0) {
            dispatch({
                type: authReducer/* ACCOUNTS_ERROR */.cV,
                payload: errorStatuses.NO_ACCOUNTS_FOUND
            });
        } else {
            dispatch({
                type: isChanged ? authReducer/* ACCOUNTS_CHANGED */.wS : authReducer/* ACCOUNTS_FETCHED */._m,
                payload: accounts
            });
        }
    } catch (error) {
        dispatch({
            type: authReducer/* ACCOUNTS_ERROR */.cV,
            payload: error
        });
    }
};
const getAccountsAction = async ({ method , dispatch , contract , shouldReload =true ,  })=>{
    const { ethereum  } = window;
    if (shouldReload) {
        dispatch({
            type: authReducer/* FETCHING_ACCOUNTS */.Zp
        });
    }
    if (ethereum) {
        try {
            const accounts = await ethereum.request({
                method
            });
            if (accounts.length) {
                handleAccount({
                    accounts,
                    dispatch,
                    contract
                });
            } else {
                dispatch({
                    type: authReducer/* ACCOUNTS_ERROR */.cV,
                    payload: errorStatuses.NO_ACCOUNTS_FOUND
                });
            }
        } catch (error) {
            dispatch({
                type: authReducer/* ACCOUNTS_ERROR */.cV,
                payload: error.code
            });
        }
    } else {
        dispatch({
            type: authReducer/* ACCOUNTS_ERROR */.cV,
            payload: errorStatuses.NO_ETHEREUM_FOUND
        });
    }
};
const accountsChangedAction = async ({ dispatch , accounts , onSuccess ,  })=>{
    await handleAccount({
        accounts,
        dispatch,
        isChanged: true
    });
    if (onSuccess && typeof onSuccess === "function") {
        onSuccess();
    }
};

;// CONCATENATED MODULE: ./context/auth/authContext.js





const validAvalancheChains = [
    "0XA868",
    "0XA869",
    "0XA86A"
];
const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)();
const getInitialAuthState = ()=>{
    let authState = authReducer/* initialAuthState */.Fw;
    if (false) {}
    return authState;
};
const AuthProvider = ({ children  })=>{
    const { 0: authState , 1: dispatch  } = (0,external_react_.useReducer)(authReducer/* default */.ZP, getInitialAuthState());
    (0,external_react_.useEffect)(()=>{
        const stringifiedAuthState = JSON.stringify(authState);
        localStorage.setItem("authState", stringifiedAuthState);
    }, [
        authState
    ]);
    const dispatchWithLogging = (0,external_react_.useMemo)(()=>utilities_dispatchLogger(dispatch)
    , []);
    (0,external_react_.useEffect)(()=>{
        const setupAccounts = async ()=>{
            await getAccountsAction({
                method: "eth_accounts",
                dispatch: dispatchWithLogging,
                shouldReload: !authState.isHydrated
            });
            if (window.ethereum) {
                window.ethereum.on("accountsChanged", (accounts)=>{
                    accountsChangedAction({
                        dispatch: dispatchWithLogging,
                        accounts
                    });
                });
                window.ethereum.on("chainChanged", ()=>{
                    window.location.reload();
                });
            }
        };
        setupAccounts();
    }, [
        dispatchWithLogging,
        authState.isHydrated
    ]);
    (0,external_react_.useEffect)(()=>{
        if (window.ethereum && window.ethereum.chainId) {
            if (!validAvalancheChains.includes(window.ethereum.chainId.toUpperCase())) {
                throw new Error("wrong network");
            }
        }
    }, []);
    const connectWallet = async ()=>{
        const { status , data  } = authState;
        const hasNoEthereum = status === authReducer/* ACCOUNTS_ERROR */.cV && data.error === errorStatuses.NO_ETHEREUM_FOUND;
        if (hasNoEthereum) return;
        await getAccountsAction({
            method: "eth_requestAccounts",
            dispatch: dispatchWithLogging
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: {
            authState,
            dispatch,
            connectWallet
        },
        children: children
    });
};
const useAuthContext = ()=>(0,external_react_.useContext)(AuthContext)
;


/***/ }),

/***/ 5125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zp": () => (/* binding */ FETCHING_ACCOUNTS),
/* harmony export */   "_m": () => (/* binding */ ACCOUNTS_FETCHED),
/* harmony export */   "cV": () => (/* binding */ ACCOUNTS_ERROR),
/* harmony export */   "wS": () => (/* binding */ ACCOUNTS_CHANGED),
/* harmony export */   "Fw": () => (/* binding */ initialAuthState),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export INITIAL */
const INITIAL = "INITIAL";
const FETCHING_ACCOUNTS = "FETCHING_ACCOUNTS";
const ACCOUNTS_FETCHED = "ACCOUNTS_FETCHED";
const ACCOUNTS_ERROR = "ACCOUNTS_ERROR";
const ACCOUNTS_CHANGED = "ACCOUNTS_CHANGED";
const initialAuthState = {
    isLoading: false,
    status: INITIAL,
    error: {},
    data: {}
};
const authReducer = (state = initialAuthState, action)=>{
    switch(action.type){
        case FETCHING_ACCOUNTS:
            return {
                ...state,
                isLoading: true,
                status: FETCHING_ACCOUNTS
            };
        case ACCOUNTS_FETCHED:
        case ACCOUNTS_CHANGED:
            return {
                ...state,
                isLoading: false,
                status: ACCOUNTS_FETCHED,
                data: action.payload,
                error: null
            };
        case ACCOUNTS_ERROR:
            return {
                ...state,
                isLoading: false,
                status: ACCOUNTS_ERROR,
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);


/***/ }),

/***/ 8324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ AvaxApeProvider),
  "M": () => (/* binding */ useAvaxApeContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: ./context/auth/authContext.js + 2 modules
var authContext = __webpack_require__(6973);
;// CONCATENATED MODULE: ./artifacts/contracts/newContract.sol/AVAXAPE.json
const AVAXAPE_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"address payable","name":"wallet","type":"address"},{"internalType":"uint256","name":"startDate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"commissionWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"launch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startUNIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
// EXTERNAL MODULE: external "ethers/lib/utils"
var utils_ = __webpack_require__(2522);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
;// CONCATENATED MODULE: ./context/avaxape/avaxapeContext.js







const AvaxApeContext = /*#__PURE__*/ (0,external_react_.createContext)();
const AvaxApeProvider = ({ children  })=>{
    const { authState  } = (0,authContext/* useAuthContext */.E)();
    // Create a state variable to hold an instance of the AvaxApe contract
    const { 0: contractInterface , 1: setContractInterface  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        // If user is connected to site via MetaMask
        if (authState.data.length) {
            // Get the current provider (defaults to the currently selected network)
            const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
            // Get the signer (defaults to the currently selected account)
            const signer = provider.getSigner();
            // This address will be different for every network
            const contractAddress = "0xA781a3bc089A242C6651794a5A26c3181d36F68e";
            // Initialise the contract instance
            console.log(AVAXAPE_namespaceObject.Mt, signer);
            const contract = new external_ethers_.ethers.Contract(contractAddress, AVAXAPE_namespaceObject.Mt, signer);
            // Store this instance in the state
            setContractInterface(contract);
        }
    }, [
        authState.data
    ]);
    //form : érték, plan
    //return: ()
    const invest = (0,external_react_.useCallback)(async ({ formData , onSuccess , onError  })=>{
        try {
            const plan = formData.plan;
            const value = plan > 3 ? formData.valueLocked : formData.valueFree;
            const referrer = formData.referrer ? formData.referrer : "0x0000000000000000000000000000000000000000";
            const overrides = {};
            overrides.value = (0,utils_.parseEther)(value);
            overrides.gasLimit = 2200000;
            const tx = await contractInterface.invest(referrer, plan, overrides);
            // We have to wait for the transaction to be mined and added to a block
            await tx.wait();
            if (onSuccess && typeof onSuccess === "function") onSuccess(tx);
        } catch (error) {
            if (onError && typeof onError === "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //return: ()
    const withdraw = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const tx = await contractInterface.withdraw();
            await tx.wait();
            if (onSuccess && typeof onSuccess == "function") onSuccess(tx);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //plan száma
    //return: (bn) smart contract egyenlege
    const getContractBalance = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getContractBalance();
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //plan száma  
    //return: (bn, bn) plan hossza, plan százalék
    const getPlanInfo = (0,external_react_.useCallback)(async ({ planNumber , onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getPlanInfo(planNumber);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //plan száma 
    //return: (bn) plan százalék
    const getPercent = (0,external_react_.useCallback)(async ({ planNumber , onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getPercent(planNumber);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //roi számláló
    //plan száma, érték
    //return: (bn, bn, bn) planhez százalék, profit számoló, befejezés idő 
    const getResult = (0,external_react_.useCallback)(async ({ planNumber , value , onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getResult(planNumber, value);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn) kivehető egyenleg
    const getUserDividends = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserDividends(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn) idk
    const getUserCheckpoint = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserCheckpoint(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (str) referrer address
    const getUserReferrer = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserReferrer(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn, bn, bn) lvl0, lvl1, lvl2 idk
    const getUserDownlineCount = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserDownlineCount(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn) referral bonus
    const getUserReferralBonus = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserReferralBonus(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn) total referral bonus
    const getUserReferralTotalBonus = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserReferralTotalBonus(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn) withdrawn referral
    const getUserReferralWithdrawn = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserReferralWithdrawn(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn) elérhető egyenleg
    const getUserAvailable = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserAvailable(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn) ennyi db deposit
    const getUserAmountOfDeposits = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserAmountOfDeposits(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return: (bn) depositok összege
    const getUserTotalDeposits = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserTotalDeposits(authState.data[0]);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    //user address
    //return (n, bn, bn, bn, bn, bn) deposit info
    //plan, percent, amount, profit, start, finish
    const getUserDepositInfo = (0,external_react_.useCallback)(async ({ idx , onSuccess , onError  })=>{
        try {
            const result = await contractInterface.getUserDepositInfo(authState.data[0], idx);
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    const getTotalStakedAmount = (0,external_react_.useCallback)(async ({ onSuccess , onError  })=>{
        try {
            const result = await contractInterface.totalStaked();
            if (onSuccess && typeof onSuccess == "function") onSuccess(result);
        } catch (error) {
            if (onError && typeof onError == "function") onError(error);
        }
    }, [
        contractInterface
    ]);
    const contextData = {
        contractInterface,
        invest,
        withdraw,
        getContractBalance,
        getPlanInfo,
        getPercent,
        getResult,
        getUserDividends,
        getUserCheckpoint,
        getUserReferrer,
        getUserDownlineCount,
        getUserReferralBonus,
        getUserReferralTotalBonus,
        getUserReferralWithdrawn,
        getUserAvailable,
        getUserAmountOfDeposits,
        getUserTotalDeposits,
        getUserDepositInfo,
        getTotalStakedAmount
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AvaxApeContext.Provider, {
        value: contextData,
        children: children
    });
};
const useAvaxApeContext = ()=>(0,external_react_.useContext)(AvaxApeContext)
;


/***/ })

};
;