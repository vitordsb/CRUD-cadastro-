import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";


const app = express();

app.use(cors())
app.use(express.json());
app.listen(8800)

app.use("/", userRoutes)