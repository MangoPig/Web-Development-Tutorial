# Writing Our First Lines of Code!

- [Writing Our First Lines of Code!](#writing-our-first-lines-of-code)
  - [Lesson Video](#lesson-video)
  - [Why NodeJS](#why-nodejs)
  - [Writing Code](#writing-code)
    - [Text Editors](#text-editors)
      - [NotePad](#notepad)
      - [Sublime Text](#sublime-text)
      - [Nano](#nano)
      - [👍 Vim](#-vim)
    - [IDE](#ide)
      - [JetBrains](#jetbrains)
      - [👍 Visual Studio Code (VS Code)](#-visual-studio-code-vs-code)
        - [Installing and Using VS Code](#installing-and-using-vs-code)
  - [Running Your First Code](#running-your-first-code)

## Lesson Video

> :construction: Lesson Video on its way

<!-- [![Watch the video](https://img.youtube.com/vi/TPrnSACiTJ4/maxresdefault.jpg)](https://youtu.be/TPrnSACiTJ4) -->

## Why NodeJS

In my opinion, learning NodeJS is the perfect entry way to programming and Javascript as a whole. As mentioned from Basics/02#Javascript, NodeJS is a javascript runtime installed locally on the server with V8 engine. Javascript includes many basics that other programming languages has like variables, conditionals, loops and functions, while slowly easing in the most advanced topics like types and classes. You can also quickly see the results of your knowledge since Javascript is built for the web. It is also versatile as it is the most used programming language now, you can pretty much build any kind of application with it.

## Writing Code

Of course, one of the most essential part about coding is actually writing the code. There are many ways to write code for NodeJS. Below are some ways that people have done it

### Text Editors

A text editor is a type of computer program that edits plain text. It doesn't offer any built in features such as testing, but it's super light weight.

#### NotePad

![NotePad](https://cdn.vox-cdn.com/thumbor/M_RxocTJBGUnCr6iFaeTTf3Sgqw=/0x0:1235x884/1200x800/filters:focal(107x666:303x862)/cdn.vox-cdn.com/uploads/chorus_image/image/60345377/WRWGW18.0.png)

The simplest way you can start coding is to power up the NotePad app installed locally on your machine. It's a super light weight editor with no configurations whatsoever.

#### Sublime Text

![Sublime Text](https://www.tabnine.com/blog/wp-content/uploads/2021/08/sublime_python.jpg)

Sublime was my gateway to coding and my first text editor before I eventually transitioned to VS Code and Vim. To this day, Sublime is still known for its amazing performance. Unlike Notepad though, it offers [extensions](https://packagecontrol.io/stats) that you can install to power up your coding experience.

#### Nano

![Nano](https://upload.wikimedia.org/wikipedia/commons/2/20/Nano_2.1.2-svn.png?20100116114815)

Nano to Linux is what NotePad is to Windows. It's a simple, lightweight text editor, usually preinstalled on the Linux operating system. Without the hassle of learning Vim shortcuts and functionalities, Nano was what I went to when I first started coding in Linux.

#### 👍 Vim

![Vim](https://miro.medium.com/max/1400/1*tuPF0dT2lELZ-r6iGHRKhQ.png)

Vim is the most powerful text editor and one the most efficient tool you will ever need to learn. It is also preinstalled in most Linux machines and it has the most extensive library of keyboard shortcuts. You can probably do everything you need to do when coding using only keyboard shortcuts they built. After learning how to program on Vim, your hands will never need to leave the keyboard when coding, making you 10x more efficient. Vim is a very powerful tool and I highly suggest to learn it even later down the line. (🚧 Future Vim Tutorial Coming)

### IDE

IDEs or Integrated Developer Environments are text editors or tools that are specially built for programmers. It usually have many built in features like code suggestions, file explorer, debugging etc..

Generally, an IDE is built for each programming language like XCode is built for Objective C and Swift. Eclipse is for Java. But many IDEs have branched out and supports more and more language.

#### JetBrains

![WebStorm](https://www.jetbrains.com/webstorm/img/overview/webstorm-overview.png)

JetBrains is a company that specifically designs/create/maintains IDEs for each language for programmers. WebStorm is their company's Javascript product. It is very extensive and powerful as it is constantly maintained by a team of programmers. But also because of this, it's priced very high and I don't recommend this for newer programmers.

#### 👍 Visual Studio Code (VS Code)

![VS Code](https://code.visualstudio.com/assets/updates/1_37/icons.gif)

Currently the most used IDE worldwide and the tool we will using most of the time in the course, Visual Studio Code is a free IDE that is developed by Microsoft. It has many amazing features that we will be utilizing fully in this course, such as:

- Auto Complete (Emmet)
- Extensive Extension Library
- Collaboration
- Integrated Terminal
- Git Source Control
- Color Brackets
- Auto Formatting
- Docker
- Any Many More

##### Installing and Using VS Code

Go to [VS Code Downlooad Link](https://code.visualstudio.com/Download) to download the latest version of VS Code that's compatible to your system.

> ❗ Remember to check "Add to Path" and the "Open With Code" options during the installation wizard to fully utilize the VS Code CLI.

To open any directory in VS Code. Run `code .` or `code path/to/directory/` in the CLI.

> You can also open the directory using file explorer ➡️ right click ➡️ Open With Code. But I won't recommend this method because as of 2022/06, it has a bug that won't detect the WSL system if done this way.

Open the directory that you have cloned the lesson in from [Basics/01/Exercise](https://github.com/MangoPig/Web-Development-Tutorial/tree/main/Basics/01#Exercise) and open this file. You can view the lesson file this way from now on! Remember to pull the lesson every so often to get the updated view.

If you opened the lesson on vscode for the first time, it should prompt you to install a few extensions on the bottom right. If it didn't please install the following extensions by going in the extension tab.

- ms-vscode-remote.remote-wsl
- eg2.vscode-npm-script
- christian-kohler.npm-intellisense

As mentioned, VS Code also has a integrated terminal. You can open it by using the <code> Ctrl + ` </code> or by going to **View ➡️ Terminal**.

> Set the Default Profile to WSL if you haven't (Only available when you open VS Code in a non-WSL directory)

![Terminal Picture](https://res.cloudinary.com/imperial-dev/image/upload/v1654071983/Web-Development-Tutorial/NodeJS/Node_1_vwp09t.png)

Open all the settings of VS Code by running ` Ctrl + Shift + P `, there you can edit every setting locally. One of the few settings that I would recommend setting are themes. Type `Theme` to find all available themes on VS Code.

If you have finished the exercise on (Basics/01#Exercise), you should also see that the git source control tab is already working. You can move on to that tab and use all the git commands there instead of typing.

## Running Your First Code

> From future lessons onwards, the "code" folder will contain the final code for the lesson. You should create a "class" folder to follow along with the lesson and code on your own. You should also create a "exercise" folder to do the lesson exercise

Move to the directory that contains the lessons' code (NodeJS/01/code) and run:

``` Shell
node index.js
```

It should return

``` Shell
Hello World!
```

> 🎉You have run your first Javascript Code! 🎉
