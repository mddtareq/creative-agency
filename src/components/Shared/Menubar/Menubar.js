import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './Menubar.css';

const Menubar = () => {
    const [logged, setLogged] = useContext(UserContext);
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
    return (
        <Navbar expand="lg">
            <div className="custom-nav container">
                <Navbar.Brand className="logo-style" href="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links ml-auto">
                        <Link to="/">Home</Link>
                        <Link to="/portfolio">Our Portfolio</Link>
                        <Link to="/team">Our Team</Link>
                        <Link to="/contact">Contact Us</Link>
                        {admin && <Link to="/admin">Admin</Link>}
                        {!logged.isSignIn ? <Link to="/login" className="btn-black">Login</Link> :
                            <Link to="/login">{logged.name}</Link>}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Menubar;