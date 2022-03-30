import { useState } from 'react'
import { useEffect } from 'react'

import { useAvaxApeContext } from '../../context/avaxape/avaxapeContext'
import { useAuthContext } from '../../context/auth/authContext'
import { ACCOUNTS_FETCHED } from '../../context/auth/authReducer'

import styles from './Invest.module.scss'



export default function Invest() {

  const queryParams = new URLSearchParams(window.location.search)
  const referrer = queryParams.get("ref")


  const { invest, getPercent } = useAvaxApeContext()


  const [formState, setFormState] = useState({
    plan: 2,
    valueFree: '',
    valueLocked: '',
    calculateFree: "0,00",
    calculateLocked: "0,00",
    referrer: referrer,
  })

  const [transactionState, setTransactionState] = useState({
    state: 'initial',
    data: null,
    error: null,
  })



  const handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
      calculateFree: formState.plan > 3 ? formState.calculateFree : calculate(formState.plan, value),
      calculateLocked: formState.plan < 4 ? formState.calculateLocked : calculate(formState.plan, value)
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
      calculateFree: planNumber > 3 ? formState.calculateFree : calculate(planNumber, formState.valueFree, true, true),
      calculateLocked: planNumber < 4 ? formState.calculateLocked : calculate(planNumber, formState.valueLocked, true, true)
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


  useEffect(() => {

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
        value = (parseInt(percents.data) - 10)/10
        break;
      case 0:
        value = (parseInt(percents.data)  - 20)/10
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
      profit = value * planPerc / 100 * planLenght[plan -1] / 10 
    } else if (plan < 7) {
      for (var i = 0; i < planLenght[plan - 1 - 3] / 10; i++) {
        profit += ((value + profit) * planPerc/100)
      }
    }
    
    return isFixed ? profit.toFixed(3).toString() : Math.round(profit).toString() 
  }



  const renderPercents = (i, isTotal) => {

    if (percents.state != 'ready') {
      return <p>-</p>
    }
    console.log(percents.data.toNumber())

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
              <h3 className={styles.CardText}>Alap</h3>
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(1, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(1, true)}
            </div>
            <div className={styles.cardFooter}>
              <span>14 Days</span>
            </div>
          </div>

          <div
            className={styles.optionCard + " " + (formState.plan == 2 ? styles.Selected : "")}
            onClick={() => handleChoosePlan(2)}
          ><div className={styles.innerCard}>
              <h3 className={styles.CardText}>Közép</h3>
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(2, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(2, true)}
            </div>
            <div className={styles.cardFooter}>
              <span>21 Days</span>
            </div>
          </div>
          <div
            className={styles.optionCard + " " + (formState.plan == 3 ? styles.Selected : "")}
            onClick={() => handleChoosePlan(3)}
          ><div className={styles.innerCard}>
              <h3 className={styles.CardText}>VIP</h3>
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(3, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(3, true)}

            </div>
            <div className={styles.cardFooter}>
              <span>28 Days</span>
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
            />
          </div>
          <div className={styles.counter}>Total return:   {formState.calculateFree}</div></div>
        <div className={styles.formSubmitDiv}>
          <button className={styles.formSubmit} type="submit">
            Deposit
          </button>
        </div>
        <p className={styles.Sending}>{transactionState.state === 'loading'
          ? 'Sending transaction...'
          : ''}
        </p>
      </div>

      <div className={styles.cardLocked}>
        <div className={styles.optionCards}>
          <div
            className={styles.optionCard + " " + (formState.plan == 4 ? styles.SelectedLocked : "")}
            onClick={() => handleChoosePlan(4)}

          ><div className={styles.innerCard}>
              <h3 className={styles.CardText}>Alap</h3>
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(4, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(4, true)}
            </div>
            <div className={styles.cardFooter}>
              <span>14 Days</span>
            </div>
          </div>

          <div
            className={styles.optionCard + " " + (formState.plan == 5 ? styles.SelectedLocked : "")}
            onClick={() => handleChoosePlan(5)}
          ><div className={styles.innerCard}>
              <h3 className={styles.CardText}>Közép</h3>
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(5, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(5, true)}

            </div>
            <div className={styles.cardFooter}>
              <span>21 Days</span>
            </div>
          </div>
          <div
            className={styles.optionCard + " " + (formState.plan == 6 ? styles.SelectedLocked : "")}
            onClick={() => handleChoosePlan(6)}
          ><div className={styles.innerCard}>
              <h3 className={styles.CardText}>VIP</h3>
              <h6 className={styles.CardText}>Daily Earnings</h6>
              {renderPercents(6, false)}
              <h6 className={styles.CardText}>Total Earnings</h6>
              {renderPercents(6, true)}

            </div>
            <div className={styles.cardFooter}>
              <span>28 Days</span>
            </div>
          </div>
        </div>
        <div className={styles.formInpRow}>
          <div className={styles.formInpDiv}>
            <input
              className={styles.formInput}
              name="valueLocked"
              value={formState.valueLocked}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.counter}>Total return:   {formState.calculateLocked}</div></div>
        <div className={styles.formSubmitDiv}>
          <button className={styles.formSubmit} type="submit">
            Deposit
          </button>
        </div>
        <p className={styles.Sending}>{transactionState.state === 'loading'
          ? 'Sending transaction...'
          : ''}
        </p>
      </div>
    </form>
  )
}

