import { useState } from "react";

export default function Player({ name, symbol }) {
  const [editValue, setEditValue] = useState("edit");

  function handleClick(editing) {
    console.log(editing);
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick(editValue)}>{editValue}</button>
    </li>
  );
}
