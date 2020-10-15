import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Feedbacks from '../Feedbacks/Feedbacks/Feedbacks';
import Header from '../Header/Header';
import Partner from '../Partner/Partner';
import Services from '../Services/Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Partner></Partner>
            <Services></Services>
            <Works></Works>
            <Feedbacks></Feedbacks>
            <Footer></Footer>
        </div>
    );
};

export default Home;