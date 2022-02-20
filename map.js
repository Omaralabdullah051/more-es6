const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);

// the benefits by using map()
//1.loop through each element
//2.call the provided function for each elements
//3.result for each element will be stored in an array (return array )

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);

const square = numbers.map(x => x * x);
console.log(square);

//qube all the array elements
const allNumbers = [3, 9, 7, 8, 2];
// 1st ways 
const qube = [];
for (number of allNumbers) {
    const result = number * number * number;
    qube.push(result);
}
// console.log(qube);
//2nd ways
const qube2 = [];
const getQube = number => number * number * number;
for (number of allNumbers) {
    const result = getQube(number);
    qube2.push(result);
}
console.log(qube2);
//3rd and simple way (es6)
const qube3 = allNumbers.map(x => x * x * x);
console.log(qube3);