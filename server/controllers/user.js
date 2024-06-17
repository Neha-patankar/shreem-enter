import User from "../model/user.js";

async function handleGetAllUsers(req, res) {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id);
  return res.json({ status: "Success" });
}
async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Successfully deleted" });
}

async function handleCreateNewUserById(req, res) {
  const body = req.body;

  if (
    !body ||
    !body.username ||
    !body.contact ||
    !body.email ||
    !body.service ||
    !body.message
  ) {
    console.log('Hey')
    return res.status(400).json({ msg: "All feilds are required" });
  }

  console.log(body)

  const result = await User.create({
    username: body.username,
    contact: body.contact,
    email: body.email,
    service: body.service,
    message: body.message,
  });
  console.log(result);
  return res.status(201).json({ msg: "Successfully created", id: result._id });
}

export {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUserById,
};
