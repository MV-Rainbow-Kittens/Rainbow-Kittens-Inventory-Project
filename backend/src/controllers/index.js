const sequelize = require("../db");
const User = require("../models/User");

/**
 * @desc Gets all users
 * @route GET /api/users
 */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users) {
      res.status(400).json({
        success: false,
        message: "No products found",
      });
    } else {
      res.status(200).json({
        users,
        success: true,
        message: "All products found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `- Error: ${error.message}`,
    });
  }
};

/**
 * @desc Delete single user by ID
 * @route DELETE /api/users/delete/:id
 */
exports.deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const userToDelete = await User.findByPk(userId);
    const deteledUser = await userToDelete.destroy();

    res.status(200).json({
      deteledUser,
      success: true,
      message: "User successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `- Error: ${error.message}`,
    });
  }
};

/**
 * @desc Creates a new user
 * @route POST /api/users/create
 */
exports.createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await User.create(newUser);

    res.status(200).json({
      createdUser,
      success: true,
      message: "User successfully created",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `- Error: ${error.message}`,
    });
  }
};