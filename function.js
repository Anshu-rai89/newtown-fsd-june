function greet(name) {
    console.log("Hi", name);
}

greet();// "Hi" undefined
greet("Simran");

// Function to add two numbers
function add(num1, num2) {
    var sum = num1 + num2;
    console.log(num1, num2);
    console.log("Sum is", sum);
}

// WHat a NAN is 
// When it occurs
add(); // Sum is
add(4);
add(4,5,9);

// I want the add function to return me the sum of two number 
function addAndSubtract(num1, num2) {
    var sum = num1 + num2;
    var sub = num - num2;
    var result = [sum, sub];

    return result;
}

// How do we return multiple values from function

var res = addAdvance(4,6);
console.log(res);

// I want to store 10 books name

// By creating 10 variables
var book1 = 'NCRT'
var book2 = 'RD sharma'
var book3 = 'HC verma'
