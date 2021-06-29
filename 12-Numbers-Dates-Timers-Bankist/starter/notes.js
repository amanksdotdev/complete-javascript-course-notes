//LECTURE NOTES

// 1) CONVERTING AND CHECKING NUMBERS

//1. In JavaScript every number is represented as floating point number internaly

console.log('23 === 23.0', 23 === 23.0); // true

//2. Numbers are represented internaly in a 64bit base 2 format this makes some wiered results like
console.log('0.1 + 0.2', 0.1 + 0.2); //0.30000000000000004
console.log('0.1 + 0.2 === 0.3', 0.1 + 0.2 === 0.3); //false

//3. Type Conversion
console.log("Number('23')", Number('23')); // 23
console.log("+'23'", +'23'); // 23

//4. Parsing  --> Like coercion but advance, it get rids of extra strings like px from the string.

// parseInt have a optional second argument which is radix to specify base
console.log("Number.parseInt('30px', 10):", Number.parseInt('30px', 10)); // 30;
console.log("Number('30px'):", Number('30px')); // NaN

// parseFloat
console.log("Number.parseFloat('2.5rem'):", Number.parseFloat('2.5rem')); // 2.5

//5. Checking methods

//isNan - check if value is NaN
console.log('isNaN(20):', Number.isNaN(20)); // false
console.log("isNaN('20'):", Number.isNaN('20')); // false
console.log("isNaN(+'20X'):", Number.isNaN(+'20X')); // true
console.log('isNaN(23 / 0):', Number.isNaN(23 / 0)); // false

// isFinite --> check if value is number
console.log('Number.isFinite(20):', Number.isFinite(20)); // true
console.log("Number.isFinite('20'):", Number.isFinite('20')); // false
console.log("Number.isFinite(+'20X'):", Number.isFinite(+'20X')); // false
console.log('Number.isFinite(23 / 0):', Number.isFinite(23 / 0)); // false

// isInteger --> check if value is Integer (for float use isFinite)
console.log('Number.isInteger(23):', Number.isInteger(23)); // true
console.log('Number.isInteger(23.0):', Number.isInteger(23.0)); // true

console.log('Number.isInteger(23.1):', Number.isInteger(23.1)); // false

console.log('Number.isInteger(23 / 0):', Number.isInteger(23 / 0)); //false

//2) MATH AND ROUNDING

// square root
console.log('Math.sqrt(25):', Math.sqrt(25)); // 5
console.log('25 ** (1 / 2):', 25 ** (1 / 2)); // 5

// cube root
console.log('8 ** (1 / 3):', 8 ** (1 / 3)); // 2

// max and min
console.log('Math.max(5, 18, 23)', Math.max(5, 18, 23)); // 23
console.log("Math.max(5, 18, '23')", Math.max(5, 18, '23')); // 23
console.log("Math.max(5, 18, '23px')", Math.max(5, 18, '23px')); // NaN

console.log('Math.min(5,18,23):', Math.min(5, 18, 23)); // 5

// Math.PI --> value of pi
console.log('Math.PI :', Math.PI);

// Math.random and Math.trunc
console.log(
  'Math.trunc(Math.random() * 6 )+ 1:',
  Math.trunc(Math.random() * 6) + 1
);

// function to get random integer between a range
const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

console.log('randomInt(10,20)', randomInt(10, 20));

//Rounding integers
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

//Rounding decimals
//toFixed returns string
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.34
console.log(+(2.345).toFixed(2)); // 2.34 (Number)

//3) THE REMAINDER OPERATOR
console.log(5 % 2); // 1
console.log(8 % 3); // 2

//4) WORKING WITH BIGINT
/**
 * As we know numbers are represented as 64bit base 2 but only 53bits are for integers and remaining are for decimal and sign.
 */

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
// this type of operation gives random numbers and is unsafe
console.log(2 ** 53 + 0);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

//To solve above problem BigInt was introduces in javascirpt

console.log(100000000000000000000000000000n);
console.log(BigInt(10000));

//Operations
console.log(1000n + 1000n);

const huge = 2012312321302123232321321313213132n;
const num = 2;
// console.log(huge * num); error because can't mix BigInt and other type

console.log(huge * BigInt(num));

//Expressions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); //bigint
console.log(20n == '20'); // true

console.log(huge + ' is really big');

//Divisons
console.log(11n / 3n);
console.log(10 / 3);

//5)  CREATING DATES

// 4 Ways of creating a date
const now = new Date();
console.log(now);

console.log(new Date('December 25, 2015')); // sometimes unreliable

// new Date(year, month, day, hour, minutes, seconds)  month is 0-based
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(1999, 7, 10));

// working with dates 
const future = new Date(2037, 10, 19);
console.log(future);
console.log(future.getFullYear()); // don't use getYear
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // time passed from Date(0)

console.log(future.getTime());

future.setFullYear(2040);
console.log(future);

//Operation with Dates
const tenYL = new Date(2031, 3, 24);
console.log(tenYL);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days = calcDaysPassed(Date.now(), tenYL);
console.log(days);

// NOTE: Use moment.js for date related things

/******USING  Intl API ********* */
//6) INTERNATIONALIZING DATES (Intl)
console.log(now);

// new Intl.DateFormat(local, [option object]).format(date)
console.log(new Intl.DateTimeFormat('en-IN').format(now));

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
// it's usual to use local from the user computer
// const local = navigator.language;  use in browser like this
console.log(new Intl.DateTimeFormat('en-IN', options).format(now));

//7) INTERNATIONALIZING NUMBERS

console.log(new Intl.NumberFormat('en-IN').format(100000));

const temperature = 32;
const tempoptions = {
  style: 'unit',
  unit: 'celsius',
};
console.log(new Intl.NumberFormat('en-IN', tempoptions).format(temperature));

//currency
console.log(
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(100)
);

//NOTE - Checkout Intl API on MDN for more

//8) TIMERS IN JS - setTimeout & setInterval

setTimeout(() => console.log('Here is your pizza'), 2000);

console.log('waiting...');

//callback with arguments
setTimeout(
  (ing1, ing2) => console.log(`${ing1} and ${ing2}`),
  1000,
  'cheese',
  'onion'
);

//setInterval
let n = 1;
const id = setInterval(() => {
  console.log(n++);
  if (n == 11) {
    clearInterval(id);
  }
}, 1000);


