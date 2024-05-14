import express from "express";

const app = express();
const port = 3000;
var posts = [];
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
