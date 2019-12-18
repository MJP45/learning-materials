import {IPerson} from "./ts5-data";

export let getActiveUsers = (people): IPerson[] => {
    return people.filter(isActive);
  };

const isActive = (person) => {
    return person.isActive;
  };

export const findMatchingEyeColours = (people: IPerson[], comparePerson: IPerson): IPerson[] => {
  if (!comparePerson.hasOwnProperty("eyeColor")) {
      return [];
  }
  return people.filter((person) => {
    return (person.eyeColor == comparePerson.eyeColor) && (person.id != comparePerson.id);
  });
};

export let getEmailAddress = (people: IPerson[], id: number): string => {
    const result = people.find((person) => person.id === id);
    return (result) ? result.email : undefined;
  };

export let getActiveUsersWithInvalidEmail = (people: IPerson[]) => {
      const activeUsers = getActiveUsers(people);
      return activeUsers.filter(filterHasInvalidEmail);
  };

const filterHasInvalidEmail = (person: IPerson): boolean => {
    if ("email" in person) { return (!person.email.includes("@")); }
    return true;
  };

export let addRandomMobileNumbers = (people: IPerson[]): IPerson[] => {
    return people.map((person) => {
      person.mobileNumber = generateRandomMobileNumber();
      return person;
    });
  };

const addSpaceToString = (text: string, position: number) => {
    return text.slice(0, position) + " " + text.slice(position);
  };

const addLeading0 = (integer: number, length: number) => ("0".repeat(length) + integer).slice(-length);

const generateRandomMobileNumber = (): string => {
    const nineDigitNumber = getRandomInteger(9);
    const paddedNumber = addLeading0(nineDigitNumber, 9);
    return "07" + addSpaceToString(paddedNumber, 3);
  };

const getRandomInteger = (digits: number): number => {
    return Math.floor(Math.random() * Math.pow(10, digits));
  };
