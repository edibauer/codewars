/* 
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

// genrate index
/* const arrIndex = []
let number = 2

for (let i = 1; i <= number; i++) {
    arrIndex.push(i)
}

console.log(arrIndex) */

// create arr
const arr = [1]

function calcNumber (number) {
    // data ir function
    let arrIndex = []
    let helpArr = []
    let helpRoot = [1]
    let arr = [1] // with base case

    let first = 0
    let second = 0
    let sqrt = 0
    
    let sum = 0

    // if given values is equal to 0
    if (number === 0) return 0

    // if given value is diff to 0
    // generate indexing
    for (let i = 1; i <= number; i++) {
        arrIndex.push(i)
    }
    console.log(arrIndex)

    // math to generate arrays
    for (let j = 0; j < arrIndex.length; j++) {
        first = ((18 * arrIndex[j]) - 3)
        helpArr.push(first)
        // console.log(helpArr) 
        second = helpRoot[j] + first
        helpRoot.push(second)
        // console.log(helpRoot)
        sqrt = Math.sqrt(second)
        arr.push(Number(1 / sqrt).toFixed(2))
    }

    console.log(arr)

    // sum elements od arr
    for (let k = 0; k < arr.length - 1; k++) {
        sum = sum + Number(arr[k])
    }

    sum = Number(sum).toFixed(2)
    return String(sum)
}

console.log(calcNumber(5))

/* arr.push(1 / calcNumber())

console.log(arr) */
