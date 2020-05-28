const assertEqual = function(actual, expected) {
  const answer = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(answer);
};

//This is what I wrote initially ****
// const countOnly = (allItems, itemsToCount) => {
//   let outputObject = {};
//   for (let item of allItems) {
//     for (let countKeys in itemsToCount) {
//       if (item === countKeys && itemsToCount[countKeys] === true) {
//         if (outputObject[item] === undefined) {
//           outputObject[item] = 1;
//         } else {
//           outputObject[item] += 1;
//         }
//       }
//     }
//   }
//   // return outputObject;
// };

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  

  return results;
};


// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
