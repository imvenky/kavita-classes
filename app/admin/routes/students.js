const express = require('express');
const {addStudent} = require('../controllers/student');

const router = express.Router();

router.post('/admin/student/', addStudent);

module.exports = {
    routes : router 
}