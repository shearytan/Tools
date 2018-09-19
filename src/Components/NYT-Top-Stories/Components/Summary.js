import React from 'react';
import moment from 'moment';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';

const Summary = ({data}) => (
    <div>
        { 
            data ? 
                data.map((val, i) => (
                    <ExpansionPanel key={i} className="expansion-container">

                        <ExpansionPanelSummary expandIcon={<i className="fas fa-angle-double-down"></i>}>
                            <div className="expansion-summary">
                                <div className="expansion-summary-sub">
                                    <small>{moment(val.published_date).format("ddd, Do MMM YYYY")}</small>
                                    <b>{val.section}</b>
                                </div>
                                <h3>{val.title}</h3>
                            </div>
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails>     
                            <div className="expansion-details">
                                {
                                    val ? 
                                    val.multimedia.slice(3, 4).map(val => (<img src={val.url} />)) : null
                                }
                                <p>{val.abstract}</p>
                                <a href={val.short_url}><i className="fas fa-link fa-lg"></i></a>
                                <em>{val.byline}</em>
                            </div>
                        </ExpansionPanelDetails>

                    </ExpansionPanel>
                ))
            : null
        }
    </div>
);

export default Summary;