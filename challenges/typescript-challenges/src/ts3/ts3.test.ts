import {calcTVHeight, colorDarken, couldDate, hasFever, minDateableAge} from "./ts3-solution";

test("Minimum dateable age", () => {
  expect(minDateableAge(22)).toBe(18);
  expect(minDateableAge(56)).toBe(35);
});

test("Has fever", () => {
  expect(hasFever(37.4)).toBeFalsy();
  expect(hasFever(37.5)).toBeTruthy();
  expect(hasFever(37.6)).toBeTruthy();
});

test("TV height", () => {
  expect(calcTVHeight(16)).toBe(9);
  expect(calcTVHeight(32)).toBe(18);
});

test("Could date", () => {
  expect(couldDate(18, 22)).toBeTruthy();
  expect(couldDate(22, 18)).toBeTruthy();
  expect(couldDate(22, 22)).toBeTruthy();
  expect(couldDate(34, 56)).toBeFalsy();
  expect(couldDate(56, 34)).toBeFalsy();
});

test("Color darken: Basic Reduction", () => {
  const result = colorDarken({ red: 60 , green: 60 , blue: 60 }, 10);
  expect(result.red).toBe(50);
  expect(result.green).toBe(50);
  expect(result.blue).toBe(50);
});

test("Color darken: Never go below 0", () => {
  const result = colorDarken({ red: 9 , green: 1 , blue: 9 }, 10);
  expect(result.red).toBe(0);
  expect(result.green).toBe(0);
  expect(result.blue).toBe(0);
});

test("Reduce by a number that is not 10", () => {
  const result = colorDarken({ red: 9 , green: 11 , blue: 10 }, 8);
  expect(result.red).toBe(1);
  expect(result.green).toBe(3);
  expect(result.blue).toBe(2);
});

test("Middle index does not reduce below 0 when low number", () => {
  const result = colorDarken({ red: 60 , green: 5 , blue: 60 }, 6);
  expect(result.red).toBe(54);
  expect(result.green).toBe(0);
  expect(result.blue).toBe(54);
});
