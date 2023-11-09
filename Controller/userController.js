const UserModel = require("../Model/userModel");

async function getUser(req, res) {
  try {
    res.send("Successufully get user");
  } catch (err) {
    console.log("Error", err);
    res.send("Not getting user");
  }
}

async function createUser(req, res) {
  try {
    console.log(req.body);
    const { fullName, email, password, mobile } = req.body;
    const user = new UserModel(req.body);
    const isSave = await user.save();
    if (isSave) 
    {
      res.json({
        msg: "user Created successully",
        status: 200,
        user: user,
      });
    }
  } catch (err) {
    console.log("Error", err);
  }
}

module.exports = { getUser, createUser };
