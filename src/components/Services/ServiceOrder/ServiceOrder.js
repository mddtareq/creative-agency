import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const ServiceOrder = ({service}) => {
    const [logged, setLogged] = useContext(UserContext);
    const [order,setOrder]=useState({
        name:logged.name,
        email:logged.email,
        status:'pending',
        service:'',

    });
    const change=(event)=>{
        const newEvents = { ...order };
            newEvents[event.target.name] = event.target.value;
            setOrder(newEvents);
    }
    const addOrder=(event) => {
        order.service=service.name;
        fetch(`https://creative-agency-tareq.herokuapp.com/order`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    return (
        <div className="">
            <br /><br />
            <form onSubmit={addOrder} action="">
                <input className="form-control" type="text" value={logged.name} placeholder="Your name / company’s name" />
                <input className="form-control" type="text" value={logged.email} placeholder="Your email address" />
                <input className="form-control" type="text" value={service.name} placeholder="Graphic Design" />
                <textarea onChange={change} name="details" className="form-control" id="" rows="3" placeholder="Project Details" required></textarea>
                <div className="half-input">
                    <input onChange={change} name="price" className="form-control" type="text" placeholder="Price" required/>
                    <input type="file" />
                </div>
                <div className="send">
                    <input className='btn-black' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default ServiceOrder;