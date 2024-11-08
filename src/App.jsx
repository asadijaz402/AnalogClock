import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AnalogClock from "./components/clock/AnalogClock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnalogClock />
    </>
  );
}

export default App;
