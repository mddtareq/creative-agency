import React, { useContext, useEffect, useState } from 'react';
import './ServiceDetails.css'
import design1 from '../../../images/icons/service1.png'
import design2 from '../../../images/icons/service2.png'
import { UserContext } from '../../../App';

const ServiceDetails = () => {
    const [logged, setLogged] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://creative-agency-tareq.herokuapp.com/orders/${logged.email}`)
            .then(response => response.json()
                .then(data => setOrder(data.splice(0, 6)))
            )
    }, [])
    return (
        <div className="row">
            {
                order.map(order =>
                    <div className="col-md-5 col-sm-6">
                        <div className="single-service">
                            <div className="ss d-flex justify-content-between align-items-center">
                                <img src={design1} alt="" />
                                <h6 className={order.status}>{order.status}</h6>
                            </div>
                            <h5>{order.service}</h5>
                            <p className="text-secondary">{order.details}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ServiceDetails;