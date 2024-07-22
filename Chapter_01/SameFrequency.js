/*
    Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

    Your solution MUST have the following complexities:

    Time: O(N)

    Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

function sameFrequency(num1,num2) {
    let N1 = num1.toString();
    let N2 = num2.toString();

    if (N1.length != N2.length) {
        return false;
    }

    let container1 = {};
    let container2 = {};

    for (let i = 0; i < N1.length; i++) {
        if (N1[i] in container1) {
            container1[N1[i]] ++;
        } else {
            container1[N1[i]] = 1
        }
    }
    for (let i = 0; i < N2.length; i++) {
        if (N2[i] in container2) {
            container2[N2[i]] ++;
        } else {
            container2[N2[i]] = 1
        }
    }
    for (const num in container1) {
        if (!(num in container2)) {
            return false;
        }
        if (container1[num] !== container2[num]) {
            return false;
        }
    }

    return true
}

console.log(sameFrequency(18321,28131));