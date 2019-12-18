import { IPerson } from "./ts4-data";

export let isVegetarian = (person: IPerson): boolean => person.isVegetarian;

export let canFitOnANameCard = (person: IPerson): boolean => person.name.length <= 6;

export let getLifeExpectancy = (person: IPerson): number => person.isVegetarian ? 90 : 95;

export let yearsRemaining = (person: IPerson): number => getLifeExpectancy(person) - person.age;

export let canRideOnARollercoaster = (person: IPerson): boolean => person.height >= 120;

export let canBuyBeer = (person: IPerson): boolean => person.age >= 18;

export let getSummary = (person: IPerson): string => {
  const vegetarianMessage = person.isVegetarian ? "is a vegetarian" : "likes meat";
  const deadMessage = (yearsRemaining(person) < 0) ?
    "should be dead" : "has " + yearsRemaining(person) + " years to live";
  return person.name + " " + vegetarianMessage + ", is " + person.height + "cm tall and " + deadMessage;
};
