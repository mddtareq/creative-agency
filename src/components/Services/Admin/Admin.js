import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import services from '../../../images/icons/services.png';
import servicesHover from '../../../images/icons/servicesHover.png';
import addService from '../../../images/icons/plus.png';
import addAdmin from '../../../images/icons/add.png';
import addServiceHover from '../../../images/icons/plusHover.png';
import addAdminHover from '../../../images/icons/addHover.png';
import logo from '../../../images/logos/logo.png';
import AllServices from '../AllServices/AllServices';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Link, useHistory } from 'react-router-dom';
import '../Services/Services.css';

const Admin = () => {
    const [logged, setLogged] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        fetch('https://creative-agency-tareq.herokuapp.com/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logged.email })
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
                if(!data){
                    history.push(`/`)
                }
            });
    }, [])


    const allServicesMenu = () => {
        document.getElementById('all-Services').style.display = 'block';
        document.getElementById('add-service').style.display = 'none';
        document.getElementById('make-admin').style.display = 'none';
        document.getElementById('all-services-image').src = servicesHover;
        document.getElementById('add-services-image').src = addService;
        document.getElementById('add-admin-image').src = addAdmin;
        document.getElementById('all-services-text').style.color = 'green';
        document.getElementById('add-services-text').style.color = 'black';
        document.getElementById('add-admin-text').style.color = 'black';
        document.getElementById('show-top-menu').innerText = 'All Services';

    }

    const addServicesMenu = () => {
        document.getElementById('all-Services').style.display = 'none';
        document.getElementById('add-service').style.display = 'block';
        document.getElementById('make-admin').style.display = 'none';
        document.getElementById('all-services-image').src = services;
        document.getElementById('add-services-image').src = addServiceHover;
        document.getElementById('add-admin-image').src = addAdmin;
        document.getElementById('all-services-text').style.color = 'black';
        document.getElementById('add-services-text').style.color = 'green';
        document.getElementById('add-admin-text').style.color = 'black';
        document.getElementById('show-top-menu').innerText = 'Add Service';

    }

    const addAdminMenu = () => {
        document.getElementById('all-Services').style.display = 'none';
        document.getElementById('add-service').style.display = 'none';
        document.getElementById('make-admin').style.display = 'block';
        document.getElementById('all-services-image').src = services;
        document.getElementById('add-services-image').src = addService;
        document.getElementById('add-admin-image').src = addAdminHover;
        document.getElementById('all-services-text').style.color = 'black';
        document.getElementById('add-services-text').style.color = 'black';
        document.getElementById('add-admin-text').style.color = 'green';
        document.getElementById('show-top-menu').innerText = 'Add Admin';

    }
    return (
        <div>
            { admin &&
                <div className="container-lg">
                <br />
                <div className="row user-info ">
                    <div className="col-md-3 col-sm-3 col-4">
                        <div className="content-header">
                            <Link to='/'><img src={logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-3">
                        <h3 id="show-top-menu">All Services</h3>
                    </div>
                    <div className="col-md-3 col-5 col-sm-3">
                        <h6>{logged.name}</h6>
                    </div>
                    <div className="col-md-3 col-sm-3 col-12 d-flex justify-content-center">
                     
                                <div id="admin-menu" className="menu-items">
                                    <p id="all-services-text" onClick={allServicesMenu}><img id="all-services-image" src={servicesHover} alt="" /> Services List</p>
                                    <p id="add-services-text" onClick={addServicesMenu}><img id="add-services-image" src={addService} alt="" /> Add Service</p>
                                    <p id="add-admin-text" onClick={addAdminMenu}><img id='add-admin-image' src={addAdmin} alt="" />Make Admin</p>
                                </div>
                                
                    </div>
                            <div id="admin-content" className=" content-details col-sm-9 col-md-9">
                                <div id="make-admin" className="make-admin">
                                    <MakeAdmin></MakeAdmin>
                                </div>
                                <div id="add-service" className="add-service">
                                    <AddService></AddService>
                                </div>
                                <div id="all-Services" className="services-list">
                                    <AllServices></AllServices>
                                </div>
                            </div>
                            
                </div>
        
            </div>
            }
        </div>
    );
};

export default Admin;