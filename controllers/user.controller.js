const User = require("../models/user.schema");

const userhome = (req, res) => {
  res.send("Welcome to the home page");
};
const login = (req, res) => {
  res.send("Welcome to the Route login Admin");
};

const signup = async (req, res) => {
    console.log(req.body)
  await User.create(req.body);
  res.send("Welcome to the Route signup Admin");
};
module.exports = { userhome, login,signup };
