const express = require("express");
const {
  loginUser,
  signupUser,
  deleteUser,
  getAllUsers,
  insertManyUsers,
} = require("../controllers/userController");
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.post("/n", insertManyUsers);
module.exports = router;
