const express = require('express');
const sequelize = require('../db');
const User = require('../models/User');
const { getAllUsers, deleteUserById, createUser } = require('../controllers/index');

const router = express.Router();

router.get('*/users', getAllUsers); //get all users in database
router.delete('/users/delete/:id', deleteUserById);
router.post('/users/create', createUser);

module.exports = router;