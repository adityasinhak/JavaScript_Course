// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(typeof sym2);
// console.log(Symbol('123') === Symbol('123'));

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4'

// console.log(myObj[KEY1]);

// Symbols are not enumberable in for ....in

for(let i in myObj) {
  console.log(`${1}: ${myObj[i]}`);
}