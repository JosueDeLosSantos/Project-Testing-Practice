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
test("takes a string and a shift factor and returns it with each character “shifted”", () => {
  expect(testMod.caesarCipher("house", 1)).toBe("Ipvtf");
});
test("takes a string and a shift factor and returns it with each character “shifted”", () => {
  expect(testMod.caesarCipher("uh, awsome!", 25)).toBe("Tg, zvrnld!");
});
test("takes an array of numbers and returns  an object containing its: average, min, max, length", () => {
  expect(testMod.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
