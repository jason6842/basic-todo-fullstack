const express = require("express");
const app = express();
const PORT = 3000;
const todosRoute = require("./routes/todos");
const authRoute = require("./routes/auth");

app.use(express.json());

app.use("/todos", todosRoute);

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
