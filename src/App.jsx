import { useState } from "react";
import Navbar from "../src/components/navbar";
import Body from "../src/components/body";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Body />

      <p>hola</p>
    </>
  );
}

export default App;
