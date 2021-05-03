const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle.js', () => {
  
  it('It should return back [4] when given [1,2,3,4,5,6,7]', () => {
    const oddArray = [1,2,3,4,5,6,7];
    const expected = [4];
    assert.deepEqual(middle(oddArray), expected);
  });

  it('It should return back [5] when given [1,2,3,4,5,6,7]', () => {
    const oddArray = [1,2,3,4,5,6,7,8,9];
    const expected = [5];
    assert.deepEqual(middle(oddArray), expected);
  });

  it('It should return back [2,3] when given [1,2,3,4]', () => {
    const evenArray = [1,2,3,4,];
    const expected = [2,3];
    assert.deepEqual(middle(evenArray), expected);
  });

  it('It should return back [3,4] when given [1,2,3,4,5,6];', () => {
    const evenArray = [1,2,3,4,5,6];
    const expected = [3,4];
    assert.deepEqual(middle(evenArray), expected);
  });

  it('It Should return an empty array when given [1,2]', () => {
    const array = [1,2];
    const expected = [];
    assert.deepEqual(middle(array), expected);
  });

  it('Should return [2] when given [1,2,3]', () => {
    const array = [1,2,3];
    const expected = [2]
    assert.deepEqual(middle(array), expected);
  });

})