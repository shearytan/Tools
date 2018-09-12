import React, { Component } from 'react'

import Button from '@material-ui/core/Button';

import './styles/index.css';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00:00",
      amPm: "",
      click: false,
    }
  }

  componentDidMount() {
    setInterval(this.getTime(), 1000);
  }

  getTime = () => {
    const addZero = (val) => val < 10 ? "0" + val : val,
          addTwelve = (val) => val > 12 ? val - 12 : val,
          addNoon = (val) => val >= 12 ? "pm" : "am";

    setInterval(() => {
      let d, s, m, h, t, a;
      
      d = new Date();
      s = addZero(d.getSeconds());
      m = addZero(d.getMinutes());
      h = this.state.click ? addZero(addTwelve(d.getHours())) : addZero(d.getHours());
      t = `${h} : ${m} : ${s}`
      a = addNoon(d.getHours());

      this.setState({time: t, amPm: a})
    }, 1000)
  }

  handleClick = () => {
    this.setState({click: !this.state.click});
  }

  render() {
    const { time, amPm, click} = this.state;
    return (
      <div>
        <Button variant="contained" size="large" onClick={this.handleClick}>
          <span className="clock">{time}&nbsp;{!click ? null : amPm}</span>
        </Button>
      </div>
    )
  }
}
