const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, pw } = req.body;

  try {
    const user = await User.login(email, pw);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { fname, lname, bday, email, pw, cpw } = req.body;
  try {
    const user = await User.signup(fname, lname, bday, email, pw, cpw);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
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

const getFullNameByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with email", email });
    }

    const { fname, lname } = user;

    res.status(200).json({ fname, lname });
  } catch (error) {
    console.error("Error fetching user by email", error);
    res.status(500).json({ error: "Could not fetch user by email" });
  }
};

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const sendPasswordResetEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Password Reset Link",
    text: `Click the following link to reset your password: ${process.env.CLIENT_URL}/reset-password?token=${token}`,
  };

  await transporter.sendMail(mailOptions);
};

const changePassword = async (req, res) => {
  const { email, currentPassword, newPassword, confirmPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.pw);

    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "New passwords do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.pw = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res
      .status(500)
      .json({ message: "An error occurred while changing password" });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with this email" });
    }

    const resetToken = generateToken(user._id);
    await sendPasswordResetEmail(email, resetToken);

    res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (error) {
    console.error("Error sending password reset email:", error);
    res.status(500).json({
      message: "An error occurred while sending password reset email",
    });
  }
};

module.exports = {
  loginUser,
  signupUser,
  createUser,
  deleteUser,
  getAllUsers,
  insertManyUsers,
  getFullNameByEmail,
  changePassword,
  forgetPassword,
};
