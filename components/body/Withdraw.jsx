import { useState } from 'react'
import { useEffect } from 'react'

import { useAvaxApeContext } from '../../context/avaxape/avaxapeContext'
import { useAuthContext } from '../../context/auth/authContext'
import { ACCOUNTS_FETCHED } from '../../context/auth/authReducer'

import styles from './Withdraw.module.scss'


export default function Withdraw() {

  const { withdraw, getUserAmountOfDeposits, getUserTotalDeposits, getUserAvailable } = useAvaxApeContext()



  const [deposits, setDeposits] = useState({
    state: 'loading',
    count: null,
    total: null,
    available: null,
    error: null,
  })


  useEffect(() => {
    const onDepositTotalSuccess = ((Total) => {
      setDeposits((prevState) => ({
        ...prevState,
        state: 'ready',
        total: Total,
      }))
    })

    const onDepositAvailableSuccess = ((Available) => {
      setDeposits((prevState) => ({
        ...prevState,
        state: 'still loading',
        available: Available,
      }))
      getUserTotalDeposits({ onSuccess: onDepositTotalSuccess })
    })


    getUserAvailable({ onSuccess: onDepositAvailableSuccess })


  }, [getUserAmountOfDeposits])


  const renderDepositsTotal = (i) => {
    if (!deposits.total) {
      return <p>-</p>
    }
    return (<p>{(deposits.total / 1000000000000000000).toString()} AVAX</p>)
  }

  const renderDepositsAvailable = (i) => {
    if (!deposits.available) {
      return <p>-</p>
    }
    return (<p>{(deposits.available / 1000000000000000000).toString()} AVAX</p>)

  }


  const [transactionState, setTransactionState] = useState({
    state: 'initial',
    data: null,
    error: null,
  })


  const handleSubmit = (event) => {

    event.preventDefault()

    setTransactionState((prevTransactionState) => ({
      ...prevTransactionState,
      state: 'loading',
    }))

    const onSuccess = (data) => {
      setTransactionState({
        state: 'success',
        data,
        error: null,
      })

    }

    const onError = (error) => {
      setTransactionState({
        state: 'error',
        data: null,
        error,
      })

    }

    withdraw({ onSuccess, onError })


  }


  return (

    <div className={styles.card}>
      <h1>Withdrawal</h1>
      <div className={styles.data}>
      <div>
        <h4>Total deposits</h4>
        {renderDepositsTotal()}
      </div>
      <div>
        <h4>Available deposits</h4>
        {renderDepositsAvailable()}
      </div>
      </div>



      <div className={styles.formSubmitDiv}>
        <button className={styles.formSubmit} type="submit" onClick={handleSubmit}>
          Withdraw
        </button>
      </div>
      <p>{transactionState.state === 'loading'
        ? 'Sending message...'
        : ''}
      </p>

    </div>
  )

}