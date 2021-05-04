const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  
  it('Should return "noma"', () => {
    const dataMap = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 2;
    const expected = "noma"
    assert.equal(findKey(dataMap, callback), expected)    
  });

  it('Should return "Ora"', () => {
    const dataMap =     {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 4 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 2;
    const expected = "Ora"
    assert.equal(findKey(dataMap, callback), expected)    
  });

  it('Should return undefined if there is no key match', () => {
    const dataMap =   {
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
      }};
    const callback = x => x.firstName[0] === "Z";
    const expected = undefined
    assert.equal(findKey(dataMap, callback), expected)    
  });

})