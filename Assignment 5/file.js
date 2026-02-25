// add
function add(a, b) {
    if ( typeof a !== "number" || typeof b !== "number") return null;
    return a + b;
}

// normal
console.assert(add(2,8) === 10, "2 + 8 should return 10");
// shouldn't work
console.assert(add("2", 8) === null, "Should return a null");
// null case
console.assert(add(null, 8) === null, "Should return a null");


// min
function min(a, b) {
    if ( typeof a !== "number" || typeof b !== "number") return null;
    if (a < b) {
        return a
    }
    else {
        return b
    }
}

// normal
console.assert(min(4, 6) === 4, "4 is less than 6, should return a 4");
// shouldn't work
console.assert(min("4", 6) === null, "Should return a null");
// null case
console.assert(min(null, 6) === null, "Should return a null");



// max
function max(a, b) {
    if ( typeof a !== "number" || typeof b !== "number") return null;
    if (a > b) {
        return a
    }
    else {
        return b
    }
}

// normal
console.assert(max(4, 6) === 6, "6 is greater than 4, should return a 6");
// shouldn't work
console.assert(max("4", 6) === null, "Should return a null");
// null case
console.assert(max(null, 6) === null, "Should return a null");


// isEven
function isEven(a) {
    if (typeof a !== "number") return null;
    if (a % 2 === 0) {
        return "Yes"
    }
    else {
        return "No"
    }   
}

// normal
console.assert(isEven(10) === "Yes", "10 is an even number");
// shouldn't work
console.assert(isEven("10") === null, "Should return a null");
// null case
console.assert(isEven(null) === null, "Should return a null");



// square
function square(n) {
    if (typeof n !== "number") return null;
    return n * n;
}

// normal
console.assert(square(4) === 16, "4 to the power of two is 16");
// shouldn't work
console.assert(square("4") === null, "Should return a null");
// null case
console.assert(square(null) === null, "Should return a null");



// function 
function greet(name) {
    if (typeof name !== "string") return null;
    return "Howdy, " + name + "!";
}

// normal
console.assert(greet("Leland") === "Howdy, Leland!", "Should say Howdy to the name inputted");
// shouldn't work
console.assert(greet(123) === null, "Should return null");
// null case
console.assert(greet(null) === null, "Should return a null");
