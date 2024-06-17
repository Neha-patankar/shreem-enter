import express from "express";
import { connecteToMongoDB } from "./connection.js";
import bodyParser from "body-parser";
import urlRouter from "./routes/user.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET, PUT, PATCH, POST, DELETE",
  })
);

const PORT = 8002;

connecteToMongoDB("mongodb://127.0.0.1:27017/user_data");
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", urlRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
