import React from 'react';
import './Partner.css';
import partner1 from '../../../images/logos/slack.png';
import partner2 from '../../../images/logos/google.png';
import partner3 from '../../../images/logos/uber.png';
import partner4 from '../../../images/logos/netflix.png';
import partner5 from '../../../images/logos/airbnb.png';

const Partner = () => {
    return (
        <div className="container">
            <br/><br/>
            <div className="partner d-flex justify-content-around">
            <img src={partner1} alt=""/>
            <img src={partner2} alt=""/>
            <img src={partner3} alt=""/>
            <img src={partner4} alt=""/>
            <img id="p5" src={partner5} alt=""/>
        </div>
        </div>
    );
};

export default Partner;