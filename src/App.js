import { check } from 'prettier';
import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const playerOne = 'X';
const playerTwo = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }
  console.log(squares);
  return squares;
};

const App = () => {
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(playerOne);
  const [isGameOver, setGameStatus] = useState(false);
  const [winner, setWinner] = useState('');

  const updateOnClick = (updatedSquare) => {
    const squaresData = squares.map((row) => {
      row.map((square) => {
        if (square.id === updatedSquare.id) {
          if (square.value === '') {
            square.value = player;
            const updatedWinner = checkForWinner();
            if (updatedWinner) {
              setWinner(updatedWinner);
              setGameStatus(true);
            }
            setPlayer(player === playerOne ? playerTwo : playerOne);
          }
        }
      });
    });
  };

  // const handleWinner = () => {
  //   setGameStatus(winner ? true : false);
  // };

  const checkForWinner = () => {
    let i = 0;
    // Check all the rows and columns for a winner
    while (i < 3) {
      if (
        squares[i][0].value === squares[i][1].value &&
        squares[i][2].value === squares[i][1].value &&
        squares[i][0].value !== ''
      ) {
        return squares[i][0].value;
      } else if (
        squares[0][i].value === squares[1][i].value &&
        squares[2][i].value === squares[1][i].value &&
        squares[0][i].value !== ''
      ) {
        return squares[0][i].value;
      }
      i += 1;
    }
    // Check Top-Left to bottom-right diagonal
    if (
      squares[0][0].value === squares[1][1].value &&
      squares[2][2].value === squares[1][1].value &&
      squares[1][1].value !== ''
    ) {
      return squares[0][0].value;
    }

    // Check Top-right to bottom-left diagonal
    if (
      squares[0][2].value === squares[1][1].value &&
      squares[2][0].value === squares[1][1].value &&
      squares[1][1].value !== ''
    ) {
      return squares[0][2].value;
    }

    return null;
  };

  const resetGame = () => {
    setSquares(generateSquares());
    setWinner('');
    setGameStatus(false);
    setPlayer(playerOne);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ...{winner}</h2>
        <h2>It&apos;s {player}&apos;s turn! </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board
          squares={squares}
          onClickCallback={updateOnClick}
          gameStatus={isGameOver}
        />
      </main>
    </div>
  );
};

export default App;
