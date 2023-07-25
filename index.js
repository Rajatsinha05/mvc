const express = require("express");
const connection = require("./config/db");
const Userrouter = require("./routes/user");
require("dotenv").config();
const app = express();
let port = process.env.Port || 8090;
app.use(express.json());

app.use("/user",Userrouter)



app.listen(port, () => {
  console.log(`listening on ${port}`);
  connection()
});
