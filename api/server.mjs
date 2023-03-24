import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

//$ ---------------- //
import connect from "./db/connect.mjs";

//* middleware  //
import notFoundMiddleware from "./middleware/not-found.mjs";
import errorHandlerMiddleware from "./middleware/error-handler.mjs";

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
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
