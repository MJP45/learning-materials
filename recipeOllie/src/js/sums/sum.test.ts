import { sum, Person } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("These are my class tests", () => {
  let testPerson: Person;
  beforeEach(() => {
    testPerson = new Person("barry", 19);
  });

  test("Sets name", () => {
    expect(testPerson.name).toEqual("barry");
  });

  test("Sets age", () => {
    expect(testPerson.age).toEqual(19);
  });

  test("Gets name string", () => {
    expect(testPerson.getNameString()).toEqual("Hello my name is barry");
  });

  test("Sets new age", () => {
    expect(testPerson.age).toEqual(19);
    testPerson.age = 20;
    expect(testPerson.age).toEqual(20);
  });
});
