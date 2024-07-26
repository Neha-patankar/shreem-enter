const userModel = require('../model/userModel');

async function allUsers(req, res) {
  try {
    console.log("userid all users", req.userId);

    const allUsers = await userModel.find();

    res.json({
      message: "All Users",
      data: allUsers,
      success: true,
      error: false
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
}

module.exports = allUsers;