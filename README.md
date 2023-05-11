# mobile-testing

# Tools and Dependencies

## Github Desktop or Git command line tools

Git is the the version control tool which will be used in the project. 

Download GitHub Desktop to use Git through a UI:
https://desktop.github.com/

or Git commandline tools if you prefer to use commandline: 
https://git-scm.com/downloads

After installing Git, clone the repository into your local machine. Please use a location that is not synced up with Onedrive.
Here's how to clone a repository with GitHub Desktop: https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop
More on GitHub Desktop: https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop

## Visual Studio Code
It's highly recommended to use Visual Studio Code as the code editor. Download and install it from:
https://code.visualstudio.com/

After installing Visual Studio Code, open the cloned repository folder:

![image](https://user-images.githubusercontent.com/23452449/235809073-50a41a52-e334-4e41-bc5f-61095b0afff6.png)

![image](https://user-images.githubusercontent.com/23452449/235809207-b5c53131-beb0-4086-8d05-5a1635dfa26d.png)

It's highly recommended to run commands within the Visual Studio Code Terminal. Open and hide it by pressing _CTRL + J_ or by clicking the Toggle Panel button at the top right:

![image](https://user-images.githubusercontent.com/23452449/235809671-3e3eceb1-7506-4a85-9552-9cf255470779.png)


## Node and Npm
The project uses NPM to manage dependencies. please download the latest LTS Version: 18.16.0 (includes npm 9.5.1) and install it:
https://nodejs.org/en/download

## OpenJDK
Open JDK is needed for running tests in the emulator.
Download the JDK from:
https://jdk.java.net/20/
- extract contents of the .zip file to somewhere in your filesystem and copy the path
- Create a new environment variable called JAVA_HOME and set the value to the path to the folder containing jdk bin:

![image](https://user-images.githubusercontent.com/23452449/235389367-9c5dd9b9-fbad-4654-8f9b-0e8c687f31f1.png)

## Android Studio
We will use Android Studio to run run the emulator locally. Download it from:
https://developer.android.com/studio

### Setup Android Emulator (Pixel 6)
After installing Android studio and going through the initial setup in the wizard, next we need to setup the Android emulator. Follow the steps below to setup the Android emulator to run our application and tests on.

If on windows, make sure you have Windows Hypervisor Platform enabled from _Turn Windows features on or off_
![image](https://user-images.githubusercontent.com/23452449/234464529-15ce155b-1a2b-4745-b164-4774ab7ea862.png)

Select _Virtual Device Manager_ from the _More Actions_ drop down list
![image](https://user-images.githubusercontent.com/23452449/234455164-6be3be16-e4d3-4b9f-849a-d5b2d80db195.png)

Select _Create Device_ from the top left
![image](https://user-images.githubusercontent.com/23452449/234456826-4412ea91-2e94-4b4e-a42f-1c5bd4aea4c1.png)

Select _Pixel 6_ and click next
![image](https://user-images.githubusercontent.com/23452449/234457216-db1da38c-ed0e-4ddc-b31c-c24c2b761462.png)

Select the latest available API version and install _HAXM_ if your device supports it and click _Next_
![image](https://user-images.githubusercontent.com/23452449/234458203-319d9f33-7616-456f-9900-0ab54ac2616e.png)

Click _Finish_
![image](https://user-images.githubusercontent.com/23452449/234458669-b3385a70-8290-4aa2-9d63-855529c5febd.png)

Click on the _play_ button to start the emulator
![image](https://user-images.githubusercontent.com/23452449/234459487-72fc7605-9312-4005-843f-f9b7d814cb02.png)

Once you see the emulated device running, drag and drop the .apk file from ./app/android/ folder to the device to install it to the image

- find the location of the installed Android SDK with Android Studio's SDK Manager:

![image](https://user-images.githubusercontent.com/23452449/235389459-ae862ff0-c10e-4637-abd2-764cc1d4de49.png)
![image](https://user-images.githubusercontent.com/23452449/235389506-d434aa05-c7fc-4b21-a4c4-bfd40d9b55d1.png)
- copy the path to the sdk and create a new environment variable called ANDROID_HOME and set the value of that variable to the path:

![image](https://user-images.githubusercontent.com/23452449/235389588-da7dad29-150e-4386-96f1-fdb2736e7904.png)

## Appium Server
Our test framework uses Appium to communicate with the emulator.
Install appium server by running the following command in the commandline/powershell
```npm i -g appium@next```

## Appium Inspector
We will use Appium Inspector to inspect elements and find locators.
Download and Appium Inspector .exe from:
https://github.com/appium/appium-inspector/releases/tag/v2023.4.3

## npm packages
When all the above steps have been completed, open the cloned repository root folder in the commandline/powershell and run
```npm install```
to install the remaining dependencies

# Running tests locally
If you did not close the terminal session after setting the envrionment variables during installation, do it now before trying to run the tests as environment variables are loaded into the terminal session only when the session is started.

After installing all the above tools and depndenceis, you are ready to run a test. 
1. Open Android Studio Virtual Device Manager and press the play button
2. Start the Appium server. To start the server, run
```appium```
in your terminal
3. Open another terminal window, you can split the terminal or click the + sign to open another one:

![image](https://user-images.githubusercontent.com/23452449/235810427-15992411-d86a-4d0f-8036-695186ee666d.png)
![image](https://user-images.githubusercontent.com/23452449/235810290-8dd0b96f-ce39-4fb5-8563-477ec9677da7.png)

5. run ```npm run test -- --spec=./test/specs/1_LOGIN_valid_user.spec.js``` in the terminal window that is not running Appium to run the first test

# Troubleshooting Appium Installation
Appium Doctor is a utility to diagnose any issues with appium or test environment variables.

Install appium-doctor via npm:
1. In command prompt, enter ```npm install appium-doctor -g```.
2. Wait for the installation to be complete via command prompt window.
3. Run the appium doctor diagnostics by entering the following in command prompt: ```appium-doctor --android```.
4. Review and verify the green checkmark is shown for Node.js, Node, ANDROID_HOME, JAVA_HOME, bin values/versions/environment paths are set correctly.
5. Fix any of the installations or environment variables and run the diagnostics again: ```appium-doctor --android```.



Featureabc-change+morestuff+even more stuff

another change + 123