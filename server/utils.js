const { initializeApp, cert } = require('firebase-admin/app');
const admin = require('firebase-admin');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./creds.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = admin.firestore();
const Numbers = db.collection("Numbers")

module.exports = Numbers

