const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

const string = 'lighthouse in the house';
const result = countLetters(string);

console.log(result);

assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);