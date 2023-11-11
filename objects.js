
// Objects
// Non primitive
var students = {
    name: "Anshu",
    class: "X"
}

console.log("Students", students);
console.log("Type", typeof(students));
console.log("Accessing value using key", students['class']);
console.log("Accessing va;ue using dot operator", students.class)

// Want to know all keys present in an object
console.log(Object.keys(students));

// Can i get all the values without knowing keys ???
console.log(Object.values(students));
var obj = {1: 'one'};
console.log("Obj", obj);


var test = {};

// How we can add a key value in obj2;
obj2['year'] = 2023;
obj2.month = 'November';

console.log(obj2);

obj2["year"] = 2024;
console.log(obj2);
delete obj2['year'];
delete obj2.month;
console.log(obj2);