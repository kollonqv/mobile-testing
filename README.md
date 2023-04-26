# mobile-testing

npm run test -- --spec=./test/specs/4_PRODUCT_onesie.spec.js


# Tools and Dependencies

## Github Desktop or Git command line tools
Git commandline tools: 
https://git-scm.com/downloads

GitHub Desktop if you prefer to use Git through a UI:
https://desktop.github.com/

## Node and Npm 
Latest LTS Version: 18.16.0 (includes npm 9.5.1):
https://nodejs.org/en/download

## Android Studio
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


