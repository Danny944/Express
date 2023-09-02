import express from "express";

const app = express();
import { studentName } from "../Data/studentdata.js";

app.get("/names/:name", (req, res) => {
  let name = req.params.name;
  const foundStudent = studentName.find((student) => student.name === name);
  if (foundStudent) {
    res.send(foundStudent);
  } else {
    res.send("no name found");
  }
});

app.listen(3000, () => console.log("Server starting at port 3000"));
