import './App.css'
import { useState, useEffect } from "react"
// Import our fake API call
import { getData } from '../Utility/APICalls';
import Transaction from '../Transaction/Transaction'
const App = () => {
  // The transaction data will be stored in this stately variable
  const [transactionData, getTransactionData] = useState([])

  // The total points will be stored in its own state variable
  const [totalPoints, setTotalPoints] = useState(0)

  // This function will call the API call function and set the State to the returned data
  const searchData = () => {
    // I would use a .then after getData(), if it was a real API call 
    getTransactionData(getData())
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
        transactionData.map((transaction, index) => {
          return <Transaction transaction={transaction} setTotalPoints={setTotalPoints} key={index}/>
        }) 
      }
      {/* This title will show the totalPoints earned through every transaction */}
      <h1>{`Total Points Earned: ${totalPoints}`}</h1>
    </main>
  )
}

export default App
