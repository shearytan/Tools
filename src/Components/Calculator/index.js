import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import './styles/index.css';
import Buttons from './Components/Buttons';
import Screen from './Components/Screen';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: [],
        }
    }

    calculateTotal = () => {
        let total = this.state.total.join('')
        if(total) {
            total = eval(total).toFixed(2);
            this.setState({total: [total]})
        }
    }

    handleClick = (e) => {
        let arr = []
        let value = e.currentTarget.value;
        switch(value) {
            case "clear":
                this.setState({total: []});
                break;
            case "equal":
                this.calculateTotal();
                break;
            default:
                let arr = [...this.state.total];
                arr.push(value)
                this.setState({total: arr})
                break
        }
    }

    render() {
        return (
            <div className="calculator">
                <div className="screen-container">
                    <Screen data={this.state.total}/>
                </div>
                <Buttons>
                    <div className="buttons-group">
                        <Button onClick={this.handleClick} value="clear" variant="fab">AC</Button>
                        <Button onClick={this.handleClick} value="7" variant="fab">7</Button>
                        <Button onClick={this.handleClick} value="4" variant="fab">4</Button>
                        <Button onClick={this.handleClick} value="1" variant="fab">1</Button>
                        <Button onClick={this.handleClick} value="0" variant="fab">0</Button>
                    </div>

                    <div className="buttons-group">
                        <Button onClick={this.handleClick} value="." variant="fab">.</Button>
                        <Button onClick={this.handleClick} value="8" variant="fab">8</Button>
                        <Button onClick={this.handleClick} value="5" variant="fab">5</Button>
                        <Button onClick={this.handleClick} value="2" variant="fab">2</Button>
                        <Button onClick={this.handleClick} value="/100" variant="fab">%</Button>
                    </div>

                    <div className="buttons-group">
                        <Button onClick={this.handleClick} value={null} variant="fab">&nbsp;</Button>
                        <Button onClick={this.handleClick} value="9" variant="fab">9</Button>
                        <Button onClick={this.handleClick} value="6" variant="fab">6</Button>
                        <Button onClick={this.handleClick} value="3" variant="fab">3</Button>
                        <Button onClick={this.handleClick} value="equal" variant="extendedFab" color="primary" className="equal">=</Button>
                    </div>

                    <div className="buttons-group">
                        <Button onClick={this.handleClick} value="/" variant="fab" color="primary">÷</Button>
                        <Button onClick={this.handleClick} value="*" variant="fab" color="primary">x</Button>
                        <Button onClick={this.handleClick} value="-" variant="fab" color="primary">-</Button>
                        <Button onClick={this.handleClick} value="+" variant="fab" color="primary">+</Button>
                    </div>
                </Buttons>
            </div>
        )
    }
}
