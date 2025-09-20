import React from 'react'
import './Board.css'
import Cell from '../Cell/Cell.jsx';

export default function Board(props) {

  const cells = props.cellValues.map((value, index) => {
     const canHighLight = props.winningCell &&
                          props.winningCell.indexOf(index) >= 0;

     return <Cell 
              key={index} 
              value={value} 
              canHighLight={canHighLight}
              onClick={() => props.cellClicked(index)} />;
 });

  return (
      <div id="board">
        {cells}
      </div>
    
  )
}

