import React from 'react';
import './Works.css'
import WorksSlide from './WorksSlide/WorksSlide';

const Works = () => {
    return (
        <div className="works">
            <br/> <br/>
            <div className="container">
            <h1>Here are some of  <span className="cus-color-green">our works</span></h1>
                <br/>
                <WorksSlide></WorksSlide>
                <br/>
            </div>
        </div>
    );
};

export default Works;