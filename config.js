const mongoose = require("mongoose");

function dataBaseConnection() {
  mongoose
    .connect(
      "mongodb+srv://ajay_singh:ajay123@cluster0.gdntiox.mongodb.net/userDataBase?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("Error", err);
    });
}
module.exports = dataBaseConnection;
