//Coding Challenge #1
const calcAverage = (s1, s2, s3) => {
	return (s1+s2+s3) / 3
}

const checkWinner = (avgDolphins, avgKoalas) => {
	if(avgKoalas >= avgDolphins*2){
		console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
	} else if(avgDolphins >= avgKoalas*2) {
		console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
	} else {
		console.log("No winners");
	}
}

let dolphinAvg = calcAverage(44,23,71);
let koalasAvg = calcAverage(65,34,27);

checkWinner(dolphinAvg, koalasAvg);


//Coding challenge #2
const calcTip = billValue => (billValue >= 50 && billValue <= 300)?billValue*0.15:billValue*0.20;
const bills = [125, 555, 44];
const tips = [];
const total = [];

for(let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
	total.push(bills[i] + tips[i]);
}

console.log("Bills = ", bills);
console.log("Tips = ", tips);
console.log("Total = ", total);

//Coding Challenge #3
const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function(){
		this.bmi = Math.floor(this.mass / this.height**2);
		return this.bmi;
	}
}

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function(){
		this.bmi = Math.floor(this.mass / this.height**2);
		return this.bmi;
	}
}

mark.calcBMI();
john.calcBMI();
console.log(`${mark.bmi > john.bmi ? mark.fullName : john.fullName}'s (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) BMI is higher than ${mark.bmi < john.bmi ? mark.fullName : john.fullName}'s (${mark.bmi < john.bmi ? mark.bmi : john.bmi})`)

// Coding Challenge #4
const calcAverage(arr){
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum = arr[i];
	}
	return Math.floor(sum / arr.length);
}

cosole.log('Average of total bills = ', calcAverage(total)); // on line 35