const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe('#letterPositions', () => {
  
  it('should return  [1, 4]', () => {
    const string = "picnic"
    const expected =  [1, 4];
    assert.deepEqual(letterPositions(string).i, expected);
  });

  it('should return  [0]', () => {
    const string = "picnic"
    const expected =  [0];
    assert.deepEqual(letterPositions(string).p, expected);
  });

});


// const string = "picnic";
// const result = letterPositions(string);

// // Tests

// assertArraysEqual(result['p'], [0]);
// assertArraysEqual(result['i'], [1,4]);
// assertArraysEqual(result['c'], [2,5]);
// assertArraysEqual(result['n'], [3]);