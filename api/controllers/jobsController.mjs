import Job from "../models/Job.mjs";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/export.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
 return res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numofPages: 1 });
};

const updateJob = async (req, res) => {
  return res.send({ fn: "updateJob" });
};

const deleteJob = async (req, res) => {
  return res.send({ fn: "deleteJob" });
};

const showStats = async (req, res) => {
  return res.send({ fn: "showStats" });
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
