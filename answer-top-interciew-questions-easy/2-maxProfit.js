/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 0) { return 0 }
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) { total += prices[i + 1] - prices[i] }
    }

    return total
}

// Input: [7,1,5,3,6,4]
// Output: 7
// Input: [1,2,3,4,5]
// Output: 4

let input = [1, 2, 3, 4, 5]
let answer = maxProfit(input)
module.exports = maxProfit
    // console.log(answer);