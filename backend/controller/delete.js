const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');

router.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await userModel.findByIdAndDelete(userId);
    res.json({
      message: 'User deleted successfully',
      success: true,
      error: false
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
});

module.exports = router;
