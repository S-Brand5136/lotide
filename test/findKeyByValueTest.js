const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('Should return drama', () => {
    const expected = 'drama'
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), expected);  
  });

  it('Should return sciFi', () => {
    const expected = 'sciFi';
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), expected);
  });

  it('Should return comedy', () => {
    const expected = 'comedy';
    assert.equal(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), expected);
  });

  it('Should return undefined when an invalid argument is passed', () => {
    const expected = undefined;
    assert.equal(findKeyByValue(bestTVShowsByGenre, 2), expected);
  });

});