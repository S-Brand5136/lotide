const middle = function(array) {
  let middleIndex = array.length / 2;

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 !== 0) {
    middleIndex = Math.floor(middleIndex);
    return array.slice(middleIndex, middleIndex + 1);
  } else {
    return array.slice(middleIndex - 1, middleIndex + 1);
  }
};

module.exports = middle;