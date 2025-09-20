import { useState } from 'react'
import './Cell.css'
import classNames from 'classnames';

export default function Cell (props) {

    const cellClasses = classNames({
        cell : true,
        winner : props.canHighLight
    });

    const cellContentClasses = classNames({
        'cell-content' : true,
        populated : props.value
    });

  return (
      <button className={cellClasses} onClick={props.onClick}>
        <span className={cellContentClasses}>{props.value}</span>
      </button>
    
  )
}

