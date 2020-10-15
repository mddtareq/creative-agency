import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [logged, setLogged] = useContext(UserContext);
    const [admin, setAdmin]=useState({});
    const change=(event)=>{
        const newEvents = { ...admin };
            newEvents[event.target.name] = event.target.value;
            setAdmin(newEvents);
    }
    const addAdmin=(event) => {
        fetch(`https://creative-agency-tareq.herokuapp.com/addAdmin`, {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    return (
        <div className="">
            <br /><br />
            <div className="admin-email">
                <label htmlFor="email">Email</label>
                <br />
                <form onSubmit={addAdmin} action="">
                    <div className="add-admin">
                        <input onChange={change} name='email' placeholder="jon@gamil.com" className="form-control" id="email" type="email" />
                        <button className="btn-success">Submit</button>
                    </div>
                </form>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default MakeAdmin;