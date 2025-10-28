export default function BuySellForm() {
  return (
    <div className="container">
      <h1>Buy / Sell </h1>
      <select name="" id="">
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
      <input placeholder="Token" />
      <input type="number" placeholder="Amount" />
      <button>Submit</button>
    </div>
  );
}
