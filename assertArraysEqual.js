const eqArrays = function(arrOne, arrTwo) {
  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
    return arrOne.every((value, index) => value === arrTwo[index]);
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
