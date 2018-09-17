import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import './styles/index.css';

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
        console.log(this.state.value)
    }

    render() {
        return (
            <div className="background-container">
                This is background
                <FormControl>
                    <InputLabel>Color</InputLabel>
                    <Input value={this.state.value} onChange={this.handleChange}/>
                </FormControl>
            </div>
        )
    }
}
