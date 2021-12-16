import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

const Square = (props) => {
  const onSquareClicked = () => {
    const updatedSquare = {
      id: props.id,
    };
    props.onClickCallback(updatedSquare);
  };

  return (
    <button className="square" onClick={onSquareClicked}>
      {props.value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
