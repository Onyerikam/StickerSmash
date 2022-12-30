# React Native/Expo Project in Clean-Code Architecture
An app made for photo editing

## Initial
1. ```$ git clone https://github.com/Onyerikam/StickerSmash.git``` or ```$ git clone git@github.com:Onyerikam/StickerSmash.git```
2. ```$ npm install```
3. ```$ npm start``` --To run Metro Bundler

## Deploy/Build apk
1. ```$ npm install -g eas-cli```
2. ```$ eas login```
3. ```$ eas build:configure```
4. For Android: ```$ eas build --platform android``` >> This is for aab/production/google play.
5. For Android: ```$ eas build -p android --profile preview``` >> This is for apk
6. For IOS: ```$ eas build --platform ios```
7. For All: ```$ eas build --platform all```
8. ```$ eas build:list```
9. > To learn how to install the app directly to your Android device/iOS Simulator, navigate to your build details page from your build dashboard and click the "Install" button.
10. For More info: ```$ start chrome https://docs.expo.dev/build/setup/```
