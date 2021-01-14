let input = require('fs').readFileSync('./dev/stdin/file.txt','utf-8')




let [A,B,C] = input.split('\n').map(itIsNumber => parseFloat(itIsNumber))
let TOTAL = B + C*0.15
console.log('TOTAL = R$' + TOTAL.toFixed(2))