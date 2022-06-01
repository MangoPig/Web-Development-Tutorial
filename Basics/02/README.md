# What Is a Computer and How Does it Work?

- [What Is a Computer and How Does it Work?](#what-is-a-computer-and-how-does-it-work)
  - [Lesson Video](#lesson-video)
  - [How Does a Computer Work?](#how-does-a-computer-work)
    - [CPU (Central Processing Unit) 🧠](#cpu-central-processing-unit-)
    - [GPU (Graphics Processing Unit) 📺](#gpu-graphics-processing-unit-)
    - [Computer Memory](#computer-memory)
      - [RAM (Random Access Memory)](#ram-random-access-memory)
      - [Hard Drives](#hard-drives)
        - [SSD (Solid State Drive)](#ssd-solid-state-drive)
        - [HDD (Hard Disk Drive)](#hdd-hard-disk-drive)
  - [Levels of Programming Language](#levels-of-programming-language)
    - [Low Level Programming Language](#low-level-programming-language)
      - [Machine Language (Machine Code)](#machine-language-machine-code)
      - [Assembly Language](#assembly-language)
    - [Mid Level Programming Languages](#mid-level-programming-languages)
      - [C](#c)
      - [C++](#c-1)
      - [Rust](#rust)
      - [Go](#go)
    - [High Level Programming Language](#high-level-programming-language)
      - [C\#](#c-2)
      - [Java](#java)
    - [Interpreted Programming Languages](#interpreted-programming-languages)
      - [Javascript](#javascript)
      - [Python](#python)
  - [Web Development and How Web Browser Works](#web-development-and-how-web-browser-works)
  - [Frontend? Backend?](#frontend-backend)

## Lesson Video

## [How Does a Computer Work?](https://youtu.be/vqs_0W-MSB0)

The first step in becoming an efficient and proper programmer is to understand the tools you're using. You don't need to know how to build it or design it, but understanding the hardware that you are writing your code for will help make sense a lot of difficult concepts and help write more efficient code.

### CPU (Central Processing Unit) 🧠

A CPU is a silicon computer chip containing millions of transistorized circuits. Electrical pulses passes through the chip which switch the transistor on and off (1 and 0) which is treated as the basis of instructions to the computer.

A CPU is the brain in a computer. Its main purpose is to be the taskmaster of the computer, managing every input and output. By design, CPU performs actions sequentially. Cores of a CPU also is designed to be smarter than a GPU. All these make the CPU great for running and managing complicated and different tasks.

Most CPUs in today's markets have multiple cores. Meaning that although each core only does one computation at a time, you can take advantage of the other cores to do other computations meanwhile.

### [GPU (Graphics Processing Unit)](https://youtu.be/-P28LKWTzrI) 📺

Since CPU is designed to run sequentially. It is not great at running a massive amount of simple and repetitive task. Hence why the GPU is designed. Unlike CPU, one core of GPU do computation in parallel, which make it excellent for running such tasks like video rendering and machine learning.

![CPU vs GPU](https://assets-global.website-files.com/620d42e86cb8ec4d0839e59d/620d42e96cb8ecf02939eb86_e7b08ad97410491586d63028740b90c1.png)

### Computer Memory

Once the processing is finished. The information (1s and 0s) needs to be stored somewhere for future uses. That's where memory comes into play.

#### RAM (Random Access Memory)

RAM is the main memory for computer storage. It is where the CPU access its data to keep its process running. You can think of RAM as the temporary data that is needed to keep the system and applications running. RAMs are also must faster to read and write to compared to other kinds of storage. Once the program or system shuts down, the ram clear its data, making its storage non-persistable.

#### Hard Drives

##### [SSD (Solid State Drive)](https://youtu.be/5Mh3o886qpg)

SSD, also known as Solid State Drive, is a type of permanent read and write memory storage system that utilizes the flash memory technology. This new technology allow us to access data almost instantly and more reliably.

##### HDD (Hard Disk Drive)

HDD, also known as Hard Disk Drive, uses mechanical parts on a spinning disk to seek out and read and write data. Although slower, HDD is better for larger storage and it's more cost effective to make.

## Levels of Programming Language

On the most basic level, programming is basically writing the patterns of electrical pulses (0s and 1s) to the computer, and letting the CPU and GPU to compute and determine what to with these signals. Since 0s and 1s are incomprehensible for most humans, programmers has invented languages that will translate our human language to 0s and 1s for a more user friendly experience. The **lower level** the programming language is, the closer you are to writing 0s and 1s and telling the computer what to actually do. The higher level you go, the more translation or **compiler** it has went through. Below are a list of common programming language in each level for reference.

### Low Level Programming Language

#### Machine Language (Machine Code)

Probably the closet thing to what CPU and GPU are reading.

![Machine Language](https://sillycodes.com/wp-content/uploads/2021/06/Machine-code-or-Binary-code-example.png)

#### Assembly Language

Start of translating 0s and 1s to English. Still have to tell the computer how to do everything.

![Assembly Language](https://miro.medium.com/max/676/0*-Il8DFT-ga-U_sJF.png)

### Mid Level Programming Languages

Mid Level Programming Languages are way more user friendly. Usually it comes with libraries of programming's most used functions so you wouldn't need to tell the computer every single instruction every time. This level of programming language are usually used to write operating systems and compilers for other higher level language.

#### C

C is probably the base building block for most modern programming language. With the most popular systems, applications and languages all built from C. Examples such as the Unix Operating System and Windows Operating System, Google Chromium Browser, Adobe Photoshop and such.

![C Programming Language](https://www.redprismgroup.com/img/c-lang.webp)

#### C++

C++ is a superset of C. It is basically C with many added features such as Object Oriented Programming and Exception Handling. The language has wide variety of uses such as game development (Unreal Engine), operating system, libraries and compilers for other higher level programming languages.

![C++](https://cdn.worldvectorlogo.com/logos/c-1.svg)

#### Rust

Rust is the up and coming mid level programming language. Being voted for the "most loved programming language" for 5 years in a row now. Rust is designed with the modern computer system in mind, letting it eliminate many problems that an old mid level programming language like C faces.

![Rust](https://miro.medium.com/max/1200/1*lmv2kXnZ9qsUGkrPz__QsQ.png)

#### Go

Developed by Google. Go is the perfect entry to mid level programming. It has many of the control that other mid level languages like Rust and C++ gives you, while adding the user friendliness with features like garbage collection (automatically dumping memories that are not in use anymore) and built-in concurrency support (make use of multiple cores).

![Go](https://miro.medium.com/max/1400/1*Ifpd_HtDiK9u6h68SZgNuA.png)

### High Level Programming Language

#### C\#

C# is written in C and C++. Developed by Microsoft, it is widely used for developing Microsoft desktop applications. It is also widely used in game development nowadays with game engine such as Unity supporting the language.

![C#](https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png)

#### Java

Java, also written in C and C++, is still as popular as ever. Being the number 3 in popularity in all programming language, Java is responsible for many scientific applications (Mat Lab) and enterprise applications. It is known for its ease of use and the security it provides.

![Java](https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg)

### Interpreted Programming Languages

Interpreted Programming Languages are languages that relies on other languages as a compiler to translate to machine language. If we use real world example, it is like translating Chinese (Interpreted) to Japanese (Compiled) to English (Machine).

**Interpreted Programming Language**:

![Interpreted Programming Language](https://media.geeksforgeeks.org/wp-content/uploads/20200326222734/int2.png)

**Compiled Programming Language**:

![Compiled Programming Language](https://media.geeksforgeeks.org/wp-content/uploads/20200326222732/com4.png)

#### Javascript

Javascript is one of the most in demand scripting language in the market currently. With the move of many application to transition in to "web app", javascript is essential for developing for the web. Its high flexibility allows it to develop for almost every kind of application that you will use in everyday use. It is an interpreted language from the Google's V8 Engine that is written in C. The V8 engine is responsible for rendering web pages and has since been ported for server (local machine) uses with the addition of **NodeJS**.

![Javascript](https://www.mikealche.com/wp-content/uploads/2019/07/el_remozado_javascript.imagen.jpg)

#### Python

Python is the most popular language in 2022. It has came to popularity as it is **THE EASIEST** language to learn, while being able to make complicated applications for machine learning and data analysis. Python is written in C and relies on many C and C++ libraries.

![Python](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png)

## Web Development and How Web Browser Works

> We will get into more details on how the web works and web browser works in a future section. Do not worry if you don't understand many parts in here.

Modern web browsers consist of multiple parts that helps display a page of interactive information. A rendering engine is responsible for reading scripting and markup files and render the information as a webpage. Google's Chromium's rendering engine is Blink - which consist of the V8 engine that reads the javascript and other C and C++ scripts that reads the markup (HTML and CSS) and display it as a DOM (Document Object Model).

## Frontend? Backend?

Most application in programming consists of two parts. The frontend and the backend. The frontend of an application consists of things that you can see on the monitor and behaviors when you interact with it. Backend of a software usually are scripts that interacts with your software in the background. Usually backend operates in the operating system or the server of the machine.
