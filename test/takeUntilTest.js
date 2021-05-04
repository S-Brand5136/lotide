const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  
  it('Should return ["hello", "lighthouse"]', () => {
    const array = ["hello", "world", "lighthouse"];
    const expected = ["hello", "lighthouse"];
    assert.deepEqual(without(array, ["world"]), expected)
  });

  it('Should return ["Hello World", 1]', () => {
    const array = ["Hello World", 1, "removed"];
    const expected = ["Hello World", 1];
    assert.deepEqual(without(array, ["removed"]), expected)
  });

})