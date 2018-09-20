import React, { Component } from 'react'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.gameState = {
      sign: "X",
      board: Array(9).fill(''),
      totalMove: 0
    }
  }

  handleClick = (e) => {
    if(this.gameState.board[e.dataset.square] === "") {
      this.gameState.board[e.dataset.square] = this.gameState.sign;
      e.innerText = this.gameState.sign;
      this.gameState.sign = (this.gameState.sign === "X" ? "O" : "X");
      this.gameState.totalMove++;
    }

    let winner = this.handleWinner();
    console.log("This is gameState: ", this.gameState)
  }

  handleWinner = (e) => {
      const winPath = [[0, 1, 2], [0, 3, 6], [6, 7, 8], [2, 5, 8], [0, 4, 8], [2, 4, 6], [1, 4, 7], [3, 4, 5]];
      let board = this.gameState.board;
      for(let i = 0; i < winPath.length; i++) {
          console.log("This is board: ", board[winPath[i][0]])
      }
  }

  render() {
    return (
        <div className="board" onClick={(e) => this.handleClick(e.target)}>
          <div className="box" data-square="1"></div>
          <div className="box" data-square="2"></div>
          <div className="box" data-square="3"></div>
          
          <div className="box" data-square="4"></div>
          <div className="box" data-square="5"></div>
          <div className="box" data-square="6"></div>

          <div className="box" data-square="7"></div>
          <div className="box" data-square="8"></div>
          <div className="box" data-square="9"></div>
        </div>
    )
  }
}