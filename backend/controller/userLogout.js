async function userLogout(req, res) {
  try{
      res.clearCookie("token")

      res.json({
        message: "Log out successfuly",
        error: faise,
        success: true,
        data : []
      });
  }catch(err){
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = userLogout;