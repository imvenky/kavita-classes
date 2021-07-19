const firebase = require('firebase');

const config = require('./server');

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;