const express = require("express");
const {
  createUser,
  deleteUser,
  getAllUsers,
  insertManyUsers,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.post("/n", insertManyUsers);
module.exports = router;
