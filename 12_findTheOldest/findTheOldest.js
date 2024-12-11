const findTheOldest = function (people) {

    const sorted = people.sort((a, b) => a.yearOfBirth - b.yearOfBirth);
    return sorted;
};

// Do not edit below this line
module.exports = findTheOldest;
