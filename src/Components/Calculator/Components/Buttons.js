import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div className="buttons">
                {this.props.children}
            </div>
        )
    }
}
