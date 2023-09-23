
import React from 'react';

const Card = ({cardTitle, cardContent}) => {
    console.log()
    return (
        <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardContent}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
};

export default Card;