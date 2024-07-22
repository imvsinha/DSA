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