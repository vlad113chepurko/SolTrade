const { time } = require("console");
const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  token: { type: String, required: true },
  side: { type: String, required: true },
  tx_hash: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Trade", tradeSchema);
