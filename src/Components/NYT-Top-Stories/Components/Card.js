import React from 'react'
import { Card, CardContent} from '@material-ui/core';

import Summary from './Summary';

const styles = {
    cardHeight: {
        height: '220px',
        width: '500px',
        overflow: 'auto'
    }
}

const NYTCard = ({data}) => (
    <div>
        {data !== [] ? 
            <Card style={styles.cardHeight}>
                <CardContent>
                    <Summary data={data}/>
                </CardContent>
            </Card>
            : <p>Loading...</p>}
    </div>
)

export default NYTCard;