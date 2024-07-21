/*
    Given two strings, write a function to determine if the second string is an anagram of the first.
    An anagram a word, phrase or name formed by rearranging the letters of another, such as cinema,
    formed from iceman.

    validAnagram('',''); //true
    validAnagram('aaz','zza'); //false
    validAnagram('anagram','nagaram'); //true
    validAnagram('rat', 'car'); //false
*/

function validAnagram(word1, word2) {

    if (word1.length !== word2.length) {
        return false;
    }

    let container1 = {};
    let container2 = {};

    for (const letter of word1) {
        if (letter in container1) {
            container1[letter] ++;
        } else {
            container1[letter] = 1;
        }
    }

    for (const letter of word2) {
        if (letter in container2) {
            container2[letter] ++;
        } else {
            container2[letter] = 1;
        }
    }

    for (const letter in container1) {
        if (!(letter in container2)) {
            return false;
        }
        if (container1[letter] !== container2[letter]){
            return false;
        }
    }

    return true;
}

console.log(validAnagram('aaz','zaa'));