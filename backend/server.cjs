const express = require("express");
const process = require("process");
const mongoose = require("mongoose");
const cors = require("cors");
const Trade = require("./schema/Trade.cjs");
const {
  Connection,
  PublicKey,
  Transaction,
  Keypair,
} = require("@solana/web3.js");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const connection = new Connection("https://api.mainnet-beta.solana.com");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log("Error connecting to MongoDB", err.message);
    process.exit(1);
  });

app.post("/buy", async (req, res) => {
  try {
    const { user_id, token, amount, side } = req.body;
    if (!user_id || !token || !amount || !side) {
      return res.status(400).send("Missing required fields");
    }
    const price = await getTokenPrice(token);
    const txHash = await buyTokenOnSolana(token, amount);

    const trade = new Trade({
      user_id,
      token,
      side,
      amount,
      price,
      txHash,
    });

    await trade.save();
    res.status(200).send("Buy request processed");
  } catch (err) {
    console.error("Error processing buy request:", err);
    res
      .status(500)
      .json({ message: "Error processing buy request", error: err.message });
  }
});

app.post("/sell", async (req, res) => {
  try {
    const { user_id, token, amount, side } = req.body;
    if (!user_id || !token || !amount || !side) {
      return res.status(400).send("Missing required fields");
    }
    const price = await getTokenPrice(token);
    const txHash = await sellTokenOnSolana(token, amount);

    const trade = new Trade({
      user_id,
      token,
      side,
      amount,
      price,
      txHash,
    });

    await trade.save();
    res.status(200).send("Buy request processed");
  } catch (err) {
    console.error("Error processing sell request:", err);
    res
      .status(500)
      .json({ message: "Error processing sell request", error: err.message });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
