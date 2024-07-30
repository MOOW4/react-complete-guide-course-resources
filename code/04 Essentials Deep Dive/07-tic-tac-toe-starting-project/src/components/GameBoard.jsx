import {useState} from "react";


export default function GameBoard({handleSwitchPlayers, gameBoard}) {


    /*const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, cellIndex){
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // deep copy
            newGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
            return newGameBoard;
        });
        handleSwitchPlayers();
    }*/

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, cellIndex) => (<li key={cellIndex}>
                        <button onClick={() => handleSwitchPlayers(rowIndex, cellIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>))}
                </ol>
            </li>))}

        </ol>
    );
}