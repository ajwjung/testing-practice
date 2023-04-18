const analyzeArray = (arr) => {
    return { 
        average: arr.reduce((prev, current) => prev + current, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
};

module.exports = analyzeArray;