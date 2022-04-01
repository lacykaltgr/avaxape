import Link from 'next/link'

import Button from '../button/Button'

import { useAuthContext } from '../../context/auth/authContext'
import { ACCOUNTS_FETCHED } from '../../context/auth/authReducer'
import compressAddress from '../../utilities/compressAddress'


import styles from './Header.module.scss'

export default function Header() {
  const { authState, connectWallet } = useAuthContext()

  const isConnected = [ACCOUNTS_FETCHED].includes(authState.status)
  const connectText = authState.isLoading
    ? 'Connecting'
    : isConnected
      ? compressAddress(authState.data[0])
      : 'Connect Wallet'

  return (

    <div className={styles.header}>
      <img src=''>
      </img>

      <div className={styles.headerButtons}>



      <Link href=".">
          <a className={styles.headerLink}>Contract</a>
        </Link>

        <Link href="https://hazecrypto.net/">
          <a className={styles.headerLink} target="_blank">Audit</a>
        </Link>

        <Link href="https://medium.com/@avaxape/avaxape-com-b9814cd19a0b"
         >
          <a className={styles.headerLink} target="_blank">Docs</a>
        </Link>


        <Link href="https://t.me/+oNQjQO42iGY4MWZk">
          <a className={styles.headerLink} target="_blank">Socials</a>
        </Link>

        <Button
          extraClassnames={styles.headerButton}
          handleClick={connectWallet}
          isActive={isConnected}
        >
          {connectText}
        </Button>
      </div>
    </div>
  )
}
