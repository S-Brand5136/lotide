const takeUntil = (array, callback) => {
  const result = [];

  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
      continue;
    }
    break;
  }

  return result;
};

module.exports = takeUntil;