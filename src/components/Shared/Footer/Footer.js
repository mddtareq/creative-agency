import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="footer-info">
                            <h1>Let us handle your <br /> project, professionally.</h1>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                            <br/>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <div className="send-feedback">
                            <div className="form">
                                <input className="form-control" type="email" placeholder="Your email address" />
                                <input className="form-control" type="text" placeholder="Your name / company’s name" />
                                <textarea className="form-control" name="" id="" rows="7" placeholder="Your message"></textarea>
                                <button className="btn-black">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <div className="copyright-info text-center">
                    <p>copyright Orange labs 2020</p>
                </div>
                <br />
            </div>
        </div>
    );
};

export default Footer;