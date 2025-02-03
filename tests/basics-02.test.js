/*
 * @file: basics-02.test.js
 * @title: Strings - Literal, Length, Concatenation, Template Literal
 *
 * Instructor Note:
 *   - This file is designed for students beginning to learn JavaScript.
 *   - Each "SKILL" section contains a small challenge where you must fill in the missing code.
 *   - Run the tests using Vitest (for example, "npm test" if your package.json has a test script).
 *   - ESLint rules are disabled here to reduce distractions for beginners.
 *
 * Overview:
 *   In JavaScript, strings represent text. They are immutable sequences of 16-bit values (usually Unicode).
 *   This assignment covers:
 *     1. Declaring a string literal.
 *     2. Creating an empty string.
 *     3. Working with string length.
 *     4. Zero-based indexing.
 *     5. Using escape sequences.
 *     6. Concatenation using the + operator.
 *     7. Template literals with ${} for interpolation.
 *     8. Understanding string immutability.
 */

/* ==============================
   SKILL 1: Declare a string literal 🍎
   ==============================
   Explanation:
   - Strings can be declared with single quotes, double quotes, or backticks.
   - In this class, we default to single quotes when not using template literals.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called myClass and assign it the string literal 'JavaScript is Awesome!'.
*/
let myClass = 'JavaScript is Awesome!';

// * Don't mess with the test code below here!
test('myClass', () => {
  expect(typeof myClass).toBe('string');
  expect(myClass).toMatch(/^JavaScript is Awesome!$/gm);
});

/* ==============================
   SKILL 2: Assign an empty string literal to a variable 🍎
   ==============================
   Explanation:
   - The empty string is a string with a length of 0.
   - Remember to use single quotes for an empty string.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called emptyString and assign it an empty string.
*/
let emptyString = '';

// * Don't mess with the test code below here!
test('emptyString', () => {
  expect(typeof emptyString).toBe('string');
  expect(emptyString).toHaveLength(0);
});

/* ==============================
   SKILL 3: Understanding the length of a string 🍎
   ==============================
   Explanation:
   - The length property of a string returns the number of 16-bit characters it contains.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called petName and assign it any string with exactly 6 alphanumeric characters.
*/
let petName = 'Abc123';

// * Don't mess with the test code below here!
test('petName', () => {
  expect(typeof petName).toBe('string');
  expect(petName).toMatch(/^[a-zA-Z0-9]{6}$/);
});

/* ==============================
   SKILL 4: Understanding zero-based indexing 🍎
   ==============================
   Explanation:
   - Strings are zero-indexed: the first character is at index 0.

   TODO: This skill requires 1 line of code.
   TODO: Use the const keyword to create a constant called firstLetterIsA and assign it any word that starts with a capital A.
*/
const firstLetterIsA = 'Apple';

// * Don't mess with the test code below here!
test('firstLetterIsA', () => {
  expect(typeof firstLetterIsA).toBe('string');
  expect(firstLetterIsA[0]).toBe('A');
});

/* ==============================
   SKILL 5: Understanding escape sequences 🍎
   ==============================
   Explanation:
   - The backslash (\) introduces an escape sequence in a string.
   - In this case, we want a horizontal tab between the words "one" and "two".

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called counting and assign it the 7-character string literal 'one two'
   TODO: Ensure that the character between 'one' and 'two' is an escaped horizontal tab (\t), not a space.
*/
let counting = 'one\ttwo';

// * Don't mess with the test code below here!
test('counting', () => {
  expect(typeof counting).toBe('string');
  expect(counting).toHaveLength(7);
  expect(counting).toMatch(/^one\ttwo$/gm);
});

/* ==============================
   SKILL 6: Understanding the concatenation operator for strings 🍎
   ==============================
   Explanation:
   - Using the + operator on strings concatenates (joins) them.
   - Here, you will concatenate the literal 'Hello, ' with the variable petName.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called mySentence and assign it to 'Hello, ' concatenated with petName.
*/
let mySentence = 'Hello, ' + petName;

// * Don't mess with the test code below here!
test('mySentence', () => {
  expect(typeof mySentence).toBe('string');
  expect(mySentence).toHaveLength(13);
  expect(mySentence).toMatch(/^Hello, \w+$/gm);
});

