import express from "express";
import cors from "cors";
import router from "../routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use((req, res) => {
  try {
    res.status(404).json({ message: ["Not Found"] });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: [error.message] });
  }
});

export default app;
