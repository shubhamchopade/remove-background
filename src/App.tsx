import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RemoveBackground } from "./RemoveBackground";

function App() {
  const [count, setCount] = useState(0);

  return <RemoveBackground />;
}

export default App;
