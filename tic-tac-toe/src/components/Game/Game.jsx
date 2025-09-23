import { useState } from 'react'
import './Game.css'
import Board from '../Board/Board.jsx'
import Result from '../Result/Result.jsx'
import { calculateWinner } from '../../Utils/WinnerCalc.jsx'

export default function Game() {
   const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
   const [xIsNext, setXIsNext] = useState(true);
   const [isGameOver, setIsGameOver] = useState(false);
   const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(9);
   const winningCell = [];

   const IsCellEmpty = (cellIndex) => cellValues[cellIndex] === '';
   

   const onCellClicked = (cellIndex) => {

      if (IsCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];

      newCellValues[cellIndex] = xIsNext ? 'X' : 'O';

      const newNumverOfTurnsLeft = numberOfTurnsLeft - 1;


      // Calculate the result
        const calcResult = calculateWinner(newCellValues, newNumverOfTurnsLeft, cellIndex);


      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(calcResult.hasResult);
      setNumberOfTurnsLeft(newNumverOfTurnsLeft);
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

      <Result 
        IsGameOver={isGameOver}/>
  </>
  )
}

