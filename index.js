const express = require("express");
const app = express();
const userController = require("./Controller/userController")
const port = 3000;

console.log("Error",userController)
app.get("/user",userController.getUser)

app.listen(port, (err) => {
  if (err) {
    console.log(`Server is Not Running on port ${port}`);
  }
  console.log(`Server is  Running on port ${port}`);
});
