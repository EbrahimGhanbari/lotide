const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;