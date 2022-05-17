/* VARIABLES
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/


/* DATA TYPES
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');


// Dynamic Typing
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);
*/


/* let, const, var (reassigning a value to a variable)
let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/



/* OPERATORS 
// // Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + " " + lastName);


// // Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// x--;
// console.log(x);


// // Comparison operators
// console.log(ageJonas > ageSarah); // <, <, >=, <==
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);
*/



/* OPERATOR PRECEDENCE
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

//////////////////////////////////////////////////////////////////////////////////////////
/*
CODING CHALLENGE #1

Mark and John are trying to compair their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (you can even implement both versions).
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark 
   has a higher BMI than John.

TEST DATA 1: Mark weighs 78kg and is 1.69m tall. John weighs 92kg and is 1.95m tall.
TEST DATA 2: Mark weighs 95kg and is 1.88m tall. John weighs 85kg and is 1.76m tall.


GOOD LUCK!
*/

/*
SOLUTION: 
let weightOfMark = 78;
let heightOfMark = 1.69;

let weightOfJohn = 92;
let heightOfJohn = 1.95;

console.log("TEST DATA 1: ");

let BMIOfMark = Math.round(weightOfMark / (heightOfMark ** 2));
console.log("weight of Mark: " + weightOfMark);
console.log("height of Mark: " + heightOfMark);
console.log("BMI of Mark: " + BMIOfMark);

let BMIOfJohn = Math.round(weightOfJohn / (heightOfJohn ** 2));
console.log("weight of John: " + weightOfJohn);
console.log("height of John: " + heightOfJohn);
console.log("BMI of John: " + BMIOfJohn)

let markHigherBMI = BMIOfMark > BMIOfJohn;
console.log("Does Mark have a higher BMI than John?: " + markHigherBMI);


weightOfMark = 95;
heightOfMark = 1.88;

weightOfJohn = 85;
heightOfJohn = 1.76;

console.log("TEST DATA 2: ");
BMIOfMark = Math.round(weightOfMark / (heightOfMark ** 2));
console.log("weight of Mark: " + weightOfMark);
console.log("height of Mark: " + heightOfMark);
console.log("BMI of Mark: " + BMIOfMark);

BMIOfJohn = Math.round(weightOfJohn / (heightOfJohn ** 2));
console.log("weight of John: " + weightOfJohn);
console.log("height of John: " + heightOfJohn);
console.log("BMI of John: " + BMIOfJohn)

markHigherBMI = BMIOfMark > BMIOfJohn;
console.log("Does Mark have a higher BMI than John?: " + markHigherBMI);
*/
//////////////////////////////////////////////////////////////////////////////////////////



/* STRINGS AND TEMPLATE LITERALS
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '.'; 
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(jonasNew);

console.log(`just a regular string....`);


// old javascript
console.log('String with \n\
multiple \n\
lines' );

// ES6
console.log(`String with
multiple 
lines`);
*/



/* if/else STATEMENTS
const age = 15;

if(age >= 18) {
  console.log(`Sarah can start driving license 🏎`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years. 👌🏿`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else if (birthYear >= 2000) {
  century = 21;
}

console.log(century);
*/



//////////////////////////////////////////////////////////////////////////////////////////
/*
CODING CHALLENGE #1

Mark and John are trying to compair their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

TEST DATA 1: Mark weighs 78kg and is 1.69m tall. John weighs 92kg and is 1.95m tall.
TEST DATA 2: Mark weighs 95kg and is 1.88m tall. John weighs 85kg and is 1.76m tall.


1. Print a nice output to the console, saying who has the higher BMI. The message can be 
   either "Mark's BMI is higher than John's" or "John's BMI is higher than Mark's"

2. Use a template string to include the BMI values as the outputs.
   Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement

GOOD LUCK!
*/

/*
SOLUTION: 
let markBMI = Math.round(78 / (1.69 ** 2));
let johnBMI = Math.round(92 / (1.95 ** 2));

console.log(`For Test Data 1: `);
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`);
} else if (markBMI < johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is less than John's (${johnBMI}).`);
} else {
  console.log(`Mark's BMI (${markBMI}) is equal to John's (${johnBMI}).`);
}

markBMI = Math.round(95 / (1.88 ** 2));
johnBMI = Math.round(85 / (1.76 ** 2));
console.log(`For Test Data 2: `);
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`);
} else if (markBMI < johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is less than John's (${johnBMI}).`);
} else {
  console.log(`Mark's BMI (${markBMI}) is equal to John's (${johnBMI}).`);
}
*/
//////////////////////////////////////////////////////////////////////////////////////////



