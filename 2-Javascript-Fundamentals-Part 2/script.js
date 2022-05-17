'use strict';

/* FUNCTIONS
// function logger() {
//   console.log(`My name is Jonas`);
// }

// // calling/running/invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }


// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
*/



/* FUNCTION DECLARATIONS VS EXPRESSIONS
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1995);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1995);
console.log(age1, age2)
*/


/* ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1995, 'Jazper'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/


/* FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/


/* REVIEWING FUNCTIONS

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jazper'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// Function declaration -> Function that can be used before it's declared.
// Function expression -> Essentially a function value stored in a variable.
// Arrow function -> Great for quick one-line functions. Has no this keyword.

*/



/////////////////////////////////////////// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 
scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score
of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate
the average of 3 scores.
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average 
score of each team as parameters ('avgDolphins' and 'avgKoalas),
and then logs winner to the console, together with the victory points,
according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54, and 41. Koalas score 23, 34 and 27
*/

/* SOLUTION: 

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
}

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

const DolphinsAverage1 = calcAverage(44, 23, 71);
const KoalasAverage1 = calcAverage(65, 54, 49);

checkWinner(DolphinsAverage1, KoalasAverage1);

const DolphinsAverage2 = calcAverage(85, 54, 41);
const KoalasAverage2 = calcAverage(23, 34, 27);

checkWinner(DolphinsAverage2, KoalasAverage2);

*/
/////////////////////////////////////////// Coding Challenge #1




/* ARRAYS

// ONLY PRIMITIVE VALUES ARE IMMUTABLE WITH CONSTANTS
// SO ARRAYS CAN BE MUTATED EVEN WHEN DECLARED WITH 'const'
// BUT WE CANNOT REPLACE THE ENTIRE ARRAY
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];

years1.forEach(year => {
  console.log(calcAge(year));
})

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length - 1])];
console.log(ages);

*/

/* BASIC ARRAY OPERATIONS (METHODS)

// push, unshift methods return the new length of the array
// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// pop and shift methods return the removed element of the array
// Remove elements
friends.pop(); // remove the last element of the array.
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove the first element of the array.
console.log(friends);

console.log(friends.indexOf('Steven')); // returns the index of the element
console.log(friends.indexOf('Bob')); // returns -1 if element does not exist

friends.push(23);
console.log(friends.includes('Steven')); // checks if element is in the array (boolean). uses strict equality.
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // uses strict equality. no type coercion.

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven.');
}

*/


/////////////////////////////////////////// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules
as before: Tip 15% of the bill if the bill value is between 50 and 300,
and if the values if different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input
and returns the corresponding tip, calculated based on the rules 
above (you can check out the code from the first tip calculator challenge
if need to). Use the function type you like the most. Test the function
using a bill value of 100.

2. And now let's use arrays. So create an array 'bills' containing
the test data below.

3. Create an array 'tips' containing the tip value for each bill,
calculated from the function you created before.

4. BONUS: Create an array 'total' containing the total values, 
so the bill + tip.

TEST DATA: 125, 555 and 44

*/

/* SOLUTION: 

const calcTip = function(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

let bills = [125, 555, 44];
let tips = [];
let total = [];

bills.forEach(bill => {
  tips.push(calcTip(bill));
  total.push(calcTip(bill) + bill);
})

console.log(tips);
console.log(total);

*/
/////////////////////////////////////////// Coding Challenge #2



/* INTRODUCTION TO OBJECTS

// ORDER OF OBJECT PROPERTIES DO NOT MATTER
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  jobs: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

*/



/* DOT VS BRACKET NOTATION (RETRIEVE AND CHANGE DATA FROM & ON OBJECTS)

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  jobs: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName); // dot notation
console.log(jonas['lastName']); // bracket notation (use string for property names)


// for the square brackets, we can use any operation inside the bracket.
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// when we need to first compute the property name, use the BRACKET NOTATION
// in any other cases, use the DOT NOTATION

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// undefined is a value that we get when we try 
// to access a property that does not exist in an object.

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}


// ADD NEW PROPERTIES TO THE OBJECT USING DOT AND BRACKET NOTATION
jonas.location = 'Portugal'; // dot notation
jonas['twitter'] = '@jonasschmedtmann'; // bracket notation. use a string for the property name
console.log(jonas);

// CHALLENGE
// "Jonas has 3 friends, and his best friend is called Michael."
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`);

*/


/* OBJECT METHODS

// we can add functions to objects

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // a function value for the calcAge property
  // use 'this' variable to access the birthYear
  // this refers to the object calling the method.
  calcAge: function() {
    // console.log(this);
    
    // store a new property
    this.age = 2037 - this.birthYear;
    return this.age;
  }
}

console.log(jonas.calcAge());
console.log(jonas['calcAge']());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// CHALLENGE
// "Jonas is a 46-year old teacher, he has a/no driver's license."

const jonasChallenge = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // a function value for the calcAge property
  // use 'this' variable to access the birthYear
  // this refers to the object calling the method.
  calcAge: function() {
    // console.log(this);
    
    // store a new property
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  }
}

console.log(jonasChallenge.getSummary());

*/


/////////////////////////////////////////// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMI's!
This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. For each of them, create an object with the properties
for their full name, mass, and height (Mark Miller and John Smith).

2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method of both objects). Store the BMI value to a property, and also return 
it from the method.

3. Log to the console who has the higher BMI, together with the full name and 
the respective BMI.
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Mark weighs 78kg and is 1.69m tall. John weighs 92kg and is 1.95m tall.

*/

/* SOLUTION: 

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}).`);
} else if (mark.bmi < john.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}).`);
} else {
  console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi}).`);
}

*/
/////////////////////////////////////////// Coding Challenge #3


/* THE FOR LOOP




*/


// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏿‍♀️`);
}git