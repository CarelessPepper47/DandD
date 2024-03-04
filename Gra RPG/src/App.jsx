import { useState } from "react";
import "./index.css";
import "./Giera.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="flex flex-col">
          <button
            className="px-5 pt-2 bg-slate-500 align-middle"
            onClick={() => {
              rollDice();
            }}
          >
            Step
          </button>
          <button
            className=""
            onClick={() => {
              encounter();
            }}
          >
            Encounter
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
