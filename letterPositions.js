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

const letterPositions = function(sentence) {
  const results = {};

  let counter = 0;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(counter);
      } else {
        results[letter] = [counter];
      }
    }
    counter++;
  }

  return results;
};

const string = "picnic";
const result = letterPositions(string);

// Tests

assertArraysEqual(result['p'], [0]);
assertArraysEqual(result['i'], [1,4]);
assertArraysEqual(result['c'], [2,5]);
assertArraysEqual(result['n'], [3]);