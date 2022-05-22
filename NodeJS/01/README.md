# Understanding WSL and Linux

- [Understanding WSL and Linux](#understanding-wsl-and-linux)
  - [Lesson Video](#lesson-video)
  - [WSL](#wsl)
  - [Linux](#linux)
  - [Git](#git)
    - [Git Commands Cheatsheet](#git-commands-cheatsheet)

## Lesson Video

> :construction: Lesson Video on its way

<!-- [![Watch the video](https://img.youtube.com/vi/TPrnSACiTJ4/maxresdefault.jpg)](https://youtu.be/TPrnSACiTJ4) -->

## WSL

## Linux

## Git

Git is a free and open-source version control system. It is mainly used to track changes and backup the source code and collaborations. Understanding Git and Git commands is essential for any kind of developer in 2022.

This diagram shows what entails a typical Git workflow

![Git Workflow](https://www.simplilearn.com/ice9/free_resources_article_thumb/git-workflow.JPG)

At the start of a project. We would usually run **`git clone`** to get a fresh copy of the project or run **`git init`** to start a new project yourself.

If you already have a git project initialized, you can run **`git pull`** to get refresh the new changes that others have made.

### Git Commands Cheatsheet

 |            Git task            |                                                                                 Notes                                                                                 |                                            Git commands                                            |
 | :----------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
 |      Tell Git who you are      |                                               Configure the author name and email address to be used with your commits.                                               | git config --global user.name "MangoPig" <br/> git config --global user.email mangopig@example.com |
 | Create a new local repository  |                                                                                                                                                                       |                                              git init                                              |
 |     Check out a repository     |                                                             Create a working copy of a local repository:                                                              |                                   git clone /path/to/repository                                    |
 |           Add files            |                                                               Add one or more files to staging (index):                                                               |                                 git add filename <br />  git add *                                 |
 |             Commit             | Commit changes to head (but not yet to the remote repository): <br/> Commit any files you've added with git add, and also commit any files you've changed since then: |                      git commit -m "Commit message" <br/> <br/> git commit -a                      |
 |              Push              |                                                     Send changes to the master branch of your remote repository:                                                      |                                     git push origin branchName                                     |
 |             Status             |                                               List the files you've changed and those you still need to add or commit:                                                |                                             git status                                             |
 | Connect to a remote repository |                              If you haven't connected your local repository to a remote server, add the server to be able to push to it:                              |                                   git remote add origin serverURL                                   |
