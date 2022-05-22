# Web Dev and Blender Tutorial

- [Web Dev and Blender Tutorial](#web-dev-and-blender-tutorial)
  - [Upload / Update Schedule](#upload--update-schedule)
  - [Before You Begin](#before-you-begin)
  - [Setting Up Your Local Environment](#setting-up-your-local-environment)
    - [Development Environment :computer:](#development-environment-computer)
    - [NodeJS :star2:](#nodejs-star2)
    - [GitHub :satellite:](#github-satellite)
      - [Windows](#windows)
      - [Linux](#linux)
    - [Blender :art:](#blender-art)
  - [FAQ](#faq)
  - [Best Way to Get Help](#best-way-to-get-help)

## Upload / Update Schedule

> :calendar: Every Wednesday and Sunday @ 11:00 PM

## Before You Begin

> :vertical_traffic_light: Make sure all the softwares are setup correctly before beginning

1) Create a GitHub Account: <https://github.com/signup>
2) Open 'Terminal' and navigate to your desired folder in [WSL](/) using `cd` ( Read [Linux Commands](/) to learn more about `cd` and Read [WSL](/) to learn about basic WSL Linux file structure )  
   *Example:* ```cd /home/mangopig/Coding/Learning/NodeJS/```

3) Let Linux know what Github account you're using by running:

(Change username and email accordingly)

```Shell
git config --global user.name "MangoPig"
git config --global user.email Learning@mangopig.com
```

> Since this repo is private currently. Please request for collaboration before proceeding

> :vertical_traffic_light: GitHub has remove the use of password authentication for cloning. Go to [GitHub Settings Page](https://github.com/settings/profile) :arrow_right: Developer settings :arrow_right: Personal access tokens :arrow_right: Generate new token  
> Check all repo permissions and set expiration date :arrow_right: Generate token<br/><br/>
> :warning: Save your token in a secure location. You won't see it again!

4) Get a local copy of the existing repo by running:

```Shell
git clone https://github.com/MangoPig/Lessons-Bro.git
```

Answer secure questions when prompted. Password should be your access token

5) Feel free to change the directory name of cloned directory from "Lessons-Bro" to anything you want
6) :exclamation: Run `git pull` before every session to get the most updated version of the lesson!

## Setting Up Your Local Environment

Since I have already set it up for you. This step should be skippable. But in case you need to replicate the setup on a future machine or you want to better understand how the environment works. Please read on.

> Setup for Windows 10 Pro machine in May 2022

### Development Environment :computer:

> Restart machine after every step

1) [Activate **Hardware Virtualization** on your machine bios](https://www.thewindowsclub.com/disable-hardware-virtualization-in-windows-10#:~:text=less%20commonly%20F10.-,Turn%20ON%20the%20System.,and%20press%20the%20Enter%20key.)
   > Every motherboard has a different bios settings, please adjust at your own risk. If unsure, refer to the [help](#best-way-to-get-help)
2) [Activate Hyper-V on your local machine](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
   > Make sure your system is Windows 10 Pro
   1) Open Powershell as Administrator
   2) *Run command:*

``` PowerShell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

3) [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install)
   1) Open Powershell as Administrator
   2) *Run command:*

``` PowerShell
wsl --install
```

4) [Setup WSL](https://docs.microsoft.com/en-us/windows/wsl/setup/environment#set-up-your-linux-username-and-password)
   1) Setup username and password
   2) Update packages by running:

``` Shell
sudo apt update && sudo apt upgrade
```

5) [Setup Terminal](https://docs.microsoft.com/en-us/windows/terminal/install)
   1) Download Terminal from Windows Store aPP
   2) Open Settings (Ctrl+,)
   3) Change **Default Profile** to **Ubuntu**

6) **Optional:** [Setup **ZSH** and **Oh My Zsh** for themes](https://blog.joaograssi.com/windows-subsystem-for-linux-with-oh-my-zsh-conemu/)

> For more in depth guide on how to use WSL and Linux system. Refer to [WSL](/)

### [NodeJS](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) :star2:

1) Open the "Terminal" app
2) Install cURL (a tool used for downloading content from the internet in the command-line) with:

```Shell
sudo apt-get install curl
```

3) Install [nvm](https://github.com/nvm-sh/nvm) (ver 0.39.1) (adjust the command to include the newest version, replacing v0.39.1 to the newest version), with:

``` Shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

4) Restart computer / restart WSL and run:

```Shell
command -v nvm
```

If nvm is installed correctly, the terminal should return **nvm**

5) Install the latest release of LTS Node and Node respectively by running:

```Shell
nvm install --lts
nvm install node
```

6) Run ```nvm use --lts``` to use the LTS version of node or run ```nvm use node``` for the current version
7) To check if node is installed correctly. Run ```node --version``` and ```npm --version```. They should return the current installed version number of the program.

### GitHub :satellite:

#### Windows

1) Download Git from [this page](https://git-scm.com/download/win)
2) Install accordingly by following the instruction

> :hand: **Git Bash vs WSL**  
> Git Bash is a bash shell running on Windows. Technically, it means you can run Linux commands on Windows, but it has a lot of limitations as it replies on a compiler to generate windows executables. Meanwhile, WSL offers support for native Linux executables on a virtualized Linux Kernel. Meaning you will get as close as an experience possible to developing on a Linux device.

#### Linux

1) Open "Terminal" and run:

```Shell
sudo apt install git-all
```

### Blender :art:

1) [Go to Page](https://www.blender.org/download/lts/2-93/)
2) Download LTS Release 2.93.9 (Windows - Installer)
3) Install accordingly.

## FAQ

## Best Way to Get Help

If you run into any problems. Try troubleshooting in the following order:

1) Check out the [FAQ](#FAQ) session of the tutorial. See if your question has been asked before.
2) Look up your question in common social media. Most of the time, an answer can be found with some research on Google or YouTube.
3) Ask on [StackOverflow](https://stackoverflow.com/questions/ask)
4) If the question is tutorial specific. [Open an issue on GitHub](https://github.com/MangoPig/Lessons-Bro/issues)
