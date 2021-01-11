const admin = require('firebase-admin');

const serviceAccount = require('../../caldar-rr-ac10c-firebase-adminsdk-hdwrw-0a80a90381.json');

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = firebaseApp;
