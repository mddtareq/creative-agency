import React from 'react';
import './FeedbackDetails.css';
import c2 from '../../../../images/customer-2.png'

const FeedbackDetails = ({feedback}) => {
    const { name, designation,review} = feedback;
    return (
        <div className="col-md-4 col-sm-6">
            <div className="client-review">
                <div className="d-flex">
                    <img src={c2} alt="" />
                    <div className="client-info">
                        <h6>{name}</h6>
                        <small>{designation}</small>
                    </div>
                </div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default FeedbackDetails;