/* ==============================
   SKILL 7: Understanding the template literal 🍎
   ==============================
   Explanation:
   - Template literals (delimited by backticks) allow for string interpolation with the ${} syntax.
   - Use this syntax to include variables directly within a string.

   TODO: This skill requires 1 line of code.
   TODO: Use the let keyword to create a variable called helloPet and assign it to a template literal
   TODO: that starts with 'Hello, ' and then includes petName using ${}.
*/
let helloPet = `Hello, ${petName}`;

// * Don't mess with the test code below here!
test('helloPet', () => {
  expect(typeof helloPet).toBe('string');
  expect(helloPet).toHaveLength(13);
  expect(helloPet).toMatch(/^Hello, \w+$/gm);
});

/* ==============================
   SKILL 9: Understanding string immutability 🍎
   ==============================
   Explanation:
   - Strings are immutable in JavaScript; you cannot change a string's content once created.
   - Although variables declared with let can be reassigned, constants declared with const cannot.

   TODO: This skill requires 2 lines of code.
   TODO: In line 1, use the let keyword to create a variable called thisMonth and assign it the string 'I dunno!'.
   TODO: In line 2, reassign thisMonth to the string 'September'.
   NOTE: The test ensures that thisMonth no longer equals 'I dunno!'.
*/
let thisMonth = 'I dunno!';
thisMonth = 'September';

// * Don't mess with the test code below here!
test('thisMonth', () => {
  expect(typeof thisMonth).toBe('string');
  expect(thisMonth).toHaveLength(9);
  expect(thisMonth).not.toMatch(/^I dunno!$/gm);
  expect(thisMonth).toBe('September');
});

/* ==============================
   PRACTICE SECTION 🍎🍎🍎
   ==============================
   Additional practice: create variables using both literals and template literals.

   TODO:
     - Create a variable named year and set it to 2001.
     - Create a variable called firstName and set it to 'John'.
     - Create a variable called lastName and set it to 'Smith'.
     - Create a variable called message using a template literal that results in:
       'Hi, my name is John Smith and I was born in 2001'
*/
let year = 2001;
let firstName = 'John';
let lastName = 'Smith';
let message = `Hi, my name is ${firstName} ${lastName} and I was born in ${year}`;

// * Don't mess with the test code below here!
test('creating a message', () => {
  expect(typeof message).toBe('string');
  expect(message).toMatch(/^Hi, my name is John Smith and I was born in 2001$/gm);
});

/*
   TODO:
     - Create a variable called tax and set it to 8.25.
     - Create a variable called price and set it to 100.
     - Create a variable called total using a template literal such that it results in:
       'Your total including tax is $108.25'
     - Hint: Use the expression ${price + tax} inside the template literal.
*/
let tax = 8.25;
let price = 100;
let total = `Your total including tax is $${price + tax}`;

// * Don't mess with the test code below here!
test('creating a total', () => {
  expect(typeof total).toBe('string');
  expect(total).toMatch(/^Your total including tax is \$108.25$/gm);
});

/*
   TODO:
     - Create a variable called heading1 and set it to 'JavaScript'.
     - Create a variable called heading2 and set it to 'HTML'.
     - Create a variable called html using a template literal such that it results in:
       '<h1>JavaScript</h1><h2>HTML</h2><p>This is a paragraph</p>'
*/
let heading1 = 'JavaScript';
let heading2 = 'HTML';
let html = `<h1>${heading1}</h1><h2>${heading2}</h2><p>This is a paragraph</p>`;

// * Don't mess with the test code below here!
test('html', () => {
  expect(typeof html).toBe('string');
  expect(html).toMatch(/^<h1>JavaScript<\/h1><h2>HTML<\/h2><p>This is a paragraph<\/p>$/gm);
});

/* ==============================
   RECAP & REVIEW
   ==============================
   Key concepts covered:
     - Declaring string literals using single quotes.
     - Creating an empty string.
     - Understanding string length and zero-based indexing.
     - Using escape sequences (e.g. \t for tab).
     - Concatenating strings using +.
     - Using template literals for interpolation.
     - Understanding the immutability of strings.

   Challenge Question:
     - Why are JavaScript strings immutable, and what are some practical implications of string immutability when manipulating text?
     (Discuss with your peers or research the benefits of immutability in functional programming.)
*/
