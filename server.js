import express from "express";
import dotenv from "dotenv";

import sequelize from "./data/db/connection";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.get("*", (req, res) => {
  res.send("Start");
});

app.listen(process.env.APP_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${process.env.APP_PORT}!`);
});
