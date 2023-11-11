console.log("Hello world from variable")

// I want to print my name 5 times 

// We should use variables ?

// Why we need variables ? -> We want to resue a value at multiple places
// What is variables ? 


var name = 'Anshu Rai'; // String
console.log(name);
console.log("Line 12", typeof(name))

// I am reassigning the a different value
name = 98;
console.log(name);
console.log("Line 15", typeof name);
name = 98.988789;
console.log(name);
console.log("Line 18",typeof name);
name = true;
console.log(name);
console.log("Line 21", typeof name);

var a;
console.log(a);
console.log("Line 26", typeof (a));

var b = null;
console.log(b);

// Its a bug that is present in js -> It will be present forever
console.log("Line 30", typeof b);
