const fs = require('fs');

function readJson(filePath) {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

function decodeYValue(base, value) {
    return parseInt(value, base);
}

function lagrangeInterpolation(points, degree) {
    let constantTerm = 0;
    for (let i = 0; i < points.length; i++) {
        const [xi, yi] = points[i];
        let term = yi;
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const [xj, _] = points[j];
                term *= (-xj) / (xi - xj);
            }
        }
        constantTerm += term;
    }
    return Math.round(constantTerm);
}

function findConstantTerm(filePath) {
    const data = readJson(filePath);
    const { n, k } = data.keys;
    const degree = k - 1;

    const points = [];
    for (const [key, { base, value }] of Object.entries(data)) {
        if (key === "keys") continue;
        const x = parseInt(key, 10);
        const y = decodeYValue(parseInt(base, 10), value);
        points.push([x, y]);
    }

    if (points.length < k) throw new Error("Not enough points to determine the polynomial");

    const constantTerm = lagrangeInterpolation(points, degree);
    console.log("Constant term (c):", constantTerm);
}

findConstantTerm('testcase1.json');
findConstantTerm('testcase2.json');
