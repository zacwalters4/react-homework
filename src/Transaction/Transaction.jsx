import './Transaction.css'
import { useState, useEffect } from "react"

// The transaction component will recieve the single transaction data and the setTotalPoints state setting function from App
const Transaction = ({transaction}, {setTotalPoints}) => {

    // This piece of state will hold the total points earned during this transaction
    // const [points, setPoints] = useState(0)

    // This function will calculate the points earned through the transaction
    const getPoints = () => {
        let total = transaction.transactionTotal
        let points = 0
        if(total > 100) {
            // If the total cost is over 100, 50 points are added for the $50 above $50 and then every dollar above 100 is worth double
            points += 50 + (total - 100) * 2

        } 
        else if(total > 50) {
            // If the total is above $50 but not above $100, the total points is equal to the amount above $50
            points += total-50
        }
        // If the total is not above $50, no points are earned
        return points
    }

    return (
        <div className="transaction">
            <h2>{`Date: ${transaction.date}`}</h2>
            <h2>{`Total: $${transaction.transactionTotal}`}</h2>
            <h2>{`Points: ${getPoints()}`}</h2>
        </div>
  )
}

export default Transaction