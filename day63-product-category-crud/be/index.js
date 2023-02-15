console.log("Day-63 category crud");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { uuid } = require("uuidv4");
const { request } = require("http");
const { response } = require("express");

const PORT = 8082;

const app = express();
app.use(cors());
app.use(express.json());

app
  .route("/category")
  .post((request, response) => {
    const body = request.body;
    const categoryData = fs.readFileSync("./data/category.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const categoryDataobj = JSON.parse(categoryData);
    const newCategory = {
      id: Date.now().toString(),
      name: body.catName,
    };

    categoryDataobj.push(newCategory);

    const writeCategoryData = fs.writerFileSync(
      "./data/category.json",
      JSON.stringify(categoryDataobj)
    );
    if (writeCategoryData) {
      response.json({
        status: "File write error",
        data: [],
      });
    } else {
      response.json({
        status: "success",
        data: categoryDataobj,
      });
    }
  })
  .get((request, response) => {
    const readCategoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    response.json({
      status: "success",
      data: JSON.parse(readCategoryData),
    });
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
