# More on Packages, Async Await and Typescript

- [More on Packages, Async Await and Typescript](#more-on-packages-async-await-and-typescript)
  - [Lesson Video](#lesson-video)
  - [Packages](#packages)
    - [Package Management](#package-management)
    - [Styling](#styling)
    - [Input / Output Streams (IOStreams)](#input--output-streams-iostreams)
    - [Data Validation](#data-validation)
  - [Typescript (<https://www.typescriptlang.org/>)](#typescript-httpswwwtypescriptlangorg)
    - [Declaring Type](#declaring-type)
  - [Async, Await](#async-await)
  - [Exercise](#exercise)

## Lesson Video

## Packages

This lesson we will get more into packages. Now that we understand most of the basics in Javascript, we are ready to use other people's code and see what they can offer us. Below are some battle tested packages that I often use in my projects.

> Every few lessons after I introduce a new concept in Javascript, I will recommend some packages that are popular and related to what we just learned.

### Package Management

If you followed closely to the lesson plans. I instructed in installing [yarn](https://www.npmjs.com/package/yarn) in lesson 2's exercise. Alike npm (the package manager we have been using until now), Yarn is a package manager that will help you install dependencies (packages) and manages it. But unlike npm, Yarn is faster, more reliable and more secure. It caches your package downloads so you will never need to download the same package again. Helping you save disk space and time.

If you haven't already, install yarn globally by running:

```Shell
npm install -g yarn
```

We will be using Yarn primarily from this point on in the lessons. So if you want to follow along closely, it is recommended to switch to yarn now.

### Styling

[Chalk](https://www.npmjs.com/package/chalk)

> When using Chalk or Chalk related packages, remember to install the version before they converted to ESM! For vanilla chalk, it will be version 4.1.2

Chalk is a highly performant package that will help us style our console outputs. Throughout the course, we will be using Chalk and its family of sub-packages pretty frequently to make output look nice and professional.

Here are some of the packages that are dependent on chalk.

- [Chalk Animation](https://www.npmjs.com/package/chalk-animation)
- [Gradient Strings](https://www.npmjs.com/package/gradient-string)

Here are some more packages that are used to style console outputs:

- [Figlet](https://www.npmjs.com/package/figlet)
- [Ora](https://www.npmjs.com/package/ora)
- [Listr](https://www.npmjs.com/package/listr)
- [Nanospinner](https://www.npmjs.com/package/nanospinner)

### Input / Output Streams (IOStreams)

Dealing with inputs and outputs of users are complicated. These packages gives us an easier time getting and manipulating users' inputs and getting valuable interactions with users.

- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Enquirer](https://www.npmjs.com/package/enquirer)
- [Prompts](https://www.npmjs.com/package/prompts)

### Data Validation

There are many different data types in coding, and since Javascript is dynamically typed, many of these typings are not handled properly or it's a pain to deal with it. Thankfully, many talented developers developed packages that helps us manage these types.

[MomentJS](https://www.npmjs.com/package/moment) is a popular package for validating data related to dates and time. [Bcrypt](https://www.npmjs.com/package/bcrypt) is a popular package dealing with password and encryption. Last but not least, [Validator](https://www.npmjs.com/package/validator) is an amazing package for validating strings and inputs.

## [Typescript](https://www.npmjs.com/package/typescript) (<https://www.typescriptlang.org/>)

In recent years, NodeJS and Javascript rose to popularity. A huge factor on its rise is due to Typescript. Typescript adds typing to every javascript program. Making the project less likely to run into bugs and unexpected errors. The addition of Typescript is one of the most loved features for every Javascript developer and it is what we will be using on every project from this point onwards.

> Remember to install typescript as a **dev** dependency as we will not be using it on production.

Let's go through the steps of initializing a Typescript project together. Follow along the steps by opening a "class" folder on your own. The results of the lesson's code would be in the "code" folder if you ever get stuck.

Firstly, initialize a NodeJS project by running `yarn init -y`. Note that we are using yarn now. The result package.json file would be the most barebone configuration that is needed. which is perfect!

To stay organized, I will add a `src` folder on the root of the project to contain all my project files. I will also create a file called `index.ts` in the `src` folder. Which signs the starting point of the project. The folder structure of the project should now look like this:

> Note that the ending of the file is now `.ts` instead of `.js`. This is the extension that tells Typescript that this file contains Typescript code. This extension will not run in the browser or locally, so we will need to tell Typescript to convert this file type to `.js` once it's finished.

``` Shell
- root
  - src
    - index.ts
  - package.json
```

Now lets add the scripts we will be running in `package.json` file. As usual lets add the script to run our development server by adding:

``` JSON
"scripts": {
    "dev": "nodemon src/index.ts"
}
```

Let's install Typescript to our project now by running:

```Shell
yarn add -D typescript
```

We are still not ready to code in Typescript. We need to create a settings file to tweak the settings of each individual project to fit our need. To do that, run:

``` Shell
tsc --init
```

It should now have created a `tsconfig.json` file in the root of your project. That's the file that contains all the settings for your project. [This is the reference to every options in the settings](https://www.typescriptlang.org/tsconfig). For now, just change the few settings below:

``` JSON
{
 "compilerOptions": {
  "target": "ES2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
  "module": "CommonJS" /* Specify what module code is generated. */,
  "rootDir": "./src" /* Specify the root folder within your source files. */,
  "moduleResolution": "Node" /* Specify how TypeScript looks up a file from a given module specifier. */,
  "allowJs": true /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */,
  "outDir": "./dist" /* Specify an output folder for all emitted files. */,
  "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
  "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
  "strict": true /* Enable all strict type-checking options. */,
  "noImplicitAny": true /* Enable error reporting for expressions and declarations with an implied `any` type.. */,
  "alwaysStrict": true /* Ensure 'use strict' is always emitted. */,
  "skipLibCheck": true /* Skip type checking all .d.ts files. */
 }
}
```

> Unless said otherwise, this is the Typescript config file that we will be using for the rest of this course, feel free to come back to reference this tsconfig file.

Now we are ready to code in Typescript!

### Declaring Type

In typescript, we declare the type of a variable by following this syntax:

``` Typescript
let variableName: Type = variableValue
```

Let's test out whether typescript is running properly by assigning a number to a string!

``` Typescript
let variableA: string

variableA = 5000
```

It should return this error message: `Type 'number' is not assignable to type 'string'`

## Async, Await

## Exercise

1) Using Typescript, write a program that determines whether a year is a leap year or not

> - A year is a leap year if it is evenly divisible by 4
> - Except years that are evenly divisible by 100
> - Unless the year is also evenly divisible by 400

1) Using Typescript make a game where two players guess a number and whoever guess the closest wins.

> You can generate a random number using the Math.random() in Javascript. [Read more here](https://www.w3schools.com/jsref/jsref_random.asp)
