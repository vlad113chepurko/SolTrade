const express = require("express");
const process = require("process");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const 

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("Alevice-Claster");
    const collection = db.collection("PnL");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();
