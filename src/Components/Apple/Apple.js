import React, { Component } from 'react'

import Popover from '@material-ui/core/Popover';

import AppleLogo from './apple.svg';
import './Apple.css';

export default class Apple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
  }

  handleClick = e => {
    this.setState({anchorEl: e.currentTarget})
  }

  handleClose = e => {
    this.setState({anchorEl: null});
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{vertical: 'center',}}
          transformOrigin={{
            vertical: 'top',
          }}
        >
          <p className="popover">
            Just a simple SVG! <br />
            An apple logo without a bite!
          </p>
        </Popover>
        <div className="apple-container">
          <img src={AppleLogo} className="apple" onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}
