/*
 * @file: basics-01.test.js
 * @title: Variable Declarations and Assignments
 *
 * Instructor Note:
 *   - This file is designed as a step-by-step assignment for students who are just beginning to study JavaScript.
 *   - Students must fill in the missing code in the sections marked with TODO.
 *   - Run the tests using Vitest (for example, via "npm test" if your package.json is set up accordingly).
 *   - ESLint rules are disabled here to reduce distractions for beginners. In a production project, these rules would be enforced.
 *
 * Overview:
 *   Binding a name to a value gives us a way to refer to that value in our programs.
 *   When we assign a value to a variable, that value may vary as the program runs.
 *   Constants are used when a value should not change.
 *   This assignment covers declaring variables, assigning values, and understanding uninitialized values.
 */

/* ==============================
   SKILL 1: Declare a variable 🍎
   ==============================
   Explanation:
   - When you use the let keyword without an initial value, the variable is declared but its value is undefined.
   - This teaches that declaration does not equal assignment.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to declare a variable called myName and do NOT assign it a value.
*/
let myName; // myName is declared but not assigned, so its value is undefined

// * Don't mess with the test code below here!
test('myName', () => {
  expect(myName).toBeUndefined();
  expect(typeof myName).toBe('undefined');
});

/* ==============================
   SKILL 2: Assign a value to a variable 🍎
   ==============================
   Explanation:
   - Use the let keyword to create a variable that holds a number.
   - This skill reinforces that variables are mutable and can store number literals.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called age and assign it the number literal 22.
*/
let age = 22; // age is assigned the number literal 22

// * Don't mess with the test code below here!
test('age', () => {
  expect(age).toBe(22);
  expect(typeof age).toBe('number');
});

/* ==============================
   SKILL 3: Declare and assign a constant 🍎
   ==============================
   Explanation:
   - Constants declared with const must be assigned a value immediately.
   - They are immutable; attempting to reassign will throw an error.

   TODO: This skill requires 1 line of code.
   TODO: Use the const keyword to create a constant called daysInWeek and assign it the number literal 7.
*/
const daysInWeek = 7; // daysInWeek is declared as a constant and set to 7

// * Don't mess with the test code below here!
test('daysInWeek', () => {
  expect(() => {
    // Prove immutability by attempting to reassign
    daysInWeek = '🙉';
  }).toThrow();
  expect(typeof daysInWeek).toBe('number');
  expect(daysInWeek).toBe(7);
});

/* ==============================
   SKILL 4: Understanding the difference between let and const 🍎
   ==============================
   Explanation:
   - Let creates a mutable variable; const creates an immutable constant.
   - This exercise demonstrates copying the value from one variable to another.

   TODO: This skill requires 2 lines of code.
   TODO: In the first line, declare a variable called myWorkDays using let.
   TODO: In the second line, assign myWorkDays the value of the constant daysInWeek.
   TODO: DO NOT use the number literal 7 directly.
*/
let myWorkDays;
myWorkDays = daysInWeek; // myWorkDays now holds the value of daysInWeek

// * Don't mess with the test code below here!
test('myWorkDays', () => {
  expect(typeof myWorkDays).toBe('number');
  expect(myWorkDays).toBe(daysInWeek);
  expect(myWorkDays).toBe(7);
});

/* ==============================
   SKILL 5: Understanding uninitialized variables & NaN 🍎
   ==============================
   Explanation:
   - Variables declared without assignment are automatically initialized to undefined.
   - Performing arithmetic on undefined results in NaN (Not a Number), which is a special numeric value.
   - NaN does not equal any value, including itself.

   TODO: This skill requires 3 lines of code.
   TODO: In the first line, declare a variable called oops and leave it undefined.
   TODO: In the second line, create a variable called sillyMath and leave it undefined.
   TODO: In the third line, assign sillyMath to the product of oops multiplied by 2.
   TODO: (Use the * operator for multiplication.)
*/
let oops;               // oops is declared but remains undefined
let sillyMath;          // sillyMath is declared
sillyMath = oops * 2;   // multiplying undefined by 2 results in NaN

// * Don't mess with the test code below here!
test('sillyMath', () => {
  expect(oops).toBeUndefined();
  expect(typeof sillyMath).toBe('number');
  expect(sillyMath).toBeNaN();
});

/* ==============================
   SKILL 6: Understanding uninitialized variables & concatenation 🍎
   ==============================
   Explanation:
   - When undefined is concatenated to a string, JavaScript converts undefined to the string "undefined".

   TODO: This skill requires 2 lines of code.
   TODO: You already have an undefined variable called oops; leave it undefined.
   TODO: In the first line, create a variable called sillyString and leave it undefined.
   TODO: In the second line, assign sillyString to the string 'Hello, ' concatenated with oops.
*/
let sillyString;
sillyString = 'Hello, ' + oops;  // 'oops' is undefined, so the result is 'Hello, undefined'

// * Don't mess with the test code below here!
test('sillyString', () => {
  expect(oops).toBeUndefined();
  expect(typeof sillyString).toBe('string');
  expect(sillyString).toBe('Hello, undefined');
});

/* ==============================
   PRACTICE SECTION 🍎🍎🍎
   ==============================
   For additional practice, create the following variables/constants.
   TODO: Create a variable (using let) called year and assign it the value 2022.
   TODO: Create a variable called firstName and assign it the string 'John'.
   TODO: Create a constant called taxRate and assign it the value 0.2.
   (Make sure to use let for variables and const for constants.)
*/
let year = 2022;
let firstName = 'John';
const taxRate = 0.2;

// * Don't mess with the test code below here!
test('year', () => {
  expect(year).toBe(2022);
  expect(typeof year).toBe('number');
});

test('firstName', () => {
  expect(firstName).toBe('John');
  expect(typeof firstName).toBe('string');
});

test('taxRate', () => {
  expect(taxRate).toBe(0.2);
  expect(typeof taxRate).toBe('number');
});

/* ==============================
   RECAP & REVIEW
   ==============================
   Key concepts covered:
     - Declaring variables with let vs. const.
     - The difference between declaring a variable and assigning a value.
     - How uninitialized variables behave in arithmetic operations (resulting in NaN).
     - How undefined values are concatenated with strings.

   Challenge Question:
     - Why does multiplying an undefined variable result in NaN, and why does NaN not equal any value, including itself?
     (Discuss with your peers or research the IEEE 754 standard for floating-point arithmetic.)
*/
