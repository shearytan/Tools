import React, { Component } from 'react';

import Clock from './Components/Clock';
import Apple from './Components/Apple/Apple';
import Calculator from './Components/Calculator';
import Weather from './Components/Weather-App';
import Background from './Components/Background';
import NYT from './Components/NYT-Top-Stories';
import TicTacToe from './Components/Tic-Tac-Toe';
import FlipCard from './Components/Flip-Card';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Clock />
        <NYT />
        <Apple />
        <Calculator />
        <Weather />
        <Background />
        <TicTacToe />
        <FlipCard />
      </div>
    );
  }
}

export default App;
