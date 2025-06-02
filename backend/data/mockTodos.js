const shortid = require("shortid");
module.exports = [
  {
    id: shortid.generate(),
    title: "Buy groceries",
    completed: false,
  },
  {
    id: shortid.generate(),
    title: "Walk the dog",
    completed: true,
  },
  {
    id: shortid.generate(),
    title: "Finish Express project",
    completed: false,
  },
  {
    id: shortid.generate(),
    title: "Read a chapter of a book",
    completed: true,
  },
];
