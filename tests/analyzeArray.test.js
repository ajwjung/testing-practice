const analyzeArray = require("../scripts/analyzeArray");

test("Averages [1, 4, 7, 10] to be 5.5", () => {
    expect(analyzeArray([1, 4, 7, 10]).average).toEqual(5.5);
});

test("Min of [1, 4, 7, 10] to be 1", () => {
    expect(analyzeArray([1, 4, 7, 10]).min).toEqual(1);
});

test("Max of [1, 4, 7, 10] to be 10", () => {
    expect(analyzeArray([1, 4, 7, 10]).max).toEqual(10);
});

test("Length of [1, 4, 7, 10] to be 4", () => {
    expect(analyzeArray([1, 4, 7, 10]).length).toEqual(4);
});
