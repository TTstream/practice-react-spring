import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setMsg(data));
  }, []);
  return (
    <div className="App">
      <div
        className="container"
        style={{
          width: "320px",
          border: "orange solid 4px",
          borderRadius: "30px",
        }}
      >
        <ul>
          {msg.map((content, id) => (
            <li key={id}>{content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
