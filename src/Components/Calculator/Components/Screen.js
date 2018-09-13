import React, { Component } from 'react'

export default class Screen extends Component {
    render() {
        const display = this.props.data.join('')
        return (
            <div className="screen">
                {display}
            </div>
        )
    }
}
