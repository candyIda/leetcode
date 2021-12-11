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

/**
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

 */
var maxProfit_2 = function(prices) {
    let len = prices.length;
    if (len == 0) {
        return 0;
    }
    let maxPro = 0;
    let minValue = prices[0];
    for (let i = 1; i < len; i++) {
        let mid = prices[i] - minValue;
        maxPro = Math.max(mid, maxPro);
        minValue = Math.min(prices[i], minValue);
    }
    return maxPro;
};