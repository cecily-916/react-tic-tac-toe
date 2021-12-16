import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// This turns the 2D array into a 1D array
const generateSquareComponents = (squares, onClickCallback, gameStatus) => {
  const singleArraySquares = [].concat(...squares);
  return singleArraySquares.map((square) => {
    return (
      <Square
        value={square.value}
        id={square.id}
        onClickCallback={onClickCallback}
        key={square.id}
        gameStatus={gameStatus}
      />
    );
  });
};

const Board = ({ squares, onClickCallback, gameStatus }) => {
  const squareList = generateSquareComponents(
    squares,
    onClickCallback,
    gameStatus
  );
  console.log(squareList);
  return <div className="grid">{squareList}</div>;
};

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
  gameStatus: PropTypes.bool.isRequired,
};

export default Board;
