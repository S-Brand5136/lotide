const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {

  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
  
    for(let i = 0; i <= arrOne.length; i++){
      if(arrOne[i] !== arrTwo[i]){
        return false
      }
    }
    
    return true
  }
  return false;
};


// Returns true if both objects have identiacal keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object1[key])){
     return eqArrays(object1[key], object2[key]) 
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }
  
  return true;
};


// Tests primitive
const ab = {a: '1', b: '2'};
const ba = {b: "2", a: "1"};

eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3"};
eqObjects(ab, abc);

assertEqual(eqObjects(ab,ba), true);

// Tests arrays as arary
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);