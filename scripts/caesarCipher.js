const alphabetKey = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"
];

const getCharIndex = (char, shiftFactor) => {
    let newIndex = alphabetKey.indexOf(char.toLowerCase()) + shiftFactor;

    return (newIndex > 25) ? newIndex - 26 : newIndex;
};

const isUpperCase = (char) => {
    return /[A-Z]/.test(char);
};

const isPunctuation = (char) => {
    return /[.,'"\/#!$%\^&\*;:{}=\-_`~()<>]/.test(char);
};

const isNumber = (char) => {
    return /[0-9]/.test(char);
};

const isSpace = (char) => {
    return /\s/.test(char);
};

const caesarCipher = (str, shiftFactor) => {
    return str.split("").map(char => {
        let newIndex = getCharIndex(char, shiftFactor);

        if (isUpperCase(char)) {
            return alphabetKey[newIndex].toUpperCase();
        } else if (isPunctuation(char) || isNumber(char) || isSpace(char)) {
            return char;
        } else {
            return alphabetKey[newIndex];
        };

    }).join("");
};


module.exports = caesarCipher;