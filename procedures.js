const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

let listResponse = [];
for (let i = 1; i <= 20; i++) {
  listResponse = [
    ...listResponse,
    {
      id: i,
      procedureType: `Trámite ${i}`,
      applicantId: `${1000000000 + i}`,
      dataDate: "2020-01-01",
      description: `Descripción del trámite ${i}`,
    },
  ];
}

app.get("/procedure", (req, res) => {
  res.send(listResponse);
});

app.post("/procedure", (req, res) => {
  console.log(`post req.body: ${JSON.stringify(req.body)}`);
  console.log(`post req.params: ${JSON.stringify(req.params)}`);
  console.log(`post req.query: ${JSON.stringify(req.query)}`);
  const postResult = {
    id: 21,
    procedureType: req.query.Nombre,
    applicantId: req.query.Identificacion,
    dataDate: "2020-01-01",
    description: req.query.Descripcion,
  };
  res.send(postResult);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
