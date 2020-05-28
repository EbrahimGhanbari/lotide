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


const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== " ") {
      results[sentence[i]] = [i];
    }

  }
  return results;
};


console.log(letterPositions("hello"));


assertArraysEqual(letterPositions("hello").l, [2,3]);