import React, { Component } from 'react';
import axios from 'axios';

import './styles/index.css';
import Characters from './Components/Characters';
export default class FlipCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: '',
        }
    }
    componentDidMount() {
        axios.get('http://hp-api.herokuapp.com/api/characters/students')
            .then(res => this.setState({data: res.data}))
            .catch(err => this.setState({error: err}))
    }
    render() {
        return (
            <Characters data={this.state.data} />
        )
    }
}
