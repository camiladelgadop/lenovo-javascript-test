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