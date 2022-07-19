const express = require('express');
const { getAllUsers, deleteUserById, createUser, updateUser, searchForLastName, getSingleUser } = require('../controllers/index');

const router = express.Router();

router.get('*/users', getAllUsers); //get all users in database
router.get('/users/search', searchForLastName); //search for user by last name
router.get('/users/:id', getSingleUser); //get single user by id
router.delete('/users/delete/:id', deleteUserById); //delete user by id in database
router.post('/users/create', createUser); //create user in database
router.put('/users/update/:id', updateUser); //update user by id in database

module.exports = router;