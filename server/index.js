const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const app = express();
const PORT = config.get("serverPort");
const corsMiddleware = require("./middleware/cors.middleware");
const path = require("path");
const cardRouter = require("./routes/cards.routes");

app.use(corsMiddleware);
app.use(express.json());
app.use(express.static("public"));
app.use("/api/auth", authRouter);
app.use("/api", cardRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));
    app.listen(PORT, () => {
      console.log("Server started on port ", PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
