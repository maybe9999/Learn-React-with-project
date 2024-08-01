import {useEffect, useState} from "react"
import "./style.css"

const player = {
    "A": "X",
    "B": "O"
}

const reglas = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],

    [1, 4, 7],

    [2, 4, 6],
    [2, 5, 8],

    [3, 4, 5],

    [6, 7, 8],
  ];

export function App(){
    const [board, setBoard] = useState(Array(9).fill(null)); //Elements in board
    const [turn, setTurn] = useState(player.A); //Current turn
    const [gameState, setGameState] = useState(null); //Winner
    const [history, setHistory] = useState([]); //History of movement
    
    function fillBox({index}){
        if (board[index] || gameState) return console.log(board[index] ? "Casilla ya ocupada" : gameState)
        
        agregaElement({index}) //Rellena casilla
        turno() //Cambia turno
    }

    useEffect(()=>{ // Chequea si hay un ganador. gameState
        console.log("check win")
        for (let a of reglas){
            if (board[a[0]] === board[a[1]] && board[a[1]] === board[a[2]] && board[a[0]]) setGameState(`${board[a[2]]}`)
        }
    }, [board])
    
    function agregaElement({index}){
        const tempBoard = [...board];
        const tempHistory = [...history];

        tempBoard[index] = turn;
        tempHistory.push(index);

        if (tempHistory.length >= 7){
            tempBoard[tempHistory[0]] = null
            tempHistory.shift()
        }

        setHistory(tempHistory);
        setBoard(tempBoard);
    }

    function turno(){
        if (turn === player.A) setTurn(player.B)
        else setTurn(player.A)
    }

    function restGame(){
        setBoard(Array(9).fill(null));
        setHistory([]);
        setGameState(null);
        setTurn(player.A);
    }

    return (
        <main>
            <section className="game">
                <h1 className="game-title">Ta-Te-Ti-Infinite</h1>
                <div className="game-board">
                    {board.map((content, index)=>{
                        return (
                            <div key={index} className={`game-board-square ${index === history[0] && history.length == 6 ? 'mid-hidden': ''}`} onClick={() =>{ fillBox({index}) }}>
                                {content}
                            </div>
                        )})
                    }
                </div>
            </section>
            <section className="content">
                <div className="content-text">
                    <p>
                        {`Turno: ${turn}`}<br></br>{`Ganador: ${gameState || ""}`}
                    </p>
                </div>
                <button onClick={restGame} className="content-button-retry">Retry</button>
            </section>
        </main>
    )
}