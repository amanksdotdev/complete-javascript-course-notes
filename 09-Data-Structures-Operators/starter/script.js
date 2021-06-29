'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Destructuring array
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log('*****Destructuing Arrays*****');
console.log('arr = ' + arr);
console.log('x = ' + x + ' y = ' + y + ' z = ' + z);

// skipping array index
console.log('Skipping array index');
let [a, , c] = arr;
console.log('a = ' + a, 'c = ' + c);

//swapping using destructuring
console.log('Swapping two variables');
[a, c] = [c, a];
console.log('a = ' + a, 'c = ' + c);

//recieving 2 values from a function
console.log('Recieving 2 values from a function');
const [starter, main] = restaurant.order(1, 0);
console.log(starter, main);

// nested arrays
console.log('Nested arrays');
const nested = [2, 4, [5, 6]];
let [i, j, k] = nested;
console.log(i, j, k);
console.log(typeof i, typeof j, typeof k);

let l;
[i, j, [k, l]] = nested;
console.log(i, j, k, l);
console.log(typeof i, typeof j, typeof k, typeof l);

//defatult values (useful when working with api)
console.log('Default values');
const alpha = ['a', 'b'];
let [p, q, r] = alpha;
console.log(p, q, r); // r is undefined because the array size is 2

[p = 1, q = 1, r = 1] = alpha;
console.log(p, q, r); // p = a, q = b and r = 1 because of default value set

//*****Destructure objects*****
const { name, categories } = restaurant;
console.log(name, categories);

// using different name for variables
const { name: restaurantName, categories: dishes } = restaurant;
console.log(restaurantName, dishes);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// Mutating variables
let var1 = 111;
let var2 = 999;
const someObj = {
  var1: 23,
  var2: 7,
  var3: 14,
};

// {var1 , var2} = someObj;  (throws Syntax Error)
({ var1, var2 } = someObj); // solution
console.log(var1, var2);

//Nested Objects
let { fri } = restaurant.openingHours;
console.log(fri);

let {
  sat: { open, close },
} = restaurant.openingHours;
console.log(open, close);

//***** Spread Operator******

const num123 = [1, 2, 3];
const extendedNum = [...num123, 4, 5, 6];
console.log(extendedNum);

// copy array
const numcopy = [...num123];

// join two array
const joinedArr = [...num123, ...extendedNum];

/** Spread operator works on all Iterables
 * Iterables are --> arrays, strings, maps, sets. (NOT objects)
 */
const str = 'Aman';
const letters = [...str, ' ', 'S.'];
console.log(letters);

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr));

/* Since ES2018, spread operator also works on objects even though an object is not an iterable.
 */

//creates a shallow copy (Object.assign alternative)
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);

/******Rest Pattern and Paramenters******/

/*
Rest is opposite of spread.

1) Spread is used to expand the items of an iterable into variables or individual elements.
2) Rest is used to combine the separated values into an array or object. 
3) Spread is used rhs of =
4) Rest is used lhs of =

*/
const { fobj, ...restObj } = {
  first: { f1: 1 },
  second: { s1: 1 },
  third: { t3: 1 },
};
console.log(restObj);

const [farr, ...restArr] = [1, 2, 3, 4, 5, 6];
console.log(restArr);

function sumRest(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  return sum;
}

console.log(sum(1, 2, 3, 4, 5));

/*********SHORT CIRCUITING*********** */

// OR operator
console.log(0 || 1); // 1
console.log(false || true); //true
console.log(true || false); //true
console.log(false || undefined || 12 || null); // 12             returns the first truthy value it encounters
console.log(undefined || null); // null               when all the values are falsy then last value is returned

// AND operator
console.log(0 && 1); // 0
console.log(false && true); // false
console.log(true && false); // false
console.log(undefined && null); // undefined         returns the first falsy value it encounters
console.log(true && 232 && 'damn son' && 1); // 1    when all the values are truthy then last value is returned

// Nullish Coelascing operator (ES2020)
console.log(0 ?? 10); // 0
console.log('' ?? 10); // ''
console.log(null ?? 10); // 10           only checks null and undefined and not all falsey values
console.log(undefined ?? 10); // 10

//example usage of nullish coelascing
let guests = 0;
console.log(guests || 10); // 10            using OR will return 10 because 0 is a falsey value, which prints the wrong number of guests
console.log(guests ?? 10); // 0             using ?? will return the actual number of guests in this case because 0 is not nullish i.e. undefined or null

/***********for of loop******* */

for (const item of restaurant.starterMenu) {
  console.log(item);
}

// trick to get index of items
for (const item of restaurant.starterMenu.entries()) {
  // arr.entries() method return a array of arrays containing index and value of the array it is called on
  console.log(item);
}

for (const [index, item] of restaurant.starterMenu.entries()) {
  console.log(`${index + 1} ${item}`);
}

/********ES6 Enhanced Object Literal Syntax */

/**
 *  ES6 comens with 3 object literal syntax enhancemnets
 * 1) using outerobject inside object as value
 * 2) new way of writing function inside object
 * 3) now keys can also be computed
 */
// some object
const outerObj = {
  k1: 1,
  k2: 2,
};

// old way of writing object literal
let obj = {
  key1: 'hello',
  key2: 100,
  outerObj: outerObj, //<------- inserting outobject as value with the same name
  sayHi: function () {
    console.log('hi');
  },
};

// es6 changes
obj = {
  key1: 'hello',
  key2: 100,
  outerObj, // <----- 1) in es6 we don't need to use  obj:obj if both the names of key and variable are same
  sayHi() {
    // <----  2) no need of writing function keyword now
    console.log('hi');
  },
};

