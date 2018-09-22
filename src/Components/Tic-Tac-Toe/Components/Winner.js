import React from 'react';

const Winner = ({winner}) => (
    <div>
        {
            winner 
            ? <h3>And {`${winner}`} wins!</h3>
            : null
        }
    </div>
)

export default Winner;