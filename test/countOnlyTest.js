const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('', () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it('Should return {"Jason": 1,"Fang": 2} when { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false } is searched for', () => {
    const expected = {"Jason": 1, "Fang": 2,};
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), expected);
  });

  it('Should return {"Karl": 1, "Agouhanna": 1}', () => {
    const expected = {"Karl": 1, "Agouhanna": 1}
    assert.deepEqual(countOnly(firstNames, {"Karl": true, "Agouhanna": true}), expected)
  });

});