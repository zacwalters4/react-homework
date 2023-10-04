// Import our newly created fake data set
import { data } from "../Data/data"

// Set up a fake API call function
export const getData = () => {
    return (
        // fetch('https://fakeAPI.com')
        // .then(response => {
        // Epic API stuff goes here (Error handling and such!)
        // })
        // Return our fake data set
        data
    )
}