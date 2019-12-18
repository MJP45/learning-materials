import { people } from "./ts4-data";
import {
  canBuyBeer,
  canFitOnANameCard,
  canRideOnARollercoaster,
  getLifeExpectancy, getSummary,
  isVegetarian, yearsRemaining,
 } from "./ts4-solution";

test("is Vegetarian", () => {
  expect(isVegetarian(people[0])).toBeTruthy();
  expect(isVegetarian(people[2])).toBeFalsy();
  expect(isVegetarian(people[3])).toBeFalsy();
});

test("Can fit on name card", () => {
  expect(canFitOnANameCard(people[0])).toBeTruthy();
  expect(canFitOnANameCard(people[1])).toBeFalsy();
  expect(canFitOnANameCard(people[2])).toBeTruthy();
});

test("Life expectancy", () => {
  expect(getLifeExpectancy(people[0])).toBe(90);
  expect(getLifeExpectancy(people[3])).toBe(95);
});

test("Years remaining", () => {
  expect(yearsRemaining(people[0])).toBe(78);
  expect(yearsRemaining(people[3])).toBe(78);
  expect(yearsRemaining(people[5])).toBe(2);
  expect(yearsRemaining(people[6])).toBe(-4);
});

test("Can ride on a rollercoaster", () => {
  expect(canRideOnARollercoaster(people[1])).toBeTruthy();
  expect(canRideOnARollercoaster(people[2])).toBeTruthy();
  expect(canRideOnARollercoaster(people[3])).toBeFalsy();
});

test("Can ride on a rollercoaster", () => {
  expect(canBuyBeer(people[2])).toBeTruthy();
  expect(canBuyBeer(people[3])).toBeFalsy();
  expect(canBuyBeer(people[5])).toBeTruthy();
});

test("Summary", () => {
  expect(getSummary(people[0])).toBe("Bob is a vegetarian, is 110cm tall and has 78 years to live");
  expect(getSummary(people[2])).toBe("Thomas likes meat, is 121cm tall and has 77 years to live");
  expect(getSummary(people[6])).toBe("Doris is a vegetarian, is 80cm tall and should be dead");
});
