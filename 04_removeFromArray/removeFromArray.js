const removeFromArray = function (array, ...num) {
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < num.length; k++) {
            if (array.at(i) === num.at(k)) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
