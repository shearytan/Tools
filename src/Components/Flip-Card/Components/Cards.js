import React, { Component } from 'react';
import {Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
        }
    }

    handleFlip = () => {
        this.setState({flipped: !this.state.flipped})
        console.log(this.state)
    }

    render() {
        const {val} = this.props;
        let cssFlipped = this.state.flipped ? 'back-flip' : 'front-flip';
        return (
            <div>
                <div onClick={this.handleFlip}>
                    <div>
                        <Card>
                            <CardActionArea className="flip-container cssFlipped">
                                <CardMedia 
                                    component="img"
                                    image={val.image}
                                    height="205px"
                                />
                                <CardContent className="flip-content">
                                    <h2>{val.name}</h2>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
        
                    <div>
                        <Card>
                            <CardActionArea className="flip-container cssFlipped">
                                <CardContent>
                                    <div className="flip-list">
                                        {val.house ? <p><b>House </b> {val.house}</p> : null}
        
                                        {val.dateOfBirth ? <p><b>DOB: </b> {val.dateOfBirth}</p> : null}
        
                                        {val.ancestry ? <p><b>Ancestry: </b>{val.ancestry}</p> : null}
                                        
                                        {val.patronus ? <p><b>Patronus: </b>{val.patronus}</p> : null}
        
                                        {val.eyeColour ? <p><b>Eye-Colour: </b>{val.eyeColour}</p> : null}
        
                                        {val.hairColour ? <p><b>Hair-Colour: </b>{val.hairColour}</p> : null}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}


