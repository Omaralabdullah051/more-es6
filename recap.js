// 1.let and const 
const hubby = 'amin ullah';
let phone = 'iphone 15';
phone = 'samsung Galaxy s17';
//2.default parameter and 5. spread operator
function maxNumber(array = []) {
    const min = Math.min(...array);
    return min;
}
console.log((maxNumber()));
//3.template string
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`;
console.log(myNotes);
//4.arrow function
// normal function 
// function square (x){
//     return x*x;
// }
// arrow function 
const square = x => x * x;
console.log(square(8));