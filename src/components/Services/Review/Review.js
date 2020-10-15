import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './Review.css';

const Review = () => {
    const [logged, setLogged] = useContext(UserContext);
    const [review,setReview]=useState({
        name:logged.name,

    });
    const change=(event)=>{
        const newEvents = { ...review };
            newEvents[event.target.name] = event.target.value;
            setReview(newEvents);
    }
    const addReview=(event) => {
        fetch(`https://creative-agency-tareq.herokuapp.com/review`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    return (
        <div className="">
            <br /><br />
            <div className="review-details">
                <form onSubmit={addReview} action="">
                <input onChange={change} className="form-control" type="text" value={logged.name} placeholder="Your Name" />
                <input onChange={change} className="form-control" name="designation" type="text" placeholder="Company name, Designation" required/>
                <textarea onChange={change} className="form-control" name="review" id="" rows="3" placeholder="Description" required></textarea>
                <div className="send">
                    <input type="submit" className="btn-black" />
                </div>
                </form>
            </div>
        </div>
    );
};

export default Review;