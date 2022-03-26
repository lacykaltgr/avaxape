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
      const contractAddress = "0xCD85bAf973F7A720f96Df606C9468347B8BeB3ce"
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


  const invest = useCallback(
    async ({ messageData, onSuccess, onError }) => {

      try {

      const value = messageData.value
      const plan = messageData.plan
      const overrides = {}

      overrides.value = parseEther(value)

      overrides.gasLimit = 2200000
      

      const tx = await contractInterface.invest(
      "0x89CC6846fd8199Fb077718A89eB3785a13243470",
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


  const getPlanInfo = useCallback(
     async ({planNumber, onSuccess, onError})  => {
      try {
        const result = await contractInterface.getPlanInfo(planNumber)

        if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
        
        return result
      }
      catch (error){
        if (onError && typeof onError == 'function') onError(error)
      }
  }, [contractInterface])


  const getPlanInfo = useCallback(
    async ({planNumber, onSuccess, onError})  => {
     try {
       const result = await contractInterface.getPlanInfo(planNumber)

       if(onSuccess && typeof onSuccess == 'function') onSuccess(result)
       
       return result
     }
     catch (error){
       if (onError && typeof onError == 'function') onError(error)
     }
 }, [contractInterface])



  


  const contextData = {
    contractInterface,
    invest,
    withdraw,
    getPlanInfo,
    getContractBalance
    
  }



  return (
    <AvaxApeContext.Provider value={contextData}>
      {children}
    </AvaxApeContext.Provider>
  )
}

export const useAvaxApeContext = () => useContext(AvaxApeContext)
