import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import "./Giera.js";

const dupa = ["mleko", 5, "rujec"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        <main>
          <button class="" onclick="rollDice()">
            Step
          </button>
          <button class="" onclick="encounter()">
            Encounter
          </button>
        </main>
      </body>
    </>
  );
}

export default App;
