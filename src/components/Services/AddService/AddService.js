import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const AddService = () => {
    const [logged, setLogged] = useContext(UserContext);
    const [service,setService]=useState({});
    const change=(event)=>{
        const newEvents = { ...service };
            newEvents[event.target.name] = event.target.value;
            setService(newEvents);
    }
    const addService=(event) => {
        fetch(`https://creative-agency-tareq.herokuapp.com/addService`, {
            method: 'POST',
            body: JSON.stringify(service),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    return (
        <div className="">
            <br /><br />
            <form onSubmit={addService} action="">
                <div className="add-admin-form">
                    <label htmlFor="service-title">Service Title</label> <br />
                    <div className="add-admin-flex">
                        <input onChange={change} name='name' className="form-control" id="service-title" type="text" placeholder="Enter Title" />
                        <div className="add-service-image">
                            <input type="file" />
                        </div>
                    </div>
                    <br />
                    <label htmlFor="service-description">Description</label>
                    <br />
                    <textarea onChange={change} className="form-control" name="description" id="service-description" rows="3" placeholder='Enter Description'></textarea>
                </div>
                <div className="add-admin-send d-flex justify-content-end">
                    <button className="btn-success">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;