const letterPositions = function(sentence) {
  const results = {};

  let counter = 0;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(counter);
      } else {
        results[letter] = [counter];
      }
    }
    counter++;
  }

  return results;
};

module.exports = letterPositions;