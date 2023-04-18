const caesarCipher = require("../scripts/caesarCipher");

test("Shifts 'ramen' by 3 to match 'udphq' (simple case)", () => {
    expect(caesarCipher("ramen", 3)).toMatch("udphq");
});

test("Shifts 'Ramen' by 5 to match 'Wfrjs' (preserve case)", () => {
    expect(caesarCipher("Ramen", 5)).toMatch("Wfrjs");
});

test("Shifts 'ramen' by 10 to match 'bkwox' (wrap from z to a)", () => {
    expect(caesarCipher("ramen", 10)).toMatch("bkwox");
});

test("Shifts 'ramen!' by 7 to match 'yhtlu!' (check punctuation)", () => {
    expect(caesarCipher("ramen!", 7)).toMatch("yhtlu!");
});

test("Shifts 'We love ramen <3' by 4 to match 'Ai pszi veqir <3' (all cases)", () => {
    expect(caesarCipher("We love ramen <3", 4)).toMatch("Ai pszi veqir <3");
});

