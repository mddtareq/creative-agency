import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import cart from '../../../images/icons/cart.png';
import services from '../../../images/icons/services.png';
import review from '../../../images/icons/review.png';
import cartHover from '../../../images/icons/cartHover.png';
import servicesHover from '../../../images/icons/servicesHover.png';
import reviewHover from '../../../images/icons/reviewHover.png';
import logo from '../../../images/logos/logo.png';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Services.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import ServiceOrder from '../ServiceOrder/ServiceOrder';
import Review from '../Review/Review';

const Services = () => {
    const [logged, setLogged] = useContext(UserContext);
    const { id } = useParams();
    const history = useHistory();
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch('https://creative-agency-tareq.herokuapp.com/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logged.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    if(admin){
        history.push(`/admin`);
    }
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://creative-agency-tareq.herokuapp.com/services/${id}`)
            .then(response => response.json()
                .then(data => setService(data))
            )
    }, [])


    const orderMenu = () => {
        document.getElementById('order').style.display = 'block';
        document.getElementById('services').style.display = 'none';
        document.getElementById('review').style.display = 'none';
        document.getElementById('order-image').src = cartHover;
        document.getElementById('service-image').src = services;
        document.getElementById('review-image').src = review;
        document.getElementById('order-text').style.color = 'green';
        document.getElementById('services-text').style.color = 'black';
        document.getElementById('review-text').style.color = 'black';
        document.getElementById('show-top-menu').innerText = 'Order';

    }
    const servicesMenu = () => {
        document.getElementById('order').style.display = 'none';
        document.getElementById('services').style.display = 'block';
        document.getElementById('review').style.display = 'none';
        document.getElementById('order-image').src = cart;
        document.getElementById('service-image').src = servicesHover;
        document.getElementById('review-image').src = review;
        document.getElementById('order-text').style.color = 'black';
        document.getElementById('services-text').style.color = 'green';
        document.getElementById('review-text').style.color = 'black';
        document.getElementById('show-top-menu').innerText = 'Service Ordered';

    }
    const reviewMenu = () => {
        document.getElementById('order').style.display = 'none';
        document.getElementById('services').style.display = 'none';
        document.getElementById('review').style.display = 'block';
        document.getElementById('order-image').src = cart;
        document.getElementById('service-image').src = services;
        document.getElementById('review-image').src = reviewHover;
        document.getElementById('order-text').style.color = 'black';
        document.getElementById('services-text').style.color = 'black';
        document.getElementById('review-text').style.color = 'green';
        document.getElementById('show-top-menu').innerText = 'Review';
    }



    return (
        <div className="container-lg">
            <br />
            <div className="row user-info ">
                <div className="col-md-3 col-sm-3 col-4">
                    <div className="content-header">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-3">
                    <h3 id='show-top-menu'>Order</h3>
                </div>
                <div className="col-md-3 col-5 col-sm-3">
                    <h6>{logged.name}</h6>
                </div>
                <div className="col-md-3 col-sm-3 col-12 d-flex justify-content-center">

                    <div id="user-menu" className="menu-items">
                        <p id="order-text" onClick={orderMenu}><img id="order-image" src={cartHover} alt="" /> Order</p>
                        <p id="services-text" onClick={servicesMenu}><img id="service-image" src={services} alt="" /> Services</p>
                        <p id="review-text" onClick={reviewMenu}><img id="review-image" src={review} alt="" /> Review</p>
                    </div>


                </div>
                <div id="user-content" className="content-details col-sm-9 col-md-9">
                    <div id="order" className="order-info">
                        <ServiceOrder key={service._id} service={service}></ServiceOrder>
                    </div>
                    <div id="services" className="services">
                        <div className="single-service-info">
                            <ServiceDetails></ServiceDetails>
                        </div>
                    </div>
                    <div id='review' className="review">
                        <Review></Review>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;