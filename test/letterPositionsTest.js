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