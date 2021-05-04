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



// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 3, 4, 5, 6, 8];

// const results1 = map(words, word => word[0]);
// const results2 = map(numbers, num => num * 2);
// const results3 = map(numbers, number => Math.pow(number, 2));
// const results4 = map(numbers, number => number % 2 === 0 ? 'even' : 'odd');

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, [2,6,8,10,12,16]);
// assertArraysEqual(results3, [1,9,16,25,36,64]);
// assertArraysEqual(results4, ['odd', 'odd', 'even', 'odd', 'even', 'even']);