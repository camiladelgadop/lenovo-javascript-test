/**
 * Create a function that receives an array of positive integers and returns an array with only the input’s pair numbers
 * For example:
 * [INPUT] array = [1 2 3 4];
 * [OUTPUT] array = [2, 4];
 */
function getPairNumbers(array) {
    const pairs = [];

    for (let i = 0; i < array.length; i++) {
        const int = array[i];

        if ((int % 2) === 0) {
            pairs.push(int);
        }
    }

    return pairs;
}

/**
 * Create a function that receives a String as parameter and
 * returns a Boolean value indicating if the word is a palindrome* or not
 */
function isPalindrome(string) {
    return string.split('').reverse().join('') === string;
}

/**
 * Using any JavaScript object creation pattern, create a Car object with the following attributes and methods:
 * String: make
 * String: model
 * boolean: turnedOn
 * int: engineDisplacement (cylinder volume)
 * int: year
 */
function createCar(make, model, cc, year) {
    const car = {};

    car.make = make;
    car.turnedOn = false;
    car.model = model;
    car.cc = cc;
    car.year = year;

    car.isOn = function() {
        return car.turnedOn
    }

    car.turnOn = function() {
        car.turnedOn = true;
    }

    car.turnOff = function() {
        car.turnedOn = false;
    }

    car.toString = function() {
        return `${car.year}, ${car.make}, ${car.model}, ${car.cc}`;
    }

    car.getMarketingData = function() {
        return `${car.make}, ${car.model}, ${car.year}`;
    }

    return car;
}