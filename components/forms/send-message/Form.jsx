import { useState } from 'react'

import { useAvaxApeContext } from '../../../context/avaxape/avaxapeContext'

import styles from './Form.module.scss'



export default function Invest() {

  const [formState, setFormState] = useState({
    plan: 0,
    value: '',
  })

  const [transactionState, setTransactionState] = useState({
    state: 'initial',
    data: null,
    error: null,
  })

  const {invest, getContractBalance} = useAvaxApeContext()
  

  const handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }))

    if (transactionState.state === 'success') {
      setTransactionState({
        state: 'initial',
        data: null,
        error: null,
      })
    }
  }

  const handleChoosePlan = (planNumber) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      plan: planNumber,
    }))

    console.log(formState.plan)
  }

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

      setFormState((prevFormState) => ({
        ...prevFormState,
        value: '',
      }))
      
    }

    const onError = (error) => {
      setTransactionState({
        state: 'error',
        data: null,
        error,
      })

    }

    console.log(getContractBalance())
    invest({messageData: formState, onSuccess, onError})
    

  }
   

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {transactionState.state === 'success' ? (
      <p className={styles.formNotification}>Congratulations! Successful Investment!</p>
    ) : (
      '')}
        <div className={styles.card}>
                    <div className={styles.optionCards}>
                    <div
                      className={formState.plan == 1 ? styles.optionCardSelected : styles.optionCard}
                      onClick={() => handleChoosePlan(1)}
                      
                    >e
                      
                    </div>

                    <div
                      className={formState.plan == 2 ? styles.optionCardSelected : styles.optionCard}
                      onClick={() => handleChoosePlan(2)}
                    >e
                      
                    </div>

                    <div
                      className={formState.plan == 3 ? styles.optionCardSelected : styles.optionCard}
                      onClick={() => handleChoosePlan(3)}
                    >e
                      
                    </div>
                    
                    </div>
                  <div className={styles.formInpDiv}>
                  <input
                          className={styles.formInput}
                          name="value"
                          value={formState.value}
                          onChange={handleInputChange}
                  />
                  </div>
                    <div className={styles.counter}>számolós</div>
                <div className={styles.formSubmitDiv}>
                  <button className={styles.formSubmit} type="submit">
                    Deposit
                  </button>
                </div>
                <p>{transactionState.state === 'loading'
                    ? 'Sending message...'
                    : ''}
                </p>
        </div>
       
            <div className={styles.card}>
                <table>
                <tr>
                    <td>
                    <h1 class="cardTitle"></h1>
                    </td>
                    <td>valami kis logó</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td> 
                  </tr>
                  <tr>
                    <td>
                      <label className={styles.formLabel}>
                        <span className={styles.formLabelText}>Amount in AVAX </span>
                        <input
                          className={styles.formInput}
                          name="value"
                          value={formState.value}
                          onChange={handleInputChange}
                        />
                      </label>
                    </td>
                    <td>számolós téma talán</td>
                  </tr>
                </table>
                
                <button className={styles.formSubmit} type="submit">
                  {transactionState.state === 'loading'
                    ? 'Sending message...'
                    : 'Deposit'}
                </button>
          </div>
    </form>
  )
}

