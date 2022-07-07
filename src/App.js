import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Quesdata from "./Slider-Component/Quesdata";

function App() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <div>Click me</div>
      <h3>Current theme is {theme}</h3> */}
      {/* <Button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </Button> */}
      <br />
      <span>{count}</span>
      <br />
      <Button onClick={() => setCount(count + 5)}>Add</Button>
      <Button
        onClick={() => {
          if (count > 0) {
            setCount(count - 5);
          }
        }}
      >
        Reduce
      </Button>
      <Quesdata/>
    </div>
  );
}

export default App;
