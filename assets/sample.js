// Remember, we're gonna use strict mode in scripts from now on
"use strict";

// Problem:
// We work for a company building a smart home thermometer. Our
// most recent task is this: "Given an array of temperatures of one day,
// calculate the temerature amplitude. Sometimes, there might be a sensor error."

const temeratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -What is amplitude? Answer: difference between highest and lowest temp.
// -What is a sensor error? and what do we do?
// -How to compute max and min temperatures?

// 2) Breaking up into sub-problems.
// -How to ignore errors?
// -Find max value in temp array
// -Find min value in temp array
// -Subtract min from max (amplitude) and return it.

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if(temps[i] > max) {
            max = temps[i];
        }
        if (temps[i] < min) {
            min = temps[i];
        }
    }
    console.log(max);
};
    calcTempAmplitude([3, 7, 4]);
    // max = 3
    // is 7 > 3, yes, so now max = 7
    // is 4 > 7 no, so nothing happens, so 7 is max ultimately.
