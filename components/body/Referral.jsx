import { useState } from 'react'
import { useEffect } from 'react'

import { useAvaxApeContext } from '../../context/avaxape/avaxapeContext'
import { useAuthContext } from '../../context/auth/authContext'
import { ACCOUNTS_FETCHED } from '../../context/auth/authReducer'

import styles from './Referral.module.scss'



export default function Referral() {

  const { getUserDownlineCount, getUserReferralBonus, getUserReferralWithdrawn } = useAvaxApeContext()

  const { authState } = useAuthContext()
  const isConnected = [ACCOUNTS_FETCHED].includes(authState.status)


  //még kell ide az address

  //referralok hookja
  const [referrals, setReferrals] = useState({
    state: 'loading',
    count: null,
    bonus: null,
    withdrawn: null,
    error: null,
  })


  useEffect(() => {
    const onReferralWithdrawnSuccess = ((Withdrawn) => {
      setReferrals((prevState) => ({
        ...prevState,
        state: 'ready',
        withdrawn: Withdrawn,
      }))
    })

    const onReferralBonusSuccess = ((Bonus) => {
      setReferrals((prevState) => ({
        ...prevState,
        state: 'still loading',
        bonus: Bonus,
      }))
      getUserReferralWithdrawn({ onSuccess: onReferralWithdrawnSuccess })
    })

    const onReferralCountSuccess = ((Count) => {
      setReferrals((prevState) => ({
        ...prevState,
        state: 'still loading',
        count: Count,
      }))

      getUserReferralBonus({ onSuccess: onReferralBonusSuccess })
    })


    getUserDownlineCount({ onSuccess: onReferralCountSuccess })


  }, [getUserDownlineCount])

  const renderDownlineCount = () => {
    if (!referrals.count) {
      return <p>-</p>
    }
    return (<p>{referrals.count.toString()}</p>)
  }

  const renderReferralBonus = () => {
    if (!referrals.bonus) {
      return <p>-</p>
    }
    return (<p>{(referrals.bonus / 1000000000000000000).toString()}</p>)
  }

  const renderReferralWithdrawn = () => {
    if (!referrals.withdrawn) {
      return <p>-</p>
    }
    return (<p>{(referrals.withdrawn / 1000000000000000000).toString()}</p>)
  }

  const referralCode = "https://avaxape.com/?ref=" + authState.data[0].toString()

  const renderRedferralCode = () => {
    if (!isConnected) {
      return <p>-</p>
    }
    return <p className={styles.refaddress}>{referralCode}</p>
  }



  return (
    <div className={styles.card}>
      <div className={styles.data}>
        <div>
          <h4>Users invited</h4>
          {renderDownlineCount()}
        </div>
        <div>

          <h4>Referral Bonus</h4>
          {renderReferralBonus()}
        </div>
        <div>

          <h4>Referral withdrawn</h4>
          {renderReferralWithdrawn()}
        </div>

      </div>

      <h4>Your referral code is:</h4>
      <div className={styles.refaddressBox}>
        {renderRedferralCode()}
        <button className={styles.copy} onClick={async () => await navigator.clipboard.writeText(referralCode)}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z">
            </path>
          </svg>
        </button>
      </div>



    </div>
  )

}