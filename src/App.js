import React, { Component } from 'react';

import Clock from './Components/Clock';
import Calculator from './Components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Calculator />
      </div>
    );
  }
}

export default App;
