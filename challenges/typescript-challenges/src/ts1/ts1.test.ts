import { greet, calculateAgeDifference, nameLength } from "./ts1-solution";

const firstName = "Bob";
const lastName = "Smith";
const myAge = 22;
const maryAge = 33;

test("Insert first and last name", () => {
  expect(greet(firstName, lastName)).toBe("Hello, My name is Bob Smith");
});

test("Calculate difference", () => {
  expect(calculateAgeDifference(maryAge, myAge)).toBe("The age difference is 11 years");
});

test("Dynamically calculate name length", () => {
  expect(nameLength(firstName, lastName)).toBe("The total length of both names is 8 characters");
});


