const { Router } = require("express");

const authRouter = Router();

const users = require("../data/mockUsers");
const shortid = require("shortid");
const e = require("express");
const { signToken } = require("../util.js/token");

// Signup
authRouter.post("/signup", (req, res) => {
  const { email, password, name } = req.body;
  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "Username already exists." });
  }

  const newUser = {
    id: shortid.generate(),
    email,
    password,
    name,
  };

  const { password: _, ...userInfo } = newUser;

  users.push(newUser);
  res.status(201).json({
    message: "User registered successfully",
    user: userInfo,
  });
});

// Login
authRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  if (password !== password) {
    return res.status(401).json({ message: "Invalid password." });
  }

  const { id, name } = user;
  res
    .cookie(
      signToken({
        id,
        email,
        name,
      }),
      {
        httpOnly: true,
      }
    )
    .status(200)
    .json({
      message: "Login successful",
      token: signToken({
        id,
        email,
        name,
      }),
      user: {
        id: id,
        email: email,
        name: name,
      },
    });
});

module.exports = authRouter;
