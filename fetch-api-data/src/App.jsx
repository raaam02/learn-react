import { useState, useEffect } from "react";
import Card from "./component/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl">fetch data from api</h1>
      <div className="grid grid-cols-4 gap-4 my-3">
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              id={user.id}
              title={user.title}
              body={user.body}
            />
          );
        })}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
