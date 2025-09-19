import { useState } from 'react'
import './Board.css'

export default function Board() {

  return (
      <div id="board">
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
              <button className="cell">
                  <span className="cell-content"></span>
              </button>
          </div>
    
  )
}

