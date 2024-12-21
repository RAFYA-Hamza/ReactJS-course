import { useState } from "react";
import { log } from "../log.js";

export default function ConfigureCounter({ onSetCounter }) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  log("<ConfigureCounter /> rendered", 1);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onSetCounter(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}