const findKey = (object, callback) => {
  let result = undefined;

  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      break;
    }
  }

  return result;
};

module.exports = findKey;