import emp_router from "../be/routes/user-role.js";
import express from "express";
import cors from "cors";
import fs from "fs";
console.log("its my app.js");

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());
app.use(emp_router);

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align:center'>User_id CRUD</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
