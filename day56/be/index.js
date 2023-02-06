console.log("Day56 : REST API");

const { request, response } = require("express");
const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const { ModalBody } = require("react-bootstrap");
app.use(cors());
app.use(express.json());
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (request, response) => {
  response.send("<h1>Express REST API is running</h1>");
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }
    const timerData = JSON.parse(readData);
    response.json({
      status: "success",
      data: timerData,
    });
  });
});

app.delete("/timers", (request, response) => {
  const body = request.body;
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }
    const timerData = JSON.parse(readData);
    const filteredObject = timerData.filter((o) => o.id !== body.timerId);
    fs.writeFile(
      "./data/data.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});



app.put("/timers", (request, response) => {
  console.log(request.body);
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);
    const changedData = savedData.map((d) => {
      if ((d.id = request.body.id)) {
        (d.title = request.body.title),
          (d.project = request.body.project),
          (d.elapsed = request.body.elapsed),
          (d.id = request.bidy.id);
      }
      return d;
    });
    fs.writeFile(
        "./data/data.json",
        JSON.stringify(changedData),
        (writeError) => {
          if (writeError) {
            response.json({
              status: "file write error",
              data: [],
            });
          }
          response.json({
            status: "succes",
            data: changedData,
          });
        }
      );
  });
});
