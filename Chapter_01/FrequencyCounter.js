/*
    Write a function called same, which accepts two arrays. The function should return true if every value in the 
    array has it's corresponding value squared in the second array. The frequencies of value must be same.

    same([1,2,3], [4,1,9])  // true
    same([1,2,3], [1,9])    // false
    same([1,2,1], [4,4,1])  // false (must be same frequency)
*/

function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    let container1 = {}
    let container2 = {}
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] in container1) {
            container1[arr1[i]] ++;
        } else{
            container1[arr1[i]] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in container2) {
            container2[arr2[i]] ++;
        } else{
            container2[arr2[i]] = 1;
        }
    }

    for (const num in container1) {
        if (!(num**2 in container2)) {
            return false;
        }
        if (container1[num ** 2] != container2[num]) {
            return false;
        }
    }

    return true;

    console.log(container1);
    console.log(container2);
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]) );
console.log(same([1,2,1], [4,4,1]));