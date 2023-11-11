const books = ['NCERT', 'RD SHARMA', 'HC VERMA']
console.log("Books", books);
console.log("2nd Book", books[1]);

const students = new Array('Anshu', 'Rahul', 'SImran');
console.log("Student", students);

// Can we store hetogenious data in Arrays ?
// Data of different types ?
const data = ['Anshu', 890, true, null, [1,3,true, 'hhjj']];
console.log("Data", data);

// Can we create an array with no data ?
const arr = [];
console.log("Arr", arr);

// How we can add some data in Empty array?
// we have a push function on arr

arr.push('Anshu');
console.log("Arr size", arr.length);
console.log("Arr", arr);

