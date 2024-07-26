const userModel = require('../model/userModel'); // Ensure correct import of userModel

async function updateUser(req, res) {
  try {
    const sessionUser = req.userId
    const { UserId, email, name, role } = req.body;

    if (!UserId) {
      return res.status(400).json({
        message: "UserId is required",
        error: true,
        success: false,
      });
    }

    const payload = {
      ...(email && { email }),
      ...(name && { name }),
      ...(role && { role }),
    };

    const user = await userModel.findById(sessionUser)
    console.log("user.role", user.role)

    const updatedUser = await userModel.findByIdAndUpdate(UserId, payload, { new: true });

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    res.json({
      data: updatedUser,
      success: true,
      error: false,
      message: "User updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "An error occurred",
      error: true,
      success: false,
    });
  }
}

module.exports = updateUser;
