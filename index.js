import express from "express";

const app = express();
const port = 3000;
var posts = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", (req, res) => {
  let dte = new Date().toISOString().split("T")[0];
  let pst = {
    id: 0,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: dte,
  };
  posts.push(pst);
  organizeId();
  res.render("index.ejs", { posts: posts });
});

app.get("/post/:id", (req, res) => {
  let post = posts[req.params.id];
  console.log(post);
  res.render("post.ejs", { post: post });
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});

function organizeId() {
  for (let index = 0; index < posts.length; index++) {
    posts[index].id = index;
  }
}
