import React from 'react';
import './NotFound.css'
import Footer from '../Shared/Footer/Footer';
import Menubar from '../Shared/Menubar/Menubar';

const NotFound = () => {
    return (
        <div>
            <div className="menu">
            <Menubar></Menubar>
            </div>
            <div className="notFound text-center">
            <h1>Page not Found.</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;