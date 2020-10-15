import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import './Header.css'
import frame from '../../../images/logos/Frame.png'

const Header = () => {
    return (
        <div className='header'>
            <Menubar></Menubar>
            <div className="container">
                <br/><br/>
                <div className="row">
                    <div className="col-sm-5 col-md-5 introduction">
                        <br/>
                        <h1>Let’s Grow Your<br/>
                        Brand To The<br/>
                        Next Level
                        </h1>
                        <br/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
                        </p>
                        <br/>
                        <button className="btn-black">
                            Hire us
                        </button>
                        <br /><br />
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-sm-6 col-md-6">
                        <img src={frame} alt="" />
                    </div>
                </div>
                <br /><br /> <br /><br />
            </div>
        </div>
    );
};

export default Header;