const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  
  it('Should return [1, 8, "hello", "world"]', () => {
    const data = [1, 8, "hello", "world", false, true, "don't", "print"];
    const callback = x => x === false;
    const expected = [1,8, 'hello', 'world']
    assert.deepEqual(takeUntil(data, callback), expected);
  });

  it(`Should return ["I've", "been", "to", "Hollywood",]`, () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const callback = x => x === ','
    const expected = ["I've", "been", "to", "Hollywood",]
    assert.deepEqual(takeUntil(data, callback), expected);
  });

})