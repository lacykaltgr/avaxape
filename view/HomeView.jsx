import { useAvaxApeContext } from '../context/avaxape/avaxapeContext'
import Invest from '../components/body/Invest'
import Withdraw from '../components/body/Withdraw'
import Referral from '../components/body/Referral'
import DepositInfo from '../components/body/Deposits'
import styles from './HomeView.module.scss'


export default function HomeView() {
 
const { invest, withdraw } =
  useAvaxApeContext()

  return (
    <div className={styles.home}>
      <h1>Choose Your Plan</h1>
      <Invest />
      <Withdraw />
      <Referral />
      <DepositInfo />
    </div>
  )
}
