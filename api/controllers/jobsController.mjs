const createJob = async (req, res) => {
  return res.send({ fn: "createJob" });
};

const getAllJobs = async (req, res) => {
  return res.send({ fn: "getAllJobs" });
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
