import React, { Component } from 'react'

import Cards from './Cards';

export default class Characters extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="flip-main-container">
                {  
                    data ?
                        data.map((val, i) => (
                            <Cards val={val} key={i}/>
                        ))
                    : "Loading..."
                }                
            </div>
        )
    }
}
