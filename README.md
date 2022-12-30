# React Native/Expo Project in Clean-Code Architecture
An app made for photo editing

## Initial
1. ```$ npm install```
2. ```$ npm start``` --To run Metro Bundler

## Deploy/Build apk
1. ```$ npm install -g eas-cli```
2. ```$ eas login```
3. ```$ eas build:configure```
4. For Android: ```$ eas build --platform android``` >> This is for aab/production/google play.
5. For Android: ```$ eas build -p android --profile preview``` >> This is for apk
6. For IOS: ```$ eas build --platform ios```
7. For All: ```$ eas build --platform all```
8. ```$ eas build:list```
9. >> To learn how to install the app directly to your Android device/iOS Simulator, navigate to your build details page from your build dashboard and click the "Install" button.
