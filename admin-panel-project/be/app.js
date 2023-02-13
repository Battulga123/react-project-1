const { request, response } = require("express");
console.log("its my app.js");

// import neccesary module
const express = require("express");
const cors = require("cors");
const fs = require("fs"); // file system

// configuration of modules

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
