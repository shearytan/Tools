import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

import Forecast from './Components/Forecast'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Washington",
            data: [],
        }
    }

    componentDidMount() {
        this.getWeather();
    }

    handleChange = (e) => {
        this.setState({city: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getWeather(this.state.city)
    }

    getWeather = (e) => {
        axios
            .get(`https://query.yahooapis.com/v1/public/yql?q=select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text='${this.state.city}') and u='c' &format=json`)
            .then(res => {
                this.setState({data: res.data.query.results.channel})
                console.log("This is from res", res)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div> 
                <Forecast forecase={this.state.data}/>
                <form onSubmit={this.handleSubmit}>
                    <TextField 
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChange}
                        label="Enter a city"
                        margin="normal"
                    />
                </form>
                {console.log(this.state)}
            </div>
        )
    }
}
