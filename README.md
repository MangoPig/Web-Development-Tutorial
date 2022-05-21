# Web Dev and Blender Tutorial

- [Web Dev and Blender Tutorial](#web-dev-and-blender-tutorial)
  - [Setting Up Your Local Environment](#setting-up-your-local-environment)
    - [Development Environment :computer:](#development-environment-computer)
  - [Before You Begin](#before-you-begin)
  - [WSL](#wsl)
  - [Best Way to Get Help](#best-way-to-get-help)

## Setting Up Your Local Environment

Since I have already set it up for you. This step should be skippable. But in case you need to replicate the setup on a future machine or you want to better understand how the environment works. Please read on.

> Setup for Windows 10 Pro machine in May 2022

### Development Environment :computer:

> Restart machine after every step

1) [Activate **Hardware Virtualization** on your machine bios](https://www.thewindowsclub.com/disable-hardware-virtualization-in-windows-10#:~:text=less%20commonly%20F10.-,Turn%20ON%20the%20System.,and%20press%20the%20Enter%20key.)
   > Every motherboard has a different bios settings, please adjust at your own risk. If unsure, refer to the [help](#best-way-to-get-help)
2) [Activate Hyper-V on your local machine](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
   > Make sure your system is Windows 10 Pro
   1) Open Powershell as Adminstrator
   2) *Run command:*

``` PowerShell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

3) [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install)
   1) Open Powershell as Adminstrator
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
   2) Open Settings (~Ctrl+,~)
   3) Change **Default Profile** to **Ubuntu**

6) **Optional:** [Setup **ZSH** and **Oh My Zsh** for themes](https://blog.joaograssi.com/windows-subsystem-for-linux-with-oh-my-zsh-conemu/)

> For more in depth guide on how to use WSL and Linux system. Refer to [WSL](#wsl)

## Before You Begin

1) Create a GitHub Account: <https://github.com/signup>
2) Open your desired folder in [WSL](#wsl)

## WSL

## Best Way to Get Help
