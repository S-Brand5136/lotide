const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {

  it('Should return true when both objects are equal', () => {
    const object1 = { a: { z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.deepEqual(eqObjects(object1, object2), true);
  });


  it('Should return false when both objects are not equal', () => {
    const object1 = { a: { z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, d: { b: 2 }};
    assert.deepEqual(eqObjects(object1, object2), false);
  });

  it('Should return true when both objects are equal and have arrays in them', () => {
    const object1 = { a: { y: 0, p: {z: [1,2,3,4], y: [1,2,3,4,5], p: 2} }, b: 2 };
    const object2 = { a: { y: 0, p: {z: [1,2,3,4], y: [1,2,3,4,5], p: 2} }, b: 2 };
    assert.deepEqual(eqObjects(object1, object2), true);
  });


});