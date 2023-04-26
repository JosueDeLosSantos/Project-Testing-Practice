import * as testMod from "./index.js";

test("adds 1 + 2 to equal 3", () => {
  expect(testMod.sum(1, 2)).toBe(3);
});

test("adds 'house' to equal 'House'", () => {
  expect(testMod.capitalize("house")).toBe("House");
});

test("adds 'house' to equal 'esuoh'", () => {
  expect(testMod.reverseString("house")).toBe("esuoh");
});

test("adds '5' and '5' to equal '10'", () => {
  expect(testMod.calculator.add(5, 5)).toBe(10);
});
test("adds '5' and '5' to equal '0'", () => {
  expect(testMod.calculator.subtract(5, 5)).toBe(0);
});
test("adds '5' and '5' to equal '1'", () => {
  expect(testMod.calculator.divide(5, 5)).toBe(1);
});
test("adds '5' and '5' to equal '25'", () => {
  expect(testMod.calculator.multiply(5, 5)).toBe(25);
});
