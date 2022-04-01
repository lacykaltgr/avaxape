import { useState } from 'react'
import { useEffect, useCallback } from 'react'

import { useAvaxApeContext } from '../../context/avaxape/avaxapeContext'
import { useAuthContext } from '../../context/auth/authContext'
import { ACCOUNTS_FETCHED } from '../../context/auth/authReducer'

import styles from './Deposits.module.scss'


export default function DepositInfo() {

    const { getUserAmountOfDeposits, getUserDepositInfo } = useAvaxApeContext()



    const [deposits, setDeposits] = useState({
        data: [],
        count: null,
        countDown: null,
        ready: null
    })


    useEffect(() => {
        const onDepositInfoSuccess = ((info) => {
                deposits.data.push(info)
                setDeposits((prevState) => ({
                    ...prevState,
                    ready: 2,
                }))
                console.log(deposits)
            })

        const onsuc = (x) => deposits.data.push(x)
            

        const onDepositCountSuccess = ((Count) => {
            if (!deposits.count){
                setDeposits({
                    ready: 1,
                    count: Count.toNumber(),
                    countDown: Count.toNumber(),
                    data: []
                })
            
            }
            else if (deposits.ready == 1){
                for (var i = 0; i< deposits.count - 1; i++){
                    getUserDepositInfo({ idx: i, onSuccess: onsuc})}
                getUserDepositInfo({idx: deposits.count -1, onSuccess: onDepositInfoSuccess})}
        })


        getUserAmountOfDeposits({ onSuccess: onDepositCountSuccess })

    })


    const renderDepositsAmount = () => {
        if (!deposits.ready) {
            return <p>-</p>
        }
        return (<p>{deposits.count.toString()}</p>)
    }


    const renderDepositInfo = () => {
        if (deposits.ready != 2) {
            return
        }
        deposits.data.sort((a, b) => a.start < b.start)
        return deposits.data.map((deposit) => {
            const { plan, percent, amount, profit, start, finish } = deposit
            const plans = []
            //plan = plans[plan]
            return (
                <tr>
                    <td>{plan.toString()}</td>
                    <td>{(percent/10).toString()}%</td>
                    <td>{(profit/1000000000000000000).toFixed(3).toString()} AVAX</td>
                    <td>{start.toString()}</td>
                    <td>{finish.toString()}</td>
                    <td>{(amount/1000000000000000000).toFixed(3).toString()} AVAX</td>
                </tr>
            )
        })

    }

    const renderTableHeader = () => {
        let header = ["Plan", "Percent", "Profit", "Start", "Finish", "Amount"]
        return header.map((key) => {
            return <th>{key}</th>
        })
    }

    return (
        <div className={styles.card}>
            <h4>Deposits</h4>
            <table>
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderDepositInfo()}
                </tbody>
            </table>
        </div>
    )
}