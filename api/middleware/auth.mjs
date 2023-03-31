import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/export.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payLoad = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payLoad.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

export default auth;
