import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';

const Services = () => {
    const [service,setService]=useState([]);
    useEffect(()=> {
        fetch('https://creative-agency-tareq.herokuapp.com/services')
            .then(response => response.json()
                .then(data => setService(data.splice(0,6)))
            )
    },[])
    return (
        <div className="container text-center">
            <br /> <br /> <br />
            <div className="services">
                <h1>Provide awesome <span className="cus-color-green">services</span></h1>
                <br />
                <br />
                <div className="row">
                    {service.map(service =><ServiceDetails key={service._id} service={service}></ServiceDetails>)}
                </div>
            </div>
            <br /> <br /><br />
        </div>
    );
};

export default Services;