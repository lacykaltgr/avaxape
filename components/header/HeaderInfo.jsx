import styles from './HeaderInfo.module.scss'

import { useState, useEffect } from 'react'

import { useAvaxApeContext } from '../../context/avaxape/avaxapeContext'

export default function HeaderInfo() {

    const {getContractBalance, getTotalStakedAmount} = useAvaxApeContext()

//contract balance hooks
    const [contractBalance, setContractBalance] = useState({
      state: 'loading',
      data: null,
      total: null,
      error: null,
    })
  
  
    useEffect(() => {
        const onTotalStakedAmountSuccess = (Total) => {
            setContractBalance((prevState) => ({
                ...prevState,
                total: Total,
              }))
        }

      const onContractBalanceSuccess = (ContractBalance) => {
        setContractBalance((prevState) => ({
            ...prevState,
            data: ContractBalance
        }))

        getTotalStakedAmount({onSuccess: onTotalStakedAmountSuccess})
      } 
  
      getContractBalance({onSuccess: onContractBalanceSuccess})
    }, [getContractBalance])

  
    const renderContractBalance = () => {
      if (!contractBalance.total) {
        return <p>-</p>
      }
      return (<p>{(contractBalance.data/1000000000000000000).toString()} AVAX</p>)
  }

  const renderTotalStaked = () => {
    if (!contractBalance.total) {
      return <p>-</p>
    }
    return (<p>{(contractBalance.total/1000000000000000000).toString()} AVAX</p>)
}


    return (
        <div className={styles.headerinfo}>
            <div>
                <div className={styles.headerinfoText}>CONTRACT BALANCE</div>
                <div className={styles.headerinfoData}>{renderContractBalance()}</div>
            </div>
            <div>
                <div className={styles.headerinfoText}>TOTAL STAKED AVAX</div>
                <div className={styles.headerinfoData}>{renderTotalStaked()}</div>
            </div>
        </div>
    )
}

