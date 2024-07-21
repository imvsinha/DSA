/*
   Write a function which takes in a string and returns counts of each character in the string.
   charCount('aaaa'); // {a:4}
   charCount('hello); // {h:1, e:1, l:2, o:1}
*/

// Using Regex
function charCount(word) {
    let result = {};
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (/[a-zA-Z0-9]/.test(char)) {
            if (char in result) {
                result[char] ++
            } else {
                result[char] = 1
            }
        }
    }
    console.log(result);
}

// Using ASCII value
function charCountNew(word) {
    let result = {};
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (isAlphaNumeric(char)) {
            if (char in result) {
                result[char] ++
            } else {
                result[char] = 1
            }
        }
    }
    console.log(result);
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if ((code > 47 && code <58) || (code > 64 && code <91) || (code > 96 && code <123)) {
        return true;
    } else {
        return false;
    }
}

charCount('Letter Of the Count');
charCountNew('Hello');