const calculator = require("../scripts/calculator");

test("Adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toEqual(3);
});

test("Subtracts 10 - 3 to equal 7", () => {
    expect(calculator.subtract(10, 3)).toEqual(7);
});

test("Divides 30 by 2 to equal 15", () => {
    expect(calculator.divide(30, 2)).toEqual(15);
});

test("Divides 2 by 0 to equal 'Cannot divide by 0'", () => {
    expect(calculator.divide(4, 0)).toMatch("Cannot divide by 0");
})

test("Multiplies 5 by 5 to equal 25", () => {
    expect(calculator.multiply(5, 5)).toEqual(25);
});