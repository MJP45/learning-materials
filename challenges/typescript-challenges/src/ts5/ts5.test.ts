import { people } from "./ts5-data";
import {
    addRandomMobileNumbers,
    findMatchingEyeColours,
    getActiveUsers,
    getActiveUsersWithInvalidEmail,
    getEmailAddress,
} from "./ts5-solution";

test("getActiveUsers", () => {
  const result = getActiveUsers(people);
  expect(result.length).toBe(3);
  expect(result[0].name).toBe("Estrada Nolan");
  expect(result[1].name).toBe("Laverne Andrews");
});

test("findMatchingEyeColours", () => {
  expect(findMatchingEyeColours(people, people[0]).length).toBe (1);
  expect(findMatchingEyeColours(people, people[0])[0].name).toBe("Laverne Andrews");
  expect(findMatchingEyeColours(people, people[5]).length).toBe(0);
  expect(findMatchingEyeColours(people, people[4])[0].name).toBe("Hull Woodward");
  expect(findMatchingEyeColours(people, people[1]).length).toBe(0);
});

test("getEmailAddress", () => {
  expect(getEmailAddress(people, 2321)).toBe("mariastanley@eyeris.com");
  expect(getEmailAddress(people, 5151)).toBeUndefined();
  expect(getEmailAddress(people, 4138)).toBeUndefined();
});

test("getActiveUsersWithInvalidEmail", () => {
  const result = getActiveUsersWithInvalidEmail(people);
  expect(result.length).toBe(2);
  expect(result[0].name).toBe("Laverne Andrews");
  expect(result[1].name).toBe("Maria Stanley");
});

test("addRandomMobileNumbers", () => {
  const regex = new RegExp(/^(07\d{3}\s\d{6}$)/);
  const result = addRandomMobileNumbers(people);
  for (let index = 0; index < people.length; index++) {
    const mobile = result[index].mobileNumber;
    expect(regex.test(mobile)).toBeTruthy();
  }
});

test("addRandomMobileNumbers - random number", () => {
  global.Math.random = () => 0.123456789;
  const result = addRandomMobileNumbers(people);
  expect(result[0].mobileNumber).toBe("07123 456789");
  });

test("addRandomMobileNumbers - random number", () => {
  global.Math.random = () => 0.012345678;
  let result = addRandomMobileNumbers(people);
  expect(result[0].mobileNumber).toBe("07012 345678");

  global.Math.random = () => 0.002345678;
  result = addRandomMobileNumbers(people);
  expect(result[0].mobileNumber).toBe("07002 345678");

  global.Math.random = () => 0.000045678;
  result = addRandomMobileNumbers(people);
  expect(result[0].mobileNumber).toBe("07000 045678");
});
