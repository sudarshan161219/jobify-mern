import { StatusCodes } from "http-status-codes";
import User from "../models/User.mjs";
import { BadRequestError } from "../errors/export.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if(userAlreadyExists){
    throw new BadRequestError("Email already in use")
  }
  const user = await User.create({ name, email, password });
  return res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  return res.send({ fn: "login" });
};

const updateUser = async (req, res) => {
  return res.send({ fn: "update user" });
};

export { register, login, updateUser };
