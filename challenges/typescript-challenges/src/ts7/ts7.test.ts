import { liz } from "./ts7-data";
import {
    findByName,
    findDescendants,
    search,
} from "./ts7-solution";

test("Find by name", () => {
    expect(findByName(liz, "Charles").name).toBe(liz.children[0].name);
    expect(findByName(liz, "William").name).toBe(liz.children[0].children[0].name);
    expect(findByName(liz, "Andrew").name).toBe(liz.children[2].name);
    expect(findByName(liz, "Anne").name).toBe(liz.children[1].name);
    expect(findByName(liz, "Harry").name).toBe(liz.children[0].children[1].name);
});

test("Find Descendants for Charles", () => {
    const result = findDescendants(liz.children[0]);
    expect(result[0]).toBe("William");
    expect(result[1]).toBe("George");
    expect(result[2]).toBe("Charlotte");
    expect(result[3]).toBe("Louis");
    expect(result[4]).toBe("Harry");
});

test("Find Descendants for William", () => {
    const result = findDescendants(liz.children[0].children[0]);
    expect(result[0]).toBe("George");
    expect(result[1]).toBe("Charlotte");
    expect(result[2]).toBe("Louis");
});

test("Find Descendants for Andrew", () => {
    const result = findDescendants(liz.children[2]);
    expect(result[0]).toBe("Beatrice");
    expect(result[1]).toBe("Eugenie");
});

test("Find Descendants for Anne", () => {
    const result = findDescendants(liz.children[1]);
    expect(result[0]).toBe("Peter");
    expect(result[1]).toBe("Savannah");
    expect(result[2]).toBe("Isla");
    expect(result[3]).toBe("Zara");
    expect(result[4]).toBe("Mia");
    expect(result[5]).toBe("Lena");
});

test("Find Descendants for Harry", () => {
    expect(findDescendants(liz.children[0].children[1]).length).toBe(0);
});

test("Search Charles", () => {
    const result = search(liz, "Charles");
    expect(result.length).toBe(5);
    expect(result[0]).toBe("William");
    expect(result[1]).toBe("George");
    expect(result[2]).toBe("Charlotte");
    expect(result[3]).toBe("Louis");
    expect(result[4]).toBe("Harry");
});

test("Search William", () => {
    const result = search(liz, "William");
    expect(result[0]).toBe("George");
    expect(result[1]).toBe("Charlotte");
    expect(result[2]).toBe("Louis");
});

test("Search Andrew", () => {
    const result = search(liz, "Andrew");
    expect(result[0]).toBe("Beatrice");
    expect(result[1]).toBe("Eugenie");
});

test("Search Anne", () => {
    const result = search(liz, "Anne");
    expect(result[0]).toBe("Peter");
    expect(result[1]).toBe("Savannah");
    expect(result[2]).toBe("Isla");
    expect(result[3]).toBe("Zara");
    expect(result[4]).toBe("Mia");
    expect(result[5]).toBe("Lena");
});

test("Search Harry", () => {
    expect(search(liz, "Harry").length).toBe(0);
});
