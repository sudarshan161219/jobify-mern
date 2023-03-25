const register = async (req, res) => {
  return res.send({ fn: "register" });
};

const login = async (req, res) => {
  return res.send({ fn: "login" });
};

const updateUser = async (req, res) => {
  return res.send({ fn: "update user" });
};

export { register, login, updateUser };
