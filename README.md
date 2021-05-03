# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @s-brand5163/lotide`

**Require it:**

`const _ = require('@s-brand5163/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: prints out true or false message to the console if two arrays are equal
* `assertEqual(...)`: checks to see if two primitive data types are equal
* `assertObjectsEqual(...)`: prints out true or false message to the console if two objects are equal
* `countLetters(...)`: counts the letters in a string, not including spaces, and returns the number
* `countOnly(...)`: counts the number of times a passed in string appears in an array and returns that number
* `eqArrays(...)`: recursive function that returns true or false if two arrays are equal, works with nested arrays
* `eqObjects(...)`: recursive function that returns true or false if two objects are equal, works with nested objects
* `findKey(...)`: looks to see if a key is in an object and returns it if it is, or undefined if not
* `findKeyByValue(...)`: looks to see if a value is in an object and then returns its key pairing, or undefined if not
* `flatten(...)`: flattens an array with 2 layers of nested arrays and returns it
* `head(...)`: returns the first item in an array
* `map(...)`: takes in an array and callback, and executes that callback on every single item in an array and returns a new array with the changes made
* `middle(...)`: returns the middle of an array, if its an even numbered array it returns the 2 middle items
* `tail(...)`: returns an array with the first item removed
* `takeUntil(...)`: takes in an array and callback (test function) and removes all of the items in the array until the callback test fails
* `without(...)`: takes in an array and a variable you want to remove, and removes all of the items in the array that match that variable, returns the new array