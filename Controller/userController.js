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
    const {name,mobile} = req.body;
    res.json({
      msg: "user Created successully",
      status: 200,
      user:{name,mobile}
    });
  } catch (err) {
    console.log("Error", err);
  }
}

module.exports = { getUser, createUser };
