import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { BigNumber, ethers, utils } from 'ethers'

import { useAuthContext } from '../auth/authContext'
import AVAXAPE from '../../artifacts/contracts/newContract.sol/AVAXAPE.json'

import { parseEther } from 'ethers/lib/utils'

import { useSearchParams } from 'react-router-dom'

const AvaxApeContext = createContext()

export const AvaxApeProvider = ({ children }) => {

  const { authState } = useAuthContext()
  // Create a state variable to hold an instance of the AvaxApe contract
  const [contractInterface, setContractInterface] = useState()

  useEffect(() => {
    // If user is connected to site via MetaMask
    if (authState.data.length) {
      // Get the current provider (defaults to the currently selected network)
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      // Get the signer (defaults to the currently selected account)
      const signer = provider.getSigner()

      // This address will be different for every network
      const contractAddress = "0xA781a3bc089A242C6651794a5A26c3181d36F68e"
      // Initialise the contract instance

      console.log(AVAXAPE.abi, signer)
      const contract = new ethers.Contract(
        contractAddress,
        AVAXAPE.abi,
        signer
      )


      // Store this instance in the state
      setContractInterface(contract)
      

    }
  }, [authState.data])


//form : érték, plan
//return: ()
  const invest = useCallback(
    async ({ formData, onSuccess, onError }) => {

      try {
      
      
      const plan = formData.plan
      const value = plan > 3 ? formData.valueLocked : formData.valueFree
      const referrer = formData.referrer ? formData.referrer : "0x0000000000000000000000000000000000000000"
      const overrides = {}


      overrides.value = parseEther(value)

      overrides.gasLimit = 2200000
      

      const tx = await contractInterface.invest(
       referrer,
       plan,
       overrides,
      )

        // We have to wait for the transaction to be mined and added to a block
        await tx.wait()
          
        if (onSuccess && typeof onSuccess === 'function') onSuccess(tx)
      } catch (error) {
        if (onError && typeof onError === 'function') onError(error)
      }
    },
    [contractInterface]
  )

//return: ()
  const withdraw = useCallback(
    async ({onSuccess, onError}) => {
      try {
        const tx = await contractInterface.withdraw()

        await tx.wait()

        if(onSuccess && typeof onSuccess == 'function') onSuccess(tx)
      }
      catch (error){
        if (onError && typeof onError == 'function') onError(error)
      }
    },
    [contractInterface] 
  )

//plan száma
//return: (bn) smart contract egyenlege
  const getContractBalance = useCallback(
     async ({onSuccess, onError})  => {
      try {
        const result = await contractInterface.getContractBalance()

        if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
        
         
      }
      catch (error){
        if (onError && typeof onError == 'function') onError(error)
      }
  }, [contractInterface])

//plan száma  
//return: (bn, bn) plan hossza, plan százalék
  const getPlanInfo = useCallback(
    async ({planNumber, onSuccess, onError})  => {
     try {
       const result = await contractInterface.getPlanInfo(planNumber)

       if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
       
        
     }
     catch (error){
       if (onError && typeof onError == 'function') onError(error)
     }
 }, [contractInterface])

//plan száma 
//return: (bn) plan százalék
 const getPercent = useCallback(
    async ({planNumber, onSuccess, onError})  => {
    try {
      const result = await contractInterface.getPercent(planNumber)

      if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
      
       
    }
    catch (error){
      if (onError && typeof onError == 'function') onError(error)
    }
}, [contractInterface])

//roi számláló
//plan száma, érték
//return: (bn, bn, bn) planhez százalék, profit számoló, befejezés idő 
const getResult = useCallback(
  async ({planNumber, value, onSuccess, onError})  => {
  try {
    const result = await contractInterface.getResult(planNumber, value)

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn) kivehető egyenleg
const getUserDividends = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserDividends(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn) idk
const getUserCheckpoint = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserCheckpoint(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (str) referrer address
const getUserReferrer = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserReferrer(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn, bn, bn) lvl0, lvl1, lvl2 idk
const getUserDownlineCount = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserDownlineCount(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn) referral bonus
const getUserReferralBonus = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserReferralBonus(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn) total referral bonus
const getUserReferralTotalBonus = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserReferralTotalBonus(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn) withdrawn referral
const getUserReferralWithdrawn = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserReferralWithdrawn(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn) elérhető egyenleg
const getUserAvailable = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserAvailable(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn) ennyi db deposit
const getUserAmountOfDeposits = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserAmountOfDeposits(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])

//user address
//return: (bn) depositok összege
const getUserTotalDeposits = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserTotalDeposits(authState.data[0])

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
     
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])


//user address
//return (n, bn, bn, bn, bn, bn) deposit info
//plan, percent, amount, profit, start, finish
const getUserDepositInfo = useCallback(
  async ({idx, onSuccess, onError})  => {
  try {
    const result = await contractInterface.getUserDepositInfo(authState.data[0], idx)

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])


const getTotalStakedAmount = useCallback(
  async ({onSuccess, onError})  => {
  try {
    const result = await contractInterface.totalStaked()

    if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
    
  }
  catch (error){
    if (onError && typeof onError == 'function') onError(error)
  }
}, [contractInterface])


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
  }



  return (
    <AvaxApeContext.Provider value={contextData}>
      {children}
    </AvaxApeContext.Provider>
  )
}

export const useAvaxApeContext = () => useContext(AvaxApeContext)
