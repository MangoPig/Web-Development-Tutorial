# Javascript Basics

- [Javascript Basics](#javascript-basics)
  - [Lesson Video](#lesson-video)
  - [Variables](#variables)
    - [Variable Types](#variable-types)
      - [String](#string)
        - [Escape Characters](#escape-characters)
        - [Concatenation (Adding/Multiplying Strings)](#concatenation-addingmultiplying-strings)
        - [String Indexing](#string-indexing)
        - [Methods](#methods)
          - [length](#length)
          - [includes](#includes)
          - [slice](#slice)
          - [toLowerCase / toUpperCase](#tolowercase--touppercase)
          - [trim](#trim)
          - [toString](#tostring)
      - [Number](#number)
        - [NaN (Not a Number)](#nan-not-a-number)
        - [Infinity](#infinity)
      - [Boolean](#boolean)
      - [Undefined](#undefined)
      - [Null](#null)
      - [Object](#object)
        - [Array](#array)
  - [Comments](#comments)
  - [Operators](#operators)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Assignment Operators](#assignment-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
  - [Conditionals](#conditionals)
    - [If Else Statements](#if-else-statements)
    - [Ternary Operator](#ternary-operator)
    - [Switch](#switch)
  - [Functions](#functions)
    - [Variable Scopes](#variable-scopes)
    - [Arrow Function](#arrow-function)
  - [Loops](#loops)
    - [For Loop](#for-loop)
      - [For/In Loop](#forin-loop)
    - [While Loop](#while-loop)
      - [Do/While Loop](#dowhile-loop)
  - [Exercise](#exercise)

## Lesson Video

> :construction: Lesson Video on its way

<!-- [![Watch the video](https://img.youtube.com/vi/TPrnSACiTJ4/maxresdefault.jpg)](https://youtu.be/TPrnSACiTJ4) -->

> Throughout this lecture. You can type `node` in your CLI (Command Line) (Terminal) to test the example codes and see it run for yourself. Do `Ctrl + C` to exit out of the node testing and run `node` again to restart if the output isn't as expected

## Variables

Imagine there's a value that we want to keep track of that we would use throughout the code. We would want to store that variable somewhere in the memory of the computer so we can use it anytime. That's where **variables** comes in. Variables are containers for storing data. After we stored it in the container, we are free to do whatever operations we would want on the value.

To declare a variable in Javascript, the follow syntax is used:

> Try to avoid using var and use `const` or `let` instead to specify whether a variable is a constant or not.

``` Javascript
var variableName = variableValue
```

Since 2015, Javascript introduced two new ways to declare variables. Using `const` and `let`. `const` declares that the value for the variable will not change throughout the program (Making it a `constant`)

``` Javascript
const variableName = variableValue
```

`let` keyword tells Javascript that the value for the variable declared will be operated on and changed throughout the code.

``` Javascript
let variableName = variableValue

// Reassign new value by doing:
variableName = newValue
```

You can also declare a variable without value. If that's the case the value would be defaulted to `undefined`

``` Javascript
let variableName    // variableName's value = undefined
```

### Variable Types

Every variable has a type that defines what kind of data the variable stores. To simplify things, Javascript's variable are **dynamically typed**. Meaning that the Javascript language automatically determines the variables' data type for you. Despite that, it's better to explicitly tell Javascript what type of variable you're using to avoid running into runtime or other unexpected errors.

(We will get into typing variables in future sections in **Typescript**)

For now, lets just learn the different types that exists and what we can do with them.

#### String

The `string` variable type is used to store text in Javascript. It is identified by using **" (Double Quotes)**, **' (Single Quotes)**, **` (Backticks)**

``` Javascript
"Hello World"
```

``` Javascript
'Single Quoted String'
```

Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with `${variable or expression}` as shown below.

``` Javascript
const name = 'Ronald';
const name1 = "Michael";
const result = `The names are ${name} and ${name1}`;
```

##### Escape Characters

Since a string is identified with quotes. It becomes difficult for us to use a quote within a string. Hence *escape characters* are created to interpret these special characters. [List of escape characters found here](https://www.tutorialspoint.com/escape-characters-in-javascript)

``` Javascript
'\`This is how you would add quotes to your string\`'
```

##### Concatenation (Adding/Multiplying Strings)

If we want to add two strings together, we can do it by simply adding the `+` operator.

``` Javascript
"You can add strings " + "together like this"
```

##### String Indexing

Every character in a string is indexed. We can identify what character is stored in a string by the following example

``` Javascript
var string = 'javascript'

|  j  |  a  |  v  |  a  |  s  |  c  |  r  |  i  |  p  |  t  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |

string[0]     // expected output: 'j'
string[5]     // expected output: 'c'
```

##### Methods

Javascript built in many different methods for you to manipulate the string or get data off the string. Below are some methods that I always use.

###### length

Returns the length of a string

``` Javascript
const string = 'kajngfkjsndfkbjnkjfbnkjsdfbnkjdfg'
string.length     // expected output: 33
```

###### includes

Check if string includes specified characters

``` Javascript
const string = "This is a long sentence that I write random things on"
string.includes("things")   // expected output: true
string.includes("nothing")  // expected output: false
```

###### slice

The `slice(characterIndex)` method extracts a section of a string and returns it as a new string, without modifying the original string.

``` Javascript
const string = "This is another string to demonstrate slice()"
string.slice(5)     // expected output: 'is another string to demonstrate slice()'

// Can also use negative for index to count backwards
string.slice(-7)    // expected output: 'slice()'
```

###### toLowerCase / toUpperCase

`toLowercase()` or `toUpperCase` will return the fully lower cased version or fully upper cased version of the string respectively.

``` Javascript
let string = "This String Will Become Lower CASED"
string.toLowerCase()    // expected output: 'this string will become lower cased'

string = "This String Will Become Upper CASED"
string.toUpperCase()    // expected output: 'THIS STRING WILL BECOME UPPER CASED'
```

###### trim

`trim()` method removes all the whitespace from both ends of a string

``` Javascript
const string = "        This string   has many whitespace     "
string.trim()       // expected output: 'This string   has many whitespace'

// Note that it doesn't remove the whitespace between 'string' and 'has'
```

###### toString

Lastly, we have `toString()` method to change a different variable type to string for us to operate on.

``` Javascript
const number = 355
number.toString()       // expected output: '355'
```

#### Number

If you have coded in any other programming language before, you would know that there are many different types of numbers. Unlike others, JavaScript has only one type of number. Numbers can be written with or without decimals.

> Notes if you have coded in other languages before: Javascript number = double in other languages

``` Javascript
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
```

##### NaN (Not a Number)

NaN is a JavaScript reserved word indicating that a number is not a legal number. For example:

``` Javascript
100 / "Number"   // Dividing by a string would result in NaN

// But if the value of string is as number, Javascript will convert it to a Number
100 / "100"     // Would result in 1   
```

##### Infinity

Infinity is as the name suggests, infinity in Javascript. It can be used during arithmetic operations etc... One example that would result in infinity is diving by 0:

``` Javascript
2 / 0           // Dividing by 0 will result in infinity
```

#### Boolean

Boolean basically is yes or no, true or false, 0 or 1. In Javascript, everything with a value is "true" other than the follow special occasions:

- Value of 0
- Value of -0
- Empty String ("")
- undefined
- null
- NaN

``` Javascript
1 > 0       // expected output: true
0 > 1       // expected output: false
```

#### Undefined

`undefined` is used when a variable holds no value or the variable is not declared at all.

``` Javascript
let x       // x is undefined since it has no value
x = 10      // now x is a number since we gave x a value of a number
```

#### Null

`null` is used when there is an intention to have no value. `undefined` usually is when a variable has no value accidentally. If you mean for the variable to hold no value, use `null` instead.

``` Javascript
let x = null
```

#### Object

Objects in Javascript are variables that contain multiple values. You define each value with a `key: value` pair (Key is the name used to find the value). The syntax to creating an Object is:

``` Javascript
const objectName = {
  key: value,
  key2: value2
}
```

Real World Example:

``` Javascript
const user = {
  firstName: "Ronald",
  lastName: "Ng",
  age: 22,
  verified: true
}
```

And you can access each object value by calling `objectName.keyName`:

``` Javascript
user.firstName    // expected output: "Ronald"
```

We will later learn what functions and arrays are, but note that a function or an array can also be a part of an Object. Example:

``` Javascript
const user = {
  firstName: "Ronald",
  lastName: "Ng",
  age: 22,
  fullName : function() {
    return this.firstName + " " + this.lastName;
    // this is a keyword to refer to the current object
    // expected output: "Ronald Ng"
  },
  likedPost: [1265612, 65165165, 8516165]
}
```

##### Array

Arrays are a special type of Object that is used to store a list of values. The difference is that unlike Objects, the key for each `key: value` pair is a incrementing number starting from 0.

The syntax to create an array is:

``` Javascript
const arrayName = [value1, value2, value3]
```

Real World Example:

``` Javascript
const name = ["John", "Ronald", "Mary"]
```

Just like string indexing, array's indexing works the same where `index[0]` is the start of the array. Referencing the above example, to access the name "John" I would do

``` Javascript
name[0]   // expected output: "John"
```

## Comments

Comments are lines of codes that the program will ignore. It's usually used to elaborate on the codes you are writing to help others understand your code when collaborating. There are a few ways to write a comment, you have already seen me use one. Listed below are all the ways to write comments

``` Javascript
// This is a single line comment
/* This is a
Multi-lined
Comment */
```

As you can see a single line comment is syntax with a `//` while you wrap your multi-lined comment with a `/*contents*/`

## Operators

Operators are used to perform actions onto variables to manipulate or use their values. Listed below are some of the most commonly used operators in Javascript

### Arithmetic Operators

| Operator    | Description        |
| :---------: | :----------------: |
| +           | Addition           |
| -           | Subtraction        |
| *           | Multiplication     |
| **          | Exponentiation     |
| /           | Division           |
| %           | Division Remainder |
| ++          | Increment          |
| --          | Decrement          |

### Assignment Operators

| Operator    | Example            | Same as            |
| :---------: | :----------------: | :----------------: |
| =           | x = y              | x = y              |
| +=          | x += y             | x = x + y          |
| -=          | x -= y             | x = x - y          |
| *=          | x *= y             | x = x * y          |
| /=          | x /= y             | x = x / y          |
| %=          | x %= y             | x = x % y          |
| **=         | x **= y            | x = x ** y         |

### Comparison Operators

| Operator    | Description                     |
| :---------: | :-----------------------------: |
| ==          | Equal to                        |
| ===         | Equal value, equal type         |
| !=          | Not equal to                    |
| !==         | Not equal value. not equal type |
| >           | Greater than                    |
| <           | Less than                       |
| >=          | Greater than or equal to        |
| <=          | Less than or equal to           |

### Logical Operators

| Operator    | Description        |
| :---------: | :----------------: |
| &&          | AND                |
| \|\|        | OR                 |
| !           | NOT                |

## Conditionals

Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this. Listed below are some of the ways you can write conditional statements in Javascript

### If Else Statements

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

Example:

``` Javascript
const x = true

if (x == true) {
  // This block of code will be executed
}
```

> Remember to use lowercase `if` NOT `IF` or it will generate an error

Use the `else` statement to specify a block of code to be executed if the condition is false.

Example:

``` Javascript
const x = false

if (x == true) {
  // This block of code will be executed if x = true
} else {
  // This block will be executed if x is not equal to true
  // In this example, this block will be executed
}
```

If there's another condition you want to check before falling back to the `else` statement, we can use `else if` to add an additional conditional check

Example:

``` Javascript
const x = 2

if (x == 1) {
  // This block of code will be executed if x = 1
} else if (x == 2){
  // This block of code will be executed if x = 2
  // In this example, this block will be executed
} else {
  // This block will be executed if x is not 1 or 2
}
```

### Ternary Operator

Ternary operator is a newly introduced alternative to `if ... else` statements. It helps make cleaner code and many programmers are transitioning into using more ternary operators in their code.

``` Javascript
// Syntax:
condition ? IfTrue : IfFalse
```

It works the same as `if ... else` where the block of code will be executed after `?` if the condition is true and the block of code after `:` will be executed if the condition is false.

### Switch

Switches are usually used when there are many conditions you want to check. It makes for a way cleaner code and is preferred if you want to check against multiple conditions.

``` Javascript
// Syntax
switch(expression) {
  case x:
    // code block
    break
  case y:
    // code block
    break
  default:
    // code block
}
```

Reading the syntax might not give you a clear understanding of how `switch` statement works but perhaps reading the following example will help you better understand how switch works:

``` Javascript
let x = 0
switch (x) {
  case 0:
    // This block will be ran
    break
  case 1:
    // This will be ran if x is 1
    break
  default:
    // This will be ran if x is not 0 or 1
}
```

Fundamentally, it works the same as `if ... else` statements and `ternary` operators, but you can see that if there are many cases (conditionals) you would want to check before falling back to default (else), `switch` statements can produce a much cleaner code.

The `break` keyword is used to break out of the switch block. It is used to stop the execution of the switch block.

The `default` keyword is to indicate that if there is no match to the cases, it should run the default block.

## Functions

If there's a task we want to perform over and over again. We wouldn't want to have to rewrite that code every single time we have to use it. That's where functions come into play. Alike variables, functions are stored in the memory for easier and cleaner access to codes that we will be reusing throughout the program. We declare a function by using the following syntax:

``` Javascript
function functionName (parameter1, parameter2, parameter3){
  // codes to be executed.
}
```

And whenever we want to run the block of code that the function defined, we use:

``` Javascript
functionName(parameter1, parameter2, parameter3)
```

`Parameters` are variables that are passed to the function when we call (invoke) the function. Once inside the function, we can use parameter1, parameter2, and parameter3 to perform some actions.

If we want the function to return some information back to use. We use the keyword `return` to indicate what the function should return back.

> Remember that once the `return` keyword is ran, the function is "broken" (`break` keyword) and the rest of code under the return keyword will no longer run.

Example of how return statement and parameter works is written below:

``` Javascript
function celsiusToFahrenheit(Celsius){
  const Fahrenheit = Celsius * (9/5) + 32   // Equation to convert Celsius to Fahrenheit

  return Fahrenheit
}

celsiusToFahrenheit(30) // Should return 86
celsiusToFahrenheit(5)  // Should return 41
```

### Variable Scopes

Referencing to the above example, the variable declared `Fahrenheit` is a local variable only available inside the function `celsiusToFahrenheit`. What it means is that:

``` Javascript
// code here can NOT use variableName

function myFunction() {
  let variableName = "variableValue";
  // code here CAN use variableName
}

// code here can NOT use variableName
```

It's highly suggested to declare variables as locally as possible so that it will minimize bugs and unexpected errors.

### Arrow Function

> ES6, also known as ECMAScript 2015 or ECMAScript 6, is the newer version of JavaScript that was introduced in 2015. Most modern browsers have added the support of ES6 and been proved to be safe and effective.

Since ES6, Javascript has introduced "Arrow Functions". Although limited and can't be used in all situations. It will be the preferred way to write functions from this point on in the lecture since it's more compact and clean.

Syntax:

``` Javascript
functionName = (parameter1, parameter2, parameter3) => {
  // Codes to be executed
}
```

## Loops

Loops are useful when you want to run the same code over and over again.

### For Loop

For loop is the most basics of all loops. It can be used in most situations. It has the syntax of

``` Javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

**Statement 1** is executed (one time) before the execution of the code block.

**Statement 2** defines the condition for executing the code block.

**Statement 3** is executed (every time) after the code block has been executed.

Below is a practical example of how we would use a for loop

```Javascript
for (let i = 0; i < 6; i++) {
  console.log("The number is " + i)
}

/* expected output:
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
*/
```

> Alike last section in condition, variable `i` in the loop is also a local variable and cannot be used outside of the for loop.

#### For/In Loop

For/In Loop is used when you want to loop over an Object (or Array).

```Javascript
for (key in object) {
  // code block to be executed
}
```

Practical Example:

``` Javascript
// Object Example:
// i in this example is `firstKey`, `secondKey`, `thirdKey`
const Object = {
  firstKey: "Value1",
  secondKey: 2,
  thirdKey: true
}

for (i in Object){
  console.log(Object[i])
}

/* expected output
Value1
2
true
*/


// Array Example:

// Since Array's keys are incremental numbers
// i in this example will be 0, 1, 2
const Array = ["Hello", "Testing", "Learning"]

for (i in Array){
  console.log(Array[i])
}

/* expected output
Hello
Testing
Learning
*/
```

There's an alternative way to loop over an Object. That's by using the built in method that Javascript created called `forEach()` below is the syntax for `forEach()`

``` Javascript
objectName.forEach(functionForEachValue)
```

Practical Example:

``` Javascript
const Array = [0, 2 , 4 , 5 , 8]
Array.foreach((i) => {
  console.log(i)
})
```

### While Loop

While loops will continue to execute while the condition is still true.

Syntax:

``` Javascript
while (condition) {
  // code block to be executed
}
```

Practical Example:

``` Javascript
let i = 0
while (i < 6) {
  console.log(i)
  i++
}

/* expected output:
0
1
2
3
4
5
5
*/
```

> Remember to increase the variable used in the condition, or else the loop will never end. Resulting in a crash.

#### Do/While Loop

The `do while` loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax:

``` Javascript
do {
  // code block to be executed
}
while (condition);
```

Practical Example:

``` Javascript
let i = 0
do{
  console.log(i)
  i++
} while (i < 5)

/* expected output:
0
1
2
3
4
4
*/
```

## Exercise

1) Using loops and functions, print the following pattern

``` Javascript
printPyramid(5)

// Expected output
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
```

2) Print the Fibonacci series using loops and functions

> <https://www.mathsisfun.com/numbers/fibonacci-sequence.html>

``` Javascript
fibonacci(8) // Expected output: 0 1 1 2 3 5 8 13
```

3) For a given string, reverse the order of each character

``` Javascript
reverseString("Cool") //Expected output: "looC"
reverseString("Hey")  //Expected output: "yeH"
```
