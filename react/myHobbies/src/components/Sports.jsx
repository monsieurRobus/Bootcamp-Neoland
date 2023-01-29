import React from 'react';
import Sport from './Sport';

import './sports.css'

const Sports = (sportsInfo) => {
    return (
        <section >
            <h1>My favourite sports and sportsmen</h1>
                <div className="sports">
                {   
                    (sportsInfo.data.map( (sport,index) => {
                        return <Sport key={index} data={sport} />
                    }))
                }
            </div>
        </section>
    );
}

export default Sports;
