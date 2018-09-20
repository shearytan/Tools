import React, { Component } from 'react'

import './styles/index.css';
import Board from './Components/TicTacToe';

export default class TicTacToe extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    )
  }
}

// Create 9 boxes
// Fill the 9 boxes with empty string
// Create X and O click
// Check to see who is the winner
  // Winning pathway
