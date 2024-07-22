/*
    Given a sorted array of integers, write a function called search, that accepts a value and returns the 
    index where the value passed to the function is located. If the value is not found, return -1.
    search([1,2,3,4,5,6], 4);  //returns 3
*/

// Naive Solution

// function search(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             return i
//         }
//     }
// }

// console.log(search([1,2,3,4,5,6], 4));

// Divide & Conquer

function searchDC(arr, n) {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max) {
        let middle = Math.floor((min + max)/2);
        if (arr[middle] == n) {
            return middle;
        }
        if (arr[middle] < n) {
            min = middle + 1;
        }
        if (arr[middle] > n) {
            max = middle -1;
        }
    }
    return -1;
}

console.log(searchDC([1,2,3,4,5,6], 6));