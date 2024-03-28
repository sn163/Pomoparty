const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(5001, () => {
  console.log("App listening on port 5001");
});
