/*
    Write a function called sumZero which accepts a sorted array of integers. The function should find the first
    pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair 
    does not exist.

    sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
    sumZero([-2,0,1,3]) // undefined
    sumZero([1,2,3]) // undefined
*/

function sumZero(arr) {
    let first = 0;
    let last = arr.length - 1;

    while(first<last) {
        let sum = arr[first] + arr[last];
        if (sum === 0) {
            return [arr[first], arr[last]];
        }
        if (sum > 0) {
            last --;
        } else {
            first ++
        }
    }
    return;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));