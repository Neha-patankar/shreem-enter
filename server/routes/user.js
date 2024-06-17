import express from 'express'
const router = express.Router();

import {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUserById,
} from "../controllers/user.js";

router.route("/").get(handleGetAllUsers).post(handleCreateNewUserById);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

export default router;
