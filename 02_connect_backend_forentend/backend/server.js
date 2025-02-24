import express from "express";

const app = express();

const jokes = [
  {
    id: 1,
    joke: "Why don't scientists trust atoms? Because they make up everything!",
    content: "this is another joke",
  },
  {
    id: 2,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    content: "this is second joke",
  },
  {
    id: 3,
    joke: "What do you call fake spaghetti? An impasta!",
    content: "this is third joke",
  },
  {
    id: 4,
    joke: "Why don’t skeletons fight each other? They don’t have the guts.",
    content: "this is four joke",
  },
  {
    id: 5,
    joke: "What did one ocean say to the other ocean? Nothing, they just waved.",
    content: "this is five joke",
  },
];

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
