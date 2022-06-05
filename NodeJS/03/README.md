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
      - [Boolean](#boolean)
      - [Undefined](#undefined)
      - [Null](#null)
      - [Object](#object)
        - [Array](#array)
  - [Comments](#comments)
  - [Operators](#operators)
  - [Conditionals](#conditionals)
  - [Functions](#functions)
  - [Loops](#loops)

## Lesson Video

> :construction: Lesson Video on its way

<!-- [![Watch the video](https://img.youtube.com/vi/TPrnSACiTJ4/maxresdefault.jpg)](https://youtu.be/TPrnSACiTJ4) -->

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

#### Boolean

#### Undefined

#### Null

#### Object

##### Array

## Comments

## Operators

## Conditionals

## Functions

## Loops
