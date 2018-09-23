import React, { Component } from 'react';
import {Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleFlip = () => {
        console.log("this is flippy")
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                {data ?
                    data.map((val, i) => (
                        <div>
                            <div>
                                <Card>
                                    <CardActionArea className="flip-container">
                                        <CardMedia 
                                            component="img"
                                            image={val.image}
                                            height="200px"
                                        />
                                        <CardContent className="flip-content">
                                            <h1>{val.name}</h1>
                                            <em>{val.house}</em>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>

                            <div onClick={this.handleFlip}>
                                <Card>
                                    <CardActionArea className="flip-container">
                                        <CardContent>
                                            <div className="flip-list">
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
                    ))
                    : <h1>Loading...</h1>
                }
            </div>
        )
    }
}
