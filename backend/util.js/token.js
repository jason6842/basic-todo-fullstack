const jwt = require("jsonwebtoken");

const JWT_SECRET = "your-secret-key";

// access token
const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "10m",
  });
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

module.exports = {
  signToken,
  verifyToken,
};
