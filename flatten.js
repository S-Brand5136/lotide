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


const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const flatten = (array) => {
  return array.flat(2);
};

console.log(flatten([[1], [2], [3]]));

assertArraysEqual(flatten([[1], [2, 3]]), ([1,2,3]));