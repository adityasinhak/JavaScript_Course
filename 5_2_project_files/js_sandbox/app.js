//String

const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(typeof name2);

if(name2 === 'Jeff'){
  console.log('Yes');
} else {
  console.log('No');
}

// Number

const num1 = 5;
const num2 = new Number(5);

//Function

const getSum1 = function(x,y){
  return x+y;
}

const getSum2 = new Function('x','y', 'return 1+1')

console.log(getSum2(1,1));

// objects
const john1 = {name: "John"};
const john2 = new Object({name: "john"});

//Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\w+');

console.log(re2);