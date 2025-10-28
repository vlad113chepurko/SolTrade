import "./App.css";
import BuySellForm from "./components/BuySellForm";
import PnLDisplay from "./components/PnLDisplay";

function App() {
  return (
    <div className="app">
      <BuySellForm />
      <PnLDisplay />
    </div>
  );
}

export default App;
