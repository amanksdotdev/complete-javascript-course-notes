'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];
/**SIMPLE ARRAY METHODS */
console.log('----- SIMPLE ARRAY METHODS ----');
//*****SLICE*****  (returns new array and doesn't change original array)
//.slice(start, end)
console.log('----- SLICE ----');
console.log(arr.slice(2)); // [c, d, e]
console.log(arr.slice(1, 3)); // [b, c]
console.log(arr.slice(-1)); // [e]      (element at last index)
console.log(arr.slice(-3, -1)); //[c, d]
console.log(arr.slice(-3, 0)); // []       (can't go from negative to positive index)
const copyarr = arr.slice(); // creates a shallow copy

//*****SPLICE*****  (mutates original array and returns deleted elements)
// .splice(index, deleteCount)

console.log('----- SPLICE ----');
console.log(arr.splice(2)); //[c,d,e]      deletes everyhing from 2nd index
console.log(arr); // [a,b]

arr = copyarr;

arr.splice(0, 2); //removes first two elements
console.log(arr);

//*****REVERSE*****   (mutates original array)
console.log('----- REVERSE ----');
console.log(arr.reverse());
console.log(arr);

//*****CONCAT****  (merge two array)
console.log('----- CONCAT ----');
const letters = arr.concat(['b', 'a']);
console.log(letters);
console.log(letters.reverse());

//*****JOIN***** (array to string conversion)
console.log('----- JOIN ----');
const myname = ['aman', 'singh'];
console.log(myname);
console.log(myname.join(' '));

/*** LOOPING ARRAYS: forEach Method */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('----- FOREACH -----');
movements.forEach(amount => {
  if (amount > 0) {
    console.log(`You deposited ${amount}`);
  } else {
    console.log(`You withdrew ${Math.abs(amount)}`);
  }
});

/* NOTE - continue and break doesn't work in forEach loop */

// getting index in forEach loop (third argument is entire array and is optional like 2nd argument of index)
movements.forEach((amount, idx, arr) => {
  if (amount > 0) {
    console.log(`Trasaction ${idx + 1}: You deposited ${amount}`);
  } else {
    console.log(`Trasaction ${idx + 1}: You withdrew ${Math.abs(amount)}`);
  }
});

/****forEach WITH MAPS AND SETS ****/
console.log('----- forEach WITH MAPS AND SETS -----');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log('----on MAPS----');
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log('----on SETS----');
const currenciesSet = new Set(['USD', 'GBP', 'EUR']);

// currenciesSet.forEach(function(value, key, set){
//     console.log(`${key}: ${value}`);       // key and value are same in sets
// })

// using _ as a convention showing a throwaway variable that is not needed or unnecessary
currenciesSet.forEach(function (value, _, set) {
  console.log(`${value}`);
});


/***********MAP METHODS************* */
console.log('----- MAP METHOD -----');

