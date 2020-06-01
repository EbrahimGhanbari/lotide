const tail = require("../tail");
const expect = require("chai").expect;

describe("#tail", () => {
  it("", () => {
    const actual = tail(["Yo Yo", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    expect(actual).to.deep.equal(expected);
  });

  it("", () => {
    const actual = tail([1, 2]);
    const expected = [2];
    expect(actual).to.deep.equal(expected);
  });

});