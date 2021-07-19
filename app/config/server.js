'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URI,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    API_ID
} = process.env;

assert(PORT, 'Port is required');
assert(HOST, 'Host is required');

module.exports = {
    port : PORT,
    host : HOST,
    host_url : HOST_URL,
    firebaseConfig = {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseUri: DATABASE_URI,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: API_ID
    }
}