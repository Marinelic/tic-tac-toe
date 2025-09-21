import React from 'react'
import './Result.css'
import classNames from 'classnames'

export default function Result(props) {
    const resultClasses = classNames( {
        'modal-open' : props.IsGameOver
    });

  return (
      <div>
        <div id="modal-overlay" className={resultClasses}>
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span></span>
                    </div>
                </div>
                <div id="new-game-container">
                    <button id="new-game-button">Start New Game</button>
                </div>
            </div>
        </div>
      </div>
    
  )
}