/* TYPE CONVERSION AND COERCIONS
// type conversion ***
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23), 23);


// type coercion ***
console.log(`I am ${23} years old.`);
console.log(`I am ${'23'} years old.`);

console.log('23' - '10' - 3);

// careful of concatenation (+) sign
console.log('23' + '10' + 3);

console.log('23' * '2');

console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/


/* TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(-1));
console.log(Boolean([]));

const money = 0;
if (money) {
  console.log(`Don't spend it all.`);
} else {
  console.log(`Ask for foodstamps.`);
}

let height;
if (height) {
  console.log(`Height has a value.`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/


/* EQUALITY OPERATORS: == VS ===
const age = 18;
// strict equality operator (does not perform type coercion)
// both values must be exactly the same
if (age === 18) console.log(`You just became an adult (strict)`);

// loose equality operator (performs type coercion)
// converts for example a string to a number and compares it with 
// the other number if they are the same.
if (age == '18') console.log(`You just became an adult (loose)`);

const favoriteNumber = Number(prompt(`What is your favorite number?`));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if (favoriteNumber === 23) { // '23' == 23
  console.log(`Cool! 23 is an amazing number`);
} else if (favoriteNumber === 7) {
  console.log(`7 is also a cool number!`);
} else if (favoriteNumber === 9) {
  console.log(`9 is also a cool number`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favoriteNumber !== 23) console.log(`Why not 23?`);
*/


/* BOOLEAN LOGIC
AND - &&
OR - ||
NOT - !
*/

/* LOGICAL OPERATORS
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}


const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}
*/



//////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times. The winner 
with the highest average score wins the trophy!

1. Calculate the average score for each team, using 
the test data below
2. Compare the team's average scores to determine the winner 
of the competition, and print it to the console. Don't forget
that there can be a draw, so test for that as well (draw means they have
  the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this
rule, a team only wins if it has a higher score than the other team, and the 
same time a score of at least 100 points. HINT: Use a logical
operator to test for minimum score, as well as multiple else-if blocks.

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens
when both teams have the same score and both have a score greater or
equal to 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Koalas score 109, 95, and 123
TEST DATA BONUS 2: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 106.

GOOD LUCK 
*/

/* SOLUTION:
console.log(`TEST DATA: `);
let averageScoreDolphins = (96 + 108 + 89) / 3;
let averageScoreKoalas = (88 + 91 + 110) / 3;

if (averageScoreKoalas > averageScoreDolphins) {
  console.log(`Koalas are the winner!`);
} else if (averageScoreKoalas < averageScoreDolphins) {
  console.log(`Dolphines are the winner!`);
} else if (averageScoreKoalas === averageScoreDolphins) {
  console.log(`The match is a draw!`);
}


console.log(`TEST DATA BONUS 1: `);
averageScoreDolphins = (97 + 112 + 101) / 3;
averageScoreKoalas = (109 + 95 + 123) / 3;

if(averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
  console.log(`Koalas are the winners!`);
} else if (averageScoreKoalas < averageScoreDolphins && averageScoreDolphins >= 100) {
  console.log(`Dolphins are the winners!`);
} else {
  console.log(`The game is a draw!`);
}


console.log(`TEST DATA BONUS 2: `);
averageScoreDolphins = (97 + 112 + 101) / 3;
averageScoreKoalas = (109 + 95 + 106) / 3;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log(`Dolphins are the winners!`);
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
  console.log(`Koalas are the winners!`);
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 & averageScoreKoalas >= 100) {
  console.log(`Both team wins!`);
} else {
  console.log(`There are no winners!`);
}

*/
//////////////////////////////////////////////////////////////////////////////////////////


/* SWITCH STATEMENT
const day = 'monday';

switch(day) {
  case 'monday':
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case 'tuesday':
    console.log(`Prepare theory videos`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`);
    break;
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend!'); 
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === 'monday') {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
  console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
  console.log(`Write code examples`);
} else if (day === 'friday') {
  console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log(`Not a valid day!`);
}
*/


/* THE CONDITIONAL (TERNARY) OPERATOR - if else statement but all in one line

// const age = 23;
// age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water.`);

// const drink = age >= 18 ? `wine 🍷` : 'water 💧';
// console.log(drink);

// let drink2;

// if (age >= 18) {
//   drink2 = `wine 🍷`;
// } else {
//   drink2 = 'water 💧';
// }

// console.log(drink2);

// // THE TERNARY OPERATOR IS AN EXPRESSION
// // SO THIS IS VALID.
// console.log(`I like to drink ${age >= 18 ? `wine 🍷` : 'water 💧'}`);

*/

//////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever
he goes eating in a restaurant. In his country, it's usual
to tip 15% if the bill value is between 50 and 300. if the value is 
different, the tip is 20%.

1. Your task is to calculate the tip depending on the bill value.
   Create a variable called 'tip' for this. It's not allowed to use an
   if/else statement (If it's easier for you, you can start with an if/else 
   statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the
   final value (bill + tip).
   Example: 'The bill was 275, the tip was 41.25, and the total value is 316.25'

TEST DATA: Test for bill values 275, 40 and 430
*/

/* SOLUTION:
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * .20;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.20;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.20;

console.log(`The first bill is ${bill1}, the tip is ${tip1}, and the total value is ${bill1 + tip1}`);
console.log(`The first bill is ${bill2}, the tip is ${tip2}, and the total value is ${bill2 + tip2}`);
console.log(`The first bill is ${bill3}, the tip is ${tip3}, and the total value is ${bill3 + tip3}`);
*/

//////////////////////////////////////////////////////////////////////////////////////////
