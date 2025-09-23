import React from 'react'
import './Result.css'
import classNames from 'classnames'

export default function Result(props) {
    const resultClasses = classNames( {
        'modal-open' : props.IsGameOver
    });

    const message = props.winner ? `Winner is ${props.winner}!` : 'It is a tie!';

  return (
      <div>
        <div id="modal-overlay" className={resultClasses}>
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span>{message}</span>
                    </div>
                </div>
                <div id="new-game-container">
                    <button id="new-game-button"
                            onClick={props.onNewGameClicked}>Start New Game</button>
                </div>
            </div>
        </div>
      </div>
    
  )
}

