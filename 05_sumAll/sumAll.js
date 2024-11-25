const sumAll = function (x, y) {
    let result = 0;
    if ((x !== parseInt(x)) ||
        (y !== parseInt(y)) ||
        (x < 0) ||
        (y < 0)) {
        return 'ERROR';
    }
    if (x > y) {
        for (let i = y; i <= x; i++) {
            result += i;
        }
    } else {
        for (let i = x; i <= y; i++) {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
