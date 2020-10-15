import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [logged, setLogged] = useContext(UserContext);
    // const token = sessionStorage.getItem('token');
    
    return (
            <Route
                {...rest}
                render={({ location }) =>
                    (logged.email ) ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
    );
};

export default PrivateRoute;