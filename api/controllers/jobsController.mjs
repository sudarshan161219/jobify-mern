import Job from "../models/Job.mjs";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/export.js";
import checkPermissions from "../utils/checkPermissions.mjs";
//* Create job
const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

//* Get All job
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  return res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numofPages: 1 });
};

// * Update Job
const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job with id : ${jobId}`);
  }

  //$ check permissions
  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.CREATED).json({ updatedJob });
};

// * Delete Job
const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job with id : ${jobId}`);
  }
  checkPermissions(req.user, job.createdBy);
  await Job.findOneAndDelete();
  res.status(StatusCodes.OK).json({ msg: "Success job removed" });
};

const showStats = async (req, res) => {
  return res.send({ fn: "showStats" });
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
