import './App.css'
import { useState, useEffect } from "react"
import { getData } from '../Utility/APICalls'
import Transaction from '../Transaction/Transaction'
import { getPoints } from '../Utility/Helper'

const App = () => {
  // The transaction data will be stored in this stately variable
  const [transactionData, getTransactionData] = useState([])

  // This function will call the API call function and set the State to the returned data
  const searchData = () => {
    // I would use a .then after getData(), if it was a real API call 
    getTransactionData(getData())
  }

  // This function will calculate the total points of the transaction history by using the getPoints function
  const getTotalPoints = () => {
    let totalPoints = 0
    transactionData.forEach(transaction => {
      totalPoints += getPoints(transaction.transactionTotal)
    })
    return totalPoints
  }

  // This use effect hook will run when the app first loads
  useEffect(() => {
    searchData()
  }, [])

  return (
    <main className="app">
      {/* Ensure the .map does not run if transactionData is empty */}
      {(!!transactionData.length) &&
        // Iterate through the transactionData array and render a Transaction component for every Transaction
        <div className="transaction-history">
          {transactionData.map((transaction, index) => {
            return <Transaction transaction={transaction} key={index}/>
          })}
          <h1>{`Total Points Earned: ${getTotalPoints()}`}</h1>
        </div>
      }
      {/* This title will show the totalPoints earned through every transaction */}
      
    </main>
  )
}

export default App
