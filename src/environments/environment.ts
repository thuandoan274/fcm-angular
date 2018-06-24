// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCsvUV79uQX3ZEK6HaA_Yg0nKfjIMTEIj0",
    authDomain: "my-fcm-test-23814.firebaseapp.com",
    databaseURL: "https://my-fcm-test-23814.firebaseio.com",
    projectId: "my-fcm-test-23814",
    storageBucket: "my-fcm-test-23814.appspot.com",
    messagingSenderId: "52868937389"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
