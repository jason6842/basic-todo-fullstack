const shortid = require("shortid");
module.exports = [
  {
    id: shortid.generate(),
    email: "alice@example.com",
    password: "password123", // 🔒 In real use, this should be hashed
    name: "Alice Johnson",
  },
  {
    id: shortid.generate(),
    email: "bob@example.com",
    password: "qwerty456",
    name: "Bob Smith",
  },
  {
    id: shortid.generate(),
    email: "carla@example.com",
    password: "letmein789",
    name: "Carla Gomez",
  },
  {
    id: shortid.generate(),
    email: "daniel@example.com",
    password: "admin1234",
    name: "Daniel Lee",
  },
];
