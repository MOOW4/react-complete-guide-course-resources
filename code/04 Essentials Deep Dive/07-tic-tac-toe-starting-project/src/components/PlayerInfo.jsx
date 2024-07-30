import { useState} from "react";

export default function PlayerInfo({ initialName, symbol , isActive, onChangeName}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    let buttonText = isEditing ? "Save" : "Edit";

    function handleClick() {
        // setIsEditing(isEditing ?  false : true);
        // setIsEditing(!isEditing);
        setIsEditing((prevIsEditing) => !prevIsEditing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
    function handleInput(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active": undefined}>
            <span className="player">
                {isEditing && <input type="text" required value={playerName} onChange={handleInput}></input>}
                {!isEditing && <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleClick()}>{buttonText}</button>
        </li>
    )
}