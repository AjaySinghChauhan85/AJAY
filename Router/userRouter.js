const express = require("express");
const userController = require("../Controller/userController");
const router = express.Router();

router.get("/user", userController.getUser);
router.post("/registerUser", userController.createUser);

module.exports = router;
