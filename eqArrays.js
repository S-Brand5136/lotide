const eqArrays = function(arrOne, arrTwo) {

  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
  
    for (let i = 0; i <= arrOne.length; i++) {
      if(Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])){
        if(eqArrays(arrOne[i], arrTwo[i])){
          continue;
        }
        return false;
      }
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    
    return true;
  }
  return false;
};

module.exports = eqArrays;