import { useState } from 'react'
import { useEffect } from 'react'

import { useAvaxApeContext } from '../../context/avaxape/avaxapeContext'
import { useAuthContext } from '../../context/auth/authContext'
import { ACCOUNTS_FETCHED } from '../../context/auth/authReducer'

import styles from './Invest.module.scss'


export default function Invest() {

  var referrer = "0x0000000000000000000000000000000000000000"
  if (typeof window !== "undefined") {
    const queryParams = new URLSearchParams(window.location.search)
    referrer = queryParams.get("ref")
  }
  
  const { authState } = useAuthContext()
  const isConnected = [ACCOUNTS_FETCHED].includes(authState.status)


  const { invest, getPercent } = useAvaxApeContext()


  const [formState, setFormState] = useState({
    plan: 2,
    valueFree: '',
    valueLocked: '',
    calculateFree: "0.00",
    calculateLocked: "0.00",
    referrer: referrer,
  })

  const [transactionState, setTransactionState] = useState({
    state: 'initial',
    data: null,
    error: null,
  })



  const handleInputChange = (event) => {
    //handleChoosePlan(formState.plan)

    const {
      target: { name, value },
    } = event

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
      calculateFree: formState.plan > 3 ? formState.calculateFree : calculate(formState.plan, parseInt(value), true, true),
      calculateLocked: formState.plan < 4 ? formState.calculateLocked : calculate(formState.plan, parseInt(value), true, true)
    }))


    if (transactionState.state == 'success') {
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
      calculateFree: planNumber > 3 ? formState.calculateFree : calculate(planNumber, parseInt(formState.valueFree), true, true),
      calculateLocked: planNumber < 4 ? formState.calculateLocked : calculate(planNumber, parseInt(formState.valueLocked), true, true)
    }))
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
        calculateFree: 0,
        calculateLocked: 0,
      }))

    }

    const onError = (error) => {
      setTransactionState({
        state: 'error',
        data: null,
        error,
      })

    }

    invest({ formData: formState, onSuccess, onError })


  }


  //percent hooks
  const [percents, setPercents] = useState({
    data: null,
    state: 'loading',
  })

  const base = 110
  const launch = new Date(2022, 3, 28)
  const now = new Date()
  const passedDays = (now - launch)/(1000 * 3600 * 24)
  const valueNow = base + passedDays*5

  console.log(passedDays)

  useEffect(() => {

    if (!isConnected) {
      setPercents({
        data: valueNow,
        state: 'ready',
      })
    }

    const onPercentsSuccess = (Percents) => {
      setPercents(({
        data: Percents,
        state: 'ready'
      }))
    }

    getPercent({ planNumber: 0, onSuccess: onPercentsSuccess })

  }, [getPercent])

  const planPercent = (plan) => {
    var value
    switch (plan) {
      case 1:
        value = parseInt(percents.data) / 10
        break;
      case 2:
        value = (parseInt(percents.data) - 10) / 10
        break;
      case 0:
        value = (parseInt(percents.data) - 20) / 10
        break;
      default:
        break;
    }
    return value
  }


  const calculate = (plan, value, isTotal, isFixed) => {
    var planPerc = planPercent(plan % 3)
    var profit = 0
    var planLenght = [100, 150, 200]
    if (!isTotal) return planPerc.toString()
    if (plan < 4) {
      profit = value * planPerc / 100 * planLenght[plan - 1] / 10
    } else if (plan < 7) {
      for (var i = 0; i < planLenght[plan - 1 - 3] / 10; i++) {
        profit += ((value + profit) * planPerc / 100)
      }
    }
    return profit ? (isFixed ? profit.toFixed(3).toString() : Math.round(profit).toString()): "0.00"
  }



  const renderPercents = (i, isTotal) => {

    if (percents.state != 'ready') {
      return <p>-</p>
    }

    var value = isTotal ? calculate(i, 100, true, false) : calculate(i, 100, false, false)
    return (<p>{value.toString()}%</p>)

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
            className={styles.optionCard + " " + (formState.plan == 1 ? styles.Selected : "")}
            onClick={() => handleChoosePlan(1)}

          ><div className={styles.innerCard}>
            <h3 className={styles.CardText}>Mowgli</h3>
              <svg className={styles.unLocked} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path>
              </svg>
              

              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(1, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(1, true)}
            </div>
            <div className={styles.cardFooter}>
              <span>10 Days</span>
            </div>
          </div>

          <div
            className={styles.optionCard + " " + (formState.plan == 2 ? styles.Selected : "")}
            onClick={() => handleChoosePlan(2)}
          ><div className={styles.innerCard}>
            <h3 className={styles.CardText}>Chimpanze</h3>
              <svg className={styles.unLocked} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path>
              </svg>
              
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(2, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(2, true)}
            </div>
            <div className={styles.cardFooter}>
              <span>15 Days</span>
            </div>
          </div>
          <div
            className={styles.optionCard + " " + (formState.plan == 3 ? styles.Selected : "")}
            onClick={() => handleChoosePlan(3)}
          ><div className={styles.innerCard}>
            <h3 className={styles.CardText}>Harambe</h3>
              <svg className={styles.unLocked} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path>
              </svg>
              
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(3, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(3, true)}

            </div>
            <div className={styles.cardFooter}>
              <span>20 Days</span>
            </div>
          </div>


        </div>
        <div className={styles.formInpRow}>
          <div className={styles.formInpDiv}>
            <input
              className={styles.formInput}
              name="valueFree"
              value={formState.valueFree}
              onChange={handleInputChange}
              type="number"
              placeholder='min 0.05 AVAX'
            />
          </div>
          <div className={styles.counter}>Total return:   {formState.calculateFree} AVAX</div></div>
        <div className={styles.formSubmitDiv}>
          <button className={styles.formSubmit} type="submit">
            {transactionState.state === 'loading'
              ? 'Sending transaction...'
              : 'Deposit'}
          </button>
        </div>
        <p className={styles.Sending}>
        </p>
      </div>

      <div className={styles.cardLocked}>
        <div className={styles.optionCards}>
          <div
            className={styles.optionCard + " " + (formState.plan == 4 ? styles.SelectedLocked : "")}
            onClick={() => handleChoosePlan(4)}

          ><div className={styles.innerCard}>
            <h3 className={styles.CardText}>Tarzan</h3>
              <svg className={styles.Locked} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="rgb(255,251,0)"  height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
              </svg>
              
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(4, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(4, true)}
            </div>
            <div className={styles.cardFooter}>
              <span>10 Days</span>
            </div>
          </div>

          <div
            className={styles.optionCard + " " + (formState.plan == 5 ? styles.SelectedLocked : "")}
            onClick={() => handleChoosePlan(5)}
          ><div className={styles.innerCard}>
            <h3 className={styles.CardText}>Gorilla</h3>
              <svg className={styles.Locked} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="rgb(255,251,0)"  height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
              </svg>
              
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(5, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(5, true)}

            </div>
            <div className={styles.cardFooter}>
              <span>15 Days</span>
            </div>
          </div>

          <div
            className={styles.optionCard + " " + (formState.plan == 6 ? styles.SelectedLocked : "")}
            onClick={() => handleChoosePlan(6)}
          ><div className={styles.innerCard}>
            <h3 className={styles.CardText}>King-Kong</h3>
              <svg className={styles.Locked} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="rgb(255,251,0)" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
              </svg>
              
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(6, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(6, true)}

            </div>
            <div className={styles.cardFooter}>
              <span>20 Days</span>
            </div>
          </div>
        </div>
        <div className={styles.formInpRow}>
          <div className={styles.formInpDiv}>
            <input
              className={styles.formInputLocked}
              name="valueLocked"
              value={formState.valueLocked}
              onChange={handleInputChange}
              placeholder='min 0.05 AVAX'
            />
          </div>
          <div className={styles.counter}>Total return:   {formState.calculateLocked} AVAX</div></div>
        <div className={styles.formSubmitDiv}>
          <button className={styles.formSubmitLocked} type="submit">
            {transactionState.state === 'loading'
              ? 'Sending transaction...'
              : 'Deposit'}
          </button>
        </div>
      </div>
    </form>
  )
}

