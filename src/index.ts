import express from "express";
import rootRouter from "./routes/EntryRoutes";

const app = express();

app.use(express.json());
app.use("/entry", rootRouter);

app.post("/", (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}!`);
});

app.listen(3000, () => {
  console.log("running on port 3000!");
});
