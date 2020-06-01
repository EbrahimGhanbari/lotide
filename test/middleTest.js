const middle = require("../middle");
const eqArrays = require("../eqArrays");


describe("#middle", () => {
  it('return [2, 3] for [1, 2, 3, 4]', () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    eqArrays(actual, expected);
  });

  it('return [3] for [1, 2, 3, 4, 5]', () => {
    const actual = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    eqArrays(actual, expected);    
  });
});