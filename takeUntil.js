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

const takeUntil = function(array, callback) {
  const results = [];
  for (const element of array) {
    
    if (!callback(element)) {
      results.push(element);
    } else {
      break;
    }

  }
  return results;
};

// Testing Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const test = takeUntil(data1, x => x < 0);
assertArraysEqual(test, [1, 2, 5, 7, 2]);
