const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// linking function to controller file
const {
  getCompliment,
  getFortune,
  addGoals,
  updateGoal,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goals", addGoals);
app.put("/api/goals", updateGoal);

app.listen(4000, () => console.log("Server running on 4000"));
