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

/**
 * @desc Updates a single user by ID
 * @route PUT /api/users/update/:id
 */
 exports.updateUser = async (req, res) => {
  try {
    const userToUpdate = await User.findByPk(req.params.id);
    const updatedProduct = await userToUpdate.update(req.body);

    res.status(200).json({
      updatedProduct,
      success: true,
      message: "User successfully updated",
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
 * @desc Search for a user by last name
 * @route GET /api/users/search?last_name=*insert last name here*
 */
exports.searchForLastName = async(req, res) => {
  try {
    const allUsers = await User.findAll();
    const lastName = req.query.last_name.toLowerCase();
    const usersFound = allUsers.filter((user) => user.last_name.toLowerCase().includes(lastName));

    res.status(200).json({
      usersFound,
      success: true,
      message: usersFound > 0 ? `Users with last name of ${lastName} found` : 'No matching last names'
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: `- Error: ${error.message}`,
    });
  }
}