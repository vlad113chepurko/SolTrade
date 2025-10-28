const express = require("express");
const process = require("process");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.POST || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
