const express = require('express');
const sequelize = require('../db');
const User = require('../models/User');
const { getAllUsers, deleteUserById } = require('../controllers/index');

const router = express.Router();

router.get('*/users', getAllUsers); //get all users in database
router.delete('/users/:id', deleteUserById);

module.exports = router;