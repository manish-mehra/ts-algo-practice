function maxProfit(prices: number[]): number {
  
  let left = 0
  let right = 1
  let max_profit = 0

  while(right < prices.length){
    if(prices[left] < prices[right]){
      let temp_profit = prices[right] - prices[left]
      max_profit = Math.max(temp_profit, max_profit)
    } else {
      left = right
    }
    right++
  }

  return max_profit
}


const test1 = [7,1,5,3,6,4]
console.log(maxProfit(test1))
export {}