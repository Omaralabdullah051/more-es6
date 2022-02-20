const friends = ['Tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }

];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// console.log(productPrices);
// when we don't need to return array from function;we need to use forEach()
// products.map(product => console.log(product));
// forEach doesn't return array from the function 
products.forEach(product => console.log(product));
