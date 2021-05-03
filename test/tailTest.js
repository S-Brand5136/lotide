const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail.js', () => {
  
  it('should return back ["Lighthouse", "Labs"] when given ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it('should return back ["Hello", "World"] when given ["Yo Yo", "Hello", "World"]', () => {
    const words = ["Yo Yo", "Hello", "World"];
    assert.deepEqual(tail(words), ["Hello", "World"]);
  });
});