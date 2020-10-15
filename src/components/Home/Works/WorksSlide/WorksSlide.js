import React from 'react';
import './WorksSlide.css';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css'

import carousel1 from '../../../../images/carousel-1.png'
import carousel2 from '../../../../images/carousel-2.png'
import carousel3 from '../../../../images/carousel-3.png'
import carousel4 from '../../../../images/carousel-4.png'
import carousel5 from '../../../../images/carousel-5.png'

const WorksSlide = () => {
    const options = {
        margin: 10,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            767: {
                items: 3,
            }
        },
    };
    return (
        <OwlCarousel options={options} >
            <div className="item">
                <img src={carousel1} alt="" />
            </div>
            <div className="item">
                <img src={carousel2} alt="" />
            </div>
            <div className="item">
                <img src={carousel3} alt="" />
            </div>
            <div className="item">
                <img src={carousel4} alt="" />
            </div>
            <div className="item">
                <img src={carousel5} alt="" />
            </div>
            <div className="item">
                <img src={carousel2} alt="" />
            </div>
            <div className="item">
                <img src={carousel3} alt="" />
            </div>
            <div className="item">
                <img src={carousel4} alt="" />
            </div>
            <div className="item">
                <img src={carousel5} alt="" />
            </div>
        </OwlCarousel>
    );
};

export default WorksSlide;