const { Router } = require("express");

const todosRouter = Router();
const shortid = require("shortid");

let todos = require("../data/mockTodos");

// READ
todosRouter.get("/", (req, res) => {
  res.json(todos);
});

// CREATE
todosRouter.post("/", (req, res) => {
  const { title } = req.body;

  const newTodo = {
    id: shortid.generate(),
    title: title,
    completed: false,
  };

  const { id: _, ...todoInfo } = newTodo;

  todos.push(newTodo);
  console.log(todos);

  res.status(201).json({
    message: "Todo received",
    todo: {
      ...todoInfo,
    },
  });
});

// UPDATE
todosRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const { title, completed } = req.body;

  todos[todoIndex] = {
    ...todos[todoIndex],
    title: title ?? todos[todoIndex].title,
    completed: completed ?? todos[todoIndex].completed,
  };

  res.status(200).json({
    message: `Todo with id ${id} has been updated successfully.`,
    todo: todos[todoIndex],
  });
});

// DELETE
todosRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const todoDelete = todos.find((todo) => todo.id !== id);
  if (!todoDelete) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos = todos.filter((todo) => todo.id !== id);
  res.status(200).json({ message: `Todo with ${id} deleted successfully.` });
});

module.exports = todosRouter;
