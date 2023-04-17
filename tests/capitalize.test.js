const capitalize = require("../scripts/capitalize");

test("Capitalizes first letter of 'hello' to match 'Hello'", () => {
    expect(capitalize("hello")).toMatch("Hello");
});

test("Capitalizes first letter of 'bagel' to match 'Bagel'", () => {
    expect(capitalize("bagel")).toMatch("Bagel");
});