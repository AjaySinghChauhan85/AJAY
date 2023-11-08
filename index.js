const express = require("express");
const app = express();
const userController = require("./Controller/userController");
const userRouter = require("./Router/userRouter");
const port = 3000;
app.use(express.json());
app.use("/api",userRouter)

console.log("Error",userController)



app.listen(port, (err) => {
  if (err) {
    console.log(`Server is Not Running on port ${port}`);
  }
  console.log(`Server is  Running on port ${port}`);
});
