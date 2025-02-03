/*
 * @file: js-basic-03.test.js
 * @title: Boolean, Truthy, Falsy, Undefined, Null
 *
 * Instructor Note:
 *   - This file introduces basic concepts around boolean values, truthy/falsy,
 *     undefined, and null in JavaScript.
 *   - Each SKILL section explains a specific concept and provides a TODO for
 *     students to fill in one or two lines of code.
 *   - Run the tests using Vitest (for example, via "npm test" if your package.json
 *     has an appropriate test script).
 *   - ESLint rules are disabled to keep focus on learning the language basics.
 *
 * Overview:
 *   - Boolean values: The only two possible values are true and false.
 *   - Falsy values: undefined, null, 0, -0, NaN, and the empty string are all falsy.
 *   - Truthy values: Anything that is not falsy.
 *   - Undefined: A variable that is declared but not assigned.
 *   - Null: A special value representing no value.
 *   - The ! operator: Inverts a boolean value, and double-bang (!!) converts any
 *     value to a true boolean.
 */

/* ==============================
   SKILL 1: Understanding boolean values 🍎
   ==============================
   Explanation:
   - JavaScript provides the reserved words true and false that evaluate to the
   - boolean values true and false, respectively.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to declare a variable called isSeptember and assign it
   TODO: to the boolean value true.
*/
let isSeptember = true;

// * Don't mess with the test code below here!
test('isSeptember', () => {
  expect(isSeptember).toBe(true);
  expect(typeof isSeptember).toBe('boolean');
  expect(isSeptember).toBeTruthy();
});

/* ==============================
   SKILL 2: Understanding falsy 🍎
   ==============================
   Explanation:
   - In JavaScript, certain values are considered falsy (i.e. they evaluate to false
   - when used in a boolean context). These include undefined, null, 0, -0, NaN,
   - and the empty string.
   - Note: Do not use the literal false here.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called isFalsy and assign it to
   TODO: any one of the six falsy types of your choice.
*/
let isFalsy = '';  // using empty string (falsy)

// * Don't mess with the test code below here!
test('isFalsy', () => {
  expect(isFalsy).toBeFalsy();
  expect(typeof isFalsy).not.toBe('boolean');
});

/* ==============================
   SKILL 3: Understanding truthy 🍎
   ==============================
   Explanation:
   - Any value that is not falsy is considered truthy. In this exercise, you must
   - choose any truthy value (other than using the reserved word true).

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called isTruthy and assign it
   TODO: any truthy value (but do not use the literal true).
*/
let isTruthy = "yes";  // non-empty string is truthy

// * Don't mess with the test code below here!
test('isTruthy', () => {
  expect(isTruthy).toBeTruthy();
  expect(typeof isTruthy).not.toBe('boolean');
});

/* ==============================
   SKILL 4: Understanding undefined 🍎
   ==============================
   Explanation:
   - A variable that is declared without an assignment is automatically initialized
   - to undefined. The reserved word undefined is the only value of type undefined.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to declare a variable called notAssigned and leave it
   TODO: unassigned.
*/
let notAssigned;  // declared without assignment

// * Don't mess with the test code below here!
test('notAssigned', () => {
  expect(notAssigned).toBeUndefined();
  expect(notAssigned).toBeFalsy();
  expect(typeof notAssigned).toBe('undefined');
});

/* ==============================
   SKILL 5: Understanding null 🍎
   ==============================
   Explanation:
   - null is a special value representing the intentional absence of any object value.
   - It is the only value of type null, and although its type is "object", it is falsy.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to declare a variable called bloop and assign it to null.
*/
let bloop = null;

// * Don't mess with the test code below here!
test('bloop', () => {
  expect(bloop).toBeNull();
  expect(bloop).toBeFalsy();
  expect(typeof bloop).toBe('object');
});

/* ==============================
   SKILL 6: Understanding the ! operator 🍎
   ==============================
   Explanation:
   - The ! operator (bang operator) inverts a boolean value.
   - In this case, using !isSeptember will yield the opposite boolean value.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to declare a variable called notSeptember and assign it
   TODO: to the boolean value of !isSeptember.
*/
let notSeptember = !isSeptember;

// * Don't mess with the test code below here!
test('notSeptember', () => {
  expect(notSeptember).toBeFalsy();
  expect(typeof notSeptember).toBe('boolean');
});

/* ==============================
   SKILL 7: Using the !! operator for boolean conversion 🍎
   ==============================
   Explanation:
   - The !! operator converts any value to a boolean: truthy values become true,
   - and falsy values become false.
   - Here we use it to convert an empty string to a boolean.

   TODO: This skill requires 2 lines of code.
   TODO: Create a variable called user and assign it to an empty string (using single quotes).
   TODO: Use the let keyword to declare a variable called isLoggedIn and assign it the boolean value of !!user.
*/
let user = '';
let isLoggedIn = !!user;

// * Don't mess with the test code below here!
test('isLoggedIn', () => {
  expect(isLoggedIn).toBe(false);
  expect(typeof isLoggedIn).toBe('boolean');
});

/* ==============================
   RECAP & CHALLENGE
   ==============================
   Key Concepts Covered:
     - Boolean values (true and false)
     - Falsy values (undefined, null, 0, -0, NaN, empty string) and truthy values
     - The special nature of undefined and null in JavaScript
     - How the ! operator and !! operator work for boolean conversion

   Challenge Question:
     - Discuss why the typeof null is "object" in JavaScript, and what historical reasons might explain this behavior.
     (Research the ECMAScript specification or ask your instructor.)
*/
