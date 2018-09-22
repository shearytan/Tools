import React, { Component } from 'react';
import axios from 'axios';

import './styles/index.css';
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
            <div>
                {console.log(this.state.data)}
            </div>
        )
    }
}
