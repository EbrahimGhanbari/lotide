const assertEqual = function(actual, expected) {
  const answer = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(answer);
};

const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (firstArray, secondArray) => {
  assertEqual(eqArrays(firstArray, secondArray), true);
};

const without = (source, itemsToRemove) => {
  let outputSource = source;
  for (let removeElement of itemsToRemove) {
    for (let i = 0; i < outputSource.length; i++) {
      if (removeElement === source[i]) {
        outputSource.splice(i, i + 1);
      }
    }
  }
  return outputSource;
};