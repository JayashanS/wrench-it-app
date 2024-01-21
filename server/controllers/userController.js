const User = require("../models/userModel");

const createUser = async (req, res) => {
  const { fname, lname, bday, email, pw, cpw } = req.body;

  try {
    const user = await User.create({
      fname,
      lname,
      bday,
      email,
      pw,
      cpw,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Could not create User" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ message: "User not Found", deletedUserId: userId });
    }

    return res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    console.error("Error deleting User", User);
    return res.status(500).json({ error: "Could not delete User" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching all users", error);
    res.status(500).json({ error: "Could not fetch all users" });
  }
};

const insertManyUsers = async (req, res) => {
  const usersToInsert = req.body;

  try {
    const insertedUsers = await User.insertMany(usersToInsert);
    res.status(201).json(insertedUsers);
  } catch (error) {
    console.error("Error inserting many users", error);
    res.status(500).json({ error: "Could not insert many users" });
  }
};

module.exports = { createUser, deleteUser, getAllUsers, insertManyUsers };
