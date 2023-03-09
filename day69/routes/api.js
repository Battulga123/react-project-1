import express, { request, response } from "express";
// const emp_router = express.Router();
import {
  fireEmployee,
  getEmployees,
  getMaxNo,
  hireEmployee,
  updateEmployee,
} from "../services/employee-services.js";

const apiRouter = express.Router();
import { getPopularCategories } from "../services/category-services.js";
import { getChildrenMenus, getParentMenus } from "../services/menus-service.js";

apiRouter.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});

apiRouter.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();

  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id);
      parent.children = children;
      return parent;
    })
  );

  response.status(200).send(parentMenus);
});

// emp_router.get("/employees", async (request, response) => {
//   const result = await getEmployees();
//   response.status(200).send(result);
// });

// emp_router.put("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await updateEmployee(body.empNo, body.lastName, body.gender);
//   console.log(result);
//   response.status(200).send({});
// });

// emp_router.delete("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);

//   const result = await fireEmployee(body.empNo);

//   response.status(200).send({ result });
// });

// emp_router.post("/employee", async (request, response) => {
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body;
//   const { max } = await getMaxNo();
//   console.log(max);
//   const result = await hireEmployee(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   );
//   console.log(result);
//   response.status(200).send({});
// });

// export default emp_router;

export default apiRouter;
