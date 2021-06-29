//Coding challenge #1 BMI Calculator
function bmi(mass, height) {
	return mass / height**2;
}

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = bmi(markWeight, markHeight);
const johnBMI = bmi(johnWeight, johnHeight);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);


//coding challenge #2

if(markHigherBMI){
	console.log(`Mark BMI higher than John`);
} else {
	console.log(`John BMI higher than Mark`);
}


//coding challenge #3
let dolphinAvg = (96 + 108 + 89) / 3;
let koalasAvg = (88 + 91, 110) / 3;

if(dolphinAvg > koalasAvg){
	console.log(`Dolphin wins`);
} else if(dolphinAvg < koalasAvg) {
	console.log(`Koalas wins`);
} else {
	console.log(`Draw`);
}


//coding challenge #4
const billValue = 430;
let tip = (billValue >= 50 && billValue <= 300) ? billValue*0.15 : billValue*0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value is ${billValue+tip}`);


