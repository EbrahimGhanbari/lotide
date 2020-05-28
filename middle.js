const assertArraysEqual = (firstArray, secondArray) => {
  const assertEqual = function(actual, expected) {
    const answer = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    console.log(answer);
  };
  assertEqual(eqArrays(firstArray, secondArray), true);
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

// Middle function ********
const middle = inputArray => {
  let outputArray = [];
  let arrayLength = inputArray.length; 
  
  if (arrayLength <= 2 ){
    return outputArray;
  }else if(arrayLength % 2 === 0) {
    outputArray.push(inputArray[arrayLength / 2 -1], inputArray[arrayLength / 2]);
  } else {
    outputArray.push(inputArray[arrayLength / 2 -0.5]);
  }
  return outputArray;
};

// Test Code here 


// assertArraysEqual([1, 2, 3], [1, 2, 4]);
console.log("middle([1, 2, 3, 4]) // => [2, 3]", middle([1, 2, 3, 4])); // => [2, 3])

console.log("middle([1, 2, 3, 4, 5])", middle([1, 2, 3, 4, 5]));
