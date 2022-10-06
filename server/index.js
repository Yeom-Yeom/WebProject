const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
require("dotenv").config();
const bcrypt = require("bcryptjs");
const saltRounds =  10;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost", //127.0.0.1:3306
  password: "y2kxtom16spu-",
  database: "test",
});

app.post("/add", async (req, res) => {
  const username = req.body.username;
  const regpass = req.body.password;
  const password = await bcrypt.hash(regpass, saltRounds);
  db.query(
    "INSERT INTO users (id, password) VALUES (?, ?)",
    [username, password],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});