import { Router } from "express";
const router = Router();

//*--> Import all controllers  <--*//
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.mjs";

router.route('/').post(createJob).get(getAllJobs)
//* remember about :id

router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router