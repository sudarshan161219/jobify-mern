import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//* -------- db connection import -------- //
import connect from "./db/connect.mjs";

//*  -------- route import --------  //
import authRouter from "./routes/authRoutes.mjs";
import jobsRouter from "./routes/jobsRoutes.mjs";

//*  -------- middleware imports --------  //
import notFoundMiddleware from "./middleware/not-found.mjs";
import errorHandlerMiddleware from "./middleware/error-handler.mjs";
import authenticateUser from "./middleware/auth.mjs";

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const __dirname = dirname(fileURLToPath(import.meta.url));

//* middleware  built in from express  //
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.resolve(__dirname, "../client/dist")));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}


//* routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"))
});



//* middleware //
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connect(uri);
    console.log("Connected to DB....");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
