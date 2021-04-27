const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
    return arrOne.every((value, index) => value === arrTwo[index]);
  }
  return false;
};

assertEqual(eqArrays([1, 2, 3], "wjasdja"), false);
