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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);

  if (keys1.length !== Object.keys(object2).length) {
    return false;
  }

  for (const key1 of keys1) {
    if (!object2[key1] || !eqArrays(object1[key1], object2[key1])) {
      return false;
    }
  }

  return true;
};


// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
console.log("eqObjects(ab, ba)", eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log("eqObjects(ab, abc)", eqObjects(ab, abc));
eqObjects(ab, abc); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("eqObjects(cd, dc)", eqObjects(cd, dc));// => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("eqObjects(cd, cd2)", eqObjects(cd, cd2));// => false