import Link from 'next/link'

import Button from '../button/Button'

import { useAuthContext } from '../../context/auth/authContext'
import { ACCOUNTS_FETCHED } from '../../context/auth/authReducer'
import compressAddress from '../../utilities/compressAddress'

import logo from '../../logo/ujlogo.png'
import Image from 'next/image'

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
        <Image 
          src={logo}
          width={400}
          height={100}
          />
        <div className={styles.headerButtons}>
          <Link href=".">
            <a className={styles.headerLink}>Audit</a>
          </Link>

          <Link href=".">
            <a className={styles.headerLink}>Contract</a>
          </Link>

          <Link href=".">
            <a className={styles.headerLink}>Docs</a>
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
