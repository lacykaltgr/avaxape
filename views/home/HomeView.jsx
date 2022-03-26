import { useEffect, useState } from 'react'

import { useAvaxApeContext } from '../../context/avaxape/avaxapeContext'

import Invest from '../../components/forms/send-message/Form'

import styles from './HomeView.module.scss'

export default function HomeView() {
 
const { invest, withdraw } =
  useAvaxApeContext()

  return (
    <div className={styles.home}>
      <h2>Welcome to AvaxApe</h2>
      <p>fuckin best scam</p>


      <Invest />
    </div>
  )
}
