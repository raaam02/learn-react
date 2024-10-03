import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import NotesContainer from "./component/NotesContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <NotesContainer />
    </>
  );
}

export default App;
