import './App.css'
import { useState, useEffect } from "react"
// Import our fake API call
import { getData } from '../Utility/APICalls';
function App() {
  // The transaction data will be stored in this stately variable
  const [transactionData, getTransactionData] = useState([])

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
    <main className="App">

    </main>
  )
}

export default App;
