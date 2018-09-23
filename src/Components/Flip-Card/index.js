import React, { Component } from 'react';
import axios from 'axios';

import './styles/index.css';
import Cards from './Components/Cards';
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
            <Cards data={this.state.data} />
        )
    }
}
