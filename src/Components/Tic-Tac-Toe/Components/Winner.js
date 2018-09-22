import React from 'react';

const Winner = ({winner}) => (
    <div>
        {
            winner 
            ? <h3>And {`${winner}`} is the winner!</h3>
            : null
        }
    </div>
)

export default Winner;