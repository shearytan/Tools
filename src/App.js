import React, { Component } from 'react';

import Clock from './Components/Clock';
import Apple from './Components/Apple/Apple';
import Calculator from './Components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Apple />
        <Calculator />
      </div>
    );
  }
}

export default App;
