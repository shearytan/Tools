import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Forecast from './Components/Forecast'
import './styles/index.css';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Washington",
            data: [],
            error: false,
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
                this.setState({
                    data: res.data.query.results.channel,
                    error: false,
                })
                console.log(res)
            })
            .catch(err => {
                this.setState({error: true})
                console.log(err)
            })
    }

    render() {
        const { error, city, data } = this.state;
        return (
            <Card className="card"> 
                <Typography gutterBottom variant="headline" component="h2">Weather</Typography>
                <pre className="card-title-pre">{city}</pre>

                {error ? 
                    <Typography gutterBottom variant="headline" component="h2" color="error">No result</Typography> 
                    : <Forecast forecast={data}/>
                }

                <form onSubmit={this.handleSubmit}>
                    {error ? 
                        <TextField
                            error
                            label="Error"
                            value={city}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        :
                        <TextField 
                            name="city"
                            value={city}
                            onChange={this.handleChange}
                            label="Enter a city"
                            margin="normal"
                        />
                    }
                </form>
            </Card>
        )
    }
}
