// create web server
const express = require("express");
// create web server
const app = express();
// create web server
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res));