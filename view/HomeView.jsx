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
      <div className={styles.Title}>
        <h1 >Welcome to the <span>Jungle!</span></h1>
      </div>
      
      <h1 className={styles.Title2}>Choose Your Plan</h1>
      <Invest />
      <div className={styles.Actions}>
        <Withdraw />
        <Referral />
      </div>

      <DepositInfo />
    </div>
  )
}
