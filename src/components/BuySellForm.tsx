import React, { useState, useEffect } from "react";
import axios from "axios";
export default function BuySellForm() {
  const [token, setToken] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [action, setAction] = useState<"buy" | "sell">("buy");

  const handleSubmit = async (e: React.FormEvent) => {
    const res = axios.post(`http://localhost:5000/${action}`, {
      userId: 1,
      token,
      amount,
    });
    console.log((await res).data);
  };

  return (
    <div className="container">
      <h1>Buy / Sell </h1>
      <select
        name="action"
        id="action"
        value={action}
        onChange={(e) => setAction(e.target.value as "buy" | "sell")}
      >
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
      <input
        placeholder="Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <input
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        type="number"
        placeholder="Amount"
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
