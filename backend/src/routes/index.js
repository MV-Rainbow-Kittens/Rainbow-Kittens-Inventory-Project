const express = require('express');
const sequelize = require('../db');
const User = require('../models/User');
const { getAllUsers, deleteUserById, createUser, updateUser, searchForLastName } = require('../controllers/index');

const router = express.Router();

router.get('*/users', getAllUsers); //get all users in database
router.get('/users/search', searchForLastName);
router.delete('/users/delete/:id', deleteUserById); //delete user by id in database
router.post('/users/create', createUser); //create user in database
router.put('/users/update/:id', updateUser); //update user by id in database

module.exports = router;