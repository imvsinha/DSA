/*
    Multiple Pointers - isSubsequence
    Write a function called isSubsequence which takes in two strings and checks whether the characters in the 
    first string form a subsequence of the characters in the second string. In other words, 
    the function should check whether the characters in the first string appear somewhere in the second string, 
    without their order changing.
    
    Examples:
    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
    
    Your solution MUST have AT LEAST the following complexities:
    Time Complexity - O(N + M)
    Space Complexity - O(1)
*/

// Iterative
function isSubsequence(word1, word2) {
    let i = 0;
    let j = 0;
    while (j < word2.length) {
        if (word2[j] === word1[i]) {
            i++;
        }
        if (i==word1.length) {
            return true;
        }
        j++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));

function isSubsequenceRec(word1,word2) {
    if (word1.length === 0) {
        return true;
    }
    if (word2.length === 0) {
        return false;
    }
    if (word2[0] === word1[0]) {
        return isSubsequenceRec(word1.slice(1), word2.slice(1));
    }
    return isSubsequenceRec(word1, word2.slice(1));
}

console.log(isSubsequenceRec('hello', 'hello world'));
console.log(isSubsequenceRec('abc', 'acb'));
console.log(isSubsequenceRec('sing', 'sting'));
console.log(isSubsequenceRec('abc', 'abracadabra'));