import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [value, setValue] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {value}
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
