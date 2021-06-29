// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// #Coding Challenge

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
 */

/* Your tasks:
 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
*/

const printForecast = function (tempArr) {
  let result = "";
  for (let i = 0; i < tempArr.length; i++) {
    result += ` ... ${tempArr[i]} degree Celsius in ${i + 1} days`;
  }
  console.log(result + ' ...');
};

printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);