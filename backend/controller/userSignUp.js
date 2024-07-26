
const bcrypt = require('bcryptjs');
const userModel = require('../model/userModel');

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    // Check if email, password, and name are provided
    if (!email) {
      throw new Error("Please provide an email");
    }

    if (!password) {
      throw new Error("Please provide a password");
    }

    if (!name) {
      throw new Error("Please provide a name");
    }

    // Check if user already exists
    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Something went wrong with password hashing");
    }

    // Prepare payload
    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };

    // Create a new user
    const newUser = new userModel(payload);
    const saveUser = await newUser.save();

    // Respond with success message
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfully",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
