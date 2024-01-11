// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. 

// Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;  // changed let to const

/*console.log(typeof shuttleName);
console.log(shuttleSpeedMph);
console.log(distanceToMarsKm);
console.log(distanceToMoonKm);
console.log(milesPerKm);
*/

let milesToMars = distanceToMarsKm * milesPerKm;

console.log(milesToMars);

let hoursToMars = milesToMars / shuttleSpeedMph;

console.log(hoursToMars);

let daysToMars = hoursToMars / 24;

console.log(daysToMars);

console.log(shuttleName + ' ' + 'will take' +' '+ daysToMars +' '+'to reach Mars.');