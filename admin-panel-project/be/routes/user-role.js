import express, { request, response } from "express";
const emp_router = express.Router();
export default emp_router;
import { getUserId } from "../services/user-role-service.js";

emp_router.get("/userId", async (request, response) => {
  const result = await getUserId();
  response.status(200).send(result);
});
