import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("root get");
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
