import mongoose from "mongoose";

const connectDb = (uri) => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

export default connectDb;
