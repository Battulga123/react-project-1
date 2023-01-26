console.log("Day-51 : API Express JS");

const { request, response } = require("express");
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.use(cors());

app.use(bodyParser.json());

let data = [
  {
    'name': "Tulgaa",
    'major': "BA",
    'id': 1,
  },
];

app.get("/", (request, response) => {
  response.send("Here I am a brutally powerfull Express Server! jgshg");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.post("/data", (request, response) => {
  const length = data.length
  const newData = {
    id: length + 1,
    name: request.body.name,
    major: request.body.major
  }
  data.push(newData);
  response.json(data)
  console.log(request.body)
});

app.delete("/data", (request, response) => {
  console.log(request.body);
  const newData = data.filter(d => d.id !== request.body.id)
  data = newData
  console.log(data)
  response.json(data);
});

app.listen(PORT, () => {
  console.log(`Serves is running on http://localhost:${PORT}`);
});
