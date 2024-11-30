import { useState } from "react";

export default function Player({ initName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameEditing, setNameEditing] = useState(initName);

  let playerName = <span className="player-name">{nameEditing}</span>;

  function handleEditClick() {
    // when we need to update the state based on the previous value
    // the best practice is to pass a function in the setState
    setIsEditing((editing) => !editing);
  }

  function handleEditChange(event) {
    setNameEditing(event.target.value);
  }

  if (isEditing) {
    playerName = (
      <input
        type="text"
        value={nameEditing}
        required
        onChange={handleEditChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
