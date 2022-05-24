// Remember, we're gonna use strict mode in scripts from now on
"use strict"; 

// Problem:
// We work for a company building a smart home thermometer. Our
// most recent task is this: "Given an array of temperatures of one day,
// calculate the temerature amplitude. Sometimes, there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -What is amplitude? Answer: difference between highest and lowest temp.
// -What is a sensor error? and what do we do?
// -How to compute max and min temperatures?

// 2) Breaking up into sub-problems.
// -How to ignore errors?
// -Find max value in temp array
// -Find min value in temp array
// -Subtract min from max (amplitude) and return it.

const calcTempAmplitudeNew = function (temps1, temps2) {
    
    const temps = temps1.concat(temps2);

    let max = temps[0];
    let min = temps[0];
    
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) {
            max = curTemp;
        }
        if (curTemp < min) {
            min = curTemp;
        }
    }
    console.log(max, min);
    // amplitude is the same as range
    return max - min;
};
    const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [2, 6, 9]);
    console.log(amplitudeNew);
    // max = 3
    // is 7 > 3, yes, so now max = 7
    // is 4 > 7 no, so nothing happens, so 7 is max ultimately.

    // Problem 2:
    // Function should now receive two arrays of temperatures.

    // 1 understanding problem
    // - With 2 arrays, should we implement functionality twice?
    // Answer: No. Merge two arrays, but how do we do that?

    // 2 Breaking up into sub-problems (in this case, just one sub-problem).
    // Look this up on stackoverflow
    // const array3 = array1.concat(array2);

    