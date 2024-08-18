let express = require("express");
let app = express();
let cors = require("cors");
let port = 3000;

app.use(cors());
app.use(express.json());

let { getAllEmployees, getEmployeeById } = require("./controllers/index.js");

//Exercise 1: Retrieve All Employees.
app.get("/employees", async (req, res) => {
  let employees = getAllEmployees();
  res.status(200).json({ employees });
});

//Exercise 2: Retrieve Employee by ID.
app.get("/employees/details/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let employee = getEmployeeById(id);
  res.status(200).json({ employee });
});

module.exports = {
  app,
  port,
};
