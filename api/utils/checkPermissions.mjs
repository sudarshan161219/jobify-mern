import { UnauthenticatedError } from "../errors/export.js";

const checkPermissions = (requestUser, resoureceUserId) => {
  if (requestUser.userId === resoureceUserId.toString()) return;
  throw new UnauthenticatedError("Not authorized to access this route");
};

export default checkPermissions;
