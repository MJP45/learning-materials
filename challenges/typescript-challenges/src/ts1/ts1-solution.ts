/*
Solution file to ts1-challenges

NOTE: You must change the import line in the ts1.test.ts file to point to the solution file!
*/

/**
 * Takes in a name and outputs a greeting
 * @param {string} firstName The users first name.
 * @param {string} lastName The users last name.
 * @return {string} a greeting such as: Hello, My name is Bob Smith
 */
export const greet = (firstName: string, lastName: string): string => "Hello, My name is " + firstName + " " + lastName;

/**
* Calculates the age difference between two ages
* @param {number} age1
* @param {number} age2
* @return {string} an output such as: The age difference is 11 years 
*/
export const calculateAgeDifference = (age1: number, age2: number): string => {
  const ageDifference: number = age1 - age2;
  return "The age difference is " + ageDifference + " years";
};

/**
* Calculates the length of someones name
* @param {string} firstName The users first name.
* @param {string} lastName The users last name.
* @return {string} an output such as: The total length of both names is 8 characters 
*/
export const nameLength = (firstName: string, lastName: string): string => {
  const totalLength: number = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
};
