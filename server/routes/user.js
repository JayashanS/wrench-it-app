const express = require("express");
const {
  loginUser,
  signupUser,
  deleteUser,
  getAllUsers,
  insertManyUsers,
  getFullNameByEmail,
  changePassword,
} = require("../controllers/userController");
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/changepw", changePassword);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.post("/n", insertManyUsers);
router.get("/:email", getFullNameByEmail);
module.exports = router;
