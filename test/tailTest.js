const assertEqual = require('../assertEqual');
const tail = require('../tail');

// test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);