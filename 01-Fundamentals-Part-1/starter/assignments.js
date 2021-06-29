//Assignment 1 Values and Variables
let country = "India";
let continent = "Asia";
let population = 1360000000;

console.log(country);
console.log(continent);
console.log(population);
 
//Assignment 2 Data types
let isIsland = false;
let language;
console.log(typeof isIsland);  //boolean
console.log(typeof population); // Number
console.log(typeof country);  // String
console.log(typeof language);  // undefined

//Assignment 3 let, const and var
language = "hindi";
const independenceYear = 1947;
/* let is block scoped
   var is function scoped */

//Assignment 4  //basic operators
console.log("Half population = ", population / 2);
population++;
console.log("population = ", population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

//Assignment 5 Strings and template literals
description = `${country} is in ${continent}, and its ${population} people speak ${language}`;


//Assignment 6 Taking Decisions: if/else
let avgPopulation = 33000000;
if(population < avgPopulation){
	conosle.log(`${country} population is ${avgPopulation - population} below average`);
} else {
	console.log(`${country} population is above average.`);
}

//Assignment 7 Type Conversion and Corecion
/* 
	1) + operator converts Number to String
	2) (-, *, / , >, <, etc) operator converts String to Number 
*/
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1443

//Assignment 8 Equality Operators == vs ===
let numNeighbours = prompt('How many neighbour countries does your country have?');
if(numNeighbours == 1){
	console.log('Only 1 border!');
} else if(numNeighbours > 1){
	console.log('More than 1 border');
} else {
	console.log('No borders');
}

//Assignment 9 Logical Operators
/*
AND	--> &&
OR  --> || 
NOT --> !
*/
if(population < 50000000 && language === 'english' && isIsland === false){
	console.log(`You should live in ${country}`);
} else {
	console.log(`${country} does not meet your criteria`);
}


//Assignment 10 switch statement
switch(language){
	case 'mandarin':
		'Most number of native speakers!';
		break;
	case 'spanish':
		'2nd Place in number of native speakers';
		break;
	case 'english':
		'3rd Place';
		break;
	case 'hindi':
		console.log('Number 4');
		break;
	case 'arabic':
		console.log("5th most  spoken language");
		break;
	default:
		console.log('Great language too :D');
}

//Assignment 11 Conditional Operator (ternary)
console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`)


