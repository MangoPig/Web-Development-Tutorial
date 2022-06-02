# NPM and Packages

- [NPM and Packages](#npm-and-packages)
  - [Lesson Video](#lesson-video)
  - [Initializing Project](#initializing-project)
    - [Package.json](#packagejson)
  - [Packages](#packages)
    - [Nodemon](#nodemon)
  - [Exercise](#exercise)

> Create a "class" folder in (NodeJS/02) to follow along the lesson

> Create a "exercise" folder in (Node/02) to do the lesson exercise.

## Lesson Video

> :construction: Lesson Video on its way

<!-- [![Watch the video](https://img.youtube.com/vi/TPrnSACiTJ4/maxresdefault.jpg)](https://youtu.be/TPrnSACiTJ4) -->

## Initializing Project

In last lesson, we ran NodeJS by running `node projectName.js`. By doing it that way, we ran one javascript file locally. But usually, a project contains many different configurations and you're likely running multiple files or files that others contributed.

Navigate to the "class" folder of the lesson. Run: `npm init --y` on the terminal. NPM stands for node package manager. It's the software in your computer that helps you manage your node projects and the "packages" that the project uses (Javascript files others written). You can run `npm init` instead to follow through the instructions to create a new project, but since all the default values are fine. We run the flag `--y` to tell the software that we accept all the values given.

It should now create a file called `package.json` in your folder.

### Package.json

``` JSON
{
  "name": "code",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

This is how the package.json would look like after you initialized it. Package.json is the settings to your project. It is where Node understands what your project is, how to display your project and how to run your project.

There are many configurations you can do for your project, for more details, [read here](https://docs.npmjs.com/cli/v8/configuring-npm/package-json). The most important configuration to us right now, is the "scripts" configuration. You can delete the rest of them.

``` JSON
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

The "scripts" configuration tells NPM the `"name": "commands to run"`. Let's copy the command we ran from yesterday and delete the command that we don't recognize.

``` JSON
// package.json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

Also remember to create the `index.js` file and copy over the code written yesterday as well!

``` Javascript
// index.js   (This is usually where I tell you which file the code is in)
console.log("Hello World!")
```

> Find all other npm commands [here](https://docs.npmjs.com/cli/v6/commands)

Now run the file by doing: `npm run scriptName`

``` Shell
npm run start
```

It should return

``` Shell
> start
> node index.js

Hello World!
```

> 🎉 Your first NodeJS Project is started! 🎉

## Packages

Lets fully utilize the power that running a NPM Node project gives us. One of the most powerful tool that it enables, is the ability to use codes that others distributed, also known as, **packages**. All the packages hosted and available to use can be founded on [NPM](https://www.npmjs.com/). Let's get into trying install one!

### Nodemon

The package we are going to be installing is [**Nodemon**](https://www.npmjs.com/package/nodemon). It is a project with over 3.6M weekly download, so you are sure that it is maintained and loved by many. Its functionality is to live reload any code you have written when you save so you can immediately see the result on the console without having to rerun your code every time. Let's see the package in action!

Run:

``` Shell
npm install -D nodemon@2.0.16
```

> The command is `npm install -Flag packageName@versionNumber`

You should now see many new things added to your project. First of which is a `node_modules` folder. That's where all the javascript files written by other developers lives. **Do not edit anything in node_modules**. You shouldn't need to edit anything that others have written until you fully understand what you're doing.

Any thing is the `package-lock.json`. This file locks the version of the package you're installing. Letting you share this project without worry that others will run a different version of the package which breaks the collaboration.

Lets also talk about the command we ran `npm install -D nodemon@2.0.16`. We added the `-D` flag to tell NPM that we are installing the package for **development**. We can omit `-D` flag and run `npm install nodemon@2.0.16` if we want to install the package for the final build of the project. We can also run `npm install -g nodemon@2.0.16` if we want to install the package globally, or locally.

> Installing globally means that you will have the package in your local machine at all times and you can run it anywhere. I highly recommend against installing any package globally since it will become hard to test when something breaks. Try to stick with `npm install packageName@versionNumber` or `npm install -D packageName@version number`

Go over to `package.json`, you should now also see a new settings added.

``` JSON
{
  "scripts": {
    "start": "node index.js"
  },
  "devDependencies": {
    "nodemon": "^2.0.16"
  }
}
```

It now added a setting called `devDependencies` which lists all the development packages you have installed and the version of the package installed.

> Versioning (Read more about [different version options](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json) and [version naming convention](https://docs.npmjs.com/about-semantic-versioning))

> `~version`: “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

> `^version`: “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.

Now we understanding everything about installing the package. Let's run the package properly. Added the following "dev" script to `package.json`.

``` JSON
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

And run `npm run dev`. It should output:

``` Shell
% npm run dev

> dev
> nodemon index.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Hello World!
[nodemon] clean exit - waiting for changes before restart
```

Change something in `index.js` from `console.log(Hello World!)` to `console.log("Changed code")` and it should change and output the following without rerunning the project.

``` Shell
% npm run dev

> dev
> nodemon index.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Hello World!
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Changed code
[nodemon] clean exit - waiting for changes before restart
```

Exit the program by pressing `Ctrl + C`

> 🎉 Your first package properly installed and running!! 🎉

## Exercise

The exercise aims for you to setup a project and install packages on your own.

1) Initialize a project that runs the start script that runs a index.js file that contains:

```Javascript
const chalk = require('chalk')

console.log(chalk.red('Hello World!'))
```

2) Install the chalk package of version 4.1.2

> Remember to install the correct version!!

3) Install the yarn package **globally** (We will be using yarn in future lessons)
4) Run the code. Expected output:

![Answer](https://res.cloudinary.com/imperial-dev/image/upload/v1654152817/Web-Development-Tutorial/NodeJS/Node_2_f6akpo.png)
