import { useState, useRef } from "react";

export default function Player() {
  const inputName = useRef();
  const [enteredName, setEnteredName] = useState(null);

  function handleClick() {
    setEnteredName(inputName.current.value);
    inputName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
