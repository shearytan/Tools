import React, { Component } from 'react'
import axios from 'axios';

import NYTCard from './Components/Card';
import './styles/index.css';

export default class NYT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.getNews();
    }

    getNews = () => {
        const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=';
        const apiKey = "a677a50bab464f568d87cf60cd753023"
        axios
            .get(url + apiKey)
            .then(res => this.setState({data: res.data.results}))
            .catch(err => console.log("This is err: ", err))

    }

    render() {
        return (
            <div>
                <NYTCard data={this.state.data} />
            </div>
        )
    }
}
