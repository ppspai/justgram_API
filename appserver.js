const http = require("http");
const express = require("express");

const { createUser, createPost, checklist } = require("./app");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "/pong" });
});

app.post("/signup", createUser);
app.post("/post", createPost);

app.get("/list", checklist);

const server = http.createServer(app);

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening on PORT 8000");
});
