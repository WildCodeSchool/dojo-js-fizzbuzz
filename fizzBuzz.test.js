const assert = require("assert");
const fizzBuzz = require("./fizzBuzz.js");

describe("fizzBuzz", () => {
  it("Should be loaded", () => {
    assert.equal(true, true);
  });

  it("Should return fizz", () => {
    assert.equal(fizzBuzz(3), "fizz");
  });

  it("Should return fizz", () => {
    assert.equal(fizzBuzz(6), "fizz");
    assert.equal(fizzBuzz(18), "fizz");
  });

  it("Should return buzz", () => {
    assert.equal(fizzBuzz(5), "buzz");
  });

  it("Should return buzz", () => {
    assert.equal(fizzBuzz(10), "buzz");
    assert.equal(fizzBuzz(25), "buzz");
  });

  it("Should return fizzbuzz", () => {
    assert.equal(fizzBuzz(15), "fizzbuzz");
  });

  it("Should return fizzbuzz", () => {
    assert.equal(fizzBuzz(30), "fizzbuzz");
    assert.equal(fizzBuzz(150), "fizzbuzz");
  });

  it("Should return 2", () => {
    assert.equal(fizzBuzz(2), "2");
  });

  it("Should return 8 and 52", () => {
    assert.equal(fizzBuzz(8), "8");
    assert.equal(fizzBuzz(52), "52");
  });
});
