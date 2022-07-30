import cors from "cors";
import express, { json } from "express";
import { connect, connection } from "mongoose";
import routes from "./routes";

const app = express();
const port = 4000;

app.use(cors());
app.use(json());
app.use(routes);

connect("mongodb://localhost:27017/gym_system");

connection
  .once("open", () => {
    console.log("Connected to database");
  })
  .on("error", (error) => {
    console.log(error);
  });

app
  .listen(port, () => {
    console.log(`Server listening ${port}`);
  })
  .on("error", (error) => {
    console.log(error);
  });
