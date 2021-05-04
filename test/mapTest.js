const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  
  it(`Should return ['g', 'c', 't', 'm', 't']`, () => {
    const array = ["ground", "control", "to", "major", "tom"];
    const expected = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(map(array, i => i[0]), expected)
  });

  it('Should return [1,9,16,25,36,64]', () => {
    const array = [1, 3, 4, 5, 6, 8];
    const expected = [1,9,16,25,36,64];
    assert.deepEqual(map(array, num => Math.pow(num, 2)), expected)
  });

})