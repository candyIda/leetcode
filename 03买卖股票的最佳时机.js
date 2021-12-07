/*
给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
输入: prices = [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

*/
var maxProfit = function(prices) {
    let len = prices.length;
    if(len == 0){
        return 0;
    }
    let max = 0;
    for (let i = 1; i < len; i++){
        if (prices[i] > prices[i - 1]) {
            max += prices[i] - prices[i-1];
        }
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]))

