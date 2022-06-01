# Understanding WSL and Linux and Git

- [Understanding WSL and Linux and Git](#understanding-wsl-and-linux-and-git)
  - [Lesson Video](#lesson-video)
  - [Linux](#linux)
    - [Why Linux?](#why-linux)
    - [WSL](#wsl)
    - [Basic Linux Commands Cheatsheet](#basic-linux-commands-cheatsheet)
      - [`clear`](#clear)
      - [`sudo`](#sudo)
      - [`echo`](#echo)
      - [`ls`](#ls)
      - [`pwd`](#pwd)
      - [`cd`](#cd)
      - [`mkdir`](#mkdir)
      - [`rmdir`](#rmdir)
      - [`touch`](#touch)
      - [`rm`](#rm)
      - [`cat`](#cat)
      - [`cp`](#cp)
      - [`mv`](#mv)
      - [`tar`](#tar)
      - [`chmod`](#chmod)
      - [`chown`](#chown)
      - [`wget`](#wget)
  - [Git](#git)
    - [Branching](#branching)
    - [Remote Repositories](#remote-repositories)
    - [Open Source](#open-source)
      - [Pros](#pros)
      - [Cons](#cons)
      - [Licensing](#licensing)
    - [Git Commands Cheatsheet](#git-commands-cheatsheet)
  - [Exercise](#exercise)
    - [Outline](#outline)

## Lesson Video

> :construction: Lesson Video on its way

<!-- [![Watch the video](https://img.youtube.com/vi/TPrnSACiTJ4/maxresdefault.jpg)](https://youtu.be/TPrnSACiTJ4) -->

## Linux

### Why Linux?

If we can code in Windows without all these cumbersome configurations, why would I suggest using Linux instead?

- 🛡️ **Security**

Linux is considered to be way more secured than Windows. Due to it being [open sourced](#open-source) and almost all big companies and government organizations using Linux. It is likely that someone will find a vulnerability long before hackers can target a Linux distribution.

- 📖 **Community**
  
Currently, Linux has a larger community for tech development. Allowing it to be easier get support for whatever questions you might have. Learning about Unix also helps grasping a better overlook on how coding works.

- 💸 **Costs**

Running a Linux server costs significantly less than a Windows server. Firstly, most Linux distribution does not require a license. Secondly, Linux servers are slightly more lightweight compared to Windows, allowing for a lower hardware demand.

### WSL

But nobody wants to give up the benefits of running a Windows Operating System (such as running Adobe, gaming and other Microsoft related softwares) just to learn how to code. Microsoft also realizes this and hope to retain their customers. Hence the creation of **WSL** (Windows Subsystem for Linux).

WSL uses virtualization technology (softwares such as VMWare and VirtualBox uses this) to emulate a GNU/Linux environment. Allowing you to use most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup.

### Basic Linux Commands Cheatsheet

Run `commandName --help` to get full information of the command and arguments

`TAB` autofill what you're typing

`Ctrl+C` will terminate and stop any command

`Ctrl+Z` will pause the command

#### `clear`

Clears the console to stop it from getting cluttered

#### `sudo`

Lets you run any command as the super admin. Gives you permission to run tasks that can't be ran without permission

#### `echo`

Prints something on the console

#### `ls`

Directory Listing. Shows directories and files you can move to

#### `pwd`

Shows the current working directory. Basically, "Where am I?"

#### `cd`

Navigating through directories and files.

- `cd /name/of/directory` lets you move straight to the named directory
- `cd ..` lets you move up one directory
- `cd` goes straight to the home directory
- `cd-` goes to your previous directory

#### `mkdir`

Makes a new directory at where you specified or where you're currently at

#### `rmdir`

Removes specified directory

#### `touch`

Creates a new file

#### `rm`

Removes a file or directory

#### `cat`

Shows the contents of a file

#### `cp`

Copies files from one directory to another

#### `mv`

Renames and moves files.

#### `tar`

Compresses or decompresses a file

#### `chmod`

Changes permission of a file or directory

#### `chown`

Changes ownership of a file or directory

#### `wget`

Download file from internet

## Git

Git is a free and open-source version control system. It is mainly used to track changes and backup the source code and collaborations. Understanding Git and Git commands is essential for any kind of developer in 2022.

This diagram shows what entails a typical Git workflow

![Git Workflow](https://www.simplilearn.com/ice9/free_resources_article_thumb/git-workflow.JPG)

At the start of a project. We would usually run **`git clone`** to get a fresh copy of the project from a remote repo or run **`git init`** to start a new project locally.

If you already have a git project initialized, you can run **`git pull`** to get refresh the new changes that others have made.

From there, you can write codes all you want on your local machine. When ready, you can add the new codes for *staging*. Staging usually is the stage where codes are reviewed and checked to make sure there isn't any error before committing the code to change. We stage by running **`git add *`** to stage all changed files or **`git add fileName`** to stage only specific files.

Once finalized, we would commit the changes to create a new version of your application. We run **`git commit -m "Commit message"`** to create the new version. I would highly recommend writing and planning versions so the commit message is as informative as possible to let others know what this new version entails.

Although we have created a new version, we have yet to publish yet. To publish and upload this new version to a online / remote repo, we would run **`git push`**.

### Branching

One of Git's main feature is branching. Branching allows developers to create a new feature without interrupting and messing up the main software you have developed. We create a new branch by running **`git checkout -b branchName`**. This will ensure all the code you write and commit won't affect the main working feature. After you're done making the changes and tested that the new feature works. You can run **`git merge branchName`** to merge the two branches together.

![Git Branching](https://miro.medium.com/max/1400/0*RiQZEGNoU9HmyjFP.png)

### Remote Repositories

There are many options for remote repository host services out there, but the most popular one is definitely GitHub. Due to the amount of resources and community help available, I would highly suggest also using Github to host your remote repository.

Though there are some alternatives such as GitLab and BitBucket. However, these solutions do not integrate well with other hosting services that we will be introducing later in the lectures.

![GitHub](https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg)

### Open Source

Git blossomed in the popularity with the growth of open sourcing. Open source software is software with source code that anyone can inspect, modify, and enhance.

#### Pros

- 🧪 **World Wide Testing**

Open sourcing the software allow everyone to help find and fix bugs. You might find developers that discovered a serious vulnerability that your team missed.

- 🚅 **Faster Innovation**

Open sourcing helps open your software up to different opinions and suggestions. It will greatly help your project grow at an exponential rate

- 🧑‍🤝‍🧑 **Reputation**
  
Open source software usually garners a better reputation in the community. Giving customers and developers an ease of mind that there's no secrets that your software is hiding.

#### Cons

- 💸 **Hard to Profit**

Since your code is now out for everyone to test/see/use. It will be hard to create a business model off your software. It will need to offer a service that is not open sourced to convince customers that there's a need for your product.

- 🔓 **Security**

Anyone can see what the problem is in your code. Making hacking it super easy. You will need to go extra steps to hide sensitive information and you will always need to be up to date with your software to prevent any security breach.

#### Licensing

One way to protect yourself in the open source environment is to license your code. There are many different licenses out there. Apache and MIT license are the two most popular among the community. I would highly suggest checking out the terms with each license and carefully decide which you would want to use before you start any project.

[This site](https://tldrlegal.com/) gives a very simple and good explanation on each license. Remember to check it out before you open source every project.

### [Git Commands Cheatsheet](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

<table>
  <thead>
    <tr>
      <th>Git Task</th>
      <th>Notes</th>
      <th>Git Commands</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>Tell Git who you are</td>
        <td>Configure the username and email to be used for commits</td>
        <td>git config --global user.name "MangoPig" </br> git config --global user.email Testing@mangopig.com</td>
      </tr>
      <tr>
        <td>Initiating a new local Git Repo</td>
        <td></td>
        <td>git init</td>
      </tr>
      <tr>
        <td>Cloning a fresh copy of a repo</td>
        <td></td>
        <td>git clone /path/to/repository</td>
      </tr>
      <tr>
        <td>Add Files</td>
        <td>Add one or more files to staging</td>
        <td>git add filename </br> git add *</td>
      </tr>
      <tr>
        <td rowspan = 2>Commit</td>
        <td>Commit changes you have staged but not yet to remote repo</td>
        <td>git commit -m "Commit message"</td>
      </tr>
      <tr>
        <td>Commit all files that you have changed</td>
        <td>git commit -a</td>
      </tr>
      <tr>
        <td>Push</td>
        <td>Pushing files that you have committed to remote repo</td>
        <td>git push origin branchName</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>List all files you have changed that haven't been added or committed</td>
        <td>git status</td>
      </tr>
      <tr>
        <td rowspan = 2>Connecting to Remote Repo</td>
        <td>Connect local repo to remote repo if you haven't already</td>
        <td>git remote add origin serverURL</td>
      </tr>
      <tr>
        <td>List all currently configured remote repositories</td>
        <td>git remote -v</td>
      </tr>
      <tr>
        <td rowspan = 7>Branches</td>
        <td>Create a new branch and switch to it</td>
        <td>git checkout -b branchName</td>
      </tr>
      <tr>
        <td>Switching branch</td>
        <td>git checkout branchName</td>
      </tr>
      <tr>
        <td>List all the branches in your repo, and also tell you what branch you're currently in</td>
        <td>git branch</td>
      </tr>
      <tr>
        <td>Delete branch</td>
        <td>git branch -d branchName</td>
      </tr>
      <tr>
        <td>Push the branch to your remote repository</td>
        <td>git push origin branchName</td>
      </tr>
      <tr>
        <td>Push all branches to your remote repository</td>
        <td>git push --all origin</td>
      </tr>
      <tr>
        <td>Delete a branch on your remote repository</td>
        <td>git push origin :branchName</td>
      </tr>
      <tr>
        <td rowspan = 3>Updating from Remote Repo</td>
        <td>Fetching and merging changes from remote repo</td>
        <td>git pull</td>
      </tr>
      <tr>
        <td>Merge a different branch into your active branch:</td>
        <td>git merge branchName</td>
      </tr>
      <tr>
        <td>View all the difference between the remote repo and your current local repo</td>
        <td>git diff</td>
      </tr>
      <tr>
        <td>Undoing Local Changes</td>
        <td>Dropping all changes in your local repo and fetch the latest from remote repo</td>
        <td>git fetch origin <br/> git reset --hard origin/brachName</td>
      </tr>
  </tbody>
</table>

## Exercise

> Try the exercises before looking up the answer to get the opportunity to practice what you learned in the lesson.

### Outline

1) Navigate and create a new folder in the WSL system
2) Pull the lessons into your system
3) Remove push towards the lesson's repo
4) Push your version of the lesson to a remote repo that you have created
5) Share the repo with me to get feedback or answers to any questions you might have

> The answer to this exercise will be in the Lesson Video of this lesson
