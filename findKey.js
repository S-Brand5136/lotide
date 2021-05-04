const assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  let result = undefined;

  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      break;
    }
  }

  return result;
};

module.exports = findKey;

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 7 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

const result4 = findKey({
  "Alice": {grade: 90},
  "George": {grade: 50},
  "Bob": {grade: 75},
  "Charlie": {grade: 60},
}, x => x.grade === 75);

const result5 = findKey({
  "Student_One": {
    firstName: "Alice",
    lastName: "Balice"
  },
  "Student_Two": {
    firstName: "Bob",
    lastName: "Chbob"
  },
  "Student_Three": {
    firstName: "Charlie",
    lastName: "Harlie"
  },
  "Student_Four": {
    firstName: "Denver",
    lastName: "Henver"
  }
}, x => x.firstName[0] === "Z");

assertEqual(result1, 'noma');
assertEqual(result2, 'Ora');
assertEqual(result3, 'elBulli');
assertEqual(result4, 'Bob');
assertEqual(result5, undefined);