import React, { useEffect, useState } from 'react';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';

const Feedbacks = () => {
    const [review,setReview]=useState([]);
    useEffect(()=> {
        fetch('https://creative-agency-tareq.herokuapp.com/reviews')
            .then(response => response.json()
                .then(data => setReview(data.splice(0,6)))
            )
    },[])
    return (
        <div className="container text-center">
            <br /> <br /> <br />
            <div className="services">
                <h1>Clients <span className="cus-color-green">Feedback</span></h1>
                <br />
                <br />
                <div className="row">
                    {review.map(review =><FeedbackDetails key={review._id} feedback={review}></FeedbackDetails>)}
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>
    );
};

export default Feedbacks;