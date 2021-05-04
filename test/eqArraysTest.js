const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  
  it('Should return true when 2 equal arrays are given', () => {
    const array1 = [1,2,3];
    const array2 = [1,2,3];
    assert.deepEqual(eqArrays(array1, array2), true);
  });

  it('Should return false when 2 arrays are not equal', () => {
    const array1 = [1,2,3,4];
    const array2 = [1,2,3];
    assert.deepEqual(eqArrays(array1, array2), false);
  });
  
  it('Should work with nested arrays', () => {
    const array1 = [[2, 3, [[4, [5]]], [4]]];
    const array2 = [[2, 3, [[4, [5]]], [4]]];
    assert.deepEqual(eqArrays(array1, array2), true);
  });

})