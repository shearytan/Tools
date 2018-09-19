import React from 'react';
import moment from 'moment';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';

const Summary = ({data}) => (
    <div>
        { 
            data !== [] ? 
                data.map((val, i) => (
                    <ExpansionPanel key={i}>

                    <ExpansionPanelSummary expandIcon="+">
                        <div>
                            <small>{moment(val.published_date).format("ddd, Do MMM YYYY")}</small>
                            <b>{val.section}</b>
                        </div>
                        <p>{val.title}</p>
                    </ExpansionPanelSummary>

                        <ExpansionPanelDetails> 
                            {
                                val ? 
                                val.multimedia.slice(1, 2).map(val => (<img src={val.url} />)) : null
                            }
                            <p>{val.abstract}</p>
                            <em>{val.byline}</em>
                            <a href={val.short_url}>Link</a>
                        </ExpansionPanelDetails>

                    </ExpansionPanel>
                ))
            : <p>Loading...</p>
        }
    </div>
);

export default Summary;