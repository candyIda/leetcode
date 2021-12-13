// var candy = function(ratings) {
//     let arr = new Array(...ratings);
//     let res = 0;
//     let len = ratings.length;
//     let min = ratings[0];
//     for (let i = 1; i < len; i++) {
//         if (ratings[i] > 2) {
//             ratings[i] = 2;
//         }
//         min = Math.min(min, ratings[i]);     
//     }
//     // console.log(ratings);
//     if (min <= 0) {
//         let idx = ratings.indexOf(min);
//         ratings[idx] += 1;
//     }
//     for (let i = 0; i < len; i++) {
//         if (ratings[i] > ratings[i - 1]) {
//             if (ratings[i] <= ratings [i + 1] && (i + 1) < len) {
//                 ratings[i + 1] = ratings[i] - 1;
//             }
//         } else if (ratings[i] == ratings[i - 1]) {
//             if (arr[i] < arr[i - 1]) {
//                 ratings[i - 1] += 1;
//             } else if (arr[i] == arr[i - 1]){
//                 ratings[i] -= 1;
//             } else {
//                 ratings[i] += 1;
//             }
//         }
//     }
//     res = eval(ratings.join("+"));
//     console.log(ratings)
//     // console.log(arr)
//     return res;
// };

var candy = function(ratings) {
    const n = ratings.length;
    const left = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }
     
    let right = 0, ret = 0;
    for (let i = n - 1; i > -1; i--) {
        if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            right++;
        } else {
            right = 1;
        }
        ret += Math.max(left[i], right);
        // console.log(ret);
    }
    return ret;
};

console.log(candy([1,2,87,87,87,2,1]))
console.log(candy([1,2,2,1]));