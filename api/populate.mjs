import { readFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

import connect from "./db/connect.mjs";
import Job from "./models/Job.mjs";


const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    await Job.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL("./MOCK_DATA.json", import.meta.url))
    );
    await Job.create(jsonProducts);
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start ()