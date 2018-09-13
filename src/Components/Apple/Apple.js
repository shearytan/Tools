import React, { Component } from 'react'

import AppleLogo from './apple.svg';

export default class Apple extends Component {
  render() {
    return (
      <div>
        <img src={AppleLogo} />
      </div>
    )
  }
}
