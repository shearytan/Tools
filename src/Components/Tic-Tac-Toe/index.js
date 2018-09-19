import React, { Component } from 'react'

import './styles/index.css';

export default class TicTacToe extends Component {
  render() {
    return (
      <div>
        <div className="board">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>

          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    )
  }
}

// Create 9 boxes
