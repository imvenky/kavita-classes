'use strict';
const firebase = require('../../config/db');
const Student = require('../models/student');
const firestore = firebase.firestore();


const addStudent = async(req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('students').doc().set(data);
        req.send('Request successful');
    } catch(error) {
        req.status(400).send(error);
    }
}

module.exports = {
    addStudent
}