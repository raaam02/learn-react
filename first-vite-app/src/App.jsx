import Navbar from "./component/Navbar";
import Card from "./component/Card";
import { useState, useEffect } from "react";

function App() {
  // useState() hook
  /* useState hook is used to Store anything in a variable and to change that
  variable later using set method */
  const [count, setcount] = useState(0);

  // useEffect() hook
  /* useEffect() hook is used for show any chage(render) or work on any change(render)
  on a page mainly in 3 types/cases */

  // Case 1: Whenever anything change(render) on page
  useEffect(() => {
    alert("I will run on every render(change) on page");
  });

  // Case 2: Whenever 1st render means on page reload only
  useEffect(() => {
    alert("I will run on 1st render means only on page reload");
  }, []);

  // Case 3: Whenever any specified thing change(render) on page
  useEffect(() => {
    alert("I will run on every render(change) in count ");
  }, [count]);

  return (
    <>
      <Navbar />
      {/* Props {Property} Passing inside component */}
      <Card title={"Card 1"} desc={"this is card 1 description"} />
      <Card title={"Card 2"} desc={"this is card 2 description"} />
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Change {count}
      </button>
    </>
  );
}

export default App;
