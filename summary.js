// destructuring object 
// to extract properties from object and bind them to variables 
//can extracts multiple properties in one statement
//can set the default value of missing properties in one statement
const fish = { name: 'Salmon', age: 34, address: 'sea', dress: 'silver' };
const { name, age, address } = fish;
console.log(name, age);
//can access properties from nested objects 
const company = {
    name: 'jalal industry', role: 'development',
    web: { fundamental1: 'html', fundamental2: 'css', fundamental3: 'js' },
    software: { fundamental1: 'python', fundamental2: 'kotlin' },
    time: 11
}
const { fundamental2, fundamental3 } = company.web;
console.log(fundamental2, fundamental3);
//or other way
const { web: { fundamental2: x, fundamental3: y } } = company;
console.log(x, y);
const { fundamental1: a, fundamental2: b } = company.software;
console.log(a, b);
// or 
const { software: { fundamental1: c, fundamental2: d } } = company;
console.log(c, d);
//when the properties might be missing we need to set default value ;
//that returns undefined instead of throwing error
const { hardware: { fundamental2: e } = {} } = company;/*hardware is missing and programme cannot read properties fundamental3 of undefined*/
console.log(e);
//or
// optional chaining 
const chaining = company?.hardware?.fundamental2;
console.log(chaining);

//array destructuring 
//extracts array elements to distinct variables
const numbers = [1, 2, 3, 4, 5];
const [sakib, tamim] = numbers;
console.log(sakib);
//also use for swap variables
let first = 6;
let second = 2;
// console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
//uses of array destructuring on nested array
const nestedArray = [1, 2, 3, 4, [5, 6, 7], 8, 9, 10];
const [, , , four] = nestedArray;
console.log(four);

const [, , three, , [, six, ,], , nine, ,] = nestedArray;
console.log(three, six, nine);

const [, , , , [, , ,], , , ten] = nestedArray;
console.log(ten);

//optional chaining
const company1 = {
    name: 'gp',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development', employee: 22, framework: 'react',
        tech: { first: 'html', second: 'css', third: 'js' }
    }
};
//very helpful because it returns undefined instead of throwing error
console.log(company1?.software?.framework);
console.log(company1?.backend?.first);

//map()
//very useful because
//1.loop through for array elements and get every array elements.
//2.call the function for every array elements.
//3.returns the result in a new array.

// get the square of every array elements 
//befor map()
// 1.ways 
const allnumbers = [1, 2, 3, 4, 5];
let square = [];
for (const number of allnumbers) {
    const result = number * number;
    // square.push(result);
}
// console.log(square);
//2nd ways
function getSquare(number) {
    return number * number;
}
for (const number of allnumbers) {
    const result = getSquare(number);
    square.push(result);
}
console.log(square);
//3rd ways (es6 method)
const square1 = allnumbers.map(x => x * x);
console.log(square1);


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }

];
const productPrices = products.map(x => x.price);
console.log(productPrices);
//foreach()
//also creates a new array and calling function for every elements
// when we don't need to return array from function;we need to use forEach()
const product = products.forEach(x => console.log(products));
const numbers6 = [1, 2, 3, 4, 5, 6];
const newArray = [];
const twoTimes = numbers6.forEach(x => {
    const multiply = x * 2;
    newArray.push(multiply);
});
console.log(newArray);/*map is better than foreach.because map method 1.loop through for every element;2.call the function for every element;3.stored the result in a new array and returns the new array. But foreach method 1.loop through for every element;2.call the function for every element;3.but doesn't stored the result in a new array and it returns undefined;so we need to declare a new array and push the result in this new array.*/

//this calculation in map() method is:
const twoTimes2 = numbers6.map(x => x * 2);
console.log(twoTimes2);
//so that is why map() method is so useful than foreach().


//implement filter
// filter returns a new array from a given array consisting of only those elements from the given array which satisfies a condition that is provided by a function.
//it check's the condition and then returns an array
const black = products.filter(x => x.color == 'black');
console.log(black);

//find()
// check the condition and return the only one matched elements
// filter() returns all the matched elements in a new array
//find() returns just the first matched elements .
const black1 = products.find(x => x.color == 'black');
console.log(black1);

//class
//it is a template of js objects .
//by using this we can create a actual objects.
class Support {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    giveSupport(people) {
        console.log(this.name, 'is giving support for', people);
    }
}
const sumon = new Support('sakib', 'dhaka');
const amin = new Support('amin', 'barishal');
console.log(amin);
// sumon.giveSupport('students');

//class inheritance
//parent class
class TeamMember {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
//inherits the methods and properties by extends keyword
class WebDev extends TeamMember {
    constructor(name, address, role) {
        //call the parent constructor method and access the parent's methods and properties by super()
        super(name, address);
        this.role = role;
    }
    forWebDev() {
        console.log(this.name, 'develops the web');
    }
}

class AppDev extends TeamMember {
    constructor(name, address, version) {
        super(name, address);
        this.version = version;
    }
    forAppDev() {
        console.log(this.name, 'develops the app');
    }
}

const ahmed = new AppDev('ahmed', 'dhaka', '1.0.5.4');
console.log(ahmed);
ahmed.forAppDev();
const munir = new WebDev('munir', 'barishal', 'develop');
console.log(munir);
munir.forWebDev();




