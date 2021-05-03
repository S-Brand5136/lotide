const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual


// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
