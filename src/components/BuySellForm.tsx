import { useState } from "react";
import axios from "axios";
export default function BuySellForm() {
  const [token, setToken] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [side, setSide] = useState<"buy" | "sell">("buy");

  const handleSubmit = async () => {
    try {
      const res = axios.post(`http://localhost:5000/${side}`, {
        user_id: 1,
        token,
        amount,
        side,
      });
      console.log((await res).data);
    } catch (error) {
      console.error("Error submitting trade:", error);
    }
  };

  return (
    <div className="container">
      <h1>Buy / Sell </h1>
      <select
        name="action"
        id="action"
        value={side}
        onChange={(e) => setSide(e.target.value as "buy" | "sell")}
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
