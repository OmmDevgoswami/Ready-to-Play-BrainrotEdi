import React, { useState, useEffect } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isPlayerTurn ? "O" : "X";
    setBoard(newBoard);
    setIsPlayerTurn(!isPlayerTurn);
  };

  const computerMove = () => {
    if (!isPlayerTurn && !winner) {
      const emptySquares = board
        .map((val, idx) => (val === "" ? idx : null))
        .filter((val) => val !== null);
      const randomIndex =
        emptySquares[Math.floor(Math.random() * emptySquares.length)];
      if (randomIndex !== undefined) {
        setTimeout(() => handleClick(randomIndex), 500);
      }
    }
  };

  useEffect(() => {
    const checkWinner = (b, player) =>
      [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ].some((comb) => comb.every((i) => b[i] === player));

    if (checkWinner(board, "O")) {
      setWinner("Player (O) Wins!");
    } else if (checkWinner(board, "X")) {
      setWinner("Computer (X) Wins!");
    } else if (board.every((val) => val)) {
      setWinner("Draw!");
    } else {
      computerMove();
    }
  }, [board]);

  return (
    <div className="tic-tac-toe-page">
      <div className="tic-tac-toe">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {board.map((val, idx) => (
            <div
              key={idx}
              className={`square ${val}`}
              onClick={() => handleClick(idx)}
            >
              {val}
            </div>
          ))}
        </div>
        {winner && (
          <div className="winner">
            <p>{winner}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