// 3) key computation example
const animals = ['dog', 'eagle', 'spider'];

const numOfLegs = {
  [animals[0]]: 4,
  [animals[1]]: 2,
  [animals[2]]: 8,
};
console.log(numOfLegs);

/********Optional Chaining operator (?.) (ES2020)****/
console.log('\n********Optional Chaining operator (?.) (ES2020)****\n');

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);      will throw error because mon doesn't exist (undefined) and using . operator on undefined throws error

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); //undefined

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

// wihtout optional chaining we have to do something like this
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

/***********Looping Objects******** */
console.log('\n***********Looping Objects******** *\n');

// Property NAME (KEYS)
const properties = Object.keys(restaurant.openingHours);
console.log(properties); // [array of keys]
for (const day of properties) {
  console.log(day);
}

// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values); // [array of values]
for (const v of values) {
  console.log(v);
}

// Entire Object
const entries = Object.entries(restaurant.openingHours);
console.log(entries); // [array of arryas with key value pair]
for (const e of entries) {
  console.log(e);
}

for (const [k, v] of entries) {
  console.log(k, v);
}
/**********Sets********* */
//Sets are unordered list of unique elements, they have no indexes and get method

//declaration
const set = new Set([1, 2, 3, 1, 1, 1, 4, 2, 5]);
console.log(set);

// getting size of the set
console.log(set.size);

//checking if set contains an element
console.log(set.has(5)); // true

//adding to set
set.add(6);

//deleting from set
set.delete(1);

//converting a array to unique elements array
const list = [1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6];
const uniqueArr = [...new Set(list)];
console.log(uniqueArr);

//deleting all items from set
set.clear();
console.log(set);

/***********Map******** */
//map is a data structure with key value pairs. The difference between map and object is that a map can have a key of any data type.

//declaration
const hotel = new Map();

//adding to map
hotel.set('name', 'Trivago');

//we can chain set method
hotel
  .set(true, 'Hotel is open')
  .set(false, 'Hotel is closed')
  .set(1, 'New Delhi')
  .set(2, 'Bihar')
  .set(restaurant, 'restraunt object')
  .set(arr, 'an array');

console.log(hotel);

//accessing value in map
console.log(hotel.get(true));
console.log(hotel.get(1));
console.log(hotel.get('name'));
console.log(hotel.get(restaurant));
console.log(hotel.get(arr));

//checking if a map HAS a KEY
console.log(hotel.has(2)); // true
console.log(hotel.has(3)); // false

//getting size of the map
console.log(hotel.size);

//deleting a pair form map
hotel.delete(restaurant);

console.log(hotel);

//deleteing all pairs
hotel.clear();
console.log(hotel);

/***************Strings********* */
console.log('\n***************Strings********* *\n');

const airline = 'Air India';
const plane = 'A320';

//accessing character
console.log(airline[0]);
console.log(plane[1]);
console.log('B737'[0]);

//length
console.log(airline.length);
console.log('B737'.length);

// some methods on string
console.log(airline.indexOf('r')); //2
console.log(airline.lastIndexOf('i')); // 7
console.log(airline.indexOf('air')); // -1

console.log(airline.slice(4)); //India
console.log(airline.slice(4, 7)); // Ind

console.log(airline.slice(0, airline.indexOf(' '))); // Air (gets first word)

console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // India (gets last word)

console.log(airline.slice(-1)); // a (last character)
console.log(airline.slice(1, -1)); // ir Indi

/**
 * Q- String is a premitive, then why do have methods and how it works?
 * Ans- Whenever we call a method on a string, javascript automatically convert
 *      that string premitive to String object and then on that object the mehtod.
 *      This process is called Boxing.
 *
 *      When the operation is done then the object is converted back to string premitves.
 *
 *
 */

// lowercase and uppercase
console.log(airline.toLowerCase()); // air india
console.log(airline.toUpperCase()); // AIR INDIA

//fix capitalization in name
const passenger = 'aMAn';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email
const email = 'xyz@gmail.com';
const loginEmail = '    Hello@Gmail.Com  \n';

const lowerEmail = loginEmail.toLowerCase();
//removing white spaces
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//all in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

/***from ES2019
 * we have trimStart() and trimEnd() methods
 */

//replacing
const priceUS = '100$';
const priceIN = priceUS.replace('$', '₹').replace('100', '7000');
console.log(priceIN);

const announcement =
  'All passenger come to boarding door 23, Boarding door 23!';

console.log(announcement.replace('door', 'gate')); // replaces only first occurence of door

console.log(announcement.replace(/door/g, 'gate')); // using regex to solve above problem

// Boolean returning methods
const plane2 = 'A320neo';
console.log(plane2.includes('A320')); //true
console.log(plane2.startsWith('A32')); //true
console.log(plane2.endsWith('neo')); //true

//Split and Join
const strarr = 'I am john cena'.split(' ');
console.log(strarr);
const stragain = strarr.join(' ');
console.log(stragain);

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '-').padEnd(35, '-'));
console.log('Aman'.padStart(25, '-').padEnd(35, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};

maskCreditCard(4213125532123);
maskCreditCard('2325433242423442341');

//Repeat
const message2 = 'Bad weather... Delayed';

console.log(message2.repeat(4));

console.log('abc def'.repeat(2));

/*********String Practice */

// Data needed for exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const msgs = flights.split('+');
console.log(msgs);

function format(place) {
  return place.slice(0, 3).toUpperCase();
}
for (const msg of msgs) {
  let [event, from, to, time] = msg.split(';');
  let output = `${event.replace(/_/g, ' ')} from ${format(from)} to ${format(
    to
  )} (${time.replace(':', 'h')})`.padStart(45);
  console.log(output);
}
