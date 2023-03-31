import { Router } from "express";
const router = Router();


import authenticateUser from "../middleware/auth.mjs"
 //*--> Import all controllers  <--*//
import {register, login, updateUser}  from "../controllers/authController.mjs"

 

//* POST
router.route('/register').post(register)
router.route('/login').post(login)

//* PATCH
router.route('/updateUser').patch(authenticateUser, updateUser)



export default router;