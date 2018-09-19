import React from 'react'
import { Card, CardContent} from '@material-ui/core';

import Summary from './Summary';

const styles = {
    cardStyle: {
        height: '400px',
        width: '500px',
        overflow: 'auto',
        background: '#003826',
    }
}

const NYTCard = ({data}) => (
    <div>
        {data !== [] ? 
            <Card style={styles.cardStyle}>
                <CardContent>
                    <Summary data={data}/>
                </CardContent>
            </Card>
            : <h1>Loading</h1>}
    </div>
)

export default NYTCard;