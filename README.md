# Redux Skeleton App

https://user-images.githubusercontent.com/22340454/157483868-b5f5208d-0376-4926-8411-e4505e3ea922.mp4


This is a practical ready-to-go app skeleton. 
The propose for this repository is:
   - Having always a fresh app skeleton available
   - Possibilty to test different strategy with a clean app with no errors and totally upgraded. 


## Packages installed:

For the [Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/):
- @react-navigation/bottom-tabs

For the [Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)
- @react-navigation/stack
- react-native-gesture-handler

For the [Navigation](https://reactnavigation.org/docs/getting-started/)
- @react-navigation/native

To handle better the Sage Area (in particular better Android experience)
- react-native-safe-area-context


For enabling the SVG
- react-native-svg 
- react-native-svg-transformer

[REDUX TOOLKIT](https://github.com/reduxjs/redux-toolkit)
- yarn add @types/react-redux

[REACT REDUX](https://react-redux.js.org/introduction/getting-started)
- yarn add react-redux

[REDUX PERSIST](https://github.com/rt2zz/redux-persist)
- yarn add redux-persist

[ASYNC-STORAGE](https://react-native-async-storage.github.io/async-storage/docs/install/)
- yarn add @react-native-async-storage/async-storage

[AXIOS](https://github.com/axios/axios)
- yarn add axios

[CIRCULAR DEPENDENCIES](https://github.com/acrazing/dpdm)
Check if Redux is creating Circular Dependencies
- dpdm
- `yarn dpdm ./src/* --circular --exit-code circular:1 --warning=false`

## Tools

2. [Xcode](#xcode-setup)
3. [Android Studio](#android-studio-setup)

## Before you begin

1. Ensure your local machine is set up for React Native development. For up to date instructions on how to do this, visit the setup instructions on the official [React Native documentation](https://reactnative.dev/docs/environment-setup).

## Xcode Setup

You need at least Xcode 13, this is to ensure you have access to iOS 15. You can download from [here](https://developer.apple.com/xcode/resources/)

## Android Studio Setup

You need to install at least android studio canary 5. You can download from [here](https://developer.android.com/studio/archive)

## Installation

1. Clone this repo to your local machine

2. Install `node_modules` by running `yarn` (you may need to [install yarn](https://yarnpkg.com/getting-started/install) globally first).

3. Install pods by running `cd ./ios && pod install && cd ..`

4. clean Android by running `cd android && ./gradlew clean && cd ..`

### Running the app with react-native CLI

- Run the android app with `yarn android` or the iOS app with `yarn ios`. This will start the metro development server and run the app on a simulator.

### Running the app from XCode or Android Studio

For debugging iOS or Android specific bugs, it can be useful to run the app from XCode or Android Studio.

1. For XCode in the tab navigator (Product→ Build) or using the shortcut `⌘ + B`.

2. For Android Studio - navigate to the React Native App from Android Studio and open the `./android` folder. Wait for the Gradle Sync to finish and then navigate to Run -> Run App.

## Debugging

For debugging, we use [React Native Debugger](https://github.com/jhen0409/react-native-debugger). After this has been installed, open the debugger and run the app. You should see the JavaScript logs appear in the debugger console. You can execute and runs using the shortcut `⌘ + D`.

