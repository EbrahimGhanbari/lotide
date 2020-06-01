const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const assertArraysEqual = (firstArray, secondArray) => {
  assertEqual(eqArrays(firstArray, secondArray), true);
};

module.exports = assertArraysEqual;