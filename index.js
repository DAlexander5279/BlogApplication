import express from "express";

const app = express();
const port = 3000;
var posts = [];
var currId = 0;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", (req, res) => {
  let dte = new Date().toISOString().split("T")[0];
  let pst = {
    id: currId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: dte,
  };
  currId += 1;
  posts.push(pst);
  res.render("index.ejs", { posts: posts });
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
