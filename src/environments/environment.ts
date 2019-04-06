// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:  {
    apiKey: 'AIzaSyARllasipU-7JhdvtkRV25er--zMyOPEW0',
    authDomain: 'cloud-firestore-test-d95bf.firebaseapp.com',
    databaseURL: 'https://cloud-firestore-test-d95bf.firebaseio.com',
    projectId: 'cloud-firestore-test-d95bf',
    storageBucket: 'cloud-firestore-test-d95bf.appspot.com',
    messagingSenderId: '740765205427'
  }
};
export const version = 'Version 0.0.1.7';
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
