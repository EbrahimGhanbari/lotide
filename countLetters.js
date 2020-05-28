const assertEqual = function(actual, expected) {
  const answer = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(answer);
};


const countLetters = inputString => {
  inputString = inputString.toLowerCase(); 
  let results = {};
  for(let char of inputString) {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
      
    
  }
  return results;
};

console.log("countLetters(\"LHL\")", countLetters("LHL"));
console.log("countLetters(\"lighthouse in the house\")", countLetters("lighthouse in the house"));