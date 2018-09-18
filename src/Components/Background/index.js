import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAndornment from '@material-ui/core/InputAdornment';


import './styles/index.css';
import { Input, InputAdornment } from '@material-ui/core';

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e, color) => {
        e.preventDefault();
        this.colorChange(color)
    }

    colorChange = (color) => {
        return document.body.style.background = color;
    }

    render() {
        
        return (
                <form onSubmit={(e, color) => this.handleSubmit(e, this.state.value)} className="background-container">
                    <TextField 
                        label="Colour"
                        value={this.state.value}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        helperText="words, hex, rgb"
                    />
                    
                </form>
            
        )
    }
}
