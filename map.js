const eqArrays = function(arrOne, arrTwo) {

  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
  
    for (let i = 0; i <= arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    
    return true;
  }
  return false;
};


const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 3, 4, 5, 6, 8];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, num => num * 2);
const results3 = map(numbers, number => Math.pow(number, 2));
const results4 = map(numbers, number => number % 2 === 0 ? 'even' : 'odd');

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [2,6,8,10,12,16]);
assertArraysEqual(results3, [1,9,16,25,36,64]);
assertArraysEqual(results4, ['odd', 'odd', 'even', 'odd', 'even', 'even']);