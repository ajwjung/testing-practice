const reverseString = require("../scripts/reverseString");

test("Reverses string 'alphabet' to be 'tebahpla'", () => {
    expect(reverseString("alphabet")).toMatch("tebahpla");
});

test("Reverses string 'Hello World' to be 'dlroW olleH'", () => {
    expect(reverseString("Hello World")).toMatch("dlroW olleH");
});