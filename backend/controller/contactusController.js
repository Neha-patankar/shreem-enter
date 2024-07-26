const contactUs = require('../model/contactUs');

async function contactusController(req, res) {
  try {
    console.log(req.body);
    const { username, contact, email, service, message } = req.body;

    if (!username) {
      throw new Error("Please provide a name");
    }
    if (!contact) {
      throw new Error("Please provide a mobile number");
    }
    if (!email) {
      throw new Error("Please provide an email");
    }
    if (!service) {
      throw new Error("Please provide a service");
    }
    if (!message) {
      throw new Error("Please provide a message");
    }

    const payload = { username, contact, email, service, message };

    const contactdetail = new contactUs(payload);
    const savedata = await contactdetail.save();

    console.log(savedata);

    res.status(201).json({
      data: savedata,
      success: true,
      error: false,
      message: "User details added successfully!"
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = contactusController;
