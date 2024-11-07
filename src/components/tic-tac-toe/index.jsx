// 0 1 2
// 3 4 5
// 6 7 8

import { useEffect, useState } from "react";
import "./style.css";

function Square({ value, onClick }) {
  return <button onClick={onClick} className="square">{value}</button>;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [ isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  console.log(squares);  

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i=0; i<winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if(getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setSquares(cpySquares);
    setIsXTurn(!isXTurn)
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(null));
  }

  useEffect(() => {
    if(!getWinner(squares) && squares.every(item => item !== null)) {
      setStatus("Match Draw! Please start a new game");
    } else if(getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please start a new game`);
    } else {
      setStatus(`Next Player is ${isXTurn ? "X" : "O"}`)  
    }
  }, [squares, isXTurn])
  
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)}/>
        <Square value={squares[1]} onClick={() => handleClick(1)}/>
        <Square value={squares[2]} onClick={() => handleClick(2)}/>
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)}/>
        <Square value={squares[4]} onClick={() => handleClick(4)}/>
        <Square value={squares[5]} onClick={() => handleClick(5)}/>
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)}/>
        <Square value={squares[7]} onClick={() => handleClick(7)}/>
        <Square value={squares[8]} onClick={() => handleClick(8)}/>  
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}