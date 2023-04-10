import { Router } from "express";
const router = Router();
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, //$ 15 min
  max: 10,
  message:
    "Too many request from this IP address, please try again after 15 minutes.",
});

import authenticateUser from "../middleware/auth.mjs";
//*--> Import all controllers  <--*//
import { register, login, updateUser } from "../controllers/authController.mjs";

//* POST
router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);

//* PATCH
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
