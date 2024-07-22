/* 
    Write a function called maxSubArraySum which accepts an array of integers and a number called n.
    The function should calculate the maximum sum of n consecutive elements in the array.
    [maxSubArraySum([1,2,5,2,8,1,5],4);] // 17
*/

// Naive Solution
// function maxSubArraySum(arr, n) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let tempSum = arr[i];
//         for (let j = 1; j < n; j++) {
//             tempSum = tempSum + arr[i+j];          
//         }
//         console.log('temp sum: ' + tempSum);
//         if (tempSum>sum) {
//             sum = tempSum;
//         }
//     }
//     return sum;
// }

// Sliding Window Pattern

function maxSubArraySum(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + arr[i]
    }

    let tempSum = sum;

    for (let j = n; j < arr.length; j++) {
        tempSum = tempSum - arr[j-n] + arr[j];
        if (tempSum > sum) {
            sum = tempSum;
        }
    }
    return sum;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5],4));