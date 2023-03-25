import {StatusCodes} from "http-status-codes"
import User from "../models/User.mjs";

const register = async (req, res,) => {
    const user = await User.create(req.body);
    return res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  return res.send({ fn: "login" });
};

const updateUser = async (req, res) => {
  return res.send({ fn: "update user" });
};

export { register, login, updateUser };
