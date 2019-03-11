# Reservations

## Installation

### Requisites

- XCode 10.1
- iPhone for physical device usage with XCode

### Steps

1. Clone the repo [https://github.com/rwschmitz/reservations.git](https://github.com/rwschmitz/reservations.git)
2. Run `npm install`
3. Run `react-native link`
4. Run `npm run start`
5. Open XCode
6. Navigate to `reservations/ios/reservations.xcodeproj`
7. In XCode, under the `general` tab, ensure that your signing is setup correctly.
  a. Perform this check for both reservations and reservationsTestes
8. Ensure your phone and the computer running XCode are on the same network.
9. In Xcode, click the play button to build and run the app.

## Troubleshooting

- If you're having issues with your `-tvOS` provisioning profiles, you may delete them.
  - In XCode, show the projects and target list.
  - Right click and delete the two `-tvOS` targets from the project.
  - [React Native link adds tvOS library targets to the ios target](https://github.com/facebook/react-native/issues/13783)

## Description

This is a React Native application built to handle reservations.

**Features included are**:

- Allow users to create a reservation.
- Allow users to view existing reservations.
- Allow users to refresh for the newest reservation data.
- Display confirmation screen to users upon successful reservation submit.

**Code organization**:

### Styles

- Each type of style is broken out into its own folder.
  - Wrappers, containers, colors, and text.
  - Provides a template for re-usable components.
  - Provides a logical orgnization about where certain styles may be located.

### Data/Graph

- The types that are defined are broken out into their own folders, queries and mutations.
  - This ensures it's easier to have a go to location for each type of action.
  - Extending apollo-client's query/mutation components gives us a better view into our types.

### Components

- Components in this project are thought of as building blocks for the screens.
- Although the screens are components themselves, much of the re-usability comes from the components folder.
- Screens handle our data and manipulating our data.
- Components show us that data.

### Folder

- Folder structure is the result of the breakdown of the three parts above.

**External packages**:

- Moment.js
  - [Documentation](http://momentjs.com/docs/)
  - Handles the formatting and date checking for our date related user inputs.

## Additional Commands

- Run `tsc -w` to start the TypeScript compiler in watch mode.
- Run `npm run test` to run all tests.

## Author

Rudolph W. Schmitz <rudolph.w.schmitz@gmail.com>

## License

This project is licensed using `GNU General Public License v3.0`
