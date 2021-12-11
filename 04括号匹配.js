/**
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 */

// map方法
var isValid = function(s) {
    let arr = s.split('')
    let len = arr.length;
    let stack = [];
    let map = new Map([[')', '('], [']', '['], ['}', '{']]);
    if (len % 2 !== 0) 
        return false;
    for(let i = 0; i < len; i++) {
        if (map.get(arr[i])) {

            if (stack.pop() !== map.get(arr[i])) { 
                return false;
            }
        } else {
            stack.push(arr[i]);
        }
    }
    return !stack.length;
};
// console.log(isValid("([)]"))

// case 方法
var isValid_case = function(s) {
    let len = s.length;
    let stack = [];
    if (len % 2 !== 0)
        return false;
    for (let ch of s) {
        switch(ch){
            case '(':
            case '[':
            case '{':
                stack.push(ch);
                break;
            case ')':
                if (stack.pop() !== '(') {
                    return false
                }
                break;
            case ']' :
                if (stack.pop() !== '[') {
                    return false
                }
                break;
            case '}' :
                if (stack.pop() !== '{') {
                    return false
                }
                break;
        }
    }
    return !stack.length;
}
console.log(isValid_case("[()]"))