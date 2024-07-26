const express = require ("express");

const router = express.Router();

const  userSignUpController =require("../controller/userSignUp")
const  userSignInController =require("../controller/userSignin")
const  userDetailsController = require("../controller/userDetails")
const authToken = require('../middleware/authToken');
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const contactusController = require("../controller/contactusController");
const contactDetailDisplay = require("../controller/contactusDetails");
const updateUser = require("../controller/updateUser");


router.post("/signup",  userSignUpController)
router.post("/signin",  userSignInController)

router.get("/user-details", authToken, userDetailsController)
router.get("/user-logout", userLogout)

// admin panel
router.get("/all-user",  allUsers);
router.post("/contact-details", contactusController );
router.get("/contact-service", contactDetailDisplay);
router.post("/update-user", authToken, updateUser);


module.exports = router; 