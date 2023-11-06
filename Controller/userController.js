async function getUser(req, res) {
  try {
    res.send(
     "Successufully get user",
      
    );
  } catch (err) {
    console.log("Error", err);
    res.send(
       "Not getting user",
     
    );
  }
}

module.exports = { getUser };
