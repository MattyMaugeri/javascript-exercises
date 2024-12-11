const palindromes = function (str) {
    const lowerCase = str.toLowerCase();
    const modifiedStr = lowerCase.replace(/[\W_]/g, '');
    const reversedStr = modifiedStr.split('').reverse().join('');
    return reversedStr === modifiedStr;
};

console.log(palindromes('hello'));

// Do not edit below this line
module.exports = palindromes;