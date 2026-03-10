const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/answer", (req, res) => {
  const q = req.body.question.toLowerCase();

  let answer = "Sorry, I don't know.";

  if(q.includes("rice")){
    answer = "Use nitrogen fertilizer and water regularly.";
  } else if(q.includes("wheat")){
    answer = "Use phosphorus fertilizer and sunlight.";
  }

  res.json({answer: answer});
});

app.listen(3000, () => console.log("Server running on port 3000"));
