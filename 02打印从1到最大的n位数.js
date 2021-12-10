/*输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。
比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
*/

//不考虑大数问题

// 解法1
var printNumbers_1 = function(n){
    if (n == 0) {
        return [];
    }
    let res = [];
    const max = Math.pow(10, n);
    for(let i = 1; i < max; i++){
        res.push(i);
    }
    return res;
}

var printNumbers_2 = function(n) {
    if (n == 0){
        return [];
    }
    let res = [];
    let max = '';
    for(let i = 0; i < n; i++){
        max += '9';
    }
    for(let j = 1; j <= max; j++){
        res.push(j);
    }
    return res;
}

// 考虑大数问题 用dfs算法
var printNumbers_dfs = function(n){
    let res = [];
    var dfs = function(target, bitNumber) {
        if(target.length == bitNumber){
            res.push(target);
            return;
        }
        for(let i = 0; i <= 9; i++){
            target += i.toString();
            dfs(target, bitNumber);
            target = target.slice(0, -1);//删掉末尾的数字
        }
    }

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= 9; j++){
            dfs(j.toString(), i);
        }
    }
    return res;
}
console.log(printNumbers_dfs(2));
