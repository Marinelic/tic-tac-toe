import { useState } from 'react'
import './Game.css'
import Board from '../Board/Board.jsx'
import Result from '../Result/Result.jsx'

export default function Game() {
   const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);

   const [xIsNext, setXIsNext] = useState(true);

   const winningCell = [];

   const IsCellEmpty = (cellIndex) => cellValues[cellIndex] === '';
   

   const onCellClicked = (cellIndex) => {

      if (IsCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];

      newCellValues[cellIndex] = xIsNext ? 'X' : 'O';
      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
    }
  };

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
          <Board 
            cellValues={cellValues}
            winningCell={winningCell}
            onClick={onCellClicked}/>
      </div>

      <Result />
  </>
  )
}

