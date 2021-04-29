// Returns true if both objects have identiacal keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test code
// assertObjectsEqual({one: 1,two: 2,three:  3},{one: 1,two: 2,three:  3}); // -> true
// assertObjectsEqual({one: 1,two: 2,four: 4},{one: 1,two: 2,three:  3}); // -> false
// assertObjectsEqual({one: 1,two: 2,three: 3},{one: 1,two: 2,three: "3"}); // -> false

