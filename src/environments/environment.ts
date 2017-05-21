import { AppSecrets } from '../secrets';

export const environment = {
  production: false,
  firebase: {
    apiKey: AppSecrets.firebaseApi,
    authDomain: "teamdynamics-7eb6e.firebaseapp.com",
    databaseURL: "https://teamdynamics-7eb6e.firebaseio.com",
    projectId: "teamdynamics-7eb6e",
    storageBucket: "teamdynamics-7eb6e.appspot.com",
    messagingSenderId: AppSecrets.firebaseMessagingSenderId
  }
};