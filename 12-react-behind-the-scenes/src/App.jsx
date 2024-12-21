import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

import ConfigureCounter from "./components/ConfigureCounter.jsx";

function App() {
  console.log("Before the fcuntion that we have");
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCounter(newCounter) {
    setChosenCount(newCounter);
  }

  console.log("After curly braces");

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCounter={handleSetCounter} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
