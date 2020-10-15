import React, { useEffect, useState } from 'react';
import './AllServices.css'

const AllServices = () => {
    const [order, setOrder] = useState([]);
    const [currentState, setCurrentState] = useState(false);
    useEffect(() => {
        fetch(`https://creative-agency-tareq.herokuapp.com/orders`)
            .then(response => response.json()
                .then(data => setOrder(data))
            )
    }, [currentState])

    const change = (e,id) => {
        const status =  e.target.value;
        const order = { status };
        fetch(`https://creative-agency-tareq.herokuapp.com/orders/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        }).then(response => response.json())
        .then(result => {
            if (result) {
                setCurrentState(!currentState);
            }
        })
        
    }
    return (
        <div>
            <br />
            <div className="all-service">
                <div className="row all-services-header">
                    <div className="col-md-2">Name</div>
                    <div className="col-md-3">Email</div>
                    <div className="col-md-2">Service</div>
                    <div className="col-md-3">Project Details</div>
                    <div className="col-md-2">Status</div>
                </div>
                {
                    order.map(order =>
                        <div className="row all-services-content">
                            <div className="col-md-2">{order.name}</div>
                            <div className="col-md-3">{order.email}</div>
                            <div className="col-md-2">{order.service}</div>
                            <div className="col-md-3">{order.details}</div>
                            <div className="col-md-2">
                                <select onChange={(e) => change(e,order._id)} className={`status-select-`+order.status}>
                                    <option className={`option-`+ order.status} value={order.status}>{order.status}</option>
                                    <option className="option-pending" value="pending">pending</option>
                                    <option className="option-ongoing" value="ongoing">ongoing</option>
                                    <option className="option-done" value="done">done</option>
                                </select>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllServices;