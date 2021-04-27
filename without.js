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


const without = function(source, itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

console.log(without(["Hello", 'world', "World", 5, 6, 7], ["world"]));
console.log(without([5, 6, 7], [5]));
console.log(without(["Hello World", 1, "removed"], ["removed"]));

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
