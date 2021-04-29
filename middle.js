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

const middle = function(array) {
  let middleIndex = array.length / 2;

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 !== 0) {
    middleIndex = Math.floor(middleIndex);
    return array.slice(middleIndex, middleIndex + 1);
  } else {
    return array.slice(middleIndex - 1, middleIndex + 1);
  }
};

// Test arrays
const oddArray = [1,2,3,4,5,6,7];
const oddArrayTwo = [1,2,3,4,5,6,7,8,9];
const evenArray = [1,2,3,4,];
const evenArrayTwo = [1,2,3,4,5,6];
const twoValueArray = [1,2];
const threeValueArray = [1,2,3];

// assertArray Tests
assertArraysEqual(middle(oddArray), [4]);
assertArraysEqual(middle(oddArrayTwo), [5]);
assertArraysEqual(middle(evenArray), [2,3]);
assertArraysEqual(middle(evenArrayTwo), [3,4]);
assertArraysEqual(middle(twoValueArray), []);
assertArraysEqual(middle(threeValueArray), [2]);