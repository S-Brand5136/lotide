const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten:' , () => {

  it('Should return an array without any other nested arrays', () => {
    const array = [[1], [2], [3]];
    const expected = [1,2,3];
    assert.deepEqual(flatten(array), expected);
  });

  it('Should work with an array with 2 levels of nested arrays', () => {
    const array = [[1], [[2], 3]]
    const expected = [1,2,3]
    assert.deepEqual(flatten(array), expected);
  });

});