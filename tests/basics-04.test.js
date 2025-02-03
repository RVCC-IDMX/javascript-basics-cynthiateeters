/*
 * @file: basics-04.test.js
 * @title: Arithmetic in JavaScript, The Math Object, & Type Conversion
 *
 * Instructor Note:
 *   - This assignment introduces basic arithmetic operations, usage of the Math object,
 *     and type conversion in JavaScript.
 *   - Each SKILL section contains clear instructions (TODO comments) for one or more lines
 *     of code that the students need to fill in.
 *   - Students should run the tests using Vitest (for example, by running "npm test" if your
 *     package.json is set up accordingly).
 *   - ESLint rules are disabled to reduce distractions for beginners.
 *
 * Overview:
 *   In this assignment you will:
 *     - Declare numeric constants and perform arithmetic.
 *     - Use Math.random() to generate random numbers.
 *     - Create random integers using Math.floor().
 *     - Use Math methods (floor, round) to round numbers appropriately.
 *     - Convert strings to numbers using parseInt and the unary + operator.
 *     - Convert numbers to strings using .toFixed() to control decimal precision.
 */

/* ==============================
   SKILL 1: Simple Arithmetic on Numbers 🍎
   ==============================
   TODO: Use the const keyword to declare:
   - a with any number value.
   - b with a different number value.
   - c assigned to the sum of a and b.
*/
const a = 10;
const b = 5;
const c = a + b;

// * Don't mess with the test code below here!
test('arithmetic sum', () => {
  expect(typeof a).toBe('number');
  expect(() => {
    a = '🙉';
  }).toThrow();
  expect(typeof b).toBe('number');
  expect(() => {
    b = '🙉';
  }).toThrow();
  expect(typeof c).toBe('number');
  expect(() => {
    c = '🙉';
  }).toThrow();
  expect(c).toEqual(a + b);
});

/* ==============================
   SKILL 2: Creating a Random Floating-Point Number 🍎
   ==============================
   TODO: Use the Math object to assign a random number to a variable called rnd.
*/
const rnd = Math.random();

// * Don't mess with the test code below here!
test('rnd', () => {
  expect(typeof rnd).toBe('number');
  expect(rnd).toBeGreaterThanOrEqual(0);
  expect(rnd).toBeLessThan(1);
});

/* ==============================
   SKILL 3: Creating a Random Integer 🍎
   ==============================
   TODO: Use the Math object to assign a random integer to a variable called randomInt,
   ensuring it is between 0 and 5 (use Math.floor appropriately).
*/
const randomInt = Math.floor(Math.random() * 5);

// * Don't mess with the test code below here!
vi.spyOn(global.Math, 'random').mockReturnValue(0.9);
vi.spyOn(global.Math, 'random').mockRestore();
test('randomInt', () => {
  expect(typeof randomInt).toBe('number');
  expect(randomInt).toBeGreaterThanOrEqual(0);
  expect(randomInt).toBeLessThan(5);
  expect([0, 1, 2, 3, 4]).toContain(randomInt);
  expect(randomInt).not.toBeGreaterThanOrEqual(5);
  expect(randomInt).not.toBeLessThan(0);
});

/* ==============================
   SKILL 4: Rounding Down a Number with Math.floor() 🍎
   ==============================
   TODO:
   - Declare a constant called num and assign it the value 17.89.
   - Declare a variable called numRounded and assign it the value of num rounded down (use Math.floor).
*/
const num = 17.89;
let numRounded = Math.floor(num);

// * Don't mess with the test code below here!
test('numRounded', () => {
  expect(() => {
    num = '🙈';
  }).toThrow();
  expect(typeof num).toBe('number');
  expect(num).toBeCloseTo(17.89);
  expect(typeof numRounded).toBe('number');
  expect(numRounded).toBe(17);
});

/* ==============================
   SKILL 5: Rounding to Nearest Integer 🍎
   ==============================
   TODO:
   1. Declare a variable called rounding1 (using let) with the value 5.95 and round it.
   2. Declare a variable called rounding2 (using let) with the value 5.5 and round it.
   3. Declare a variable called rounding3 (using let) with the value 5.05 and round it.
*/
let rounding1 = Math.round(5.95);
let rounding2 = Math.round(5.5);
let rounding3 = Math.round(5.05);

// * Don't mess with the test code below here!
test('rounding', () => {
  expect(typeof rounding1).toBe('number');
  expect(rounding1).toBe(6);
  expect(typeof rounding2).toBe('number');
  expect(rounding2).toBe(6);
  expect(typeof rounding3).toBe('number');
  expect(rounding3).toBe(5);
});

/* ==============================
   SKILL 6: Converting a String to a Number using parseInt() 🍎
   ==============================
   TODO:
   - Declare a variable called orderBagels (using let) and assign it the string '13 is a Baker\'s Dozen'.
   - Declare a constant called bakersDozen and assign it the result of parseInt(orderBagels).
*/
let orderBagels = "13 is a Baker's Dozen";
const bakersDozen = parseInt(orderBagels);

// * Don't mess with the test code below here!
test('bakersDozen', () => {
  expect(() => {
    bakersDozen = '🙈';
  }).toThrow();
  expect(typeof orderBagels).toBe('string');
  expect(orderBagels).toMatch(/^13 is a Baker's Dozen$/);
  expect(typeof bakersDozen).toBe('number');
  expect(bakersDozen).toBe(13);
});

/* ==============================
   SKILL 7: Converting a Number to a String using .toFixed() 🍎
   ==============================
   TODO:
   - Declare a constant called myPi (using const) and assign it the value 3.141592653589793.
   - Declare a constant called myPiFixed (using const) and assign it the result of myPi.toFixed(4).
*/
const myPi = 3.141592653589793;
const myPiFixed = myPi.toFixed(4);

// * Don't mess with the test code below here!
test('myPiFixed', () => {
  expect(() => {
    myPi = '🙈';
  }).toThrow();
  expect(() => {
    myPiFixed = '🙊';
  }).toThrow();
  expect(typeof myPi).toBe('number');
  expect(myPi).toBeCloseTo(3.141592653589793);
  expect(typeof myPiFixed).toBe('string');
  expect(myPiFixed).toMatch(/^3.1416$/gm);
});

/* ==============================
   SKILL 8: Converting a String to a Number using the Unary + Operator 🍎
   ==============================
   TODO:
   - Using the let keyword, declare a variable called sliceOfPi and assign it to the value of myPiFixed converted to a number using the unary + operator.
*/
let sliceOfPi = +myPiFixed;

// * Don't mess with the test code below here!
test('sliceOfPi', () => {
  expect(() => {
    myPiFixed = '🙊';
  }).toThrow();
  expect(typeof sliceOfPi).toBe('number');
  expect(sliceOfPi).toBeCloseTo(3.1416);
});

/* ==============================
   RECAP & CHALLENGE
   ==============================
   Key Concepts Covered:
     - Basic arithmetic with numbers and immutability using const.
     - Using the Math object for generating random numbers and rounding.
     - Converting between strings and numbers using parseInt, .toFixed(), and the unary + operator.

   Challenge Question:
     - What are the potential pitfalls of type conversion in JavaScript (for example, using parseInt on a string that starts with a number but contains non-numeric characters)?
     (Discuss the behavior of parseInt, parseFloat, and the unary + operator in different scenarios.)
*/
