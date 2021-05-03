
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

const takeUntil = (array, callback) => {
  const result = [];

  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
      continue;
    }
    break;
  }

  return result;
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2,]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood",]);

console.log('---');

const data3 = [1,2,3,4,5,6,7,8,9,10];
const results3 = takeUntil(data3, x => x === 7);
assertArraysEqual(results3, [1,2,3,4,5,6]);

console.log('---');

const data4 = [1, 8, "hello", "world", false, true, "don't", "print"];
const results4 = takeUntil(data4, x => x === false);
assertArraysEqual(results4, [1, 8, "hello", "world",]);
