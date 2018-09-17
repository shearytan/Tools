import React, { Component } from 'react';

import Clock from './Components/Clock';
import Apple from './Components/Apple/Apple';
import Calculator from './Components/Calculator';
import Weather from './Components/Weather-App';
import Background from './Components/Background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Apple />
        <Calculator />
        <Weather />
        <Background />
      </div>
    );
  }
}

export default App;
