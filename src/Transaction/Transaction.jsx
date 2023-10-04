import './Transaction.css'
import { useState, useEffect } from "react"
import { getPoints
 } from '../Utility/Helper'
// The transaction component will recieve the single transaction data and the setTotalPoints state setting function from App
const Transaction = ({transaction}) => {

    return (
        <div className="transaction">
            <h2>{`Date: ${transaction.date}`}</h2>
            <h2>{`Total: $${transaction.transactionTotal}`}</h2>
            <h2>{`Points: ${getPoints(transaction.transactionTotal)}`}</h2>
        </div>
  )
}

export default Transaction