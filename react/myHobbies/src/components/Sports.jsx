import React from 'react';
import Sport from './Sport';

const Sports = (sportsInfo) => {
    return (
        <section>
            <h1>My favourite sports and sportsmen</h1>
            {
                (sportsInfo.data.map( (sport) => {
                    <Sport data={sport} />
                }))
            }
        </section>
    );
}

export default Sports;
