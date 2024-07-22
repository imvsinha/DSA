/*
    Frequency Counter / Multiple Pointers - areThereDuplicates
        Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
        and checks whether there are any duplicates among the arguments passed in.  
        You can solve this using the frequency counter pattern OR the multiple pointers pattern.
    
    Examples:    
        areThereDuplicates(1, 2, 3) // false
        areThereDuplicates(1, 2, 2) // true 
        areThereDuplicates('a', 'b', 'c', 'a') // true 
    
    Restrictions:
        Time - O(n)
        Space - O(n)
        
    Bonus:
        Time - O(n log n)
        Space - O(1)
*/

// By using Frequency Counter

function areThereDuplicates(...arr) {
    let container1 = {}

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in container1) {
            return true;
        } else {
            container1[arr[i]] = 1;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));

// By using Multiple Pointers Pattern

function areThereDuplicatesMP(...arr) {
    arr.sort((a,b)=>{
        return a-b;
    });

    let first = 0;
    let second = 1;

    while (first < arr.length) {
        if (arr[first] === arr[second]) {
            return true;
        }
        first++;
        second++;
    }
    return false;
}

console.log(areThereDuplicatesMP(1, 2, 3));
console.log(areThereDuplicatesMP(1, 2, 2));

function oneLinerSolution(...arr) {
    const apple = new Set(arr).size;
    if (apple != arr.length) {
        return true
    }
    return false;
}

console.log(oneLinerSolution(1, 2, 3));
console.log(oneLinerSolution(1, 2, 2));