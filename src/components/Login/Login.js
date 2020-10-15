import React from 'react';
import logo from '../../images/logos/logo.png';
import GoogleLogin from './GoogleLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="login-details col-md-4 text-center">
            <Link to='/'><img src={logo} alt=""/></Link>
            </div>
            <div className="col-md-4"></div>
            <GoogleLogin></GoogleLogin>
            
        </div>
    );
};

export default Login;