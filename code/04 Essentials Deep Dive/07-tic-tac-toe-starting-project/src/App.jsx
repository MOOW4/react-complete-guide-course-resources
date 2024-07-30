import {useState} from "react";
import PlayerInfo from "./components/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
    X: "Player 1",
    O: "Player 2"
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
function deriveActivePlayer(turns) {
    let activePlayer = "X";
    if (turns.length > 0 && turns[0].player === "X") {
        activePlayer = "O";
    }
    return activePlayer;
}
function deriveWinner(gameBoard, players , gameTurns, hasDraw) {

    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquare = gameBoard[combination[0].row][combination[0].column];
        const secondSquare = gameBoard[combination[1].row][combination[1].column];
        const thirdSquare = gameBoard[combination[2].row][combination[2].column];

        if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
            winner = players[firstSquare];
        } else if (gameTurns.length === 9) {
            hasDraw = true
        }
    }
    return {winner, hasDraw};
}
function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])]; // deep copy
    for (const turn of gameTurns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }
    return gameBoard;
}




function App() {
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);

    const currentPlayer= deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);

    let hasDraw = false;

    const result = deriveWinner(gameBoard, players, gameTurns, hasDraw);
    const winner = result.winner;
    hasDraw = result.hasDraw;


    function handleSwitchPlayers(rowIndex, cellIndex) {
        setGameTurns((prevGameTurns) => {

            let activePlayer = deriveActivePlayer(prevGameTurns);
            const updateTurns = [{ square: {row: rowIndex, col: cellIndex}, player: activePlayer}, ...prevGameTurns];
            return updateTurns;
        });
    }

    function handleRematch() {
        setGameTurns([]);
    }
    function handleNameChange(playerSymbol, newName) {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [playerSymbol]: newName
            }
        });
    }

    return (<main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <PlayerInfo initialName={PLAYERS.X} symbol="X" isActive={currentPlayer === 'X' ? true : false} onChangeName={handleNameChange}/>
                <PlayerInfo initialName={PLAYERS.O} symbol="O" isActive={currentPlayer === 'O' ? true : false} onChangeName={handleNameChange}/>
            </ol>
            {(winner || hasDraw)&& <GameOver winner={winner} handleRematch={handleRematch}/>}
            <GameBoard handleSwitchPlayers={handleSwitchPlayers} gameBoard={gameBoard}/>
        </div>
        <Log turns={gameTurns}></Log>
    </main>)
}
export default App
