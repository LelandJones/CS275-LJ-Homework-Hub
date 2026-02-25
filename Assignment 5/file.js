// add
function add(a, b) {
    return a + b;
}

console.assert(add(2,8) === 10, "2 + 8 should return 10");

// min
function min(a, b) {
    if (a < b) {
        return a
    }
    else {
        return b
    }
}

console.assert(min(4, 6) === 4, "4 is less than 6, should return a 4");

// max
function max(a, b) {
    if (a > b) {
        return a
    }
    else {
        return b
    }
}

console.assert(max(4, 6) === 6, "6 is greater than 4, should return a 6");

// isEven
function isEven(a) {
    if (a % 2 === 0) {
        return "Yes"
    }
    else {
        return "No"
    }
}

console.assert(isEven(10) === "Yes", "10 is an even number");

//