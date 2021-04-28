// Returns true if both objects have identiacal keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

};

const ab = {a: '1', b: '2'};
const ba = {b: "2", a: "1"};

eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3"};
eqObjects(ab, abc);