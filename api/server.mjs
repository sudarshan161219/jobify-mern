import express from "express";
import "express-async-errors";
const app = express();
import dotenv from "dotenv";
dotenv.config();


//* -------- db connection import -------- //
import connect from "./db/connect.mjs";

//*  -------- route import --------  //
import authRouter from "./routes/authRoutes.mjs";
import jobsRouter from "./routes/jobsRoutes.mjs";

//*  -------- middleware imports --------  //
import notFoundMiddleware from "./middleware/not-found.mjs";
import errorHandlerMiddleware from "./middleware/error-handler.mjs";

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

//* middleware  built in from express  //
app.use(express.json());



app.get("/", (req, res) => {
  res.json({msg: "Hello, World!"});
});

//* routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

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
