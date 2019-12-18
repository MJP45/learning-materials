import { fixColors } from "./ts2-solution";

const colors = ["violet", "green", "blue", "yellow"];

test("Fix index 0", () => {
    const result = fixColors(colors, 0);
    expect(result[0]).toBe("red");
    expect(result[1]).toBe("green");
    expect(result[2]).toBe("blue");
    expect(result[3]).toBe("yellow");
});

test("Fix index 1", () => {
    const result = fixColors(colors, 1);
    expect(result[0]).toBe("violet");
    expect(result[1]).toBe("red");
    expect(result[2]).toBe("blue");
    expect(result[3]).toBe("yellow");
});

test("Fix index 2", () => {
    const result = fixColors(colors, 2);
    expect(result[0]).toBe("violet");
    expect(result[1]).toBe("green");
    expect(result[2]).toBe("blue");
    expect(result[3]).toBe("yellow");
});

test("Fix index 3", () => {
    const result = fixColors(colors, 3);
    expect(result[0]).toBe("violet");
    expect(result[1]).toBe("green");
    expect(result[2]).toBe("blue");
    expect(result[3]).toBe("yellow");
});
