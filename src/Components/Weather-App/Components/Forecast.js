import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListeItemText from '@material-ui/core/ListItemText';

export default class Forecast extends Component {
    handleForecast = () => {
        const {forecast} = this.props;
        return (
            <div className="forecast-container">
                <Tabs scrollable scrollButtons="auto">
                    {
                        forecast.slice(5).map((val, index) => (
                            
                                <List key={index} className="forecast-list">
                                    <ListItem>
                                        <ListeItemText primary={`${val.item.forecast.day}, ${val.item.forecast.date}`} secondary={`${val.item.forecast.text}, ${val.item.forecast.low} - ${val.item.forecast.high}`} />
                                    </ListItem>
                                </List>
                            )
                        )
                    }
                </Tabs>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                {this.handleForecast()}
            </div>
        )
    }
}

