const assertEqual = function(actual, expected) {
  const answer = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(answer);
};

const findKey = (obj, callback) => {
   
  const keys = Object.keys(obj);
  
  for (const key of keys) {
   
    if (callback(obj[key])) {
      return key;
    }
  
  }
};

// Testing Code
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result1, "noma");

