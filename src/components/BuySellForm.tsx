import { useState, useEffect } from "react";

export default function BuySellForm() {
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState(0);
  const [action, setAction] = useState("buy");

  return (
    <div className="container">
      <h1>Buy / Sell </h1>
      <select
        name="action"
        id="action  "
        value={action}
        onChange={(e) => setAction(e.target.value)}
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
      <button>Submit</button>
    </div>
  );
}
