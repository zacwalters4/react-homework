export const getPoints = (total) => {
    let points = 0
    if(total > 100) {
        // If the total cost is over 100, 50 points are added for the $50 above $50 and then every dollar above 100 is worth double
        points += 50 + (total - 100) * 2
    } 
    else if(total > 50) {
        // If the total is above $50 but not above $100, the total points is equal to the amount above $50
        points += total-50
    }
    // setTotalPoints(totalPoints => (totalPoints += points))
    // If the total is not above $50, no points are earned
    return points
}