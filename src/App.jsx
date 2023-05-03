import ChoosePlayers from "./ChoosePlayers/ChoosePlayers";

import { useState } from "react";

import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChoosePlayers />
    </div>
  );
}

export default App;
