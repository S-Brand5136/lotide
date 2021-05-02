const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {

  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
  
    for (let i = 0; i <= arrOne.length; i++) {
      if(Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])){
        if(eqArrays(arrOne[i], arrTwo[i])){
          continue;
        }
        return false;
      }
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    
    return true;
  }
  return false;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

assertEqual(eqArrays([[2, 3, [[4, [5]]], [4]]], [[2, 3, [[4, [5]]], [4]]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
