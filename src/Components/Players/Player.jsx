import { useState } from "react";

export default function Player({ initalName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initalName);
  const [isEditing, setIsEditing] = useState(false);

  function updatePlayerName(event) {
    setPlayerName(event.target.value);
  }

  function handelEditClick() {
    setIsEditing((editing) => !editing);
  }

  let editablePlayerName = <span className="player-name"> {playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={updatePlayerName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className={"player"}>
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          if (isEditing) {
            handelEditClick();
            onChangeName(symbol, playerName);
          } else {
            handelEditClick();
          }
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
